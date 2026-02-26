import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://fxtrusts.com';

    // Core pages
    const routes = [
        '',
        '/get-started',
        '/platform/crm',
        '/platform/mt5',
        '/platform/copy-trading',
        '/platform/mobile-app',
        '/platform/web-trader',
        '/platform/hosting',
        '/solutions/crm',
        '/solutions/mt5',
        '/solutions/liquidity',
        '/solutions/crypto-payments',
        '/solutions/prop-firm',
        '/solutions/risk-management',
        '/solutions/forex-broker',
        '/markets/forex',
        '/markets/crypto',
        '/markets/indices',
        '/markets/commodities',
        '/markets/stocks',
        '/company/about',
        '/company/contact',
        '/company/manifesto',
        '/press',

        '/resources/help-center',
        '/resources/api-docs',
        '/legal/privacy-policy',
        '/legal/terms-conditions',
        '/legal/refund-policy',
        '/legal/risk-disclosure',
        '/resources/guides/how-to-start-forex-broker',
        '/resources/guides/forex-crm-complete-guide',
        '/resources',
        '/resources/status',
        '/resources/comparisons/b2broker-alternative',
        '/resources/comparisons/leverate-alternative',
        '/resources/comparisons/match-trader-alternative',
        '/resources/comparisons/currencycloud-alternative',
        '/resources/comparisons/gold-i-alternative',
        '/resources/comparisons/onetrader-alternative',
        '/resources/blog',
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
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
