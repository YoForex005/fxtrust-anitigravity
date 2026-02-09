import { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/components/Footer';
import styles from './forex-broker.module.css';
import ProductSchema from '@/components/seo/ProductSchema';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
    title: "Start a Forex Broker | How to Become a Forex Broker | FxTrusts",
    description: "How to start a forex brokerage firm. Complete turnkey solution with MT5 white label, CRM, liquidity, and 24/7 support. Launch your forex broker business in weeks.",
    keywords: [
        "start a forex broker",
        "how to become a forex broker",
        "how to start a forex brokerage firm",
        "how can i become a forex broker",
        "how do i become a forex broker",
        "how do you become a forex broker",
        "how to start a forex trading company",
        "how to set up forex broker company",
        "how to set up a forex trading company",
        "how to become a forex agent",
        "how to start forex broker business",
        "how to start own forex trading company",
        "how to start your own forex broker",
        "forex broker turnkey solution",
        "white label forex broker",
        "forex brokerage startup",
        "mt5 white label",
        "forex broker technology",
        "launch forex brokerage",
    ],
    openGraph: {
        title: 'Start a Forex Broker | Complete Turnkey Solution',
        description: 'Launch your forex brokerage in weeks. MT5 white label, CRM, liquidity included. No hidden fees.',
        type: 'website',
        url: 'https://fxtrusts.com/solutions/forex-broker',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Start a Forex Broker | Complete Turnkey Solution',
        description: 'Launch your forex brokerage in weeks. MT5 white label, CRM, liquidity included. No hidden fees.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/forex-broker',
    },
};

