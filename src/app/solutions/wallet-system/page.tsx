import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Multi-Currency Wallet System | Internal Transfers & Storage",
    description: "Advanced internal wallet system for traders. Support for multi-currency storage, internal transfers, and vault security.",
    keywords: ["wallet system", "multi-currency wallet", "internal transfers", "forex wallet", "secure storage"],
};

export default function WalletSystemPage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="Internal Banking"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12V7H5v10h16v-2" /><path d="M16 12h4v4h-4z" /></svg>}
                title="Secure Wallet Systems"
                subtitle="Your own internal financial hub. Give traders the ability to store funds, perform internal transfers, and manage multiple currencies in a secure vault."
            />

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

        </main>
    );
}
