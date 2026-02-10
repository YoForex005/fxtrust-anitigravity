import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Multi-Currency Wallet System | Secure Internal Storage & Transfers',
    description: 'Streamline your brokerage with a professional Multi-Currency Wallet System. Securely manage client funds, internal transfers, and multi-asset storage in one hub.',
    alternates: {
        canonical: '/solutions/wallet-system',
    },
    keywords: [
        'Multi-Currency Wallet System',
        'Brokerage Wallet Software',
        'Internal Fund Transfers',
        'Multi-Asset Storage',
        'Forex Client Wallet',
        'Crypto and Fiat Wallet Integration',
    ],
    openGraph: {
        title: 'Multi-Currency Wallet System | Secure Internal Storage & Transfers',
        description: 'Streamline your brokerage with a professional Multi-Currency Wallet System. Securely manage client funds, internal transfers, and multi-asset storage in one hub.',
        url: '/solutions/wallet-system',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Multi-Currency Wallet System | Secure Internal Storage & Transfers',
        description: 'Streamline your brokerage with a professional Multi-Currency Wallet System. Securely manage client funds, internal transfers, and multi-asset storage in one hub.',
    },
};

export default function WalletSystemPage() {
    const tableOfContents = [
        { id: 'solution', title: 'Multi-Currency Wallet System Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Multi-Currency Wallet System?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'Crypto Gateway', href: '/solutions/crypto-gateway', readTime: '4 min' },
        { title: 'Fiat PSP', href: '/solutions/fiat-psp', readTime: '3 min' },
        { title: 'Forex CRM', href: '/solutions/crm', readTime: '5 min' },
    ];

    const quickFacts = [
        { label: 'Uptime', value: '99.9%' },
        { label: 'Latency', value: '< 100ms' },
        { label: 'Assets', value: '50+' },
        { label: 'Monitoring', value: '24/7' },
    ];

    const features = [
        'Instant Internal Transfers',
        'Fiat-to-Crypto Conversion',
        'Multi-Signature Protection',
        'Real-Time Balance Analytics',
        'Transaction History Export',
        'Automated Wallet Sweeping',
        'Cross-Platform Sync'
    ];

    const faqs = [
        {
            question: 'How fast are internal transfers?',
            answer: 'Internal transfers between the wallet and a trading account are processed in real-time. Because these movements happen within our secure database, there is no blockchain or banking latency involved.',
        },
        {
            question: 'Can I set my own exchange rates for internal conversions?',
            answer: 'Yes. You have full control over the spread and markup applied to internal currency swaps. This allows you to generate additional revenue while providing a convenient service to your clients.',
        },
        {
            question: 'Is the wallet system compliant with AML regulations?',
            answer: 'Absolutely. The system provides a comprehensive audit trail for every fund movement. It also integrates with your CRM and KYC providers to ensure that only verified users can perform external withdrawals.',
        },
        {
            question: 'What happens if the trading server goes offline?',
            answer: 'The wallet system is a standalone infrastructure. Your clients can still deposit, store, and manage funds within their wallet even if your MT4/MT5 server is undergoing maintenance.',
        },
        {
            question: 'What are the minimum requirements to start?',
            answer: 'You need a registered corporate entity and a website. Our team will handle the API configurations and server setups needed to bridge the wallet with your existing trading infrastructure.',
        },
        {
            question: 'How is the security of the funds managed?',
            answer: 'We utilize a Tiered Wallet Architecture. The majority of client assets are held in cold storage, while only the necessary liquidity for daily withdrawals is kept in our secure hot wallets, protected by multi-signature protocols.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="Broker Infrastructure"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>}
                title="Multi-Currency Wallet System"
                subtitle="The central nervous system for your firm’s capital management. Empower your clients with a secure, unified vault to store, convert, and transfer funds across multiple trading accounts and currencies instantly—all while maintaining institutional-grade security and transparency."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
            >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', fontSize: '0.875rem', color: '#4B5563' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        <span>Instant Liquidity</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Asset Diversity</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        <span>Enterprise Security</span>
                    </div>
                </div>
            </InnerPageHeader>

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Launch Your Wallet System in [X Days]"
                ctaText="Provide a world-class funding experience with a secure, multi-asset internal wallet. 99.9% Transaction Uptime. Real-time Balance Sync."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Reach out to our fintech architects to discuss your specific wallet requirements."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    <h1>Multi-Currency Wallet System Solution</h1>
                    <p>
                        The Multi-Currency Wallet System is a comprehensive financial hub designed for modern brokerages, prop firms, and digital asset exchanges. In today’s fast-moving markets, traders need more than just a trading account; they need a secure "home base" where they can park capital, hedge against volatility, and distribute funds across various sub-platforms without exiting your ecosystem. This solution acts as the primary bridge between external payment gateways and the active trading environment.
                    </p>
                    <p>
                        For brokers and fintech founders, this system eliminates the friction of traditional funding workflows. Instead of depositing directly into a trading account—which can complicate margin calculations—clients deposit into their secure internal wallet. From there, they can move funds to their MT4, MT5, or cTrader accounts in a single click. This structure not only improves the user experience but also provides your firm with a centralized view of all client liabilities and asset distributions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-2">Unified Asset Management</h3>
                            <p className="text-sm text-gray-600">Manage Bitcoin, Ethereum, USDT, and major Fiat currencies (USD, EUR, GBP) from a single user interface.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-2">Instant Internal Ecosystem</h3>
                            <p className="text-sm text-gray-600">Enable fee-free, millisecond transfers between the wallet and any connected trading platform or sub-account.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-2">Enhanced Risk Control</h3>
                            <p className="text-sm text-gray-600">Isolate client funds from active trading margin, reducing the risk of accidental liquidations during the funding process.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-2">Detailed Financial Ledger</h3>
                            <p className="text-sm text-gray-600">Every movement of capital is recorded in a tamper-proof internal ledger for total auditability.</p>
                        </div>
                    </div>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our wallet infrastructure is engineered for high-concurrency financial operations, ensuring that thousands of users can manage their balances simultaneously without delay.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>99.9%</strong>
                            <span>System Availability SLA</span>
                        </div>
                        <div className="statBox">
                            <strong>100ms</strong>
                            <span>Transfer Latency</span>
                        </div>
                        <div className="statBox">
                            <strong>50+</strong>
                            <span>Supported Assets</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Real-time Monitoring</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why Multi-Currency Wallet System?</h2>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Costs
                            </h4>
                            <p>Reduced Transaction Costs: By keeping fund movements internal, you eliminate blockchain gas fees.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Security
                            </h4>
                            <p>Institutional Security: Utilize a hybrid storage model where the majority of assets are held in air-gapped cold storage.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>
                                Conversion Rates
                            </h4>
                            <p>Improved Conversion Rates: A professional interface encourages clients to keep more capital within your platform.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Revenue
                            </h4>
                            <p>Currency Conversion Revenue: Monetize internal transfers by offering real-time fiat-to-crypto swaps.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Compliance
                            </h4>
                            <p>Streamlined Compliance: Simplify AML and KYC workflows by centralizing all funding activities.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                Scalable
                            </h4>
                            <p>Scalable Infrastructure: Easily add new currency pairs or blockchain networks without re-engineering.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
                                User-Centric
                            </h4>
                            <p>User-Centric UX: Provide your traders with a "Banking-as-a-Service" feel.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        Your wallet system should be an extension of your brand, providing a cohesive and professional experience that inspires confidence in your clients.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>Custom Client Cabinet</h4>
                            <p>The wallet interface is fully white-labeled, allowing you to match your firm's unique design language, color palette, and logo.</p>
                        </div>
                        <div className="featureCard">
                            <h4>Branded Statements</h4>
                            <p>Automatically generate branded PDF transaction summaries and monthly statements for your clients' personal records.</p>
                        </div>
                        <div className="featureCard">
                            <h4>Custom Notification Suite</h4>
                            <p>Send branded emails and push notifications for every deposit, transfer, and withdrawal, keeping your brand top-of-mind.</p>
                        </div>
                        <div className="featureCard">
                            <h4>Dedicated Mobile Wallet</h4>
                            <p>Provide a white-labeled mobile experience where clients can check balances and move funds securely from their smartphones.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        Financial storage requires a hardened, distributed environment that prioritizes security and data redundancy above all else.
                    </p>
                    <h3>Data Center Locations</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                London, UK
                            </h4>
                            <p>Equinix LD4 (Financial Core)</p>
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
                            <p>SG1 (Regional Hub)</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Frankfurt
                            </h4>
                            <p>FR2 (Data Security Optimized)</p>
                        </div>
                    </div>
                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Storage
                            </h4>
                            <p>Hybrid Storage Model: Integration with top-tier providers for cold storage.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Multi-Sig
                            </h4>
                            <p>Multi-Signature Authorization: Large-scale or suspicious transfers require multiple internal approvals.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                                Encryption
                            </h4>
                            <p>End-to-End Encryption: All transaction data is protected by TLS 1.3 and AES-256 protocols.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                Redundant
                            </h4>
                            <p>Redundant Database Clusters: Real-time data mirroring to ensure no balance information is lost.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                IDS
                            </h4>
                            <p>Intrusion Detection: 24/7 automated scanning for unauthorized access.</p>
                        </div>
                    </div>
                    <div className="infoBox">
                        <p><strong>Uptime Statement:</strong> We guarantee a [99.9%] uptime for the wallet backend. Our infrastructure is stress-tested to handle extreme transaction spikes during high-volatility market events.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>
                        A comprehensive set of tools designed to manage every aspect of the modern trader's capital.
                    </p>
                    <h3>Storage & Transfer Features</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                Assets
                            </h4>
                            <p>Multi-asset support (Fiat, Crypto, Stablecoins).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" /></svg>
                                Transfers
                            </h4>
                            <p>Instant internal transfers to MT4/MT5/cTrader.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Conversion
                            </h4>
                            <p>Real-time currency conversion with mid-market rate feeds.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                Schedule
                            </h4>
                            <p>Recurring transfer scheduling (e.g., automated profit harvesting).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Vault
                            </h4>
                            <p>"Vault" feature for long-term, non-tradable storage.</p>
                        </div>
                    </div>

                    <h3>Analytics & Reporting</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
                                Portfolio
                            </h4>
                            <p>Visual portfolio allocation charts (Crypto vs. Fiat).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                                P&L
                            </h4>
                            <p>Real-time P&L tracking for stored assets.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Export
                            </h4>
                            <p>Exportable transaction logs in CSV, JSON, and PDF formats.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                Snapshots
                            </h4>
                            <p>Daily balance snapshots for user accounting.</p>
                        </div>
                    </div>

                    <h3>Algorithmic Protection</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                Velocity
                            </h4>
                            <p>Automated "Velocity Checks" to flag suspicious transfer frequencies.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
                                Limits
                            </h4>
                            <p>Hard-limit caps for unverified or "Level 1" accounts.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Anti-Fraud
                            </h4>
                            <p>Anti-fraud correlation logic for internal wallet movements.</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>
                        The wallet system is designed to be the central point of integration for your entire brokerage tech stack.
                    </p>
                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Balances
                            </h4>
                            <p>Programmatically adjust client balances for marketing or dispute resolution.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg>
                                Data
                            </h4>
                            <p>Extract aggregate data on firm-wide liabilities and asset holdings.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Markups
                            </h4>
                            <p>Set global exchange rate markups for internal conversions.</p>
                        </div>
                    </div>

                    <h3>Gateway & Connectivity API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                                Payments
                            </h4>
                            <p>Payment Gateways: Direct integration with major PSPs and crypto processors.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                Platforms
                            </h4>
                            <p>Trading Platforms: Native bridges to MetaTrader and cTrader Manager APIs.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                KYC
                            </h4>
                            <p>KYC Providers: Automated wallet locking/unlocking based on verification status.</p>
                        </div>
                    </div>
                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a modern RESTful API and a comprehensive SDK. This allow your developers to build custom "Funding Widgets" directly into your trading terminal or marketing site, enabling clients to check their wallet balance and initiate transfers without leaving their trading environment.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>
                        Our pricing structure is flexible, scaling alongside your client base and the complexity of your asset list.
                    </p>
                    <h3>What’s Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                                UI
                            </h4>
                            <p>Full White Label Wallet Admin UI and Client Interface.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Networks
                            </h4>
                            <p>Integration with major Fiat and Crypto networks.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                Transfers
                            </h4>
                            <p>Automated internal transfer engine for 1 trading server.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" /></svg>
                                FX
                            </h4>
                            <p>Basic real-time conversion (FX) module.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
                                Updates
                            </h4>
                            <p>Regular security audits and performance updates.</p>
                        </div>
                    </div>

                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Staking
                            </h4>
                            <p>Advanced "Staking" or "Yield" modules for stored assets.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                                Blockchain
                            </h4>
                            <p>Custom blockchain integration (e.g., Layer 2 networks).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Multi-Entity
                            </h4>
                            <p>Multi-entity support for brokers with multiple jurisdictions.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>
                                Warm Wallet
                            </h4>
                            <p>Priority "Warm Wallet" management services.</p>
                        </div>
                    </div>

                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                                Mapping
                            </h4>
                            <p>Architecture Mapping (Days 1-2): Defining asset list and transfer rules.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                                Provision
                            </h4>
                            <p>Infrastructure Provisioning (Days 3-5): Setting up secure nodes and API tunnels.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                                Integrate
                            </h4>
                            <p>Platform Integration (Days 5-7): Linking the wallet to your trading servers and CRM.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                                Custom
                            </h4>
                            <p>UI/UX Customization (Days 7-9): Styling the client dashboard and notifications.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>05</span>
                                Go-Live
                            </h4>
                            <p>Go-Live (Day [X]): Production activation for live client funding and storage.</p>
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
