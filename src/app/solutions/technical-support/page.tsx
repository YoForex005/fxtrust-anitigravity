import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "24/7 Outsourced Technical Support | L1/L2 Helpdesk for Brokers",
    description: "Provide world-class support for your traders. Professional outsourced L1/L2 technical support available 24/7 in multiple languages.",
    keywords: ["outsourced broker support", "forex helpdesk", "24/7 technical support", "L1 L2 support FX", "multilingual support brokerage"],
};

export default function TechnicalSupportPage() {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>GLOBAL ASSISTANCE</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        24/7 <span className={styles.heroHighlight}>Technical</span> Support
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Your traders never sleep, and neither should your support. Professional L1/L2
                        helpdesk services to resolve technical issues instantly and keep clients happy.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Get Support Plan</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>CLIENT SERVICES</span>
                        <h2 className={styles.sectionTitle}>Reliable Helpdesk</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🎧</div>
                            <h3 className={styles.featureTitle}>Multilingual Support</h3>
                            <p className={styles.featureText}>Support in English, Arabic, Spanish, Chinese, and more for your global client base.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔧</div>
                            <h3 className={styles.featureTitle}>Deep Tech Expertise</h3>
                            <p className={styles.featureText}>Resolved L1 and L2 issues related to MT5, CRM, payments, and platform connectivity.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>⏱️</div>
                            <h3 className={styles.featureTitle}>Fast Response</h3>
                            <p className={styles.featureText}>Strict SLAs for response and resolution times to maintain high trader satisfaction scores.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
