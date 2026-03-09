import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'PAMM (Percentage Allocation Management Module) | Money Manager Software',
    description: 'Scale your investment business with a professional PAMM solution. Automate profit distribution and manage multiple investor accounts from a single master account.',
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/pamm',
    },
    keywords: [
        'PAMM Solution',
        'Money Management Software',
        'PAMM Broker Platform',
        'Automated Profit Distribution',
        'Percentage Allocation Management',
        'Investment Portfolio Manager',
    ],
    openGraph: {
        title: 'PAMM (Percentage Allocation Management Module) | Money Manager Software',
        description: 'Scale your investment business with a professional PAMM solution. Automate profit distribution and manage multiple investor accounts from a single master account.',
        url: 'https://fxtrusts.com/solutions/pamm',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PAMM (Percentage Allocation Management Module) | Money Manager Software',
        description: 'Scale your investment business with a professional PAMM solution. Automate profit distribution and manage multiple investor accounts from a single master account.',
    },
};

export default function PammPage() {
    const tableOfContents = [
        { id: 'solution', title: 'PAMM Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why PAMM?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'MAM Solution', href: '/solutions/mam', readTime: '5 min' },
        { title: 'Copy Trading', href: '/solutions/copy-trading', readTime: '5 min' },
        { title: 'Forex CRM', href: '/solutions/crm', readTime: '4 min' },
    ];

    const quickFacts = [
        { label: 'Uptime', value: '99.9%' },
        { label: 'Avg Setup', value: '[X] Days' },
        { label: 'Investors', value: 'Unlimited' },
        { label: 'Monitoring', value: '24/7' },
    ];

    const features = [
        'Unlimited Investor Sub-accounts',
        'Automatic Fee Deduction',
        'Real-time Equity Monitoring',
        'Master Account Hard-Stop Risk',
        'Detailed Performance Analytics',
        'Penalty-free Capital Injection',
        'Investor Web Portal'
    ];

    const faqs = [
        {
            question: 'How is the PAMM different from Copy Trading?',
            answer: 'In a PAMM, the Master and Investors\' funds are pooled into a single account. Trades are executed once for the total volume, and profits are distributed based on percentage of equity. This eliminates slippage and ensures all participants get the exact same entry and exit prices.',
        },
        {
            question: 'Can investors withdraw their funds at any time?',
            answer: 'You can configure "Open Windows" or withdrawal request periods. While the platform supports real-time withdrawals, managers usually set specific times to prevent sudden equity drops that could affect open trades and margin requirements.',
        },
        {
            question: 'Does the system support the High-Water Mark (HWM) principle?',
            answer: 'Yes. Our PAMM module includes a robust High-Water Mark engine. This ensures that Money Managers are only paid performance fees when the investor\'s equity exceeds its previous peak, protecting the investor\'s interests.',
        },
        {
            question: 'How many investors can a single Master account have?',
            answer: 'The system is designed to be highly scalable and can support unlimited investor accounts under a single Master. Our infrastructure is optimized to ensure that even with thousands of investors, allocation remains instantaneous.',
        },
        {
            question: 'What are the minimum requirements to start?',
            answer: 'You need an active MT4/MT5 or cTrader server with Manager API access. We recommend a professional fund management plan for firms looking to handle more than [X] active pools.',
        },
        {
            question: 'How are the performance fees paid to the manager?',
            answer: 'The system automatically calculates and deducts the performance fees from the investor\'s profit at the end of each "trading period" (Weekly, Monthly, or Quarterly) and transfers them to the Manager’s commission account.',
        },
    ];

    return (
        <>
            
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"PAMM (Percentage Allocation Management Module) | Money Manager Software","description":"Scale your investment business with a professional PAMM solution. Automate profit distribution and manage multiple investor accounts from a single master account.","url":"https://fxtrusts.com/solutions/pamm"}) }}
      />
      <h1 className="sr-only">Pamm Page</h1>
            {/* Original Component */}
            
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="White Label Solution"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>}
                title="PAMM Solution"
                subtitle="Empower your money managers and attract high-net-worth investors with a robust, automated investment ecosystem. Our PAMM module ensures precise percentage-based allocation and seamless profit distribution across unlimited sub-accounts."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
            />

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Launch Your PAMM Service in [X Days]"
                ctaText="Deploy a professional investment hub and start onboarding money managers."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Contact our money management specialists to discuss custom allocation logic."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    <h2 className='sm:w-[20px]'>PAMM (Percentage Allocation Management Module) Solution</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Enterprise Scaling</h3>
                            <p className="text-sm text-blue-800">Manage thousands of investors through a single Master account.</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Instant Allocation</h3>
                            <p className="text-sm text-blue-800">Real-time trade distribution based on equity percentage.</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Automated Billing</h3>
                            <p className="text-sm text-blue-800">Built-in performance and management fee calculations.</p>
                        </div>
                    </div>
                    <p>
                        The Percentage Allocation Management Module (PAMM) is the gold standard for brokers and investment firms looking to offer managed account services. Unlike traditional copy trading, PAMM allows a Money Manager to trade a single "Main" account that pools the equity of various investors. The results—both profits and losses—are then distributed among the investors according to their percentage share in the total pool.
                    </p>
                    <p>
                        This solution is designed for fintech founders and established brokers who want to attract professional fund managers. By providing a transparent and automated environment, you remove the operational headache of manual profit calculations. The PAMM module handles everything from high-water mark tracking to the automatic deduction of performance fees, ensuring that managers get paid accurately and investors receive their fair share.
                    </p>
                    <ul>
                        <li><strong>Unified Pool Execution:</strong> Master account trades are treated as a single block, ensuring no price disparity between investors.</li>
                        <li><strong>Automated Performance Fees:</strong> System-wide tracking of High-Water Marks to ensure fees are only charged on new profits.</li>
                        <li><strong>Scalable Investor Management:</strong> Add or remove investors without disrupting active trading positions or requiring account resets.</li>
                        <li><strong>Risk-Managed Environment:</strong> Master-level risk controls that protect the entire pool from catastrophic equity drawdowns.</li>
                    </ul>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our PAMM infrastructure is built for precision, ensuring that even micro-lot allocations are handled correctly across the entire investor base.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>99.9%</strong>
                            <span>Allocation Accuracy</span>
                        </div>
                        <div className="statBox">
                            <strong>[X]</strong>
                            <span>Days setup time</span>
                        </div>
                        <div className="statBox">
                            <strong>Unlimited</strong>
                            <span>Investors per Master</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Real-time Monitoring</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why PAMM?</h2>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Efficiency
                            </h4>
                            <p>No need to manage multiple individual accounts; managers focus solely on the Master account.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M16 12h-4v4" /></svg>
                                Precise Sharing
                            </h4>
                            <p>Percentage-based allocation ensures that every investor, regardless of their deposit size, gets an equitable return.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                Performance
                            </h4>
                            <p>Automated fee structures (Performance, Management, Volume) incentivize managers to deliver results.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Transparency
                            </h4>
                            <p>Dedicated portals allow investors to view their equity, PnL, and historical growth in real-time.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                                Flexible Funding
                            </h4>
                            <p>Investors can deposit or withdraw funds during specified "open windows" without affecting open trades.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
                                Analytics
                            </h4>
                            <p>Deep-dive into Master account performance with Sharpe ratios, drawdown analysis, and win rates.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Compliance
                            </h4>
                            <p>Clear audit trails for every trade and fee deduction simplify your reporting obligations.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        Our PAMM solution is fully customizable, ensuring that your investment platform remains a consistent part of your brand identity.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                Manager & Investor Portals
                            </h4>
                            <p>A fully white-labeled web interface where managers can view their pool and investors can track their portfolio growth.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                Custom Reporting
                            </h4>
                            <p>Branded PDF performance statements and daily reports sent automatically to your clients under your firm's name.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                Marketing Leaderboards
                            </h4>
                            <p>Display your top-performing PAMM managers on your website with branded widgets to attract new capital.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                Mobile Access
                            </h4>
                            <p>Responsive dashboard branding that ensures investors can monitor their funds securely from any mobile device.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        Managed investment accounts require a stable environment to ensure that allocation logic is always in sync with the trading server.
                    </p>
                    <h3>Data Center Locations</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                London, UK
                            </h4>
                            <p>Equinix LD4 (Primary Node)</p>
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
                                Singapore
                            </h4>
                            <p>Equinix SG1</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Dubai, UAE
                            </h4>
                            <p>Regional Financial Hub</p>
                        </div>
                    </div>

                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                Zero Latency
                            </h4>
                            <p>Server-side plugin architecture for zero-latency trade distribution.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                Clusters
                            </h4>
                            <p>High-availability database clusters for historical fee and trade tracking.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Security
                            </h4>
                            <p>Tier-1 security with hardware-level DDoS protection.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                Backups
                            </h4>
                            <p>Encrypted backups of investor equity data and manager configurations.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                Monitoring
                            </h4>
                            <p>Proactive monitoring of server health and connectivity status.</p>
                        </div>
                    </div>
                    <div className="infoBox">
                        <p><strong>Uptime Statement:</strong> We guarantee a [99.9%] uptime for the PAMM allocation engine. Our infrastructure utilizes failover nodes to ensure that profit distributions are never delayed or missed.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Comprehensive tools to manage every aspect of your managed account business.</p>

                    <h3>Management & Allocation</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M16 12h-4v4" /></svg>
                                Equity Based
                            </h4>
                            <p>Equity-based percentage allocation.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                                Multi-Currency
                            </h4>
                            <p>Support for multiple base currencies within one pool.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                Open Windows
                            </h4>
                            <p>"Open Window" management for deposits and withdrawals.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Risk Control
                            </h4>
                            <p>Master account hard-stop and equity protection settings.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Minimums
                            </h4>
                            <p>Ability to set "Minimum Investment" thresholds per pool.</p>
                        </div>
                    </div>

                    <h3>Fee & Billing Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                Performance
                            </h4>
                            <p>Automated Performance Fee (with High-Water Mark support).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                                Management
                            </h4>
                            <p>Management Fee (Annualized/Monthly).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Commission
                            </h4>
                            <p>Volume-based commission fees.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                Penalty
                            </h4>
                            <p>Penalty fee logic for early investor withdrawals.</p>
                        </div>
                    </div>

                    <h3>Analytics & Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                                Health
                            </h4>
                            <p>Real-time Master account "Health" dashboard.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
                                Charts
                            </h4>
                            <p>Historical equity and balance charts for all participants.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                                Comparative
                            </h4>
                            <p>Comparative analytics for different manager strategies.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Journal
                            </h4>
                            <p>Integrated trade journal for Master accounts.</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>The PAMM module is designed to integrate seamlessly into your existing brokerage tech stack.</p>

                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                Create Accounts
                            </h4>
                            <p>Programmatically create Master accounts and investor sub-accounts.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Update Fees
                            </h4>
                            <p>Update fee structures and manager permissions via external CRM.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                                Real-time Data
                            </h4>
                            <p>Extract real-time pool data for custom website leaderboards.</p>
                        </div>
                    </div>

                    <h3>Gateway & Connectivity API</h3>
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
                            <p>Native support for managed account environments.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Web API
                            </h4>
                            <p>RESTful endpoints for building custom mobile apps or investor cabinets.</p>
                        </div>
                    </div>
                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a comprehensive SDK for brokers who wish to build a bespoke investor experience. This allows you to pull "Live Pool Data" directly into your main website, allowing prospective investors to see real-time ROI and drawdown stats before they sign up.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is designed to grow with your AUM (Assets Under Management), typically featuring a base license plus a volume or account-based component.</p>

                    <h3>What’s Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                                Dashboard
                            </h4>
                            <p>Full PAMM Manager & Investor Dashboard license.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                Plugin
                            </h4>
                            <p>Server-side allocation plugin for MT4/MT5.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Engine
                            </h4>
                            <p>Standard fee calculation and distribution engine.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                                Branding
                            </h4>
                            <p>Initial branding and UI styling.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                Support
                            </h4>
                            <p>[24/7] Technical support for Master account monitoring.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                Updates
                            </h4>
                            <p>Monthly software and security updates.</p>
                        </div>
                    </div>

                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                Leaderboard
                            </h4>
                            <p>Advanced "Social Ranking" leaderboard widgets.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                                Multi-Server
                            </h4>
                            <p>Multi-server support for global brokerages.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                                Mobile App
                            </h4>
                            <p>Custom mobile application for investors.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Reporting
                            </h4>
                            <p>Specialized regulatory reporting modules for fund managers.</p>
                        </div>
                    </div>

                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                                Mapping
                            </h4>
                            <p>Requirement Mapping: Defining fee structures and allocation types (Days 1-2).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                                Install
                            </h4>
                            <p>Server Integration: Installing the PAMM plugin on your trading server (Days 3-5).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                                Style
                            </h4>
                            <p>UI/UX Customization: Styling the manager and investor portals (Days 5-7).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                                Test
                            </h4>
                            <p>UAT & Verification: Testing fee deductions and allocation accuracy (Days 7-9).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>05</span>
                                Live
                            </h4>
                            <p>Go-Live: Production launch and manager onboarding (Day 10).</p>
                        </div>
                    </div>
                </div>

                <div id="faq">
                    <h2>Frequently Asked Questions</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </ContentPageLayout>
        </main>
    
        </>
    );
}
