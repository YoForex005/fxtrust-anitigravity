import styles from './white-label.module.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'White Label Custom Trading Websites | FXTrusts',
    description: 'Custom white-label trading websites built for brokers, prop firms, and fintech startups. Fully branded platforms with broker integrations, payment systems, and scalable architecture.',
    keywords: [
        'white label trading website',
        'custom broker website',
        'prop firm website development',
        'trading platform development',
        'white label fintech solutions',
        'custom trading dashboard',
        'forex website development',
    ],
    openGraph: {
        title: 'White Label Custom Trading Websites | FXTrusts',
        description: 'Custom white-label trading websites built for brokers, prop firms, and fintech startups. Fully branded, fully yours.',
        type: 'website',
        url: 'https://fxtrusts.com/solutions/white-label-custom-websites',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@FxTrusts',
        creator: '@FxTrusts',
        title: 'White Label Custom Trading Websites | FXTrusts',
        description: 'Custom white-label trading websites built for brokers, prop firms, and fintech startups. Fully branded, fully yours.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/white-label-custom-websites',
    },
};

export default function WhiteLabelCustomWebsitesPage() {
    return (
        <main className={styles.pageWrapper}>
            {/* ==================== HERO SECTION ==================== */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.badge}>White Label Solutions</div>

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'WebPage',
                                name: 'White Label Custom Trading Websites | FXTrusts',
                                description:
                                    'Custom white-label trading websites built for brokers, prop firms, and fintech startups. Fully branded platforms with broker integrations, payment systems, and scalable architecture.',
                                url: 'https://fxtrusts.com/solutions/white-label-custom-websites',
                            }),
                        }}
                    />

                    <h1 className={styles.headline}>
                        White Label Trading Websites
                        <br />
                        Built for Scale
                    </h1>
                    <p className={styles.subheadline}>
                        We design and develop fully custom trading platforms and websites tailored for brokers, prop firms, and fintech startups. Your brand, your rules — powered by enterprise-grade infrastructure.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Link href="/get-started" className={styles.primaryCta}>
                            Get Started
                        </Link>
                        <Link href="/company/contact" className={styles.secondaryCta}>
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* ==================== WHAT WE OFFER ==================== */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <h2 className={styles.sectionHeadline}>What We Build</h2>
                        <p className={styles.sectionSubtext}>
                            From client-facing portals to internal admin systems, we deliver end-to-end web solutions purpose-built for the trading industry.
                        </p>
                    </div>

                    <div className={styles.featureGrid}>
                        {/* Custom Broker Websites */}
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Custom Broker Websites</h3>
                            <p className={styles.featureDesc}>
                                Professionally designed marketing sites and client areas for forex and CFD brokers. Conversion-optimized layouts with multi-language support and regulatory compliance built in.
                            </p>
                        </div>

                        {/* Prop Firm Platforms */}
                        <div className={styles.featureCard}>
                            <div className={`${styles.featureIcon} ${styles.featureIconGreen}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Prop Firm Platforms</h3>
                            <p className={styles.featureDesc}>
                                Complete challenge-based evaluation portals with automated phase management, real-time performance tracking, and trader leaderboards — all branded to your firm.
                            </p>
                        </div>

                        {/* Trading Dashboards */}
                        <div className={styles.featureCard}>
                            <div className={`${styles.featureIcon} ${styles.featureIconPurple}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="3" y="3" width="7" height="7" />
                                    <rect x="14" y="3" width="7" height="7" />
                                    <rect x="14" y="14" width="7" height="7" />
                                    <rect x="3" y="14" width="7" height="7" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Trading Dashboards</h3>
                            <p className={styles.featureDesc}>
                                Data-rich dashboards that visualize account performance, open positions, equity curves, and risk metrics in real time. Built for both traders and administrators.
                            </p>
                        </div>

                        {/* User Portals & Client Areas */}
                        <div className={styles.featureCard}>
                            <div className={`${styles.featureIcon} ${styles.featureIconAmber}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>User Portals &amp; Client Areas</h3>
                            <p className={styles.featureDesc}>
                                Secure self-service portals where clients manage accounts, submit documents, fund wallets, and track activity. Designed to reduce support tickets and increase retention.
                            </p>
                        </div>

                        {/* Payment & KYC Integrations */}
                        <div className={styles.featureCard}>
                            <div className={`${styles.featureIcon} ${styles.featureIconRose}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Payment &amp; KYC Integrations</h3>
                            <p className={styles.featureDesc}>
                                Seamless integration with fiat and crypto payment gateways, automated KYC/AML verification flows, and multi-currency wallet systems for global operations.
                            </p>
                        </div>

                        {/* Admin Panels */}
                        <div className={styles.featureCard}>
                            <div className={`${styles.featureIcon} ${styles.featureIconTeal}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Admin Panels</h3>
                            <p className={styles.featureDesc}>
                                Comprehensive back-office systems with user management, KYC approval workflows, financial reporting, and role-based access control for your operations team.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== WHO IT'S FOR ==================== */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <div className={`${styles.badge} ${styles.badgeGreen}`}>Built for Trading Businesses</div>
                        <h2 className={styles.sectionHeadline}>Who It&apos;s For</h2>
                        <p className={styles.sectionSubtext}>
                            Whether you&apos;re launching a new brokerage or scaling an established prop firm, our white-label solutions adapt to your business model.
                        </p>
                    </div>

                    <div className={styles.audienceGrid}>
                        <div className={styles.audienceCard}>
                            <div className={styles.audienceIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                            </div>
                            <h3 className={styles.audienceTitle}>Forex Brokers</h3>
                            <p className={styles.audienceDesc}>
                                Full-service websites with client areas, IB portals, and trading account management.
                            </p>
                        </div>

                        <div className={styles.audienceCard}>
                            <div className={styles.audienceIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3 className={styles.audienceTitle}>Prop Firms</h3>
                            <p className={styles.audienceDesc}>
                                Challenge platforms, trader portals, and automated evaluation systems under your brand.
                            </p>
                        </div>

                        <div className={styles.audienceCard}>
                            <div className={styles.audienceIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                            </div>
                            <h3 className={styles.audienceTitle}>Trading Educators</h3>
                            <p className={styles.audienceDesc}>
                                Course platforms, signal dashboards, and community portals for trading academies.
                            </p>
                        </div>

                        <div className={styles.audienceCard}>
                            <div className={styles.audienceIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <h3 className={styles.audienceTitle}>Fintech Startups</h3>
                            <p className={styles.audienceDesc}>
                                MVP-ready platforms with rapid iteration, modern tech stacks, and investor-grade UIs.
                            </p>
                        </div>

                        <div className={styles.audienceCard}>
                            <div className={styles.audienceIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M22 2L11 13" />
                                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                                </svg>
                            </div>
                            <h3 className={styles.audienceTitle}>Signal Providers</h3>
                            <p className={styles.audienceDesc}>
                                Subscription-based platforms with signal delivery, performance tracking, and copy trading.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== FULLY CUSTOM DEVELOPMENT (SPLIT SECTION) ==================== */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.splitSection}>
                        <div className={styles.splitContent}>
                            <h2 className={styles.sectionHeadline}>Built Exactly the Way You Need</h2>
                            <p className={styles.subheadline} style={{ fontSize: '1.125rem', margin: '0 0 2rem 0' }}>
                                Every project starts from scratch — no cookie-cutter templates, no bloated page builders. We architect custom solutions designed around your business logic, user flows, and growth targets.
                            </p>

                            <div className={styles.bulletList}>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <div className={styles.bulletTextContainer}>
                                        <h4>Custom Dashboards &amp; Analytics</h4>
                                        <p>Real-time performance visualizations, equity curves, and risk metrics tailored to your users&apos; workflows.</p>
                                    </div>
                                </div>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <div className={styles.bulletTextContainer}>
                                        <h4>Secure Authentication Systems</h4>
                                        <p>Multi-factor authentication, session management, and role-based access control from day one.</p>
                                    </div>
                                </div>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <div className={styles.bulletTextContainer}>
                                        <h4>Real-Time Trading Integrations</h4>
                                        <p>Live data feeds, position tracking, and execution monitoring connected to MT4, MT5, or custom APIs.</p>
                                    </div>
                                </div>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <div className={styles.bulletTextContainer}>
                                        <h4>API &amp; Broker Integrations</h4>
                                        <p>Connect to any broker, liquidity provider, or third-party service through clean, well-documented APIs.</p>
                                    </div>
                                </div>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <div className={styles.bulletTextContainer}>
                                        <h4>Mobile-First Responsiveness</h4>
                                        <p>Every pixel adapts across devices. Your platform looks and performs flawlessly on desktop, tablet, and mobile.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.statsBox}>
                            <h3 className={styles.statsHeadline}>Built for Scale</h3>
                            <div className={styles.statsContainer}>
                                <div className={styles.statItem}>
                                    <div className={`${styles.statValue} ${styles.blueStat}`}>&lt; 2 Weeks</div>
                                    <div className={styles.statLabel}>Average MVP Deployment Time</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={`${styles.statValue} ${styles.greenStat}`}>99.9%</div>
                                    <div className={styles.statLabel}>Infrastructure Uptime</div>
                                </div>
                                <div className={styles.statItemLast}>
                                    <div className={`${styles.statValue} ${styles.pinkStat}`}>Sub-200ms</div>
                                    <div className={styles.statLabel}>Global Page Load Performance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== FEATURES / CAPABILITIES ==================== */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <div className={`${styles.badge} ${styles.badgePurple}`}>Deep Capabilities</div>
                        <h2 className={styles.sectionHeadline}>Technical Capabilities That Matter</h2>
                        <p className={styles.sectionSubtext}>
                            We don&apos;t just build websites — we engineer trading infrastructure. Here&apos;s what goes under the hood of every platform we deliver.
                        </p>
                    </div>

                    <div className={styles.capabilitiesGrid}>
                        {/* Broker Integrations */}
                        <div className={styles.capabilityCard}>
                            <div className={styles.capabilityHeader}>
                                <div className={styles.capabilityIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                    </svg>
                                </div>
                                <h3 className={styles.capabilityTitle}>Broker &amp; Platform Integrations</h3>
                            </div>
                            <p className={styles.capabilityDesc}>
                                Native connectivity to MetaTrader 4, MetaTrader 5, cTrader, and custom trading engines via Manager APIs and FIX protocol. We handle the complexity of real-time data synchronization so your users see accurate account states at all times.
                            </p>
                            <ul className={styles.capabilityList}>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    MT4/MT5 Manager API integration
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    cTrader Open API support
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Custom REST &amp; WebSocket APIs
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Real-time trade mirroring &amp; copy trading
                                </li>
                            </ul>
                        </div>

                        {/* Payment Gateways */}
                        <div className={styles.capabilityCard}>
                            <div className={styles.capabilityHeader}>
                                <div className={styles.capabilityIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                        <line x1="1" y1="10" x2="23" y2="10" />
                                    </svg>
                                </div>
                                <h3 className={styles.capabilityTitle}>Payment Gateways &amp; Crypto</h3>
                            </div>
                            <p className={styles.capabilityDesc}>
                                Accept payments globally with integrated fiat and cryptocurrency processing. We connect your platform to PSPs, banking rails, and blockchain networks with proper reconciliation and audit trails.
                            </p>
                            <ul className={styles.capabilityList}>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Stripe, PayPal &amp; wire transfer support
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    USDT, BTC, ETH &amp; multi-chain wallets
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Automated deposit &amp; withdrawal flows
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Multi-currency wallet management
                                </li>
                            </ul>
                        </div>

                        {/* User Analytics */}
                        <div className={styles.capabilityCard}>
                            <div className={styles.capabilityHeader}>
                                <div className={styles.capabilityIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <line x1="18" y1="20" x2="18" y2="10" />
                                        <line x1="12" y1="20" x2="12" y2="4" />
                                        <line x1="6" y1="20" x2="6" y2="14" />
                                    </svg>
                                </div>
                                <h3 className={styles.capabilityTitle}>User Analytics Dashboards</h3>
                            </div>
                            <p className={styles.capabilityDesc}>
                                Give your team actionable insights with dashboards that track user behavior, trading activity, funnel conversions, and revenue metrics. Every data point is visualized for fast decision-making.
                            </p>
                            <ul className={styles.capabilityList}>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Real-time user activity tracking
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Conversion funnel analysis
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Revenue &amp; PnL reporting
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Exportable reports &amp; scheduled alerts
                                </li>
                            </ul>
                        </div>

                        {/* Multi-Account Management */}
                        <div className={styles.capabilityCard}>
                            <div className={styles.capabilityHeader}>
                                <div className={styles.capabilityIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </div>
                                <h3 className={styles.capabilityTitle}>Multi-Account Management</h3>
                            </div>
                            <p className={styles.capabilityDesc}>
                                Support complex account structures including sub-accounts, IB hierarchies, MAM/PAMM allocations, and multi-tier referral programs. Designed for firms managing thousands of accounts simultaneously.
                            </p>
                            <ul className={styles.capabilityList}>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    IB &amp; affiliate tracking systems
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    MAM/PAMM account allocation
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Multi-tier referral programs
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Bulk account operations
                                </li>
                            </ul>
                        </div>

                        {/* Automation Tools */}
                        <div className={styles.capabilityCard}>
                            <div className={styles.capabilityHeader}>
                                <div className={styles.capabilityIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <circle cx="12" cy="12" r="3" />
                                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                    </svg>
                                </div>
                                <h3 className={styles.capabilityTitle}>Automation Tools</h3>
                            </div>
                            <p className={styles.capabilityDesc}>
                                Reduce manual workload with intelligent automation. From onboarding workflows and email sequences to KYC verification and profit distribution — let the system handle the repetitive work.
                            </p>
                            <ul className={styles.capabilityList}>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Automated KYC/AML verification
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Triggered email &amp; notification flows
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Scheduled report generation
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Auto profit-split &amp; payout processing
                                </li>
                            </ul>
                        </div>

                        {/* Risk Management */}
                        <div className={styles.capabilityCard}>
                            <div className={styles.capabilityHeader}>
                                <div className={styles.capabilityIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <h3 className={styles.capabilityTitle}>Risk Management Systems</h3>
                            </div>
                            <p className={styles.capabilityDesc}>
                                Protect your firm with configurable risk rules that execute in real time. Set drawdown limits, daily loss caps, position size restrictions, and custom breach actions — all enforced programmatically.
                            </p>
                            <ul className={styles.capabilityList}>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Real-time equity monitoring
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Configurable drawdown &amp; loss rules
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Automatic position liquidation
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                    Exposure &amp; instrument-level controls
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== WHY CHOOSE US ==================== */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <h2 className={styles.sectionHeadline}>Why Choose FXTrusts</h2>
                        <p className={styles.sectionSubtext}>
                            We&apos;re not a generic web agency. We specialize exclusively in the trading and fintech space — and that focus makes all the difference.
                        </p>
                    </div>

                    <div className={styles.whyGrid}>
                        <div className={styles.whyCard}>
                            <div className={styles.whyIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                            </div>
                            <h3 className={styles.whyTitle}>Deep Trading Industry Expertise</h3>
                            <p className={styles.whyDesc}>
                                We understand broker workflows, prop firm mechanics, regulatory requirements, and trader expectations. Your project team speaks your language from day one.
                            </p>
                        </div>

                        <div className={styles.whyCard}>
                            <div className={styles.whyIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                                    <line x1="16" y1="8" x2="2" y2="22" />
                                    <line x1="17.5" y1="15" x2="9" y2="15" />
                                </svg>
                            </div>
                            <h3 className={styles.whyTitle}>Fully White-Label Solutions</h3>
                            <p className={styles.whyDesc}>
                                Every element is branded to your firm. Your logo, your colors, your domain. No &quot;powered by&quot; badges or third-party branding anywhere on your platform.
                            </p>
                        </div>

                        <div className={styles.whyCard}>
                            <div className={styles.whyIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                    <polyline points="2 17 12 22 22 17" />
                                    <polyline points="2 12 12 17 22 12" />
                                </svg>
                            </div>
                            <h3 className={styles.whyTitle}>Custom-Built, Not Templates</h3>
                            <p className={styles.whyDesc}>
                                We write custom code for every project. No WordPress themes, no drag-and-drop builders. Clean, maintainable architecture designed for your specific needs.
                            </p>
                        </div>

                        <div className={styles.whyCard}>
                            <div className={styles.whyIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                </svg>
                            </div>
                            <h3 className={styles.whyTitle}>Ongoing Support &amp; Scaling</h3>
                            <p className={styles.whyDesc}>
                                We don&apos;t disappear after launch. Dedicated support, feature development, performance monitoring, and infrastructure scaling as your business grows.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== FINAL CTA ==================== */}
            <section className={styles.finalCtaSection}>
                <div className={styles.container}>
                    <h2 className={styles.finalCtaHeadline}>Launch Your Trading Platform Today</h2>
                    <p className={styles.finalCtaSubtext}>
                        Stop settling for off-the-shelf solutions that don&apos;t fit your business. Build a platform that&apos;s uniquely yours — designed, developed, and deployed by a team that understands the trading industry.
                    </p>
                    <Link href="/get-started" className={styles.primaryCta}>
                        Start Your Project
                        <svg style={{ marginLeft: '0.75rem', width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    );
}
