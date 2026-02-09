import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Trade Copier Services | Master-to-Sub Account Replication",
    description: "High-speed trade copier services for MT5. Replicate trades across multiple accounts and brokers with sub-millisecond latency.",
    keywords: ["trade copier", "MT5 trade copier", "account replication", "trading utility", "broker-to-broker copier"],
};

export default function TradeCopierPage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="Ultra-Fast Replication"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>}
                title="Professional Trade Copier"
                subtitle="Reliable, sub-millisecond trade replication for MT5 accounts. Perfect for managing multiple accounts or providing signal services."
            />

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
