import { Metadata } from 'next';
import Link from 'next/link';

import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Automated Evaluation Engine | Demo to Funded Transition",
    description: "Automate the transition from demo to funded accounts. Instant breach detection and certificate generation for prop firms.",
    keywords: ["evaluation engine", "automated funded accounts", "breach detection", "payout automation", "prop firm automation"],
};

export default function EvaluationEnginePage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="Auto-pilot Pass"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>}
                title="The Evaluation Engine"
                subtitle="Stop manual account management. Our engine handles the transition from demo to funded instantly, ensuring a seamless experience for your top traders."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>AUTOMATION FLOW</span>
                        <h2 className={styles.sectionTitle}>Zero Friction. Instant Scaling.</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>⚡</div>
                            <h3 className={styles.featureTitle}>Instant Transitions</h3>
                            <p className={styles.featureText}>The moment a target is hit, the account is upgraded. No wait times, no support tickets.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📄</div>
                            <h3 className={styles.featureTitle}>Auto-Certificates</h3>
                            <p className={styles.featureText}>Automatically generate branded certificates for traders who pass their challenges.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🛑</div>
                            <h3 className={styles.featureTitle}>Breach Detection</h3>
                            <p className={styles.featureText}>Sub-100ms detection of rule violations with instant account disabling to prevent over-trading.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
