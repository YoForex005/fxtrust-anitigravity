import { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/components/Footer';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "MT5 Report Server | Advanced Data Extraction & Analytics",
    description: "Unlock the power of your trading data. Advanced report server for MT5 with real-time analytics and custom reporting tools.",
    keywords: ["MT5 reporting", "data extraction", "trading analytics", "MT5 server tools", "brokerage data"],
};

export default function ReportServerPage() {
    return (
        <main className={styles.main}>

            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>DATA INTELLIGENCE</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Advanced <span className={styles.heroHighlight}>MT5</span> Reporting
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Convert raw trading data into actionable insights. Our report server
                        provides deep-dive analytics for risk management, marketing, and compliance.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Analyze Your Data</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>ANALYTICS CORE</span>
                        <h2 className={styles.sectionTitle}>Intelligence for Brokers</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📊</div>
                            <h3 className={styles.featureTitle}>Real-time Analytics</h3>
                            <p className={styles.featureText}>Live dashboards showing trading volume, deposits, and client performance metrics.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📑</div>
                            <h3 className={styles.featureTitle}>Custom Reports</h3>
                            <p className={styles.featureText}>Generate automated reports for regulatory bodies or internal stakeholders in any format.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔍</div>
                            <h3 className={styles.featureTitle}>Data Extraction</h3>
                            <p className={styles.featureText}>High-speed API for extracting historical and real-time data from MT5 for external databases.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
