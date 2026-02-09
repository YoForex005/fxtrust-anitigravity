import { Metadata } from 'next';
import Link from 'next/link';


import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "MAM (Multi-Account Manager) | Professional Trading Tools",
    description: "Multi-Account Manager (MAM) for professional traders and fund managers. Execute trades on multiple accounts from a single MT5 terminal.",
    keywords: ["MAM", "Multi-Account Manager", "MT5 MAM", "professional trading tools", "account management"],
};

export default function MAMPage() {
    return (
        <main className={styles.main}>

            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>MULTI-ACCOUNT CONTROL</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Professional <span className={styles.heroHighlight}>MAM</span> Software
                    </h1>
                    <p className={styles.heroSubtitle}>
                        The ultimate tool for professional money managers. Execute trades across hundreds of
                        sub-accounts with customizable allocation methods and zero latency.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Request MAM Demo</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>TRADING TOOLS</span>
                        <h2 className={styles.sectionTitle}>High-Performance Execution</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>⌨️</div>
                            <h3 className={styles.featureTitle}>One-Click Execution</h3>
                            <p className={styles.featureText}>Place trades on the master account and see them instantly replicate across all sub-accounts.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>⚖️</div>
                            <h3 className={styles.featureTitle}>Lot Allocation</h3>
                            <p className={styles.featureText}>Support for various allocation methods including Lot, Percentage, and Proportional (P/L).</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📈</div>
                            <h3 className={styles.featureTitle}>Real-Time Reporting</h3>
                            <p className={styles.featureText}>Comprehensive reports for both managers and investors, detailing equity, balance, and P/L.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
