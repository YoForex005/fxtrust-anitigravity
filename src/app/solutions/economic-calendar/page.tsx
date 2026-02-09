import { Metadata } from 'next';
import Link from 'next/link';


import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Economic Calendar & News Feeds | Real-Time Market Intelligence",
    description: "Provide your traders with professional market data. Real-time news feeds and economic calendars integrated into your platform.",
    keywords: ["economic calendar", "forex news", "real-time market data", "trading signals", "market intelligence"],
};

export default function EconomicCalendarPage() {
    return (
        <main className={styles.main}>

            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>MARKET CONTEXT</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Real-Time <span className={styles.heroHighlight}>Market</span> Insights
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Empower your traders with institutional-grade data. Integrated economic
                        calendars and breaking news feeds keep them informed and trading.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Integrate Feeds</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>INTELLIGENCE</span>
                        <h2 className={styles.sectionTitle}>Engage Your Traders</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📅</div>
                            <h3 className={styles.featureTitle}>Dynamic Calendar</h3>
                            <p className={styles.featureText}>Global economic events with historical data, actual values, and market impact ratings.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📰</div>
                            <h3 className={styles.featureTitle}>News API</h3>
                            <h4 className={styles.featureText}>Curated financial news feeds specifically tailored for FX, Crypto, and Index traders.</h4>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>💬</div>
                            <h3 className={styles.featureTitle}>Sentiment Analysis</h3>
                            <p className={styles.featureText}>Visual sentiment gauges to show traders what the rest of the market is thinking.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
