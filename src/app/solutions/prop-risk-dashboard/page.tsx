import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Prop Risk Dashboard | Monitor HFT, News Trading & Fraud',
    description: 'Protect your prop firm’s capital with advanced risk monitoring. Detect HFT, news trading violations, and fraudulent patterns with a real-time risk dashboard.',
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/prop-risk-dashboard',
    },
    keywords: [
        'Prop Risk Dashboard',
        'Prop Firm Risk Management',
        'HFT Detection Software',
        'News Trading Monitor',
        'Forex Fraud Detection',
        'Prop Trading Compliance Tools',
    ],
    openGraph: {
        title: 'Prop Risk Dashboard | Monitor HFT, News Trading & Fraud',
        description: 'Protect your prop firm’s capital with advanced risk monitoring. Detect HFT, news trading violations, and fraudulent patterns with a real-time risk dashboard.',
        url: 'https://fxtrusts.com/solutions/prop-risk-dashboard',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Prop Risk Dashboard | Monitor HFT, News Trading & Fraud',
        description: 'Protect your prop firm’s capital with advanced risk monitoring. Detect HFT, news trading violations, and fraudulent patterns with a real-time risk dashboard.',
    },
};

export default function PropRiskDashboardPage() {
    const tableOfContents = [
        { id: 'solution', title: 'Prop Risk Dashboard Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Prop Risk Monitoring?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'Prop Challenge Manager', href: '/solutions/prop-challenge-manager', readTime: '5 min' },
        { title: 'Risk Management', href: '/solutions/risk-management', readTime: '4 min' },
        { title: 'MT5 White Label', href: '/solutions/mt5', readTime: '5 min' },
    ];

    const quickFacts = [
        { label: 'Uptime SLA', value: '99.9%' },
        { label: 'Detection Latency', value: 'X ms' },
        { label: 'Risk Indicators', value: '50+' },
        { label: 'Alerts', value: '24/7' },
    ];

    const features = [
        'HFT & Arbitrage Detection',
        'News Event Trade Filtering',
        'Multi-Account Correlation',
        'IP & Hardware ID Tracking',
        'Automated Warning System',
        'Custom Toxicity Scoring',
        'MT4/MT5/cTrader Sync'
    ];

    const faqs = [
        {
            question: 'How does the system detect High-Frequency Trading (HFT)?',
            answer: 'The engine analyzes the trade duration and frequency. If a trader consistently opens and closes positions in sub-second intervals or utilizes latency gaps between price feeds, the system flags the behavior as toxic HFT flow.',
        },
        {
            question: 'Can I set different news trading rules for different accounts?',
            answer: 'Yes. You can configure custom news filters per account group. For example, you may allow news trading on "Pro" accounts while enforcing a strict 2-minute "no-trade" window on "Standard" evaluations.',
        },
        {
            question: 'What is "Group Trading" detection?',
            answer: 'Our correlation engine looks for statistically improbable similarities in trade entry, exit, and symbol selection across different accounts. If multiple accounts are trading in perfect sync, the system alerts you to a potential copy-trading ring.',
        },
        {
            question: 'Is it possible to automate account suspensions?',
            answer: 'Absolutely. You can set specific "Hard Rules." If a trader triggers a hard rule (like an HFT breach), the system can instantly change the account password and disable trading to prevent further exposure.',
        },
        {
            question: 'What are the minimum requirements to start?',
            answer: 'You need an active MT4/MT5 or cTrader server with Manager API access. We recommend a minimum of [X] active accounts to make the most of the behavioral analytics data.',
        },
        {
            question: 'How do we handle false positives?',
            answer: 'The system provides a "Soft Alert" mode. Suspicious accounts are flagged for manual review rather than suspended, allowing your risk team to verify the data before taking definitive action.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="Broker Infrastructure"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>}
                title="Prop Risk Dashboard"
                subtitle="Shield your firm’s liquidity and reputation with real-time behavioral surveillance. Identify prohibited strategies, detect toxic HFT flow, and automate news-trading enforcement from a single, centralized risk command center."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
            />

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Secure Your Capital in [X Days]"
                ctaText="Deploy enterprise-grade risk monitoring to filter toxic traders and protect your book."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Contact our risk engineers to customize your fraud detection parameters."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Prop Risk Dashboard | Monitor HFT, News Trading & Fraud","description":"Protect your prop firm’s capital with advanced risk monitoring. Detect HFT, news trading violations, and fraudulent patterns with a real-time risk dashboard.","url":"https://fxtrusts.com/solutions/prop-risk-dashboard"}) }}
      />
      <h1>Prop Risk Dashboard Solution</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Instant Detection</h3>
                            <p className="text-sm text-blue-800">Millisecond-level pattern recognition for toxic strategies.</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Proactive Protection</h3>
                            <p className="text-sm text-blue-800">Automated account suspension for hard-rule breaches.</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Deep Data Insight</h3>
                            <p className="text-sm text-blue-800">Granular logs for audit-ready compliance and reporting.</p>
                        </div>
                    </div>
                    <p>
                        The Prop Risk Dashboard is a specialized surveillance engine built for proprietary trading firms, seed hunters, and multi-asset brokers. In the modern prop industry, protecting your capital isn't just about drawdowns—it’s about identifying "toxic" trading behavior that exploits platform latency or violates firm-specific mandates. This solution provides a high-level visual overview of your entire trader pool, highlighting outliers and potential bad actors before they impact your bottom line.
                    </p>
                    <p>
                        Designed for fintech founders and risk officers, the dashboard serves as an automated compliance layer. It continuously analyzes trade execution patterns to differentiate between genuine trading talent and automated exploits like High-Frequency Trading (HFT) or latency arbitrage. By centralizing this data, your firm can make rapid, evidence-based decisions on account terminations and payout approvals.
                    </p>
                    <ul>
                        <li><strong>Behavioral Fingerprinting:</strong> Identify traders using prohibited EAs or HFT strategies that exploit server-side vulnerabilities.</li>
                        <li><strong>News Trading Enforcement:</strong> Automatically flag or disable trades executed within restricted windows of high-impact economic events.</li>
                        <li><strong>Anti-Fraud Ecosystem:</strong> Detect "group trading" and account management schemes by correlating IP addresses, hardware IDs, and trading styles.</li>
                        <li><strong>Toxicity Scoring:</strong> Each trader is assigned a risk score, allowing your team to focus their manual audits on the most suspicious accounts.</li>
                    </ul>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        The dashboard utilizes a high-throughput processing engine to monitor thousands of concurrent trades across multiple server environments simultaneously.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>99.9%</strong>
                            <span>Monitoring Uptime</span>
                        </div>
                        <div className="statBox">
                            <strong>X ms</strong>
                            <span>Detection Latency</span>
                        </div>
                        <div className="statBox">
                            <strong>50+</strong>
                            <span>Risk Indicators</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Automated Alerts</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why Prop Risk Monitoring?</h2>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Capital Preservation
                            </h4>
                            <p>Prevent "hit-and-run" strategies from depleting your firm's liquidity through latency exploits.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Compliance
                            </h4>
                            <p>Maintain an audit trail of why accounts were flagged or suspended, protecting your firm from legal disputes.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                                News Filters
                            </h4>
                            <p>Eliminate manual checking of trade timestamps against economic calendars; our system does it instantly.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Group Detection
                            </h4>
                            <p>Reveal hidden networks of traders executing identical trades to bypass individual drawdown limits.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Fraud Prevention
                            </h4>
                            <p>Block users attempting to use stolen identities or prohibited "account management" services.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                                Custom Sensitivity
                            </h4>
                            <p>Fine-tune your risk parameters to allow specific strategies while blocking truly toxic flow.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                                Payout Security
                            </h4>
                            <p>Run an automated "Risk Clearance" check before approving any trader payout requests.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        While the dashboard is an internal tool, it integrates seamlessly with your branded ecosystem to ensure your compliance team works within a professional environment.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                Admin Interface Styling
                            </h4>
                            <p>Customize the internal dashboard with your firm's logo and color scheme for a unified corporate workspace.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                Branded Warning Notifications
                            </h4>
                            <p>Automate the delivery of branded emails to traders who have triggered "soft" warnings or news trading violations.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                Compliance Certificates
                            </h4>
                            <p>Generate branded "Risk Clearance" reports that can be attached to trader profiles or payout audits.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                Proprietary Risk Labels
                            </h4>
                            <p>Define your own categories for risk (e.g., "Style Variance" or "Strategy Conflict") within the management UI.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        Monitoring risk requires a direct, low-latency connection to the trading server's message bus to capture trade data the moment it is generated.
                    </p>
                    <h3>Data Center Locations</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                London, UK
                            </h4>
                            <p>Equinix LD4 (Primary Monitoring Hub)</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                New York, USA
                            </h4>
                            <p>Equinix NY4 (Global Surveillance Node)</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Singapore
                            </h4>
                            <p>Equinix SG1 (APAC Risk Node)</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Frankfurt, Germany
                            </h4>
                            <p>FR2 (European Data Center)</p>
                        </div>
                    </div>

                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                                High Availability
                            </h4>
                            <p>High-availability clusters to ensure zero monitoring downtime.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                                Direct Access
                            </h4>
                            <p>Direct API/Plugin access to MT4/MT5 and cTrader backends.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                Historical DB
                            </h4>
                            <p>Multi-layered database for historical trade pattern analysis.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Isolated Env
                            </h4>
                            <p>Isolated environments for sensitive PII (Personally Identifiable Information).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
                                Real-Time Backups
                            </h4>
                            <p>Real-time offsite backups for all audit logs and risk events.</p>
                        </div>
                    </div>
                    <div className="infoBox">
                        <p><strong>Risk Assurance Statement:</strong> Our infrastructure is designed to process over [X] trades per second. We guarantee that our monitoring logic is synchronized with your server time to within [X] milliseconds.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Comprehensive tools to identify and mitigate every modern prop firm risk.</p>

                    <h3>Detection & Monitoring Features</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                HFT & Arbitrage
                            </h4>
                            <p>Detect sub-second trade durations and price-feed exploits.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                                News Trading
                            </h4>
                            <p>Automated cross-referencing with global economic calendars.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                Grid & Martingale
                            </h4>
                            <p>Identify high-risk money management styles.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Correlation
                            </h4>
                            <p>Spot identical trading patterns across multiple accounts.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                                Inactivity
                            </h4>
                            <p>Flag accounts that are being "warehoused" or used for hedging.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                IP Tracking
                            </h4>
                            <p>Alert on suspicious login patterns or VPN usage.</p>
                        </div>
                    </div>

                    <h3>Analytics Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                Risk Heatmap
                            </h4>
                            <p>Real-time "Risk Heatmap" of all active traders.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                                Drift Analysis
                            </h4>
                            <p>Historical "Drift" analysis (detecting when a trader changes their style).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Breach Logs
                            </h4>
                            <p>Detailed breach logs with visual chart overlays of the event.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Copy Trading
                            </h4>
                            <p>Comparison tool for suspected "Copy Trading" groups.</p>
                        </div>
                    </div>

                    <h3>Automation Capability</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
                                Hard Breach
                            </h4>
                            <p>Automated "Hard Breach" account suspension.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                                Soft Breach
                            </h4>
                            <p>"Soft Breach" warnings via Email/Telegram/SMS.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Auto Tagging
                            </h4>
                            <p>Automated tagging of accounts for manual review by senior risk officers.</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>The Risk Dashboard is built to be the "Integrity Layer" of your brokerage tech stack.</p>

                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                Bulk Updates
                            </h4>
                            <p>Bulk update risk parameters across specific account groups.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
                                Auto Suspend
                            </h4>
                            <p>Programmatically suspend or reactivate accounts based on external audits.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                Data Export
                            </h4>
                            <p>Export risk data to third-party BI tools or regulatory reporting engines.</p>
                        </div>
                    </div>

                    <h3>Platform Connectivity</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                MetaTrader 4/5
                            </h4>
                            <p>Full server-side integration via Manager API.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
                                cTrader
                            </h4>
                            <p>Native connectivity via Web Services and Open API.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                                Match-Trader
                            </h4>
                            <p>Support for modern prop-focused trading environments.</p>
                        </div>
                    </div>
                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a REST API for custom dashboard development. This allows you to pull "Risk Status" data directly into your CRM, so your support team can see instantly if a trader's account was disabled due to a rule breach or a technical error.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is structured based on the volume of accounts monitored, ensuring you only pay for the protection you need.</p>

                    <h3>What’s Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                                Dashboard
                            </h4>
                            <p>Full access to the Risk Dashboard & Admin UI.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Detection
                            </h4>
                            <p>HFT and Anti-Fraud detection modules.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                                News Trading
                            </h4>
                            <p>Pre-configured News Trading event database.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M2 17h2v.006c0 1.637 1.258 2.064 2.126 2.394.869.33 2.874 1.6 2.874 1.6h.016L12 21l-3.32-8.68A2 2 0 0 1 8.35 11h7.3a2 2 0 0 1 1.67 1.32L20.66 21l-7.23-2.906a3.52 3.52 0 0 0-1.42-.3h-.01" /></svg>
                                Connection
                            </h4>
                            <p>1 trading server connection.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                                Alerts
                            </h4>
                            <p>Automated email/Telegram alert system.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 2v6h-6" /><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M3 22v-6h6" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /></svg>
                                Updates
                            </h4>
                            <p>Regular logic updates to counter new "cheat" strategies.</p>
                        </div>
                    </div>

                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Fingerprinting
                            </h4>
                            <p>Custom "Strategy Fingerprinting" for unique firm rules.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Audits
                            </h4>
                            <p>Dedicated risk officer support for payout audits.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                KYC/IP
                            </h4>
                            <p>Advanced KYC/IP correlation with third-party databases.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                                Mobile Risk
                            </h4>
                            <p>White-labeled mobile risk alert app for firm owners.</p>
                        </div>
                    </div>

                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                                Audit
                            </h4>
                            <p>Risk Audit: Defining your firm's "Toxic" parameters (Days 1-2).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                                Connect
                            </h4>
                            <p>Server Connectivity: Establishing secure API links to trading servers (Days 3-4).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                                Calibrate
                            </h4>
                            <p>Threshold Calibration: Testing the logic against historical trade data (Days 5-7).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                                Integrate
                            </h4>
                            <p>Workflow Integration: Setting up automated alerts and suspensions (Days 7-8).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>05</span>
                                Go-Live
                            </h4>
                            <p>Go-Live: Full real-time monitoring activation (Day 10).</p>
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
