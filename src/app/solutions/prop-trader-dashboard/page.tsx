import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Prop Dashboard for Traders | Progress Tracker & Analytics",
    description: "Empower your traders with a high-performance dashboard. Real-time progress trackers, advanced analytics, and account management.",
    keywords: ["prop trader dashboard", "progress tracker", "trading analytics", "account management portal", "trader dashboard tech"],
};

export default function PropTraderDashboardPage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="Trader HUD"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m16 10-4 4-4-4" /></svg>}
                title="The Ultimate Trader Dashboard"
                subtitle="Give your traders the tools they need to succeed. Real-time equity tracking, drawdown monitors, and advanced performance analytics in one sleek interface."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>USER EXPERIENCE</span>
                        <h2 className={styles.sectionTitle}>Insights That Drive Performance</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📈</div>
                            <h3 className={styles.featureTitle}>Progress Trackers</h3>
                            <p className={styles.featureText}>Visual indicators for profit targets and drawdown limits so traders always know where they stand.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📉</div>
                            <h3 className={styles.featureTitle}>Advanced Analytics</h3>
                            <p className={styles.featureText}>Deep dive into win rates, average RR, and asset distribution to help traders optimize their edge.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>💳</div>
                            <h3 className={styles.featureTitle}>Account Control</h3>
                            <p className={styles.featureText}>Manage multiple challenges, view payout history, and upgrade accounts from a single portal.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
