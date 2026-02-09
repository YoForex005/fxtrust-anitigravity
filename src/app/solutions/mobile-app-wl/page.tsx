import { Metadata } from 'next';
import Link from 'next/link';


import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "White Label Mobile App | Custom iOS & Android Trading Apps",
    description: "Launch your own branded mobile trading app. Fully customized iOS and Android applications integrated with your brokerage infrastructure.",
    keywords: ["mobile trading app", "white label app", "iOS trading app", "Android trading app", "branded trading mobile"],
};

export default function MobileAppWLPage() {
    return (
        <main className={styles.main}>

            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>BRAND MOBILITY</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Native <span className={styles.heroHighlight}>Mobile</span> Branding
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Your logo in the App Store and Google Play. Offer a premium native trading
                        experience that keeps your clients engaged anywhere, anytime.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Launch Your App</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>OMNICHANNEL</span>
                        <h2 className={styles.sectionTitle}>Premium Mobile Experience</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📱</div>
                            <h3 className={styles.featureTitle}>Multi-OS Support</h3>
                            <p className={styles.featureText}>Fully native applications optimized for both Apple iOS and Android devices.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🎨</div>
                            <h3 className={styles.featureTitle}>Custom UI/UX</h3>
                            <p className={styles.featureText}>Tailored design that reflects your brand identity, from colors to typography.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔗</div>
                            <h3 className={styles.featureTitle}>Deep Integration</h3>
                            <p className={styles.featureText}>Direct connection to your CRM, Trader's Room, and platform for seamless account management.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
