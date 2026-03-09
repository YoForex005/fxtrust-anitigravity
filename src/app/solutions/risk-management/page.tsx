import InnerPageHeader from '@/components/InnerPageHeader';


import styles from './risk.module.css';
import { MacWindow } from '@/components/DeviceFrames';
import Link from 'next/link';
import type { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
    title: 'Forex Risk Management Tools | A-Book B-Book Hedging | FXTrusts',
    description: 'Advanced risk management for forex brokers. Real-time exposure monitoring, automated hedging, toxic flow detection, and P&L alerts.',
    keywords: [
        'forex risk management',
        'broker risk tools',
        'A-book B-book',
        'forex hedging',
        'exposure monitoring',
        'toxic flow detection',
        'dealer dashboard',
        'automated hedging',
        'broker P&L management',
        'forex exposure limits',
        'market making risk',
        'B-book risk',
        'forex risk alerts',
        'position hedging',
        'broker risk software'
    ],
    openGraph: {
        title: 'Forex Risk Management | Auto-Hedge & Exposure Monitoring',
        description: 'Protect your brokerage with real-time exposure monitoring, automated hedging, and toxic flow detection.',
        type: 'website',
        url: 'https://fxtrusts.com/solutions/risk-management',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Broker Risk Management Tools | FXTrusts',
        description: 'Real-time P&L alerts, automated hedging, and toxic flow radar for forex brokers.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/risk-management',
    },
};

