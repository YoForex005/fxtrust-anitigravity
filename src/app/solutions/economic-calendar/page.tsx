import { Metadata } from 'next';
import Link from 'next/link';

import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Economic Calendar & News Feeds | Real-Time Market Intelligence",
    description: "Provide your traders with professional market data. Real-time news feeds and economic calendars integrated into your platform.",
    keywords: ["economic calendar", "forex news", "real-time market data", "trading signals", "market intelligence"],
};

export default function EconomicCalendarPage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="Market Context"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>}
                title="Real-Time Market Insights"
                subtitle="Empower your traders with institutional-grade data. Integrated economic calendars and breaking news feeds keep them informed and trading."
            />

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
