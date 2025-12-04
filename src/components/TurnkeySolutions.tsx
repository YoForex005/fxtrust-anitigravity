import styles from './TurnkeySolutions.module.css';
import Link from 'next/link';

// Professional SVG Icons
const TrendingUpIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
    </svg>
);

const ExchangeIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
);

const BitcoinIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.5 8h5a2.5 2.5 0 0 1 0 5H9m0 0h5.5a2.5 2.5 0 0 1 0 5H9.5" />
        <path d="M12 6v2m0 8v2" />
    </svg>
);

const CloudIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
);

const LiquidityChartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
    </svg>
);

export default function TurnkeySolutions() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Section Headers */}
                <div className={styles.headerRow}>
                    <h2 className={styles.sectionTitle}>Liquidity Provision</h2>
                    <h2 className={styles.sectionTitle}>Turnkey Solutions</h2>
                </div>

                <div className={styles.grid}>
                    {/* Left: Liquidity Card */}
                    <div className={styles.liquidityCard}>
                        <div className={styles.liquidityContent}>
                            <div className={styles.liquidityBadge}>
                                <LiquidityChartIcon />
                                <span>LIQUIDITY</span>
                            </div>
                            <h3 className={styles.liquidityHeadline}>
                                One Single Margin Account<br />
                                for 10 Asset Classes
                            </h3>
                            <p className={styles.liquidityText}>
                                We aggregate Multi-Asset and Multi-Market Liquidity from top-tier sources and deliver it through multiple distribution venues and jurisdictions. No more juggling 15 different LPs. One account. Real spreads.
                            </p>
                        </div>
                    </div>

                    {/* Right: Turnkey Grid */}
                    <div className={styles.turnkeyGrid}>
                        {/* Forex Broker */}
                        <Link href="/solutions/forex-broker" className={styles.turnkeyCard}>
                            <div className={`${styles.turnkeyIconWrapper} ${styles.forex}`}>
                                <TrendingUpIcon />
                            </div>
                            <h4 className={styles.turnkeyTitle}>Forex Broker</h4>
                            <p className={styles.turnkeyText}>
                                Reliable technology, 24/7 support, and back-office tools that actually work. Launch in weeks, not months.
                            </p>
                        </Link>

                        {/* Crypto Exchange */}
                        <div className={styles.turnkeyCard}>
                            <div className={`${styles.turnkeyIconWrapper} ${styles.exchange}`}>
                                <ExchangeIcon />
                            </div>
                            <h4 className={styles.turnkeyTitle}>Crypto Exchange</h4>
                            <p className={styles.turnkeyText}>
                                High-throughput, secure custom crypto exchange in under a month. Spot, margin, futures—you name it.
                            </p>
                        </div>

                        {/* Crypto Broker */}
                        <div className={styles.turnkeyCard}>
                            <div className={`${styles.turnkeyIconWrapper} ${styles.crypto}`}>
                                <BitcoinIcon />
                            </div>
                            <h4 className={styles.turnkeyTitle}>Crypto Broker</h4>
                            <p className={styles.turnkeyText}>
                                Enter the digital asset market. Save costs, time, and effort. We handle the tech, you handle the clients.
                            </p>
                        </div>

                        {/* Liquidity Provider */}
                        <div className={styles.turnkeyCard}>
                            <div className={`${styles.turnkeyIconWrapper} ${styles.provider}`}>
                                <CloudIcon />
                            </div>
                            <h4 className={styles.turnkeyTitle}>Liquidity Provider</h4>
                            <p className={styles.turnkeyText}>
                                Start your own LP business with our Turnkey Solution. Be the one setting the spreads, not paying them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
