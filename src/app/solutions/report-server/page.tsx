import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "MT5 Report Server | Advanced Data Extraction & Analytics",
    description: "Unlock the power of your trading data. Advanced report server for MT5 with real-time analytics and custom reporting tools.",
    keywords: ["MT5 reporting", "data extraction", "trading analytics", "MT5 server tools", "brokerage data"],
};

export default function ReportServerPage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="Data Intelligence"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                title="Advanced MT5 Reporting"
                subtitle="Convert raw trading data into actionable insights. Our report server provides deep-dive analytics for risk management, marketing, and compliance."
            />

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

        </main>
    );
}
