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
                    <ul>
                        <li><strong>Drastic Reduction in Drop-offs:</strong> Traders who are verified instantly are significantly more likely to make their first deposit immediately.</li>
                        <li><strong>Eliminate Human Error:</strong> AI doesn&apos;t get tired; it identifies subtle forgeries and inconsistent data that manual reviewers might miss.</li>
                        <li><strong>Lower Operational Costs:</strong> Remove the need for a large, in-house compliance team to review documents 24/7.</li>
                        <li><strong>Regulatory Peace of Mind:</strong> Meet the strict &quot;Due Diligence&quot; requirements of regulators like CySEC, ASIC, and the FCA with ease.</li>
                        <li><strong>Enhanced Data Privacy:</strong> By using tokenized verification, sensitive ID data is handled by certified providers, reducing your firm&apos;s data liability.</li>
                        <li><strong>Customizable Risk Tiers:</strong> Set different verification requirements based on the trader’s country or their planned deposit volume.</li>
                        <li><strong>Mobile-First Experience:</strong> Native mobile SDKs allow traders to use their smartphone camera for seamless &quot;Liveness&quot; and ID capture.</li>
                    </ul>
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
                    <ul>
                        <li><strong>Global Nodes:</strong> Geographically distributed to comply with local data residency laws.</li>
                        <li><strong>London, UK:</strong> Tier-4 Compliance Hub.</li>
                        <li><strong>Frankfurt, Germany:</strong> GDPR-Optimized Hosting.</li>
                        <li><strong>Singapore:</strong> Asian Security Node.</li>
                    </ul>

                    <h3>Infrastructure Specifications</h3>
                    <ul>
                        <li><strong>AES-256 Encryption:</strong> All data in transit and at rest is protected by military-grade encryption.</li>
                        <li><strong>SOC2 & ISO 27001:</strong> Hosting environments that meet the gold standards of information security.</li>
                        <li><strong>Redundant API Tunnels:</strong> Secondary gateways to ensure that if one provider node is slow, the system stays responsive.</li>
                        <li><strong>Tokenized Data Handling:</strong> We store &quot;Verification Tokens&quot; rather than raw ID images wherever possible to maximize security.</li>
                        <li><strong>DDoS Hardening:</strong> Enterprise-level protection to ensure your onboarding flow remains live during peak volatility.</li>
                    </ul>
                    <div className="infoBox">
                        <p><strong>Compliance Note:</strong> Our integration ensures that your firm is GDPR and CCPA compliant. We provide the technical framework for the Right to be Forgotten and secure data access requests.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Comprehensive tools designed to manage the full lifecycle of a trader&apos;s identity verification.</p>

                    <h3>Identity Features</h3>
                    <ul>
                        <li><strong>Document Verification:</strong> Automatic recognition of Passports, ID cards, and Driver&apos;s Licenses.</li>
                        <li><strong>Liveness & Face Match:</strong> Comparing a real-time &quot;selfie&quot; with the document photo to ensure the person is present.</li>
                        <li><strong>Proof of Address (PoA):</strong> Automated extraction and verification of utility bills and bank statements.</li>
                        <li><strong>Cross-Check Database:</strong> Matching user data against global birth and residency registries.</li>
                    </ul>

                    <h3>AML & Risk Features</h3>
                    <ul>
                        <li><strong>Sanction List Screening:</strong> OFAC, UN, HMT, and EU list checks.</li>
                        <li><strong>PEP Screening:</strong> Identifying &quot;Politically Exposed Persons&quot; for enhanced due diligence.</li>
                        <li><strong>Adverse Media:</strong> Screening for negative news associated with the user.</li>
                        <li><strong>Ongoing Monitoring:</strong> Daily re-screening of your active user base.</li>
                    </ul>

                    <h3>Management Tools</h3>
                    <ul>
                        <li><strong>Manual Review Portal:</strong> For &quot;Borderline&quot; cases that require a human compliance officer&apos;s final say.</li>
                        <li><strong>Audit Trail Generation:</strong> Detailed logs for every check, ready for regulatory inspections.</li>
                        <li><strong>Custom Logic Engine:</strong> e.g., &quot;If from Country A, require 2 forms of ID; if from Country B, require Video ID.&quot;</li>
                    </ul>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>Our KYC/AML solution is designed to be the &quot;Check Engine&quot; for your registration and payout workflows.</p>

                    <h3>Manager / Admin API</h3>
                    <ul>
                        <li>Programmatically trigger a &quot;Re-verify&quot; request if a trader&apos;s ID expires.</li>
                        <li>Fetch PDF verification certificates for your compliance archives.</li>
                        <li>Management of &quot;Risk Scores&quot; to flag high-risk accounts to your sales team.</li>
                    </ul>

                    <h3>Gateway & Connectivity API</h3>
                    <ul>
                        <li><strong>Sumsub/Onfido Bridge:</strong> Native API tunnels that handle all complex data transformations.</li>
                        <li><strong>CRM Sync:</strong> Instant status updates (Approved/Rejected/Pending) to your Broker CRM.</li>
                        <li><strong>Withdrawal Gateways:</strong> Block payouts automatically via API if a trader&apos;s KYC status is not &quot;Approved.&quot;</li>
                    </ul>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a lightweight Web SDK and Mobile SDKs (iOS/Android). This allows your developers to launch the verification flow with just a few lines of code. The SDK handles the camera permissions, image compression, and secure upload, providing a &quot;Result&quot; back to your application so you can immediately move the trader to the next step.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is based on a &quot;Pay-as-you-go&quot; model per verification check, ensuring you only pay for the volume you actually process.</p>

                    <h3>What’s Included</h3>
                    <ul>
                        <li>Integration with 1 chosen provider (Sumsub or Onfido).</li>
                        <li>Full Web & Mobile SDK access.</li>
                        <li>Basic AML screening (Sanctions/PEP).</li>
                        <li>Automated status syncing with your CRM.</li>
                        <li>24/7 Infrastructure monitoring.</li>
                        <li>Quarterly compliance updates to matching new ID types.</li>
                    </ul>

                    <h3>Optional Add-Ons</h3>
                    <ul>
                        <li>Video Verification (Live Agent calls).</li>
                        <li>Corporate KYC (KYB) for institutional clients.</li>
                        <li>Enhanced AML (Adverse Media + Social Media checks).</li>
                        <li>Automated Proof of Address (PoA) extraction.</li>
                    </ul>

                    <h3>Setup Timeline</h3>
                    <ol>
                        <li><strong>Provider Account Setup (Days 1-2):</strong> Securing your API credentials from Sumsub/Onfido.</li>
                        <li><strong>Workflow Configuration (Days 2-3):</strong> Defining your &quot;Pass/Fail&quot; rules and required levels.</li>
                        <li><strong>UI/UX Integration (Days 3-5):</strong> Embedding the SDK into your portal or mobile app.</li>
                        <li><strong>Sandbox Testing (Days 5-7):</strong> Running test IDs through the system to verify CRM sync.</li>
                        <li><strong>Go-Live (Day X):</strong> Production activation for all new registrations.</li>
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
