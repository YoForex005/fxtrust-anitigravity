import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://fxtrusts.com';

    // High-priority pages (homepage + primary landing pages)
    const highPriority: string[] = [
        '',
        '/get-started',
        '/pricing',
        '/solutions/prop-firm',
        '/solutions/forex-broker',
        '/solutions/crm',
        '/solutions/mt5',
    ];

    // Standard public pages
    const standardRoutes: string[] = [
        // Platform
        '/platform/crm',
        '/platform/mt5',
        '/platform/copy-trading',
        '/platform/mobile-app',
        '/platform/web-trader',
        '/platform/hosting',

        // Solutions (complete)
        '/solutions/automated-payouts',
        '/solutions/branded-website',
        '/solutions/copy-trading',
        '/solutions/crypto-gateway',
        '/solutions/crypto-payments',
        '/solutions/economic-calendar',
        '/solutions/evaluation-engine',
        '/solutions/fiat-psp',
        '/solutions/forex-licensing',
        '/solutions/kyc-aml-verification',
        '/solutions/leaderboards',
        '/solutions/liquidity',
        '/solutions/liquidity-access',
        '/solutions/mam',
        '/solutions/market-data-api',
        '/solutions/mobile-app-wl',
        '/solutions/offshore-formation',
        '/solutions/pamm',
        '/solutions/prop-challenge-manager',
        '/solutions/prop-risk-dashboard',
        '/solutions/prop-trader-dashboard',
        '/solutions/report-server',
        '/solutions/risk-management',
        '/solutions/technical-support',
        '/solutions/trade-copier',
        '/solutions/traders-room',
        '/solutions/vps-hosting',
        '/solutions/wallet-system',

        // Markets
        '/markets/forex',
        '/markets/crypto',
        '/markets/indices',
        '/markets/commodities',
        '/markets/stocks',

        // Company
        '/company/about',
        '/company/contact',
        '/company/manifesto',
        '/press',
        '/blog',
        '/docs',

        // Resources
        '/resources',
        '/resources/help-center',
        '/resources/api-docs',
        '/resources/status',
        '/resources/blog',

        // Guides
        '/resources/guides/how-to-start-forex-broker',
        '/resources/guides/forex-crm-complete-guide',

        // Comparisons
        '/resources/comparisons/b2broker-alternative',
        '/resources/comparisons/leverate-alternative',
        '/resources/comparisons/match-trader-alternative',
        '/resources/comparisons/currencycloud-alternative',
        '/resources/comparisons/gold-i-alternative',
        '/resources/comparisons/onetrader-alternative',

        // Blog posts
        '/resources/blog/best-forex-crm-providers-2025',
        '/resources/blog/mt4-vs-mt5-crm',
        '/resources/blog/forex-broker-crm-pricing-exposed',
        '/resources/blog/why-we-refuse-to-charge-setup-fees',
        '/resources/blog/how-to-start-forex-brokerage-2025',
        '/resources/blog/mt5-white-label-complete-guide',
        '/resources/blog/forex-crm-pricing-decoded',
        '/resources/blog/how-to-start-prop-firm-2025',
        '/resources/blog/a-book-vs-b-book-explained',
        '/resources/blog/forex-liquidity-providers-guide',

        // Legal
        '/legal/privacy-policy',
        '/legal/terms-conditions',
        '/legal/refund-policy',
        '/legal/risk-disclosure',

        // Live Demo landing pages
        '/live-demo',
        '/prop-firm/live-demo',
    ];

    const highPriorityEntries: MetadataRoute.Sitemap = highPriority.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.9,
    }));

    const standardEntries: MetadataRoute.Sitemap = standardRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...highPriorityEntries, ...standardEntries];
}
