import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "24/7 Outsourced Technical Support | L1/L2 Helpdesk for Brokers",
    description: "Provide world-class support for your traders. Professional outsourced L1/L2 technical support available 24/7 in multiple languages.",
    keywords: ["outsourced broker support", "forex helpdesk", "24/7 technical support", "L1 L2 support FX", "multilingual support brokerage"],
};

export default function TechnicalSupportPage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="Global Assistance"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>}
                title="24/7 Technical Support"
                subtitle="Your traders never sleep, and neither should your support. Professional L1/L2 helpdesk services to resolve technical issues instantly and keep clients happy."
            />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>CLIENT SERVICES</span>
                        <h2 className={styles.sectionTitle}>Reliable Helpdesk</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🎧</div>
                            <h3 className={styles.featureTitle}>Multilingual Support</h3>
                            <p className={styles.featureText}>Support in English, Arabic, Spanish, Chinese, and more for your global client base.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🔧</div>
                            <h3 className={styles.featureTitle}>Deep Tech Expertise</h3>
                            <p className={styles.featureText}>Resolved L1 and L2 issues related to MT5, CRM, payments, and platform connectivity.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>⏱️</div>
                            <h3 className={styles.featureTitle}>Fast Response</h3>
                            <p className={styles.featureText}>Strict SLAs for response and resolution times to maintain high trader satisfaction scores.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
