import { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/components/Footer';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Fiat PSP Integration | Visa, Mastercard & Bank Wire",
    description: "Multiple Fiat PSP integrations for your brokerage. Support for Visa, Mastercard, and global bank transfers with high approval rates.",
    keywords: ["Fiat PSP", "credit card processing", "brokerage payments", "Visa Mastercard integration", "bank wire"],
};

export default function FiatPSPPage() {
    return (
        <main className={styles.main}>

            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>FIAT INFRASTRUCTURE</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Global <span className={styles.heroHighlight}>Fiat</span> Integration
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Connect to top-tier Payment Service Providers (PSPs) worldwide.
                        Optimize approval rates and offer local payment methods to your users.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Contact Sales</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>GLOBAL BANKING</span>
                        <h2 className={styles.sectionTitle}>Seamless Fiat On-Ramp</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>💳</div>
                            <h3 className={styles.featureTitle}>Card Processing</h3>
                            <h4 className={styles.featureText}>Accept Visa and Mastercard with 3D Secure 2.0 and anti-fraud monitoring.</h4>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🏦</div>
                            <h3 className={styles.featureTitle}>Local Transfers</h3>
                            <p className={styles.featureText}>Support for SEPA, SWIFT, and regional instant banking methods.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>⚙️</div>
                            <h3 className={styles.featureTitle}>Smart Routing</h3>
                            <p className={styles.featureText}>Automatically route transactions to the most successful PSP based on geography and amount.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
