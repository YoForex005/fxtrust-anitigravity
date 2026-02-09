import { Metadata } from 'next';
import Link from 'next/link';

import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Branded Website & Landing Pages | High-Conversion FX Sites",
    description: "Launch a professional brokerage website. Fully integrated landing pages and registration systems designed for high conversion.",
    keywords: ["broker website", "landing pages", "FX website design", "trader registration", "conversion optimization"],
};

export default function BrandedWebsitePage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="Conversion Driven"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m16 10-4 4-4-4" /></svg>}
                title="Premium Broker Websites"
                subtitle="Don't lose clients to bad design. We build high-performance, SEO-optimized websites and landing pages that convert visitors into active traders."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>PRESENCE</span>
                        <h2 className={styles.sectionTitle}>Digital Excellence</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🎨</div>
                            <h3 className={styles.featureTitle}>Stunning UI</h3>
                            <p className={styles.featureText}>Modern, responsive designs that look great on desktop, tablet, and mobile.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📝</div>
                            <h3 className={styles.featureTitle}>Seamless Signup</h3>
                            <p className={styles.featureText}>Fully integrated registration forms that sync directly with your CRM and MT5.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📈</div>
                            <h3 className={styles.featureTitle}>SEO Optimized</h3>
                            <p className={styles.featureText}>Built with the latest SEO best practices to ensure high visibility in search engines.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
