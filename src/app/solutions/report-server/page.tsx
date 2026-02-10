
import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'MT5 Report Server | Advanced Data Extraction & Analytics',
    description: 'Unlock deep insights with an MT5 Report Server. Extract real-time trading data, automate complex reporting, and optimize brokerage performance with ease.',
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/report-server',
    },
    keywords: [
        'MT5 Report Server',
        'MetaTrader 5 Data Extraction',
        'Brokerage Analytics Software',
        'MT5 SQL Integration',
        'Real-time Trading Reports',
        'MT5 Reporting Tool',
    ],
    openGraph: {
        title: 'MT5 Report Server | Advanced Data Extraction & Analytics',
        description: 'Unlock deep insights with an MT5 Report Server. Extract real-time trading data, automate complex reporting, and optimize brokerage performance with ease.',
        url: 'https://fxtrusts.com/solutions/report-server',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MT5 Report Server | Advanced Data Extraction & Analytics',
        description: 'Unlock deep insights with an MT5 Report Server. Extract real-time trading data, automate complex reporting, and optimize brokerage performance with ease.',
    },
};

export default function ReportServerPage() {
    const tableOfContents = [
        { id: 'solution', title: 'MT5 Report Server Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why MT5 Report Server?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'MT5 White Label', href: '/solutions/mt5', readTime: '5 min' },
        { title: 'Liquidity Access', href: '/solutions/liquidity-access', readTime: '5 min' },
        { title: 'MAM Solution', href: '/solutions/mam', readTime: '5 min' },
    ];

    const quickFacts = [
        { label: 'Data Integrity SLA', value: '99.9%' },
        { label: 'Sync Delay', value: '[X] sec' },
        { label: 'History Records', value: 'Unlimited' },
        { label: 'Monitoring', value: '24/7' },
    ];

    const features = [
        'Real-time History Sync',
        'SQL/PostgreSQL Integration',
        'Custom KPI Dashboards',
        'Regulatory Report Templates',
        'Multi-Server Support',
        'Automated Email Delivery',
        'Deep Trade Forensics',
    ];

    const faqs = [
        {
            question: 'Will the report server slow down my traders?',
            answer: 'No. This is the primary benefit of a Report Server. It uses a dedicated read-only gateway that offloads all data processing to a separate machine, ensuring the MT5 Master server is free to handle trade execution only.',
        },
        {
            question: 'What databases do you support?',
            answer: 'Our engine is compatible with most major SQL environments, including Microsoft SQL Server, PostgreSQL, and MySQL. We can also export data to "Flat Files" (CSV, XML) for legacy systems.',
        },
        {
            question: 'Can I use this for regulatory reporting (like EMIR/MiFIR)?',
            answer: 'Yes. Our system is designed to provide the clean, structured data required for regulatory submissions. We provide templates that help format your MT5 history into the specific layouts required by reporting repositories.',
        },
        {
            question: 'How often does the data update?',
            answer: 'The sync is near real-time. Most trade operations are mirrored to the reporting database within [X] to [X] seconds of the event occurring on the main terminal.',
        },
        {
            question: 'What happens if the connection to the MT5 server is lost?',
            answer: 'The sync engine includes a "Catch-up" feature. If the connection is interrupted, the report server will automatically identify the missing data packets and re-sync them the moment the connection is restored.',
        },
        {
            question: 'Do I need a separate MT5 license for this?',
            answer: 'No. Our Report Server connects via the MT5 API/Gateway, meaning you do not need an additional full server license from MetaQuotes to run the reporting infrastructure.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="Broker Infrastructure"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
                title="MT5 Report Server"
                subtitle="Bridge the gap between raw trading data and actionable business intelligence. Our MT5 Report Server provides a high-performance layer for real-time data extraction, allowing you to run complex analytics, automate regulatory reporting, and monitor brokerage health without ever slowing down your main trading server."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
            >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', fontSize: '0.875rem', color: '#4B5563' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        <span>Zero Latency Impact</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        <span>SQL Ready</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Automated Compliance</span>
                    </div>
                </div>
            </InnerPageHeader>

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Optimize Your Data in [X Days]"
                ctaText="Stop relying on basic MT5 exports. Get a dedicated analytics engine built for scale."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Our data engineers can help you map custom fields for your internal BI tools."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    <h1>MT5 Report Server Solution</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Dedicated Data Environment</h3>
                            <p className="text-sm text-blue-800">Isolate analytics traffic from trading traffic to maintain 100% platform stability.</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Structured Data Access</h3>
                            <p className="text-sm text-blue-800">Transform proprietary MetaTrader files into standard SQL formats for easy use with BI tools like PowerBI or Tableau.</p>
                        </div>
                    </div>
                    <p>
                        The MT5 Report Server is a critical infrastructure component for mature brokerages and prop firms that have outgrown the basic reporting capabilities of the MetaTrader 5 Administrator terminal. As your trade volume scales, running complex history queries directly on the live trading server can lead to latency spikes and performance degradation. Our Report Server solves this by creating a high-speed, read-only replica of your trading data in a structured environment optimized for heavy lifting.
                    </p>
                    <p>
                        This solution is designed for data-driven fintech founders and compliance officers. It continuously pulls every tick, trade, and account update into a dedicated database, allowing your team to run "what-if" scenarios, calculate complex IB commissions, and perform deep-dive risk audits. By isolating these resource-heavy tasks, you ensure that your traders enjoy millisecond execution while your management team enjoys millisecond insights.
                    </p>
                    <ul>
                        <li><strong>Real-Time Synchronization:</strong> Experience near-instant data mirroring from the MT5 Master server to your analytics dashboard.</li>
                        <li><strong>Advanced Filtering & Aggregation:</strong> Query data across thousands of accounts and millions of history records in seconds.</li>
                    </ul>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our reporting engine is built to handle the massive data throughput of Tier-1 brokerages without compromising on speed or accuracy.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>99.9%</strong>
                            <span>Data Integrity SLA ensuring perfectly synced trade records.</span>
                        </div>
                        <div className="statBox">
                            <strong>[X]</strong>
                            <span>Seconds average sync delay from live server to report database.</span>
                        </div>
                        <div className="statBox">
                            <strong>Unlimited</strong>
                            <span>History records supported via scalable storage architecture.</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Automated data monitoring and backup verification.</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why MT5 Report Server?</h2>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2L3 14h9v8l10-12h-9l9-8z" /></svg>
                                Performance
                            </h4>
                            <p>Preserve Server Performance: Heavy reports are the #1 cause of MT5 server lag; moving them to a report server keeps your execution lightning fast.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                Intelligence
                            </h4>
                            <p>Custom Business Intelligence: Build your own dashboards to track A-Book vs. B-Book performance, slippage analytics, and client lifetime value.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Compliance
                            </h4>
                            <p>Regulatory Peace of Mind: Meet ESMA, ASIC, or CySEC reporting requirements with automated templates that pull data directly from the source.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Commissions
                            </h4>
                            <p>IB & Affiliate Accuracy: Calculate complex, multi-tier commission structures with precision using high-performance SQL queries.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                Forensics
                            </h4>
                            <p>Deep Trade Forensics: Identify toxic trading patterns, latency arbitrage, or technical glitches with second-by-second historical data.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                Scalability
                            </h4>
                            <p>Scalability: Whether you process 1,000 or 1,000,000 trades a day, the report server scales horizontally to meet your data demands.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Security
                            </h4>
                            <p>Secure Access: Grant your marketing and finance teams access to the data they need without giving them access to the sensitive MT5 Manager terminal.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        Our reporting environment is designed to be an extension of your corporate back-office ecosystem.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                Custom Analytics Dashboard
                            </h4>
                            <p>Style your internal analytics portal with your brand's theme, providing a professional interface for your team and stakeholders.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                Branded Client Statements
                            </h4>
                            <p>Generate high-end, branded PDF account statements and tax reports that your clients can download directly from their portal.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                                Executive Summary Reports
                            </h4>
                            <p>Automated weekly or monthly performance summaries branded with your firm's logo, ready for boardroom presentations.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
                                Custom API Documentation
                            </h4>
                            <p>If you provide data feeds to partners, we offer white-labeled API documentation to maintain a consistent professional image.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        Data extraction requires significant CPU and high-speed storage (IOPS) to maintain real-time synchronization.
                    </p>

                    <h3>Data Center Locations</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                London
                            </h4>
                            <p>London, UK - Equinix LD4 (Proximity to MT5 Core)</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                New York
                            </h4>
                            <p>New York, USA - Equinix NY4</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Singapore
                            </h4>
                            <p>Singapore - SG1 Regional Node</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Tokyo
                            </h4>
                            <p>Tokyo, Japan - TY3 Regional Node</p>
                        </div>
                    </div>

                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                NVMe
                            </h4>
                            <p>High-IOPS NVMe Storage: Optimized for the high-frequency write operations required for trade logging.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
                                SQL
                            </h4>
                            <p>Dedicated SQL Clusters: High-availability database instances (PostgreSQL, MSSQL, or MySQL).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                                Tunneling
                            </h4>
                            <p>Private Network Tunneling: Secure, low-latency cross-connects between the MT5 Master and Report Server.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
                                Backups
                            </h4>
                            <p>Redundant Backups: Hourly snapshots of the reporting database to ensure historical data is never lost.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Encryption
                            </h4>
                            <p>Encrypted Data Transit: All data moving between servers is protected by enterprise-grade TLS encryption.</p>
                        </div>
                    </div>

                    <div className="infoBox">
                        <p><strong>SLA Statement:</strong> We guarantee [99.9%] uptime for the data synchronization engine. Our infrastructure utilizes [failover nodes] to ensure that even if a reporting node goes offline, data collection continues uninterrupted.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>A comprehensive suite of tools designed for deep-dive brokerage analytics.</p>

                    <h3>Data Extraction Features</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /><polyline points="9 9 13 4 15 4 17 4 20 4" /></svg>
                                History
                            </h4>
                            <p>Real-time sync of Trades, Orders, and Deals history.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                                Mapping
                            </h4>
                            <p>Support for MT5 Symbols, Groups, and Securities mapping.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Transfers
                            </h4>
                            <p>Extraction of user balance operations (Deposits/Withdrawals).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                Ticks
                            </h4>
                            <p>Ability to pull tick data for precise price-feed auditing.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></svg>
                                Equity
                            </h4>
                            <p>Snapshotting of equity and margin levels for risk monitoring.</p>
                        </div>
                    </div>

                    <h3>Analytics Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                Query
                            </h4>
                            <p>Integrated SQL Query builder for custom report generation.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>
                                KPI
                            </h4>
                            <p>Automated KPI tracking (CPL, CPA, LTV, Volume per Million).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Exposure
                            </h4>
                            <p>Exposure monitoring across all asset classes and securities.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                P&L
                            </h4>
                            <p>B-Book profit/loss attribution and trend analysis.</p>
                        </div>
                    </div>

                    <h3>Algorithmic & Automation</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                Scheduler
                            </h4>
                            <p>Automated Task Scheduler: Set reports to run and email to stakeholders at specific intervals.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                                Alerts
                            </h4>
                            <p>Alert Triggers: Get notified if specific volume thresholds or risk limits are hit.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                Sanitization
                            </h4>
                            <p>Data Sanitization: Automated cleaning of test accounts and "dummy" data for clean financial reporting.</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>The Report Server is designed to be the "Data API" for your entire business.</p>

                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                                Trigger
                            </h4>
                            <p>Programmatically trigger report generation via your internal CRM.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /></svg>
                                Snapshots
                            </h4>
                            <p>Securely fetch account balance snapshots for real-time mobile app updates.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Permissions
                            </h4>
                            <p>Manage user permissions and database access levels through a central API.</p>
                        </div>
                    </div>

                    <h3>Gateway & Connectivity API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
                                SQL
                            </h4>
                            <p>SQL Connector: Connect directly via ODBC/JDBC to any major BI tool (PowerBI, Tableau, Excel).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                JSON
                            </h4>
                            <p>JSON/REST API: Modern endpoints for web developers to pull data into custom portals.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                FIX
                            </h4>
                            <p>FIX API Log Extraction: (Optional) Capture FIX gateway traffic for institutional audit trails.</p>
                        </div>
                    </div>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a comprehensive Web SDK and documentation. This allows your developers to build custom client-facing features—like "Trade Performance Charts" or "Equity Curves"—directly into your Trader's Room by pulling the data from the Report Server instead of the MT5 core.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is based on the volume of data processed and the number of MT5 servers connected.</p>

                    <h3>What’s Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                                Server
                            </h4>
                            <p>Dedicated Report Server license and sync engine.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
                                Database
                            </h4>
                            <p>Full SQL Database setup and optimization.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Templates
                            </h4>
                            <p>[5] Standard Regulatory Report templates.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                Delivery
                            </h4>
                            <p>Automated Email/FTP delivery module.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Monitoring
                            </h4>
                            <p>[24/7] Infrastructure and sync monitoring.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                                Updates
                            </h4>
                            <p>Regular security and MT5 version compatibility updates.</p>
                        </div>
                    </div>

                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                                Dashboard
                            </h4>
                            <p>Custom BI Dashboard design service.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Multi-Platform
                            </h4>
                            <p>Multi-platform support (Combine MT4 and MT5 data).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Archives
                            </h4>
                            <p>Historical "Big Data" archiving (5+ years).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                Detection
                            </h4>
                            <p>Advanced "Toxic Trading" detection algorithm.</p>
                        </div>
                    </div>

                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                                Hardware
                            </h4>
                            <p>Environment Provisioning (Days 1-2): Deploying dedicated reporting hardware.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                                Gateway
                            </h4>
                            <p>MT5 Gateway Link (Days 2-3): Establishing secure connectivity to your trading server.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                                Sync
                            </h4>
                            <p>Initial Data Sync (Days 3-5): Mirroring existing history into the SQL database.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                                Mapping
                            </h4>
                            <p>Report Mapping (Days 5-7): Configuring custom fields and compliance templates.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>05</span>
                                Go-Live
                            </h4>
                            <p>Go-Live (Day [X]): Production activation and staff training on the new dashboard.</p>
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
