const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // 1. Create Admin User
    const adminEmail = 'admin@propfirm.com';
    const adminPassword = await bcrypt.hash('admin123', 10);

    const admin = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {},
        create: {
            email: adminEmail,
            name: 'Super Admin',
            password: adminPassword,
            role: 'ADMIN',
        },
    });

    console.log(`Created Admin: ${admin.email}`);

    // 2. Create Test Client
    const clientEmail = 'trader@propfirm.com';
    const clientPassword = await bcrypt.hash('trader123', 10);

    const client = await prisma.user.upsert({
        where: { email: clientEmail },
        update: {},
        create: {
            email: clientEmail,
            name: 'John Trader',
            password: clientPassword,
            role: 'USER',
            challenges: {
                create: {
                    planType: '100k Challenge',
                    initialBalance: 100000,
                    status: 'ACTIVE',
                    serverLogin: 123456, // Fake MT5 login
                }
            }
        },
    });

    console.log(`Created Client: ${client.email}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
