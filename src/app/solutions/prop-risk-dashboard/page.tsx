import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Prop Risk Dashboard | HFT, News Trading & Fraud Detection",
    description: "Monitor your prop firm's risk in real-time. Detect HFT, news trading exploits, and fraudulent behavior instantly.",
    keywords: ["prop risk dashboard", "HFT detection", "fraud prevention", "prop firm risk management", "news trading monitoring"],
};

export default function PropRiskDashboardPage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="Risk Commander"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                title="Intelligent Risk Monitoring"
                subtitle="Protect your firm's capital with real-time analytics. Detect toxic flow, HFT strategies, and fraudulent account patterns before they impact your bottom line."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>PROTECTION LAYER</span>
                        <h2 className={styles.sectionTitle}>Shield Your Profit Margins</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔍</div>
                            <h3 className={styles.featureTitle}>Toxic Flow Analytics</h3>
                            <p className={styles.featureText}>Identify and block latency arbitrage and HFT strategies that exploit demo server pricing.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📰</div>
                            <h3 className={styles.featureTitle}>News Trading Guard</h3>
                            <p className={styles.featureText}>Automatically monitor and enforce restrictions during high-impact economic events.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🛡️</div>
                            <h3 className={styles.featureTitle}>Fraud Prevention</h3>
                            <p className={styles.featureText}>Detect account sharing, IP clusters, and suspicious withdrawal patterns instantly.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
