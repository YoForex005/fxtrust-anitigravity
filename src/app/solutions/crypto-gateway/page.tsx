import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Crypto Payment Gateway | Instant BTC, USDT, ETH Deposits',
    description: 'Scale your brokerage with an instant Crypto Payment Gateway. Securely process BTC, USDT, and ETH deposits and payouts with real-time conversion and low fees.',
    keywords: [
        'Crypto Payment Gateway',
        'Forex Crypto Deposits',
        'USDT Payment Processor',
        'Broker Crypto Payouts',
        'Bitcoin Gateway for Brokers',
        'Crypto-to-Fiat Settlement',
    ],
    openGraph: {
        title: 'Crypto Payment Gateway | Instant BTC, USDT, ETH Deposits',
        description: 'Scale your brokerage with an instant Crypto Payment Gateway. Securely process BTC, USDT, and ETH deposits and payouts with real-time conversion and low fees.',
        url: 'https://fxtrusts.com/solutions/crypto-gateway',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Crypto Payment Gateway | Instant BTC, USDT, ETH Deposits',
        description: 'Scale your brokerage with an instant Crypto Payment Gateway. Securely process BTC, USDT, and ETH deposits and payouts with real-time conversion and low fees.',
    },
};

export default function CryptoGatewayPage() {
    const tableOfContents = [
        { id: 'solution', title: 'Crypto Payment Gateway Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Crypto Payment Gateway?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'Liquidity Solution', href: '/solutions/liquidity', readTime: '5 min' },
        { title: 'MT5 White Label', href: '/solutions/mt5', readTime: '5 min' },
        { title: 'CRM Solution', href: '/solutions/crm', readTime: '5 min' },
    ];

    const quickFacts = [
        { label: 'Uptime SLA', value: '99.9%' },
        { label: 'Settlement', value: '[X] Min' },
        { label: 'Blockchains', value: '15+' },
        { label: 'Monitoring', value: '24/7' },
    ];

    const features = [
        'Multi-Chain Support (ERC20, TRC20, etc.)',
        'Real-Time Exchange Rates',
        'Automated Payout Processing',
        'Fraud & AML Screening',
        'Deep Liquidity Aggregation',
        'Custom Checkout UI',
        'Detailed Transaction Analytics',
    ];

    const faqs = [
        {
            question: 'How long does a crypto deposit take to reflect in the trader\'s account?',
            answer: 'Stablecoin deposits (like USDT on TRC20) are typically confirmed and reflected in the account balance within [1 to 3] minutes. Bitcoin transactions may take longer depending on network congestion and your chosen confirmation threshold.',
        },
        {
            question: 'Do you support automated payouts?',
            answer: 'Yes. Our platform includes an Automated Payout API. Once your finance team approves a withdrawal in your CRM, the gateway can automatically execute the blockchain transaction, significantly reducing manual work.',
        },
        {
            question: 'Can I convert crypto deposits to USD immediately?',
            answer: 'Absolutely. We offer Instant Fiat Settlement. You can configure the gateway to automatically convert incoming crypto into USD or EUR at the current market rate, protecting your brokerage from volatility.',
        },
        {
            question: 'Is there a limit on how much a client can deposit?',
            answer: 'No. Blockchain technology is designed for scale. Our gateway can handle transactions ranging from $[X] to $[X] million+ with the same level of security and efficiency.',
        },
        {
            question: 'What are the minimum requirements to start?',
            answer: 'You need a registered corporate entity and a website where you intend to accept payments. Our technical team will provide the API keys and documentation needed to begin the integration process.',
        },
        {
            question: 'How is the security of the funds managed?',
            answer: 'We utilize a Hybrid Wallet Architecture. High-liquidity amounts for payouts are kept in secure Hot/Warm wallets, while the vast majority of funds are automatically swept into air-gapped Cold Storage.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="BROKER INFRASTRUCTURE"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>}
                title="Crypto Payment Gateway"
                subtitle="Eliminate payment friction and expand your global reach. Our high-performance crypto gateway enables your traders to fund accounts and request payouts instantly using Bitcoin, Ethereum, and Stablecoins, with automated settlement and bank-grade security."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
            >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', fontSize: '0.875rem', color: '#4B5563' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Instant Liquidity</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Global Access</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span>Low Transaction Costs</span>
                    </div>
                </div>
            </InnerPageHeader>

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Enable Crypto Payments in [X Days]"
                ctaText="Give your traders the flexibility of instant digital asset deposits and automated payouts."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Contact our payment specialists to discuss custom liquidity and settlement options."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    <h1>Crypto Payment Gateway Solution</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Turnkey Automation</h3>
                            <p className="text-sm text-blue-800">Unique deposit addresses generated for every client with instant webhook notifications.</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Fiat Settlement</h3>
                            <p className="text-sm text-blue-800">Protect your brokerage from crypto volatility by instantly converting digital assets into USD, EUR, or GBP.</p>
                        </div>
                    </div>
                    <p>
                        The Crypto Payment Gateway is a mission-critical infrastructure component for modern brokerages, prop firms, and fintech platforms. As digital assets become the preferred method for global capital movement, providing a seamless deposit and withdrawal experience in BTC, ETH, and USDT is no longer optional—it is a competitive necessity. Our gateway acts as a secure bridge between the blockchain and your trading server, automating the entire lifecycle of a transaction from wallet to MT4/MT5 balance.
                    </p>
                    <p>
                        This solution is engineered to solve the primary pain points of traditional finance: high fees, slow settlement times, and the risk of chargebacks. By utilizing decentralized ledger technology, your brokerage can accept high-value deposits from anywhere in the world and process withdrawals in minutes, all while maintaining strict compliance through integrated AML and KYC screening tools.
                    </p>
                    <ul>
                        <li><strong>Turnkey Deposit Automation:</strong> Unique deposit addresses generated for every client with instant webhook notifications.</li>
                        <li><strong>Automated Payout Engine:</strong> Process withdrawal requests in bulk or individually with automated fee estimation and secure signing.</li>
                        <li><strong>Real-Time Fiat Conversion:</strong> Protect your brokerage from crypto volatility by instantly converting digital assets into USD, EUR, or GBP upon deposit.</li>
                        <li><strong>Scalable Wallet Architecture:</strong> Manage thousands of concurrent transactions across multiple blockchains without technical overhead.</li>
                    </ul>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our gateway is built for enterprise-level volume, ensuring that your payment processing remains stable even during periods of extreme market volatility.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>99.9%</strong>
                            <span>Uptime SLA</span>
                        </div>
                        <div className="statBox">
                            <strong>[X] Min</strong>
                            <span>Avg Settlement</span>
                        </div>
                        <div className="statBox">
                            <strong>15+</strong>
                            <span>Blockchains</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Fraud Detection</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why Crypto Payment Gateway?</h2>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
                                No Chargebacks
                            </h4>
                            <p>Zero Chargeback Risk: Unlike credit card payments, blockchain transactions are final and irreversible, protecting your brokerage from fraud.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Low Fees
                            </h4>
                            <p>Ultra-Low Fees: Bypass the expensive 3-5% fees charged by traditional processors and card networks.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Global Reach
                            </h4>
                            <p>Instant Global Reach: Accept deposits from clients in regions where traditional banking is restricted or inefficient.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                Stablecoins
                            </h4>
                            <p>Stablecoin Efficiency: Utilize USDT and USDC to provide the stability of fiat with the speed and transparency of the blockchain.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Automation
                            </h4>
                            <p>Automated Reconciliation: Every transaction is logged and synced with your CRM, eliminating manual accounting errors.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Security
                            </h4>
                            <p>Enhanced Security: Multi-signature wallets and cold storage protocols ensure your company and client funds are always protected.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Compliance
                            </h4>
                            <p>Regulatory Compliance: Built-in tools for KYT (Know Your Transaction) to flag and block high-risk or sanctioned wallet addresses.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        Our gateway is designed to be a seamless, branded experience for your traders, maintaining your firm's professional image from start to finish.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                                Custom Checkout UI
                            </h4>
                            <p>Style the payment modal and deposit pages with your brand's colors and logo to ensure a cohesive user journey.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                Branded Email Confirmations
                            </h4>
                            <p>Automate the delivery of white-labeled deposit success and payout completion emails to your clients.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                Custom Payment URL
                            </h4>
                            <p>Host the payment gateway on your own subdomain (e.g., payments.yourbroker.com) for maximum trust and credibility.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                Dedicated Merchant Dashboard
                            </h4>
                            <p>A professional, white-labeled backend for your finance team to manage transactions, settlements, and reporting.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        Processing blockchain transactions requires a highly secure and distributed server environment to ensure data integrity and rapid confirmation.
                    </p>
                    <h3>Data Center Locations</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                London, UK
                            </h4>
                            <p>Tier-4 Financial Facility</p>
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
                            <p>SG1 Regional Hub</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Frankfurt, Germany
                            </h4>
                            <p>Data Sovereignty Optimized</p>
                        </div>
                    </div>

                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                HSM
                            </h4>
                            <p>HSM (Hardware Security Modules): Enterprise-grade security for private key management.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Multi-Sig
                            </h4>
                            <p>Multi-Sig Architecture: Requires multiple approvals for large-scale payouts.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                DDoS
                            </h4>
                            <p>DDoS & Web Application Firewall: Constant protection against network-level attacks.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Nodes
                            </h4>
                            <p>Distributed Nodes: Direct connectivity to Bitcoin, Ethereum, and Tron full nodes for instant data.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                                Cold Storage
                            </h4>
                            <p>Cold Storage Protocol: Majority of assets held offline in air-gapped environments.</p>
                        </div>
                    </div>
                    <div className="infoBox">
                        <p><strong>Security Statement:</strong> We implement [AES-256] encryption and Two-Factor Authentication (2FA) for all administrative actions. Our infrastructure is audited regularly to ensure compliance with global fintech security standards.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>A comprehensive toolset for managing digital asset flows within your brokerage.</p>

                    <h3>Payment & Deposit Features</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><line x1="12" y1="18" x2="12" y2="22" /><line x1="12" y1="2" x2="12" y2="6" /></svg>
                                Multi-Chain
                            </h4>
                            <p>Support for BTC, ETH, USDT (ERC20/TRC20/BEP20), USDC, and LTC.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                                QR Codes
                            </h4>
                            <p>Dynamic QR code generation for easy mobile deposits.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                Confirmations
                            </h4>
                            <p>Configurable confirmation requirements (e.g., 1 confirmation for small, 3 for large).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Gas Fees
                            </h4>
                            <p>Automated gas fee optimization for outbound payouts.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                Transfers
                            </h4>
                            <p>Internal wallet-to-wallet transfers for liquidity management.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Dust Sweep
                            </h4>
                            <p>Support for "Dust" transactions and automated wallet sweeping.</p>
                        </div>
                    </div>

                    <h3>Analytics & Reporting</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                Explorer
                            </h4>
                            <p>Real-time transaction explorer with blockchain links.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Reports
                            </h4>
                            <p>Daily settlement reports in your base fiat currency.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                                Charts
                            </h4>
                            <p>Visual charts for deposit trends and payout volumes.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                Exports
                            </h4>
                            <p>Exportable data for tax and regulatory compliance.</p>
                        </div>
                    </div>

                    <h3>Fraud Prevention</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                AML
                            </h4>
                            <p>Real-time AML screening of incoming wallet addresses.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                Risk Scoring
                            </h4>
                            <p>"Risk Scoring" for every transaction based on blockchain history.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
                                Blocking
                            </h4>
                            <p>Automated blocking of sanctioned or high-risk entities.</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>Our gateway is designed for easy integration with any trading server or CRM ecosystem.</p>

                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
                                Addresses
                            </h4>
                            <p>Programmatically generate new deposit addresses for your CRM.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
                                Sync
                            </h4>
                            <p>Automated balance syncing with MT4/MT5 accounts.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /></svg>
                                Bulk Payouts
                            </h4>
                            <p>Bulk payout processing for IB commissions and trader withdrawals.</p>
                        </div>
                    </div>

                    <h3>Gateway & Connectivity API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                REST API
                            </h4>
                            <p>RESTful API: Modern, well-documented endpoints for any web environment.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                                Webhooks
                            </h4>
                            <p>Webhooks: Instant push notifications for transaction status changes.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                MT4/5
                            </h4>
                            <p>MT4/MT5 Integration: Native plugins to automate the funding of trading accounts.</p>
                        </div>
                    </div>
                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a comprehensive SDK for developers. This allows you to build custom "Payment Request" flows within your mobile app or client portal, enabling traders to fund their accounts with a single tap. Our SDK supports all major programming languages and includes pre-built UI components.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is transparent, typically involving a small percentage per transaction with no hidden setup or monthly maintenance fees.</p>

                    <h3>What’s Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                License
                            </h4>
                            <p>Full White Label Crypto Gateway license.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><line x1="12" y1="18" x2="12" y2="22" /><line x1="12" y1="2" x2="12" y2="6" /></svg>
                                Blockchains
                            </h4>
                            <p>Support for [X] Blockchains and [X] Stablecoins.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                                Dashboard
                            </h4>
                            <p>Merchant dashboard for finance and compliance teams.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Settlement
                            </h4>
                            <p>Automated fiat settlement and conversion tools.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Monitoring
                            </h4>
                            <p>[24/7] Technical monitoring of blockchain nodes.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                Updates
                            </h4>
                            <p>Monthly security and compliance updates.</p>
                        </div>
                    </div>

                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M16 12l-4-4-4 4" /><line x1="12" y1="16" x2="12" y2="8" /></svg>
                                Liquidity Pools
                            </h4>
                            <p>Dedicated liquidity pools for large-scale payouts.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                Custom Chains
                            </h4>
                            <p>Custom blockchain support (e.g., Solana, Avalanche).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                Advanced KYT
                            </h4>
                            <p>Advanced KYT (Know Your Transaction) integration.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                                Mobile App
                            </h4>
                            <p>White-labeled mobile payment app for traders.</p>
                        </div>
                    </div>

                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                                Compliance
                            </h4>
                            <p>Compliance Review: Onboarding and business verification (Days 1-2).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                                API
                            </h4>
                            <p>API Integration: Linking the gateway to your website and CRM (Days 3-5).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                                UI/UX
                            </h4>
                            <p>UI/UX Branding: Customizing the payment modals and emails (Days 5-6).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                                UAT
                            </h4>
                            <p>UAT & Testing: Processing test transactions on Testnet (Days 7-8).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>05</span>
                                Go-Live
                            </h4>
                            <p>Go-Live: Production environment activation for live deposits (Day [X]).</p>
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
