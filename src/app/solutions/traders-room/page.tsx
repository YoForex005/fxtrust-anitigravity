import { Metadata } from 'next';
import Link from 'next/link';


import styles from './traders-room.module.css';

export const metadata: Metadata = {
    title: "Trader's Room & Client Portal | User Dashboard for Forex Brokers",
    description: "Launch a professional Trader's Room and Client Portal. Secure dashboard for deposits, profile management, and MT5 account control. Fully branded for your brokerage.",
    keywords: [
        "traders room",
        "client portal for forex",
        "forex broker dashboard",
        "trader dashboard",
        "forex CRM portal",
        "broker client management",
        "MT5 client area"
    ],
    openGraph: {
        title: "Trader's Room & Client Portal | FxTrusts",
        description: "Secure, branded client portal for your traders. Integrated with MT5 for real-time account management.",
        type: 'website',
        url: 'https://fxtrusts.com/solutions/traders-room',
    },
};

export default function TradersRoomPage() {
    return (
        <main className={styles.main}>


            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>CLIENT EXPERIENCE</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        A <span className={styles.heroHighlight}>TRADER'S ROOM</span> Built for Conversion
                    </h1>
                    <p className={styles.heroSubtitle}>
                        First impressions matter. Give your traders a sleek, modern dashboard where they can manage their accounts,
                        deposit funds instantly, and access your services with zero friction.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>
                            Request a Demo
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="/live-demo" className={styles.btnSecondary}>
                            View Live Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>CORE CAPABILITIES</span>
                        <h2 className={styles.sectionTitle}>Everything a Modern Trader Expects</h2>
                    </div>

                    <div className={styles.packageGrid}>
                        <div className={styles.packageCard}>
                            <div className={styles.packageIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3 className={styles.packageTitle}>Secure Onboarding</h3>
                            <p className={styles.packageText}>
                                Automated KYC and AML verification integrated directly into the registration flow.
                                Users can upload documents and get verified in minutes.
                            </p>
                        </div>

                        <div className={styles.packageCard}>
                            <div className={styles.packageIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="5" width="20" height="14" rx="2" />
                                    <line x1="2" y1="10" x2="22" y2="10" />
                                </svg>
                            </div>
                            <h3 className={styles.packageTitle}>Instant Deposits</h3>
                            <p className={styles.packageText}>
                                Integrated with 20+ payment gateways. Support for Credit Cards, Crypto,
                                and Bank Transfers with real-time balance updates.
                            </p>
                        </div>

                        <div className={styles.packageCard}>
                            <div className={styles.packageIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <polyline points="16 11 18 13 22 9" />
                                </svg>
                            </div>
                            <h3 className={styles.packageTitle}>Account Management</h3>
                            <p className={styles.packageText}>
                                Create live and demo MT5 accounts instantly. Manage leverage, reset passwords,
                                and monitor equity—all from one place.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className={styles.sectionTitle}>Ready to Upgrade Your Client Experience?</h2>
                        <p style={{ marginBottom: '2rem', color: '#666' }}>
                            Don't let a clunky dashboard drive your clients away. Launch a high-performance Trader's Room today.
                        </p>
                        <Link href="/company/contact" className={styles.btnPrimary}>
                            Get Started Now
                        </Link>
                    </div>
                </div>
            </section>


        </main>
    );
}
