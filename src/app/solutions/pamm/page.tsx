import { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/components/Footer';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "PAMM (Percentage Allocation Management Module) | Social Trading Solutions",
    description: "Launch your own PAMM service. Advanced percentage allocation module for money managers and investors. Real-time distribution and automated fees.",
    keywords: ["PAMM", "Percentage Allocation Management Module", "money manager software", "social trading", "investment platform"],
};

export default function PAMMPage() {
    return (
        <main className={styles.main}>

            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>ASSET MANAGEMENT</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Complete <span className={styles.heroHighlight}>PAMM</span> Solutions
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Empower your money managers with a robust Percentage Allocation Management Module.
                        Automate profit distribution, fee calculations, and investor onboarding.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Setup PAMM</Link>
                    </div>
                </div>
            </section>

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
            <Footer />
        </main>
    );
}
