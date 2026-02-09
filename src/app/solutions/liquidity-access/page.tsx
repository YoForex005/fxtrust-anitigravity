import { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/components/Footer';
import styles from './liquidity-access.module.css';

export const metadata: Metadata = {
    title: "Tier-1 Liquidity Access | Forex, Metals, Indices, Oil, Crypto CFDs",
    description: "Get direct access to Tier-1 institutional liquidity. Trade 70+ Forex pairs, Metals, Indices, Oil, and Crypto CFDs with aggregated pricing and deep market depth.",
    keywords: [
        "tier-1 liquidity",
        "institutional forex liquidity",
        "metals liquidity",
        "crypto CFD liquidity",
        "oil liquidity",
        "indices liquidity",
        "deep market depth",
        "aggregated pricing"
    ],
    openGraph: {
        title: "Tier-1 Liquidity Access | FxTrusts",
        description: "Institutional liquidity for all asset classes. Low latency execution and deep market depth.",
        type: 'website',
        url: 'https://fxtrusts.com/solutions/liquidity-access',
    },
};

export default function LiquidityAccessPage() {
    return (
        <main className={styles.main}>


            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>INSTITUTIONAL GRADE</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Direct <span className={styles.heroHighlight}>TIER-1 ACCESS</span> to Global Markets
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Why settle for second-tier pricing? Connect your brokerage to the world's leading liquidity providers
                        and offer your clients the tightest spreads across all asset classes.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>
                            Connect to Liquidity
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="/pricing" className={styles.btnSecondary}>
                            View Pricing Plans
                        </Link>
                    </div>
                </div>
            </section>

            {/* Asset Classes Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>MULTI-ASSET LIQUIDITY</span>
                        <h2 className={styles.sectionTitle}>One Connection. Unlimited Markets.</h2>
                    </div>

                    <div className={styles.packageGrid}>
                        <div className={styles.packageCard}>
                            <div className={styles.packageIcon}><span>💱</span></div>
                            <h3 className={styles.packageTitle}>Forex</h3>
                            <p className={styles.packageText}>
                                70+ currency pairs including majors, minors, and exotics. Aggregated from 15+ LPs.
                            </p>
                        </div>

                        <div className={styles.packageCard}>
                            <div className={styles.packageIcon}><span>🥇</span></div>
                            <h3 className={styles.packageTitle}>Metals</h3>
                            <p className={styles.packageText}>
                                Spot Gold, Silver, Platinum, and Palladium with institutional market depth.
                            </p>
                        </div>

                        <div className={styles.packageCard}>
                            <div className={styles.packageIcon}><span>📊</span></div>
                            <h3 className={styles.packageTitle}>Indices</h3>
                            <p className={styles.packageText}>
                                Trade global benchmarks like S&P 500, DAX 40, and FTSE 100 with low latency.
                            </p>
                        </div>

                        <div className={styles.packageCard}>
                            <div className={styles.packageIcon}><span>🛢️</span></div>
                            <h3 className={styles.packageTitle}>Oil & Energy</h3>
                            <p className={styles.packageText}>
                                WTI, Brent Crude, and Natural Gas with competitive financing and hedging options.
                            </p>
                        </div>

                        <div className={styles.packageCard}>
                            <div className={styles.packageIcon}><span>₿</span></div>
                            <h3 className={styles.packageTitle}>Crypto CFDs</h3>
                            <p className={styles.packageText}>
                                20+ major crypto pairs including BTC, ETH, and SOL with 24/7 liquidity access.
                            </p>
                        </div>

                        <div className={styles.packageCard}>
                            <div className={styles.packageIcon}><span>⚡</span></div>
                            <h3 className={styles.packageTitle}>Execution</h3>
                            <p className={styles.packageText}>
                                Sub-8ms average latency with cross-connections in LD4 and NY4 data centers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className={styles.sectionTitle}>Global Liquidity, Simplified.</h2>
                        <p style={{ marginBottom: '2rem', color: '#666' }}>
                            Get a single FIX API connection to a consolidated pool of Top-Tier liquidity.
                        </p>
                        <Link href="/company/contact" className={styles.btnPrimary}>
                            Inquire for Liquidity
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
