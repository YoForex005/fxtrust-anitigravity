import styles from './crm.module.css';
import Link from 'next/link';
import type { Metadata } from 'next';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';
import CRMDemoAccessSection from './DemoAccessSection';

export const metadata: Metadata = {
    title: 'Forex CRM | Enterprise Back-Office & KYC Management',
    description: 'Optimize your brokerage operations with a high-performance Forex CRM. Manage leads, automate KYC, and track deposits with an integrated back-office solution.',
    keywords: [
        'Forex CRM',
        'Broker Back-Office Software',
        'Forex Lead Tracking',
        'Automated KYC System',
        'Brokerage Management Platform',
        'MT4 MT5 CRM Integration',
    ],
    openGraph: {
        title: 'Forex CRM | Enterprise Back-Office & KYC Management',
        description: 'Optimize your brokerage operations with a high-performance Forex CRM. Manage leads, automate KYC, and track deposits with an integrated back-office solution.',
        type: 'website',
        url: 'https://fxtrusts.com/solutions/crm',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Forex CRM | Enterprise Back-Office & KYC Management',
        description: 'Optimize your brokerage operations with a high-performance Forex CRM. Manage leads, automate KYC, and track deposits with an integrated back-office solution.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/crm',
    },
};

export default function CRMPage() {
    const faqs = [
        {
            question: 'How long does it take to deploy the Forex CRM?',
            answer: 'A standard setup typically takes 7 to 10 business days, assuming your trading server (MT4/MT5) is already active. This includes the configuration of basic staff roles and standard payment gateways.',
        },
        {
            question: 'Can we customize the KYC requirements per country?',
            answer: 'Yes. The CRM allows you to set granular KYC rules and document requirements based on the lead\'s country of residence, ensuring you stay compliant with various local regulations.',
        },
        {
            question: 'Does this CRM integrate with our existing website?',
            answer: 'Absolutely. We provide Web APIs and iframes for registration forms, allowing lead data to flow instantly from your website into the CRM sales pipeline.',
        },
        {
            question: 'How many trading accounts can the CRM handle?',
            answer: 'Our enterprise infrastructure is designed to scale from hundreds to over 100,000 accounts without performance degradation, utilizing optimized database structures.',
        },
        {
            question: 'What are the minimum requirements to start?',
            answer: 'You will need an active trading server license (like MT4/MT5) and a registered corporate entity to begin the integration of payment gateways and KYC modules.',
        },
        {
            question: 'Is my client data safe from internal theft?',
            answer: 'We provide role-based access control (RBAC). You can hide sensitive data like phone numbers or emails from junior staff, and all data exports require admin-level approval with logged activity.',
        },
    ];

    return (
        <main className={styles.pageWrapper}>
            <FAQSchema faqs={faqs} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", "name": "Forex CRM | Enterprise Back-Office & KYC Management", "description": "Optimize your brokerage operations with a high-performance Forex CRM. Manage leads, automate KYC, and track deposits with an integrated back-office solution.", "url": "https://fxtrusts.com/solutions/crm" }) }}
            />

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.badge}>Broker Infrastructure</div>

                    <h1 className={styles.headline}>
                        Forex CRM.<br />Built for Scale.
                    </h1>
                    <p className={styles.subheadline}>
                        Centralize your brokerage operations with an enterprise-grade CRM designed for high-volume data and rapid scaling. Convert more leads and automate compliance workflows from a single, secure interface.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Link href="https://user.flexymarkets.com/accounts/signIns" className={styles.primaryCta}>
                            Get Started
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </Link>
                        <Link href="/company/contact" className={styles.secondaryCta}>
                            Talk to Sales
                        </Link>
                    </div>

                    <div className={styles.metricsBar}>
                        <div className={styles.metricItem}>
                            <div className={styles.metricValue}>99.9%</div>
                            <div className={styles.metricLabel}>Uptime SLA</div>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.metricValue}>7–10</div>
                            <div className={styles.metricLabel}>Days to Deploy</div>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.metricValue}>100+</div>
                            <div className={styles.metricLabel}>Integrations</div>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.metricValue}>24/7</div>
                            <div className={styles.metricLabel}>Infrastructure Monitoring</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Forex CRM */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <div className={styles.badge}>Why Forex CRM</div>
                        <h2 className={styles.sectionHeadline}>Why Forex CRM?</h2>
                        <p className={styles.sectionSubtext}>
                            The Forex CRM is a mission-critical platform for modern brokers, fintech founders, and sales teams. Purpose-built for the unique complexities of financial trading.
                        </p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18M7 16l4-4 4 4 5-8" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Optimized Sales Pipeline</h3>
                            <p className={styles.featureDesc}>Use automated lead distribution to ensure your best sales reps are handling the highest quality leads.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Compliance &amp; KYC Automation</h3>
                            <p className={styles.featureDesc}>Integrated modules for document verification significantly reduce manual labor and human error.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Seamless Trading Server Sync</h3>
                            <p className={styles.featureDesc}>Real-time updates from MT4/MT5 ensure your back-office data always matches the trading floor.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Scalable IB/Affiliate Modules</h3>
                            <p className={styles.featureDesc}>Manage complex multi-level commission structures and track payouts with absolute precision.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Granular Role Permissions</h3>
                            <p className={styles.featureDesc}>Maintain security by restricting staff access to sensitive data based on their specific roles.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Performance Analytics</h3>
                            <p className={styles.featureDesc}>Visual dashboards provide instant insights into deposit trends, withdrawal ratios, and ROI.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Retention Marketing</h3>
                            <p className={styles.featureDesc}>Use built-in communication tools to target dormant accounts and encourage re-deposits.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Demo Access Section */}
            <CRMDemoAccessSection />

            {/* White Label & Infrastructure */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitSection}>
                        <div className={styles.splitContent}>
                            <div className={styles.badge}>White Label Branding</div>
                            <h2 className={styles.sectionHeadline}>Your Brand.<br />Your CRM.</h2>
                            <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                                Our CRM is designed to be invisible to your clients while empowering your staff. The interface is fully white-labeled to match your internal corporate identity.
                            </p>

                            <div className={styles.bulletList}>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <div>
                                        <h4 className={styles.bulletTitle}>Staff Portal Branding</h4>
                                        <p className={styles.bulletDesc}>Customize the administrative dashboard with your company colors and logo for a professional internal workspace.</p>
                                    </div>
                                </div>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <div>
                                        <h4 className={styles.bulletTitle}>Custom Reporting Templates</h4>
                                        <p className={styles.bulletDesc}>Generate branded PDF reports and statements for your clients and regulatory bodies.</p>
                                    </div>
                                </div>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <div>
                                        <h4 className={styles.bulletTitle}>Integrated Communication</h4>
                                        <p className={styles.bulletDesc}>White-label all system-generated messages, including automated emails and SMS notifications for lead status changes.</p>
                                    </div>
                                </div>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <div>
                                        <h4 className={styles.bulletTitle}>Custom Field Management</h4>
                                        <p className={styles.bulletDesc}>Tailor the CRM database to collect the specific data points required for your region&apos;s compliance and sales strategy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.splitVisual}>
                            <div className={styles.statsBox}>
                                <h3 className={styles.statsHeadline}>Infrastructure</h3>
                                <div className={styles.statsContainer}>
                                    <div className={styles.statItem}>
                                        <div className={`${styles.statValue} ${styles.blueStat}`}>AES-256</div>
                                        <div className={styles.statLabel}>Data Encryption at Rest & In Transit</div>
                                    </div>
                                    <div className={styles.statItem}>
                                        <div className={`${styles.statValue} ${styles.greenStat}`}>4 Regions</div>
                                        <div className={styles.statLabel}>London, Singapore, New York, Frankfurt</div>
                                    </div>
                                    <div className={styles.statItem}>
                                        <div className={`${styles.statValue} ${styles.amberStat}`}>99.9%</div>
                                        <div className={styles.statLabel}>Availability SLA with Automated Failover</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Features */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <div className={styles.badge}>Platform Features</div>
                        <h2 className={styles.sectionHeadline}>Comprehensive Tools for Every Facet</h2>
                        <p className={styles.sectionSubtext}>
                            Comprehensive tools to manage every facet of your brokerage business.
                        </p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Client Card</h3>
                            <p className={styles.featureDesc}>Centralized &quot;Client Card&quot; with full 360-degree history.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a4 4 0 0 0-4-4H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a4 4 0 0 1 4-4h6z" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Multi-Account Management</h3>
                            <p className={styles.featureDesc}>Multi-account management (Live, Demo, Archive).</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Approval Workflows</h3>
                            <p className={styles.featureDesc}>Deposit and Withdrawal request approval workflows.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18M7 16l4-4 4 4 5-8" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Lead Source Tracking</h3>
                            <p className={styles.featureDesc}>Lead source tracking (UTM parameters) for marketing ROI.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>KYC &amp; Document Upload</h3>
                            <p className={styles.featureDesc}>Multi-tier document upload (POI, POR, etc.) with automated blacklist and PEP screening.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>API &amp; Integrations</h3>
                            <p className={styles.featureDesc}>RESTful Web API, native connectors for MT4/MT5/cTrader, and support for 50+ global PSPs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Setup Timeline */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <div className={styles.badge}>Setup Process</div>
                        <h2 className={styles.sectionHeadline}>Launch in 10 Days</h2>
                        <p className={styles.sectionSubtext}>
                            From initial configuration to live deployment in under two weeks.
                        </p>
                    </div>

                    <div className={styles.stepsGrid}>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>1</div>
                            <h3 className={styles.stepTitle}>Requirement Mapping</h3>
                            <p className={styles.stepDesc}>Staff roles and data field configuration (Days 1-2).</p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>2</div>
                            <h3 className={styles.stepTitle}>Server Connectivity</h3>
                            <p className={styles.stepDesc}>Linking the CRM to your MT4/MT5 environment (Days 3-4).</p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>3</div>
                            <h3 className={styles.stepTitle}>Branding &amp; Styling</h3>
                            <p className={styles.stepDesc}>Applying your logo and internal color scheme (Days 5-6).</p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>4</div>
                            <h3 className={styles.stepTitle}>UAT &amp; Training</h3>
                            <p className={styles.stepDesc}>Staff training and workflow testing (Days 7-9).</p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>5</div>
                            <h3 className={styles.stepTitle}>Go-Live</h3>
                            <p className={styles.stepDesc}>Production deployment and lead ingestion (Day 10).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing & What's Included */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <div className={styles.badge}>Pricing &amp; Setup</div>
                        <h2 className={styles.sectionHeadline}>What&apos;s Included</h2>
                        <p className={styles.sectionSubtext}>
                            Our pricing is designed to scale with your business, moving from a fixed entry fee to a flexible model based on your account volume.
                        </p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>CRM Dashboard</h3>
                            <p className={styles.featureDesc}>Full CRM administrative dashboard access.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>KYC Module</h3>
                            <p className={styles.featureDesc}>Basic KYC module and document storage.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Server Connectivity</h3>
                            <p className={styles.featureDesc}>Connectivity for active trading server(s).</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Staff Accounts</h3>
                            <p className={styles.featureDesc}>Unlimited Staff accounts with role-based access.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Payment Integration</h3>
                            <p className={styles.featureDesc}>Integration with standard payment gateways.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </div>
                            <h3 className={styles.featureTitle}>Updates &amp; Support</h3>
                            <p className={styles.featureDesc}>Monthly security updates and bug fixes.</p>
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
                            Everything you need to know about our Forex CRM platform.
                        </p>
                    </div>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className={styles.finalCtaSection}>
                <div className={styles.container}>
                    <h2 className={styles.finalCtaHeadline}>Launch Your Forex CRM in 10 Days</h2>
                    <p className={styles.finalCtaSubtext}>
                        Take control of your sales funnel and back-office with our turnkey CRM solution.
                    </p>
                    <Link href="https://user.flexymarkets.com/accounts/signIns" className={styles.primaryCta}>
                        Get Started
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
