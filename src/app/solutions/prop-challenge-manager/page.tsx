import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Prop Challenge Manager | Evaluation & Risk Management Software',
    description: 'Launch and manage prop firm challenges with automated evaluation rules, profit targets, and drawdown monitoring. Turnkey software for prop trading firms.',
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/prop-challenge-manager',
    },
    keywords: [
        'Prop Challenge Manager',
        'Prop Firm Management Software',
        'Trading Evaluation Rules',
        'Drawdown Monitoring System',
        'Prop Trading Profit Targets',
        'Automated Prop Firm Back-office',
    ],
    openGraph: {
        title: 'Prop Challenge Manager | Evaluation & Risk Management Software',
        description: 'Launch and manage prop firm challenges with automated evaluation rules, profit targets, and drawdown monitoring. Turnkey software for prop trading firms.',
        url: 'https://fxtrusts.com/solutions/prop-challenge-manager',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Prop Challenge Manager | Evaluation & Risk Management Software',
        description: 'Launch and manage prop firm challenges with automated evaluation rules, profit targets, and drawdown monitoring. Turnkey software for prop trading firms.',
    },
};

export default function PropChallengeManagerPage() {
    const tableOfContents = [
        { id: 'solution', title: 'Prop Challenge Manager Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Prop Challenge Manager?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'Prop Trader Dashboard', href: '/solutions/prop-trader-dashboard', readTime: '5 min' },
        { title: 'MT5 White Label', href: '/solutions/mt5', readTime: '5 min' },
        { title: 'Risk Management', href: '/solutions/risk-management', readTime: '4 min' },
    ];

    const quickFacts = [
        { label: 'Uptime SLA', value: '99.9%' },
        { label: 'Setup Time', value: '7-14 Days' },
        { label: 'Trading Rules', value: '10+' },
        { label: 'Monitoring', value: '24/7' },
    ];

    const features = [
        'Custom Multi-Phase Challenges',
        'Equity-Based Drawdown Logic',
        'Automated Breach Detection',
        'Trader Dashboard & Analytics',
        'Integrated Payment Gateways',
        'Automated Payout Processing',
        'MT4/MT5/cTrader Support'
    ];

    const faqs = [
        {
            question: 'How long does it take to launch a prop firm with this software?',
            answer: 'A standard setup can be deployed in 7 to 14 business days. This includes connecting to your trading server and customizing the basic branding of the trader dashboard.',
        },
        {
            question: 'Can I create a "Trailing Drawdown" rule?',
            answer: 'Yes. The Prop Challenge Manager supports Fixed, Trailing, and Relative drawdown logic. You can configure these rules to calculate based on either the account Balance or Equity.',
        },
        {
            question: 'Does the software automatically stop trades if a rule is breached?',
            answer: 'While the software detects breaches in real-time and can automatically disable trading or change the account password, actual trade closure depends on your server-side settings and platform plugins.',
        },
        {
            question: 'Can I integrate my own custom website and payment gateway?',
            answer: 'Absolutely. We provide a purchase API that allows your website to communicate directly with the manager to create accounts once a payment is confirmed via Stripe, PayPal, or Crypto.',
        },
        {
            question: 'What are the minimum requirements for the trading server?',
            answer: 'You need an active White Label or Full Server license for MT4, MT5, or cTrader. We recommend a minimum of [X] active accounts for optimal performance.',
        },
        {
            question: 'How do you prevent traders from cheating?',
            answer: 'Our system includes anti-fraud detection that scans for prohibited strategies, such as arbitrage, hedging across accounts, and high-frequency copy trading from external sources.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="White Label Solution"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>}
                title="Prop Challenge Manager"
                subtitle="Automate the lifecycle of your prop firm evaluations with precision. Set custom profit targets, define drawdown limits, and manage thousand of traders with real-time risk monitoring and automated account transitions."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
            />

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Launch Your Prop Firm in [X Days]"
                ctaText="Get a turnkey evaluation engine with automated risk and profit tracking."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Speak with a prop tech specialist to design your challenge parameters."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    <h1>Prop Challenge Manager Solution</h1>
                    <p>
                        The Prop Challenge Manager is a specialized back-office ecosystem designed for the modern prop trading industry. It provides the technological framework required to create, market, and manage trading evaluations. Whether you are running a single-phase "instant funding" model or a traditional two-phase evaluation, this solution automates the monitoring of complex trading rules, allowing you to focus on marketing and community building.
                    </p>
                    <p>
                        This software acts as the "referee" for your prop firm. It continuously scans every trade executed on your connected MT4, MT5, or cTrader servers to ensure adherence to profit targets and drawdown limits. By removing manual intervention, you eliminate human error and provide traders with instant feedback on their performance, creating a professional and trustworthy environment.
                    </p>
                    <ul>
                        <li><strong>Turnkey Challenge Creation:</strong> Build 1-phase, 2-phase, or 3-phase evaluations with custom pricing and rulesets.</li>
                        <li><strong>Real-Time Risk Engine:</strong> Proprietary monitoring system that detects breaches in milliseconds to protect firm capital.</li>
                        <li><strong>Automated Account Lifecycle:</strong> Seamlessly transition successful traders from "Evaluation" to "Verification" and "Funded" status.</li>
                        <li><strong>Comprehensive Trader Portal:</strong> A branded dashboard where traders can track their progress, drawdowns, and objective status.</li>
                    </ul>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our Prop Manager is engineered for high-volume data processing, ensuring that thousands of concurrent accounts are monitored without server lag.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                99.9% Uptime
                            </h4>
                            <p>System Uptime SLA guarantee for continuous evaluation monitoring.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                7-14 Days Setup
                            </h4>
                            <p>Average setup time for full white label deployment.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                10+ Rules
                            </h4>
                            <p>Configurable trading rules available out of the box.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                24/7 Monitoring
                            </h4>
                            <p>Round-the-clock infrastructure monitoring and support.</p>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why Prop Challenge Manager?</h2>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                Complex Drawdown Logic
                            </h4>
                            <p>Choose between Balance-based or Equity-based drawdown tracking to suit your firm's risk appetite.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                                Profit Target Automation
                            </h4>
                            <p>Automatically notify traders and upgrade their accounts the moment they hit their target objectives.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                Consistency Monitoring
                            </h4>
                            <p>Implement rules regarding lot sizes and trade counts to ensure you are funding disciplined traders.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                Inactivity Detection
                            </h4>
                            <p>Automatically expire or flag accounts that have been dormant for a specified number of days.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M2 17h2v.006c0 1.637 1.258 2.064 2.126 2.394.869.33 2.874 1.6 2.874 1.6h.016L12 21l-3.32-8.68A2 2 0 0 1 8.35 11h7.3a2 2 0 0 1 1.67 1.32L20.66 21l-7.23-2.906a3.52 3.52 0 0 0-1.42-.3h-.01" /></svg>
                                Scalability
                            </h4>
                            <p>Our backend is built to support the growth of your firm from 100 to 100,000+ active challenges.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Operational Efficiency
                            </h4>
                            <p>Reduce staff costs by automating the breach notification and account suspension process.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                                Data-Driven Insights
                            </h4>
                            <p>Analyze which challenge types are most profitable and identify top-tier trading talent through advanced metrics.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        Your prop firm’s credibility depends on a professional, cohesive user experience. Our manager allows for deep white-labeling of the entire trader journey.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                Trader Dashboard UI
                            </h4>
                            <p>Customize the look and feel of the trader’s portal with your brand’s color palette, logo, and custom charts.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                Rule Notification Engine
                            </h4>
                            <p>Branded automated emails and push notifications for breaches, target achievements, and account credentials.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                                Leaderboards & Competitions
                            </h4>
                            <p>Display your firm's top performers on a branded public leaderboard to drive community engagement and social proof.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                Custom Certificate Generation
                            </h4>
                            <p>Automatically issue branded "Evaluation Passed" or "Funded Trader" certificates to successful participants.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        The monitoring of prop challenges requires low-latency connectivity to the trading servers to ensure drawdown breaches are caught instantly.
                    </p>
                    <h3>Data Center Locations</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                London, UK
                            </h4>
                            <p>Equinix LD4 (Primary Trading Hub)</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                New York, USA
                            </h4>
                            <p>Equinix NY4 (Global Connectivity)</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Frankfurt, Germany
                            </h4>
                            <p>Regional Monitoring Node</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Tokyo, Japan
                            </h4>
                            <p>Asian Market Optimization</p>
                        </div>
                    </div>
                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M2 12h20" /></svg>
                                Millisecond Sync
                            </h4>
                            <p>Millisecond-level synchronization with MT4/MT5 Manager APIs.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                DB Architecture
                            </h4>
                            <p>Multi-layered database architecture for rapid trade history analysis.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                DDoS Protection
                            </h4>
                            <p>Tier-1 DDoS protection for the trader dashboard and admin portal.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                                Redundancy
                            </h4>
                            <p>Redundant server clusters to ensure continuous monitoring.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
                                Encrypted Backups
                            </h4>
                            <p>Encrypted backups of all trading history and evaluation progress.</p>
                        </div>
                    </div>
                    <p>
                        <strong>SLA Statement:</strong> We guarantee a 99.9% availability for the Prop Manager backend. Our system is stress-tested to handle high-frequency trading data without delaying breach detection.
                    </p>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Designed specifically for the nuances of the prop trading business model.</p>

                    <h3>Evaluation Rules & Objectives</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
                                Daily Drawdown
                            </h4>
                            <p>Daily Drawdown (Fixed or Trailing).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                                Max Drawdown
                            </h4>
                            <p>Maximum Drawdown (Static or Relative).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Profit Targets
                            </h4>
                            <p>Profit Targets for multiple phases.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                Trading Days
                            </h4>
                            <p>Minimum/Maximum trading days requirements.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                Consistency
                            </h4>
                            <p>Consistency rules (Lot size, trade frequency).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
                                Restrictions
                            </h4>
                            <p>Weekend holding and news trading restrictions.</p>
                        </div>
                    </div>
                    <h3>Analytics Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
                                Equity Curves
                            </h4>
                            <p>Real-time equity curves and drawdown bars for traders.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                                Performance Metrics
                            </h4>
                            <p>Win rate, profit factor, and average R:R metrics.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Account Logs
                            </h4>
                            <p>Account history logs with detailed breach timestamps.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Copy-Trading Detection
                            </h4>
                            <p>Comparison tools to identify "copy-trading" patterns among users.</p>
                        </div>
                    </div>
                    <h3>Admin Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Bulk Creation
                            </h4>
                            <p>Bulk account creation for marketing campaigns and giveaways.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                Manual Override
                            </h4>
                            <p>Manual override capabilities for account status and objectives.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                                Payout Management
                            </h4>
                            <p>Integrated payout request management and history.</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>The Prop Challenge Manager sits at the center of your firm, connecting your marketing front-end to the trading execution.</p>

                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>
                                Auto Account Creation
                            </h4>
                            <p>Automated account creation triggered by website purchases.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                                Data Extraction
                            </h4>
                            <p>Real-time balance and equity data extraction for custom dashboards.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Permission Control
                            </h4>
                            <p>Programmatic control over trader permissions and account groups.</p>
                        </div>
                    </div>

                    <h3>Platform Connectivity</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                MetaTrader 4/5
                            </h4>
                            <p>Native integration via Manager API.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
                                cTrader
                            </h4>
                            <p>Direct connectivity through Web Services.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                                Match-Trader / DXTrade
                            </h4>
                            <p>Support for emerging prop platforms.</p>
                        </div>
                    </div>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a RESTful API that allows your developers to build completely bespoke front-end experiences. Use our webhooks to trigger actions in your CRM, Discord, or Telegram groups when a trader passes a phase or breaches a rule.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                CRMs
                            </h4>
                            <p>Salesforce, HubSpot, Proprietary.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                                Payments
                            </h4>
                            <p>Stripe, CoinPayments, PayPal.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
                                Analytics
                            </h4>
                            <p>Google Analytics, Mixpanel.</p>
                        </div>
                    </div>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing models typically scale with the number of active accounts, ensuring a low barrier to entry for new firms.</p>

                    <h3>What's Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                                Prop Manager
                            </h4>
                            <p>Full Prop Manager administrative backend.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
                                Trader Dashboard
                            </h4>
                            <p>Branded Trader Dashboard (Web-based).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Risk Engine
                            </h4>
                            <p>Automated Risk & Objective monitoring engine.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M2 17h2v.006c0 1.637 1.258 2.064 2.126 2.394.869.33 2.874 1.6 2.874 1.6h.016L12 21l-3.32-8.68A2 2 0 0 1 8.35 11h7.3a2 2 0 0 1 1.67 1.32L20.66 21l-7.23-2.906a3.52 3.52 0 0 0-1.42-.3h-.01" /></svg>
                                Server Integration
                            </h4>
                            <p>Integration with 1 trading server.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                Notifications
                            </h4>
                            <p>Basic email notification templates.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 2v6h-6" /><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M3 22v-6h6" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /></svg>
                                Updates
                            </h4>
                            <p>Monthly software updates and feature enhancements.</p>
                        </div>
                    </div>

                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Affiliate Module
                            </h4>
                            <p>Custom multi-tier affiliate/IB module for prop firms.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                                Payout Processing
                            </h4>
                            <p>Professional payout processing (Crypto/Bank/Deel).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Fraud Detection
                            </h4>
                            <p>Advanced anti-fraud and copy-trading detection.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                                Mobile App
                            </h4>
                            <p>Specialized mobile app for trader analytics.</p>
                        </div>
                    </div>

                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                                Specs
                            </h4>
                            <p>Requirements: Defining challenge phases and rules (Days 1-2).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                                Integration
                            </h4>
                            <p>Connecting the manager to your MT4/MT5/cTrader (Days 3-5).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                                Branding
                            </h4>
                            <p>UI/UX: Customizing the trader dashboard (Days 5-7).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                                Testing
                            </h4>
                            <p>Validation: Simulation of breaches and target hits (Days 7-10).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>05</span>
                                Go-Live
                            </h4>
                            <p>Production launch and payment gateway activation (Day X).</p>
                        </div>
                    </div>
                </div>

                <div id="faq">
                    <h2>Frequently Asked Questions</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </ContentPageLayout>
        </main>
    );
}
