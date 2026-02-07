import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Ultra-Low Latency VPS Hosting | Optimized for Expert Advisors",
    description: "Get the edge with our ultra-low latency VPS hosting. Optimized for MT5, Expert Advisors, and high-frequency trading bots.",
    keywords: ["Forex VPS", "low latency hosting", "MT5 VPS", "Expert Advisor hosting", "trading server"],
};

export default function VPSHostingPage() {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>LATENCY OPTIMIZED</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Ultra-Low <span className={styles.heroHighlight}>Latency</span> VPS
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Ensure 100% uptime for your traders' Expert Advisors and bots.
                        Co-located with major liquidity hubs for sub-millisecond execution.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Get VPS Pricing</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>TRADING TECH</span>
                        <h2 className={styles.sectionTitle}>Built for High-Speed Trading</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🌩️</div>
                            <h3 className={styles.featureTitle}>Sub-ms Execution</h3>
                            <p className={styles.featureText}>Strategically located in Equinix data centers (NY4, LD4) for the fastest possible trades.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🛡️</div>
                            <h3 className={styles.featureTitle}>99.99% Uptime</h3>
                            <p className={styles.featureText}>Redundant power and fiber connections guarantee your bots never miss a pip.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🚀</div>
                            <h3 className={styles.featureTitle}>SSD Powered</h3>
                            <p className={styles.featureText}>Enterprise-grade NVMe storage for rapid data processing and MT5 responsiveness.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
