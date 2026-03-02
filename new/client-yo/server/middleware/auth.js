const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'yo_forex_secure_secret_key_2026';

// Middleware to verify token
const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        
        // Optional: Check if user still exists in DB
        // const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
        // if (!user) return res.status(401).json({ message: 'User not found.' });

        next();
    } catch (error) {
        console.error('Auth Error:', error.message);
        return res.status(403).json({ message: 'Invalid token.' });
    }
};

// Middleware to check specific role
const requireRole = (role) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized.' });
        }
        if (req.user.role !== role) {
            return res.status(403).json({ message: `Access denied. Requires ${role} role.` });
        }
        next();
    };
};

module.exports = { authenticateToken, requireRole, prisma };
