
import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Automated Payout Systems | Mass Payouts for Prop Firms',
    description: 'Streamline your prop firm operations with automated mass payout systems. Process thousands of trader withdrawals instantly via Crypto or Fiat.',
    keywords: [
        'Automated Payout Systems',
        'Prop Firm Payout Software',
        'Mass Payment Gateway',
        'Trader Withdrawal Automation',
        'Crypto Payouts for Brokers',
        'Automated Payout API',
    ],
    openGraph: {
        title: 'Automated Payout Systems | Mass Payouts for Prop Firms',
        description: 'Streamline your prop firm operations with automated mass payout systems. Process thousands of trader withdrawals instantly via Crypto or Fiat.',
        url: 'https://fxtrusts.com/solutions/automated-payout-systems-prop-firm-mass-payouts',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Automated Payout Systems | Mass Payouts for Prop Firms',
        description: 'Streamline your prop firm operations with automated mass payout systems. Process thousands of trader withdrawals instantly via Crypto or Fiat.',
    },
};

export default function AutomatedPayoutsPage() {
    const tableOfContents = [
        { id: 'solution', title: 'Automated Payout Systems Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Automated Payouts?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'Crypto Gateway', href: '/solutions/crypto-gateway', readTime: '5 min' },
        { title: 'Prop Trader Dashboard', href: '/solutions/prop-trader-dashboard', readTime: '5 min' },
        { title: 'CRM Solution', href: '/solutions/crm', readTime: '5 min' },
    ];

    const quickFacts = [
        { label: 'Uptime SLA', value: '99.9%' },
        { label: 'Batch Execution', value: '[X] Sec' },
        { label: 'Countries', value: '150+' },
        { label: 'Monitoring', value: '24/7' },
    ];

    const features = [
        'Bulk Crypto Payouts (USDT/BTC)',
        'Automated Payout Approval Rules',
        'Multi-Currency Fiat Support',
        'Real-Time Transaction Tracking',
        'Tax & Compliance Reporting',
        'Multi-Sig Security Wallets',
        'Anti-Fraud Payout Verification',
    ];

    const faqs = [
        {
            question: 'How fast are the payouts processed?',
            answer: 'For crypto payouts (USDT/BTC), once the request is approved, the transaction is broadcast to the blockchain in [X] seconds. For fiat bank wires, the timing depends on the banking rails (SEPA/SWIFT), typically ranging from [X] to [X] business days.',
        },
        {
            question: 'Can the system automatically check if a trader breached a rule?',
            answer: 'Yes. The system performs a Real-Time Rule Audit before any payout is executed. It checks the trading server for drawdown breaches, consistency violations, or prohibited trading styles.',
        },
        {
            question: 'What payment methods are supported for mass payouts?',
            answer: 'We support a wide array of methods including USDT (TRC20, ERC20), Bitcoin, and Ethereum, as well as Global Bank Wires (SEPA/SWIFT) and integrated third-party processors like [Provider Name].',
        },
        {
            question: 'How do you handle security for large payout volumes?',
            answer: 'We utilize Multi-Signature (Multi-Sig) Wallets and a "Maker-Checker" workflow. This means large payouts require approval from at least two authorized staff members before being broadcast.',
        },
        {
            question: 'What are the minimum requirements to start?',
            answer: 'You need an active MT4, MT5, or cTrader server and a verified merchant account or crypto wallet. Our team will handle the API connections between these systems.',
        },
        {
            question: 'Is the system compliant with tax regulations?',
            answer: 'Yes. The platform can be configured to collect tax forms (W-8BEN/W-9) from traders before their first payout and maintain a detailed log of all distributions for your end-of-year reporting.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="WHITE LABEL SOLUTION"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>}
                title="Automated Payout Systems"
                subtitle="Turn the most complex part of your prop firm into your biggest competitive advantage. Our automated payout engine allows you to process thousands of trader withdrawal requests simultaneously, ensuring fast, accurate, and secure distributions via Crypto, Stablecoins, or Fiat rails."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
            >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', fontSize: '0.875rem', color: '#4B5563' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        <span>Enterprise Efficiency</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Global Distribution</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Seamless Sync</span>
                    </div>
                </div>
            </InnerPageHeader>

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Scale Your Payouts in [X Days]"
                ctaText="Stop manual processing and start rewarding your traders with instant, automated withdrawals."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Contact our payment engineers to design a custom mass payout workflow."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Automated Payout Systems | Mass Payouts for Prop Firms","description":"Streamline your prop firm operations with automated mass payout systems. Process thousands of trader withdrawals instantly via Crypto or Fiat.","url":"https://fxtrusts.com/solutions/automated-payout-systems-prop-firm-mass-payouts"}) }}
      />
      <h1>Automated Payout Systems Solution</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Mass Payout Capabilities</h3>
                            <p className="text-sm text-blue-800">Execute hundreds of individual payments with a single click or through a fully automated API trigger.</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Risk-Verified Payouts</h3>
                            <p className="text-sm text-blue-800">Automated cross-referencing with your trading server to ensure no "breached" accounts are accidentally paid.</p>
                        </div>
                    </div>
                    <p>
                        The Automated Payout System is a high-performance financial engine built for the unique demands of proprietary trading firms and large-scale brokerage houses. In the prop firm industry, your reputation is built on the speed and reliability of your payouts. Our system replaces slow, error-prone manual bank transfers and manual wallet sends with a centralized command center that validates trader eligibility and executes payments at scale.
                    </p>
                    <p>
                        For fintech founders and prop firm managers, this system acts as the final "Success" layer of the trader journey. It connects directly to your back-office to verify that a trader has met their profit targets, adhered to drawdown rules, and passed all risk checks before a single cent is moved. By automating the "Mass Payout" process, you reduce operational overhead and eliminate the risk of duplicate payments or clerical errors.
                    </p>
                    <ul>
                        <li><strong>Mass Payout Capabilities:</strong> Execute hundreds of individual payments with a single click or through a fully automated API trigger.</li>
                        <li><strong>Multi-Channel Distribution:</strong> Support for USDT (TRC20/ERC20), Bitcoin, Bank Wires, and popular e-wallets.</li>
                        <li><strong>Risk-Verified Payouts:</strong> Automated cross-referencing with your trading server to ensure no "breached" accounts are accidentally paid.</li>
                        <li><strong>Global Compliance Ready:</strong> Integrated tools for KYC/AML verification and tax documentation (W-8BEN/W-9) collection.</li>
                    </ul>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our payout infrastructure is designed for extreme reliability, ensuring that your firm can handle "Payout Fridays" with absolute confidence.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>99.9%</strong>
                            <span>System SLA</span>
                        </div>
                        <div className="statBox">
                            <strong>[X]</strong>
                            <span>Sec Batch Time</span>
                        </div>
                        <div className="statBox">
                            <strong>150+</strong>
                            <span>Countries</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Monitoring</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why Automated Payouts?</h2>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Trust
                            </h4>
                            <p>Build Trader Trust: Nothing builds brand loyalty faster than "Instant Payouts."</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Overhead
                            </h4>
                            <p>Drastically Reduce Overhead: Replace a team of finance administrators with a single, automated system.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                Human Error
                            </h4>
                            <p>Eliminate Human Error: Manual entry of wallet addresses or IBANs is the #1 cause of lost funds.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Security
                            </h4>
                            <p>Enhanced Security: Utilize multi-signature (Multi-Sig) approvals and "Warm Wallet" architectures.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Audit Trails
                            </h4>
                            <p>Detailed Audit Trails: Every payout is logged with blockchain transaction IDs or bank reference numbers.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Fees
                            </h4>
                            <p>Automated Fee Management: Automatically deduct your firm's profit share and gas fees.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                Scalable
                            </h4>
                            <p>Scalable Business Growth: A system that works as efficiently for 10 traders as it does for 10,000.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        Your traders should feel a consistent brand experience, even when they are receiving their hard-earned profits.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                                Trader Payout Portal
                            </h4>
                            <p>A white-labeled dashboard where traders can request withdrawals, track status, and manage their preferred payment methods.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                Branded Transaction Alerts
                            </h4>
                            <p>Customized email and SMS notifications that inform traders the moment their payout has been initiated and completed.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                Custom Payment Descriptors
                            </h4>
                            <p>Ensure that fiat bank transfers appear on the trader's statement with your firm's name for a professional finish.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                Branded Invoices & Receipts
                            </h4>
                            <p>Automatically generate branded payout summaries and tax-compliant receipts for every transaction.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        Processing financial transactions at scale requires a hardened, low-latency environment with direct connectivity to global payment rails.
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
                                Frankfurt
                            </h4>
                            <p>FR2 (EU Compliance Hub)</p>
                        </div>
                    </div>

                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                HSM
                            </h4>
                            <p>Enterprise HSM: Hardware Security Modules for secure private key storage.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                Redundant
                            </h4>
                            <p>API Redundancy: Multiple failover nodes to ensure payout requests are always received.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                                Encryption
                            </h4>
                            <p>Encrypted Data Vaults: AES-256 encryption for all trader banking and wallet details.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg>
                                Nodes
                            </h4>
                            <p>Dedicated Payout Nodes: Isolated servers for blockchain broadcasting.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
                                Backups
                            </h4>
                            <p>Real-Time Backups: Continuous database replication to prevent any loss of transaction history.</p>
                        </div>
                    </div>
                    <div className="infoBox">
                        <p><strong>Uptime Statement:</strong> We guarantee a [99.9%] uptime for the payout engine. Our system is stress-tested to handle [X,XXX] transactions per minute during peak withdrawal windows.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Comprehensive tools to manage the end-to-end payout lifecycle.</p>

                    <h3>Payout & Distribution Features</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7" /><path d="M15 7h6v6" /></svg>
                                Crypto
                            </h4>
                            <p>Bulk Crypto Sends: One-click payouts for USDT, BTC, and ETH.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                                Fiat
                            </h4>
                            <p>Fiat Gateway Integration: Connect to major PSPs for global bank wires.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><line x1="12" y1="18" x2="12" y2="22" /><line x1="12" y1="2" x2="12" y2="6" /></svg>
                                Splits
                            </h4>
                            <p>Dynamic Fee Allocation: Automatically split profits between the firm and the trader.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>
                                Gas
                            </h4>
                            <p>Gas Fee Optimization: Intelligent batching to minimize blockchain network costs.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>
                                Workflow
                            </h4>
                            <p>Approval Workflows: Multi-level "Maker-Checker" rules for large payout amounts.</p>
                        </div>
                    </div>

                    <h3>Compliance & Analytics</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                KYC
                            </h4>
                            <p>Automated KYC Sync: Verify trader identity before enabling payout buttons.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Tax
                            </h4>
                            <p>Tax Form Collection: Integrated storage for W-8BEN/W-9 forms.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Anti-Fraud
                            </h4>
                            <p>Anti-Fraud Engine: Detects "Payout Doubling" or suspicious wallet changes.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                                Reports
                            </h4>
                            <p>Historical Reporting: Exportable CSV/PDF reports for corporate accounting.</p>
                        </div>
                    </div>

                    <h3>Algorithmic Verification</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                                Breach
                            </h4>
                            <p>Breach Detection Sync: Automatically freezes payouts if a trading rule violation is detected.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                                Consistency
                            </h4>
                            <p>Consistency Check: Validates that profit was earned according to firm-specific consistency rules.</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>Our system is designed to be the financial "last mile" of your prop firm's tech stack.</p>

                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                                Triggers
                            </h4>
                            <p>Programmatically trigger payouts from your custom CRM.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
                                Balances
                            </h4>
                            <p>Fetch real-time balance and "Available for Withdrawal" data.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                                Methods
                            </h4>
                            <p>Update trader payout methods and limits via secure API calls.</p>
                        </div>
                    </div>

                    <h3>Gateway & Connectivity API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                                Trading
                            </h4>
                            <p>MetaTrader 4/5 & cTrader: Direct sync to verify account equity and history.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
                                Crypto
                            </h4>
                            <p>Crypto Gateways: Native support for [Provider A], [Provider B], and direct nodes.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                                Fiat
                            </h4>
                            <p>Fiat PSPs: Integration with Tier-1 payment processors for bank transfers.</p>
                        </div>
                    </div>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a comprehensive REST API and Webhooks. This allows your developers to build a "Request Payout" button directly into your trader dashboard. When clicked, the system can automatically check rules, calculate the split, and queue the transaction—all without a single manual step from your staff.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is designed to scale with your success, offering a combination of a base license and a small per-transaction fee.</p>

                    <h3>What’s Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                                Admin UI
                            </h4>
                            <p>Full White Label Payout Manager & Admin UI.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                Integration
                            </h4>
                            <p>Integration with [X] Trading Servers and [X] Payment Gateways.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><line x1="12" y1="18" x2="12" y2="22" /><line x1="12" y1="2" x2="12" y2="6" /></svg>
                                Profit-Split
                            </h4>
                            <p>Automated Profit-Split calculation engine.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                                Bulk
                            </h4>
                            <p>Mass Payout (Bulk) processing capability.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                                Monitoring
                            </h4>
                            <p>[24/7] Technical monitoring of payment queues.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Compliance
                            </h4>
                            <p>Standard Security & Compliance updates.</p>
                        </div>
                    </div>

                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Anti-Fraud
                            </h4>
                            <p>Custom "Anti-Fraud" behavior modeling for payouts.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Tax
                            </h4>
                            <p>Specialized tax reporting modules for [Region X].</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
                                Hot Wallet
                            </h4>
                            <p>Dedicated "Hot Wallet" management services.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                                Support
                            </h4>
                            <p>Priority support for high-volume payout days.</p>
                        </div>
                    </div>

                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                                Workflow
                            </h4>
                            <p>Workflow Mapping (Days 1-2): Defining your approval and profit-split rules.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                                Integrate
                            </h4>
                            <p>Gateway Integration (Days 3-5): Connecting your crypto wallets and fiat PSPs.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                                Sync
                            </h4>
                            <p>CRM & Server Sync (Days 5-7): Linking the payout engine to your trader data.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                                Test
                            </h4>
                            <p>Security Testing (Days 7-10): Rigorous "Pen-Testing" and payout simulation.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>05</span>
                                Live
                            </h4>
                            <p>Go-Live (Day [X]): Production activation for your first payout batch.</p>
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
