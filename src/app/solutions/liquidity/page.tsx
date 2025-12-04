import { Metadata } from 'next';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
    title: 'Liquidity Solutions | Tier-1 Forex Liquidity | FxTrusts',
    description: 'Access deep institutional liquidity from LMAX, Saxo, JP Morgan, and more. Aggregated pricing, smart order routing, and transparent execution.',
    keywords: ['forex liquidity', 'liquidity provider', 'tier-1 liquidity', 'liquidity bridge', 'forex prime broker'],
};

export default function LiquidityPage() {
    const tableOfContents = [
        { id: 'overview', title: 'Liquidity Overview' },
        { id: 'providers', title: 'Liquidity Providers' },
        { id: 'aggregation', title: 'Aggregation Technology' },
        { id: 'execution', title: 'Execution Quality' },
        { id: 'integration', title: 'Bridge Integration' },
        { id: 'reporting', title: 'Reporting & Analytics' },
    ];

    const relatedLinks = [
        { title: 'MT5 White Label', href: '/solutions/mt5', readTime: '5 min' },
        { title: 'Forex Trading', href: '/markets/forex', readTime: '6 min' },
        { title: 'Risk Management', href: '/solutions/risk-management', readTime: '4 min' },
    ];

    const quickFacts = [
        { label: 'LPs Connected', value: '15+' },
        { label: 'Avg Latency', value: '<8ms' },
        { label: 'Fill Rate', value: '99.7%' },
        { label: 'Uptime', value: '99.99%' },
    ];

    return (
        <main>
            <PageHeader
                title="Liquidity Solutions"
                subtitle="Access deep institutional liquidity from the world's leading providers."
                badge="Solutions"
            />
            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Connect to Tier-1 Liquidity"
                ctaText="Get institutional pricing for your brokerage today."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
            >
                <h1>Institutional Liquidity for Forex Brokerages</h1>
                <p>
                    Liquidity is the lifeblood of any brokerage. Without reliable pricing and execution, client trust erodes quickly. At FxTrusts, we provide aggregated access to Tier-1 banks and non-bank market makers, ensuring your clients receive competitive pricing and reliable fills even during volatile market conditions.
                </p>
                <p>
                    Our liquidity bridge technology connects your MT5 platform directly to multiple providers, aggregating the best bid and ask prices in real-time. Smart order routing ensures each trade is executed at the optimal venue based on price, latency, and fill probability.
                </p>

                <h2 id="overview">Liquidity Overview</h2>
                <p>
                    Traditional retail brokerages often rely on a single B-book model, internalizing client trades. While this can be profitable, it creates conflicts of interest and limits scalability. Our liquidity solution enables true STP/ECN execution, passing trades directly to the market.
                </p>

                <div className="statsGrid">
                    <div className="statBox">
                        <strong>15+</strong>
                        <span>LPs Connected</span>
                    </div>
                    <div className="statBox">
                        <strong>8ms</strong>
                        <span>Avg Latency</span>
                    </div>
                    <div className="statBox">
                        <strong>99.7%</strong>
                        <span>Fill Rate</span>
                    </div>
                    <div className="statBox">
                        <strong>0.0</strong>
                        <span>Spread From</span>
                    </div>
                </div>

                <h3>Execution Models</h3>
                <ul>
                    <li><strong>A-Book (STP)</strong> – All trades passed directly to liquidity providers</li>
                    <li><strong>B-Book</strong> – Internalize trades with hedging options</li>
                    <li><strong>Hybrid A/B</strong> – Route profitable clients to A-book, small trades to B-book</li>
                    <li><strong>C-Book</strong> – Proprietary trading against client flow (advanced)</li>
                </ul>

                <h2 id="providers">Liquidity Providers</h2>
                <p>
                    We maintain direct relationships with multiple Tier-1 banks and leading non-bank market makers. This diversification ensures reliable pricing even when individual providers experience issues.
                </p>

                <h3>Tier-1 Banks</h3>
                <ul>
                    <li><strong>JP Morgan</strong> – World's largest FX dealer by volume</li>
                    <li><strong>UBS</strong> – Leading European FX market maker</li>
                    <li><strong>Barclays</strong> – Major UK and global FX provider</li>
                    <li><strong>Citi</strong> – Extensive emerging markets coverage</li>
                    <li><strong>Deutsche Bank</strong> – European benchmark pricing</li>
                    <li><strong>Goldman Sachs</strong> – Institutional trading access</li>
                </ul>

                <h3>Non-Bank Market Makers</h3>
                <ul>
                    <li><strong>LMAX Exchange</strong> – MTF with exchange-quality execution</li>
                    <li><strong>Saxo Bank</strong> – Multi-asset prime broker</li>
                    <li><strong>Integral</strong> – ECN technology provider</li>
                    <li><strong>Currenex</strong> – Institutional FX marketplace</li>
                    <li><strong>Mass Markets</strong> – Aggressive pricing specialist</li>
                </ul>

                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            Competitive Spreads
                        </h4>
                        <p>0.0 pips on EUR/USD, 0.1 on majors during liquid hours. True institutional pricing.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                            Deep Liquidity
                        </h4>
                        <p>Fill large orders without significant slippage. Block trade support for institutions.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            Low Latency
                        </h4>
                        <p>Sub-10ms execution from order to fill. Optimized routing minimizes market impact.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            Redundancy
                        </h4>
                        <p>Multiple LP connections ensure pricing availability even during provider outages.</p>
                    </div>
                </div>

                <h2 id="aggregation">Aggregation Technology</h2>
                <p>
                    Our liquidity bridge aggregates prices from all connected providers, constructing a synthetic book that represents the best available market.
                </p>

                <h3>Best Bid/Offer (BBO)</h3>
                <p>
                    The aggregator continuously monitors all provider quotes, presenting clients with the single best bid and best offer across all sources. This ensures clients always see competitive pricing.
                </p>

                <h3>Depth of Market</h3>
                <p>
                    Full level 2 depth aggregation available, showing available liquidity at each price level. Useful for large traders and algorithmic strategies that need to understand market depth.
                </p>

                <h3>Smart Order Routing (SOR)</h3>
                <p>
                    When orders are executed, the SOR engine selects the optimal venue based on:
                </p>
                <ul>
                    <li>Price – Best available price at time of execution</li>
                    <li>Latency – Historical fill speed for each provider</li>
                    <li>Fill Rate – Provider's historical success rate</li>
                    <li>Slippage – Expected vs. actual fill price history</li>
                    <li>Rejection Rate – Frequency of quote rejections</li>
                </ul>

                <div className="infoBox">
                    <p>
                        <strong>Last Look Protection:</strong> We negotiate last-look terms with all providers. Configurable rejection timeout ensures trades don't hang during volatile conditions.
                    </p>
                </div>

                <h2 id="execution">Execution Quality</h2>
                <p>
                    Execution quality directly impacts client satisfaction and your bottom line. We measure and optimize every aspect of the execution chain.
                </p>

                <h3>Key Metrics</h3>
                <ul>
                    <li><strong>Fill Rate:</strong> 99.7% of orders filled at requested price or better</li>
                    <li><strong>Positive Slippage:</strong> 52% of slipped orders are positive (client benefit)</li>
                    <li><strong>Average Latency:</strong> 8.4ms from order receipt to fill confirmation</li>
                    <li><strong>Rejection Rate:</strong> 0.3% of orders rejected by LPs</li>
                </ul>

                <h3>Execution Reports</h3>
                <p>
                    Monthly execution quality reports provide transparency on:
                </p>
                <ul>
                    <li>Order-by-order fill analysis</li>
                    <li>Slippage distribution by symbol and time</li>
                    <li>LP performance comparison</li>
                    <li>Market impact analysis for large orders</li>
                </ul>

                <h2 id="integration">Bridge Integration</h2>
                <p>
                    Our liquidity bridge integrates directly with your MT5 server, providing seamless order flow from client terminal to execution venue.
                </p>

                <h3>Technical Architecture</h3>
                <ul>
                    <li><strong>MT5 Gateway</strong> – Plugin installed on your MT5 server</li>
                    <li><strong>Bridge Engine</strong> – Price aggregation and order routing</li>
                    <li><strong>LP Connectors</strong> – FIX 4.4 connections to each provider</li>
                    <li><strong>Risk Manager</strong> – Real-time exposure monitoring</li>
                    <li><strong>Reporting Database</strong> – Historical data retention</li>
                </ul>

                <h3>Configuration Options</h3>
                <ul>
                    <li><strong>Markup</strong> – Add your spread on top of raw pricing</li>
                    <li><strong>Commission</strong> – Per-lot commission instead of spread markup</li>
                    <li><strong>A/B Routing</strong> – Rules for routing trades to book or market</li>
                    <li><strong>Symbol Mapping</strong> – Map MT5 symbols to LP instruments</li>
                    <li><strong>Volume Limits</strong> – Maximum order sizes per symbol</li>
                </ul>

                <h2 id="reporting">Reporting & Analytics</h2>
                <p>
                    Comprehensive reporting gives you complete visibility into liquidity performance and execution quality.
                </p>

                <h3>Real-Time Dashboard</h3>
                <ul>
                    <li>Live order flow and execution status</li>
                    <li>Current exposure by symbol and LP</li>
                    <li>P&L attribution (A-book vs B-book)</li>
                    <li>Alert notifications for key events</li>
                </ul>

                <h3>Historical Reports</h3>
                <ul>
                    <li><strong>Execution Analysis</strong> – Fill rates, slippage, latency trends</li>
                    <li><strong>LP Scorecards</strong> – Compare provider performance</li>
                    <li><strong>Volume Reports</strong> – Trading activity by time, symbol, client</li>
                    <li><strong>Revenue Analysis</strong> – Markup and commission earnings</li>
                </ul>

                <h3>API Access</h3>
                <p>
                    REST API for integrating liquidity data with your own systems. Real-time webhooks for execution events, exposure alerts, and system notifications.
                </p>
            </ContentPageLayout>
        </main>
    );
}
