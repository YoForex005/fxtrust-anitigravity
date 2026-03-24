import styles from './yo-forex.module.css';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';
import YoforexAiDemoAccessSection from './DemoAccessSection';

export const metadata: Metadata = {
    title: 'YoForex AI - AI Forex Signals Platform | FXTrusts',
    description: 'High-converting, profit-focused AI forex signals. Access real-time AI-based forex intelligence, liquidity mapping, and precision-driven trading signals powered by 392+ AI models.',
    keywords: [
        'AI forex signals',
        'forex trading AI',
        'AI trading signals',
        'forex market analysis',
        'automated forex signals',
        'YoForex AI',
        'institutional forex signals',
        'smart money concepts AI'
    ],
    openGraph: {
        title: 'YoForex AI - AI Forex Signals Platform | FXTrusts',
        description: 'Trade smarter with AI-powered forex intelligence. Real-time signals, liquidity mapping, and institutional-grade analysis.',
        type: 'website',
        url: 'https://fxtrusts.com/solutions/yoforex-ai',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@FxTrusts',
        creator: '@FxTrusts',
        title: 'YoForex AI - AI Forex Signals Platform | FXTrusts',
        description: 'Trade smarter with AI-powered forex intelligence. Real-time signals, liquidity mapping, and institutional-grade analysis.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/yoforex-ai',
    },
};

