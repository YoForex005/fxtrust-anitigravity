import { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/components/Footer';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Market Data APIs | Institutional REST & WebSocket Feeds",
    description: "High-performance market data feeds for developers. REST and WebSocket APIs for FX, Crypto, Commodities, and Indices.",
    keywords: ["market data api", "REST api", "WebSocket feed", "forex data feed", "crypto price api"],
};

export default function MarketDataAPIPage() {
    return (
        <main className={styles.main}>

            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>API INFRASTRUCTURE</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Institutional <span className={styles.heroHighlight}>Data</span> Feeds
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Reliable, low-latency market data for your internal systems or customer-facing
                        apps. Scalable REST & WebSocket protocols with deep historical coverage.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Get API Key</Link>
                    </div>
                </div>
            </section>

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
            <Footer />
        </main>
    );
}
