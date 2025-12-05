import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://fxtrusts.com';

    // Core pages
    const routes = [
        '',
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
        '/company/about',
        '/company/contact',
        '/company/manifesto',
        '/pricing',
        '/resources/help-center',
        '/resources/api-docs',
        '/legal/privacy-policy',
        '/legal/terms-conditions',
        '/legal/refund-policy',
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
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
