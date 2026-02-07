import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Prop Risk Dashboard | HFT, News Trading & Fraud Detection",
    description: "Monitor your prop firm's risk in real-time. Detect HFT, news trading exploits, and fraudulent behavior instantly.",
    keywords: ["prop risk dashboard", "HFT detection", "fraud prevention", "prop firm risk management", "news trading monitoring"],
};

export default function PropRiskDashboardPage() {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>RISK COMMANDER</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Intelligent <span className={styles.heroHighlight}>RISK</span> Monitoring
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Protect your firm's capital with real-time analytics. Detect toxic flow, HFT strategies,
                        and fraudulent account patterns before they impact your bottom line.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Get Risk Report</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>PROTECTION LAYER</span>
                        <h2 className={styles.sectionTitle}>Shield Your Profit Margins</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔍</div>
                            <h3 className={styles.featureTitle}>Toxic Flow Analytics</h3>
                            <p className={styles.featureText}>Identify and block latency arbitrage and HFT strategies that exploit demo server pricing.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📰</div>
                            <h3 className={styles.featureTitle}>News Trading Guard</h3>
                            <p className={styles.featureText}>Automatically monitor and enforce restrictions during high-impact economic events.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🛡️</div>
                            <h3 className={styles.featureTitle}>Fraud Prevention</h3>
                            <p className={styles.featureText}>Detect account sharing, IP clusters, and suspicious withdrawal patterns instantly.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
