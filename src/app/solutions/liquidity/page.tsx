import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './liquidity.module.css';
import { MacWindow } from '@/components/DeviceFrames';
import Link from 'next/link';
import type { Metadata } from 'next';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
    title: 'Tier-1 Forex Liquidity | Aggregated Pricing | LP Bridge | FXTrusts',
    description: 'Access deep institutional liquidity from LMAX, Saxo, CFH, and Tier-1 banks. Aggregated pricing, smart order routing, and sub-10ms execution.',
    keywords: [
        'forex liquidity provider',
        'tier-1 liquidity',
        'liquidity bridge MT5',
        'aggregated forex pricing',
        'smart order routing',
        'forex prime broker',
        'LP connection',
        'FIX protocol liquidity',
        'institutional forex pricing',
        'ECN liquidity',
        'STP broker liquidity',
        'forex price aggregation',
        'best bid offer forex',
        'liquidity pool forex',
        'multi-LP aggregator'
    ],
    openGraph: {
        title: 'Tier-1 Forex Liquidity | 15+ LPs | Sub-10ms Execution',
        description: 'Aggregated pricing from LMAX, Saxo, CFH, and major banks. Smart order routing with 99.7% fill rate.',
        type: 'website',
        url: 'https://fxtrusts.com/solutions/liquidity',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Institutional Forex Liquidity | FXTrusts',
        description: 'Deep liquidity from 15+ providers. 0.0 pips on EURUSD. Sub-10ms execution.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/liquidity',
    },
};

const liquidityFaqs = [
    {
        question: 'Do I need my own prime broker account?',
        answer: 'No. We act as your prime broker connection. You get access to Tier-1 pricing without the $1M+ deposit requirements of a direct PB relationship.',
    },
    {
        question: 'Can I add my own LP connections?',
        answer: 'Yes. If you have existing LP relationships, we can integrate them into the aggregator alongside our pool. Your pricing, our technology.',
    },
    {
        question: 'How do you handle "last look"?',
        answer: 'We negotiate last-look terms with all providers and configure rejection timeouts. If an LP is too aggressive with rejections, we can reduce their priority or exclude them.',
    },
    {
        question: "What's the minimum deposit?",
        answer: 'The margin requirement depends on your expected volume. Typically $50-100K for starters. We can discuss based on your specific situation.',
    },
    {
        question: 'Can I mark up the spreads?',
        answer: "Absolutely. Add your own markup on top of raw pricing—fixed or variable. Or charge per-lot commissions instead. Your call.",
    },
    {
        question: 'What about exotic pairs?',
        answer: 'We cover 70+ currency pairs including exotics. Plus CFDs on indices, commodities, and crypto. Same aggregation technology, same execution quality.',
    },
];

