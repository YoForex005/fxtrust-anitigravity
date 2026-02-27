import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './crm.module.css';
import { MacWindow } from '@/components/DeviceFrames';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Forex CRM Software | Broker Back Office System | FXTrusts',
    description: 'Purpose-built Forex CRM software for brokers. Automate IB commissions, KYC verification, deposits & withdrawals. Better than Leverate, UpTrader & B2Core.',
    keywords: [
        'forex CRM software',
        'forex broker CRM',
        'broker back office',
        'IB management system',
        'forex CRM developer',
        'Leverate CRM alternative',
        'UpTrader alternative',
        'B2Core alternative',
        'forex client management',
        'trading CRM system',
        'forex partner portal',
        'KYC automation forex',
        'forex deposit system',
        'multi-level IB CRM',
        'forex brokerage software'
    ],
    openGraph: {
        title: 'Forex CRM Software | Built for Brokers, Not Shoe Salesmen',
        description: 'Purpose-built Forex CRM with MT5 integration. Automate IB rebates, KYC, deposits. Live in days.',
        type: 'website',
        url: 'https://fxtrusts.com/platform/crm',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Forex CRM & Back Office System | FXTrusts',
        description: 'Stop using Salesforce for forex. Get a CRM that calculates IB rebates at 3 AM.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/platform/crm',
    },
};

