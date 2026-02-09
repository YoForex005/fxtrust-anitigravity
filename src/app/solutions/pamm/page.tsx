import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "PAMM (Percentage Allocation Management Module) | Social Trading Solutions",
    description: "Launch your own PAMM service. Advanced percentage allocation module for money managers and investors. Real-time distribution and automated fees.",
    keywords: ["PAMM", "Percentage Allocation Management Module", "money manager software", "social trading", "investment platform"],
};

export default function PAMMPage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="Asset Management"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}
                title="Complete PAMM Solutions"
                subtitle="Empower your money managers with a robust Percentage Allocation Management Module. Automate profit distribution, fee calculations, and investor onboarding."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>INVESTMENT TECH</span>
                        <h2 className={styles.sectionTitle}>Institutional Grade Allocation</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📊</div>
                            <h3 className={styles.featureTitle}>Precise Allocation</h3>
                            <p className={styles.featureText}>Automatic distribution of profits, losses, and equity across all investor accounts based on their share.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>💸</div>
                            <h3 className={styles.featureTitle}>Automated Fees</h3>
                            <p className={styles.featureText}>Calculate and distribute performance, management, and entrance fees automatically.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📱</div>
                            <h3 className={styles.featureTitle}>Investor Portal</h3>
                            <p className={styles.featureText}>A dedicated dashboard for investors to monitor performance, deposit funds, and manage risk.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
