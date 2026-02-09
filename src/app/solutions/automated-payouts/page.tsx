import { Metadata } from 'next';
import Link from 'next/link';

import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Automated Payout Systems | Mass Payouts for Prop Firms",
    description: "Automate your trader payouts. Scalable mass payout infrastructure for Prop Firms and brokers with multi-channel support.",
    keywords: ["automated payouts", "mass payouts", "prop firm payouts", "payment automation", "trader payments"],
};

export default function AutomatedPayoutsPage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="Scalable Payouts"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                title="Streamlined Payout Systems"
                subtitle="Scale your Prop Firm or Brokerage without manual payout headaches. Process thousands of withdrawals across crypto and fiat channels automatically."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>OPERATIONAL EFFICIENCY</span>
                        <h2 className={styles.sectionTitle}>Payouts at Scale</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🤖</div>
                            <h3 className={styles.featureTitle}>Mass Distribution</h3>
                            <p className={styles.featureText}>Send payouts to hundreds of traders simultaneously via API or batch upload.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📝</div>
                            <h3 className={styles.featureTitle}>Compliance Ready</h3>
                            <p className={styles.featureText}>Automated tax form collection and KYC verification before payout release.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔔</div>
                            <h3 className={styles.featureTitle}>Instant Notifications</h3>
                            <p className={styles.featureText}>Keep your traders informed with real-time status updates via email and dashboard.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