export default function CRMPage() {
    return (
        <>
            <h1 className="sr-only">C R M Page</h1>
            {/* Original Component */}
            
        <main>
            <Header />
            <InnerPageHeader
                badge="The Brain of Operations"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 1v6m0 6v10M1 12h6m6 0h10" /></svg>}
                title="Forex CRM & Back Office.<br/>Client Management That Doesn't Make You Want to Cry."
                subtitle="Stop using spreadsheets. Stop using CRMs built for selling shoes. This one speaks MT5 natively, calculates multi-level IB rebates in milliseconds, and actually tells you where your money is going."
            />

            {/* Why Generic CRMs Fail */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                <line x1="12" y1="9" x2="12" y2="13" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                            <span>WHY GENERIC CRMs FAIL IN FOREX</span>
                        </div>
                        <h2>Salesforce Is Great. For Selling Salesforce.</h2>
                        <p>
                            That expensive enterprise CRM your board insisted on? It's great if you're managing a pipeline of
                            software demos. But does it calculate multi-level IB rebates on gold swaps at 3 AM while adjusting
                            for lot sizes across different account groups? Didn't think so.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Spreadsheet Hellscape</h3>
                            <p className={styles.painText}>
                                You've got one Google Sheet for deposits, another for leads, a third for IB payouts, and a
                                fourth that "Mike created before he left and nobody knows how it works." None of them match.
                                Your accountant sends passive-aggressive emails asking why the numbers don't reconcile.
                                You're leaking money through cracks you can't even see.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The IB Mutiny</h3>
                            <p className={styles.painText}>
                                Your top-performing Introducing Broker wants a custom rebate structure: $3 per lot on majors,
                                $5 on gold, but only 50% applied to his sub-IBs because reasons. Your current system can only
                                do a flat percentage. He leaves for your competitor who figured this out. You write a LinkedIn
                                post about "partnership values" while quietly crying.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The KYC Black Hole</h3>
                            <p className={styles.painText}>
                                Clients send passport photos via WhatsApp. Your compliance officer copies them to a shared
                                folder that's named something unhelpful like "KYC-NEW-FINAL-v3." Documents get lost. Approvals
                                take days. Impatient clients charge back their deposits. Regulators send strongly worded letters.
                                Nobody is happy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitFeature}>
                        <div className={styles.featureContent}>
                            <div className={styles.featureBadge}>THE SOLUTION</div>
                            <h2>Automate the Boring Stuff.<br />Focus on Actual Sales.</h2>
                            <p>
                                Our CRM talks directly to MT5. Not through some janky CSV export—actual real-time WebSocket
                                integration. When a client deposits, it's credited to their trading account in seconds. When
                                they trade, the IB gets paid automatically. No manual data entry. No human error. No more
                                "I'll fix it tomorrow" tech debt.
                            </p>
                            <ul className={styles.featureList}>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Multi-Level IB Module (Infinite Tiers)
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Automated KYC &amp; AML Verification
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    50+ Payment Gateway Integrations
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Real-Time P&amp;L &amp; Risk Dashboard
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Built-in VoIP &amp; Sales Dialer
                                </li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            <MacWindow title="CRM - IB Portal Overview">
                                <div className={styles.mockupContent}>
                                    <div className={styles.statsRow}>
                                        <div className={styles.statBox}>
                                            <span className={styles.statLabel}>Total Commissions</span>
                                            <span className={styles.statValueGreen}>$12,450.00</span>
                                        </div>
                                        <div className={styles.statBox}>
                                            <span className={styles.statLabel}>Active Clients</span>
                                            <span className={styles.statValue}>142</span>
                                        </div>
                                    </div>
                                    <div className={styles.activityList}>
                                        <div className={styles.activityHeader}>Recent Activity</div>
                                        <div className={styles.activityItem}>
                                            <span>Client #8821 (Gold)</span>
                                            <span className={styles.positive}>+$42.50 Comm.</span>
                                        </div>
                                        <div className={styles.activityItem}>
                                            <span>Client #9932 (EURUSD)</span>
                                            <span className={styles.positive}>+$12.10 Comm.</span>
                                        </div>
                                        <div className={styles.activityItem}>
                                            <span>Sub-IB #441 (Rebate)</span>
                                            <span className={styles.positive}>+$150.00 Comm.</span>
                                        </div>
                                        <div className={styles.activityItem}>
                                            <span>Client #7712 (Deposit)</span>
                                            <span>$5,000.00</span>
                                        </div>
                                    </div>
                                    <div className={styles.mockupAction}>
                                        <span className={styles.withdrawBtn}>Withdraw Funds</span>
                                    </div>
                                </div>
                            </MacWindow>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Module Breakdown */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            </svg>
                            <span>THE FULL STACK</span>
                        </div>
                        <h2>It's Not Just a Database. It's an Operating System for Your Brokerage.</h2>
                        <p>
                            Every department in your company—sales, compliance, finance, marketing, support—lives inside
                            one unified platform. No more "let me check with the other team." Everyone sees the same data.
                        </p>
                    </div>

                    <div className={styles.modulesGrid}>
                        <div className={styles.moduleCard}>
                            <div className={styles.moduleNumber}>01</div>
                            <h3>Sales Module</h3>
                            <p className={styles.moduleDesc}>
                                Stop losing leads because they sat in a queue for three days. Our Sales Module automatically
                                assigns new signups to agents based on language, region, or round-robin. It tracks every call,
                                every email, every deposit—so you know exactly who's actually selling.
                            </p>
                            <ul className={styles.moduleList}>
                                <li><strong>Lead Scoring:</strong> Know who to call first</li>
                                <li><strong>VoIP Integration:</strong> Click-to-call from browser</li>
                                <li><strong>Performance Metrics:</strong> Track conversion rates</li>
                                <li><strong>Auto-Assignment:</strong> Round-robin or rules-based</li>
                            </ul>
                        </div>
                        <div className={styles.moduleCard}>
                            <div className={styles.moduleNumber}>02</div>
                            <h3>Compliance Module</h3>
                            <p className={styles.moduleDesc}>
                                Regulators are scary. Our Compliance Module makes them less scary. It automates document
                                collection, runs checks against OFAC, EU sanctions lists, and PEP databases, and flags
                                suspicious activity before it becomes your problem.
                            </p>
                            <ul className={styles.moduleList}>
                                <li><strong>Auto-KYC:</strong> AI-powered ID verification</li>
                                <li><strong>Risk Scoring:</strong> High/Medium/Low categorization</li>
                                <li><strong>Audit Trails:</strong> Every action logged forever</li>
                                <li><strong>Document Vault:</strong> Encrypted, searchable storage</li>
                            </ul>
                        </div>
                        <div className={styles.moduleCard}>
                            <div className={styles.moduleNumber}>03</div>
                            <h3>Finance Module</h3>
                            <p className={styles.moduleDesc}>
                                Money in, money out, tracked to the cent. Connect to 50+ Payment Service Providers including
                                crypto, cards, and bank wires. Set rules for auto-approving small withdrawals so your finance
                                team can focus on the ones that actually need attention.
                            </p>
                            <ul className={styles.moduleList}>
                                <li><strong>Smart Routing:</strong> Route to cheapest PSP</li>
                                <li><strong>Netting:</strong> Internal transfers cost nothing</li>
                                <li><strong>Auto-Reconciliation:</strong> Match bank statements</li>
                                <li><strong>Chargeback Management:</strong> Fight back efficiently</li>
                            </ul>
                        </div>
                        <div className={styles.moduleCard}>
                            <div className={styles.moduleNumber}>04</div>
                            <h3>Marketing Module</h3>
                            <p className={styles.moduleDesc}>
                                Send the right email at the right time. Trigger automated campaigns when a client registers,
                                makes their first deposit, or hasn't traded in 30 days. Personalization that doesn't require
                                a PhD in marketing automation.
                            </p>
                            <ul className={styles.moduleList}>
                                <li><strong>Drip Campaigns:</strong> Nurture leads automatically</li>
                                <li><strong>Segmentation:</strong> Target whales vs. minnows</li>
                                <li><strong>Push Notifications:</strong> Reach mobile app users</li>
                                <li><strong>A/B Testing:</strong> Optimize everything</li>
                            </ul>
                        </div>
                        <div className={styles.moduleCard}>
                            <div className={styles.moduleNumber}>05</div>
                            <h3>IB Management</h3>
                            <p className={styles.moduleDesc}>
                                Your Introducing Brokers are your lifeblood. Give them a portal they'll actually love.
                                Real-time commission tracking, instant withdrawals to their wallet, and referral links that
                                work properly.
                            </p>
                            <ul className={styles.moduleList}>
                                <li><strong>Unlimited Tiers:</strong> MLM without the pyramid scheme vibes</li>
                                <li><strong>Custom Rebates:</strong> Per-symbol, per-group flexibility</li>
                                <li><strong>Real-Time Tracking:</strong> Every lot, every commission</li>
                                <li><strong>Instant Payouts:</strong> To wallet or bank</li>
                            </ul>
                        </div>
                        <div className={styles.moduleCard}>
                            <div className={styles.moduleNumber}>06</div>
                            <h3>Reporting &amp; Analytics</h3>
                            <p className={styles.moduleDesc}>
                                Dashboards that tell you what's happening without requiring a data science degree. Real-time
                                P&amp;L, exposure monitoring, client lifetime value, churn prediction—everything you need to
                                make decisions that don't rely on gut feelings.
                            </p>
                            <ul className={styles.moduleList}>
                                <li><strong>Real-Time P&amp;L:</strong> Know where you stand now</li>
                                <li><strong>Custom Reports:</strong> Build what you need</li>
                                <li><strong>Scheduled Exports:</strong> Auto-email to stakeholders</li>
                                <li><strong>API Access:</strong> Feed your BI tools</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* IB Portal Deep Dive */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitFeature}>
                        <div className={styles.ibPortalCard}>
                            <h3>The IB Portal</h3>
                            <p className={styles.ibPortalSubtext}>Your IBs are your lifeblood. Give them a portal they'll love.</p>
                            <div className={styles.ibPortalFeatures}>
                                <div className={styles.ibPortalRow}>
                                    <span>Referral Links</span>
                                    <span className={styles.ibPortalValue}>Auto-Generated</span>
                                </div>
                                <div className={styles.ibPortalRow}>
                                    <span>Rebate Calculation</span>
                                    <span className={styles.ibPortalValue}>Real-Time</span>
                                </div>
                                <div className={styles.ibPortalRow}>
                                    <span>Sub-IB Levels</span>
                                    <span className={styles.ibPortalValue}>Unlimited</span>
                                </div>
                                <div className={styles.ibPortalRow}>
                                    <span>Payouts</span>
                                    <span className={styles.ibPortalValue}>Instant to Wallet</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.featureContent}>
                            <h2>Supercharge Your Partner Network</h2>
                            <p>
                                Most brokers email their IBs a CSV file once a month and call it "partner support."
                                We give them a dedicated dashboard where they can see their referred clients trading
                                in real-time (anonymized, obviously), track commissions down to the fractional cent,
                                and withdraw earnings instantly—no waiting for the 15th of the month.
                            </p>
                            <p className={styles.resultText}>
                                <strong>Result:</strong> Your IBs work harder because they see the money faster.
                                Dopamine is a powerful motivator.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Showcase */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                            <span>INTEGRATIONS</span>
                        </div>
                        <h2>Plays Nice With Everything You Already Use</h2>
                        <p>
                            We don't force you to rip out your existing tools. Our API connects to payment gateways,
                            KYC providers, messaging platforms, and trading platforms you're already running.
                        </p>
                    </div>

                    <div className={styles.integrationsGrid}>
                        <div className={styles.integrationCard}>
                            <h4>Trading Platforms</h4>
                            <p>MetaTrader 5, cTrader, Match-Trader, Vertex</p>
                        </div>
                        <div className={styles.integrationCard}>
                            <h4>Payment Gateways</h4>
                            <p>Stripe, PayPal, Skrill, Neteller, 40+ PSPs</p>
                        </div>
                        <div className={styles.integrationCard}>
                            <h4>Crypto Payments</h4>
                            <p>Coinbase, BitPay, Direct Wallet</p>
                        </div>
                        <div className={styles.integrationCard}>
                            <h4>KYC Providers</h4>
                            <p>Sumsub, Onfido, Jumio, Manual Upload</p>
                        </div>
                        <div className={styles.integrationCard}>
                            <h4>Communication</h4>
                            <p>Twilio, SendGrid, WhatsApp, Telegram</p>
                        </div>
                        <div className={styles.integrationCard}>
                            <h4>Your Custom API</h4>
                            <p>REST &amp; WebSocket endpoints for everything</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                            <span>QUESTIONS YOU ACTUALLY HAVE</span>
                        </div>
                        <h2>Frequently Asked Questions</h2>
                        <p>
                            The questions you're really wondering about, answered by humans who've built forex brokerages.
                        </p>
                    </div>

                    <div className={styles.faqGrid}>
                        <div className={styles.faqCard}>
                            <h3>Can I customize the look and feel?</h3>
                            <p>
                                Completely. The Client Area and IB Portal are fully white-labeled. We use your logo, your
                                color palette, your domain. Your clients will never know FxTrusts exists unless you tell
                                them—and we'd prefer you didn't.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Does it work with cTrader or Match-Trader?</h3>
                            <p>
                                Yes. While we specialize in MT5, our CRM is platform-agnostic. We have APIs for cTrader,
                                Match-Trader, Vertex, and DXtrade. You can even run multiple platforms simultaneously
                                with unified reporting.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>How long does implementation take?</h3>
                            <p>
                                For standard setups using our hosted infrastructure: 1-2 weeks. For heavily customized
                                deployments with unique integrations: 4-6 weeks. We've done faster—ask about our
                                "emergency migration" package.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Is my data safe?</h3>
                            <p>
                                Safer than most banks. We use AES-256 encryption at rest, TLS 1.3 in transit, daily off-site
                                backups, and strict role-based access control. Your data is YOUR data. We don't sell it,
                                share it, or peek at it.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Can you migrate from my current CRM?</h3>
                            <p>
                                Yes. We've migrated brokers from Leverate, UpTrader, B2Core, and even homegrown spreadsheet
                                disasters. We handle the data export, mapping, validation, and import. Zero downtime if
                                you plan it right.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>What about training for my team?</h3>
                            <p>
                                Included. We provide video tutorials, live onboarding sessions, and documentation that's
                                actually readable. After launch, your team gets direct access to our support—not a chatbot,
                                actual humans who know forex.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Stop Fighting Your Software</h2>
                        <p>
                            Every hour you spend on manual data entry is an hour you're not spending on growth.
                            Let's fix that.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/get-started" className={styles.primaryCta}>
                                Request a Demo
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                            <Link href="/company/contact" className={styles.secondaryCta}>
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    
        </>
    );
}
