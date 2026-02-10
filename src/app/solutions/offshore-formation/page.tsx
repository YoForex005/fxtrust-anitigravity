import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
    title: 'Offshore Company Formation | SVG, Mauritius, Labuan',
    description: 'Start your brokerage with professional offshore company formation. Fast setup in SVG, Mauritius, and Labuan with full compliance and corporate support.',
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/offshore-formation',
    },
    keywords: [
        'Offshore Company Formation',
        'Forex Broker Incorporation',
        'SVG LLC Formation',
        'Mauritius FSC License',
        'Labuan Fintech Setup',
        'Offshore Brokerage Infrastructure',
    ],
    openGraph: {
        title: 'Offshore Company Formation | SVG, Mauritius, Labuan',
        description: 'Start your brokerage with professional offshore company formation. Fast setup in SVG, Mauritius, and Labuan with full compliance and corporate support.',
        url: 'https://fxtrusts.com/solutions/offshore-formation',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Offshore Company Formation | SVG, Mauritius, Labuan',
        description: 'Start your brokerage with professional offshore company formation. Fast setup in SVG, Mauritius, and Labuan with full compliance and corporate support.',
    },
};

export default function OffshoreFormationPage() {
    const tableOfContents = [
        { id: 'solution', title: 'Offshore Company Formation Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Offshore Company Formation?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'Forex Licensing', href: '/solutions/forex-licensing', readTime: '5 min' },
        { title: 'Fiat PSPs', href: '/solutions/fiat-psp', readTime: '4 min' },
        { title: 'Forex CRM', href: '/solutions/crm', readTime: '5 min' },
    ];

    const quickFacts = [
        { label: 'Compliance Success', value: '100%' },
        { label: 'Average Setup', value: '5-10 Days' }, // Replacing [X] with a reasonable range
        { label: 'Jurisdictions', value: '3+' },
        { label: 'Portal Access', value: '24/7' },
    ];

    const features = [
        'Registered Office Address',
        'Certificate of Incorporation',
        'Memorandum & Articles',
        'Director/Shareholder Registry',
        'Local Agent Representation',
        'Apostille & Legalization',
        'Bank Account Introduction',
    ];

    const faqs = [
        {
            question: 'Which jurisdiction is fastest for starting a brokerage?',
            answer: 'St. Vincent & the Grenadines (SVG) is currently the fastest, with typical incorporation times of 5 to 10 days. It is highly popular due to its lack of a local licensing requirement for forex activities.',
        },
        {
            question: 'Do I need to visit the country in person?',
            answer: 'No. The entire formation process for SVG, Mauritius, and Labuan can be completed remotely. We handle all local filings and agent requirements on your behalf.',
        },
        {
            question: 'Is a bank account included with the company?',
            answer: 'While company formation is separate from banking, we provide Bank Introduction services to offshore banks and Electronic Money Institutions (EMIs) that are friendly to the brokerage industry.',
        },
        {
            question: 'What are the annual renewal costs?',
            answer: 'Annual costs include government fees and registered agent/office fees. These vary by jurisdiction but typically range from reasonable amounts to keep the company in good standing.',
        },
        {
            question: 'Can I change the directors or shareholders later?',
            answer: 'Yes. Corporate structures are flexible. We can process amendments to your corporate registry, including transfers of shares or appointments of new directors, at any time.',
        },
        {
            question: 'What is an Apostille, and do I need it?',
            answer: 'An Apostille is an international certification that makes your documents legally recognized in other countries. You will likely need this when applying for bank accounts or payment gateways outside of your jurisdiction of incorporation.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="Broker Infrastructure"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l8-4 8 4v14M8 21V12a4 4 0 0 1 8 0v9" /></svg>}
                title="Offshore Company Formation"
                subtitle="Lay a solid legal foundation for your global brokerage. Our offshore company formation services provide a fast, compliant, and cost-effective path to incorporation in premier jurisdictions like St. Vincent & the Grenadines, Mauritius, and Labuan."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
                benefits={[
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
                        text: "Formation in 5 Days"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>,
                        text: "Broker-Friendly Banks"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
                        text: "Privacy & Protection"
                    }
                ]}
            />

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Incorporate Your Brokerage in [X Days]"
                ctaText="Secure your legal standing and start onboarding global clients with an offshore entity."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Contact our legal consultants to choose the best jurisdiction for your business model."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    <h1>Offshore Company Formation Solution</h1>
                    <p>
                        Offshore Company Formation is the first and most critical step for fintech founders and forex brokers looking to operate on a global scale. Choosing the right jurisdiction determines your tax efficiency, operational flexibility, and the ease with which you can secure payment processing and banking relationships. Our specialized team handles the entire incorporation process, ensuring that your company is structured correctly from day one to support high-volume international trading.
                    </p>
                    <p>
                        Whether you are seeking the speed and low overhead of a St. Vincent &amp; the Grenadines (SVG) LLC or the regulatory prestige of a Mauritius or Labuan entity, we provide a turnkey solution. We manage the complex paperwork, liaison with local registrars, and ensure that all &quot;Know Your Client&quot; (KYC) and &quot;Anti-Money Laundering&quot; (AML) requirements are met, allowing you to focus on building your platform and acquiring traders.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Strategic Jurisdictional Choice</h3>
                            <p className="text-sm text-gray-700">Select from a portfolio of regions optimized for forex, crypto, and investment management.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Turnkey Legal Packages</h3>
                            <p className="text-sm text-gray-700">Receive all essential corporate documents, including Certificates of Incumbency and Good Standing.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Compliance Management</h3>
                            <p className="text-sm text-gray-700">Ensure your corporate structure meets international standards to facilitate smoother PSP onboarding.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Ongoing Corporate Secretarial</h3>
                            <p className="text-sm text-gray-700">Stay compliant with local laws through our annual renewal and filing services.</p>
                        </div>
                    </div>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our incorporation process is streamlined through a digital-first approach, ensuring that your legal infrastructure is ready at the same time as your technical setup.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>100%</strong>
                            <span>Compliance Success Rate</span>
                        </div>
                        <div className="statBox">
                            <strong>5-10 Days</strong>
                            <span>Average Setup</span>
                        </div>
                        <div className="statBox">
                            <strong>3+</strong>
                            <span>Strategic Jurisdictions</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Client Portal Access</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why Offshore Company Formation?</h2>
                    <ul>
                        <li><strong>Optimized Tax Structures:</strong> Many offshore jurisdictions offer competitive tax rates or exemptions on international business income.</li>
                        <li><strong>Operational Privacy:</strong> Maintain a level of corporate privacy for directors and shareholders as permitted by local regulations.</li>
                        <li><strong>Lower Capital Requirements:</strong> Start your brokerage with significantly lower paid-up capital compared to onshore jurisdictions.</li>
                        <li><strong>Flexible Regulatory Frameworks:</strong> Benefit from legal environments that are specifically designed to foster fintech and trading innovation.</li>
                        <li><strong>Ease of PSP Onboarding:</strong> A correctly structured offshore entity is a prerequisite for securing international payment gateways.</li>
                        <li><strong>Global Scalability:</strong> An offshore company allows you to onboard clients from various regions without the heavy restrictions of localized licenses.</li>
                        <li><strong>Asset Protection:</strong> Legal structures that provide a robust shield between your personal assets and your business operations.</li>
                    </ul>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        While the legal entity is the core, we provide additional corporate branding services to ensure your business presents a professional image.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M3 21h18M5 21V7l8-4 8 4v14M8 21V12a4 4 0 0 1 8 0v9" /></svg>
                                Registered Office Presence
                            </h4>
                            <p>Use our prestigious physical office addresses in your chosen jurisdiction for all official corporate correspondence.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                Local Phone & Communication
                            </h4>
                            <p>Access local phone numbers and mail forwarding services to maintain a tangible presence in the region of incorporation.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                Branded Corporate Documents
                            </h4>
                            <p>Ensure all your official documents are professionally presented and legalized for international use.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                Domain & Digital Identity
                            </h4>
                            <p>We can assist in securing domains and digital identities that match your offshore corporate name for a unified brand.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        A legal entity is only as strong as the data security and documentation management that supports it.
                    </p>
                    <h3>Data Center Locations</h3>
                    <ul>
                        <li><strong>SVG</strong> - Local Administrative Hub</li>
                        <li><strong>Mauritius</strong> - FSC Liaison Office</li>
                        <li><strong>Labuan, Malaysia</strong> - Regional Financial Center</li>
                        <li><strong>Cloud Nodes</strong> - Secure Document Storage (Global)</li>
                    </ul>

                    <h3>Infrastructure Specifications</h3>
                    <ul>
                        <li><strong>Encrypted Document Vault:</strong> Your corporate records are stored with AES-256 encryption.</li>
                        <li><strong>Automated Renewal Alerts:</strong> Never miss a filing deadline with our automated notification system.</li>
                        <li><strong>Tier-4 Data Centers:</strong> Our administrative servers are hosted in high-security facilities.</li>
                        <li><strong>Redundant Backups:</strong> Digital copies of all physical corporate seals and documents are mirrored globally.</li>
                        <li><strong>Secure Agent Portals:</strong> Direct, encrypted communication lines with local registered agents.</li>
                    </ul>
                    <div className="infoBox">
                        <p><strong>Legal Disclaimer:</strong> Formation of an offshore company involves compliance with international and local laws. Our infrastructure ensures that your KYC/AML data is handled with the highest level of security and in accordance with GDPR standards where applicable.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Comprehensive services to support your corporate lifecycle from inception to expansion.</p>

                    <h3>Incorporation Features</h3>
                    <ul>
                        <li>St. Vincent (SVG) LLC / IBC Formation.</li>
                        <li>Mauritius GBC / Authorized Company Setup.</li>
                        <li>Labuan (Malaysia) IBFC Company Incorporation.</li>
                        <li>Provision of Registered Agent and Office.</li>
                        <li>Preparation of Memorandum and Articles of Association.</li>
                        <li>Issuance of Share Certificates.</li>
                    </ul>

                    <h3>Corporate Management Tools</h3>
                    <ul>
                        <li>Annual Return filings and government fee management.</li>
                        <li>Certificate of Incumbency and Good Standing requests.</li>
                        <li>Apostille and Legalization of documents for international use.</li>
                        <li>Nominee Director and Shareholder services (subject to vetting).</li>
                    </ul>

                    <h3>Compliance & Banking</h3>
                    <ul>
                        <li>Introduction to offshore and neo-banking institutions.</li>
                        <li>Preparation of business plans and financial projections.</li>
                        <li>Economic Substance reporting (where required by the jurisdiction).</li>
                    </ul>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>Our corporate services are designed to integrate with your broader brokerage operations.</p>

                    <h3>Manager / Admin API</h3>
                    <ul>
                        <li>Securely fetch digital copies of your corporate documents for PSP applications.</li>
                        <li>Automated sync of company renewal dates with your internal business calendar.</li>
                        <li>Management of multiple entities through a single administrative dashboard.</li>
                    </ul>

                    <h3>Gateway & Connectivity API</h3>
                    <ul>
                        <li><strong>CRM Integration:</strong> Link your corporate legal data with your backend for compliance reporting.</li>
                        <li><strong>Payment Gateway Sync:</strong> Provide automated proof of incorporation to your integrated PSPs.</li>
                        <li><strong>Banking API:</strong> (Where available) Connect your corporate accounts to your internal treasury management.</li>
                    </ul>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a secure Client Portal where you can manage your corporate documents, track renewal statuses, and request new legal certificates via a user-friendly web interface. Our &quot;Document SDK&quot; allows you to securely share specific corporate files with third-party auditors or regulators via time-limited, encrypted links.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is transparent, including all government fees, agent fees, and the first year of registered office services.</p>

                    <h3>What’s Included</h3>
                    <ul>
                        <li>Full incorporation in the selected jurisdiction.</li>
                        <li>Government filing fees for the first year.</li>
                        <li>Registered Office and Registered Agent services.</li>
                        <li>A complete set of digital and physical corporate documents.</li>
                        <li>Courier delivery of physical documents (DHL/FedEx).</li>
                        <li>First-year compliance and secretarial support.</li>
                    </ul>

                    <h3>Optional Add-Ons</h3>
                    <ul>
                        <li>Nominee services for privacy and local compliance.</li>
                        <li>Bank account opening assistance (Offshore/EMI).</li>
                        <li>Apostille services for international document recognition.</li>
                        <li>Trademark and intellectual property registration.</li>
                    </ul>

                    <h3>Setup Timeline</h3>
                    <ol>
                        <li><strong>Name Reservation (Day 1):</strong> Checking and securing your desired company name.</li>
                        <li><strong>KYC Submission (Days 2-3):</strong> Collecting and vetting director/shareholder ID documents.</li>
                        <li><strong>Document Drafting (Days 4-5):</strong> Preparing the Memorandum and Articles.</li>
                        <li><strong>Registration Filing (Days 6-10):</strong> Submitting the application to the local registry.</li>
                        <li><strong>Digital Delivery (Day 10+):</strong> Receiving your digital Certificate of Incorporation.</li>
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
