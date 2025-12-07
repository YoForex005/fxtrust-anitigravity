import { Metadata } from 'next';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
    title: 'Crypto Trading | Digital Asset Infrastructure | FxTrusts',
    description: 'Trade Bitcoin, Ethereum, and 50+ cryptocurrencies with institutional liquidity. 24/7 markets, deep order books, and enterprise-grade security.',
    keywords: ['crypto trading', 'bitcoin broker', 'cryptocurrency exchange', 'digital assets', 'crypto liquidity', 'BTC trading', 'ETH trading'],
    openGraph: {
        title: 'Crypto Trading | 50+ Cryptocurrencies',
        description: 'Trade Bitcoin, Ethereum, and 50+ cryptocurrencies 24/7 with institutional liquidity.',
        type: 'website',
        url: 'https://fxtrusts.com/markets/crypto',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/markets/crypto',
    },
};

export default function CryptoPage() {
    const tableOfContents = [
        { id: 'overview', title: 'Market Overview' },
        { id: 'assets', title: 'Supported Assets' },
        { id: 'trading', title: 'Trading Features' },
        { id: 'security', title: 'Security & Custody' },
        { id: 'integration', title: 'Integration Options' },
        { id: 'compliance', title: 'Compliance' },
    ];

    const relatedLinks = [
        { title: 'Forex Trading', href: '/markets/forex', readTime: '6 min' },
        { title: 'Crypto Payment Solutions', href: '/solutions/crypto-payments', readTime: '5 min' },
        { title: 'Risk Management', href: '/solutions/risk-management', readTime: '4 min' },
    ];

    const quickFacts = [
        { label: 'Cryptocurrencies', value: '50+' },
        { label: 'Trading Hours', value: '24/7/365' },
        { label: 'Settlement', value: 'Instant' },
        { label: 'Custody', value: 'Cold Storage' },
    ];

    return (
        <main>
            <PageHeader
                title="Crypto Trading"
                subtitle="Access the digital asset revolution with institutional-grade infrastructure."
                badge="Markets"
            />
            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Add Crypto to Your Offering"
                ctaText="Offer your clients 24/7 access to digital asset markets."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
            >
                <h1>Cryptocurrency Trading Infrastructure</h1>
                <p>
                    The cryptocurrency market has evolved from a niche technology experiment into a multi-trillion dollar asset class. With FxTrusts, your brokerage can offer clients seamless access to this dynamic market, complete with institutional liquidity, enterprise security, and regulatory-compliant infrastructure.
                </p>

                <h2 id="overview">Market Overview</h2>
                <p>
                    Unlike traditional financial markets, cryptocurrency markets operate continuously—24 hours a day, 7 days a week, 365 days a year. This presents unique opportunities for brokerages to capture trading volume during weekends and holidays when forex and equity markets are closed.
                </p>
                <p>
                    The total cryptocurrency market capitalization exceeds $2 trillion, with Bitcoin and Ethereum representing approximately 70% of the total market value. Daily trading volumes regularly exceed $100 billion across major exchanges, providing ample liquidity for institutional-grade execution.
                </p>

                <div className="statsGrid">
                    <div className="statBox">
                        <strong>$2T+</strong>
                        <span>Market Cap</span>
                    </div>
                    <div className="statBox">
                        <strong>$100B+</strong>
                        <span>Daily Volume</span>
                    </div>
                    <div className="statBox">
                        <strong>24/7</strong>
                        <span>Market Hours</span>
                    </div>
                    <div className="statBox">
                        <strong>300M+</strong>
                        <span>Global Users</span>
                    </div>
                </div>

                <h2 id="assets">Supported Digital Assets</h2>
                <p>
                    Our platform provides access to a carefully curated selection of cryptocurrencies, focusing on assets with sufficient liquidity and established market history. We continuously evaluate new assets for inclusion based on market demand and technical viability.
                </p>

                <h3>Major Cryptocurrencies</h3>
                <p>
                    The most traded digital assets with the highest liquidity and market capitalization:
                </p>
                <ul>
                    <li><strong>Bitcoin (BTC)</strong> – The original cryptocurrency, digital gold standard, largest by market cap</li>
                    <li><strong>Ethereum (ETH)</strong> – Smart contract platform, foundation of DeFi ecosystem</li>
                    <li><strong>Tether (USDT)</strong> – Leading stablecoin, pegged 1:1 to USD</li>
                    <li><strong>USD Coin (USDC)</strong> – Regulated stablecoin by Circle and Coinbase</li>
                    <li><strong>BNB</strong> – Binance ecosystem token, utility and governance</li>
                    <li><strong>XRP</strong> – Cross-border payment solution, banking integrations</li>
                </ul>

                <h3>Altcoins & DeFi Tokens</h3>
                <p>
                    Popular alternative cryptocurrencies and decentralized finance tokens:
                </p>
                <ul>
                    <li><strong>Solana (SOL)</strong> – High-performance blockchain, fast transactions</li>
                    <li><strong>Cardano (ADA)</strong> – Proof-of-stake platform, academic research focus</li>
                    <li><strong>Polygon (MATIC)</strong> – Ethereum scaling solution</li>
                    <li><strong>Polkadot (DOT)</strong> – Interoperability protocol</li>
                    <li><strong>Avalanche (AVAX)</strong> – Smart contracts platform</li>
                    <li><strong>Chainlink (LINK)</strong> – Oracle network for smart contracts</li>
                    <li><strong>Uniswap (UNI), Aave (AAVE), Compound (COMP)</strong> – DeFi governance tokens</li>
                </ul>

                <h3>Trading Pairs</h3>
                <p>
                    All cryptocurrencies are available as CFDs against major fiat currencies including USD, EUR, GBP, and cross-pairs against BTC and USDT. This structure allows clients to trade without the complexities of actual crypto custody while still capturing price movements.
                </p>

                <h2 id="trading">Trading Features</h2>
                <p>
                    Our crypto trading infrastructure is designed to handle the unique characteristics of digital asset markets, including high volatility, 24/7 operation, and rapid price movements.
                </p>

                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            24/7 Trading
                        </h4>
                        <p>Markets never close. Your clients can trade Bitcoin on Christmas Day or Ethereum at 3am.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            Deep Liquidity
                        </h4>
                        <p>Aggregated from major exchanges including Binance, Coinbase Pro, Kraken, and institutional desks.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                            Instant Execution
                        </h4>
                        <p>Sub-millisecond order routing ensures clients get the price they see, even during volatility.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                            Leverage Options
                        </h4>
                        <p>Configurable leverage up to 1:20 for crypto CFDs. Adjust per-client based on risk profile.</p>
                    </div>
                </div>

                <h2 id="security">Security & Custody</h2>
                <p>
                    Security is paramount in the cryptocurrency space. Our infrastructure incorporates multiple layers of protection to safeguard both your brokerage and your clients' assets.
                </p>

                <h3>Enterprise Security Features</h3>
                <ul>
                    <li><strong>Cold Storage</strong> – 95% of digital assets held in air-gapped cold wallets</li>
                    <li><strong>Multi-Signature</strong> – Institutional-grade multi-sig protocols for all transactions</li>
                    <li><strong>Insurance Coverage</strong> – Lloyd's of London backed insurance on custodied assets</li>
                    <li><strong>SOC 2 Type II</strong> – Audited security controls and procedures</li>
                    <li><strong>Penetration Testing</strong> – Regular security audits by third-party firms</li>
                    <li><strong>Real-Time Monitoring</strong> – 24/7 security operations center surveillance</li>
                </ul>

                <div className="warningBox">
                    <p>
                        <strong>Risk Notice:</strong> Cryptocurrency trading involves substantial risk. Prices can fluctuate significantly, and clients may lose more than their initial investment when trading with leverage.
                    </p>
                </div>

                <h2 id="integration">Integration Options</h2>
                <p>
                    We offer multiple integration paths depending on your technical capabilities and business requirements.
                </p>

                <h3>MetaTrader Integration</h3>
                <p>
                    Crypto CFDs are fully integrated into your existing MT5 white-label setup. Clients can trade BTC/USD alongside EUR/USD in the same terminal, with unified account management and reporting.
                </p>

                <h3>API Access</h3>
                <p>
                    REST and WebSocket APIs for custom integrations. Build your own trading interface, mobile app, or algorithmic trading system with full access to real-time prices, execution, and account management.
                </p>

                <h3>White-Label Web Platform</h3>
                <p>
                    Modern, responsive web trading platform with your branding. Optimized for crypto traders with advanced charting, one-click trading, and portfolio analytics.
                </p>

                <h2 id="compliance">Compliance & Regulation</h2>
                <p>
                    The regulatory landscape for cryptocurrency is evolving rapidly. Our platform is designed to support compliance with emerging regulations across jurisdictions.
                </p>

                <h3>Built-in Compliance Features</h3>
                <ul>
                    <li><strong>KYC Integration</strong> – Automated identity verification with SumSub, ShuftiPro</li>
                    <li><strong>AML Monitoring</strong> – Transaction monitoring and suspicious activity alerts</li>
                    <li><strong>Travel Rule</strong> – FATF Travel Rule compliance for crypto transfers</li>
                    <li><strong>Geo-Blocking</strong> – Automatic blocking of restricted jurisdictions</li>
                    <li><strong>Audit Trails</strong> – Complete transaction history for regulatory reporting</li>
                </ul>

                <p>
                    Our compliance team stays current with regulatory developments and updates the platform to maintain compliance as new requirements emerge. We support brokerages operating under various regulatory frameworks including offshore jurisdictions and more stringent regimes.
                </p>
            </ContentPageLayout>
        </main>
    );
}
