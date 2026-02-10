import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';

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
                    <h1>PAMM (Percentage Allocation Management Module) Solution</h1>
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
                    <ul>
                        <li><strong>Operational Efficiency:</strong> No need to manage multiple individual accounts; managers focus solely on the Master account.</li>
                        <li><strong>Precise Profit Sharing:</strong> Percentage-based allocation ensures that every investor, regardless of their deposit size, gets an equitable return.</li>
                        <li><strong>Performance-Based Growth:</strong> Automated fee structures (Performance, Management, Volume) incentivize managers to deliver results.</li>
                        <li><strong>Transparency for Investors:</strong> Dedicated portals allow investors to view their equity, PnL, and historical growth in real-time.</li>
                        <li><strong>Flexible Funding:</strong> Investors can deposit or withdraw funds during specified "open windows" without affecting open trades.</li>
                        <li><strong>Professional Grade Analytics:</strong> Deep-dive into Master account performance with Sharpe ratios, drawdown analysis, and win rates.</li>
                        <li><strong>Regulatory Compliance Support:</strong> Clear audit trails for every trade and fee deduction simplify your reporting obligations.</li>
                    </ul>
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
                    <ul>
                        <li><strong>London, UK</strong> - Equinix LD4 (Primary Node)</li>
                        <li><strong>New York, USA</strong> - Equinix NY4</li>
                        <li><strong>Singapore</strong> - Equinix SG1</li>
                        <li><strong>Dubai, UAE</strong> - Regional Financial Hub</li>
                    </ul>

                    <h3>Infrastructure Specifications</h3>
                    <ul>
                        <li>Server-side plugin architecture for zero-latency trade distribution.</li>
                        <li>High-availability database clusters for historical fee and trade tracking.</li>
                        <li>Tier-1 security with hardware-level DDoS protection.</li>
                        <li>Encrypted backups of investor equity data and manager configurations.</li>
                        <li>Proactive monitoring of server health and connectivity status.</li>
                    </ul>
                    <div className="infoBox">
                        <p><strong>Uptime Statement:</strong> We guarantee a [99.9%] uptime for the PAMM allocation engine. Our infrastructure utilizes failover nodes to ensure that profit distributions are never delayed or missed.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Comprehensive tools to manage every aspect of your managed account business.</p>

                    <h3>Management & Allocation</h3>
                    <ul>
                        <li>Equity-based percentage allocation.</li>
                        <li>Support for multiple base currencies within one pool.</li>
                        <li>"Open Window" management for deposits and withdrawals.</li>
                        <li>Master account hard-stop and equity protection settings.</li>
                        <li>Ability to set "Minimum Investment" thresholds per pool.</li>
                    </ul>

                    <h3>Fee & Billing Tools</h3>
                    <ul>
                        <li>Automated Performance Fee (with High-Water Mark support).</li>
                        <li>Management Fee (Annualized/Monthly).</li>
                        <li>Volume-based commission fees.</li>
                        <li>Penalty fee logic for early investor withdrawals.</li>
                    </ul>

                    <h3>Analytics & Tools</h3>
                    <ul>
                        <li>Real-time Master account "Health" dashboard.</li>
                        <li>Historical equity and balance charts for all participants.</li>
                        <li>Comparative analytics for different manager strategies.</li>
                        <li>Integrated trade journal for Master accounts.</li>
                    </ul>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>The PAMM module is designed to integrate seamlessly into your existing brokerage tech stack.</p>

                    <h3>Manager / Admin API</h3>
                    <ul>
                        <li>Programmatically create Master accounts and investor sub-accounts.</li>
                        <li>Update fee structures and manager permissions via external CRM.</li>
                        <li>Extract real-time pool data for custom website leaderboards.</li>
                    </ul>

                    <h3>Gateway & Connectivity API</h3>
                    <ul>
                        <li><strong>MetaTrader 4/5:</strong> Full server-side integration via Manager API.</li>
                        <li><strong>cTrader:</strong> Native support for managed account environments.</li>
                        <li><strong>Web API:</strong> RESTful endpoints for building custom mobile apps or investor cabinets.</li>
                    </ul>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a comprehensive SDK for brokers who wish to build a bespoke investor experience. This allows you to pull "Live Pool Data" directly into your main website, allowing prospective investors to see real-time ROI and drawdown stats before they sign up.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is designed to grow with your AUM (Assets Under Management), typically featuring a base license plus a volume or account-based component.</p>

                    <h3>What’s Included</h3>
                    <ul>
                        <li>Full PAMM Manager & Investor Dashboard license.</li>
                        <li>Server-side allocation plugin for MT4/MT5.</li>
                        <li>Standard fee calculation and distribution engine.</li>
                        <li>Initial branding and UI styling.</li>
                        <li>[24/7] Technical support for Master account monitoring.</li>
                        <li>Monthly software and security updates.</li>
                    </ul>

                    <h3>Optional Add-Ons</h3>
                    <ul>
                        <li>Advanced "Social Ranking" leaderboard widgets.</li>
                        <li>Multi-server support for global brokerages.</li>
                        <li>Custom mobile application for investors.</li>
                        <li>Specialized regulatory reporting modules for fund managers.</li>
                    </ul>

                    <h3>Setup Timeline</h3>
                    <ol>
                        <li><strong>Requirement Mapping (Days 1-2):</strong> Defining fee structures and allocation types.</li>
                        <li><strong>Server Integration (Days 3-5):</strong> Installing the PAMM plugin on your trading server.</li>
                        <li><strong>UI/UX Customization (Days 5-7):</strong> Styling the manager and investor portals.</li>
                        <li><strong>UAT & Verification (Days 7-9):</strong> Testing fee deductions and allocation accuracy.</li>
                        <li><strong>Go-Live (Day [X]):</strong> Production launch and manager onboarding.</li>
                    </ol>
                </div>

                <div id="faq">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faqGrid">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faqItem">
                                <h4>{faq.question}</h4>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentPageLayout>
        </main>
    );
}
