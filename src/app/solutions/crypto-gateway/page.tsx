import { Metadata } from 'next';
import Link from 'next/link';


import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Crypto Payment Gateway | Instant BTC, USDT, ETH Deposits & Payouts",
    description: "Accept crypto payments instantly. Integration for BTC, USDT, ETH, and other major tokens with automated conversion and low fees.",
    keywords: ["crypto gateway", "BTC deposits", "USDT payouts", "crypto payment processor", "blockchain payments"],
};

export default function CryptoGatewayPage() {
    return (
        <main className={styles.main}>

            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>CRYPTO PAYMENTS</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Instant <span className={styles.heroHighlight}>Crypto</span> Gateway
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Allow your clients to deposit and withdraw using major cryptocurrencies.
                        Zero chargebacks, instant settlements, and industry-leading security.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Enable Crypto Payments</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>PAYMENT TECH</span>
                        <h2 className={styles.sectionTitle}>Built for High-Velocity Trading</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>₿</div>
                            <h3 className={styles.featureTitle}>Multi-Asset Support</h3>
                            <p className={styles.featureText}>Accept Bitcoin (BTC), Ethereum (ETH), Tether (USDT), and more directly into your CRM.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>⚡</div>
                            <h3 className={styles.featureTitle}>Instant Settlement</h3>
                            <p className={styles.featureText}>Automated transaction confirmation and balance updates for your traders.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🛡️</div>
                            <h3 className={styles.featureTitle}>Secure Payouts</h3>
                            <p className={styles.featureText}>Streamlined crypto withdrawal process with multi-sig security and whitelisting.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
