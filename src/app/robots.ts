import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://fxtrusts.com';

    return {
        rules: [
            // Default rule for all crawlers
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/live-demo/admin', '/api/', '/private/'],
            },
            // Explicitly allow AI/LLM crawlers for GEO (Generative Engine Optimization)
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
            {
                userAgent: 'CCBot',
                allow: '/',
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            // Additional AI crawlers for comprehensive GEO
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            {
                userAgent: 'anthropic-ai',
                allow: '/',
            },
            {
                userAgent: 'Bytespider',
                allow: '/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
