import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Market Data APIs | Real-Time REST & WebSocket Feeds',
    description: 'Power your platform with institutional-grade Market Data APIs. Access ultra-low latency REST and WebSocket feeds for Forex, Crypto, Stocks, and Indices.',
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/market-data-api',
    },
    keywords: [
        'Market Data API',
        'Real-time Forex Feed',
        'WebSocket Market Data',
        'Financial Data API',
        'Trading Pricing Feed',
        'Crypto Price API',
    ],
    openGraph: {
        title: 'Market Data APIs | Real-Time REST & WebSocket Feeds',
        description: 'Power your platform with institutional-grade Market Data APIs. Access ultra-low latency REST and WebSocket feeds for Forex, Crypto, Stocks, and Indices.',
        url: 'https://fxtrusts.com/solutions/market-data-api',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Market Data APIs | Real-Time REST & WebSocket Feeds',
        description: 'Power your platform with institutional-grade Market Data APIs. Access ultra-low latency REST and WebSocket feeds for Forex, Crypto, Stocks, and Indices.',
    },
};

export default function MarketDataApiPage() {
    const tableOfContents = [
        { id: 'solution', title: 'Market Data APIs Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Market Data APIs?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'Liquidity Access', href: '/solutions/liquidity-access', readTime: '5 min' },
        { title: 'Cryto Gateway', href: '/solutions/crypto-gateway', readTime: '4 min' },
        { title: 'MT5 White Label', href: '/solutions/mt5', readTime: '5 min' }, // Assuming MT5 is relevant
    ];

    const quickFacts = [
        { label: 'Uptime SLA', value: '99.99%' },
        { label: 'Latency', value: 'X ms' },
        { label: 'Instruments', value: '1,000+' },
        { label: 'Monitoring', value: '24/7' },
    ];

    const features = [
        'Real-Time WebSocket Streaming',
        'Historical OHLC Data',
        'Multi-Asset Coverage',
        'Cross-Platform SDKs',
        'Fractional Pip Accuracy',
        'Market Depth (Level 2)',
        'Automated Failover'
    ];

    const faqs = [
        {
            question: 'What is the difference between your REST and WebSocket APIs?',
            answer: 'Use the REST API for one-off tasks like fetching historical charts or checking current account balances. Use the WebSocket API for real-time trading and live charts, as it "pushes" updates to you the moment they happen without needing to ask.',
        },
        {
            question: 'How much history can I retrieve?',
            answer: 'By default, we provide up to [X] years of OHLC data on most major pairs. Tick-level history is available for the last [X] days/months depending on your subscription tier.',
        },
        {
            question: 'Do you support Level 2 (Depth of Market) data?',
            answer: 'Yes. For supported institutional feeds and major exchanges, we provide Level 2 data via WebSocket, allowing you to see the bid/ask volume across the order book.',
        },
        {
            question: 'How do I handle connection drops in WebSockets?',
            answer: 'Our SDKs include automated reconnection logic with exponential backoff. This ensures that if your internet or our server has a brief hiccup, your application will re-establish the stream instantly.',
        },
        {
            question: 'What is the minimum requirement to start?',
            answer: 'You simply need a developer who can make HTTP requests or open WebSocket connections. Our documentation provides code snippets in all major languages to get you started immediately.',
        },
        {
            question: 'Are there limits on the number of requests?',
            answer: 'Yes, each tier has a Rate Limit to ensure fair usage. However, our WebSocket feeds allow for thousands of price updates per second on a single connection, which is significantly more efficient than REST polling.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="Broker Infrastructure"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>}
                title="Market Data APIs"
                subtitle="Fuel your trading applications, analytical tools, and brokerage engines with the industry’s most reliable data. Our Market Data APIs deliver institutional-grade pricing via high-speed REST and WebSocket protocols."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
                benefits={[
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>,
                        text: "Sub-ms Latency"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>, // Simplified cloud/network representation
                        text: "Real-Time WebSockets"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>,
                        text: "1,000+ Instruments"
                    }
                ]}
            />

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Power Your Apps in [X Minutes]"
                ctaText="Get instant access to raw, unfiltered market data for your proprietary trading tools."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Our integration engineers can help you optimize your data consumption architecture."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Market Data APIs | Real-Time REST & WebSocket Feeds","description":"Power your platform with institutional-grade Market Data APIs. Access ultra-low latency REST and WebSocket feeds for Forex, Crypto, Stocks, and Indices.","url":"https://fxtrusts.com/solutions/market-data-api"}) }}
      />
      <h1>Market Data APIs Solution</h1>
                    <p>
                        Market Data APIs are the lifeblood of modern fintech. Whether you are building a custom trading terminal, a mobile portfolio tracker, or a sophisticated algorithmic strategy, the quality of your execution is fundamentally limited by the quality of your data. Our API solution provides a seamless, high-performance gateway to global financial markets. We bypass the delays of retail-grade providers by delivering raw feeds directly from institutional liquidity hubs.
                    </p>
                    <p>
                        Our infrastructure supports two primary delivery methods: WebSocket for real-time, bi-directional streaming and REST for on-demand requests and historical data retrieval. This dual-access model allows developers to optimize their applications for both speed and efficiency. With a focus on developers and fintech founders, our documentation is designed to get your environment live and streaming data in minutes, not weeks.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Raw Institutional Feeds</h3>
                            <p className="text-sm text-gray-700">Direct, unfiltered pricing from top-tier liquidity providers and global exchanges.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Bi-Directional Streaming</h3>
                            <p className="text-sm text-gray-700">Utilize WebSockets for &quot;push&quot; updates, eliminating the overhead of constant polling.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Deep Historical Archives</h3>
                            <p className="text-sm text-gray-700">Access years of tick and bar data to backtest strategies with institutional accuracy.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Scalable Data Architecture</h3>
                            <p className="text-sm text-gray-700">From small-scale startups to enterprise-level brokers, our API scales with your request volume.</p>
                        </div>
                    </div>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our data distribution engine is optimized for high-throughput environments, ensuring that every tick is delivered with absolute precision.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>99.99%</strong>
                            <span>Feed Availability SLA</span>
                        </div>
                        <div className="statBox">
                            <strong>X ms</strong>
                            <span>Average Latency</span>
                        </div>
                        <div className="statBox">
                            <strong>1,000+</strong>
                            <span>Tradable Instruments</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Global Monitoring</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why Market Data APIs?</h2>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                Speed
                            </h4>
                            <p>Unrivaled Execution Speed: Low-latency feeds ensure that your trading engine acts on the most current price, reducing slippage.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 2v20M2 12h20" /><path d="M22 2l-10 10-10-10" /></svg>
                                Scalability
                            </h4>
                            <p>Cost-Efficient Scalability: Only pay for the data you use, with flexible tiers for both REST requests and WebSocket concurrent connections.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                                Backtesting
                            </h4>
                            <p>Enhanced Backtesting: Use the same institutional data for backtesting that you use for live execution to ensure strategy consistency.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Versatility
                            </h4>
                            <p>Cross-Asset Versatility: Stream Forex, Crypto, and Metals through a single connection, simplifying your backend architecture.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
                                Depth
                            </h4>
                            <p>Market Depth Insights: Access Level 2 data (market depth) to analyze liquidity and predict short-term price movements.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                Logic
                            </h4>
                            <p>Clean Data Logic: Automated filtering of "bad ticks" and spikes ensures your charts and bots always display accurate market conditions.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                UX
                            </h4>
                            <p>Developer-Centric UX: Comprehensive SDKs and JSON-based responses make integration straightforward for any modern tech stack.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        For brokers and signal providers, our data can be used to power your own proprietary client-facing tools under your own brand.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                Proprietary Web Terminals
                            </h4>
                            <p>Fuel your own custom-built trading interface with our high-speed feeds while maintaining complete UI/UX control.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                Branded Mobile Dashboards
                            </h4>
                            <p>Provide your clients with real-time price alerts and portfolio tracking within your own branded mobile app.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                                Custom Data Widgets
                            </h4>
                            <p>Embed live price tickers and sentiment bars on your website that match your firm&apos;s specific brand guidelines.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                                Client-Facing APIs
                            </h4>
                            <p>Offer your high-volume clients their own &quot;branded&quot; API access, powered by our backend but managed through your portal.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        Market data delivery requires proximity. We host our distribution nodes in the heart of the world&apos;s financial data centers.
                    </p>
                    <h3>Data Center Locations</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                London
                            </h4>
                            <p>London, UK - Equinix LD4 (Direct Bank Cross-Connects)</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                New York
                            </h4>
                            <p>New York, USA - Equinix NY4</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Tokyo
                            </h4>
                            <p>Tokyo, Japan - Equinix TY3</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Singapore
                            </h4>
                            <p>Singapore - SG1 (Asian Regional Hub)</p>
                        </div>
                    </div>

                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12" y2="20" /></svg>
                                Fiber
                            </h4>
                            <p>Fiber Cross-Connects: Direct physical links to liquidity providers to eliminate internet-based lag.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                                Nodes
                            </h4>
                            <p>Load-Balanced Nodes: Geographically distributed WebSocket clusters for global low-latency access.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                DDoS
                            </h4>
                            <p>DDoS Hardened: Enterprise-grade network filtering to prevent feed interruptions during volatility.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                NVMe
                            </h4>
                            <p>NVMe Caching: Ultra-fast storage for rapid retrieval of historical candle and tick data.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" /></svg>
                                Failover
                            </h4>
                            <p>Failover Redundancy: Multiple secondary feeds per instrument to ensure a "no-gap" data experience.</p>
                        </div>
                    </div>
                    <div className="infoBox">
                        <p><strong>Performance Statement:</strong> We guarantee [99.99%] uptime for our WebSocket streams. By utilizing our [London LD4] or [New York NY4] endpoints, users can achieve data delivery speeds as low as [X]ms.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Comprehensive data tools designed for developers of high-performance trading software.</p>

                    <h3>Data Delivery Features</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></svg>
                                WebSocket
                            </h4>
                            <p>WebSocket Streams: Real-time push updates for Bid/Ask, Last Price, and Volume.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                REST
                            </h4>
                            <p>REST Endpoints: On-demand requests for snapshots, account info, and status.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
                                Level 2
                            </h4>
                            <p>Level 2 Data: Full order book visibility for supported instruments.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                OHLCV
                            </h4>
                            <p>OHLCV Bars: Customizable timeframes (1m, 5m, 1h, 1d) for charting.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                History
                            </h4>
                            <p>Tick-by-Tick History: Access the granular detail of every price change.</p>
                        </div>
                    </div>

                    <h3>Analytics & Metadata</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                Search
                            </h4>
                            <p>Symbol Search: Fuzzy-matching API to find instruments across exchanges.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 2v20M2 12h20" /><path d="M22 2l-10 10-10-10" /></svg>
                                Conversion
                            </h4>
                            <p>Currency Conversion: Automated cross-rate calculation for non-standard pairs.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                Status
                            </h4>
                            <p>Market Status: Real-time info on exchange holidays and trading sessions.</p>
                        </div>
                    </div>

                    <h3>Developer Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" /></svg>
                                Throttling
                            </h4>
                            <p>Request Throttling Control: Real-time headers to monitor your quota usage.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
                                Webhooks
                            </h4>
                            <p>Webhooks: Trigger events in your backend based on specific price hits.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                Sandbox
                            </h4>
                            <p>Sandbox Environment: Full-featured testing environment for safe development.</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>Our APIs are built to be the foundational layer for any financial application.</p>

                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></svg>
                                Permissions
                            </h4>
                            <p>Manage API keys, permissions, and IP whitelisting for your team.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                Metrics
                            </h4>
                            <p>Monitor real-time usage metrics and data consumption costs.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 2v20M2 12h20" /><path d="M22 2l-10 10-10-10" /></svg>
                                Markups
                            </h4>
                            <p>Configure custom "spread markups" for data reselling or client-facing apps.</p>
                        </div>
                    </div>

                    <h3>Gateway & Connectivity API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                REST
                            </h4>
                            <p>JSON REST API: Industry-standard responses for easy parsing in any language.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                                WSS
                            </h4>
                            <p>Secure WebSockets (WSS): Encrypted, persistent connections for live streaming.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                FIX
                            </h4>
                            <p>FIX API: (Optional) Institutional-standard connectivity for ultra-low latency.</p>
                        </div>
                    </div>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide comprehensive SDKs for Node.js, Python, C#, and Go. Our documentation includes interactive examples (Swagger/OpenAPI) that allow you to test requests directly in your browser. Whether you are building a server-side bot or a client-side React dashboard, our SDKs handle the heavy lifting of connection management and reconnection logic.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is tiered based on the number of instruments tracked and the volume of monthly requests/connections.</p>

                    <h3>What’s Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Docs
                            </h4>
                            <p>Full access to REST and WebSocket documentation.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Access
                            </h4>
                            <p>Global access to [X] locations for lowest latency.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
                                History
                            </h4>
                            <p>Standard [X] years of historical OHLC data.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                Watchlists
                            </h4>
                            <p>Unlimited instrument watchlists.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
                                Support
                            </h4>
                            <p>[24/7] Technical support for API integration.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3" /></svg>
                                Updates
                            </h4>
                            <p>Regular data expansion and security updates.</p>
                        </div>
                    </div>

                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
                                Level 2
                            </h4>
                            <p>Level 2 (Market Depth) data access.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                Extended
                            </h4>
                            <p>Extended Tick-level history (10+ years).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                HFT
                            </h4>
                            <p>Dedicated, non-throttled API lanes for HFT.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                                Custom
                            </h4>
                            <p>Professional services for custom data mapping.</p>
                        </div>
                    </div>

                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>01</span>
                                Account
                            </h4>
                            <p>Account Creation (Minute 0): Register and verify your developer profile.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>02</span>
                                Keys
                            </h4>
                            <p>API Key Issuance (Minute 2): Generate Sandbox and Production keys.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>03</span>
                                Sandbox
                            </h4>
                            <p>Sandbox Integration (Hours 1-4): Build your connection logic in our test environment.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>04</span>
                                Production
                            </h4>
                            <p>Production Migration (Day 1): Switch to live feeds and verify data integrity.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>05</span>
                                Go-Live
                            </h4>
                            <p>Go-Live (Day [X]): Your application is powered by institutional-grade data.</p>
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
