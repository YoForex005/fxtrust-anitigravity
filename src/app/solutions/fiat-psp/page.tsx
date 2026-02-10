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
                    <ul>
                        <li><strong>Boost Conversion Rates:</strong> Reduce abandonment by offering familiar payment methods like Visa and Mastercard.</li>
                        <li><strong>Institutional Credibility:</strong> Offering Tier-1 bank wires and major card processing builds immediate trust with high-net-worth traders.</li>
                        <li><strong>Geographic Flexibility:</strong> Easily enter new markets by integrating local PSPs that specialize in specific regions (LATAM, SEA, EU).</li>
                        <li><strong>Reduced Chargeback Risk:</strong> Advanced 3D Secure 2.0 (3DS2) implementation ensures strong customer authentication and liability shift.</li>
                        <li><strong>Frictionless Re-deposits:</strong> Securely tokenized card data allows for "One-Click" funding, significantly increasing client lifetime value.</li>
                        <li><strong>Automated Reconciliation:</strong> Match every incoming wire and card payment to a trader ID automatically, saving hours of manual back-office work.</li>
                        <li><strong>Scalable Infrastructure:</strong> As your volume grows, our multi-PSP architecture allows you to add new processing capacity without re-coding.</li>
                    </ul>
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
                    <ul>
                        <li><strong>London, UK</strong> - Equinix LD4 (Financial Core)</li>
                        <li><strong>New York, USA</strong> - Equinix NY4</li>
                        <li><strong>Singapore</strong> - SG1 (Asian Hub)</li>
                        <li><strong>Dublin, Ireland</strong> - EU Data Sovereignty Node</li>
                    </ul>

                    <h3>Infrastructure Specifications</h3>
                    <ul>
                        <li><strong>PCI DSS Level 1:</strong> Enterprise-grade security for the handling of cardholder data.</li>
                        <li><strong>End-to-End Encryption:</strong> TLS 1.3 encryption for all data in transit between the client and the PSP.</li>
                        <li><strong>Redundant API Gateways:</strong> Automated failover between regional nodes to prevent processing delays.</li>
                        <li><strong>DDoS Mitigation:</strong> Multi-layered protection to prevent service interruptions during high-traffic periods.</li>
                        <li><strong>Audit Logging:</strong> Comprehensive, tamper-proof logs for all transaction attempts and administrative changes.</li>
                    </ul>
                    <div className="infoBox">
                        <p><strong>Compliance Note:</strong> Our infrastructure is built to meet the requirements of major financial regulators. We utilize [tokenization] to ensure that sensitive card data never touches your local servers, keeping your firm out of the scope of complex PCI audits.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Tools designed to manage the full spectrum of fiat money movement.</p>

                    <h3>Card Processing Features</h3>
                    <ul>
                        <li>Visa, Mastercard, AMEX, and JCB support.</li>
                        <li>Recurring billing and subscription management.</li>
                        <li>Partial and full refund processing through the admin panel.</li>
                        <li>Dynamic descriptor support (Customize what appears on card statements).</li>
                        <li>Real-time 3D Secure (3DS2) challenge-response handling.</li>
                    </ul>

                    <h3>Wire & Bank Transfer Tools</h3>
                    <ul>
                        <li>Automated SEPA/SWIFT instruction generation.</li>
                        <li>Real-time "Pending Wire" tracking in the trader dashboard.</li>
                        <li>Support for local banking rails (Instant P2P, ACH, Faster Payments).</li>
                        <li>Integrated FX conversion for cross-currency transfers.</li>
                    </ul>

                    <h3>Analytics & Risk Tools</h3>
                    <ul>
                        <li>"Approval Rate" analytics by country and card issuer.</li>
                        <li>Velocity checking to prevent "Card Testing" fraud.</li>
                        <li>Automated chargeback alerts and evidence submission portal.</li>
                    </ul>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>Our integration is designed to be developer-friendly and extensible.</p>

                    <h3>Manager / Admin API</h3>
                    <ul>
                        <li>Programmatically verify transaction statuses for your back-office team.</li>
                        <li>Export financial data in CSV/JSON for accounting and auditing.</li>
                        <li>Trigger manual or automated payouts to verified bank accounts.</li>
                    </ul>

                    <h3>Gateway & Connectivity API</h3>
                    <ul>
                        <li><strong>RESTful API:</strong> Clean, modern endpoints for integrating card deposits into any web or mobile app.</li>
                        <li><strong>Webhooks:</strong> Instant "Success/Fail" notifications to update trader balances in real-time.</li>
                        <li><strong>Hosted Fields:</strong> Securely collect card data while maintaining full UI control.</li>
                    </ul>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a comprehensive JavaScript SDK and mobile libraries (iOS/Android). This allow your developers to build a high-converting "One-Click Deposit" feature directly within your mobile trading app, utilizing secure tokenization for a frictionless user experience.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is based on a per-transaction model, typically determined by your volume and the risk profile of your jurisdiction.</p>

                    <h3>What’s Included</h3>
                    <ul>
                        <li>Full integration with [X] major Fiat PSPs.</li>
                        <li>PCI-compliant hosted payment pages and fields.</li>
                        <li>Automated Bank Wire instruction engine.</li>
                        <li>Real-time transaction monitoring dashboard.</li>
                        <li>Support for [X] fiat currencies.</li>
                        <li>Regular security and API maintenance updates.</li>
                    </ul>

                    <h3>Optional Add-Ons</h3>
                    <ul>
                        <li>Advanced Chargeback Disputing module.</li>
                        <li>Custom merchant account sourcing and consulting.</li>
                        <li>Multi-entity/Multi-currency settlement accounts.</li>
                        <li>High-volume dedicated processing lanes.</li>
                    </ul>

                    <h3>Setup Timeline</h3>
                    <ol>
                        <li><strong>KYB & Merchant Application (Days 1-7):</strong> Onboarding with the chosen PSPs.</li>
                        <li><strong>API Integration (Days 3-5):</strong> Linking the gateway to your CRM and trading server.</li>
                        <li><strong>UI Customization (Days 5-6):</strong> Styling the payment pages and notifications.</li>
                        <li><strong>Sandbox Testing (Days 7-10):</strong> Processing test card and wire transactions.</li>
                        <li><strong>Go-Live (Day [X]):</strong> Production activation for live client funding.</li>
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