export default function YoForexPage() {
    const faqs = [
        {
            question: 'How are YoForex AI signals delivered?',
            answer: 'Signals are delivered instantly via your personal Dashboard, Telegram, and WhatsApp alerts. Each signal includes the pair, direction (Buy/Sell), entry price, Stop Loss, Take Profit, and full AI rationale.'
        },
        {
            question: 'Which AI models power the signals?',
            answer: 'YoForex AI uses a multi-model consensus engine that blends GPT, Claude, Gemini, Llama, Mistral, and Grok. Multiple models must agree before a signal is fired, dramatically reducing false entries.'
        },
        {
            question: 'Do I need trading experience to use YoForex AI?',
            answer: 'No. YoForex AI is designed for all skill levels. Beginners can simply follow the Buy/Sell signals with the provided SL/TP levels, while advanced traders can use the AI rationale and confidence scores to refine their own strategies.'
        },
        {
            question: 'What is Recovery Mode?',
            answer: 'Recovery Mode is an adaptive feature that automatically recalculates new SL/TP levels when price moves against your entry. Instead of a hard stop, the AI attempts to find a recovery zone to reduce losses or flip the trade back to profit.'
        },
        {
            question: 'Is there a free trial available?',
            answer: 'Yes. We offer a 24-hour risk-free trial with full access to all AI models and signal channels. No credit card is required to start.'
        },
        {
            question: 'What markets does YoForex AI cover?',
            answer: 'YoForex AI covers XAUUSD (Gold), major/minor/exotic forex pairs, and synthetic indices. Each market has dedicated AI modules optimized for its specific behavior patterns.'
        },
    ];

    return (
        <main className={styles.pageWrapper}>
            <FAQSchema faqs={faqs} />
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.badge}>AI-Powered Trading Intelligence</div>

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "WebPage",
                                "name": "YoForex AI - AI Forex Signals Platform | FXTrusts",
                                "description": "High-converting, profit-focused AI forex signals. Access real-time AI-based forex intelligence, liquidity mapping, and precision-driven trading signals powered by 392+ AI models.",
                                "url": "https://fxtrusts.com/solutions/yoforex-ai"
                            })
                        }}
                    />
                    <h1 className={styles.headline}>
                        High-Converting, Profit-Focused<br />AI Forex Signals
                    </h1>
                    <p className={styles.subheadline}>
                        Access real-time AI-based forex intelligence, liquidity mapping, and precision-driven trading signals. Our AI scans 17+ liquidity levels, institutional order flow, and reversal patterns — helping traders catch high-probability entries that turn losing weeks into profitable ones.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Link href="https://yoforexai.com/" className={styles.primaryCta}>
                            Start Free Trial
                        </Link>
                        <Link href="/company/contact" className={styles.secondaryCta}>
                            See Pro Signals
                        </Link>
                    </div>

                    <div className={styles.deliveryBadge}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                        AI signals delivered via Dashboard, Telegram &amp; WhatsApp alerts
                    </div>

                    {/* Key Metrics */}
                    <div className={styles.metricsBar}>
                        <div className={styles.metricItem}>
                            <div className={styles.metricValue}>392+</div>
                            <div className={styles.metricLabel}>AI Models</div>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.metricValue}>17+</div>
                            <div className={styles.metricLabel}>Liquidity Pools Scanned</div>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.metricValue}>3-7 Days</div>
                            <div className={styles.metricLabel}>Time to Profitability</div>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.metricValue}>1M+</div>
                            <div className={styles.metricLabel}>Daily Calculations</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Models Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <h2 className={styles.sectionHeadline}>Powered by the World&apos;s Leading AI Models</h2>
                        <p className={styles.sectionSubtext}>
                            YoForex AI leverages a multi-model consensus engine, blending the strengths of multiple frontier AI systems for maximum signal accuracy.
                        </p>
                    </div>
                    <div className={styles.aiModelsRow}>
                        <div className={styles.aiModelBadge}>
                            {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg> */}
                            <Image src="/gpt-logo.png" alt="GPT Logo" width={24} height={24} className={styles.claudeIcon} />
                            GPT
                        </div>
                        <div className={styles.aiModelBadge}>

                            <Image src="/claude-logo.png" alt="Claude Logo" width={20} height={20} className={styles.claudeIcon} />
                            Claude
                        </div>
                        <div className={styles.aiModelBadge}>
                            {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg> */}
                            <Image src="/Google_Gemini_icon_2025.svg.webp" alt="Gemini Logo" width={20} height={20} className={styles.claudeIcon} />
                            Gemini
                        </div>
                        <div className={styles.aiModelBadge}>
                            {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg> */}
                            <Image src="/llama-logo.jfif" alt="Llama Logo" width={20} height={20} className={styles.claudeIcon} />
                            Llama
                        </div>
                        <div className={styles.aiModelBadge}>
                            {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg> */}
                            <Image src="/mistral-logo.png" alt="Mistral Logo" width={20} height={20} className={styles.claudeIcon} />
                            Mistral
                        </div>
                        <div className={styles.aiModelBadge}>
                            {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg> */}
                            <Image src="/grok.png" alt="Grok Logo" width={20} height={20} className={styles.claudeIcon} />
                            Grok
                        </div>
                    </div>
                </div>
            </section>
                {/* <YoforexAiDemoAccessSection /> */}
            {/* Experience Layers Section */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <div className={`${styles.badge} ${styles.badgePurple}`}>Institutional-Grade Vision</div>
                        <h2 className={styles.sectionHeadline}>Command the Market with AI Precision</h2>
                        <p className={styles.sectionSubtext}>
                            Four intelligent layers work together to give you an unfair advantage — from multi-AI analysis to adaptive trade recovery.
                        </p>
                    </div>

                    <div className={styles.experienceGrid}>
                        <div className={styles.experienceCard}>
                            <div className={styles.experienceNumber}>1</div>
                            <h3 className={styles.experienceTitle}>Multi-AI Control Room</h3>
                            <p className={styles.experienceDesc}>
                                Blend Trend, Scalping, Gold, and Liquidity modules into one orchestrated flow with live confidence heatmaps across all active models.
                            </p>
                        </div>
                        <div className={styles.experienceCard}>
                            <div className={styles.experienceNumber}>2</div>
                            <h3 className={styles.experienceTitle}>Institutional Scanner</h3>
                            <p className={styles.experienceDesc}>
                                Tracks liquidity sweeps, displacement, and order blocks across H1-Weekly timeframes to pre-warn you before volatility spikes hit.
                            </p>
                        </div>
                        <div className={styles.experienceCard}>
                            <div className={styles.experienceNumber}>3</div>
                            <h3 className={styles.experienceTitle}>Recovery Engine</h3>
                            <p className={styles.experienceDesc}>
                                Adaptive SL/TP plus Recovery Mode re-maps trades when price flips, helping protect your capital on every alert automatically.
                            </p>
                        </div>
                        <div className={styles.experienceCard}>
                            <div className={styles.experienceNumber}>4</div>
                            <h3 className={styles.experienceTitle}>Human + AI Flow</h3>
                            <p className={styles.experienceDesc}>
                                Keep execution human while AI handles analysis, journaling, and optimization nudges based on your trading reactions and patterns.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intelligent Workflow Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <h2 className={styles.sectionHeadline}>How the AI Signal Pipeline Works</h2>
                        <p className={styles.sectionSubtext}>
                            From raw market data to actionable Buy/Sell calls — four steps, zero guesswork.
                        </p>
                    </div>

                    <div className={styles.stepsGrid}>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>1</div>
                            <h3 className={styles.stepTitle}>Scan</h3>
                            <p className={styles.stepDesc}>
                                AI sweeps 17+ liquidity pools and institutional order flow in milliseconds, identifying high-probability zones.
                            </p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>2</div>
                            <h3 className={styles.stepTitle}>Validate</h3>
                            <p className={styles.stepDesc}>
                                Multi-AI consensus engine debates bias, structure, displacement, and risk factors in real time before any signal fires.
                            </p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>3</div>
                            <h3 className={styles.stepTitle}>Signal</h3>
                            <p className={styles.stepDesc}>
                                Instant Buy/Sell calls with SL, TP, recovery triggers, and full rationale hit your Dashboard, Telegram, and WhatsApp.
                            </p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>4</div>
                            <h3 className={styles.stepTitle}>Coach</h3>
                            <p className={styles.stepDesc}>
                                The platform records your reactions, adds journaling notes, and upgrades future signal recommendations based on your behavior.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Signal Features Section */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <h2 className={styles.sectionHeadline}>AI Forex Signal Features</h2>
                        <p className={styles.sectionSubtext}>
                            Everything you need to trade with confidence — from model selection to adaptive recovery.
                        </p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>AI Model Marketplace</h3>
                            <p className={styles.featureDesc}>
                                Choose from 10+ AI trading models based on your style — gold scalping, forex intraday, swing trading, liquidity-based, or Smart Money Concepts.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Multi-AI Consensus</h3>
                            <p className={styles.featureDesc}>
                                Signals powered by layered AI consensus across multiple models reduce false entries and significantly increase profitable outcomes.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Accuracy Library</h3>
                            <p className={styles.featureDesc}>
                                Track real accuracy, win ratios, and performance metrics for every AI model — full transparency so you can pick the best performers.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>SL/TP &amp; Recovery Mode</h3>
                            <p className={styles.featureDesc}>
                                If price moves against your entry, AI Recovery Mode recalculates new levels to reduce losses or flip trades back to profit automatically.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 8v4l3 3" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Personalized AI Training</h3>
                            <p className={styles.featureDesc}>
                                The AI adapts to your trading reactions over time, learning from your feedback to improve accuracy and deliver increasingly relevant signals.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Premium Community</h3>
                            <p className={styles.featureDesc}>
                                Private trading group for sharing profits, strategies, and real-time updates. Share trade receipts, compare performance, and earn referral credits.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Signal Intelligence Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <h2 className={styles.sectionHeadline}>Signal Intelligence &amp; Delivery</h2>
                        <p className={styles.sectionSubtext}>
                            Institutional-grade monitoring, omni-channel delivery, and explainable AI — everything you need to trade with certainty.
                        </p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={`${styles.featureIcon} ${styles.featureIconPurple}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Institutional Radar</h3>
                            <p className={styles.featureDesc}>
                                Multi-AI consensus tracks liquidity hunts, order blocks, and reversals before retail traders spot them — giving you early entry advantages.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={`${styles.featureIcon} ${styles.featureIconPurple}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Omni-Channel Delivery Hub</h3>
                            <p className={styles.featureDesc}>
                                Dashboard, Telegram, WhatsApp, and email alerts keep you synced with every entry, SL/TP update, and recovery prompt in real time.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={`${styles.featureIcon} ${styles.featureIconPurple}`}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Explainable AI Confidence</h3>
                            <p className={styles.featureDesc}>
                                Each alert includes full rationale, risk multipliers, and recovery mode triggers — so you understand exactly why you&apos;re entering a trade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose YoForex AI */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitSection}>
                        <div className={styles.splitContent}>
                            <h2 className={styles.sectionHeadline}>Why Traders Choose YoForex AI</h2>
                            <p className={styles.subheadline} style={{ fontSize: "1.125rem", margin: "0 0 2rem 0" }}>
                                Whether you&apos;re a complete beginner or an experienced trader, YoForex AI gives you the edge to trade consistently and profitably.
                            </p>

                            <div className={styles.bulletList}>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <div className={styles.bulletTextContainer}>
                                        <h4>Effortless AI Access</h4>
                                        <p>Just open your dashboard and trade the signals. No prior experience or complex setup needed — start profiting from day one.</p>
                                    </div>
                                </div>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <div className={styles.bulletTextContainer}>
                                        <h4>Quality Over Quantity</h4>
                                        <p>Only high-probability trades are sent. No spam signals — every signal follows institutional footprints for higher confidence and better profit potential.</p>
                                    </div>
                                </div>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <div className={styles.bulletTextContainer}>
                                        <h4>Trade From Anywhere</h4>
                                        <p>Fully mobile-friendly with Telegram, Dashboard, and WhatsApp alerts. Get signals on any device, anywhere in the world.</p>
                                    </div>
                                </div>
                                <div className={styles.bulletItem}>
                                    <div className={styles.bulletIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <div className={styles.bulletTextContainer}>
                                        <h4>Full Risk Transparency</h4>
                                        <p>Every signal includes SL &amp; TP levels. Full trade history is shown transparently — plus 24/7 expert support and community guidance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.statsBox}>
                            <h3 className={styles.statsHeadline}>Performance by the Numbers</h3>
                            <div className={styles.statsContainer}>
                                <div className={styles.statItem}>
                                    <div className={`${styles.statValue} ${styles.amberStat}`}>78,000+</div>
                                    <div className={styles.statLabel}>Buy/Sell Entries Shipped</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={`${styles.statValue} ${styles.greenStat}`}>82%</div>
                                    <div className={styles.statLabel}>Average Win Rate (Pro + Max Models)</div>
                                </div>
                                <div className={styles.statItemLast}>
                                    <div className={`${styles.statValue} ${styles.purpleStat}`}>3-7 Days</div>
                                    <div className={styles.statLabel}>Time to Consistency</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Start Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <div className={`${styles.badge} ${styles.badgeGreen}`}>Get Started in Minutes</div>
                        <h2 className={styles.sectionHeadline}>Start Trading in 4 Simple Steps</h2>
                        <p className={styles.sectionSubtext}>
                            No credit card required. Sign up for a risk-free trial and start receiving AI-powered signals immediately.
                        </p>
                    </div>

                    <div className={styles.stepsGrid}>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>1</div>
                            <h3 className={styles.stepTitle}>Sign Up Free</h3>
                            <p className={styles.stepDesc}>
                                Create your account in seconds. No credit card required for the 24-hour risk-free trial.
                            </p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>2</div>
                            <h3 className={styles.stepTitle}>Choose AI Models</h3>
                            <p className={styles.stepDesc}>
                                Select from Trend AI, Scalping AI, Gold AI, SMC AI, Swing AI, and more based on your trading style.
                            </p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>3</div>
                            <h3 className={styles.stepTitle}>Select Strategy</h3>
                            <p className={styles.stepDesc}>
                                Pick from scalping, gold, swing, or intraday presets — or create a custom mix that fits your risk profile.
                            </p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>4</div>
                            <h3 className={styles.stepTitle}>Get AI Signals</h3>
                            <p className={styles.stepDesc}>
                                Receive profitable Buy/Sell calls with SL/TP, recovery prompts, and real-time alerts on all your channels.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Markets Covered */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <h2 className={styles.sectionHeadline}>Markets &amp; Coverage</h2>
                        <p className={styles.sectionSubtext}>
                            YoForex AI covers a wide range of instruments and trading styles with dedicated AI modules for each.
                        </p>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>XAUUSD (Gold)</h3>
                            <p className={styles.featureDesc}>
                                Dedicated Gold AI modules for scalping and swing trading on the most popular precious metal pair.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <line x1="12" y1="1" x2="12" y2="23" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Forex Pairs</h3>
                            <p className={styles.featureDesc}>
                                Major, minor, and exotic forex pairs covered with Trend AI, Scalping AI, and SMC-based Smart Money analysis.
                            </p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Synthetic Indices</h3>
                            <p className={styles.featureDesc}>
                                AI-powered signals for synthetic indices and trend-based intraday and swing setups across multiple timeframes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textCenter}>
                        <h2 className={styles.sectionHeadline}>Frequently Asked Questions</h2>
                        <p className={styles.sectionSubtext}>
                            Everything you need to know about YoForex AI signals, pricing, and how to get started.
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
                    <h2 className={styles.finalCtaHeadline}>Ready to Trade with AI Intelligence?</h2>
                    <p className={styles.finalCtaSubtext}>
                        Stop guessing. Start trading with precision-driven AI signals trusted by thousands of traders worldwide. Try risk-free for 24 hours.
                    </p>
                    <Link href="https://yoforexai.com/" className={styles.primaryCta}>
                        Start Your Free Trial
                        <svg style={{ marginLeft: "0.75rem", width: "20px", height: "20px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Link>
                </div>
            </section>
        </main>
    );
}
