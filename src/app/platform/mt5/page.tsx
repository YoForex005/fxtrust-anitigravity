import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './mt5.module.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'MetaTrader 5 White Label Solution | MT5 Broker Platform | FXTrusts',
    description: 'Launch your MetaTrader 5 brokerage in days, not months. Full Manager & Administrator access, branded mobile apps, 99.99% uptime SLA. No setup fees. No per-plugin charges.',
    keywords: [
        'MetaTrader 5 white label',
        'MT5 white label solution',
        'MT5 broker platform',
        'MetaTrader 5 manager',
        'MT5 administrator access',
        'forex white label',
        'MT5 server license',
        'MT5 CRM integration',
        'MetaTrader 5 brokerage',
        'MT5 turnkey solution',
        'forex broker software',
        'MT5 liquidity bridge',
        'MetaTrader white label cost',
        'MT5 mobile app white label',
        'start forex brokerage'
    ],
    openGraph: {
        title: 'MetaTrader 5 White Label | Launch Your Forex Brokerage',
        description: 'Complete MT5 white label solution. Branded terminals, mobile apps, full Manager access. Live in days, not months.',
        type: 'website',
        url: 'https://fxtrusts.com/platform/mt5',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MT5 White Label Solution | FXTrusts',
        description: 'Launch your MetaTrader 5 brokerage in days. Full Manager access, mobile apps, 99.99% uptime.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/platform/mt5',
    },
};