export default function LiquidityPage() {
    return (
        <main>
            <FAQSchema faqs={liquidityFaqs} />
            <Header />
            <InnerPageHeader
                badge="Deep Pools"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}
                title="Tier-1 Liquidity.<br/>Where the Big Money Swims."
                subtitle="Your clients don't care about your backend. They care about spreads and execution. We connect you directly to LMAX, Saxo, CFH, and the major banks—so you can offer institutional pricing without being an institution."
            />

            {/* The Single LP Problem */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                <line x1="12" y1="9" x2="12" y2="13" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                            <span>THE SINGLE LP TRAP</span>
                        </div>
                        <h2>Relying on One Liquidity Provider Is a Suicide Mission</h2>
                        <p>
                            Your single LP goes offline during NFP. Your spreads widen to 50 pips. Your traders can't
                            close positions. The Trustpilot reviews write themselves. You need redundancy, aggregation,
                            and smart routing—not a single point of failure.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Spread Blowout</h3>
                            <p className={styles.painText}>
                                When your LP experiences issues, spreads explode. Clients see 10-pip spreads on EURUSD
                                and assume you're a scam. With 15+ LPs, if one fails, the others pick up the slack
                                instantly.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Latency Tax</h3>
                            <p className={styles.painText}>
                                Every millisecond of execution delay is slippage your clients eat. Generic bridges add
                                50-100ms. Our smart routing fills orders in &lt;10ms by selecting the fastest LP for
                                each symbol.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Rejection Roulette</h3>
                            <p className={styles.painText}>
                                Some LPs have "last look" policies—they reject trades that have moved against them. If
                                your only LP rejects 5% of orders, you lose 5% of potential revenue. Aggregation routes
                                around rejections.
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
                            <h2>15+ LPs. One Best Price.<br />Always.</h2>
                            <p>
                                Our bridge aggregates quotes from 15+ liquidity providers in real-time, constructing a
                                synthetic order book that always shows the best available bid and offer. Smart order
                                routing ensures each trade hits the optimal venue.
                            </p>
                            <ul className={styles.featureList}>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    0.0 Pip Spreads on Major Pairs
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    &lt;10ms Average Execution Latency
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    99.7% Fill Rate at Requested Price
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Automatic Failover Between LPs
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Full Depth of Market Available
                                </li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            <MacWindow title="Liquidity Bridge - Price Aggregator">
                                <div className={styles.aggregatorMockup}>
                                    <div className={styles.aggHeader}>
                                        <span>EUR/USD Best Price</span>
                                        <span className={styles.live}>● LIVE</span>
                                    </div>
                                    <div className={styles.priceDisplay}>
                                        <div className={styles.bidSide}>
                                            <span className={styles.priceLabel}>BID</span>
                                            <span className={styles.priceValue}>1.08421</span>
                                            <span className={styles.lpSource}>LMAX</span>
                                        </div>
                                        <div className={styles.spreadBox}>0.1</div>
                                        <div className={styles.askSide}>
                                            <span className={styles.priceLabel}>ASK</span>
                                            <span className={styles.priceValue}>1.08422</span>
                                            <span className={styles.lpSource}>CFH</span>
                                        </div>
                                    </div>
                                    <div className={styles.lpList}>
                                        <div className={styles.lpItem}><span>LMAX</span><span className={styles.online}>● Online</span></div>
                                        <div className={styles.lpItem}><span>CFH</span><span className={styles.online}>● Online</span></div>
                                        <div className={styles.lpItem}><span>Saxo</span><span className={styles.online}>● Online</span></div>
                                    </div>
                                </div>
                            </MacWindow>
                        </div>
                    </div>
                </div>
            </section>

            {/* Liquidity Providers */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <line x1="3" y1="9" x2="21" y2="9" />
                                <line x1="9" y1="21" x2="9" y2="9" />
                            </svg>
                            <span>OUR LIQUIDITY NETWORK</span>
                        </div>
                        <h2>The Providers Behind Your Spreads</h2>
                        <p>
                            We maintain direct relationships with the world's leading liquidity providers—both Tier-1
                            banks and specialized non-bank market makers.
                        </p>
                    </div>

                    <div className={styles.lpGrid}>
                        <div className={styles.lpCategory}>
                            <h3>Tier-1 Banks</h3>
                            <ul className={styles.lpNames}>
                                <li><strong>JP Morgan</strong> — World's largest FX dealer</li>
                                <li><strong>UBS</strong> — Leading European market maker</li>
                                <li><strong>Barclays</strong> — Major UK and global provider</li>
                                <li><strong>Citi</strong> — Extensive EM coverage</li>
                                <li><strong>Deutsche Bank</strong> — European benchmark</li>
                                <li><strong>Goldman Sachs</strong> — Institutional access</li>
                            </ul>
                        </div>
                        <div className={styles.lpCategory}>
                            <h3>Non-Bank Market Makers</h3>
                            <ul className={styles.lpNames}>
                                <li><strong>LMAX Exchange</strong> — MTF with exchange execution</li>
                                <li><strong>Saxo Bank</strong> — Multi-asset prime broker</li>
                                <li><strong>CFH Clearing</strong> — Retail-focused aggregator</li>
                                <li><strong>Integral</strong> — ECN technology provider</li>
                                <li><strong>Currenex</strong> — Institutional marketplace</li>
                                <li><strong>IS Prime</strong> — Prime of prime services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Execution Models */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <span>EXECUTION MODELS</span>
                        </div>
                        <h2>A-Book, B-Book, or Hybrid—Your Choice</h2>
                        <p>
                            We don't force you into one model. Configure routing rules per client, per symbol, per
                            trade size—whatever makes sense for your business.
                        </p>
                    </div>

                    <div className={styles.modelGrid}>
                        <div className={styles.modelCard}>
                            <h3>A-Book (STP)</h3>
                            <p className={styles.modelDesc}>All trades passed directly to liquidity providers. No conflict of interest. Revenue from spread markup or commission.</p>
                            <div className={styles.modelPros}>
                                <span>✓ Transparent</span>
                                <span>✓ Scalable</span>
                                <span>✓ No market risk</span>
                            </div>
                        </div>
                        <div className={styles.modelCard}>
                            <h3>B-Book</h3>
                            <p className={styles.modelDesc}>Internalize trades and act as counterparty. Higher profit potential but requires risk management.</p>
                            <div className={styles.modelPros}>
                                <span>✓ Higher margins</span>
                                <span>✓ Full spread</span>
                                <span>✓ Flexible pricing</span>
                            </div>
                        </div>
                        <div className={styles.modelCard}>
                            <h3>Hybrid A/B</h3>
                            <p className={styles.modelDesc}>Route profitable clients to A-book, internalize losing traders. Best of both worlds.</p>
                            <div className={styles.modelPros}>
                                <span>✓ Optimized revenue</span>
                                <span>✓ Risk-managed</span>
                                <span>✓ Rule-based</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Grid */}
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
                            <span>EXECUTION QUALITY</span>
                        </div>
                        <h2>Numbers That Actually Matter</h2>
                        <p>
                            We measure and optimize every aspect of execution. Here's what you can expect.
                        </p>
                    </div>

                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statNum}>15+</div>
                            <h3>LPs Connected</h3>
                            <p>Tier-1 banks and non-bank market makers</p>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNum}>&lt;8ms</div>
                            <h3>Avg Latency</h3>
                            <p>From order receipt to fill confirmation</p>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNum}>99.7%</div>
                            <h3>Fill Rate</h3>
                            <p>Orders filled at requested price or better</p>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNum}>52%</div>
                            <h3>Positive Slippage</h3>
                            <p>Of slipped orders benefit the client</p>
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
                        <h2>Liquidity Questions, Answered</h2>
                        <p>
                            What you actually need to know before connecting to our bridge.
                        </p>
                    </div>

                    <div className={styles.faqGrid}>
                        <div className={styles.faqCard}>
                            <h3>Do I need my own prime broker account?</h3>
                            <p>
                                No. We act as your prime broker connection. You get access to Tier-1 pricing without
                                the $1M+ deposit requirements of a direct PB relationship.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Can I add my own LP connections?</h3>
                            <p>
                                Yes. If you have existing LP relationships, we can integrate them into the aggregator
                                alongside our pool. Your pricing, our technology.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>How do you handle "last look"?</h3>
                            <p>
                                We negotiate last-look terms with all providers and configure rejection timeouts. If
                                an LP is too aggressive with rejections, we can reduce their priority or exclude them.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>What's the minimum deposit?</h3>
                            <p>
                                The margin requirement depends on your expected volume. Typically $50-100K for
                                starters. We can discuss based on your specific situation.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Can I mark up the spreads?</h3>
                            <p>
                                Absolutely. Add your own markup on top of raw pricing—fixed or variable. Or charge
                                per-lot commissions instead. Your call.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>What about exotic pairs?</h3>
                            <p>
                                We cover 70+ currency pairs including exotics. Plus CFDs on indices, commodities, and
                                crypto. Same aggregation technology, same execution quality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Get Institutional Pricing Today</h2>
                        <p>
                            Stop overpaying for liquidity. Connect to Tier-1 providers and offer your clients the
                            spreads they deserve.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/get-started" className={styles.primaryCta}>
                                Request Liquidity Access
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
