import { prisma } from '@/lib/prisma';
import { BlogStatus, Prisma } from '@prisma/client';

export const blogService = {
    // Get all published posts with pagination
    async getPosts(page = 1, limit = 9) {
        const skip = (page - 1) * limit;
        try {
            const [posts, total] = await Promise.all([
                prisma.blog.findMany({
                    where: { status: BlogStatus.published },
                    include: {
                        categories: {
                            include: { category: true }
                        }
                    },
                    orderBy: { createdAt: 'desc' },
                    skip,
                    take: limit,
                }),
                prisma.blog.count({ where: { status: BlogStatus.published } })
            ]);

            return {
                posts,
                pagination: {
                    total,
                    page,
                    limit,
                    totalPages: Math.ceil(total / limit)
                }
            };
        } catch (error) {
            console.error('Error fetching posts:', error);
            return { posts: [], pagination: { total: 0, page: 1, limit, totalPages: 0 } };
        }
    },

    // Get single post by slug
    async getPostBySlug(slug: string) {
        if (!slug) {
            console.error('[BlogService] getPostBySlug called with missing slug');
            return null;
        }
        console.log(`[BlogService] Fetching post for slug: ${slug}`);
        try {
            const post = await prisma.blog.findUnique({
                where: { seoSlug: slug },
                include: {
                    categories: {
                        include: { category: true }
                    },
                    seoMeta: true
                }
            });
            console.log(`[BlogService] Result for ${slug}:`, post ? 'Found' : 'Not Found');
            return post;
        } catch (error) {
            console.error('[BlogService] Error fetching post:', error);
            return null;
        }
    },

    // Get featured post (latest published for now, logic can change)
    async getFeaturedPost() {
        try {
            return await prisma.blog.findFirst({
                where: { status: BlogStatus.published },
                include: {
                    categories: {
                        include: { category: true }
                    }
                },
                orderBy: { views: 'desc' }, // Example: most viewed as featured
            });
        } catch (error) {
            console.error('Error fetching featured post:', error);
            return null;
        }
    }
};
