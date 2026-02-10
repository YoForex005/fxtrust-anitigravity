import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'MAM (Multi-Account Manager) | Professional Money Manager Tool',
    description: 'Scale your investment business with a professional Multi-Account Manager (MAM). Execute bulk trades across unlimited investor accounts with custom lot allocation.',
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/mam',
    },
    keywords: [
        'MAM Multi-Account Manager',
        'Forex MAM Solution',
        'Multi-Account Trading',
        'Professional Money Manager',
        'MT4 MT5 MAM Plugin',
        'Lot Allocation Management',
    ],
    openGraph: {
        title: 'MAM (Multi-Account Manager) | Professional Money Manager Tool',
        description: 'Scale your investment business with a professional Multi-Account Manager (MAM). Execute bulk trades across unlimited investor accounts with custom lot allocation.',
        url: 'https://fxtrusts.com/solutions/mam',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MAM (Multi-Account Manager) | Professional Money Manager Tool',
        description: 'Scale your investment business with a professional Multi-Account Manager (MAM). Execute bulk trades across unlimited investor accounts with custom lot allocation.',
    },
};

export default function MAMPage() {
    const tableOfContents = [
        { id: 'solution', title: 'MAM (Multi-Account Manager) Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why MAM?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'PAMM Solution', href: '/solutions/pamm', readTime: '5 min' },
        { title: 'Copy Trading', href: '/solutions/copy-trading', readTime: '4 min' },
        { title: 'MT5 White Label', href: '/solutions/mt5', readTime: '5 min' },
    ];

    const quickFacts = [
        { label: 'Uptime SLA', value: '99.9%' },
        { label: 'Setup Time', value: 'X Days' },
        { label: 'Investor Accounts', value: 'Unlimited' },
        { label: 'Monitoring', value: '24/7' },
    ];

    const features = [
        '6+ Allocation Methods',
        'Real-Time P&L Reporting',
        'Performance Fee Automation',
        'Partial Close Synchronization',
        'Unlimited Investor Accounts',
        'Master Stop-Loss Controls',
        'Mobile Manager Access'
    ];

    const faqs = [
        {
            question: 'What is the main difference between MAM and PAMM?',
            answer: 'In a PAMM, all funds are pooled into one big account. In a MAM, investors have separate accounts and the manager executes a "block trade" that is then split among them. MAM offers more flexibility in how lots are distributed (e.g., giving more weight to certain clients).',
        },
        {
            question: 'Can the manager trade different lot sizes for different investors?',
            answer: 'Yes. Depending on the allocation method chosen (like Manual Lot Allocation), the manager can define exactly how many lots each individual sub-account should receive for every trade.',
        },
        {
            question: 'Is the performance fee calculation automated?',
            answer: 'Absolutely. The system automatically tracks the High-Water Mark for every sub-account and calculates the performance fee at the end of each period, transferring the commission to the manager\'s account instantly.',
        },
        {
            question: 'Can investors close their own trades?',
            answer: 'By default, the manager controls the trades. However, you can configure the system to allow investors to "read-only" access or give them the ability to detach and close positions if they choose to leave the MAM.',
        },
        {
            question: 'What are the minimum requirements to start?',
            answer: 'You need an active MT4/MT5 or cTrader server with Manager API access. We recommend having at least [X] active investor accounts to maximize the operational benefits of the MAM.',
        },
        {
            question: 'Does the MAM support Expert Advisors (EAs)?',
            answer: 'Yes. Managers can run any EA on the Master account, and the MAM engine will instantly allocate the automated trades across all linked sub-accounts according to the set rules.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="White Label Solution"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
                title="MAM Solution"
                subtitle="Empower your money managers with a sophisticated trade allocation engine designed for high-performance fund management. Our MAM solution allows for flexible, manual-lot control across thousands of investor accounts from a single terminal."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
            >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', fontSize: '0.875rem', color: '#4B5563' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Precision Control</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Instant Execution</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Professional Grade</span>
                    </div>
                </div>
            </InnerPageHeader>

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Launch Your MAM Service in [X Days]"
                ctaText="Provide your fund managers with the most powerful multi-account trading tool in the industry."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Speak with our institutional specialists to configure your MAM parameters."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    <h1>MAM (Multi-Account Manager) Solution</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Granular Allocation</h3>
                            <p className="text-sm text-blue-800">Distribute trade volumes precisely according to investor needs or risk profiles.</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Bulk Execution</h3>
                            <p className="text-sm text-blue-800">Execute a single block trade that is split among sub-accounts instantly.</p>
                        </div>
                    </div>
                    <p>
                        The Multi-Account Manager (MAM) is an essential tool for professional money managers and investment firms who require more granular control than a standard PAMM module. While a PAMM pools funds into one account, a MAM allows the manager to execute trades on a Master account that are instantly mirrored across multiple individual investor accounts. This allows for customized risk management and specific lot allocation for different investor tiers.
                    </p>
                    <p>
                        This solution is built for brokers and fintech founders who want to attract institutional-grade talent. Our MAM engine handles the complex math of dividing trade volumes according to your chosen allocation method—be it lot-based, percentage-based, or equity-based. It ensures that every investor receives their portion of the trade instantly, maintaining the integrity of the manager's strategy across the entire portfolio.
                    </p>
                    <ul>
                        <li><strong>Granular Trade Allocation:</strong> Choose from multiple methods to distribute trade volumes precisely according to investor needs or risk profiles.</li>
                        <li><strong>Individual Account Transparency:</strong> Investors maintain their own accounts, allowing them to see individual trade tickets and history.</li>
                        <li><strong>Bulk Order Execution:</strong> Execute a single block trade that is split among sub-accounts, ensuring all clients get the same entry price.</li>
                        <li><strong>Automated Revenue Streams:</strong> Built-in tools for calculating and deducting performance, management, and rebate fees.</li>
                    </ul>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our MAM software integrates directly into the trading server backend to provide the highest level of execution speed and data accuracy.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>99.9%</strong>
                            <span>Uptime SLA</span>
                        </div>
                        <div className="statBox">
                            <strong>[X] Days</strong>
                            <span>Average Setup</span>
                        </div>
                        <div className="statBox">
                            <strong>Unlimited</strong>
                            <span>Investor Accounts</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Real-time Monitoring</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why MAM?</h2>
                    <ul>
                        <li><strong>Flexibility in Allocation:</strong> Unlike PAMM, managers can manually adjust lot sizes for specific accounts if needed, providing high-touch portfolio management.</li>
                        <li><strong>Professional Execution:</strong> Support for all order types, including pending orders and partial closes, synchronized across the entire account group.</li>
                        <li><strong>Investor Retention:</strong> High transparency levels allow investors to feel more in control of their individual accounts while benefiting from professional management.</li>
                        <li><strong>Scalable Business Model:</strong> Manage a diverse range of investors with different capital levels without increasing administrative overhead.</li>
                        <li><strong>Automated Billing:</strong> Eliminate manual spreadsheets with automated high-water mark tracking and fee distribution.</li>
                        <li><strong>Risk Management:</strong> Set global risk parameters or individual account caps to protect investors from over-leveraging.</li>
                        <li><strong>Enhanced Reporting:</strong> Provide managers with a comprehensive overview of their total AUM (Assets Under Management) and real-time performance metrics.</li>
                    </ul>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        Our MAM solution is designed to be a seamless part of your brokerage's premium service offering, fully branded to your corporate identity.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                Manager Interface
                            </h4>
                            <p>A professional, white-labeled trading terminal interface where managers can view their entire pool of sub-accounts.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                Investor Performance Portals
                            </h4>
                            <p>Give your investors a branded web portal to view their account growth, equity curves, and historical performance.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                Branded Fee Statements
                            </h4>
                            <p>Automatically generate and send branded invoices and performance fee statements to your clients.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                                Marketing Widgets
                            </h4>
                            <p>Embed branded leaderboards on your website to showcase the success of your top MAM managers and attract new investors.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        The MAM engine requires a high-performance server-side plugin to ensure that trades are allocated in milliseconds across all linked accounts.
                    </p>
                    <h3>Data Center Locations</h3>
                    <ul>
                        <li><strong>London, UK</strong> - Equinix LD4 (Primary FX Hub)</li>
                        <li><strong>New York, USA</strong> - Equinix NY4</li>
                        <li><strong>Singapore</strong> - Equinix SG1</li>
                        <li><strong>Tokyo, Japan</strong> - Equinix TY3</li>
                    </ul>

                    <h3>Infrastructure Specifications</h3>
                    <ul>
                        <li>Server-side plugin architecture for zero-latency trade distribution.</li>
                        <li>High-speed API connectivity to the MT4/MT5/cTrader backend.</li>
                        <li>Redundant server clusters to ensure continuous allocation during peaks.</li>
                        <li>Proactive DDoS protection and secure data encryption.</li>
                        <li>Automated daily backups of all allocation logs and fee data.</li>
                    </ul>
                    <div className="infoBox">
                        <p><strong>SLA Statement:</strong> We guarantee [99.9%] availability for the MAM server environment. Our infrastructure is optimized to ensure that even during high-volatility news events, trade allocation remains perfectly synchronized.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Our MAM tools offer the most comprehensive set of allocation and management features available today.</p>

                    <h3>Allocation Methods</h3>
                    <ul>
                        <li><strong>Lot Allocation:</strong> Pre-defined lot sizes for each sub-account.</li>
                        <li><strong>Percent Allocation:</strong> Distribution based on a percentage of the Master's volume.</li>
                        <li><strong>Proportional by Balance:</strong> Based on the ratio of investor balance to total pool.</li>
                        <li><strong>Proportional by Equity:</strong> Based on real-time equity ratios.</li>
                        <li><strong>Equity Percent:</strong> Each account trades a specific percentage of its own equity.</li>
                    </ul>

                    <h3>Management & Billing</h3>
                    <ul>
                        <li>Automated performance fee with High-Water Mark (HWM).</li>
                        <li>Monthly or quarterly management fee deductions.</li>
                        <li>Volume-based commission (Rebate) tracking.</li>
                        <li>Master account hard-stop and equity protection tools.</li>
                    </ul>

                    <h3>Analytics & Reporting</h3>
                    <ul>
                        <li>Real-time P&L and Equity tracking for all sub-accounts.</li>
                        <li>Comprehensive history of all trades and fee deductions.</li>
                        <li>"Health" dashboard to monitor margin levels across the group.</li>
                    </ul>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>The MAM solution is built for extensibility, allowing it to function as a core part of your brokerage ecosystem.</p>

                    <h3>Manager / Admin API</h3>
                    <ul>
                        <li>Programmatically link or unlink investor accounts.</li>
                        <li>Modify allocation methods and fee structures via external CRM.</li>
                        <li>Export real-time AUM and performance data for auditing.</li>
                    </ul>

                    <h3>Platform Connectivity</h3>
                    <ul>
                        <li><strong>MetaTrader 4/5:</strong> Full server-side integration via Manager API.</li>
                        <li><strong>cTrader:</strong> Support for managed account environments through Open API.</li>
                        <li><strong>Proprietary Platforms:</strong> Integration options available via FIX API or Web Services.</li>
                    </ul>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a RESTful API and SDK that allows you to build custom front-ends. This is ideal for brokers who want to create a unique investor dashboard or integrate MAM performance data into their mobile app.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is structured to support both boutique fund managers and large-scale global brokerages.</p>

                    <h3>What’s Included</h3>
                    <ul>
                        <li>Full MAM Manager & Admin dashboard license.</li>
                        <li>Server-side allocation plugin for MT4/MT5.</li>
                        <li>5+ Standard allocation methods.</li>
                        <li>Automated fee calculation and distribution engine.</li>
                        <li>Initial branding and UI customization.</li>
                        <li>Regular security and performance updates.</li>
                    </ul>

                    <h3>Optional Add-Ons</h3>
                    <ul>
                        <li>Custom allocation method development.</li>
                        <li>White-labeled investor mobile application.</li>
                        <li>Multi-server/Cross-platform allocation support.</li>
                        <li>Advanced anti-fraud and strategy-theft protection.</li>
                    </ul>

                    <h3>Setup Timeline</h3>
                    <ol>
                        <li><strong>Configuration Mapping (Days 1-2):</strong> Selecting allocation methods and fee rules.</li>
                        <li><strong>Server Integration (Days 3-5):</strong> Installing the MAM plugin on your trading server.</li>
                        <li><strong>UI/UX Branding (Days 5-7):</strong> Customizing the manager and investor portals.</li>
                        <li><strong>UAT & Verification (Days 7-9):</strong> Testing trade allocation and fee accuracy.</li>
                        <li><strong>Go-Live (Day [X]):</strong> Production launch and manager onboarding.</li>
                    </ol>
                </div>

                <div id="faq">
                    <h2>Frequently Asked Questions</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </ContentPageLayout>
        </main>
    );
}
