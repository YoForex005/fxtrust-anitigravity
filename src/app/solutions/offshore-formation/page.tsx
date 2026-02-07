import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Offshore Company Formation | SVG, Mauritius, Labuan & More",
    description: "Launch your brokerage with the right legal structure. Professional offshore company formation services for Forex and Prop Firms in top jurisdictions.",
    keywords: ["offshore company formation", "SVG company formation", "Mauritius forex company", "Labuan brokerage license", "forex legal structure"],
};

export default function OffshoreFormationPage() {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>LEGAL STRUCTURE</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Offshore <span className={styles.heroHighlight}>Company</span> Formation
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Establish your brokerage in globally recognized jurisdictions.
                        We handle the bureaucracy, documentation, and local requirements for a smooth launch.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Start Formation</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>JURISDICTIONS</span>
                        <h2 className={styles.sectionTitle}>Global Entity Setup</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🇻🇨</div>
                            <h3 className={styles.featureTitle}>St. Vincent & Grenadines</h3>
                            <p className={styles.featureText}>Popular choice for start-up brokers due to rapid registration and low maintenance costs.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🇲🇺</div>
                            <h3 className={styles.featureTitle}>Mauritius (FSC)</h3>
                            <p className={styles.featureText}>Regulated status with global prestige, ideal for established brokers looking for institutional credibility.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🇲🇾</div>
                            <h3 className={styles.featureTitle}>Labuan (LFSA)</h3>
                            <p className={styles.featureText}>Mid-shore jurisdiction offering tax benefits and a stable regulatory environment for Asian markets.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
