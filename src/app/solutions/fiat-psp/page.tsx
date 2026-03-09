import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Fiat PSP Integration | Visa, Mastercard & Wire Transfers',
    description: 'Seamlessly integrate Fiat PSPs for Visa, Mastercard, and Bank Wires. Secure, high-converting payment processing for global brokerages and fintech platforms.',
    keywords: [
        'Fiat PSP Integration',
        'Forex Payment Gateway',
        'Visa Mastercard Broker Deposits',
        'Bank Wire Integration',
        'Merchant Account for Brokers',
        'Multi-Currency Payment Processing',
    ],
    openGraph: {
        title: 'Fiat PSP Integration | Visa, Mastercard & Wire Transfers',
        description: 'Seamlessly integrate Fiat PSPs for Visa, Mastercard, and Bank Wires. Secure, high-converting payment processing for global brokerages and fintech platforms.',
        url: 'https://fxtrusts.com/solutions/fiat-psp-integration-visa-mastercard-wire',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fiat PSP Integration | Visa, Mastercard & Wire Transfers',
        description: 'Seamlessly integrate Fiat PSPs for Visa, Mastercard, and Bank Wires. Secure, high-converting payment processing for global brokerages and fintech platforms.',
    },
};

export default function FiatPSPPage() {
    const tableOfContents = [
        { id: 'solution', title: 'Fiat PSP Integration Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Fiat PSP Integration?' },
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
        { label: 'Setup Time', value: '[X] Days' },
        { label: 'Currencies', value: '100+' },
        { label: 'Monitoring', value: '24/7' },
    ];

    const features = [
        'Instant Card Deposits',
        'SEPA/SWIFT Wire Support',
        'Dynamic Currency Conversion',
        'One-Click Re-billing',
        'Chargeback Management',
        '3D Secure 2.0 Ready',
        'Automated Payouts',
    ];

    const faqs = [
        {
            question: 'How long does a card deposit take to reflect in the account?',
            answer: 'Card deposits are processed in real-time. Once the transaction is authorized by the issuing bank, our system sends a webhook to your CRM to update the trader\'s balance in [X] seconds.',
        },
        {
            question: 'Do you support SEPA and SWIFT wires?',
            answer: 'Yes. Our system automatically generates the correct IBAN and SWIFT/BIC instructions for your clients based on their region and your bank account details, including a unique reference number for automated matching.',
        },
        {
            question: 'What is your approach to preventing chargebacks?',
            answer: 'We implement 3D Secure 2.0 (3DS2) as a standard. This requires the trader to authenticate the transaction through their banking app, which shifts the liability for fraud-related chargebacks away from your brokerage.',
        },
        {
            question: 'Can I integrate multiple PSPs at once?',
            answer: 'Absolutely. We recommend a Multi-PSP strategy. If one provider has a temporary outage or a specific regional bank is declining transactions, our system can automatically route the payment through a secondary provider.',
        },
        {
            question: 'What are the minimum requirements to start?',
            answer: 'You will need a registered corporate entity and a website that meets PCI and Visa/Mastercard compliance standards. Our team can guide you through the "Merchant Readiness" checklist.',
        },
        {
            question: 'How is currency conversion handled?',
            answer: 'If a client deposits in a currency different from their trading account base (e.g., depositing EUR into a USD account), the system uses Real-Time FX Rates to calculate the conversion, which is then clearly displayed to the client before they confirm.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="BROKER INFRASTRUCTURE"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>}
                title="Fiat PSP Integration"
                subtitle="Maximize your conversion rates with frictionless funding. Our Fiat PSP integration services connect your brokerage to a global network of payment providers, enabling secure, instant deposits via Visa and Mastercard alongside traditional Bank Wire reliability."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
            >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', fontSize: '0.875rem', color: '#4B5563' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Global Coverage</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        <span>Instant Funding</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>High Approval Rates</span>
                    </div>
                </div>
            </InnerPageHeader>

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Enable Fiat Payments in [X Days]"
                ctaText="Bridge the gap between global traders and your platform with Tier-1 card processing."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Contact our payment consultants to optimize your merchant account structure."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Fiat PSP Integration | Visa, Mastercard & Wire Transfers","description":"Seamlessly integrate Fiat PSPs for Visa, Mastercard, and Bank Wires. Secure, high-converting payment processing for global brokerages and fintech platforms.","url":"https://fxtrusts.com/solutions/fiat-psp-integration-visa-mastercard-wire"}) }}
      />
      <h1>Fiat PSP Integration Solution</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Multi-Acquirer Routing</h3>
                            <p className="text-sm text-blue-800">Automatically route transactions to the PSP most likely to approve them based on region and card type.</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Streamlined Wire Management</h3>
                            <p className="text-sm text-blue-800">Automate the generation of unique wire instructions and reference codes for SEPA and SWIFT transfers.</p>
                        </div>
                    </div>
                    <p>
                        Fiat PSP Integration is the backbone of any successful brokerage or trading platform. In a market where speed is everything, your clients expect to fund their accounts instantly using the cards already in their wallets. Our solution provides a unified gateway to multiple Payment Service Providers (PSPs), ensuring that you can offer localized payment methods, from Visa and Mastercard to regional bank transfers and SEPA wires, across different jurisdictions.
                    </p>
                    <p>
                        For fintech founders and established brokers, this integration removes the technical complexity of dealing with individual banking APIs. We provide a single, hardened entry point that handles secure data transmission, 3D Secure authentication, and real-time status updates. By diversifying your PSP portfolio through our integration, you reduce the risk of downtime and protect your business from the volatility of merchant account closures.
                    </p>
                    <ul>
                        <li><strong>Multi-Acquirer Routing:</strong> Automatically route transactions to the PSP most likely to approve them based on region and card type.</li>
                        <li><strong>Streamlined Wire Management:</strong> Automate the generation of unique wire instructions and reference codes for SEPA and SWIFT transfers.</li>
                        <li><strong>PCI-Compliant Handling:</strong> Minimize your compliance burden by utilizing our secure tokenization and hosted payment pages.</li>
                        <li><strong>Unified Financial Reporting:</strong> View all card and wire data in a single dashboard, regardless of which PSP processed the transaction.</li>
                    </ul>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our integration layer is built for high-volume financial traffic, ensuring that every deposit is recorded accurately and reflected on the trading server instantly.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>99.9%</strong>
                            <span>Gateway Uptime</span>
                        </div>
                        <div className="statBox">
                            <strong>[X]</strong>
                            <span>Days Setup</span>
                        </div>
                        <div className="statBox">
                            <strong>100+</strong>
                            <span>Fiat Currencies</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Monitoring</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why Fiat PSP Integration?</h2>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Conversion
                            </h4>
                            <p>Boost Conversion Rates: Reduce abandonment by offering familiar payment methods like Visa and Mastercard.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Credibility
                            </h4>
                            <p>Institutional Credibility: Offering Tier-1 bank wires and major card processing builds immediate trust.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Flexibility
                            </h4>
                            <p>Geographic Flexibility: Easily enter new markets by integrating local PSPs that specialize in specific regions.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Risk Mgmt
                            </h4>
                            <p>Reduced Chargeback Risk: Advanced 3D Secure 2.0 (3DS2) implementation ensures strong customer authentication.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2L3 14h9v7l10-12h-9z" /></svg>
                                One-Click
                            </h4>
                            <p>Frictionless Re-deposits: Securely tokenized card data allows for "One-Click" funding.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Reconciliation
                            </h4>
                            <p>Automated Reconciliation: Match every incoming wire and card payment to a trader ID automatically.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                Scalable
                            </h4>
                            <p>Scalable Infrastructure: As your volume grows, our multi-PSP architecture allows you to add new processing capacity.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        Maintaining your brand’s integrity throughout the payment process is vital for user trust. Our integration is designed to be invisible to the end user.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                                Custom Payment Modals
                            </h4>
                            <p>Embed the payment gateway directly into your client area with a UI that matches your brand’s design language.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                Branded Wire Instructions
                            </h4>
                            <p>Generate professional, branded PDF wire instructions that clients can take to their bank or use in their banking app.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                White-Labeled Payouts
                            </h4>
                            <p>Customize the description that appears on a client's bank statement to reinforce your brand identity.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                Unified Client Portal
                            </h4>
                            <p>A seamless experience where the transition from the "Deposit" page to the "Success" screen feels like one continuous journey.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        Financial data requires the highest level of security and low-latency connectivity to banking networks.
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
                            <p>SG1 (Asian Hub)</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Dublin, Ireland
                            </h4>
                            <p>EU Data Sovereignty Node</p>
                        </div>
                    </div>

                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                PCI DSS
                            </h4>
                            <p>PCI DSS Level 1: Enterprise-grade security for the handling of cardholder data.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                                Encryption
                            </h4>
                            <p>End-to-End Encryption: TLS 1.3 encryption for all data in transit between the client and the PSP.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                Redundant
                            </h4>
                            <p>Redundant API Gateways: Automated failover between regional nodes to prevent processing delays.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                DDoS
                            </h4>
                            <p>DDoS Mitigation: Multi-layered protection to prevent service interruptions during high-traffic periods.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Auditing
                            </h4>
                            <p>Audit Logging: Comprehensive, tamper-proof logs for all transaction attempts.</p>
                        </div>
                    </div>
                    <div className="infoBox">
                        <p><strong>Compliance Note:</strong> Our infrastructure is built to meet the requirements of major financial regulators. We utilize [tokenization] to ensure that sensitive card data never touches your local servers, keeping your firm out of the scope of complex PCI audits.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Tools designed to manage the full spectrum of fiat money movement.</p>

                    <h3>Card Processing Features</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                                Cards
                            </h4>
                            <p>Visa, Mastercard, AMEX, and JCB support.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" /></svg>
                                Recurring
                            </h4>
                            <p>Recurring billing and subscription management.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg>
                                Refunds
                            </h4>
                            <p>Partial and full refund processing through the admin panel.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Descriptors
                            </h4>
                            <p>Dynamic descriptor support (Customize what appears on card statements).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                3DS2
                            </h4>
                            <p>Real-time 3D Secure (3DS2) challenge-response handling.</p>
                        </div>
                    </div>

                    <h3>Wire & Bank Transfer Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                SWIFT/SEPA
                            </h4>
                            <p>Automated SEPA/SWIFT instruction generation.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                Tracking
                            </h4>
                            <p>Real-time "Pending Wire" tracking in the trader dashboard.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M3 21h18M5 21V7l8-4 8 4v14" /></svg>
                                Local Rails
                            </h4>
                            <p>Support for local banking rails (Instant P2P, ACH, Faster Payments).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                FX
                            </h4>
                            <p>Integrated FX conversion for cross-currency transfers.</p>
                        </div>
                    </div>

                    <h3>Analytics & Risk Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                Approvals
                            </h4>
                            <p>"Approval Rate" analytics by country and card issuer.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2L3 14h9v7l10-12h-9z" /></svg>
                                Velocity
                            </h4>
                            <p>Velocity checking to prevent "Card Testing" fraud.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                Chargebacks
                            </h4>
                            <p>Automated chargeback alerts and evidence submission portal.</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>Our integration is designed to be developer-friendly and extensible.</p>

                    <h3>Manager / Admin API</h3>
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is based on a per-transaction model, typically determined by your volume and the risk profile of your jurisdiction.</p>

                    <h3>What’s Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                PSPs
                            </h4>
                            <p>Full integration with [X] major Fiat PSPs.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Hosted Pages
                            </h4>
                            <p>PCI-compliant hosted payment pages and fields.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                Wire Engine
                            </h4>
                            <p>Automated Bank Wire instruction engine.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                                Dashboard
                            </h4>
                            <p>Real-time transaction monitoring dashboard.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Currencies
                            </h4>
                            <p>Support for [X] fiat currencies.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                Maintenance
                            </h4>
                            <p>Regular security and API maintenance updates.</p>
                        </div>
                    </div>

                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                Disputes
                            </h4>
                            <p>Advanced Chargeback Disputing module.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Sourcing
                            </h4>
                            <p>Custom merchant account sourcing and consulting.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Multi-Entity
                            </h4>
                            <p>Multi-entity/Multi-currency settlement accounts.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                Volume
                            </h4>
                            <p>High-volume dedicated processing lanes.</p>
                        </div>
                    </div>

                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                                KYB
                            </h4>
                            <p>KYB & Merchant Application: Onboarding with the chosen PSPs (Days 1-7).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                                API
                            </h4>
                            <p>API Integration: Linking the gateway to your CRM and trading server (Days 3-5).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                                UI
                            </h4>
                            <p>UI Customization: Styling the payment pages and notifications (Days 5-6).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                                Test
                            </h4>
                            <p>Sandbox Testing: Processing test card and wire transactions (Days 7-10).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>05</span>
                                Live
                            </h4>
                            <p>Go-Live: Production activation for live client funding (Day [X]).</p>
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
