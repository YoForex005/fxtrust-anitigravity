import { Metadata } from 'next';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
    title: 'Forex Trading | Trade 80+ Currency Pairs | FxTrusts',
    description: 'Access the global forex market with institutional-grade spreads, deep liquidity, and ultra-low latency execution. Trade major, minor, and exotic currency pairs.',
    keywords: ['forex trading', 'currency pairs', 'forex broker', 'forex spreads', 'forex liquidity'],
};

export default function ForexPage() {
    const tableOfContents = [
        { id: 'overview', title: 'Market Overview' },
        { id: 'pairs', title: 'Currency Pairs' },
        { id: 'conditions', title: 'Trading Conditions' },
        { id: 'liquidity', title: 'Liquidity Providers' },
        { id: 'technology', title: 'Technology Stack' },
        { id: 'getting-started', title: 'Getting Started' },
    ];

    const relatedLinks = [
        { title: 'Crypto Trading', href: '/markets/crypto', readTime: '5 min' },
        { title: 'Indices Trading', href: '/markets/indices', readTime: '4 min' },
        { title: 'How to Start a Forex Broker', href: '/resources/guides/how-to-start-forex-broker', readTime: '22 min' },
    ];

    const quickFacts = [
        { label: 'Currency Pairs', value: '80+' },
        { label: 'Min Spread', value: '0.0 pips' },
        { label: 'Max Leverage', value: 'Up to 1:500' },
        { label: 'Execution', value: '<10ms' },
    ];

    return (
        <main>
            <PageHeader
                title="Forex Trading"
                subtitle="Access the world's largest financial market with institutional-grade infrastructure."
                badge="Markets"
            />
            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Launch Your Forex Brokerage"
                ctaText="Get institutional spreads and deep liquidity for your clients."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
            >
                <h1>Forex Trading Infrastructure</h1>
                <p>
                    The foreign exchange market is the largest and most liquid financial market in the world, with over $7.5 trillion traded daily. At FxTrusts, we provide the technology infrastructure that enables brokerages to offer their clients seamless access to this massive market with institutional-grade execution and competitive pricing.
                </p>

                <h2 id="overview">Market Overview</h2>
                <p>
                    Forex trading operates 24 hours a day, five days a week, across major financial centers including London, New York, Tokyo, and Sydney. This continuous trading cycle offers unique opportunities for brokerages to serve clients in any timezone, maximizing revenue potential and client engagement.
                </p>
                <p>
                    Our platform connects your brokerage directly to Tier-1 liquidity providers, ensuring your clients receive the best possible pricing regardless of market conditions. Whether during high-volatility news events or quiet overnight sessions, our infrastructure maintains consistent execution quality.
                </p>

                <div className="statsGrid">
                    <div className="statBox">
                        <strong>$7.5T</strong>
                        <span>Daily Volume</span>
                    </div>
                    <div className="statBox">
                        <strong>24/5</strong>
                        <span>Market Hours</span>
                    </div>
                    <div className="statBox">
                        <strong>180+</strong>
                        <span>Countries</span>
                    </div>
                    <div className="statBox">
                        <strong>8.4ms</strong>
                        <span>Avg Latency</span>
                    </div>
                </div>

                <h2 id="pairs">Currency Pairs</h2>
                <p>
                    We provide access to a comprehensive range of currency pairs, categorized into three main groups to suit different trading strategies and risk profiles. Each category offers unique characteristics in terms of liquidity, volatility, and spread costs.
                </p>

                <h3>Major Pairs</h3>
                <p>
                    Major currency pairs account for approximately 75% of all forex trades. These pairs always include the US Dollar and offer the tightest spreads and deepest liquidity. Our platform offers:
                </p>
                <ul>
                    <li><strong>EUR/USD</strong> – The most traded pair globally, representing the world's two largest economies</li>
                    <li><strong>GBP/USD</strong> – Known as "Cable," offers significant volatility during London sessions</li>
                    <li><strong>USD/JPY</strong> – Popular with Asian traders, influenced by Bank of Japan policy</li>
                    <li><strong>USD/CHF</strong> – The "Swissie," often considered a safe-haven pair</li>
                    <li><strong>AUD/USD</strong> – Commodity-linked currency, sensitive to China economic data</li>
                    <li><strong>USD/CAD</strong> – Heavily influenced by oil prices and US-Canada trade</li>
                    <li><strong>NZD/USD</strong> – Known as "Kiwi," popular for carry trades</li>
                </ul>

                <h3>Minor Pairs (Cross Pairs)</h3>
                <p>
                    Minor pairs exclude the US Dollar but include other major currencies. While slightly less liquid than major pairs, they offer excellent trading opportunities:
                </p>
                <ul>
                    <li><strong>EUR/GBP, EUR/AUD, EUR/CAD, EUR/CHF, EUR/JPY, EUR/NZD</strong></li>
                    <li><strong>GBP/AUD, GBP/CAD, GBP/CHF, GBP/JPY, GBP/NZD</strong></li>
                    <li><strong>AUD/CAD, AUD/CHF, AUD/JPY, AUD/NZD</strong></li>
                    <li><strong>CAD/CHF, CAD/JPY, CHF/JPY, NZD/CAD, NZD/CHF, NZD/JPY</strong></li>
                </ul>

                <h3>Exotic Pairs</h3>
                <p>
                    Exotic pairs combine a major currency with a currency from an emerging or smaller economy. These pairs typically have wider spreads but can offer significant profit potential:
                </p>
                <ul>
                    <li><strong>USD/TRY</strong> – Turkish Lira, high volatility</li>
                    <li><strong>USD/ZAR</strong> – South African Rand, commodity-linked</li>
                    <li><strong>USD/MXN</strong> – Mexican Peso, sensitive to US policy</li>
                    <li><strong>USD/SGD</strong> – Singapore Dollar, stable Asian currency</li>
                    <li><strong>USD/HKD</strong> – Hong Kong Dollar, pegged to USD</li>
                    <li><strong>EUR/TRY, GBP/ZAR, AUD/SGD</strong> – and 50+ more exotic crosses</li>
                </ul>

                <h2 id="conditions">Trading Conditions</h2>
                <p>
                    We believe in complete transparency regarding trading conditions. Below are the standard parameters available on our platform, which you can customize based on your business model and regulatory requirements.
                </p>

                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            Spreads
                        </h4>
                        <p>From 0.0 pips on major pairs. Raw spread accounts available with commission-based pricing.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                            Leverage
                        </h4>
                        <p>Configurable up to 1:500 for offshore jurisdictions. Adjust per-client or per-instrument.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            Execution
                        </h4>
                        <p>Market execution with average latency under 10ms. No requotes, no dealing desk intervention.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                            Lot Sizes
                        </h4>
                        <p>Micro lots (0.01) to standard lots (100+). Perfect for both retail and institutional clients.</p>
                    </div>
                </div>

                <div className="infoBox">
                    <p>
                        <strong>Regulatory Compliance:</strong> All trading condition parameters can be adjusted to meet specific regulatory requirements in jurisdictions such as EU (ESMA), UK (FCA), Australia (ASIC), and others.
                    </p>
                </div>

                <h2 id="liquidity">Liquidity Providers</h2>
                <p>
                    Our aggregated liquidity network connects to multiple Tier-1 banks and non-bank market makers, ensuring deep liquidity pools and competitive pricing even during volatile market conditions.
                </p>
                <p>
                    Current liquidity partners include:
                </p>
                <ul>
                    <li><strong>LMAX Exchange</strong> – Leading MTF for institutional FX</li>
                    <li><strong>Saxo Bank</strong> – Multi-asset prime broker</li>
                    <li><strong>JP Morgan</strong> – Global investment bank</li>
                    <li><strong>Barclays</strong> – UK-based global bank</li>
                    <li><strong>UBS</strong> – Swiss multinational bank</li>
                    <li><strong>Mass Markets</strong> – Non-bank liquidity provider</li>
                </ul>
                <p>
                    Our smart order routing (SOR) technology automatically selects the best available price from all connected providers, passing the savings directly to your clients while maintaining your markup structure.
                </p>

                <h2 id="technology">Technology Stack</h2>
                <p>
                    Our forex trading infrastructure is built on enterprise-grade technology designed for reliability, speed, and scalability. Key components include:
                </p>

                <h3>MetaTrader 5 Integration</h3>
                <p>
                    Full MT5 white-label integration with your branding on desktop, web, and mobile applications. Our infrastructure handles all the complexity of server management, allowing you to focus on client acquisition and retention.
                </p>

                <h3>Low-Latency Hosting</h3>
                <p>
                    Servers colocated in Equinix LD4 (London) and NY4 (New York) data centers, providing sub-10ms execution to major liquidity venues. Cross-connects to all major prime brokers and liquidity providers.
                </p>

                <h3>Risk Management</h3>
                <p>
                    Real-time risk monitoring dashboards, automated A/B book routing, and configurable exposure limits. Protect your brokerage from toxic flow while maximizing profitable client relationships.
                </p>

                <h2 id="getting-started">Getting Started</h2>
                <p>
                    Launching forex trading capabilities with FxTrusts is straightforward. Our onboarding process includes:
                </p>
                <ol>
                    <li><strong>Consultation</strong> – Discuss your business model, target markets, and regulatory requirements</li>
                    <li><strong>Configuration</strong> – Customize trading conditions, spreads, and leverage settings</li>
                    <li><strong>Integration</strong> – Connect liquidity, set up MT5 white-label, configure CRM</li>
                    <li><strong>Testing</strong> – Comprehensive UAT to ensure everything works as expected</li>
                    <li><strong>Launch</strong> – Go live with 24/7 support and monitoring</li>
                </ol>
                <p>
                    Average time to market is 2-4 weeks depending on complexity. Our team handles all technical implementation, allowing you to focus on marketing and client acquisition.
                </p>
            </ContentPageLayout>
        </main>
    );
}
