import { Metadata } from 'next';
import Link from 'next/link';

import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Automated KYC/AML Verification | Sumsub & Onfido Integrations",
    description: "Verify your traders instantly. Seamless KYC and AML verification integrations with top-tier providers like Sumsub and Onfido.",
    keywords: ["KYC verification", "AML compliance", "Sumsub integration", "Onfido for brokers", "automated trader verification"],
};

export default function KYCAMLVerificationPage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="Instant Verification"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>}
                title="Automated KYC/AML Flow"
                subtitle="Onboard clients in minutes, not days. Fully integrated verification systems that handle identity, address, and AML screening automatically."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>COMPLIANCE TECH</span>
                        <h2 className={styles.sectionTitle}>Seamless Trader Onboarding</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>ID</div>
                            <h3 className={styles.featureTitle}>ID Verification</h3>
                            <p className={styles.featureText}>AI-powered scanning of passports, IDs, and driver's licenses from 190+ countries.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>👤</div>
                            <h3 className={styles.featureTitle}>Liveness Check</h3>
                            <p className={styles.featureText}>Secure biometric verification with liveness detection to prevent identity fraud.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔍</div>
                            <h3 className={styles.featureTitle}>Global AML</h3>
                            <p className={styles.featureText}>Real-time screening against global sanction lists, PEPs, and adverse media databases.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
