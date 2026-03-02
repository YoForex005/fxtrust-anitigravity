const express = require('express');
const router = express.Router();
const { authenticateToken, requireRole, prisma } = require('../middleware/auth');
const bcrypt = require('bcryptjs');

// Apply Admin restriction to all routes here
router.use(authenticateToken);
router.use(requireRole('ADMIN'));

// Get Dashboard Stats
router.get('/stats', async (req, res) => {
    try {
        const totalUsers = await prisma.user.count({ where: { role: 'USER' } });

        // Active Accounts (Funded)
        const activeAccounts = await prisma.challenge.count({
            where: {
                status: 'ACTIVE',
                accountType: 'FUNDED'
            }
        });

        // Total Profit Payout (Sum of Approved Payouts)
        const payouts = await prisma.payout.aggregate({
            _sum: {
                amount: true
            },
            where: {
                status: 'APPROVED'
            }
        });

        const totalProfitPayout = payouts._sum.amount || 0;

        // Total Drawdown (Simplified: Sum of initialBalance - equity for FAILED accounts)
        // Note: In a real system, this would be more complex.
        const failedChallenges = await prisma.challenge.findMany({
            where: { status: 'FAILED' },
            select: { initialBalance: true, equity: true }
        });

        const totalDrawdown = failedChallenges.reduce((acc, curr) => {
            // Assuming equity is remaining balance. If equity is null, treat as 0.
            const loss = curr.equity ? (curr.initialBalance - curr.equity) : curr.initialBalance;
            return acc + (loss > 0 ? loss : 0);
        }, 0);

        res.json({
            totalUsers,
            activeAccounts,
            totalProfitPayout,
            totalDrawdown
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Users (with computed stats for the table)
router.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            where: { role: 'USER' },
            include: {
                challenges: true
            },
            orderBy: { createdAt: 'desc' }
        });

        // Transform data to match UI requirements
        const formattedUsers = users.map(user => {
            const activeChallenges = user.challenges.filter(c => c.status === 'ACTIVE' && c.accountType === 'CHALLENGE');
            const fundedAccounts = user.challenges.filter(c => c.accountType === 'FUNDED');

            return {
                id: user.id,
                login: user.challenges[0]?.serverLogin || 'N/A', // Just pick first login or N/A
                name: user.name || 'Unknown',
                email: user.email,
                apiToken: user.apiToken,
                accounts: {
                    cur: fundedAccounts.length,
                    max: 1 // Hardcoded limit for now, or fetch from system settings
                },
                challenges: {
                    cur: activeChallenges.length,
                    max: 3 // Hardcoded limit
                },
                imp: user.imp || 'go',
                tags: user.tags,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            };
        });

        res.json(formattedUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Single User Detail
router.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) },
            include: { challenges: true, payouts: true }
        });
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Compute stats
        const activeChallenges = user.challenges.filter(c => c.status === 'ACTIVE' && c.accountType === 'CHALLENGE');
        const fundedAccounts = user.challenges.filter(c => c.accountType === 'FUNDED');

        const responseData = {
            ...user,
            stats: {
                maxChallenges: 3,
                maxFunded: 1,
                activeChallengesCount: activeChallenges.length,
                fundedAccountsCount: fundedAccounts.length
            }
        };

        res.json(responseData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update User (Edit)
router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, password, tags } = req.body;

    try {
        const updateData = {
            name,
            email,
            tags
        };

        // Only update password if provided
        if (password && password.trim() !== '') {
            updateData.password = await bcrypt.hash(password, 10);
        }

        const user = await prisma.user.update({
            where: { id: parseInt(id) },
            data: updateData
        });

        res.json({ success: true, user });
    } catch (error) {
        // Handle unique constraint violation (email)
        if (error.code === 'P2002') {
            return res.status(400).json({ message: 'Email already exists' });
        }
        res.status(500).json({ error: error.message });
    }
});

// Delete User
router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        // First delete related records (Cascade delete manually if not set in DB)
        // Prisma schema should handle this if configured, but let's be safe:
        // Delete challenges, payouts, logs first.
        // For now, assuming Prisma 'OnDelete: Cascade' or manual deletion needed.
        // Let's rely on Prisma schema (if Cascade is set) or do strictly:

        await prisma.challenge.deleteMany({ where: { userId: parseInt(id) } });
        await prisma.payout.deleteMany({ where: { userId: parseInt(id) } });
        await prisma.auditLog.deleteMany({ where: { userId: parseInt(id) } });

        await prisma.user.delete({
            where: { id: parseInt(id) }
        });

        res.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Approve/Reject Payout
router.post('/payouts/:id/action', async (req, res) => {
    const { id } = req.params;
    const { action } = req.body; // 'approve' or 'reject'

    try {
        const payout = await prisma.payout.findUnique({ where: { id: parseInt(id) } });
        if (!payout) return res.status(404).json({ message: 'Payout not found' });

        const status = action === 'approve' ? 'APPROVED' : 'REJECTED';

        await prisma.payout.update({
            where: { id: parseInt(id) },
            data: {
                status: status,
                processedAt: new Date()
            }
        });

        res.json({ success: true, message: 'Payout ' + status });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
