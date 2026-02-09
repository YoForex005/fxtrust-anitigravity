import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Market Data APIs | Institutional REST & WebSocket Feeds",
    description: "High-performance market data feeds for developers. REST and WebSocket APIs for FX, Crypto, Commodities, and Indices.",
    keywords: ["market data api", "REST api", "WebSocket feed", "forex data feed", "crypto price api"],
};

export default function MarketDataAPIPage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="API Infrastructure"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>}
                title="Institutional Data Feeds"
                subtitle="Reliable, low-latency market data for your internal systems or customer-facing apps. Scalable REST & WebSocket protocols with deep historical coverage."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>DEVELOPER READY</span>
                        <h2 className={styles.sectionTitle}>Built for Scale</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>💻</div>
                            <h3 className={styles.featureTitle}>Dual Protocols</h3>
                            <p className={styles.featureText}>Use the REST API for on-demand queries and WebSockets for real-time streaming.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📈</div>
                            <h3 className={styles.featureTitle}>Deep Coverage</h3>
                            <p className={styles.featureText}>Tick-level historical data for thousands of assets across multiple asset classes.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>⚡</div>
                            <h3 className={styles.featureTitle}>High Throughput</h3>
                            <p className={styles.featureText}>Engineered for high concurrent usage with 99.99% availability and global CDN endpoints.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
