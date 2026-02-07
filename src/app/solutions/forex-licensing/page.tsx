import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Forex & Prop Firm Licensing | FSA, ASIC, CySEC Consulting",
    description: "Navigate the complex world of financial regulation. Expert licensing consulting for Forex brokers and Prop Firms across major global regulators.",
    keywords: ["forex license", "ASIC license consulting", "CySEC broker license", "FSA regulation", "prop firm legal"],
};

export default function ForexLicensingPage() {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>REGULATORY ADVISORY</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Expert <span className={styles.heroHighlight}>Licensing</span> Consulting
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Don't let regulation slow you down. Our consultants guide you through the
                        entire application process for major financial licenses worldwide.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Consult an Expert</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>GLOBAL REGULATORS</span>
                        <h2 className={styles.sectionTitle}>Licensing Pathways</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>⚖️</div>
                            <h3 className={styles.featureTitle}>Tier-1 Regulation</h3>
                            <p className={styles.featureText}>Full support for CySEC, ASIC, and FCA license applications for ultimate market trust.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🌍</div>
                            <h3 className={styles.featureTitle}>Emerging Jurisdictions</h3>
                            <p className={styles.featureText}>Guidance for SCB, VFSC, and FSRA licenses tailored to your business model and target markets.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📊</div>
                            <h3 className={styles.featureTitle}>Compliance Audit</h3>
                            <p className={styles.featureText}>Internal audits and reporting frameworks to ensure you stay compliant post-licensing.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