export default function RiskManagementPage() {
    const faqs = [
        {
            question: 'Can I set different leverage for different groups?',
            answer: 'Yes. Give "Pro" traders 1:500 and "Retail" traders 1:30. Dynamically lower leverage on weekends, during news events, or for specific high-risk symbols.'
        },
        {
            question: 'Does it work with A-Book execution?',
            answer: 'Absolutely. Even with 100% A-Book, you have "credit risk" with your LP. Our system monitors your margin level at the LP to ensure you don\'t get stopped out unexpectedly.'
        },
        {
            question: 'Can I identify "toxic" traders?',
            answer: 'Yes. We score every client based on profitability, trading style, and win rate. Automatically A-book the winners, B-book the losers.'
        },
        {
            question: 'What if I want to manually intervene?',
            answer: 'The Dealer Dashboard lets you manually close positions, adjust quotes, or pause trading for specific clients. Full control when you need it.'
        },
        {
            question: 'Can I set symbol-specific limits?',
            answer: 'Yes. Set different exposure limits per symbol. Example: 200 lots max on EURUSD, 50 lots max on XAUUSD, 10 lots max on BTCUSD.'
        },
        {
            question: 'How fast are alerts delivered?',
            answer: 'Telegram and Slack alerts arrive in under 2 seconds. Email within 10 seconds. Fast enough to act before the market moves further.'
        }
    ];

    return (
        <>
            
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Forex Risk Management Tools | A-Book B-Book Hedging | FXTrusts","description":"Advanced risk management for forex brokers. Real-time exposure monitoring, automated hedging, toxic flow detection, and P&L alerts.","url":"https://fxtrusts.com/solutions/risk-management"}) }}
      />
      <h1 className="sr-only">Risk Management Page</h1>
            {/* Original Component */}
            
        <main>
            <FAQSchema faqs={faqs} />

            <InnerPageHeader
                badge="Sleep at Night"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                title="Risk Management.<br/>The Anti-Blowup Shield."
                subtitle="Brokers don't go bust because of bad marketing. They go bust because one whale got lucky on Gold and wiped out the B-book. Our tools monitor exposure, automate hedging, and alert you before disaster strikes."
            />

            {/* The Naked B-Book Problem */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionCard}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.badge}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                    <line x1="12" y1="9" x2="12" y2="13" />
                                    <line x1="12" y1="17" x2="12.01" y2="17" />
                                </svg>
                                <span>THE "NAKED B-BOOK" TRAP</span>
                            </div>
                            <h2>Running 100% B-Book Without Hedging Is Russian Roulette</h2>
                            <p>
                                It's fun when clients lose—you keep the spread AND their deposit. But all it takes is one
                                whale catching a 500-pip move on Gold to wipe out months of profit. Then what?
                            </p>
                        </div>

                        <div className={styles.painGrid}>
                            <div className={styles.painCard}>
                                <div className={styles.painIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7" />
                                        <path d="M15 7h6v6" />
                                    </svg>
                                </div>
                                <h3 className={styles.painTitle}>The Lucky Whale</h3>
                                <p className={styles.painText}>
                                    A client deposits $50k, leverages it 1:500, and goes all-in on XAUUSD. Gold spikes $20.
                                    He makes $1M. Do you have $1M in your operating account to pay him? No? That's
                                    insolvency.
                                </p>
                            </div>
                            <div className={styles.painCard}>
                                <div className={styles.painIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                </div>
                                <h3 className={styles.painTitle}>The News Spike</h3>
                                <p className={styles.painText}>
                                    Non-Farm Payroll comes out. The market gaps 100 pips. Your entire book is underwater.
                                    Your LP margin calls you at 3 AM. You scramble to wire funds. Your reputation takes
                                    years to rebuild.
                                </p>
                            </div>
                            <div className={styles.painCard}>
                                <div className={styles.painIcon}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M3 3v18h18" />
                                        <path d="M18 17V9" />
                                        <path d="M13 17V5" />
                                        <path d="M8 17v-3" />
                                    </svg>
                                </div>
                                <h3 className={styles.painTitle}>The One-Sided Book</h3>
                                <p className={styles.painText}>
                                    Everyone is long EURUSD. No one is short. If it goes up 50 pips, you pay out on every
                                    position. That's asymmetric risk—the kind that kills brokers overnight.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionCard}>
                        <div className={styles.splitFeature}>
                            <div className={styles.featureContent}>
                                <div className={styles.featureBadge}>THE SOLUTION</div>
                                <h2>Auto-Hedge the Danger.<br />Keep the Profit.</h2>
                                <p>
                                    Set rules like "If net exposure on XAUUSD exceeds 50 lots, hedge 50% to LP automatically."
                                    Our system watches your book 24/7 and executes hedges instantly. You cap your downside
                                    while keeping most of the B-book profit.
                                </p>
                                <ul className={styles.featureList}>
                                    <li>
                                        <span className={styles.checkIcon}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </span>
                                        Automated Net Exposure Hedging
                                    </li>
                                    <li>
                                        <span className={styles.checkIcon}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </span>
                                        Real-Time P&amp;L Alerts (Telegram/Slack/Email)
                                    </li>
                                    <li>
                                        <span className={styles.checkIcon}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </span>
                                        "Toxic Flow" Radar for HFT Detection
                                    </li>
                                    <li>
                                        <span className={styles.checkIcon}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </span>
                                        Dealer Dashboard for Manual Intervention
                                    </li>
                                    <li>
                                        <span className={styles.checkIcon}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </span>
                                        Client Profitability Scoring
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.featureImage}>
                                <MacWindow title="Risk Manager - Exposure Monitor">
                                    <div className={styles.riskMockup}>
                                        <div className={styles.exposureHeader}>
                                            <span>Net Exposure Dashboard</span>
                                            <span className={styles.live}>● LIVE</span>
                                        </div>
                                        <div className={styles.exposureGrid}>
                                            <div className={styles.exposureItem}>
                                                <span className={styles.symbol}>XAUUSD</span>
                                                <span className={styles.exposureValue + ' ' + styles.short}>-127.5 lots</span>
                                            </div>
                                            <div className={styles.exposureItem}>
                                                <span className={styles.symbol}>EURUSD</span>
                                                <span className={styles.exposureValue + ' ' + styles.long}>+42.3 lots</span>
                                            </div>
                                            <div className={styles.exposureItem}>
                                                <span className={styles.symbol}>BTCUSD</span>
                                                <span className={styles.exposureValue + ' ' + styles.short}>-8.2 lots</span>
                                            </div>
                                        </div>
                                        <div className={styles.alertBanner}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                                <line x1="12" y1="9" x2="12" y2="13" />
                                                <line x1="12" y1="17" x2="12.01" y2="17" />
                                            </svg>
                                            <span>XAUUSD exposure exceeds threshold (100 lots)</span>
                                        </div>
                                        <button className={styles.hedgeBtn}>Hedge 50% Now</button>
                                    </div>
                                </MacWindow>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Auto-Pilot Scenarios */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionCard}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.badge}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                                <span>AUTO-PILOT SCENARIOS</span>
                            </div>
                            <h2>Set Rules. Let the System Execute.</h2>
                            <p>
                                Configure automatic responses to dangerous situations. The system acts instantly—no
                                waiting for a human to wake up.
                            </p>
                        </div>

                        <div className={styles.scenarioGrid}>
                            <div className={styles.scenarioCard + ' ' + styles.scenarioRed}>
                                <h3>Scenario A: The Spike</h3>
                                <div className={styles.scenarioContent}>
                                    <div className={styles.scenarioField}>
                                        <strong>Trigger:</strong>
                                        <span>Gold moves 1% in under 5 minutes</span>
                                    </div>
                                    <div className={styles.scenarioField}>
                                        <strong>Action:</strong>
                                        <span>Instantly hedge 100% of Gold exposure to LP until volatility settles</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.scenarioCard + ' ' + styles.scenarioYellow}>
                                <h3>Scenario B: The Whale</h3>
                                <div className={styles.scenarioContent}>
                                    <div className={styles.scenarioField}>
                                        <strong>Trigger:</strong>
                                        <span>Single client opens position &gt;10 lots</span>
                                    </div>
                                    <div className={styles.scenarioField}>
                                        <strong>Action:</strong>
                                        <span>Auto-STP that specific trade to LP, keep smaller trades in B-book</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.scenarioCard + ' ' + styles.scenarioGreen}>
                                <h3>Scenario C: The Weekend</h3>
                                <div className={styles.scenarioContent}>
                                    <div className={styles.scenarioField}>
                                        <strong>Trigger:</strong>
                                        <span>Friday 21:55 GMT (market close)</span>
                                    </div>
                                    <div className={styles.scenarioField}>
                                        <strong>Action:</strong>
                                        <span>Reduce leverage on all open positions to 1:100 to protect against Monday gaps</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alert Configuration */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionCard}>
                        <div className={styles.splitFeature}>
                            <div className={styles.featureContent}>
                                <h2>Don't Wait for the Margin Call</h2>
                                <p className={styles.alertIntro}>
                                    Configure custom alerts so you know about problems before they become disasters.
                                    Sent via Telegram, Slack, Email, or SMS—whatever wakes you up fastest.
                                </p>
                                <div className={styles.alertList}>
                                    <div className={styles.alertItem}>
                                        <span className={styles.alertNum}>1</span>
                                        <div>
                                            <strong>P&amp;L Threshold</strong>
                                            <p>"Alert me if daily P&amp;L drops below -$10,000."</p>
                                        </div>
                                    </div>
                                    <div className={styles.alertItem}>
                                        <span className={styles.alertNum}>2</span>
                                        <div>
                                            <strong>Exposure Limit</strong>
                                            <p>"Alert me if net exposure on BTCUSD exceeds 20 lots."</p>
                                        </div>
                                    </div>
                                    <div className={styles.alertItem}>
                                        <span className={styles.alertNum}>3</span>
                                        <div>
                                            <strong>Toxic Activity</strong>
                                            <p>"Alert me if a client opens/closes 5+ trades in under 1 second."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.alertMockup}>
                                <div className={styles.alertCard}>
                                    <div className={styles.alertHeader}>
                                        <div className={styles.alertIcon}>⚠️</div>
                                        <div>
                                            <div className={styles.alertTitle}>Risk Alert: High Exposure</div>
                                            <div className={styles.alertTime}>Today, 14:32 GMT</div>
                                        </div>
                                    </div>
                                    <div className={styles.alertBody}>
                                        <strong>Warning:</strong> Net exposure on XAUUSD has reached <strong>55.2 Lots</strong>.
                                        Threshold is 50.0 Lots.
                                    </div>
                                    <div className={styles.alertActions}>
                                        <button className={styles.hedgeNow}>Hedge Now</button>
                                        <button className={styles.ignoreBtn}>Ignore</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionCard}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.badge}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                                <span>FREQUENTLY ASKED QUESTIONS</span>
                            </div>
                            <h2>Risk Management Questions</h2>
                            <p>
                                The questions your risk manager is going to ask.
                            </p>
                        </div>

                        <FAQAccordion faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Sleep Soundly. Your Risk Is Managed.</h2>
                        <p>
                            Stop worrying about overnight gaps and whale trades. Let the system watch your book
                            24/7 and act before you need to.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/get-started" className={styles.primaryCta}>
                                Get Risk Management
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


        </main>
    
        </>
    );
}
