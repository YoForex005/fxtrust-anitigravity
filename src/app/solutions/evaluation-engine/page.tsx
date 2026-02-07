import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Automated Evaluation Engine | Demo to Funded Transition",
    description: "Automate the transition from demo to funded accounts. Instant breach detection and certificate generation for prop firms.",
    keywords: ["evaluation engine", "automated funded accounts", "breach detection", "payout automation", "prop firm automation"],
};

export default function EvaluationEnginePage() {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>AUTO-PILOT PASS</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        The <span className={styles.heroHighlight}>EVALUATION</span> Engine
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Stop manual account management. Our engine handles the transition from demo to funded
                        instantly, ensuring a seamless experience for your top traders.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Automate Now</Link>
                    </div>
                </div>
            </section>

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
            <Footer />
        </main>
    );
}
