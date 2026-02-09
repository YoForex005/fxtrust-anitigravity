import { Metadata } from 'next';
import Link from 'next/link';


import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Copy Trading & Social Trading Platform | Branded Solutions",
    description: "Launch your own branded copy trading platform. Connect master traders with followers and automate trade replication and performance fees.",
    keywords: ["copy trading platform", "social trading software", "branded social trading", "trade replication", "trading community"],
};

export default function CopyTradingPage() {
    return (
        <main className={styles.main}>

            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>SOCIAL INVESTING</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Branded <span className={styles.heroHighlight}>COPY TRADING</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Build a thriving social trading ecosystem. Allow your top traders to share their
                        strategies and enable others to follow them automatically.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Launch Platform</Link>
                    </div>
                </div>
            </section>

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
