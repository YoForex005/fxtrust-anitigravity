import { Metadata } from 'next';
import Link from 'next/link';


import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Prop Challenge Manager | Custom Evaluation Rules & Drawdowns",
    description: "Multi-step challenge management for prop firms. Define evaluation rules, profit targets, and drawdown limits with precision.",
    keywords: ["prop challenge manager", "evaluation rules", "profit targets", "drawdown management", "prop firm technology"],
};

export default function PropChallengeManagerPage() {
    return (
        <main className={styles.main}>

            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>CHALLENGE ARCHITECT</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Precision <span className={styles.heroHighlight}>CHALLENGE</span> Management
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Define your edge. Create 1, 2, or 3-step challenges with custom evaluation rules,
                        dynamic profit targets, and intelligent drawdown tracking.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Build Your Rules</Link>
                        <Link href="/solutions/prop-firm" className={styles.btnSecondary}>Explore Prop Tech</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>CORE ENGINE</span>
                        <h2 className={styles.sectionTitle}>Total Control Over Every Metric</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>⚙️</div>
                            <h3 className={styles.featureTitle}>Evaluation Rules</h3>
                            <p className={styles.featureText}>Set minimum trading days, max daily loss, and total drawdown parameters with surgical precision.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🎯</div>
                            <h3 className={styles.featureTitle}>Profit Targets</h3>
                            <p className={styles.featureText}>Define tiered profit targets per phase to ensure only the most disciplined traders advance.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📉</div>
                            <h3 className={styles.featureTitle}>Drawdown Logic</h3>
                            <p className={styles.featureText}>Support for static, trailing, and balance-based drawdown models to protect your firm's capital.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
