import { Metadata } from 'next';
import Link from 'next/link';

import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Copy Trading & Social Trading Platform | Branded Solutions",
    description: "Launch your own branded copy trading platform. Connect master traders with followers and automate trade replication and performance fees.",
    keywords: ["copy trading platform", "social trading software", "branded social trading", "trade replication", "trading community"],
};

export default function CopyTradingPage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="Social Investing"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
                title="Branded Copy Trading"
                subtitle="Build a thriving social trading ecosystem. Allow your top traders to share their strategies and enable others to follow them automatically."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>ENGAGEMENT TECH</span>
                        <h2 className={styles.sectionTitle}>Connect Traders Everywhere</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🤝</div>
                            <h3 className={styles.featureTitle}>Master/Follower Sync</h3>
                            <p className={styles.featureText}>Ultra-low latency trade replication from master accounts to hundreds of followers simultaneously.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🏅</div>
                            <h3 className={styles.featureTitle}>Trader Rankings</h3>
                            <p className={styles.featureText}>Live performance leaderboards to help followers find and subscribe to the best strategies.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>💰</div>
                            <h3 className={styles.featureTitle}>Fee Management</h3>
                            <p className={styles.featureText}>Automated performance fee sharing between masters and the brokerage platform.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