export default function MT5Page() {
    return (
        <>
            <h1 className="sr-only">M T5 Page</h1>
            {/* Original Component */}
            
        <main>
            <Header />
            <InnerPageHeader
                badge="The Industry Standard"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                title="MetaTrader 5 White Label.<br/>The 800lb Gorilla, Fully Tamed."
                subtitle="Yes, it's the platform 89% of traders demand. No, that doesn't mean the setup has to feel like performing dental work on said gorilla. We handle the license, the servers, and the existential dread. You just bring the traders."
            />

            {/* The Problem - Why Standard White Labels Suck */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                <line x1="12" y1="9" x2="12" y2="13" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                            <span>WHY "STANDARD" WHITE LABELS SUCK</span>
                        </div>
                        <h2>The Industry's Dirty Little Secrets</h2>
                        <p>
                            Most white label providers treat you like a revenue stream, not a partner. They give you a shared
                            server with 500 other brokers, charge you for every minor configuration change, and respond to
                            support tickets sometime between "eventually" and "never."
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Waiting Game</h3>
                            <p className={styles.painText}>
                                "It'll be ready in 2 weeks" is the industry's favorite lie, right after "your call is important
                                to us." Two weeks becomes two months. Your marketing budget burns. Your traders sign up with
                                competitors who actually have working platforms. Meanwhile, you get weekly emails saying
                                "we're working on it" with no evidence of said work.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The "Breathing Fee" Structure</h3>
                            <p className={styles.painText}>
                                Want a liquidity bridge? Extra fee. Want CRM integration? Extra fee. Want to change your logo
                                color from blue to slightly different blue? Believe it or not, extra fee. By the time you've
                                added up all the "optional" modules, your "affordable white label" costs more than a dedicated
                                license from MetaQuotes themselves.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The NFP Meltdown</h3>
                            <p className={styles.painText}>
                                Cheap providers stuff 800 brokers onto one overloaded server because "you won't notice"
                                during normal trading hours. Then Non-Farm Payrolls hits. The server freezes. Your traders
                                can't close positions. Stop losses don't trigger. Your support inbox explodes. Your reputation
                                evaporates. And the provider shrugs: "unprecedented market volatility."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution - Turnkey Everything */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitFeature}>
                        <div className={styles.featureContent}>
                            <div className={styles.featureBadge}>THE SOLUTION</div>
                            <h2>We Pre-Built Everything.<br />You Just Turn the Key.</h2>
                            <p>
                                We don't start building when you sign. We have pre-provisioned, enterprise-grade MT5 servers
                                humming away in Equinix LD4 and NY4 data centers, waiting for you. We configure your groups,
                                apply your branding, and hand you the keys. The whole process takes days, not geological eras.
                            </p>
                            <ul className={styles.featureList}>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Live in Days, Not Months (We Mean It)
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Full Manager &amp; Administrator Terminal Access
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Branded Mobile Apps (iOS &amp; Android)
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Web Trader Included (Zero Downloads)
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    No "Per-Plugin" Fees. Ever.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            <div className={styles.mt5Mockup}>
                                <div className={styles.mockupHeader}>
                                    <div className={styles.windowControls}>
                                        <span></span><span></span><span></span>
                                    </div>
                                    <span className={styles.mockupTitle}>MT5 Manager Terminal</span>
                                </div>
                                <div className={styles.mockupContent}>
                                    <div className={styles.mockupSidebar}>
                                        <div className={styles.sidebarItem}>Accounts</div>
                                        <div className={styles.sidebarItem + ' ' + styles.active}>Positions</div>
                                        <div className={styles.sidebarItem}>History</div>
                                        <div className={styles.sidebarItem}>Groups</div>
                                    </div>
                                    <div className={styles.mockupMain}>
                                        <div className={styles.statsRow}>
                                            <div className={styles.statBox}>
                                                <span className={styles.statLabel}>Active Accounts</span>
                                                <span className={styles.statValue}>2,847</span>
                                            </div>
                                            <div className={styles.statBox}>
                                                <span className={styles.statLabel}>Open Positions</span>
                                                <span className={styles.statValue}>15,392</span>
                                            </div>
                                            <div className={styles.statBox}>
                                                <span className={styles.statLabel}>Total Equity</span>
                                                <span className={styles.statValue}>$4.2M</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You Get - Feature Breakdown */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                            </svg>
                            <span>WHAT'S IN THE BOX</span>
                        </div>
                        <h2>Everything Included. No "Premium Tier" Nonsense.</h2>
                        <p>
                            Some providers love the word "starting at" because it lets them hide the real cost behind asterisks.
                            We don't play that game. Here's exactly what you get, all included, no surprises.
                        </p>
                    </div>

                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <h3>The Trading Terminals</h3>
                            <ul>
                                <li>Branded Desktop Terminal (Windows)</li>
                                <li>Branded Mobile App (iOS)</li>
                                <li>Branded Mobile App (Android)</li>
                                <li>Web Trader (All Browsers)</li>
                                <li>Your Logo, Your Colors, Your Domain</li>
                            </ul>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>The Backend Access</h3>
                            <ul>
                                <li>5 Manager Terminal Accounts</li>
                                <li>Full Administrator Access</li>
                                <li>Unlimited Client Accounts</li>
                                <li>Real-Time Reporting Dashboard</li>
                                <li>API Access for Integrations</li>
                            </ul>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>The Asset Classes</h3>
                            <ul>
                                <li>60+ Forex Pairs</li>
                                <li>Spot Metals (Gold, Silver, Platinum)</li>
                                <li>Global Stock Indices</li>
                                <li>Energy (Oil, Natural Gas)</li>
                                <li>Cryptocurrencies (20+ pairs)</li>
                                <li>Stocks CFDs (Coming Soon)</li>
                            </ul>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>The Configuration Options</h3>
                            <ul>
                                <li>Custom Leverage (up to 1:1000)</li>
                                <li>Swap-Free (Islamic) Accounts</li>
                                <li>Flexible Commission Structures</li>
                                <li>Markup/Spread Configuration</li>
                                <li>Multi-Currency Deposits</li>
                            </ul>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>The Risk Management</h3>
                            <ul>
                                <li>Virtual Dealer Plugin</li>
                                <li>Dynamic Margin Call System</li>
                                <li>Negative Balance Protection</li>
                                <li>Position Limits per Group</li>
                                <li>Exposure Monitoring Tools</li>
                            </ul>
                        </div>
                        <div className={styles.featureCard}>
                            <h3>The Business Tools</h3>
                            <ul>
                                <li>Bonus/Credit Manager</li>
                                <li>Multi-Level IB System</li>
                                <li>Rebate Calculation Engine</li>
                                <li>Client Portal Integration</li>
                                <li>CRM Webhook Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Migration Section */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="17 1 21 5 17 9"></polyline>
                                <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                                <polyline points="7 23 3 19 7 15"></polyline>
                                <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                            </svg>
                            <span>ZERO DOWNTIME MIGRATION</span>
                        </div>
                        <h2>Already With Another Provider? We'll Steal You Gracefully.</h2>
                        <p>
                            Switching white label providers sounds scary because other providers made it scary.
                            We've perfected the art of the seamless migration. Your traders won't even notice anything happened.
                        </p>
                    </div>

                    <div className={styles.migrationTimeline}>
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>1</div>
                            <h4>Data Export</h4>
                            <p>We pull your complete user database, account balances, and trade history from the old server. Takes about 2 hours.</p>
                        </div>
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>2</div>
                            <h4>Shadow Setup</h4>
                            <p>We replicate your exact group structure, symbol configuration, and permissions on our servers. Zero impact on live trading.</p>
                        </div>
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>3</div>
                            <h4>Parallel Testing</h4>
                            <p>We run both systems simultaneously over a weekend. Your team verifies everything works. Any issues? Fixed before Monday.</p>
                        </div>
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>4</div>
                            <h4>The DNS Switch</h4>
                            <p>Sunday night, we point the DNS to the new IP. Your traders login Monday morning as usual. That's it. Done.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specs */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                            <span>FOR THE CTOs AND NERDS</span>
                        </div>
                        <h2>Technical Specifications</h2>
                        <p>
                            We know your technical team is going to ask. Here's the full spec sheet so they can nod approvingly
                            and check their compliance boxes.
                        </p>
                    </div>

                    <div className={styles.specsGrid}>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>LD4</span>
                            <span className={styles.specLabel}>Equinix London</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>NY4</span>
                            <span className={styles.specLabel}>Equinix New York</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>&lt;5ms</span>
                            <span className={styles.specLabel}>Internal Latency</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>99.99%</span>
                            <span className={styles.specLabel}>Uptime SLA</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>24/7/365</span>
                            <span className={styles.specLabel}>NOC Monitoring</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>TLS 1.3</span>
                            <span className={styles.specLabel}>Encryption</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>DDoS</span>
                            <span className={styles.specLabel}>Cloudflare Protection</span>
                        </div>
                        <div className={styles.specCard}>
                            <span className={styles.specValue}>Hourly</span>
                            <span className={styles.specLabel}>Backup Frequency</span>
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
                            The questions you're really wondering about, answered without corporate doublespeak.
                        </p>
                    </div>

                    <div className={styles.faqGrid}>
                        <div className={styles.faqCard}>
                            <h3>Can I use my own Liquidity Provider?</h3>
                            <p>
                                Absolutely. We're bridge-agnostic. Whether you use PrimeXM, oneZero, Gold-i, or our internal
                                bridge, we can connect to any LP you want. We don't force you to use our feed—unless you want
                                to, in which case we've got competitive spreads too.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Do you provide the MetaQuotes license?</h3>
                            <p>
                                Yes. This is a White Label solution—you operate under our master server license. This saves you
                                the $100,000+ fee and 6-month waiting period of getting your own license directly from MetaQuotes.
                                When you grow big enough, we help you transition to your own.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Can I upgrade to a dedicated server later?</h3>
                            <p>
                                Yes. When you reach roughly 5,000+ active traders, it often makes sense to move to your own
                                dedicated server license. We'll help you through the MetaQuotes application process and handle
                                the entire migration—including all your historical data.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>What happens if MetaQuotes releases an update?</h3>
                            <p>
                                We test every MetaQuotes update in a staging environment for at least 2 weeks before deploying
                                to production. We've learned the hard way that MetaQuotes updates occasionally break things.
                                You don't become our beta testers.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>How fast is your support response?</h3>
                            <p>
                                For critical issues (platform down, trading halted): 15 minutes or less, 24/7. For standard
                                requests: same business day. For configuration changes: usually within 2 hours during business
                                hours. We don't have a ticket queue that lasts until next quarter.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>What's the catch?</h3>
                            <p>
                                No catch. We make money when you make money—our pricing is based on active accounts, so it's
                                in our interest to help you grow. We don't play games with hidden fees because happy, growing
                                brokers are more valuable to us than nickel-and-diming you to death.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Ready to Stop Fighting Your Technology?</h2>
                        <p>
                            Every day you spend arguing with your current provider is a day your competitors are onboarding
                            the traders you should be getting. Let's fix that.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/get-started" className={styles.primaryCta}>
                                Schedule a Demo
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
