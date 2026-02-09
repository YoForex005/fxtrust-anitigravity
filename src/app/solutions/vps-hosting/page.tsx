import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Ultra-Low Latency VPS Hosting | Optimized for Expert Advisors",
    description: "Get the edge with our ultra-low latency VPS hosting. Optimized for MT5, Expert Advisors, and high-frequency trading bots.",
    keywords: ["Forex VPS", "low latency hosting", "MT5 VPS", "Expert Advisor hosting", "trading server"],
};

export default function VPSHostingPage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="Latency Optimized"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                title="Ultra-Low Latency VPS"
                subtitle="Ensure 100% uptime for your traders' Expert Advisors and bots. Co-located with major liquidity hubs for sub-millisecond execution."
            />

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

        </main>
    );
}
