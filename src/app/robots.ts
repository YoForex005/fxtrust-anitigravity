import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/live-demo/admin', '/api/'],
        },
        sitemap: 'https://fxtrusts.com/sitemap.xml',
    };
}
