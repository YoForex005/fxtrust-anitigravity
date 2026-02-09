import { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/components/Footer';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Multi-Currency Wallet System | Internal Transfers & Storage",
    description: "Advanced internal wallet system for traders. Support for multi-currency storage, internal transfers, and vault security.",
    keywords: ["wallet system", "multi-currency wallet", "internal transfers", "forex wallet", "secure storage"],
};

export default function WalletSystemPage() {
    return (
        <main className={styles.main}>

            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>INTERNAL BANKING</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Secure <span className={styles.heroHighlight}>Wallet</span> Systems
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Your own internal financial hub. Give traders the ability to store funds,
                        perform internal transfers, and manage multiple currencies in a secure vault.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Setup Wallet</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>FINTECH CORE</span>
                        <h2 className={styles.sectionTitle}>Comprehensive Fund Management</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>💼</div>
                            <h3 className={styles.featureTitle}>Multi-Wallet Support</h3>
                            <p className={styles.featureText}>Separate wallets for trading accounts, referrals, and commissions with instant conversion.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔄</div>
                            <h3 className={styles.featureTitle}>Instant Transfers</h3>
                            <p className={styles.featureText}>Allow traders to move funds between their wallet and trading accounts in sub-seconds.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔐</div>
                            <h3 className={styles.featureTitle}>Vault Security</h3>
                            <p className={styles.featureText}>Advanced encryption, 2FA, and cold-storage integration for ultimate security.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
