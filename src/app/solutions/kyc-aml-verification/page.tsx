import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Automated KYC/AML Verification | Sumsub & Onfido Integration',
    description: 'Streamline trader onboarding with automated KYC/AML verification. Integrate Sumsub or Onfido for real-time ID checks, liveness detection, and AML screening.',
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/kyc-aml-verification',
    },
    keywords: [
        'Automated KYC/AML Verification',
        'Forex KYC Integration',
        'AML Screening for Brokers',
        'Onfido Broker Integration',
        'Sumsub Payout Verification',
        'Automated Identity Verification',
    ],
    openGraph: {
        title: 'Automated KYC/AML Verification | Sumsub & Onfido Integration',
        description: 'Streamline trader onboarding with automated KYC/AML verification. Integrate Sumsub or Onfido for real-time ID checks, liveness detection, and AML screening.',
        url: 'https://fxtrusts.com/solutions/kyc-aml-verification',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Automated KYC/AML Verification | Sumsub & Onfido Integration',
        description: 'Streamline trader onboarding with automated KYC/AML verification. Integrate Sumsub or Onfido for real-time ID checks, liveness detection, and AML screening.',
    },
};

export default function KycAmlVerificationPage() {
    const tableOfContents = [
        { id: 'solution', title: 'Automated KYC/AML Verification Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Automated KYC/AML Verification?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'Forex Licensing', href: '/solutions/forex-licensing', readTime: '5 min' },
        { title: 'Forex CRM', href: '/solutions/crm', readTime: '5 min' },
        { title: 'Traders Room', href: '/solutions/traders-room', readTime: '4 min' },
    ];

    const quickFacts = [
        { label: 'Verify Time', value: '< 60 Seconds' },
        { label: 'Global Compliance', value: '200+ Regions' },
        { label: 'AI Accuracy', value: '99%' },
        { label: 'Security', value: 'GDPR & SOC2' },
    ];

    const featuresList = [
        'OCR Document Extraction',
        '3D Liveness Checks',
        'Automated AML Screening',
        'Proof of Address (PoA)',
        'Video Identification Options',
        'Custom Verification Rules',
        'Real-Time Status Webhooks',
    ];

    const faqs = [
        {
            question: 'How long does a verification take for the trader?',
            answer: 'With AI-driven OCR, most traders receive an "Approved" status in 30 to 60 seconds. If a document is blurry or requires a manual review, it may take longer, but the system will notify the trader immediately.',
        },
        {
            question: 'Does this satisfy my regulator\'s AML requirements?',
            answer: 'Yes. Using Tier-1 providers like Sumsub and Onfido provides the &quot;Institutional Quality&quot; check that regulators (ASIC, CySEC, FSA) look for during audits. We provide the full audit trail to prove your due diligence.',
        },
        {
            question: 'Can I use my own Sumsub/Onfido account?',
            answer: 'Yes. If you already have a contract with these providers, we can simply act as the Integration Bridge to link their API to your CRM and trading platform.',
        },
        {
            question: 'What happens if a document is rejected?',
            answer: 'The system provides a "Specific Reason" code (e.g., "Document Expired" or "Poor Image Quality"). This allows your platform to automatically ask the trader to re-upload the correct item without human intervention.',
        },
        {
            question: 'Is it mobile-friendly?',
            answer: 'Absolutely. The mobile SDKs are optimized for smartphone cameras, including auto-focus and flash management, to ensure the highest quality ID capture on the first attempt.',
        },
        {
            question: 'What are the minimum requirements to start?',
            answer: 'You will need an active Broker CRM or Client Portal where the SDK can be embedded. If you don\'t have one, our Client Portal solution comes with this integration pre-installed.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="Broker Infrastructure"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                title="Automated KYC/AML Verification"
                subtitle="Accelerate your onboarding pipeline without compromising on security. Our automated KYC/AML verification solution integrates industry leaders like Sumsub and Onfido directly into your registration flow, allowing you to verify global traders in seconds while maintaining strict adherence to international financial regulations."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
                benefits={[
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                        text: "Verify in < 60 Seconds"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
                        text: "Global Compliance"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20M2 12a10 10 0 0 1 20 0M2 12a10 10 0 0 0 20 0" /></svg>, // Simplified eye/scan icon representation
                        text: "AI Liveness Detection"
                    }
                ]}
            />

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Verify Your Traders in Minutes"
                ctaText="Stop losing leads to manual document reviews. Automate your compliance today."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={featuresList}
                contactTitle="Need help?"
                contactText="Our compliance specialists can help you configure your verification levels for specific licenses."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    <h1>Automated KYC/AML Verification Solution</h1>
                    <p>
                        Automated KYC/AML Verification is the critical &quot;Gatekeeper&quot; of any modern brokerage or prop firm. In a world where traders expect instant access to markets, the traditional manual review of passports and utility bills is a major bottleneck that leads to high abandonment rates. Our solution bridges this gap by integrating Tier-1 identity verification providers—Sumsub and Onfido—directly into your Client Portal and CRM.
                    </p>
                    <p>
                        For fintech founders and compliance officers, this system provides a robust defense against fraud, money laundering, and underage trading. The system utilizes advanced AI and OCR (Optical Character Recognition) to extract data from thousands of ID types globally, cross-referencing them with international watchlists in real-time. By automating these checks, you ensure that only legitimate, verified traders reach your deposit page, significantly reducing your firm&apos;s regulatory risk.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Frictionless Onboarding</h3>
                            <p className="text-sm text-gray-700">AI-powered document capture ensures traders can upload ID photos via mobile or web with ease.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Continuous AML Monitoring</h3>
                            <p className="text-sm text-gray-700">Beyond the initial check, the system monitors global sanction lists for any status changes in your existing client base.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Fraud Prevention Suite</h3>
                            <p className="text-sm text-gray-700">Detect sophisticated fraud attempts, including deepfakes, photos of screens, and forged documents.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Unified Compliance Dashboard</h3>
                            <p className="text-sm text-gray-700">Manage all verification statuses, rejections, and manual overrides from a single, secure administrative interface.</p>
                        </div>
                    </div>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our verification infrastructure is built to handle thousands of concurrent check requests, ensuring your growth is never limited by compliance speed.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>98.5%</strong>
                            <span>Average First-Time Pass Rate</span>
                        </div>
                        <div className="statBox">
                            <strong>&lt; 60s</strong>
                            <span>Average Response Time<br />AI-driven verification</span>
                        </div>
                        <div className="statBox">
                            <strong>6,500+</strong>
                            <span>Supported ID Types</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Real-Time API Monitoring</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why Automated KYC/AML Verification?</h2>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Drop-offs
                            </h4>
                            <p>Drastic Reduction in Drop-offs: Traders who are verified instantly are significantly more likely to make their first deposit immediately.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Error
                            </h4>
                            <p>Eliminate Human Error: AI doesn't get tired; it identifies subtle forgeries and inconsistent data that manual reviewers might miss.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Costs
                            </h4>
                            <p>Lower Operational Costs: Remove the need for a large, in-house compliance team to review documents 24/7.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Peace
                            </h4>
                            <p>Regulatory Peace of Mind: Meet the strict "Due Diligence" requirements of regulators like CySEC, ASIC, and the FCA with ease.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Privacy
                            </h4>
                            <p>Enhanced Data Privacy: By using tokenized verification, sensitive ID data is handled by certified providers, reducing your firm's data liability.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                Tiers
                            </h4>
                            <p>Customizable Risk Tiers: Set different verification requirements based on the trader’s country or their planned deposit volume.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                                Mobile
                            </h4>
                            <p>Mobile-First Experience: Native mobile SDKs allow traders to use their smartphone camera for seamless "Liveness" and ID capture.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        Maintaining your brand’s trust is paramount during the sensitive verification process. Our integration is designed to feel like a native part of your platform.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                Embedded Verification UI
                            </h4>
                            <p>Integrate the verification &quot;WebSDK&quot; directly into your Client Portal so traders never feel like they are being redirected to a third party.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                Custom Branded Emails
                            </h4>
                            <p>Automated &quot;Success&quot; or &quot;Required Action&quot; emails are sent from your domain, featuring your firm&apos;s logo and tone of voice.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                Themed Capture Flows
                            </h4>
                            <p>Adjust the colors, buttons, and instructions within the verification modal to perfectly match your brand&apos;s style guide.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                Localized Language Support
                            </h4>
                            <p>The verification interface automatically adapts to the trader&apos;s local language, ensuring clarity and trust during the ID upload process.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        The processing of PII (Personally Identifiable Information) requires the highest tier of data security and server redundancy.
                    </p>
                    <h3>Data Center Locations</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Global
                            </h4>
                            <p>Global Nodes: Geographically distributed to comply with local data residency laws.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                London
                            </h4>
                            <p>London, UK: Tier-4 Compliance Hub.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Frankfurt
                            </h4>
                            <p>Frankfurt, Germany: GDPR-Optimized Hosting.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Singapore
                            </h4>
                            <p>Singapore: Asian Security Node.</p>
                        </div>
                    </div>

                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                AES-256
                            </h4>
                            <p>AES-256 Encryption: All data in transit and at rest is protected by military-grade encryption.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                SOC2
                            </h4>
                            <p>SOC2 & ISO 27001: Hosting environments that meet the gold standards of information security.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
                                Tunnels
                            </h4>
                            <p>Redundant API Tunnels: Secondary gateways to ensure that if one provider node is slow, the system stays responsive.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Token
                            </h4>
                            <p>Tokenized Data Handling: We store "Verification Tokens" rather than raw ID images wherever possible to maximize security.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                DDoS
                            </h4>
                            <p>DDoS Hardening: Enterprise-level protection to ensure your onboarding flow remains live during peak volatility.</p>
                        </div>
                    </div>
                    <div className="infoBox">
                        <p><strong>Compliance Note:</strong> Our integration ensures that your firm is GDPR and CCPA compliant. We provide the technical framework for the Right to be Forgotten and secure data access requests.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Comprehensive tools designed to manage the full lifecycle of a trader&apos;s identity verification.</p>

                    <h3>Identity Features</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                Docs
                            </h4>
                            <p>Document Verification: Automatic recognition of Passports, ID cards, and Driver's Licenses.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
                                Liveness
                            </h4>
                            <p>Liveness & Face Match: Comparing a real-time "selfie" with the document photo to ensure the person is present.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                PoA
                            </h4>
                            <p>Proof of Address (PoA): Automated extraction and verification of utility bills and bank statements.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                Check
                            </h4>
                            <p>Cross-Check Database: Matching user data against global birth and residency registries.</p>
                        </div>
                    </div>

                    <h3>AML & Risk Features</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                Sanction
                            </h4>
                            <p>Sanction List Screening: OFAC, UN, HMT, and EU list checks.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                PEP
                            </h4>
                            <p>PEP Screening: Identifying "Politically Exposed Persons" for enhanced due diligence.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
                                Media
                            </h4>
                            <p>Adverse Media: Screening for negative news associated with the user.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                Monitor
                            </h4>
                            <p>Ongoing Monitoring: Daily re-screening of your active user base.</p>
                        </div>
                    </div>

                    <h3>Management Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M2 12h20M2 12a10 10 0 0 1 20 0M2 12a10 10 0 0 0 20 0" /></svg>
                                Review
                            </h4>
                            <p>Manual Review Portal: For "Borderline" cases that require a human compliance officer's final say.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Audit
                            </h4>
                            <p>Audit Trail Generation: Detailed logs for every check, ready for regulatory inspections.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                                Logic
                            </h4>
                            <p>Custom Logic Engine: e.g., "If from Country A, require 2 forms of ID; if from Country B, require Video ID."</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>Our KYC/AML solution is designed to be the &quot;Check Engine&quot; for your registration and payout workflows.</p>

                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" /></svg>
                                Retry
                            </h4>
                            <p>Programmatically trigger a "Re-verify" request if a trader's ID expires.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Certs
                            </h4>
                            <p>Fetch PDF verification certificates for your compliance archives.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                Score
                            </h4>
                            <p>Management of "Risk Scores" to flag high-risk accounts to your sales team.</p>
                        </div>
                    </div>

                    <h3>Gateway & Connectivity API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                Bridge
                            </h4>
                            <p>Sumsub/Onfido Bridge: Native API tunnels that handle all complex data transformations.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
                                Sync
                            </h4>
                            <p>CRM Sync: Instant status updates (Approved/Rejected/Pending) to your Broker CRM.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
                                Block
                            </h4>
                            <p>Withdrawal Gateways: Block payouts automatically via API if a trader's KYC status is not "Approved."</p>
                        </div>
                    </div>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a lightweight Web SDK and Mobile SDKs (iOS/Android). This allows your developers to launch the verification flow with just a few lines of code. The SDK handles the camera permissions, image compression, and secure upload, providing a &quot;Result&quot; back to your application so you can immediately move the trader to the next step.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is based on a &quot;Pay-as-you-go&quot; model per verification check, ensuring you only pay for the volume you actually process.</p>

                    <h3>What’s Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                Integrate
                            </h4>
                            <p>Integration with 1 chosen provider (Sumsub or Onfido).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                                SDK
                            </h4>
                            <p>Full Web & Mobile SDK access.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
                                AML
                            </h4>
                            <p>Basic AML screening (Sanctions/PEP).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" /></svg>
                                Sync
                            </h4>
                            <p>Automated status syncing with your CRM.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                24/7
                            </h4>
                            <p>24/7 Infrastructure monitoring.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Updates
                            </h4>
                            <p>Quarterly compliance updates to matching new ID types.</p>
                        </div>
                    </div>

                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
                                Video
                            </h4>
                            <p>Video Verification (Live Agent calls).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Corporate
                            </h4>
                            <p>Corporate KYC (KYB) for institutional clients.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Enhanced
                            </h4>
                            <p>Enhanced AML (Adverse Media + Social Media checks).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                PoA
                            </h4>
                            <p>Automated Proof of Address (PoA) extraction.</p>
                        </div>
                    </div>

                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>01</span>
                                Account
                            </h4>
                            <p>Provider Account Setup (Days 1-2): Securing your API credentials from Sumsub/Onfido.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>02</span>
                                Config
                            </h4>
                            <p>Workflow Configuration (Days 2-3): Defining your "Pass/Fail" rules and required levels.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>03</span>
                                UI/UX
                            </h4>
                            <p>UI/UX Integration (Days 3-5): Embedding the SDK into your portal or mobile app.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>04</span>
                                Test
                            </h4>
                            <p>Sandbox Testing (Days 5-7): Running test IDs through the system to verify CRM sync.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>05</span>
                                Live
                            </h4>
                            <p>Go-Live (Day X): Production activation for all new registrations.</p>
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
