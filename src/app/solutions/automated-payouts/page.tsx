import { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/components/Footer';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Automated Payout Systems | Mass Payouts for Prop Firms",
    description: "Automate your trader payouts. Scalable mass payout infrastructure for Prop Firms and brokers with multi-channel support.",
    keywords: ["automated payouts", "mass payouts", "prop firm payouts", "payment automation", "trader payments"],
};

export default function AutomatedPayoutsPage() {
    return (
        <main className={styles.main}>

            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>SCALABLE PAYOUTS</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Streamlined <span className={styles.heroHighlight}>Payout</span> Systems
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Scale your Prop Firm or Brokerage without manual payout headaches.
                        Process thousands of withdrawals across crypto and fiat channels automatically.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Automate Payouts</Link>
                    </div>
                </div>
            </section>

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
            <Footer />
        </main>
    );
}
