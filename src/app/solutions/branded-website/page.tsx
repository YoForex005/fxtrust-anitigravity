import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Branded Website & Landing Pages | High-Conversion FX Sites",
    description: "Launch a professional brokerage website. Fully integrated landing pages and registration systems designed for high conversion.",
    keywords: ["broker website", "landing pages", "FX website design", "trader registration", "conversion optimization"],
};

export default function BrandedWebsitePage() {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>CONVERSION DRIVEN</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Premium <span className={styles.heroHighlight}>Broker</span> Websites
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Don't lose clients to bad design. We build high-performance, SEO-optimized
                        websites and landing pages that convert visitors into active traders.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Build Your Site</Link>
                    </div>
                </div>
            </section>

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
            <Footer />
        </main>
    );
}
