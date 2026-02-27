import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './copy.module.css';
import { MacWindow } from '@/components/DeviceFrames';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Copy Trading Platform for Brokers | Social Trading Software | FXTrusts',
    description: 'White-label copy trading platform for forex brokers. Let followers copy master traders. Performance fees, high-water mark, and full risk management included.',
    keywords: [
        'copy trading platform',
        'social trading software',
        'PAMM system',
        'MAM system',
        'forex copy trading',
        'signal provider platform',
        'master trader platform',
        'follower trading',
        'copy trading for brokers',
        'white label copy trading',
        'social trading broker',
        'copy trading MT5',
        'forex social network',
        'trade copying software',
        'investment platform broker'
    ],
    openGraph: {
        title: 'Copy Trading Platform | Turn Losing Traders Into Loyal Followers',
        description: 'White-label copy trading platform with performance fees and risk management. Boost retention and volume.',
        type: 'website',
        url: 'https://fxtrusts.com/platform/copy-trading',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Copy Trading & Social Trading Software | FXTrusts',
        description: 'Let followers copy master traders. Performance fees, leaderboards, and full admin control.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/platform/copy-trading',
    },
};

export default function CopyTradingPage() {
    return (
        <>
            <h1 className="sr-only">Copy Trading Page</h1>
            {/* Original Component */}
            
        <main>
            <Header />
            <InnerPageHeader
                badge="Volume Multiplier"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
                title="Copy Trading Engine.<br/>Turn Followers Into Revenue."
                subtitle="90% of retail traders lose money. That's not a bug—it's the business model. But what if they could copy the 10% who don't? They stay longer, deposit more, and you collect fees on every trade. Everyone wins. Mostly you."
            />

            {/* The 90/90/90 Problem */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                                <polyline points="17 18 23 18 23 12" />
                            </svg>
                            <span>THE RETENTION PROBLEM</span>
                        </div>
                        <h2>The "90/90/90" Rule That Nobody Talks About</h2>
                        <p>
                            90% of retail traders lose 90% of their money in their first 90 days. Then they blame the
                            platform, request a chargeback, and disappear forever. You paid $300 to acquire them, and
                            they lasted three months. That's not sustainable. There's a better way.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                                    <polyline points="17 18 23 18 23 12" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Churn Catastrophe</h3>
                            <p className={styles.painText}>
                                A blown account is a lost customer—plus a potential chargeback, a bad review on ForexPeaceArmy,
                                and a passive-aggressive email to your compliance team. If they could just follow someone who
                                knows what they're doing, they might stick around for years instead of weeks.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The "Too Busy" Excuse</h3>
                            <p className={styles.painText}>
                                "I don't have time to watch charts all day." Copy trading solves this. They deposit, browse
                                the leaderboard, click "Follow," and go back to their actual job. Their account trades
                                automatically. You get volume. They get to feel like investors instead of gamblers.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <line x1="12" y1="1" x2="12" y2="23" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Volume Multiplier Effect</h3>
                            <p className={styles.painText}>
                                When a Master opens a 1-lot EURUSD position and 100 Followers are copying at 0.1 lots each,
                                that's 11 lots total from a single click. Your B-book exposure or commission revenue just
                                went 10x. The math is beautiful.
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
                            <h2>Turn Your Clients Into a Community.<br />(A Profitable One).</h2>
                            <p>
                                Our Copy Trading engine is built directly into the CRM—not some third-party plugin that
                                breaks every update. Masters get verified profiles. Followers get a "Copy" button. You
                                get a dashboard to manage fees, risk limits, and the master approval queue.
                            </p>
                            <ul className={styles.featureList}>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Performance, Management &amp; Subscription Fees
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    High-Water Mark Logic (No Double-Dipping)
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Public Leaderboards &amp; Master Profiles
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Equity Protection &amp; Rescue Levels
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Sub-50ms Trade Replication
                                </li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            <MacWindow title="Copy Trading - Leaderboard">
                                <div className={styles.leaderboardMockup}>
                                    <div className={styles.leaderboardHeader}>
                                        <span>Top Performers This Month</span>
                                        <span className={styles.filterBtn}>All Time ▾</span>
                                    </div>
                                    <div className={styles.leaderboardItem}>
                                        <div className={styles.rank}>🥇</div>
                                        <div className={styles.masterInfo}>
                                            <span className={styles.masterName}>AlphaTrader_92</span>
                                            <span className={styles.masterStats}>324 Followers • 18 mo track record</span>
                                        </div>
                                        <div className={styles.masterReturn}>+127.4%</div>
                                    </div>
                                    <div className={styles.leaderboardItem}>
                                        <div className={styles.rank}>🥈</div>
                                        <div className={styles.masterInfo}>
                                            <span className={styles.masterName}>GoldDigger_FX</span>
                                            <span className={styles.masterStats}>187 Followers • 12 mo track record</span>
                                        </div>
                                        <div className={styles.masterReturn}>+89.2%</div>
                                    </div>
                                    <div className={styles.leaderboardItem}>
                                        <div className={styles.rank}>🥉</div>
                                        <div className={styles.masterInfo}>
                                            <span className={styles.masterName}>SwingKing_Pro</span>
                                            <span className={styles.masterStats}>95 Followers • 8 mo track record</span>
                                        </div>
                                        <div className={styles.masterReturn}>+64.8%</div>
                                    </div>
                                    <div className={styles.copyButton}>View All Masters</div>
                                </div>
                            </MacWindow>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works - Master vs Follower */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <span>THE MECHANICS</span>
                        </div>
                        <h2>How the Magic Actually Happens</h2>
                        <p>
                            It's not complicated. Masters trade, Followers copy, you take a cut. But the devil is in
                            the details—and we've handled every edge case so you don't have to.
                        </p>
                    </div>

                    <div className={styles.mechanicsGrid}>
                        <div className={styles.mechanicsCard}>
                            <div className={styles.mechanicsNumber}>01</div>
                            <h3>For the Master (Provider)</h3>
                            <p className={styles.mechanicsDesc}>
                                Masters trade on their normal MT5 account—nothing special to install. They just set their
                                fees in the portal and wait for followers to arrive.
                            </p>
                            <ul className={styles.mechanicsList}>
                                <li><strong>Performance Fee:</strong> Take 20%, 30%, or 50% of follower profits</li>
                                <li><strong>Subscription Fee:</strong> Charge $50/month just to follow</li>
                                <li><strong>Privacy Mode:</strong> Hide open trades, show only closed history</li>
                                <li><strong>Verification:</strong> Submit track record for admin approval</li>
                            </ul>
                        </div>
                        <div className={styles.mechanicsCard}>
                            <div className={styles.mechanicsNumber}>02</div>
                            <h3>For the Follower (Subscriber)</h3>
                            <p className={styles.mechanicsDesc}>
                                Followers browse the leaderboard, check stats (Drawdown, ROI, Sharpe Ratio), and click
                                "Copy." They stay in control with multiple safety mechanisms.
                            </p>
                            <ul className={styles.mechanicsList}>
                                <li><strong>Equity Ratio:</strong> Copy proportionally to account size</li>
                                <li><strong>Rescue Level:</strong> "If I lose 20%, stop copying immediately"</li>
                                <li><strong>Manual Override:</strong> Close any copied trade at any time</li>
                                <li><strong>Multi-Follow:</strong> Copy multiple masters simultaneously</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fee Structures */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="12" y1="1" x2="12" y2="23" />
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                            <span>THE MONEY FLOW</span>
                        </div>
                        <h2>Three Ways to Monetize Copy Trading</h2>
                        <p>
                            Performance fees, subscription fees, management fees—or all three. You decide the split
                            between the Master, the Broker, and the platform.
                        </p>
                    </div>

                    <div className={styles.feeGrid}>
                        <div className={styles.feeCard}>
                            <div className={styles.feeIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                    <polyline points="17 6 23 6 23 12" />
                                </svg>
                            </div>
                            <h3>Performance Fee</h3>
                            <p>Masters take 20-30% of follower profits. Calculated at high-water mark to prevent double-dipping after drawdowns.</p>
                            <div className={styles.feeExample}>
                                <span>Example:</span> Follower makes $1,000 → Master gets $200 (20%)
                            </div>
                        </div>
                        <div className={styles.feeCard}>
                            <div className={styles.feeIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                            </div>
                            <h3>Subscription Fee</h3>
                            <p>Fixed monthly fee to access a master's signals. Great for masters who want guaranteed income regardless of performance.</p>
                            <div className={styles.feeExample}>
                                <span>Example:</span> $49/month × 324 followers = $15,876/month
                            </div>
                        </div>
                        <div className={styles.feeCard}>
                            <div className={styles.feeIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                            </div>
                            <h3>Management Fee</h3>
                            <p>Annual percentage of assets under management. Typically 1-2% AUM charged quarterly, regardless of performance.</p>
                            <div className={styles.feeExample}>
                                <span>Example:</span> $1M AUM × 2% = $20,000/year
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* High Water Mark Table */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M3 3v18h18" />
                                <path d="M18 17V9" />
                                <path d="M13 17V5" />
                                <path d="M8 17v-3" />
                            </svg>
                            <span>HIGH WATER MARK EXPLAINED</span>
                        </div>
                        <h2>How We Prevent "Fee Abuse"</h2>
                        <p>
                            Masters only earn performance fees on NEW profits above the previous peak. No charging fees
                            for recovering from their own mistakes. Fair for followers, motivating for masters.
                        </p>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.hwmTable}>
                            <thead>
                                <tr>
                                    <th>Event</th>
                                    <th>Follower P&amp;L</th>
                                    <th>High Water Mark</th>
                                    <th>Fee Paid (20%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Month 1:</strong> Master makes +$1,000</td>
                                    <td className={styles.positive}>+$1,000</td>
                                    <td>$1,000</td>
                                    <td className={styles.fee}>$200</td>
                                </tr>
                                <tr>
                                    <td><strong>Month 2:</strong> Master loses -$500</td>
                                    <td className={styles.negative}>-$500</td>
                                    <td>$1,000 (unchanged)</td>
                                    <td className={styles.noFee}>$0</td>
                                </tr>
                                <tr>
                                    <td><strong>Month 3:</strong> Master makes +$800</td>
                                    <td className={styles.positive}>+$800 (Net +$300 above HWM)</td>
                                    <td>$1,300</td>
                                    <td className={styles.fee}>$60 (20% of $300)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Risk Management */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <span>RISK MANAGEMENT</span>
                        </div>
                        <h2>How We Prevent "Master Blowups"</h2>
                        <p>
                            Because if the Master dies, the Followers shouldn't die with him. We've built multiple
                            safety mechanisms to protect your clients from catastrophic losses.
                        </p>
                    </div>

                    <div className={styles.riskGrid}>
                        <div className={styles.riskCard}>
                            <h3>Equity Protection</h3>
                            <p>
                                Followers can set a "Hard Stop" at any equity level. If their equity drops 20% from peak,
                                the system instantly unlinks them from the Master and closes all copied positions.
                            </p>
                        </div>
                        <div className={styles.riskCard}>
                            <h3>Lot Size Scaling</h3>
                            <p>
                                If the Master trades with $100k and the Follower has $1k, we automatically scale lot sizes
                                down by 100x. No accidental margin calls from mismatched account sizes.
                            </p>
                        </div>
                        <div className={styles.riskCard}>
                            <h3>Slippage Control</h3>
                            <p>
                                If price moves more than X pips between Master entry and Follower execution, we skip the
                                trade entirely. Better to miss a trade than enter at a terrible price.
                            </p>
                        </div>
                        <div className={styles.riskCard}>
                            <h3>Max Drawdown Limits</h3>
                            <p>
                                Masters can be automatically hidden from the leaderboard if their drawdown exceeds your
                                defined threshold. Protect your brand from promoting risky strategies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.section}>
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
                        <h2>Questions About Copy Trading</h2>
                        <p>
                            The real questions you want answered, not the marketing fluff.
                        </p>
                    </div>

                    <div className={styles.faqGrid}>
                        <div className={styles.faqCard}>
                            <h3>Does it work across different brokers?</h3>
                            <p>
                                Yes, via our Cross-Broker Bridge. However, latency is lowest (and execution best) when
                                both Master and Follower are on your server. We recommend keeping it internal for the
                                best experience.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>How fast is the trade copying?</h3>
                            <p>
                                Internal copying takes less than 50ms. It's effectively instant. We use direct database
                                injection into MT5 Manager API, not slow REST API calls.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Can I vet Masters before they go public?</h3>
                            <p>
                                Absolutely. New Masters enter a pending queue where you can review their track record,
                                verify their identity, and approve or reject them before they appear on the leaderboard.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Can I ban problematic traders?</h3>
                            <p>
                                Yes. As admin, you have full control. You can hide specific strategies from the leaderboard,
                                ban users who engage in toxic scalping, or remove anyone who violates your terms.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>What if a Master trades during news events?</h3>
                            <p>
                                You can configure "blackout periods" around NFP, ECB, and other high-volatility events.
                                During these times, copying is paused to protect followers from slippage.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Is there a mobile app for followers?</h3>
                            <p>
                                Yes. Followers can browse the leaderboard, start/stop copying, and monitor their portfolio
                                from your branded mobile app. Push notifications keep them engaged.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Turn Churn Into Revenue</h2>
                        <p>
                            Every trader who blows their account is a lost customer. Copy trading gives them a second
                            chance—and gives you a second revenue stream. Let's set it up.
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
