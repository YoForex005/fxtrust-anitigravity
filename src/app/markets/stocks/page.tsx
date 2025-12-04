import { Metadata } from 'next';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
    title: 'Stock Trading | 3000+ Global Equities | FxTrusts',
    description: 'Trade shares from NYSE, NASDAQ, LSE, and major global exchanges. Access Apple, Tesla, Amazon, and 3000+ stocks with competitive pricing.',
    keywords: ['stock trading', 'equity trading', 'US stocks', 'share trading', 'stock CFDs'],
};

export default function StocksPage() {
    const tableOfContents = [
        { id: 'overview', title: 'Market Overview' },
        { id: 'markets', title: 'Available Markets' },
        { id: 'popular', title: 'Popular Stocks' },
        { id: 'conditions', title: 'Trading Conditions' },
        { id: 'corporate', title: 'Corporate Actions' },
        { id: 'integration', title: 'Integration' },
    ];

    const relatedLinks = [
        { title: 'Indices Trading', href: '/markets/indices', readTime: '5 min' },
        { title: 'Forex Trading', href: '/markets/forex', readTime: '6 min' },
        { title: 'Platform Features', href: '/platform/mt5', readTime: '4 min' },
    ];

    const quickFacts = [
        { label: 'Stocks', value: '3,000+' },
        { label: 'Markets', value: '15+' },
        { label: 'Commission', value: 'From $0.01' },
        { label: 'Fractional', value: 'Available' },
    ];

    return (
        <main>
            <PageHeader
                title="Stock Trading"
                subtitle="Access the world's largest companies with competitive share CFD trading."
                badge="Markets"
            />
            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Offer Stocks to Your Clients"
                ctaText="Give your clients access to Apple, Tesla, and 3000+ global equities."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
            >
                <h1>Global Stock Trading Infrastructure</h1>
                <p>
                    Equity markets represent trillions of dollars in value and attract millions of active traders globally. At FxTrusts, we enable brokerages to offer stock CFDs, providing clients with exposure to the world's most valuable companies without the complexity of direct share ownership, custody, or exchange memberships.
                </p>

                <h2 id="overview">Market Overview</h2>
                <p>
                    Stock CFD trading combines the accessibility of CFDs with the appeal of owning pieces of companies like Apple, Tesla, and Amazon. Clients can speculate on price movements, go long or short, and use leverage to amplify returns—all without dealing with settlement delays, share certificates, or custody fees.
                </p>
                <p>
                    Our platform aggregates pricing from multiple liquidity sources, ensuring competitive spreads and reliable execution even for less liquid stocks. Fractional share trading allows clients to invest in high-priced stocks like Amazon or Berkshire Hathaway with smaller capital.
                </p>

                <div className="statsGrid">
                    <div className="statBox">
                        <strong>3,000+</strong>
                        <span>Stocks</span>
                    </div>
                    <div className="statBox">
                        <strong>15+</strong>
                        <span>Exchanges</span>
                    </div>
                    <div className="statBox">
                        <strong>$0.01</strong>
                        <span>Min Commission</span>
                    </div>
                    <div className="statBox">
                        <strong>1:5</strong>
                        <span>Max Leverage</span>
                    </div>
                </div>

                <h2 id="markets">Available Markets</h2>
                <p>
                    We provide access to shares listed on major global exchanges, covering the world's largest economies and most innovative companies.
                </p>

                <h3>United States</h3>
                <ul>
                    <li><strong>NYSE (New York Stock Exchange)</strong> – World's largest exchange by market cap. Blue-chip companies, banks, industrials.</li>
                    <li><strong>NASDAQ</strong> – Technology-focused exchange. Home to Apple, Microsoft, Amazon, Google.</li>
                    <li><strong>AMEX</strong> – American Stock Exchange. ETFs and smaller companies.</li>
                </ul>

                <h3>Europe</h3>
                <ul>
                    <li><strong>LSE (London Stock Exchange)</strong> – UK blue-chips including BP, HSBC, Unilever</li>
                    <li><strong>Euronext</strong> – Pan-European exchange covering France, Netherlands, Belgium, Portugal</li>
                    <li><strong>XETRA (Germany)</strong> – German stocks including SAP, Siemens, Volkswagen</li>
                    <li><strong>SIX Swiss Exchange</strong> – Nestlé, Novartis, UBS</li>
                </ul>

                <h3>Asia-Pacific</h3>
                <ul>
                    <li><strong>Hong Kong Stock Exchange</strong> – Chinese and Hong Kong companies</li>
                    <li><strong>Tokyo Stock Exchange</strong> – Toyota, Sony, SoftBank</li>
                    <li><strong>ASX (Australia)</strong> – BHP, Commonwealth Bank, CSL</li>
                    <li><strong>SGX (Singapore)</strong> – Regional banking and real estate</li>
                </ul>

                <h2 id="popular">Popular Stocks by Category</h2>
                <p>
                    Different trader profiles favor different stock categories. Here's what's most popular on our platform:
                </p>

                <h3>Technology Giants</h3>
                <ul>
                    <li><strong>Apple (AAPL)</strong> – World's most valuable company, iPhone maker</li>
                    <li><strong>Microsoft (MSFT)</strong> – Cloud computing leader, Office suite</li>
                    <li><strong>Amazon (AMZN)</strong> – E-commerce and AWS cloud services</li>
                    <li><strong>Alphabet (GOOGL)</strong> – Google parent, search and advertising</li>
                    <li><strong>Meta (META)</strong> – Facebook, Instagram, WhatsApp</li>
                    <li><strong>NVIDIA (NVDA)</strong> – AI and graphics chip leader</li>
                </ul>

                <h3>Electric Vehicles & Energy</h3>
                <ul>
                    <li><strong>Tesla (TSLA)</strong> – EV pioneer, high volatility favorite</li>
                    <li><strong>Rivian (RIVN)</strong> – EV truck manufacturer</li>
                    <li><strong>Lucid (LCID)</strong> – Luxury EV maker</li>
                    <li><strong>NIO (NIO)</strong> – Chinese EV manufacturer</li>
                    <li><strong>ChargePoint (CHPT)</strong> – EV charging infrastructure</li>
                </ul>

                <h3>Banking & Finance</h3>
                <ul>
                    <li><strong>JPMorgan (JPM)</strong> – Largest US bank by assets</li>
                    <li><strong>Bank of America (BAC)</strong> – Major consumer bank</li>
                    <li><strong>Goldman Sachs (GS)</strong> – Investment banking leader</li>
                    <li><strong>Visa (V)</strong> – Payment network giant</li>
                    <li><strong>PayPal (PYPL)</strong> – Digital payments</li>
                </ul>

                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            Fractional Shares
                        </h4>
                        <p>Trade $10 worth of Amazon or $50 of Tesla. No need to buy whole shares.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                            Extended Hours
                        </h4>
                        <p>Pre-market and after-hours trading on US stocks. React to earnings instantly.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                            Short Selling
                        </h4>
                        <p>Go short on overvalued stocks. Profit from falling prices as easily as rising.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                            No Stamp Duty
                        </h4>
                        <p>UK clients: CFD trading avoids stamp duty payable on physical share purchases.</p>
                    </div>
                </div>

                <h2 id="conditions">Trading Conditions</h2>
                <p>
                    Our stock CFD offering is designed for active traders with competitive pricing and flexible conditions.
                </p>

                <h3>Pricing Structure</h3>
                <ul>
                    <li><strong>US Stocks:</strong> Commission from $0.01/share, minimum $1 per trade</li>
                    <li><strong>UK Stocks:</strong> Commission from 0.1%, minimum £6 per trade</li>
                    <li><strong>EU Stocks:</strong> Commission from 0.1%, minimum €6 per trade</li>
                    <li><strong>HK Stocks:</strong> Commission from 0.2%, minimum HK$50 per trade</li>
                </ul>

                <h3>Leverage</h3>
                <p>
                    Stock CFD leverage is typically lower than forex or indices due to individual company risk:
                </p>
                <ul>
                    <li>Major stocks (Apple, Microsoft): Up to 1:5</li>
                    <li>Mid-cap stocks: Up to 1:3</li>
                    <li>Small-cap and volatile stocks: Up to 1:2</li>
                </ul>

                <div className="infoBox">
                    <p>
                        <strong>Risk Management:</strong> We recommend configuring lower leverage for individual stocks compared to indices. Single stocks carry company-specific risks including earnings surprises, executive changes, and sector downturns.
                    </p>
                </div>

                <h2 id="corporate">Corporate Actions</h2>
                <p>
                    Stock CFD positions are adjusted for corporate actions to mirror the economics of physical share ownership:
                </p>

                <h3>Dividends</h3>
                <p>
                    Long positions receive dividend adjustments (credited to account). Short positions are debited dividend amounts. Adjustments are made on the ex-dividend date.
                </p>

                <h3>Stock Splits</h3>
                <p>
                    Position quantities and prices are automatically adjusted for stock splits and reverse splits. For example, a 4:1 split quadruples position size and quarters the price.
                </p>

                <h3>Rights Issues & Spin-offs</h3>
                <p>
                    Positions are adjusted for rights issues, spin-offs, and other corporate actions according to standard CFD industry practices. Clients are notified of pending adjustments via CRM.
                </p>

                <h2 id="integration">Integration</h2>
                <p>
                    Adding stock CFDs to your brokerage platform requires:
                </p>
                <ol>
                    <li><strong>Market Selection</strong> – Choose which stock markets to offer (US, UK, EU, Asia)</li>
                    <li><strong>Commission Setup</strong> – Configure commission rates and minimum tickets</li>
                    <li><strong>Symbol Import</strong> – Import stock symbols to MT5 (we provide symbol lists)</li>
                    <li><strong>Leverage Configuration</strong> – Set per-stock or per-category leverage limits</li>
                    <li><strong>Corporate Action Setup</strong> – Configure dividend and split adjustment workflows</li>
                    <li><strong>Testing</strong> – Verify execution, pricing, and corporate action handling</li>
                </ol>
                <p>
                    Integration timeline is typically 2-3 weeks for full stock offering. We handle all liquidity connections and provide ongoing corporate action processing.
                </p>
            </ContentPageLayout>
        </main>
    );
}
