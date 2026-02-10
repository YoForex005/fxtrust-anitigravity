import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Forex & Prop Firm Licensing | FSA, ASIC, CySEC Consulting',
    description: 'Navigate the complexities of global financial regulation. Get expert consulting for FSA, ASIC, and CySEC licensing for your Forex brokerage or Prop Firm.',
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/forex-licensing',
    },
    keywords: [
        'Forex Broker Licensing',
        'Prop Firm Regulation',
        'ASIC License Consulting',
        'CySEC Broker Setup',
        'FSA Offshore License',
        'Financial Services Licensing',
    ],
    openGraph: {
        title: 'Forex & Prop Firm Licensing | FSA, ASIC, CySEC Consulting',
        description: 'Navigate the complexities of global financial regulation. Get expert consulting for FSA, ASIC, and CySEC licensing for your Forex brokerage or Prop Firm.',
        url: 'https://fxtrusts.com/solutions/forex-licensing',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Forex & Prop Firm Licensing | FSA, ASIC, CySEC Consulting',
        description: 'Navigate the complexities of global financial regulation. Get expert consulting for FSA, ASIC, and CySEC licensing for your Forex brokerage or Prop Firm.',
    },
};

export default function ForexLicensingPage() {
    const tableOfContents = [
        { id: 'solution', title: 'Forex/Prop Firm Licensing Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Forex/Prop Firm Licensing?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'Offshore Formation', href: '/solutions/offshore-formation', readTime: '5 min' },
        { title: 'Fiat PSPs', href: '/solutions/fiat-psp', readTime: '4 min' },
        { title: 'Forex CRM', href: '/solutions/crm', readTime: '5 min' },
    ];

    const quickFacts = [
        { label: 'Application Success', value: '100%' },
        { label: 'Avg Timeline', value: '3-6 Months' },
        { label: 'Jurisdictions', value: '10+' },
        { label: 'Portal Access', value: '24/7' },
    ];

    const features = [
        'Capital Requirement Analysis',
        'Local Director Sourcing',
        'AML/KYC Policy Drafting',
        'Internal Audit Procedures',
        'Banking Relationship Setup',
        'Regulator Liaison Support',
        'Post-License Maintenance',
    ];

    const faqs = [
        {
            question: 'Which jurisdiction is best for a startup prop firm?',
            answer: 'Many startup prop firms begin with an FSA (Seychelles) or Mauritius structure due to the lower capital requirements and faster setup. However, for firms wanting to market heavily in Europe, a CySEC (Cyprus) license provides the highest level of &quot;Passporting&quot; prestige.',
        },
        {
            question: 'How much capital do I need to keep in the bank?',
            answer: 'Capital requirements vary wildly. Offshore (FSA) may require as little as $50,000, while Tier-1 (ASIC/CySEC) can require between $125,000 and $730,000 depending on the specific license type (STP vs Market Maker).',
        },
        {
            question: 'Can you help me find local directors?',
            answer: 'Yes. We have a network of qualified, pre-vetted professionals in all major jurisdictions who can serve as Resident Directors, Compliance Officers, or AML/MLRO officers as required by the regulator.',
        },
        {
            question: 'Do you guarantee that I will get the license?',
            answer: 'While no one can guarantee a regulator\'s decision, we have a 100% success rate for clients who pass our initial internal vetting. We only take on projects where we are confident in the firm\'s ability to meet the requirements.',
        },
        {
            question: 'What is the difference between STP and Market Maker licenses?',
            answer: 'An STP (Straight Through Processing) license requires you to pass all trades to a liquidity provider. A Market Maker (B-Book) license allows you to take the other side of the trade, but requires significantly higher capital and stricter risk management.',
        },
        {
            question: 'How long does the whole process take?',
            answer: 'Offshore licenses (FSA) can be secured in 3 to 4 months. Tier-1 licenses (ASIC/CySEC) are a much deeper process, typically taking 6 to 12 months from the date of submission.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="Broker Infrastructure"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                title="Forex/Prop Firm Licensing"
                subtitle="Secure your seat at the table of institutional finance. Our licensing consulting services provide a comprehensive roadmap for acquiring prestigious financial permits from FSA, ASIC, CySEC, and other global regulators."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
                benefits={[
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
                        text: "100% Success Rate"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
                        text: "Multi-Jurisdictional"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
                        text: "Full Turnkey Support"
                    }
                ]}
            />

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Secure Your License in [X] Months"
                ctaText="Don't risk rejection. Partner with experts who have a 100% application success rate."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Contact our regulatory architects to compare the pros/cons of different jurisdictions."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    <h1>Forex/Prop Firm Licensing Solution</h1>
                    <p>
                        Licensing is the ultimate differentiator in the retail trading industry. For fintech founders and established brokers, a license is more than just a regulatory requirement—it is a powerful marketing asset that inspires trader confidence and unlocks Tier-1 banking and liquidity relationships. Our licensing consulting service provides a high-touch, end-to-end management of the application process for jurisdictions including the Seychelles (FSA), Cyprus (CySEC), and Australia (ASIC).
                    </p>
                    <p>
                        We navigate the &quot;Red Tape&quot; so you can focus on your product. Our consultants handle everything from the initial feasibility study and capital adequacy planning to the drafting of complex internal manuals and the sourcing of qualified local personnel. Whether you are seeking a retail FX license or a specialized regulatory framework for a prop firm, we ensure your application is airtight, compliant, and positioned for a successful approval.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Strategic Jurisdictional Mapping</h3>
                            <p className="text-sm text-gray-700">We align your business model with the regulator that offers the best balance of prestige and operational flexibility.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Full Documentation Suite</h3>
                            <p className="text-sm text-gray-700">Expert drafting of Business Plans, Financial Projections, AML/KYC Manuals, and Risk Management Frameworks.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Local Substance Support</h3>
                            <p className="text-sm text-gray-700">Assistance in securing local physical offices and sourcing qualified Resident Directors and Compliance Officers.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Bank & PSP Facilitation</h3>
                            <p className="text-sm text-gray-700">Leveraging our licensed status to open doors at Tier-1 banks and high-volume payment processors.</p>
                        </div>
                    </div>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our consulting process is structured to minimize delays, ensuring your firm moves from application to &quot;Authorized&quot; in the shortest possible timeframe.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>100%</strong>
                            <span>Application Success Rate</span>
                        </div>
                        <div className="statBox">
                            <strong>3-6 Months</strong>
                            <span>Average Timeline (Offshore)</span>
                        </div>
                        <div className="statBox">
                            <strong>10+</strong>
                            <span>Global Jurisdictions</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Portal Access</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why Forex/Prop Firm Licensing?</h2>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Trust
                            </h4>
                            <p>Trader Trust & Security: A regulated status is the #1 factor for high-net-worth traders when choosing a platform.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Liquidity
                            </h4>
                            <p>Tier-1 Liquidity Access: Institutional prime brokers and liquidity pools often require a regulated status to open trading lines.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                                Banking
                            </h4>
                            <p>Banking Stability: Regulated entities face significantly less friction when opening and maintaining corporate bank accounts.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                Authority
                            </h4>
                            <p>Marketing Authority: Proudly display your regulatory status to lower lead acquisition costs and increase conversion rates.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                Longevity
                            </h4>
                            <p>Operational Longevity: Build a business that can withstand the evolving global crackdown on unregulated financial services.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Value
                            </h4>
                            <p>Exit Strategy Value: A licensed brokerage carries a significantly higher valuation during M&A activity than an unregulated one.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M7 15h0M2 9.5h20" /></svg>
                                Payments
                            </h4>
                            <p>Global Payment Processing: Access a wider range of Fiat PSPs and Mastercard/Visa acquirers that only work with licensed entities.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        While the license is a legal achievement, we help you integrate this milestone into your brand&apos;s identity to maximize its commercial impact.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                Corporate Identity Alignment
                            </h4>
                            <p>We ensure your corporate naming and branding meet the strict naming conventions required by specific regulators like ASIC or CySEC.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M3 21v-5h5"></path></svg>
                                Compliance-Ready Web Presence
                            </h4>
                            <p>Our team reviews your website and marketing materials to ensure all risk warnings and regulatory disclosures are perfectly placed.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                Branded Compliance Portals
                            </h4>
                            <p>Implement a white-labeled &quot;Compliance Hub&quot; within your client portal where traders can view your license details and legal documents.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4.09V13a1 1 0 0 1-2 0v-1.59a.5.5 0 0 1 .2-.4l2-1.6a2 2 0 0 0-1-3.4 2 2 0 0 0-2 1.4.5.5 0 0 1-.9-.4 3 3 0 0 1 5.9 1 3 3 0 0 1-1.5 2.59z"></path></svg>
                                Authority Building Content
                            </h4>
                            <p>We provide PR and content strategies to announce your licensing milestone to the global financial media.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        Many regulators (especially Tier-1) have strict requirements regarding data sovereignty and technical infrastructure stability.
                    </p>
                    <h3>Data Center Locations</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Cyprus
                            </h4>
                            <p>Cyprus: Local nodes for CySEC compliance.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Australia
                            </h4>
                            <p>Australia: Sydney-based infrastructure for ASIC.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Seychelles
                            </h4>
                            <p>Seychelles: Administrative hosting for FSA.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
                                Global
                            </h4>
                            <p>London/NY: Redundant nodes for trade execution data.</p>
                        </div>
                    </div>

                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Data
                            </h4>
                            <p>Data Sovereignty: Hosting solutions that comply with regional data protection laws (GDPR/APPs).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Audit
                            </h4>
                            <p>Technical Audit Trails: Tamper-proof logging of all trades and client interactions for regulatory inspection.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M18 12h-5v5" /><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                                Uptime
                            </h4>
                            <p>High-Availability Clusters: Ensuring your platform remains live, as required by "Operational Resilience" standards.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                Recovery
                            </h4>
                            <p>Disaster Recovery: Managed failover protocols to ensure business continuity during technical outages.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Archive
                            </h4>
                            <p>Secure Document Archiving: 7+ years of encrypted data storage as required by most financial regulators.</p>
                        </div>
                    </div>
                    <div className="infoBox">
                        <p><strong>Compliance Callout:</strong> Our technical infrastructure is designed to pass the IT Audits required by CySEC and ASIC. We provide the documentation necessary to prove your firm&apos;s Operational Resilience to the regulator.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Tools and services designed to help you maintain your license long after the initial approval.</p>

                    <h3>Licensing & Legal Features</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Study
                            </h4>
                            <p>Feasibility study for Offshore vs. Onshore jurisdictions.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M3 21h18M5 21V7l8-4 8 4v14M8 21V12a4 4 0 0 1 8 0v9" /></svg>
                                Entity
                            </h4>
                            <p>Entity incorporation and corporate structuring.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Manuals
                            </h4>
                            <p>Drafting of Internal Procedures Manuals (IPM).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Capital
                            </h4>
                            <p>Capital Adequacy Requirement (CAR) calculation and monitoring.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Staff
                            </h4>
                            <p>Resident Director and Compliance Officer recruitment.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Insurance
                            </h4>
                            <p>Professional Indemnity (PI) Insurance sourcing.</p>
                        </div>
                    </div>

                    <h3>Post-License Compliance</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Reports
                            </h4>
                            <p>Automated regulatory reporting templates.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                Audit
                            </h4>
                            <p>Periodic internal audit and compliance reviews.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></svg>
                                Training
                            </h4>
                            <p>AML/CTF ongoing training and staff certification.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                Resolution
                            </h4>
                            <p>Dispute resolution framework and "Ombudsman" liaison.</p>
                        </div>
                    </div>

                    <h3>Operational Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                KYC
                            </h4>
                            <p>Integrated KYC/AML verification software.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                                Money
                            </h4>
                            <p>Client Money (Segregated Account) management protocols.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                Risk
                            </h4>
                            <p>Risk Management Dashboards for real-time exposure monitoring.</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>Our consulting services integrate with your technology stack to ensure seamless regulatory reporting.</p>

                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
                                Sync
                            </h4>
                            <p>Securely sync your trading data with regulatory reporting portals.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Reports
                            </h4>
                            <p>Automated extraction of "Transaction Reports" as required by EMIR/MiFIR/ASIC.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Control
                            </h4>
                            <p>Management of "Whitelisted Jurisdictions" for your registration forms via API.</p>
                        </div>
                    </div>

                    <h3>Gateway & Connectivity API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                KYC
                            </h4>
                            <p>KYC Providers: Native integration with Sumsub, Onfido, or World-Check for instant onboarding.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Hubs
                            </h4>
                            <p>Reporting Hubs: Connectivity to ARM (Approved Reporting Mechanisms) for Tier-1 reporting.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M3 21h18M5 21V7l8-4 8 4v14M8 21V12a4 4 0 0 1 8 0v9" /></svg>
                                Banks
                            </h4>
                            <p>Banking APIs: Real-time reconciliation of client funds with segregated bank accounts.</p>
                        </div>
                    </div>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a &quot;Compliance SDK&quot; that allows your developers to build dynamic registration forms. These forms automatically adjust their questions and required documents based on the user&apos;s country and your specific license&apos;s requirements, ensuring you never onboard a client outside of your permitted scope.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is modular, consisting of a project-based application fee and an optional ongoing compliance support retainer.</p>

                    <h3>What’s Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Report
                            </h4>
                            <p>Comprehensive jurisdictional feasibility report.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                App
                            </h4>
                            <p>Full application preparation and submission management.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Draft
                            </h4>
                            <p>Custom drafting of all required legal and operational manuals.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Liaison
                            </h4>
                            <p>Liaison with the regulator until the final decision.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Recruit
                            </h4>
                            <p>Basic recruitment support for mandatory local staff.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                Advisor
                            </h4>
                            <p>12 Months of "New License" regulatory advisory.</p>
                        </div>
                    </div>

                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M3 21h18M5 21V7l8-4 8 4v14M8 21V12a4 4 0 0 1 8 0v9" /></svg>
                                Substance
                            </h4>
                            <p>Full "Substance" packages (Physical office + Staffing).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Audit
                            </h4>
                            <p>External Internal Audit services (Quarterly/Annual).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                                Virtual
                            </h4>
                            <p>Specialized Prop Firm "Virtual License" structures.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                IP
                            </h4>
                            <p>Global trademark and IP protection.</p>
                        </div>
                    </div>

                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>01</span>
                                Plan
                            </h4>
                            <p>Phase 1: Planning (Weeks 1-2): Jurisdiction selection and capital planning.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>02</span>
                                Docs
                            </h4>
                            <p>Phase 2: Documentation (Weeks 3-8): Drafting manuals, business plans, and forms.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>03</span>
                                File
                            </h4>
                            <p>Phase 3: Submission (Week 9): Final review and application filing with the regulator.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>04</span>
                                Liaison
                            </h4>
                            <p>Phase 4: Liaison (Month 3+): Answering regulator queries and refining the application.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>05</span>
                                Approval
                            </h4>
                            <p>Phase 5: Approval (Day X): License issuance and activation of the entity.</p>
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