export default function ForexBrokerPage() {
    const faqs = [
        {
            question: "How much does it cost to start a forex brokerage?",
            answer: "With FxTrusts, you can start for as low as $700/month with no setup fees. Traditional providers may charge $5,000 - $15,000 upfront."
        },
        {
            question: "Do I need a regulatory license?",
            answer: "Not initially. Many brokers start in unregulated jurisdictions to test the market before acquiring licenses in regions like Mauritius or Seychelles."
        },
        {
            question: "How long does it take to go live?",
            answer: "We can get your white label MT5/MT4 and CRM live in less than 48 hours."
        },
        {
            question: "What's included in the monthly fee?",
            answer: "The $700/month includes the CRM, Client Portal, IB Module, and Copy Trading system. White Label fees are separate."
        },
        {
            question: "Can I migrate from another provider?",
            answer: "Yes, we offer free migration services from other providers like B2Broker or Leverate."
        },
        {
            question: "What kind of support do you provide?",
            answer: "We provide 24/7 technical support via Telegram, WhatsApp, and Email."
        }
    ];

    return (
        <main className={styles.main}>
            <ProductSchema
                name="FxTrusts Forex Broker Turnkey"
                description="Complete turnkey solution for starting a Forex Brokerage. Includes CRM, White Label, and Liquidity."
                applicationCategory="BusinessApplication"
                operatingSystem="Web, Windows, iOS, Android"
                price="700"
                currency="USD"
            />
            <FAQSchema faqs={faqs} />



            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>TURNKEY SOLUTION</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Start a <span className={styles.heroHighlight}>FOREX BROKER</span> with our<br />
                        Turnkey Solution
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Everything you need to launch a professional forex brokerage. MetaTrader 5 white label,
                        institutional liquidity, CRM, and payment processing. We handle the technology
                        complexity so you can focus on what matters—acquiring and retaining clients.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>
                            Get Started
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

            {/* Stats Bar */}
            <section className={styles.statsBar}>
                <div className={styles.statsContainer}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>500+</span>
                        <span className={styles.statLabel}>Brokers Launched</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>2-4</span>
                        <span className={styles.statLabel}>Weeks to Go Live</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>99.99%</span>
                        <span className={styles.statLabel}>Uptime SLA</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>24/7</span>
                        <span className={styles.statLabel}>Technical Support</span>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introSection}>
                <div className={styles.container}>
                    <div className={styles.introGrid}>
                        <div className={styles.introContent}>
                            <span className={styles.sectionLabel}>WHY TURNKEY?</span>
                            <h2 className={styles.sectionTitle}>
                                Skip the 18-Month<br />Development Nightmare
                            </h2>
                            <p className={styles.introText}>
                                Building a forex brokerage from scratch requires millions in development costs,
                                years of integration work, and a team of specialized engineers you probably
                                can't afford. Or you could use our turnkey solution and launch in weeks.
                            </p>
                            <p className={styles.introText}>
                                We've already solved every problem you're going to encounter. Regulatory compliance?
                                Done. MT5 integration? Done. Payment processing? Done. KYC automation? Done.
                                Risk management? Done. You get the idea.
                            </p>
                            <div className={styles.introChecklist}>
                                <div className={styles.checkItem}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span>No upfront development costs</span>
                                </div>
                                <div className={styles.checkItem}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span>Pre-integrated with major liquidity providers</span>
                                </div>
                                <div className={styles.checkItem}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span>Regulatory documentation included</span>
                                </div>
                                <div className={styles.checkItem}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span>Dedicated account manager assigned</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.introVisual}>
                            <div className={styles.comparisonCard}>
                                <div className={styles.comparisonHeader}>
                                    <span>Build vs Buy Analysis</span>
                                </div>
                                <div className={styles.comparisonBody}>
                                    <div className={styles.comparisonRow}>
                                        <span className={styles.comparisonMetric}>Time to Market</span>
                                        <span className={styles.comparisonBad}>18-24 months</span>
                                        <span className={styles.comparisonGood}>2-4 weeks</span>
                                    </div>
                                    <div className={styles.comparisonRow}>
                                        <span className={styles.comparisonMetric}>Initial Investment</span>
                                        <span className={styles.comparisonBad}>$500K+</span>
                                        <span className={styles.comparisonGood}>$15K</span>
                                    </div>
                                    <div className={styles.comparisonRow}>
                                        <span className={styles.comparisonMetric}>Team Required</span>
                                        <span className={styles.comparisonBad}>15-20 engineers</span>
                                        <span className={styles.comparisonGood}>0</span>
                                    </div>
                                    <div className={styles.comparisonRow}>
                                        <span className={styles.comparisonMetric}>Risk Level</span>
                                        <span className={styles.comparisonBad}>High</span>
                                        <span className={styles.comparisonGood}>Minimal</span>
                                    </div>
                                </div>
                                <div className={styles.comparisonLabels}>
                                    <span></span>
                                    <span>Build</span>
                                    <span>FxTrusts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Complete Package */}
            <section className={styles.packageSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>COMPLETE PACKAGE</span>
                        <h2 className={styles.sectionTitle}>
                            Everything You Need to Run<br />a Professional Brokerage
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            One integrated platform. One monthly fee. No surprise add-ons six months in.
                        </p>
                    </div>

                    <div className={styles.packageGrid}>
                        {/* Trading Platform */}
                        <div className={styles.packageCard}>
                            <div className={styles.packageIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <h3 className={styles.packageTitle}>Trading Platform</h3>
                            <p className={styles.packageText}>
                                Official MetaTrader 5 white label with your branding. Desktop, web, and mobile
                                terminals. Multi-asset support for Forex, CFDs, Crypto, Stocks, and Futures.
                                Your traders get the platform they already know, with your logo on it.
                            </p>
                            <ul className={styles.packageFeatures}>
                                <li>MT5 White Label License</li>
                                <li>Branded Web Trader</li>
                                <li>iOS & Android Apps</li>
                                <li>Custom Symbol Groups</li>
                            </ul>
                        </div>

                        {/* Client Portal */}
                        <div className={styles.packageCard}>
                            <div className={styles.packageIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className={styles.packageTitle}>Client Portal (Trader's Room)</h3>
                            <p className={styles.packageText}>
                                A beautiful, conversion-optimized client area where traders manage accounts,
                                deposit funds, request withdrawals, and access support. Fully branded with
                                your colors and logo. Multi-language support included.
                            </p>
                            <ul className={styles.packageFeatures}>
                                <li>Account Management</li>
                                <li>Deposit & Withdrawal</li>
                                <li>Document Upload (KYC)</li>
                                <li>Trading History & Reports</li>
                            </ul>
                        </div>

                        {/* CRM */}
                        <div className={styles.packageCard}>
                            <div className={styles.packageIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                            </div>
                            <h3 className={styles.packageTitle}>Back-Office CRM</h3>
                            <p className={styles.packageText}>
                                Manage your entire operation from one dashboard. Lead tracking, client lifecycle
                                management, automated workflows, and real-time reporting. Built specifically
                                for forex brokerages, not adapted from generic CRM software.
                            </p>
                            <ul className={styles.packageFeatures}>
                                <li>Lead Management Pipeline</li>
                                <li>Client Segmentation</li>
                                <li>Task Automation</li>
                                <li>Performance Analytics</li>
                            </ul>
                        </div>

                        {/* Liquidity */}
                        <div className={styles.packageCard}>
                            <div className={styles.packageIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                    <polyline points="16 7 22 7 22 13" />
                                </svg>
                            </div>
                            <h3 className={styles.packageTitle}>Institutional Liquidity</h3>
                            <p className={styles.packageText}>
                                Access tier-1 liquidity from prime brokers including LMAX, Saxo, and major
                                crypto exchanges. Raw institutional spreads with no markup. A-Book or B-Book
                                execution—you decide the model that works for your business.
                            </p>
                            <ul className={styles.packageFeatures}>
                                <li>Tier-1 Bank Pricing</li>
                                <li>FIX API Connectivity</li>
                                <li>Smart Order Routing</li>
                                <li>Execution Analytics</li>
                            </ul>
                        </div>

                        {/* Payment Processing */}
                        <div className={styles.packageCard}>
                            <div className={styles.packageIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                            </div>
                            <h3 className={styles.packageTitle}>Payment Processing</h3>
                            <p className={styles.packageText}>
                                Pre-integrated with 20+ payment service providers. Credit cards, bank transfers,
                                e-wallets, and crypto payments. Auto-credit to MT5 accounts in real-time.
                                Reduce deposit friction and maximize conversion.
                            </p>
                            <ul className={styles.packageFeatures}>
                                <li>Credit & Debit Cards</li>
                                <li>USDT/BTC/ETH Deposits</li>
                                <li>Local Payment Methods</li>
                                <li>Auto-Credit to MT5</li>
                            </ul>
                        </div>

                        {/* Compliance */}
                        <div className={styles.packageCard}>
                            <div className={styles.packageIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3 className={styles.packageTitle}>Compliance & KYC</h3>
                            <p className={styles.packageText}>
                                Integrated with SumSub and ShuftiPro for automated document verification.
                                Reduce manual back-office work by 90%. Pre-configured AML rules and
                                transaction monitoring. Stay compliant without drowning in paperwork.
                            </p>
                            <ul className={styles.packageFeatures}>
                                <li>Auto Document Verification</li>
                                <li>AML/CFT Monitoring</li>
                                <li>Risk Scoring Engine</li>
                                <li>Regulatory Reporting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology */}
            <section className={styles.techSection}>
                <div className={styles.container}>
                    <div className={styles.techGrid}>
                        <div className={styles.techContent}>
                            <span className={styles.sectionLabel}>TECHNOLOGY</span>
                            <h2 className={styles.sectionTitle}>
                                Built on MetaTrader 5—<br />
                                The Industry Standard
                            </h2>
                            <p className={styles.techText}>
                                Why bet on unproven technology when MetaTrader 5 powers 80% of retail forex
                                brokers worldwide? Your traders already know how to use it. Native desktop
                                apps for Windows and macOS. Mobile trading on iOS and Android. Web access
                                from any browser.
                            </p>
                            <p className={styles.techText}>
                                Our white label includes full Manager API and WebAPI access, giving you
                                complete control over accounts, groups, symbols, and reporting. Need
                                custom configurations? We can set up specific margin requirements,
                                leverage tiers, and trading sessions for different client segments.
                            </p>
                            <div className={styles.techFeatures}>
                                <div className={styles.techFeature}>
                                    <span className={styles.techFeatureIcon}>⚡</span>
                                    <div>
                                        <span className={styles.techFeatureTitle}>Sub-10ms Execution</span>
                                        <span className={styles.techFeatureText}>LD4/NY4 proximity servers</span>
                                    </div>
                                </div>
                                <div className={styles.techFeature}>
                                    <span className={styles.techFeatureIcon}>🔒</span>
                                    <div>
                                        <span className={styles.techFeatureTitle}>Enterprise Security</span>
                                        <span className={styles.techFeatureText}>SOC 2 compliant infrastructure</span>
                                    </div>
                                </div>
                                <div className={styles.techFeature}>
                                    <span className={styles.techFeatureIcon}>📊</span>
                                    <div>
                                        <span className={styles.techFeatureTitle}>500+ Instruments</span>
                                        <span className={styles.techFeatureText}>Forex, indices, commodities, crypto</span>
                                    </div>
                                </div>
                                <div className={styles.techFeature}>
                                    <span className={styles.techFeatureIcon}>🔄</span>
                                    <div>
                                        <span className={styles.techFeatureTitle}>99.99% Uptime</span>
                                        <span className={styles.techFeatureText}>AWS & Azure multi-region</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.techVisual}>
                            <div className={styles.codeWindow}>
                                <div className={styles.codeHeader}>
                                    <div className={styles.codeDots}>
                                        <span></span><span></span><span></span>
                                    </div>
                                    <span className={styles.codeFileName}>broker_dashboard.json</span>
                                </div>
                                <pre className={styles.codeContent}>
                                    {`{
  "broker": {
    "name": "Your Brokerage",
    "status": "LIVE",
    "jurisdiction": "CySEC"
  },
  "metrics": {
    "active_traders": 1247,
    "volume_today": "$8.4M",
    "pending_withdrawals": 12,
    "new_registrations": 47
  },
  "platform": {
    "mt5_version": "5.00.4120",
    "uptime": "99.99%",
    "avg_execution": "8ms"
  },
  "liquidity": {
    "primary": "LMAX_Prime",
    "backup": "Saxo_Prime",
    "spreads": "from 0.0 pips"
  }
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className={styles.processSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>LAUNCH PROCESS</span>
                        <h2 className={styles.sectionTitle}>
                            From Sign-Up to Go-Live<br />in 4 Simple Steps
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            We've launched 500+ brokerages. The process is streamlined and predictable.
                        </p>
                    </div>

                    <div className={styles.processTimeline}>
                        <div className={styles.processStep}>
                            <div className={styles.processNumber}>01</div>
                            <div className={styles.processContent}>
                                <h3 className={styles.processTitle}>Discovery & Planning</h3>
                                <span className={styles.processDuration}>Week 1</span>
                                <p className={styles.processText}>
                                    We assess your requirements, target markets, and regulatory needs.
                                    You'll get a dedicated account manager who understands your vision
                                    and creates a customized implementation plan.
                                </p>
                            </div>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.processNumber}>02</div>
                            <div className={styles.processContent}>
                                <h3 className={styles.processTitle}>Platform Configuration</h3>
                                <span className={styles.processDuration}>Week 2</span>
                                <p className={styles.processText}>
                                    We configure your MT5 server, set up trading groups, define leverage
                                    tiers, and integrate your chosen liquidity providers. Payment gateways
                                    are connected and tested.
                                </p>
                            </div>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.processNumber}>03</div>
                            <div className={styles.processContent}>
                                <h3 className={styles.processTitle}>Branding & Customization</h3>
                                <span className={styles.processDuration}>Week 3</span>
                                <p className={styles.processText}>
                                    Your logo, colors, and messaging are applied across all platforms—Trader's
                                    Room, web terminal, and mobile apps. We configure email templates,
                                    notification systems, and legal documentation.
                                </p>
                            </div>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.processNumber}>04</div>
                            <div className={styles.processContent}>
                                <h3 className={styles.processTitle}>Testing & Go-Live</h3>
                                <span className={styles.processDuration}>Week 4</span>
                                <p className={styles.processText}>
                                    End-to-end testing of deposits, withdrawals, order execution, and
                                    compliance workflows. Your team receives training on CRM and back-office
                                    systems. Then we flip the switch and you're live.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Features */}
            <section className={styles.additionalSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>ADDITIONAL MODULES</span>
                        <h2 className={styles.sectionTitle}>
                            Grow Your Business with<br />Optional Add-Ons
                        </h2>
                    </div>

                    <div className={styles.additionalGrid}>
                        <div className={styles.additionalCard}>
                            <span className={styles.additionalIcon}>📋</span>
                            <h4 className={styles.additionalTitle}>Copy Trading / PAMM</h4>
                            <p className={styles.additionalText}>
                                Let beginners copy experienced traders. Fund managers can run PAMM/MAM
                                accounts with automated profit sharing and performance fees.
                            </p>
                        </div>
                        <div className={styles.additionalCard}>
                            <span className={styles.additionalIcon}>🎯</span>
                            <h4 className={styles.additionalTitle}>IB/Affiliate Program</h4>
                            <p className={styles.additionalText}>
                                Multi-tier commission structures with automatic payout calculations.
                                IB portals for partners to track referrals and earnings in real-time.
                            </p>
                        </div>
                        <div className={styles.additionalCard}>
                            <span className={styles.additionalIcon}>🎁</span>
                            <h4 className={styles.additionalTitle}>Bonus & Promotions</h4>
                            <p className={styles.additionalText}>
                                Deposit bonuses, trading credits, and cashback programs. Drive acquisition
                                and retention with flexible promotional tools.
                            </p>
                        </div>
                        <div className={styles.additionalCard}>
                            <span className={styles.additionalIcon}>📞</span>
                            <h4 className={styles.additionalTitle}>VoIP Integration</h4>
                            <p className={styles.additionalText}>
                                Click-to-call from CRM, automatic call recording, and sales performance
                                tracking. Perfect for retention and sales teams.
                            </p>
                        </div>
                        <div className={styles.additionalCard}>
                            <span className={styles.additionalIcon}>⚠️</span>
                            <h4 className={styles.additionalTitle}>Risk Management</h4>
                            <p className={styles.additionalText}>
                                Real-time exposure monitoring, toxic flow detection, and automated
                                hedging. Protect your book without constant manual oversight.
                            </p>
                        </div>
                        <div className={styles.additionalCard}>
                            <span className={styles.additionalIcon}>📊</span>
                            <h4 className={styles.additionalTitle}>Advanced Analytics</h4>
                            <p className={styles.additionalText}>
                                Custom dashboards, cohort analysis, and LTV prediction models.
                                Understand your business at a granular level.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>FAQ</span>
                        <h2 className={styles.sectionTitle}>
                            Common Questions About<br />Starting a Forex Brokerage
                        </h2>
                    </div>

                    <div className={styles.faqGrid}>
                        {faqs.map((faq, index) => (
                            <div key={index} className={styles.faqItem}>
                                <h4 className={styles.faqQuestion}>{faq.question}</h4>
                                <p className={styles.faqAnswer}>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>
                            Ready to Build Your<br />Forex Brokerage Business?
                        </h2>
                        <p className={styles.ctaText}>
                            Stop researching and start building. Get a personalized demo and
                            transparent pricing within 24 hours. No pressure, no sales games—just
                            the information you need to make a decision.
                        </p>
                        <div className={styles.ctaActions}>
                            <Link href="/company/contact" className={styles.btnLight}>
                                Request a Demo
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link href="/pricing" className={styles.btnGhost}>
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
