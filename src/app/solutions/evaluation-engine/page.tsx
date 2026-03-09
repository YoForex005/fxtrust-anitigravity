import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Automated Evaluation Engine | Instant Prop Firm Transitions',
    description: 'Scale your prop firm with an Automated Evaluation Engine. Auto-transition traders from demo to funded accounts based on real-time profit and risk rules.',
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/evaluation-engine',
    },
    keywords: [
        'Automated Evaluation Engine',
        'Prop Firm Automation',
        'Demo to Funded Transition',
        'Automated Trading Evaluation',
        'Prop Tech Infrastructure',
        'Trading Rule Engine',
    ],
    openGraph: {
        title: 'Automated Evaluation Engine | Instant Prop Firm Transitions',
        description: 'Scale your prop firm with an Automated Evaluation Engine. Auto-transition traders from demo to funded accounts based on real-time profit and risk rules.',
        url: 'https://fxtrusts.com/solutions/evaluation-engine',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Automated Evaluation Engine | Instant Prop Firm Transitions',
        description: 'Scale your prop firm with an Automated Evaluation Engine. Auto-transition traders from demo to funded accounts based on real-time profit and risk rules.',
    },
};

export default function EvaluationEnginePage() {
    const tableOfContents = [
        { id: 'solution', title: 'Automated Evaluation Engine Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Automated Evaluation?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'Prop Trader Dashboard', href: '/solutions/prop-trader-dashboard', readTime: '5 min' },
        { title: 'Prop Risk Dashboard', href: '/solutions/prop-risk-dashboard', readTime: '6 min' },
        { title: 'MT5 White Label', href: '/solutions/mt5', readTime: '4 min' },
    ];

    const quickFacts = [
        { label: 'Uptime SLA', value: '99.9%' },
        { label: 'Transition Time', value: '< 60 Sec' },
        { label: 'Max Accounts', value: '100k+' },
        { label: 'Sync', value: 'Real-time' },
    ];

    const features = [
        'Multi-Phase Auto-Upgrade',
        'Instant Credential Delivery',
        'Real-time Profit Tracking',
        'Hard & Soft Breach Detection',
        'Automated Risk Reset',
        'Balance/Equity Monitoring',
        'News Trading Filter',
    ];

    const faqs = [
        {
            question: 'How fast is the transition from a demo to a funded account?',
            answer: 'The logic processes the achievement in milliseconds. Including credential generation and email delivery, the trader typically sees their new account within 30 to 60 seconds of their last trade closing at the profit target.',
        },
        {
            question: 'Can I set different rules for different challenge types?',
            answer: 'Absolutely. The engine allows you to create unlimited challenge profiles. You can have different drawdown, profit, and consistency rules for a $10k account versus a $200k account.',
        },
        {
            question: 'What happens if a trader breaches a rule during the transition?',
            answer: 'If a breach is detected (e.g., a trailing drawdown hit) even at the moment the profit target is reached, the breach logic takes precedence. The engine will flag the account as "Failed" and prevent the transition.',
        },
        {
            question: 'Does this integrate with my existing prop firm website?',
            answer: 'Yes. We provide Webhooks and APIs that your website developer can use to update the trader\'s dashboard and trigger "Success" notifications in real-time.',
        },
        {
            question: 'What are the minimum server requirements?',
            answer: 'Our engine is a hosted SaaS solution, so you do not need your own servers. We only require Manager API access to your MT4/MT5 or cTrader environment. We recommend a minimum of 500 accounts for the best ROI.',
        },
        {
            question: 'Is there an audit trail for transitions?',
            answer: 'Yes. Every single transition is logged with a detailed timestamp and a data snapshot of the account\'s balance, equity, and open trades at the moment the transition was triggered.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="Prop Tech Infrastructure"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}
                title="Automated Evaluation Engine"
                subtitle="Eliminate manual bottlenecks and reward talent instantly. Our engine monitors every trade in real-time, automatically transitioning successful traders from evaluation phases to funded live environments the moment objectives are met."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
            />

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Automate Your Prop Firm in 7 Days"
                ctaText="Deploy the industry’s fastest evaluation engine and scale your funded trader pool."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Reach out to our tech team for a demo of the auto-transition workflow."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Automated Evaluation Engine | Instant Prop Firm Transitions","description":"Scale your prop firm with an Automated Evaluation Engine. Auto-transition traders from demo to funded accounts based on real-time profit and risk rules.","url":"https://fxtrusts.com/solutions/evaluation-engine"}) }}
      />
      <h1>Automated Evaluation Engine Solution</h1>
                    <p>
                        The Automated Evaluation Engine is a high-performance backend module designed specifically for proprietary trading firms and investment incubators. It serves as the intelligent layer between your trading server and your client database. Its primary function is to track trader performance against specific KPIs—such as profit targets and drawdown limits—and execute account status changes instantly without human intervention.
                    </p>
                    <p>
                        For fintech founders and prop firm owners, this engine solves the &quot;Friday night bottleneck&quot; where hundreds of traders may hit their targets simultaneously. Instead of manual audits, the engine validates the trading history, checks for rule violations, and provisions the next phase account (or funded account) in seconds. This creates a superior user experience that builds trust and encourages trader retention.
                    </p>
                    <ul>
                        <li><strong>Frictionless Trader Journey:</strong> Moves users from Stage 1 to Stage 2 and eventually to &quot;Funded&quot; status automatically.</li>
                        <li><strong>Capital Protection:</strong> Real-time monitoring terminates access the millisecond a risk threshold is breached.</li>
                        <li><strong>Operational Efficiency:</strong> Reduces the need for a large back-office team to manually verify account equity and trade counts.</li>
                        <li><strong>Dynamic Objective Mapping:</strong> Easily adjust profit targets and days-traded requirements on the fly.</li>
                    </ul>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        The engine is built on a distributed architecture to ensure that trade data from multiple servers is aggregated and analyzed with zero perceptible lag.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                99.9% Uptime
                            </h4>
                            <p>Uptime SLA for the automated transition logic.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                30s Provisioning
                            </h4>
                            <p>Average time to provision new credentials after target achievement.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                100k+ Accounts
                            </h4>
                            <p>Max concurrent accounts monitored per engine instance.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                24/7 Sync
                            </h4>
                            <p>Real-time synchronization with MT4/MT5/cTrader.</p>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why Automated Evaluation?</h2>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
                                Instant Rewards
                            </h4>
                            <p>Successful traders are rewarded with their next account instantly, significantly increasing "hype" and brand loyalty.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Unbiased Logic
                            </h4>
                            <p>Automated rules ensure that every trader is treated fairly based on hard data, reducing compliance disputes.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                                Drawdown Tracking
                            </h4>
                            <p>Monitor complex trailing drawdowns that calculate based on high-water marks in real-time.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                Auto Credentialing
                            </h4>
                            <p>Integration with mail servers ensures the trader receives their new login details the moment they pass.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                Scalability
                            </h4>
                            <p>Manage tens of thousands of evaluation participants with the same overhead as managing ten.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
                                Risk Mitigation
                            </h4>
                            <p>Hard-coded logic prevents "accidental funding" of traders who have breached soft rules like news trading.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                Custom Phases
                            </h4>
                            <p>Support for 1-step, 2-step, or infinity-step evaluation models with unique rules for each.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        While the engine works in the background, every touchpoint the trader sees is fully branded to your firm&apos;s identity.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                                Dashboard Sync
                            </h4>
                            <p>Real-time progress bars and "Objectives Met" badges update instantly on your branded client portal.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                Auto Communications
                            </h4>
                            <p>All "Phase Passed" and "Account Funded" emails are sent from your domain with your custom HTML templates.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Certificates
                            </h4>
                            <p>Successfully passed evaluations automatically trigger the generation of a branded digital certificate for the trader.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                Custom Labels
                            </h4>
                            <p>Define how rules are displayed to your users (e.g., "Daily Loss Limit" vs "Safety Buffer") within the UI.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        The evaluation engine requires high-speed proximity to your trading servers to ensure data integrity and rapid response times.
                    </p>
                    <h3>Data Center Locations</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                London, UK
                            </h4>
                            <p>Equinix LD4</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                New York, USA
                            </h4>
                            <p>Equinix NY4</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Tokyo, Japan
                            </h4>
                            <p>Equinix TY3</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Frankfurt, Germany
                            </h4>
                            <p>Equinix FR2</p>
                        </div>
                    </div>
                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                                Direct API
                            </h4>
                            <p>Direct API connectivity to MetaTrader and cTrader backends.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                Multi-Tenant
                            </h4>
                            <p>Multi-tenant architecture for secure data isolation.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                                Redundant Logic
                            </h4>
                            <p>Redundant logic processors to prevent transition delays.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Encryption
                            </h4>
                            <p>End-to-end encryption for all trader credential handling.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                DDoS Mitigation
                            </h4>
                            <p>Proactive DDoS mitigation and firewall management.</p>
                        </div>
                    </div>
                    <p>
                        <strong>Uptime Statement:</strong> We provide a 99.9% availability guarantee for the evaluation logic. Our infrastructure utilizes automated failover nodes to ensure that no trader&apos;s progress is lost during server maintenance.
                    </p>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>
                        The engine provides a comprehensive set of parameters to define exactly what constitutes a &quot;successful&quot; trader.
                    </p>
                    <h3>Evaluation & Transition Features</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Phase-Up Logic
                            </h4>
                            <p>Instant account "phase-up" logic.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                                Auto-Closure
                            </h4>
                            <p>Auto-closure of open trades upon target achievement (optional).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Auto-Password
                            </h4>
                            <p>Automated password changes for breached accounts.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
                                High-Water Mark
                            </h4>
                            <p>Balance and Equity high-water mark tracking.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                Trading Days
                            </h4>
                            <p>Minimum and Maximum trading days validation.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
                                Restrictions
                            </h4>
                            <p>News trading and weekend holding detection.</p>
                        </div>
                    </div>
                    <h3>Analytics Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                                Leaderboard
                            </h4>
                            <p>Real-time "Traders Near Target" leaderboard for admins.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
                                Breach Ratio
                            </h4>
                            <p>Breach ratio analytics to help optimize challenge pricing.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Transition Logs
                            </h4>
                            <p>Detailed transition logs for auditing and transparency.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                Heatmaps
                            </h4>
                            <p>Performance heatmaps based on trading style.</p>
                        </div>
                    </div>
                    <h3>Algorithmic Capability</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>
                                Consistency Score
                            </h4>
                            <p>Automated consistency score calculation.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Anti-Cheat
                            </h4>
                            <p>Anti-cheat logic to detect "group trading" or "HFT" violations.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
                                Strategy Detection
                            </h4>
                            <p>Detection of prohibited strategies across multiple accounts.</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>
                        The engine is designed to be the central "brain" of your prop firm, connecting to all your external services.
                    </p>
                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                Manual Transitions
                            </h4>
                            <p>Manually trigger transitions for VIP clients or marketing events.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                                Global Updates
                            </h4>
                            <p>Update rulesets globally or for specific account groups via API.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                Data Extraction
                            </h4>
                            <p>Extract real-time performance data for external BI tools.</p>
                        </div>
                    </div>
                    <h3>Gateway & Connectivity API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                MetaTrader 4/5
                            </h4>
                            <p>Full support via Manager API and custom plugins.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
                                cTrader
                            </h4>
                            <p>Integration via Web Services and Open API.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                                Match-Trader
                            </h4>
                            <p>Native connectivity for modern prop firm setups.</p>
                        </div>
                    </div>
                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a robust REST API and Webhooks. These allow your website to receive an "Event" notification the moment a trader passes. You can use these webhooks to trigger congratulatory social media posts, update Discord roles, or initiate a payout process.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>
                        Our pricing is based on a "Success-Driven" model or a flat monthly license, tailored to your firm's volume.
                    </p>
                    <h3>What's Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                                License
                            </h4>
                            <p>Full Evaluation Engine license.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M2 17h2v.006c0 1.637 1.258 2.064 2.126 2.394.869.33 2.874 1.6 2.874 1.6h.016L12 21l-3.32-8.68A2 2 0 0 1 8.35 11h7.3a2 2 0 0 1 1.67 1.32L20.66 21l-7.23-2.906a3.52 3.52 0 0 0-1.42-.3h-.01" /></svg>
                                Servers
                            </h4>
                            <p>Integration with 2 trading servers.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Templates
                            </h4>
                            <p>Standard ruleset templates (1-step, 2-step).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                Email System
                            </h4>
                            <p>Automated email notification system.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Dashboard
                            </h4>
                            <p>Admin dashboard for manual overrides.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 2v6h-6" /><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M3 22v-6h6" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /></svg>
                                Optimization
                            </h4>
                            <p>Weekly security and performance optimization.</p>
                        </div>
                    </div>
                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Custom Rules
                            </h4>
                            <p>Custom ruleset development (e.g., unique consistency metrics).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                                Multi-Platform
                            </h4>
                            <p>Multi-platform support (e.g., MT5 and cTrader simultaneously).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Anti-Fraud
                            </h4>
                            <p>Advanced anti-fraud and copy-trading detection.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                                Mobile App
                            </h4>
                            <p>White-labeled mobile app integration.</p>
                        </div>
                    </div>
                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                                Rules
                            </h4>
                            <p>Configuration: Mapping your profit targets and drawdown logic (Days 1-2).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                                Linking
                            </h4>
                            <p>Server Linking: Establishing secure API tunnels to your trading servers (Days 3-4).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                                Mapping
                            </h4>
                            <p>Credential Mapping: Configuring the auto-delivery of new logins (Days 5-6).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                                UAT
                            </h4>
                            <p>Stress Testing: Simulating 1,000+ transitions to ensure stability (Days 7-9).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>05</span>
                                Go-Live
                            </h4>
                            <p>Production launch for your first challenge participants (Day 10).</p>
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
