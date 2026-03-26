import styles from './rtx-terminal.module.css';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';
import RtxTerminalDemoAccessSection from './DemoAccessSection';
import DataExchangeApiSection from './DataExchangeApiSection';

export const metadata: Metadata = {
    title: 'RTX5 Trading Terminal | The Industry Standard for Traders & Brokers',
    description:
        'RTX5 is a powerful, reliable trading terminal for Forex and stock markets. Built-in marketplace, trading signals, virtual hosting, and enterprise-grade APIs.',
    keywords: [
        'RTX5 Trading Terminal',
        'Forex Trading Platform',
        'Trading Signals',
        'Expert Advisors',
        'Virtual Hosting Trading',
        'Trading Terminal Download',
    ],
    openGraph: {
        title: 'RTX5 Trading Terminal | The Industry Standard for Traders & Brokers',
        description:
            'RTX5 is a powerful, reliable trading terminal for Forex and stock markets with built-in services.',
        url: 'https://fxtrusts.com/solutions/rtx-terminal',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'RTX5 Trading Terminal | The Industry Standard for Traders & Brokers',
        description:
            'RTX5 is a powerful, reliable trading terminal for Forex and stock markets with built-in services.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/rtx-terminal',
    },
};

export default function RtxTerminalPage() {
    const faqs = [
        {
            question: 'What platforms does RTX5 support?',
            answer: 'RTX5 is available for Windows, macOS, and Linux. You can download the desktop client or access the web-based terminal from any modern browser.',
        },
        {
            question: 'Is RTX5 free to use?',
            answer: 'RTX5 offers free access to core trading features. Premium services like Virtual Hosting, advanced signal subscriptions, and custom Expert Advisors are available through the built-in marketplace.',
        },
        {
            question: 'Can I automate my trading strategies?',
            answer: 'Yes. RTX5 includes a built-in IDE with strategy tester and optimizer. You can develop custom Expert Advisors or choose from 12,000+ ready-made applications in the RTX5 Market.',
        },
        {
            question: 'How does the Trading Signals feature work?',
            answer: 'Subscribe to top-performing signal providers and their trades are automatically copied to your account in real time. With 8,500+ providers available, you can filter by performance, drawdown, and trading style.',
        },
        {
            question: 'What is Virtual Hosting?',
            answer: 'Virtual Hosting provides ultra-low latency cloud servers starting at $17.99/mo with 99.99% uptime, ensuring your automated strategies and signal subscriptions run 24/7 without interruption.',
        },
        {
            question: 'Does RTX5 offer API access?',
            answer: 'Yes. The RTX5 Data Exchange API provides enterprise-grade REST endpoints, WebSocket feeds, and FIX protocol support for building custom integrations with complete documentation.',
        },
    ];

    return (
        <main className={styles.pageWrapper}>
            <FAQSchema faqs={faqs} />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: 'RTX5 Trading Terminal',
                        description: 'The industry standard trading terminal for Forex and stock markets.',
                        url: 'https://fxtrusts.com/solutions/rtx-terminal',
                    }),
                }}
            />

            {/* ──── Hero Section ──── */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.badge}>Industry Standard Platform</div>

                    <h1 className={styles.headline}>
                        The Trading Terminal
                        <br />
                        Built for Performance.
                    </h1>

                    <p className={styles.subheadline}>
                        Successful trading starts with a powerful and reliable platform.
                        RTX5 is the trusted choice for Forex and stock markets, powering
                        millions of traders worldwide.
                    </p>

                    <div className={styles.ctaGroup}>
                        <Link
                            href="https://rtx5.orrnn.com/"
                            className={styles.primaryCta}
                        >
                            Get Started
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>

                        <Link href="https://rtx5.orrnn.com/download/windows" className={styles.secondaryCta}>
                            Download for Windows
                        </Link>
                    </div>

                    <div className={styles.metricsBar}>
                        <div className={styles.metricItem}>
                            <div className={styles.metricValue}>12K+</div>
                            <div className={styles.metricLabel}>Trading Apps</div>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.metricValue}>8,500+</div>
                            <div className={styles.metricLabel}>Signal Providers</div>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.metricValue}>99.99%</div>
                            <div className={styles.metricLabel}>Hosting Uptime</div>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.metricValue}>3,200+</div>
                            <div className={styles.metricLabel}>Developers</div>
                        </div>
                    </div>

                    <div className={styles.heroShowcase}>
                        <div className={styles.showcaseFrame}>
                            <div className={styles.showcaseGlow} aria-hidden="true" />
                            <div className={styles.showcaseImage}>
                                <Image 
                                    src="/New folder/RTX.jpg"
                                    alt="RTX5 Trading Terminal Interface"
                                    width={2400}
                                    height={1350}
                                    sizes="(max-width: 1024px) 100vw, 1200px"
                                    priority
                                    quality={90}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          <DataExchangeApiSection/>
            {/* ──── Why RTX5 — Key Advantages ──── */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <div className={styles.badge}>Why RTX5</div>
                        <h2 className={styles.sectionHeadline}>
                            One Platform. Zero Compromises.
                        </h2>
                        <p className={styles.sectionSubtext}>
                            RTX5 combines institutional-grade execution with a modern trading experience,
                            so you never have to choose between power and usability.
                        </p>
                    </div>

                    <div className={styles.advantageGrid}>
                        <div className={styles.advantageCard}>
                            <div className={styles.advantageNumber}>01</div>
                            <h3 className={styles.advantageTitle}>Sub-Millisecond Execution</h3>
                            <p className={styles.advantageDesc}>
                                Ultra-low latency order routing with direct market access.
                                Every millisecond counts — RTX5 ensures your orders reach
                                liquidity providers instantly.
                            </p>
                        </div>

                        <div className={styles.advantageCard}>
                            <div className={styles.advantageNumber}>02</div>
                            <h3 className={styles.advantageTitle}>Advanced Charting Engine</h3>
                            <p className={styles.advantageDesc}>
                                80+ built-in indicators, 21 timeframes, and unlimited chart windows.
                                Analyze any market with precision using customizable templates.
                            </p>
                        </div>

                        <div className={styles.advantageCard}>
                            <div className={styles.advantageNumber}>03</div>
                            <h3 className={styles.advantageTitle}>Algo Trading IDE</h3>
                            <p className={styles.advantageDesc}>
                                Built-in development environment with strategy tester and genetic
                                optimizer. Deploy custom EAs with one click — no external tools needed.
                            </p>
                        </div>

                        <div className={styles.advantageCard}>
                            <div className={styles.advantageNumber}>04</div>
                            <h3 className={styles.advantageTitle}>Multi-Asset Coverage</h3>
                            <p className={styles.advantageDesc}>
                                Trade Forex, CFDs, stocks, futures, and crypto from a single terminal.
                                Unified portfolio view across all asset classes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ──── Built-in Services ──── */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <div className={styles.badge}>Built-in Services</div>
                        <h2 className={styles.sectionHeadline}>
                            Everything You Need to Trade, Automate, and Scale
                        </h2>
                        <p className={styles.sectionSubtext}>
                            Integrated directly into the RTX5 platform — no external tools required.
                        </p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <path d="M16 10a4 4 0 0 1-8 0" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>RTX5 Market</h3>
                            <p className={styles.featureDesc}>
                                Buy or rent trading robots and technical indicators. The largest
                                store of ready-made trading applications with 12,000+ apps built
                                by verified developers.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 3v18h18" />
                                    <path d="m7 16 4-4 4 4 5-8" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Trading Signals</h3>
                            <p className={styles.featureDesc}>
                                Subscribe to signals of successful traders and copy their deals
                                in real time. Thousands of free and paid signals with 8,500+
                                providers at your disposal.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Freelance</h3>
                            <p className={styles.featureDesc}>
                                Order custom trading robots from 3,200+ professional developers.
                                Get tailor-made Expert Advisors built to your exact specifications.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                                    <line x1="6" y1="6" x2="6.01" y2="6" />
                                    <line x1="6" y1="18" x2="6.01" y2="18" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Virtual Hosting</h3>
                            <p className={styles.featureDesc}>
                                Trade 24/7 with 99.99% uptime and minimal latency. Cloud servers
                                starting at $17.99/mo ensure your strategies never miss a beat.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Data Exchange API</h3>
                            <p className={styles.featureDesc}>
                                Enterprise-grade REST API powering real-time data exchange.
                                Built for reliability and speed with WebSocket feeds and
                                FIX protocol support.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Community &amp; Support</h3>
                            <p className={styles.featureDesc}>
                                Join the largest community of traders with forums, free code library,
                                and expert articles. Dedicated account managers for institutional clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ──── Demo Access Section ──── */}
            {/* <RtxTerminalDemoAccessSection /> */}

            {/* ──── Built for Everyone ──── */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitSection}>
                        <div className={styles.splitContent}>
                            <div className={styles.badge}>Built for Everyone</div>

                            <h2 className={styles.sectionHeadline}>
                                From Retail Traders
                                <br />
                                to Institutional Brokers.
                            </h2>

                            <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                                RTX5 scales with your ambition. Powered by the Orrnn ecosystem,
                                it delivers institutional-grade infrastructure for every type of
                                market participant.
                            </p>

                            <div className={styles.bulletList}>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className={styles.bulletTitle}>Brokerage Infrastructure</h4>
                                        <p className={styles.bulletDesc}>
                                            Complete multi-tier liquidity aggregation and risk management for brokers
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className={styles.bulletTitle}>Fund Management</h4>
                                        <p className={styles.bulletDesc}>
                                            Institutional-grade portfolio analytics and PAMM accounts for fund managers
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className={styles.bulletTitle}>Automated Trading</h4>
                                        <p className={styles.bulletDesc}>
                                            Built-in IDE with strategy tester, optimizer, and 12,000+ Expert Advisors marketplace
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className={styles.bulletTitle}>Enterprise Integrations</h4>
                                        <p className={styles.bulletDesc}>
                                            RESTful APIs, WebSocket feeds, and FIX protocol with full documentation
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={styles.statsBox}>
                                <h3 className={styles.statsHeadline}>Platform Scale</h3>

                                <div className={styles.statsContainer}>
                                    <div className={styles.statItem}>
                                        <div className={`${styles.statValue} ${styles.blueStat}`}>12,000+</div>
                                        <div className={styles.statLabel}>Expert Advisors &amp; Indicators</div>
                                    </div>

                                    <div className={styles.statItem}>
                                        <div className={`${styles.statValue} ${styles.greenStat}`}>8,500+</div>
                                        <div className={styles.statLabel}>Signal Providers</div>
                                    </div>

                                    <div className={styles.statItem}>
                                        <div className={`${styles.statValue} ${styles.amberStat}`}>3,200+</div>
                                        <div className={styles.statLabel}>Professional Developers</div>
                                    </div>

                                    <div className={styles.statItemLast}>
                                        <div className={`${styles.statValue} ${styles.blueStat}`}>99.99%</div>
                                        <div className={styles.statLabel}>Virtual Hosting Uptime</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ──── FAQ Section ──── */}
            <section className={`${styles.section} ${styles.faqSection}`}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <div className={styles.badge}>FAQ</div>
                        <h2 className={styles.sectionHeadline}>Frequently Asked Questions</h2>
                        <p className={styles.sectionSubtext}>
                            Everything you need to know about RTX5 Trading Terminal.
                        </p>
                    </div>

                    <FAQAccordion faqs={faqs} />
                </div>
            </section>

            {/* ──── Final CTA ──── */}
            <section className={styles.finalCtaSection}>
                <div className={styles.container}>
                    <h2 className={styles.finalCtaHeadline}>
                        Start Trading with RTX5 Today.
                    </h2>

                    <p className={styles.finalCtaSubtext}>
                        Download the most powerful trading terminal and join millions of
                        traders worldwide. Available for Windows, macOS, and Linux.
                    </p>

                    <Link
                        href="https://rtx5.orrnn.com/download/windows"
                        className={styles.primaryCta}
                    >
                        Download RTX5 Free
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    );
}
