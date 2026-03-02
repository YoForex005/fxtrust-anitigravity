const express = require('express');
const router = express.Router();
const { authenticateToken, prisma } = require('../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'yo_forex_secure_secret_key_2026';

// Health Check (Public)
router.get('/health', (req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() });
});

// Register
router.post('/register', async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { email, password: hashedPassword, name }
        });
        const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET);
        res.json({ token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
    } catch (error) {
        console.error(error);
        if (error.code === 'P2002') return res.status(400).json({ message: 'Email already exists' });
        res.status(500).json({ error: error.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET);
        res.json({ token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get My Profile (Protected)
router.get('/profile', authenticateToken, async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.userId },
            include: { challenges: true }
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Purchase Challenge (Simple Mock for now)
router.post('/purchase', authenticateToken, async (req, res) => {
    const { planType, amount } = req.body;
    // In a real app, verify Stripe payment here first

    try {
        const challenge = await prisma.challenge.create({
            data: {
                userId: req.user.userId,
                planType: planType,
                initialBalance: amount,
                phase: 1,
                status: 'PENDING' // Set to PENDING until MT5 account is created
            }
        });

        // Notify or Trigger MT5 creation (could be async)

        res.json({ success: true, challenge });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// =========================================================================
// MOCK MT5 / ANALYTICS ENDPOINTS (To prevent Frontend Errors)
// =========================================================================

// Drawdown Metrics
router.get('/analytics/drawdown/:login', authenticateToken, (req, res) => {
    // Return mock data for now
    res.json({
        success: true,
        metrics: {
            day_profit: 0,
            max_daily_loss: 0,
            max_loss: 0
        }
    });
});

// Open Positions
router.get('/mt5/open-trades/:login', authenticateToken, (req, res) => {
    res.json({
        success: true,
        positions: [],
        total_profit: 0,
        total_swap: 0,
        count: 0
    });
});

module.exports = router;
