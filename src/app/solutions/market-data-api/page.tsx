import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';

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
                    <ul>
                        <li><strong>Unrivaled Execution Speed:</strong> Low-latency feeds ensure that your trading engine acts on the most current price, reducing slippage.</li>
                        <li><strong>Cost-Efficient Scalability:</strong> Only pay for the data you use, with flexible tiers for both REST requests and WebSocket concurrent connections.</li>
                        <li><strong>Enhanced Backtesting:</strong> Use the same institutional data for backtesting that you use for live execution to ensure strategy consistency.</li>
                        <li><strong>Cross-Asset Versatility:</strong> Stream Forex, Crypto, and Metals through a single connection, simplifying your backend architecture.</li>
                        <li><strong>Market Depth Insights:</strong> Access Level 2 data (market depth) to analyze liquidity and predict short-term price movements.</li>
                        <li><strong>Clean Data Logic:</strong> Automated filtering of &quot;bad ticks&quot; and spikes ensures your charts and bots always display accurate market conditions.</li>
                        <li><strong>Developer-Centric UX:</strong> Comprehensive SDKs and JSON-based responses make integration straightforward for any modern tech stack.</li>
                    </ul>
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
                    <ul>
                        <li><strong>London, UK</strong> - Equinix LD4 (Direct Bank Cross-Connects)</li>
                        <li><strong>New York, USA</strong> - Equinix NY4</li>
                        <li><strong>Tokyo, Japan</strong> - Equinix TY3</li>
                        <li><strong>Singapore</strong> - SG1 (Asian Regional Hub)</li>
                    </ul>

                    <h3>Infrastructure Specifications</h3>
                    <ul>
                        <li><strong>Fiber Cross-Connects:</strong> Direct physical links to liquidity providers to eliminate internet-based lag.</li>
                        <li><strong>Load-Balanced Nodes:</strong> Geographically distributed WebSocket clusters for global low-latency access.</li>
                        <li><strong>DDoS Hardened:</strong> Enterprise-grade network filtering to prevent feed interruptions during volatility.</li>
                        <li><strong>NVMe Caching:</strong> Ultra-fast storage for rapid retrieval of historical candle and tick data.</li>
                        <li><strong>Failover Redundancy:</strong> Multiple secondary feeds per instrument to ensure a &quot;no-gap&quot; data experience.</li>
                    </ul>
                    <div className="infoBox">
                        <p><strong>Performance Statement:</strong> We guarantee [99.99%] uptime for our WebSocket streams. By utilizing our [London LD4] or [New York NY4] endpoints, users can achieve data delivery speeds as low as [X]ms.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Comprehensive data tools designed for developers of high-performance trading software.</p>

                    <h3>Data Delivery Features</h3>
                    <ul>
                        <li><strong>WebSocket Streams:</strong> Real-time push updates for Bid/Ask, Last Price, and Volume.</li>
                        <li><strong>REST Endpoints:</strong> On-demand requests for snapshots, account info, and status.</li>
                        <li><strong>Level 2 Data:</strong> Full order book visibility for supported instruments.</li>
                        <li><strong>OHLCV Bars:</strong> Customizable timeframes (1m, 5m, 1h, 1d) for charting.</li>
                        <li><strong>Tick-by-Tick History:</strong> Access the granular detail of every price change.</li>
                    </ul>

                    <h3>Analytics & Metadata</h3>
                    <ul>
                        <li><strong>Symbol Search:</strong> Fuzzy-matching API to find instruments across exchanges.</li>
                        <li><strong>Currency Conversion:</strong> Automated cross-rate calculation for non-standard pairs.</li>
                        <li><strong>Market Status:</strong> Real-time info on exchange holidays and trading sessions.</li>
                    </ul>

                    <h3>Developer Tools</h3>
                    <ul>
                        <li><strong>Request Throttling Control:</strong> Real-time headers to monitor your quota usage.</li>
                        <li><strong>Webhooks:</strong> Trigger events in your backend based on specific price hits.</li>
                        <li><strong>Sandbox Environment:</strong> Full-featured testing environment for safe development.</li>
                    </ul>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>Our APIs are built to be the foundational layer for any financial application.</p>

                    <h3>Manager / Admin API</h3>
                    <ul>
                        <li>Manage API keys, permissions, and IP whitelisting for your team.</li>
                        <li>Monitor real-time usage metrics and data consumption costs.</li>
                        <li>Configure custom &quot;spread markups&quot; for data reselling or client-facing apps.</li>
                    </ul>

                    <h3>Gateway & Connectivity API</h3>
                    <ul>
                        <li><strong>JSON REST API:</strong> Industry-standard responses for easy parsing in any language.</li>
                        <li><strong>Secure WebSockets (WSS):</strong> Encrypted, persistent connections for live streaming.</li>
                        <li><strong>FIX API:</strong> (Optional) Institutional-standard connectivity for ultra-low latency.</li>
                    </ul>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide comprehensive SDKs for Node.js, Python, C#, and Go. Our documentation includes interactive examples (Swagger/OpenAPI) that allow you to test requests directly in your browser. Whether you are building a server-side bot or a client-side React dashboard, our SDKs handle the heavy lifting of connection management and reconnection logic.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is tiered based on the number of instruments tracked and the volume of monthly requests/connections.</p>

                    <h3>What’s Included</h3>
                    <ul>
                        <li>Full access to REST and WebSocket documentation.</li>
                        <li>Global access to [X] locations for lowest latency.</li>
                        <li>Standard [X] years of historical OHLC data.</li>
                        <li>Unlimited instrument watchlists.</li>
                        <li>[24/7] Technical support for API integration.</li>
                        <li>Regular data expansion and security updates.</li>
                    </ul>

                    <h3>Optional Add-Ons</h3>
                    <ul>
                        <li>Level 2 (Market Depth) data access.</li>
                        <li>Extended Tick-level history (10+ years).</li>
                        <li>Dedicated, non-throttled API lanes for HFT.</li>
                        <li>Professional services for custom data mapping.</li>
                    </ul>

                    <h3>Setup Timeline</h3>
                    <ol>
                        <li><strong>Account Creation (Minute 0):</strong> Register and verify your developer profile.</li>
                        <li><strong>API Key Issuance (Minute 2):</strong> Generate Sandbox and Production keys.</li>
                        <li><strong>Sandbox Integration (Hours 1-4):</strong> Build your connection logic in our test environment.</li>
                        <li><strong>Production Migration (Day 1):</strong> Switch to live feeds and verify data integrity.</li>
                        <li><strong>Go-Live (Day [X]):</strong> Your application is powered by institutional-grade data.</li>
                    </ol>
                </div>

                <div id="faq">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faqGrid">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faqItem">
                                <h4>{faq.question}</h4>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentPageLayout>
        </main>
    );
}
