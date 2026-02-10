import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Tier-1 Liquidity Access | Multi-Asset Institutional Liquidity',
    description: 'Access deep Tier-1 liquidity for Forex, Metals, Indices, Oil, and Crypto CFDs. Ultra-low latency execution and tight spreads for brokers and institutional clients.',
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/liquidity-access',
    },
    keywords: [
        'Tier-1 Liquidity Access',
        'Multi-asset Liquidity Provider',
        'Forex Liquidity',
        'Institutional Crypto CFDs',
        'Prime of Prime Liquidity',
        'Commodities Liquidity Feed',
    ],
    openGraph: {
        title: 'Tier-1 Liquidity Access | Multi-Asset Institutional Liquidity',
        description: 'Access deep Tier-1 liquidity for Forex, Metals, Indices, Oil, and Crypto CFDs. Ultra-low latency execution and tight spreads for brokers and institutional clients.',
        url: 'https://fxtrusts.com/solutions/liquidity-access',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tier-1 Liquidity Access | Multi-Asset Institutional Liquidity',
        description: 'Access deep Tier-1 liquidity for Forex, Metals, Indices, Oil, and Crypto CFDs. Ultra-low latency execution and tight spreads for brokers and institutional clients.',
    },
};

export default function LiquidityAccessPage() {
    const tableOfContents = [
        { id: 'solution', title: 'Tier-1 Liquidity Access Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Tier-1 Liquidity?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'MT5 White Label', href: '/solutions/mt5', readTime: '5 min' },
        { title: 'Institutional CRM', href: '/solutions/crm', readTime: '6 min' },
        { title: 'Crypto Payment Gateway', href: '/solutions/crypto-gateway', readTime: '4 min' },
    ];

    const quickFacts = [
        { label: 'Fill Rate', value: '99.9%' },
        { label: 'Avg Setup', value: '3-5 Days' },
        { label: 'Instruments', value: '100+' },
        { label: 'Support', value: '24/7' },
    ];

    const features = [
        'Raw Interbank Spreads',
        'Deep Market Depth (DoM)',
        'No Last Look Options',
        'Aggregated BBO Feed',
        'Institutional Crypto CFDs',
        'Spot Metals & Energies',
        'Global Equity Indices',
    ];

    const faqs = [
        {
            question: 'What is the minimum deposit required to access Tier-1 liquidity?',
            answer: 'To ensure a stable institutional environment, we typically require a minimum deposit of $5,000 for new brokerage accounts. This ensures sufficient margin for multi-asset trading.',
        },
        {
            question: 'Can I choose which Liquidity Providers I connect to?',
            answer: 'Yes. Depending on your volume and bridge setup, we can offer customized liquidity pools where you can select or exclude specific providers based on their performance or your regional needs.',
        },
        {
            question: 'Do you support Crypto CFD liquidity 24/7?',
            answer: 'Absolutely. Unlike traditional markets, our Crypto CFD liquidity is available 24 hours a day, 7 days a week, allowing your clients to trade digital assets even during the weekend.',
        },
        {
            question: 'How do I integrate the feed into my MT5 server?',
            answer: 'We provide the necessary Gateway or Bridge plugins to connect our liquidity directly to your MT5 server. Our technical team will handle the symbol mapping and connectivity tests for you.',
        },
        {
            question: 'What are the typical spreads for Forex majors?',
            answer: 'Our aggregated spreads are highly competitive, with EUR/USD often seeing 0.0 to 0.2 pips during active market sessions, plus a transparent commission per million traded.',
        },
        {
            question: 'Is there a volume requirement to maintain the feed?',
            answer: 'We support brokers of all sizes; however, to maintain a dedicated FIX API connection, we typically look for a minimum monthly turnover of $10 million. Smaller brokers can access the feed via our shared bridge infrastructure.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="Broker Infrastructure"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}
                title="Tier-1 Liquidity Access"
                subtitle="Power your brokerage with institutional-grade depth and ultra-competitive spreads. Connect to a diversified pool of Tier-1 banks and non-bank market makers to ensure superior execution for every asset class."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
            />

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Connect to Global Markets in 7 Days"
                ctaText="Gain immediate access to deep liquidity pools for Forex, Crypto, and more."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Our liquidity engineers can assist with custom feed configurations."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    <h1>Tier-1 Liquidity Access Solution</h1>
                    <p>
                        Tier-1 Liquidity Access provides brokers, hedge funds, and fintech founders with a direct gateway to the world’s most significant financial markets. By aggregating price feeds from top-tier investment banks and prime-of-prime providers, we offer a robust environment for A-Book execution. This solution eliminates the limitations of a single-source feed, providing the redundancy and depth required to manage high-volume trading and professional clientele.
                    </p>
                    <p>
                        Whether you are launching a new brokerage or optimizing an existing one, our multi-asset liquidity pool ensures that you remain competitive. We provide the stability needed to offer tight spreads on Forex majors, high-leverage Metals, global Indices, Energies (Oil/Gas), and the increasingly high-demand Crypto CFD market—all through a single, unified margin account.
                    </p>
                    <ul>
                        <li><strong>Diverse Asset Coverage:</strong> Single-point access to FX, Precious Metals, Energies, Indices, and Digital Assets.</li>
                        <li><strong>Tight Pricing & High Liquidity:</strong> Aggregated &quot;Best Bid/Best Offer&quot; (BBO) ensures your clients get the best available price in the market.</li>
                        <li><strong>Scalable Trading Environment:</strong> Built to support everything from micro-lots to large institutional tickets with minimal slippage.</li>
                        <li><strong>Full Transparency:</strong> Clear post-trade reporting and execution logs to verify fill quality and latency.</li>
                    </ul>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our liquidity infrastructure is optimized for institutional speed, ensuring that price discovery and execution happen in milliseconds.
                    </p>
                    {/* Note: Key stats are displayed in the Quick Facts sidebar for better visibility */}
                    <ul>
                        <li><strong>99.9%</strong> — Fill Rate on standard market orders during peak volatility.</li>
                        <li><strong>3-5 Days</strong> — Average setup for FIX API or Bridge integration.</li>
                        <li><strong>100+</strong> — Trading Instruments available across all asset classes.</li>
                        <li><strong>24/7</strong> — Technical Support for feed stability and connectivity.</li>
                    </ul>
                </div>

                <div id="why">
                    <h2>Why Tier-1 Liquidity?</h2>
                    <ul>
                        <li><strong>Institutional Price Depth:</strong> Access multiple levels of liquidity to ensure large orders are filled with minimal market impact.</li>
                        <li><strong>Competitive Edge:</strong> Raw spreads from Tier-1 providers allow you to offer the most attractive pricing to your retail and professional traders.</li>
                        <li><strong>Risk Management:</strong> Diversifying across multiple LPs protects your brokerage from the downtime or pricing gaps of a single provider.</li>
                        <li><strong>Rapid Execution:</strong> Low-latency fiber-optic connections to major data centers minimize the risk of requotes and slippage.</li>
                        <li><strong>Multi-Asset Efficiency:</strong> Manage all your risk and margins in one place, rather than maintaining separate capital across different providers.</li>
                        <li><strong>No &quot;Last Look&quot; Options:</strong> Access execution models that offer guaranteed fills without the provider having the option to reject trades.</li>
                        <li><strong>Regulatory Compliance:</strong> Our liquidity sources are vetted and follow global standards for financial market integrity.</li>
                    </ul>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        For brokers offering sub-white labels or institutional services, our liquidity solution allows you to maintain a professional, branded ecosystem for your partners.
                    </p>
                    <ul>
                        <li><strong>Custom Markup Profiles:</strong> Define your own spread markups and commissions per instrument or per client group to manage your revenue streams.</li>
                        <li><strong>Branded Reporting:</strong> Generate daily and monthly execution reports featuring your brokerage logo for your institutional or B2B clients.</li>
                        <li><strong>Proprietary Feed Naming:</strong> Name your liquidity streams (e.g., &quot;Prime-Gold Feed&quot;) within your trading server to differentiate your product tiers.</li>
                        <li><strong>Client API Documentation:</strong> Provide your own branded documentation for clients who wish to connect directly to your liquidity via FIX API.</li>
                    </ul>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        The stability of your liquidity feed depends on where it is hosted. Our infrastructure is colocated within the world&#39;s most critical financial ecosystems.
                    </p>
                    <h3>Data Center Locations</h3>
                    <ul>
                        <li><strong>London, UK</strong> - Equinix LD4 (Primary FX Hub)</li>
                        <li><strong>New York, USA</strong> - Equinix NY4 (Global Equities/FX)</li>
                        <li><strong>Tokyo, Japan</strong> - Equinix TY3 (Asian Market Hub)</li>
                        <li><strong>Singapore</strong> - Equinix SG1 (Emerging Market Access)</li>
                    </ul>
                    <h3>Infrastructure Specifications</h3>
                    <ul>
                        <li>High-speed cross-connects for sub-millisecond latency.</li>
                        <li>Redundant fiber-optic paths to prevent single points of failure.</li>
                        <li>Enterprise-grade DDoS protection for all API endpoints.</li>
                        <li>Hardware-level optimization for FIX protocol messaging.</li>
                        <li>Real-time monitoring of network jitter and packet loss.</li>
                    </ul>
                    <p>
                        <strong>SLA Statement:</strong> We guarantee a network availability of 99.9%. Our infrastructure is designed to handle extreme bursts of market data during high-impact economic news without performance degradation.
                    </p>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>
                        A comprehensive multi-asset offering designed to meet the needs of modern traders.
                    </p>
                    <h3>Trading Features</h3>
                    <ul>
                        <li><strong>Forex:</strong> 80+ pairs including majors, minors, and exotics.</li>
                        <li><strong>Metals:</strong> Spot Gold, Silver, Platinum, and Palladium with institutional depth.</li>
                        <li><strong>Indices:</strong> Global benchmarks including US30, GER40, UK100, and JPN225.</li>
                        <li><strong>Energies:</strong> WTI and Brent Crude Oil, plus Natural Gas.</li>
                        <li><strong>Crypto CFDs:</strong> High-liquidity pairs for BTC, ETH, and other major altcoins.</li>
                        <li><strong>Flexible Leverage:</strong> Asset-specific leverage options to suit your risk profile.</li>
                    </ul>
                    <h3>Analytics Tools</h3>
                    <ul>
                        <li>Real-time Depth of Market (DoM) visualizers.</li>
                        <li>Historical tick data availability for backtesting.</li>
                        <li>Rejection rate and slippage analysis per instrument.</li>
                        <li>Volume distribution reports across various liquidity sources.</li>
                    </ul>
                    <h3>Execution Technology</h3>
                    <ul>
                        <li>Aggregation of 20+ different liquidity sources.</li>
                        <li>Smart Order Routing (SOR) to find the best available price.</li>
                        <li>Support for Market, Limit, and Stop orders.</li>
                    </ul>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>
                        Our liquidity solution is built for easy integration with any professional trading setup.
                    </p>
                    <h3>Manager / Admin API</h3>
                    <ul>
                        <li>Real-time margin monitoring and balance management.</li>
                        <li>Instant adjustment of leverage and risk parameters.</li>
                        <li>Automated reporting for internal accounting systems.</li>
                    </ul>
                    <h3>Gateway & Connectivity API</h3>
                    <ul>
                        <li><strong>FIX API 4.4:</strong> The industry standard for institutional connectivity.</li>
                        <li><strong>Bridge Integration:</strong> Native support for Gold-i, OneZero, and PrimeXM bridges.</li>
                        <li><strong>Platform Support:</strong> Direct connectivity for MetaTrader 4, MetaTrader 5, and cTrader.</li>
                    </ul>
                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a comprehensive REST API for brokers who wish to display real-time pricing on their marketing websites or build custom trading applications. Our SDKs support multiple programming languages to ensure your development team can integrate our feeds quickly and efficiently.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>
                        Our pricing is transparent and designed to support the growth of your brokerage business.
                    </p>
                    <h3>What’s Included</h3>
                    <ul>
                        <li>Access to the full multi-asset liquidity pool.</li>
                        <li>Dedicated FIX API credentials.</li>
                        <li>Standard symbol mapping and configuration.</li>
                        <li>Daily execution and swap reports.</li>
                        <li>24/7 Technical account management.</li>
                        <li>Initial latency and execution testing.</li>
                    </ul>
                    <h3>Optional Add-Ons</h3>
                    <ul>
                        <li>Custom symbol naming and asset packaging.</li>
                        <li>Dedicated high-availability cross-connects.</li>
                        <li>Advanced B-Book risk management tools.</li>
                        <li>Specialized cryptocurrency liquidity for large-ticket sizes.</li>
                    </ul>
                    <h3>Setup Timeline</h3>
                    <ol>
                        <li><strong>Onboarding & Compliance (Days 1-3):</strong> Document submission and account opening.</li>
                        <li><strong>Connectivity Provisioning (Days 3-5):</strong> Setup of FIX API and cross-connects.</li>
                        <li><strong>Bridge Configuration (Days 5-7):</strong> Mapping symbols and configuring markups.</li>
                        <li><strong>Testing (Days 7-9):</strong> UAT and execution quality verification.</li>
                        <li><strong>Go-Live (Day 10):</strong> Production environment activation.</li>
                    </ol>
                </div>

                <div id="faq">
                    <h2>Frequently Asked Questions</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </ContentPageLayout>
        </main>
    );
}
