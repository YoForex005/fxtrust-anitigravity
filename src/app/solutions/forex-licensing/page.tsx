import { Metadata } from 'next';
import Link from 'next/link';

import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Forex & Prop Firm Licensing | FSA, ASIC, CySEC Consulting",
    description: "Navigate the complex world of financial regulation. Expert licensing consulting for Forex brokers and Prop Firms across major global regulators.",
    keywords: ["forex license", "ASIC license consulting", "CySEC broker license", "FSA regulation", "prop firm legal"],
};

export default function ForexLicensingPage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="Regulatory Advisory"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                title="Expert Licensing Consulting"
                subtitle="Don't let regulation slow you down. Our consultants guide you through the entire application process for major financial licenses worldwide."
            />

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

        </main>
    );
}
