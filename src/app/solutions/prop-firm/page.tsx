import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './prop.module.css';
import { MacWindow, CodeTerminal } from '@/components/DeviceFrames';
import Link from 'next/link';
import type { Metadata } from 'next';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
    title: 'Prop Firm Technology & CRM | Start Your Own Prop Firm | FXTrusts',
    description: 'Complete technology stack for prop trading firms. Automated challenge management, real-time breach detection, payout automation, and risk dashboards.',
    keywords: [
        'prop firm technology',
        'start prop trading firm',
        'prop firm CRM',
        'funded trader platform',
        'challenge management system',
        'prop firm software',
        'trading challenge automation',
        'prop trading company setup',
        'funded account technology',
        'prop firm risk management',
        'trader evaluation software',
        'prop firm payout system',
        'trading challenge rules engine',
        'prop trading infrastructure',
        'FTMO alternative technology'
    ],
    openGraph: {
        title: 'Prop Firm Tech Stack | Automate Challenges & Payouts | FXTrusts',
        description: 'Launch your prop trading firm with automated breach detection, challenge management, and payout processing.',
        type: 'website',
        url: 'https://fxtrusts.com/solutions/prop-firm',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Prop Firm Technology | Start Your Funded Trader Program',
        description: 'Complete tech stack for prop firms. Real-time breach detection, automated payouts, HFT blocking.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/prop-firm',
    },
};

const propFirmFaqs = [
    {
        question: 'Can I customize the challenge rules?',
        answer: 'Yes. You can create 1-step, 2-step, or 3-step challenges. Customize drawdown limits, profit targets, time limits, minimum trading days, and lot size restrictions. All changeable from the admin panel in real-time.',
    },
    {
        question: 'Do you provide the liquidity for funded accounts?',
        answer: 'For the demo phase, we provide the price feed. For funded accounts, we can connect you to our liquidity partners (A-book) or you can run your own B-book execution. Most prop firms B-book everything since 90% of traders lose anyway.',
    },
    {
        question: 'What about the "copy trading" cheaters?',
        answer: 'We detect them. If two accounts open the same trades at the same time from different IPs, we flag it. You can auto-fail both accounts or manually review.',
    },
    {
        question: 'Is running a prop firm legal?',
        answer: 'We provide the technology. You\'re responsible for the legal structure. Most prop firms operate as "education companies" offering "simulated trading." Consult a lawyer in your jurisdiction.',
    },
    {
        question: 'How fast is breach detection?',
        answer: 'Sub-100 milliseconds. Our system monitors equity on every tick. The moment a trader crosses the threshold, positions are closed and trading is disabled—before they can dig themselves deeper.',
    },
    {
        question: 'Can I white-label the platform?',
        answer: 'Absolutely. Your logo, your domain, your brand colors. Traders never see our name. It looks like you built the entire system yourself.',
    },
];

