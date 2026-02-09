import { Metadata } from 'next';
import Link from 'next/link';


import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Trade Copier Services | Master-to-Sub Account Replication",
    description: "High-speed trade copier services for MT5. Replicate trades across multiple accounts and brokers with sub-millisecond latency.",
    keywords: ["trade copier", "MT5 trade copier", "account replication", "trading utility", "broker-to-broker copier"],
};

export default function TradeCopierPage() {
    return (
        <main className={styles.main}>

            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>ULTRA-FAST REPLICATION</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Professional <span className={styles.heroHighlight}>TRADE COPIER</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Reliable, sub-millisecond trade replication for MT5 accounts. Perfect for
                        managing multiple accounts or providing signal services.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Get Trade Copier</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>REPLICATION ENGINE</span>
                        <h2 className={styles.sectionTitle}>Speed and Reliability First</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>⚡</div>
                            <h3 className={styles.featureTitle}>Zero Lag</h3>
                            <p className={styles.featureText}>Proprietary bridge technology ensuring that slippage is kept to an absolute minimum.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔄</div>
                            <h3 className={styles.featureTitle}>Cross-Broker Support</h3>
                            <p className={styles.featureText}>Copy trades between different brokers and server locations with ease.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🛡️</div>
                            <h3 className={styles.featureTitle}>Risk Filters</h3>
                            <p className={styles.featureText}>Apply lot size multipliers, stop-loss adjustments, and symbol mapping during replication.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
