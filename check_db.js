const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    try {
        const count = await prisma.blog.count();
        console.log(`Total blogs in database: ${count}`);

        if (count > 0) {
            const blogs = await prisma.blog.findMany({ take: 3, select: { title: true, seoSlug: true } });
            console.log('Sample blogs:', blogs);
        }
    } catch (e) {
        console.error('Error connecting to DB:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
