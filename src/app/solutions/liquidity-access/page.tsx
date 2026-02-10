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
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                99.9% Fill Rate
                            </h4>
                            <p>Consistent execution on standard market orders even during peak volatility.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                3-5 Days Setup
                            </h4>
                            <p>Average setup time for FIX API or Bridge integration.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                100+ Instruments
                            </h4>
                            <p>Trading Instruments available across all asset classes.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                                24/7 Support
                            </h4>
                            <p>Technical Support for feed stability and connectivity.</p>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why Tier-1 Liquidity?</h2>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                Institutional Depth
                            </h4>
                            <p>Access multiple levels of liquidity to ensure large orders are filled with minimal market impact.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                Competitive Edge
                            </h4>
                            <p>Raw spreads from Tier-1 providers allow you to offer the most attractive pricing to your traders.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Risk Management
                            </h4>
                            <p>Diversifying across multiple LPs protects your brokerage from downtime or pricing gaps.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                Rapid Execution
                            </h4>
                            <p>Low-latency fiber-optic connections to major data centers minimize requotes and slippage.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a4 4 0 0 0-4-4H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a4 4 0 0 1 4-4h6z" /></svg>
                                Multi-Asset Efficiency
                            </h4>
                            <p>Manage all your risk and margins in one place, rather than maintaining separate capital across providers.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
                                No "Last Look"
                            </h4>
                            <p>Access execution models that offer guaranteed fills without the provider having the option to reject trades.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Regulatory Compliance
                            </h4>
                            <p>Our liquidity sources are vetted and follow global standards for financial market integrity.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        For brokers offering sub-white labels or institutional services, our liquidity solution allows you to maintain a professional, branded ecosystem for your partners.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Custom Markups
                            </h4>
                            <p>Define your own spread markups and commissions per instrument or per client group.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Branded Reporting
                            </h4>
                            <p>Generate daily and monthly execution reports featuring your brokerage logo.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                Feed Naming
                            </h4>
                            <p>Name your liquidity streams (e.g., "Prime-Gold Feed") to differentiate your product tiers.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                API Docs
                            </h4>
                            <p>Provide your own branded documentation for clients connecting via FIX API.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        The stability of your liquidity feed depends on where it is hosted. Our infrastructure is colocated within the world&#39;s most critical financial ecosystems.
                    </p>
                    <h3>Data Center Locations</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                London, UK
                            </h4>
                            <p>Equinix LD4 (Primary FX Hub)</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                New York, USA
                            </h4>
                            <p>Equinix NY4 (Global Equities/FX)</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Tokyo, Japan
                            </h4>
                            <p>Equinix TY3 (Asian Market Hub)</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Singapore
                            </h4>
                            <p>Equinix SG1 (Emerging Market Access)</p>
                        </div>
                    </div>
                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                Low Latency
                            </h4>
                            <p>High-speed cross-connects for sub-millisecond latency.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                Redundancy
                            </h4>
                            <p>Redundant fiber-optic paths to prevent single points of failure.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                DDoS Protection
                            </h4>
                            <p>Enterprise-grade DDoS protection for all API endpoints.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                                Hardware Optimization
                            </h4>
                            <p>Hardware-level optimization for FIX protocol messaging.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                Real-time Monitoring
                            </h4>
                            <p>Real-time monitoring of network jitter and packet loss.</p>
                        </div>
                    </div>
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
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                Forex
                            </h4>
                            <p>80+ pairs including majors, minors, and exotics.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                Metals
                            </h4>
                            <p>Spot Gold, Silver, Platinum, and Palladium with institutional depth.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
                                Indices
                            </h4>
                            <p>Global benchmarks including US30, GER40, UK100, and JPN225.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                Energies
                            </h4>
                            <p>WTI and Brent Crude Oil, plus Natural Gas.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
                                Crypto CFDs
                            </h4>
                            <p>High-liquidity pairs for BTC, ETH, and other major altcoins.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Flexible Leverage
                            </h4>
                            <p>Asset-specific leverage options to suit your risk profile.</p>
                        </div>
                    </div>
                    <h3>Analytics Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                                Depth of Market
                            </h4>
                            <p>Real-time Depth of Market (DoM) visualizers.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                Historical Data
                            </h4>
                            <p>Historical tick data availability for backtesting.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Slippage Analysis
                            </h4>
                            <p>Rejection rate and slippage analysis per instrument.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
                                Volume Reports
                            </h4>
                            <p>Volume distribution reports across various liquidity sources.</p>
                        </div>
                    </div>
                    <h3>Execution Technology</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" /></svg>
                                Liquidity Aggregation
                            </h4>
                            <p>Aggregation of 20+ different liquidity sources.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                                Smart Order Routing
                            </h4>
                            <p>SOR to find the best available price.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                Order Types
                            </h4>
                            <p>Support for Market, Limit, and Stop orders.</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>
                        Our liquidity solution is built for easy integration with any professional trading setup.
                    </p>
                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                                Margin Monitoring
                            </h4>
                            <p>Real-time margin monitoring and balance management.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></svg>
                                Leverage Control
                            </h4>
                            <p>Instant adjustment of leverage and risk parameters.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Automated Reporting
                            </h4>
                            <p>Automated reporting for internal accounting systems.</p>
                        </div>
                    </div>
                    <h3>Gateway & Connectivity API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
                                FIX API 4.4
                            </h4>
                            <p>The industry standard for institutional connectivity.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                                Bridge Integration
                            </h4>
                            <p>Native support for Gold-i, OneZero, and PrimeXM bridges.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                Platform Support
                            </h4>
                            <p>Direct connectivity for MetaTrader 4, MetaTrader 5, and cTrader.</p>
                        </div>
                    </div>
                    <h3>Web API / SDK</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
                                REST API & SDKs
                            </h4>
                            <p>Comprehensive REST API for real-time pricing and SDKs supporting multiple languages for custom app building.</p>
                        </div>
                    </div>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>
                        Our pricing is transparent and designed to support the growth of your brokerage business.
                    </p>
                    <h3>What’s Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                Liquidity Pool
                            </h4>
                            <p>Access to the full multi-asset liquidity pool.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg>
                                FIX Credentials
                            </h4>
                            <p>Dedicated FIX API credentials.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
                                Symbol Mapping
                            </h4>
                            <p>Standard symbol mapping and configuration.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Execution Reports
                            </h4>
                            <p>Daily execution and swap reports.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                                Account Management
                            </h4>
                            <p>24/7 Technical account management.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Latency Testing
                            </h4>
                            <p>Initial latency and execution testing.</p>
                        </div>
                    </div>
                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                Custom Naming
                            </h4>
                            <p>Custom symbol naming and asset packaging.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                Cross-Connects
                            </h4>
                            <p>Dedicated high-availability cross-connects.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Risk Tools
                            </h4>
                            <p>Advanced B-Book risk management tools.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
                                Crypto Liquidity
                            </h4>
                            <p>Specialized cryptocurrency liquidity for large-ticket sizes.</p>
                        </div>
                    </div>
                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                                Onboarding
                            </h4>
                            <p>Document submission and account opening (Days 1-3).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                                Provisioning
                            </h4>
                            <p>Setup of FIX API and cross-connects (Days 3-5).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                                Bridge Config
                            </h4>
                            <p>Mapping symbols and configuring markups (Days 5-7).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                                User Testing
                            </h4>
                            <p>UAT and execution quality verification (Days 7-9).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>05</span>
                                Go-Live
                            </h4>
                            <p>Production environment activation (Day 10).</p>
                        </div>
                    </div>
                </div>

                <div id="faq">
                    <h2>Frequently Asked Questions</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </ContentPageLayout>
        </main>
    );
}
