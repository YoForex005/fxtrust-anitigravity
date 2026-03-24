import styles from './trade-copier.module.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';
import TradeCopierPricingSection from './TradeCopierPricingSection';
import TradeCopierDemoAccessSection from './DemoAccessSection';

export const metadata: Metadata = {
    title: 'Trade Copier | Copy Trading Software for MT4, MT5 & cTrader',
    description: 'Copy trades instantly from Master to unlimited sub-accounts across MT4, MT5, and cTrader. Cloud-hosted, low-latency replication with custom risk management.',
    keywords: [
        'Trade Copier',
        'Forex Trade Copier',
        'MT4 MT5 Copy Trading',
        'Master Sub Account Replication',
        'Mirror Trading Software',
        'Cloud Trade Copier',
    ],
    openGraph: {
        title: 'Trade Copier | Copy Trading Software for MT4, MT5 & cTrader',
        description: 'Copy trades instantly from Master to unlimited sub-accounts across MT4, MT5, and cTrader.',
        url: 'https://fxtrusts.com/solutions/trade-copier',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Trade Copier | Copy Trading Software for MT4, MT5 & cTrader',
        description: 'Copy trades instantly from Master to unlimited sub-accounts across MT4, MT5, and cTrader.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/trade-copier',
    },
};

export default function TradeCopierPage() {
    const faqs = [
        {
            question: 'How much slippage should I expect?',
            answer: 'In a standard setup with both accounts on the same data center (e.g., Equinix LD4), slippage is typically under 0.5 pips. Our server-to-server technology ensures orders reach the sub-account broker in milliseconds.',
        },
        {
            question: 'Can I copy trades between MT4 and MT5?',
            answer: 'Yes. Our copier is fully cross-platform compatible. You can copy from an MT4 Master to an MT5 Sub, or vice versa, without any additional configuration required.',
        },
        {
            question: 'What happens if the Master broker has different symbol names?',
            answer: 'The system includes Automated Symbol Mapping. You can manually or automatically map non-standard names (like XAUUSD_pro to GOLD) to ensure trades are always placed on the correct instrument.',
        },
        {
            question: 'Is my account password safe?',
            answer: 'Security is our top priority. We use AES-256 encryption and secure API tunnels. In most cases, we only require "Investor" or "API" access, ensuring we can never withdraw funds from your accounts.',
        },
        {
            question: 'Does the copier work when my computer is off?',
            answer: 'Yes. Our Cloud-Based Copier runs on secure servers 24/7. Once configured, you don\'t need to keep any terminals or computers running locally. No VPS required.',
        },
        {
            question: 'How many sub-accounts can I manage?',
            answer: 'Our infrastructure is designed to be infinitely scalable. Whether you have 5 sub-accounts or 5,000, the replication engine distributes the load across cloud clusters to maintain speed.',
        },
    ];

    return (
        <main className={styles.pageWrapper}>
            <FAQSchema faqs={faqs} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", "name": "Trade Copier | Copy Trading Software for MT4, MT5 & cTrader", "description": "Copy trades instantly from Master to unlimited sub-accounts across MT4, MT5, and cTrader. Cloud-hosted, low-latency replication.", "url": "https://fxtrusts.com/solutions/trade-copier" }) }}
            />

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.badge}>Cloud-Hosted Infrastructure</div>

                    <h1 className={styles.headline}>
                        Your Trades Synced.<br />Everywhere. Instantly.
                    </h1>
                    <p className={styles.subheadline}>
                        Copy trades from Master to unlimited sub-accounts across MT4, MT5, and cTrader with sub-millisecond latency. Cloud-hosted — no VPS required.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Link href="/company/contact" className={styles.primaryCta}>
                            Get Started Free
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </Link>
                        <Link href="/company/contact" className={styles.secondaryCta}>
                            Book a Demo
                        </Link>
                    </div>

                    <div className={styles.metricsBar}>
                        <div className={styles.metricItem}>
                            <div className={styles.metricValue}>99.9%</div>
                            <div className={styles.metricLabel}>Replication Accuracy</div>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.metricValue}>&lt;1ms</div>
                            <div className={styles.metricLabel}>Average Latency</div>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.metricValue}>∞</div>
                            <div className={styles.metricLabel}>Sub-Accounts</div>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.metricValue}>24/7</div>
                            <div className={styles.metricLabel}>Cloud Uptime</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <div className={styles.badge}>Why Trade Copier</div>
                        <h2 className={styles.sectionHeadline}>Benefits of Trade Copier</h2>
                        <p className={styles.sectionSubtext}>
                            Everything you need to replicate trades across unlimited accounts with institutional-grade precision.
                        </p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m16 16-4-4-4 4" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Cloud-Hosted Engine</h3>
                            <p className={styles.featureDesc}>We host the heavy lifting on secure servers. No personal VPS required — your copier runs 24/7 in our cloud.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="m7 16 4-4 4 4 5-8" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Performance Analytics</h3>
                            <p className={styles.featureDesc}>Visualize slippage, latency, and trade accuracy with real-time dashboards and forensic reporting tools.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Mobile-Ready Dashboard</h3>
                            <p className={styles.featureDesc}>Monitor and manage your entire copy trading network from any device, anywhere in the world.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>White-Label Portals</h3>
                            <p className={styles.featureDesc}>A fully branded client portal for your investors — present your copy trading service as a professional hedge fund product.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Platform Agnostic</h3>
                            <p className={styles.featureDesc}>Full support for MT4, MT5, cTrader, and FIX API. Cross-platform copying between any combination.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Instant Alerts</h3>
                            <p className={styles.featureDesc}>Real-time Telegram, email, and webhook notifications for every trade execution, error, or status change.</p>
                        </div>
                    </div>
                </div>
            </section>
                    {/* Demo Access Section */}
            <TradeCopierDemoAccessSection />
            {/* Built for Scale Section */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitSection}>
                        <div className={styles.splitContent}>
                            <div className={styles.badge}>Unlimited Scalability</div>
                            <h2 className={styles.sectionHeadline}>Built for Scale.<br />Master to Unlimited Subs.</h2>
                            <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                                Copy trades from cloud servers with ultra-low latency. Choose between Dedicated or Shared IP configurations to match your needs.
                            </p>

                            <div className={styles.bulletList}>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <div>
                                        <h4 className={styles.bulletTitle}>Cloud Server Replication</h4>
                                        <p className={styles.bulletDesc}>Server-to-server copying with no local terminal needed</p>
                                    </div>
                                </div>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <div>
                                        <h4 className={styles.bulletTitle}>Dedicated or Shared IP</h4>
                                        <p className={styles.bulletDesc}>Flexible IP deployment options nearest to your broker datacenter</p>
                                    </div>
                                </div>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <div>
                                        <h4 className={styles.bulletTitle}>Unlimited MT4/MT5 Subs</h4>
                                        <p className={styles.bulletDesc}>Connect one master or multiple masters to unlimited slave accounts</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.splitVisual}>
                            <div className={styles.statsBox}>
                                <h3 className={styles.statsHeadline}>Live Performance</h3>
                                <div className={styles.statsContainer}>
                                    <div className={styles.statItem}>
                                        <div className={`${styles.statValue} ${styles.blueStat}`}>99.97%</div>
                                        <div className={styles.statLabel}>Uptime Last 30 Days</div>
                                    </div>
                                    <div className={styles.statItem}>
                                        <div className={`${styles.statValue} ${styles.greenStat}`}>0.3ms</div>
                                        <div className={styles.statLabel}>Avg. Execution Latency</div>
                                    </div>
                                    <div className={styles.statItem}>
                                        <div className={`${styles.statValue} ${styles.amberStat}`}>12,400+</div>
                                        <div className={styles.statLabel}>Trades Copied Today</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Control Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <div className={styles.badge}>Full Control</div>
                        <h2 className={styles.sectionHeadline}>God-Like Control Over Every Trade</h2>
                        <p className={styles.sectionSubtext}>
                            Connect your Master to unlimited sub-accounts. Manage risk, lot sizing, symbol mapping, and filtering from a single dashboard.
                        </p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Lot Multipliers</h3>
                            <p className={styles.featureDesc}>Scale trades by 0.5x, 1.0x, 2.0x or use equity-proportional sizing based on sub-account balance.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Symbol Mapping</h3>
                            <p className={styles.featureDesc}>Automatically match symbol names across different brokers — map GOLD to XAUUSD effortlessly.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Trade Filtering</h3>
                            <p className={styles.featureDesc}>Copy only specific symbols, magic numbers, or trade comments. Exclude what you don&apos;t want.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Global Stop-Loss</h3>
                            <p className={styles.featureDesc}>Set hard equity protection across all sub-accounts to limit maximum drawdown.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Inverse Copying</h3>
                            <p className={styles.featureDesc}>Replicate a strategy in reverse — profit from a losing signal by automatically inverting trades.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Equity Protection</h3>
                            <p className={styles.featureDesc}>Hard stops, risk limits, and news filters to keep your accounts safe during volatile events.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <div className={`${styles.badge} ${styles.badgeGreen}`}>Setup Process</div>
                        <h2 className={styles.sectionHeadline}>Get Started in 4 Steps</h2>
                        <p className={styles.sectionSubtext}>
                            From initial configuration to live trade copying in under a week.
                        </p>
                    </div>

                    <div className={styles.stepsGrid}>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>1</div>
                            <h3 className={styles.stepTitle}>Connect Accounts</h3>
                            <p className={styles.stepDesc}>Link your Master and Sub accounts via our secure dashboard. MT4, MT5, cTrader supported.</p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>2</div>
                            <h3 className={styles.stepTitle}>Configure Rules</h3>
                            <p className={styles.stepDesc}>Set lot multipliers, symbol mappings, risk limits, and filtering rules per sub-account.</p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>3</div>
                            <h3 className={styles.stepTitle}>Test on Demo</h3>
                            <p className={styles.stepDesc}>Validate replication speed and accuracy on demo accounts before going live.</p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>4</div>
                            <h3 className={styles.stepTitle}>Go Live</h3>
                            <p className={styles.stepDesc}>Activate live replication. Monitor performance and slippage from your dashboard.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <div className={`${styles.badge} ${styles.badgePurple}`}>Integrations</div>
                        <h2 className={styles.sectionHeadline}>We Integrate With Everything</h2>
                        <p className={styles.sectionSubtext}>
                            Seamless alerts, webhooks, and API connectivity to automate your entire trading workflow.
                        </p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>CRM Integration</h3>
                            <p className={styles.featureDesc}>Programmatically link new sub-accounts via your existing CRM. RESTful API and webhooks included.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Telegram & Email Alerts</h3>
                            <p className={styles.featureDesc}>Instant notifications for every trade execution, copy failure, or account status change.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Webhooks & API</h3>
                            <p className={styles.featureDesc}>Trigger automation, push data to external systems, or build custom front-ends with our SDK.</p>
                        </div>
                    </div>

                    <div className={`${styles.textCenter}`} style={{ marginTop: '3rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>Supported Platforms</h3>
                        <div className={styles.platformRow}>
                            <div className={styles.platformBadge}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                MetaTrader 4
                            </div>
                            <div className={styles.platformBadge}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                MetaTrader 5
                            </div>
                            <div className={styles.platformBadge}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
                                cTrader
                            </div>
                            <div className={styles.platformBadge}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                                FIX API
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <h2 className={styles.sectionHeadline}>Frequently Asked Questions</h2>
                        <p className={styles.sectionSubtext}>
                            Everything you need to know about our Trade Copier infrastructure.
                        </p>
                    </div>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </div>
            </section>

          

            {/* Pricing Section */}
            {/* <TradeCopierPricingSection /> */}

            {/* Final CTA Section */}
            <section className={styles.finalCtaSection}>
                <div className={styles.container}>
                    <h2 className={styles.finalCtaHeadline}>Ready to Scale Your Trading?</h2>
                    <p className={styles.finalCtaSubtext}>
                        Stop copying trades manually. Start replicating with institutional-grade precision across unlimited accounts.
                    </p>
                    <Link href="/company/contact" className={styles.primaryCta}>
                        Get Started Free
                        <svg style={{ marginLeft: "0.5rem", width: "20px", height: "20px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    );
}
