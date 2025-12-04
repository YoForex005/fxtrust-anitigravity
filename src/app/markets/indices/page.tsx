import { Metadata } from 'next';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
    title: 'Indices Trading | Global Stock Indices | FxTrusts',
    description: 'Trade major global indices including S&P 500, NASDAQ, FTSE 100, DAX 40, and Nikkei 225 with competitive spreads and leverage.',
    keywords: ['indices trading', 'stock indices', 'S&P 500', 'NASDAQ trading', 'DAX trading'],
};

export default function IndicesPage() {
    const tableOfContents = [
        { id: 'overview', title: 'Market Overview' },
        { id: 'global-indices', title: 'Global Indices' },
        { id: 'trading-hours', title: 'Trading Hours' },
        { id: 'conditions', title: 'Trading Conditions' },
        { id: 'strategies', title: 'Trading Strategies' },
        { id: 'getting-started', title: 'Getting Started' },
    ];

    const relatedLinks = [
        { title: 'Forex Trading', href: '/markets/forex', readTime: '6 min' },
        { title: 'Stocks Trading', href: '/markets/stocks', readTime: '5 min' },
        { title: 'Commodities', href: '/markets/commodities', readTime: '4 min' },
    ];

    const quickFacts = [
        { label: 'Indices', value: '25+' },
        { label: 'Min Spread', value: '0.4 pts' },
        { label: 'Max Leverage', value: 'Up to 1:200' },
        { label: 'Trading Hours', value: '23/5' },
    ];

    return (
        <main>
            <PageHeader
                title="Indices Trading"
                subtitle="Access the world's major stock market indices with institutional pricing."
                badge="Markets"
            />
            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Offer Indices to Your Clients"
                ctaText="Diversify your product offering with global stock indices."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
            >
                <h1>Global Indices Trading Infrastructure</h1>
                <p>
                    Stock market indices offer traders exposure to entire economies and sectors through a single instrument. At FxTrusts, we provide brokerages with the infrastructure to offer major global indices as CFDs, enabling clients to speculate on market movements without the complexity of individual stock ownership.
                </p>

                <h2 id="overview">Market Overview</h2>
                <p>
                    Index trading has become one of the most popular ways for retail and institutional traders to gain broad market exposure. Rather than analyzing individual companies, traders can take positions on entire market movements, making indices ideal for macro-economic strategies and portfolio hedging.
                </p>
                <p>
                    Our platform provides access to over 25 major indices from North America, Europe, Asia-Pacific, and emerging markets. All indices are offered as CFDs with leverage, allowing clients to control larger positions with smaller capital requirements.
                </p>

                <div className="statsGrid">
                    <div className="statBox">
                        <strong>25+</strong>
                        <span>Global Indices</span>
                    </div>
                    <div className="statBox">
                        <strong>0.4</strong>
                        <span>Min Spread (pts)</span>
                    </div>
                    <div className="statBox">
                        <strong>23/5</strong>
                        <span>Trading Hours</span>
                    </div>
                    <div className="statBox">
                        <strong>1:200</strong>
                        <span>Max Leverage</span>
                    </div>
                </div>

                <h2 id="global-indices">Available Global Indices</h2>
                <p>
                    We offer a comprehensive selection of indices covering the world's major economies and markets.
                </p>

                <h3>North American Indices</h3>
                <ul>
                    <li><strong>S&P 500 (US500)</strong> – 500 largest US companies, the gold standard for US market performance</li>
                    <li><strong>NASDAQ 100 (USTEC)</strong> – Top 100 non-financial NASDAQ stocks, technology-weighted</li>
                    <li><strong>Dow Jones Industrial Average (US30)</strong> – 30 blue-chip US companies, price-weighted</li>
                    <li><strong>Russell 2000 (US2000)</strong> – Small-cap US stocks, economic bellwether</li>
                    <li><strong>S&P/TSX Composite</strong> – Canadian benchmark index</li>
                </ul>

                <h3>European Indices</h3>
                <ul>
                    <li><strong>FTSE 100 (UK100)</strong> – Top 100 companies on London Stock Exchange</li>
                    <li><strong>DAX 40 (GER40)</strong> – 40 largest German companies on Frankfurt Exchange</li>
                    <li><strong>CAC 40 (FRA40)</strong> – 40 largest French companies on Euronext Paris</li>
                    <li><strong>Euro Stoxx 50 (EU50)</strong> – 50 blue-chip Eurozone companies</li>
                    <li><strong>IBEX 35 (ESP35)</strong> – Spanish benchmark index</li>
                    <li><strong>SMI (SUI20)</strong> – Swiss Market Index, 20 largest Swiss companies</li>
                    <li><strong>AEX (NED25)</strong> – Dutch blue-chip index</li>
                </ul>

                <h3>Asia-Pacific Indices</h3>
                <ul>
                    <li><strong>Nikkei 225 (JPN225)</strong> – 225 leading Japanese companies</li>
                    <li><strong>Hang Seng (HK50)</strong> – Hong Kong's primary index</li>
                    <li><strong>ASX 200 (AUS200)</strong> – Top 200 Australian companies</li>
                    <li><strong>China A50 (CHINA50)</strong> – 50 largest Chinese A-share companies</li>
                    <li><strong>SGX Nifty</strong> – Indian stock market exposure via Singapore</li>
                </ul>

                <h2 id="trading-hours">Trading Hours & Sessions</h2>
                <p>
                    Index trading hours vary by market, but our platform provides extended hours trading on most indices, allowing clients to react to after-hours news and global events.
                </p>

                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            US Indices
                        </h4>
                        <p>Sunday 23:00 - Friday 22:00 GMT with 1-hour daily break. Nearly 23 hours of continuous trading.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            European Indices
                        </h4>
                        <p>Monday 00:00 - Friday 22:00 GMT. Follows European market hours with pre/post-market access.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            Asian Indices
                        </h4>
                        <p>Nikkei: 00:00 - 06:30, 07:30 - 09:00 GMT. Hang Seng: 01:15 - 09:00 GMT.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            Weekend Markets
                        </h4>
                        <p>Weekend trading available on select indices with widened spreads. Trade on breaking news.</p>
                    </div>
                </div>

                <h2 id="conditions">Trading Conditions</h2>
                <p>
                    Our index CFD offering is designed for both retail traders and professional clients, with competitive conditions across all instruments.
                </p>

                <h3>Spreads</h3>
                <p>
                    We offer some of the tightest spreads in the industry on major indices:
                </p>
                <ul>
                    <li><strong>US500:</strong> From 0.4 points</li>
                    <li><strong>US30:</strong> From 1.0 point</li>
                    <li><strong>USTEC:</strong> From 0.8 points</li>
                    <li><strong>UK100:</strong> From 0.8 points</li>
                    <li><strong>GER40:</strong> From 0.8 points</li>
                    <li><strong>JPN225:</strong> From 5.0 points</li>
                </ul>

                <h3>Leverage & Margin</h3>
                <p>
                    Leverage is configurable based on your regulatory requirements and client risk profiles:
                </p>
                <ul>
                    <li>Offshore jurisdictions: Up to 1:200</li>
                    <li>EU/UK (ESMA/FCA regulated): 1:20 for retail, higher for professional</li>
                    <li>Per-client leverage adjustment available through CRM</li>
                </ul>

                <div className="infoBox">
                    <p>
                        <strong>Dividend Adjustments:</strong> Index CFD positions are adjusted for constituent dividend payments. Long positions receive credits; short positions are debited.
                    </p>
                </div>

                <h2 id="strategies">Popular Trading Strategies</h2>
                <p>
                    Index trading attracts various trader profiles, from day traders to long-term position traders. Common strategies include:
                </p>

                <h3>Macro-Economic Trading</h3>
                <p>
                    Traders take positions based on economic data releases, central bank decisions, and geopolitical events. For example, bullish on US500 ahead of positive employment data, or bearish on GER40 during European energy crises.
                </p>

                <h3>Sector Rotation</h3>
                <p>
                    Using sector-specific indices (tech-heavy NASDAQ vs. industrial-heavy Dow) to capitalize on sector performance divergence. Pairs trading between correlated indices is also popular.
                </p>

                <h3>Hedging Strategies</h3>
                <p>
                    Portfolio managers and individual investors use index CFDs to hedge equity exposure. Short index positions can protect against market downturns without liquidating stock holdings.
                </p>

                <h3>News Trading</h3>
                <p>
                    Indices are highly sensitive to earnings seasons, Fed announcements, and breaking news. Our low-latency execution allows traders to capitalize on rapid price movements around scheduled events.
                </p>

                <h2 id="getting-started">Getting Started</h2>
                <p>
                    Adding indices to your brokerage offering is seamless with our white-label solution. The setup process includes:
                </p>
                <ol>
                    <li><strong>Product Selection</strong> – Choose which indices to offer based on your target market</li>
                    <li><strong>Condition Configuration</strong> – Set spreads, leverage, and margin requirements</li>
                    <li><strong>Symbol Setup</strong> – Configure symbols in MT5 with your preferred naming convention</li>
                    <li><strong>Liquidity Connection</strong> – Connect to our aggregated index liquidity feed</li>
                    <li><strong>Testing</strong> – Verify execution and pricing in UAT environment</li>
                    <li><strong>Launch</strong> – Go live with marketing support and trading tools</li>
                </ol>
                <p>
                    Most brokerages can add indices to their existing offering within 1-2 weeks. Our team provides full technical support throughout the integration process.
                </p>
            </ContentPageLayout>
        </main>
    );
}