export default function PropFirmPage() {
    return (
        <main>
            <FAQSchema faqs={propFirmFaqs} />
            <Header />
            <InnerPageHeader
                badge="The Challenge Engine"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M12 18v-6" /><path d="M8 15l4-4 4 4" /></svg>}
                title="Prop Firm Tech.<br/>Automate the 'Fail' Button."
                subtitle="Running a prop firm is 10% marketing and 90% risk management. If you're manually checking equity breaches, you're already dead. Our system watches every tick, enforces every rule, and fails every breacher in under 100ms."
            />

            {/* The Manual Review Problem */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                            <span>THE MANUAL REVIEW TRAP</span>
                        </div>
                        <h2>You Have 5,000 Active Challenges. Can You Check Them All?</h2>
                        <p>
                            Non-Farm Payroll drops. Gold spikes $30. 237 traders hit their daily drawdown limit in the
                            same second. Can your support team ban them all instantly? No. But our system can—and it
                            will do it in under 100 milliseconds.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Delayed Breach</h3>
                            <p className={styles.painText}>
                                A trader hits -5% equity. You don't catch it for 10 minutes. In that time, he gambles,
                                gets lucky, and claws back to positive. Now you legally have to pay him. That's your
                                profit margin—gone—because you didn't automate.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The HFT Cheaters</h3>
                            <p className={styles.painText}>
                                They use high-frequency bots to exploit latency on your demo servers. They pass
                                challenges in 30 seconds without taking real risk. They're not traders—they're parasites.
                                Our toxic flow detection blocks them before they even get started.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Payout Nightmare</h3>
                            <p className={styles.painText}>
                                100 traders request payouts on Friday. You're manually checking wallet addresses,
                                verifying trading history, calculating profit splits. It takes all weekend. Meanwhile,
                                Trustpilot reviews pile up: "Slow withdrawals!"
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
                            <h2>Set the Rules.<br />We Enforce Them. Ruthlessly.</h2>
                            <p>
                                Define your challenge parameters: Max Daily Loss, Max Trailing Drawdown, Profit Target,
                                Minimum Trading Days. Our system watches every tick on every account. If a rule is
                                broken, the account is disabled instantly—no human intervention required.
                            </p>
                            <ul className={styles.featureList}>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Real-Time Breach Detection (Equity &amp; Balance)
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Automated Certificate Generation
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    "Toxic Flow" Protection (HFT Blocking)
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Crypto Payout Automation
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    IP &amp; Device Fingerprinting
                                </li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            <MacWindow title="Prop Firm Admin - Risk Dashboard">
                                <div className={styles.dashboardMockup}>
                                    <div className={styles.statsRow}>
                                        <div className={styles.statBox}>
                                            <div className={styles.statLabel}>Active Challenges</div>
                                            <div className={styles.statValue}>1,248</div>
                                        </div>
                                        <div className={styles.statBox}>
                                            <div className={styles.statLabel}>Breached Today</div>
                                            <div className={styles.statValueBad}>42</div>
                                        </div>
                                        <div className={styles.statBox}>
                                            <div className={styles.statLabel}>Passed Phase 1</div>
                                            <div className={styles.statValueGood}>15</div>
                                        </div>
                                    </div>
                                    <div className={styles.activityFeed}>
                                        <div className={styles.feedHeader}>Recent Activity</div>
                                        <div className={styles.feedItem}>
                                            <span>User #8821 (Gold)</span>
                                            <span className={styles.feedBad}>Hit Max Daily Loss (-5.2%)</span>
                                        </div>
                                        <div className={styles.feedItem}>
                                            <span>User #9932 (EURUSD)</span>
                                            <span className={styles.feedGood}>Passed Challenge (+10.1%)</span>
                                        </div>
                                        <div className={styles.feedItem}>
                                            <span>User #7741 (BTCUSD)</span>
                                            <span className={styles.feedWarning}>High Risk (4.8% DD)</span>
                                        </div>
                                    </div>
                                </div>
                            </MacWindow>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rules Engine */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                            </svg>
                            <span>THE RULES ENGINE</span>
                        </div>
                        <h2>Complex Logic Made Simple</h2>
                        <p>
                            If X happens, do Y. That's it. Our rules engine lets you define exactly what happens when
                            a trader breaches, passes, or does something suspicious.
                        </p>
                    </div>

                    <div className={styles.codeGrid}>
                        <div className={styles.codeSection}>
                            <h3 className={styles.codeTitle}>
                                <span className={styles.iconBad}>⛔</span>
                                The Breach Logic
                            </h3>
                            <CodeTerminal
                                title="breach_detection.js"
                                language="javascript"
                                code={`// Daily Drawdown Check (runs every tick)
if (currentEquity < (startingEquity - dailyLossLimit)) {
    closeAllPositions();
    disableTrading();
    sendEmail("Challenge Failed: Daily Loss");
    logBreach("Daily Loss Limit Hit");
    // Account disabled in <100ms
}`}
                            />
                        </div>
                        <div className={styles.codeSection}>
                            <h3 className={styles.codeTitle}>
                                <span className={styles.iconGood}>✅</span>
                                The Success Logic
                            </h3>
                            <CodeTerminal
                                title="phase_upgrade.js"
                                language="javascript"
                                code={`// Phase 1 Pass Check
if (equity >= profitTarget && tradingDays >= minDays) {
    upgradeToPhase2();
    resetEquity();
    sendEmail("Congrats, You Passed!");
    generateCertificate();
    // Trader advances automatically
}`}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Dashboard Features */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <line x1="3" y1="9" x2="21" y2="9" />
                                <line x1="9" y1="21" x2="9" y2="9" />
                            </svg>
                            <span>THE "GOD MODE" DASHBOARD</span>
                        </div>
                        <h2>See Everything. Control Everything.</h2>
                        <p>
                            Your command center for managing thousands of traders. Real-time visibility into every
                            account, every position, every breach attempt.
                        </p>
                    </div>

                    <div className={styles.dashboardGrid}>
                        <div className={styles.dashboardCard}>
                            <h3>Risk Heatmap</h3>
                            <p>
                                See which traders are dangerously close to their drawdown limits. Sort by "Distance to
                                Breach" to identify who's about to fail—and who might need a stop-out.
                            </p>
                        </div>
                        <div className={styles.dashboardCard}>
                            <h3>Exposure Monitor</h3>
                            <p>
                                "We are net short 500 lots of Gold across all funded accounts." Know your firm's total
                                exposure in real-time so you can hedge if the market moves against you.
                            </p>
                        </div>
                        <div className={styles.dashboardCard}>
                            <h3>IP &amp; Device Tracking</h3>
                            <p>
                                Catch traders who are account sharing, using VPS farms, or running unauthorized bots.
                                Flag duplicate IPs and device fingerprints instantly.
                            </p>
                        </div>
                        <div className={styles.dashboardCard}>
                            <h3>Revenue Analytics</h3>
                            <p>
                                Track challenge purchases, pass rates, payout ratios, and lifetime value per trader.
                                Know exactly which marketing channels bring profitable customers.
                            </p>
                        </div>
                        <div className={styles.dashboardCard}>
                            <h3>Payout Queue</h3>
                            <p>
                                All pending payouts in one place. One-click approval for legitimate requests. Auto-flag
                                suspicious patterns like "50% profit from one trade."
                            </p>
                        </div>
                        <div className={styles.dashboardCard}>
                            <h3>Audit Trail</h3>
                            <p>
                                Every action logged. Every rule change recorded. When a trader disputes a breach, you
                                have the evidence—timestamped to the millisecond.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Payout Flow */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.splitFeature}>
                        <div className={styles.featureContent}>
                            <h2>The Payout Flow:<br />Automated, Not Manual</h2>
                            <p className={styles.payoutIntro}>
                                Don't make your traders wait. Don't make your staff work weekends. Our system automates
                                the boring parts so you just click "Approve."
                            </p>
                            <div className={styles.payoutSteps}>
                                <div className={styles.payoutStep}>
                                    <span className={styles.stepNum}>1</span>
                                    <div>
                                        <strong>Request</strong>
                                        <p>Trader clicks "Withdraw" in their dashboard. System checks eligibility (profit split, min trading days, no open positions).</p>
                                    </div>
                                </div>
                                <div className={styles.payoutStep}>
                                    <span className={styles.stepNum}>2</span>
                                    <div>
                                        <strong>Verification</strong>
                                        <p>System scans for "Gambling" behavior (e.g., 50% profit from one trade). Flags for review if suspicious.</p>
                                    </div>
                                </div>
                                <div className={styles.payoutStep}>
                                    <span className={styles.stepNum}>3</span>
                                    <div>
                                        <strong>Execution</strong>
                                        <p>You click "Approve." System sends crypto or wire via API. Trader gets email confirmation. Done in seconds.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.payoutMockup}>
                            <div className={styles.payoutCard}>
                                <div className={styles.payoutHeader}>
                                    <span>Payout Request #4921</span>
                                    <span className={styles.payoutPending}>Pending Review</span>
                                </div>
                                <div className={styles.payoutDetails}>
                                    <div className={styles.payoutField}>
                                        <span className={styles.payoutLabel}>Amount</span>
                                        <span className={styles.payoutValue}>$4,250.00</span>
                                    </div>
                                    <div className={styles.payoutField}>
                                        <span className={styles.payoutLabel}>Method</span>
                                        <span className={styles.payoutValue}>USDT (TRC20)</span>
                                    </div>
                                </div>
                                <div className={styles.payoutActions}>
                                    <button className={styles.rejectBtn}>Reject</button>
                                    <button className={styles.approveBtn}>Approve</button>
                                </div>
                            </div>
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
                            <span>FREQUENTLY ASKED QUESTIONS</span>
                        </div>
                        <h2>Questions About Starting a Prop Firm</h2>
                        <p>
                            The real questions—not the marketing ones.
                        </p>
                    </div>

                    <div className={styles.faqGrid}>
                        <div className={styles.faqCard}>
                            <h3>Can I customize the challenge rules?</h3>
                            <p>
                                Yes. You can create 1-step, 2-step, or 3-step challenges. Customize drawdown limits,
                                profit targets, time limits, minimum trading days, and lot size restrictions. All
                                changeable from the admin panel in real-time.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Do you provide the liquidity for funded accounts?</h3>
                            <p>
                                For the demo phase, we provide the price feed. For funded accounts, we can connect you
                                to our liquidity partners (A-book) or you can run your own B-book execution. Most prop
                                firms B-book everything since 90% of traders lose anyway.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>What about the "copy trading" cheaters?</h3>
                            <p>
                                We detect them. If two accounts open the same trades at the same time from different
                                IPs, we flag it. You can auto-fail both accounts or manually review.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Is running a prop firm legal?</h3>
                            <p>
                                We provide the technology. You're responsible for the legal structure. Most prop firms
                                operate as "education companies" offering "simulated trading." Consult a lawyer in your
                                jurisdiction.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>How fast is breach detection?</h3>
                            <p>
                                Sub-100 milliseconds. Our system monitors equity on every tick. The moment a trader
                                crosses the threshold, positions are closed and trading is disabled—before they can
                                dig themselves deeper.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Can I white-label the platform?</h3>
                            <p>
                                Absolutely. Your logo, your domain, your brand colors. Traders never see our name.
                                It looks like you built the entire system yourself.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Launch Your Prop Firm in 30 Days</h2>
                        <p>
                            We handle the technology. You handle the marketing. Let's build your funded trader
                            program together.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/get-started" className={styles.primaryCta}>
                                Start Your Prop Firm
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                            <Link href="/pricing" className={styles.secondaryCta}>
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
