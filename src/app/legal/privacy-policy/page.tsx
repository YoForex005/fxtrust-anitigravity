import { Metadata } from 'next';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
    title: 'Privacy Policy | Data Protection | FxTrusts',
    description: 'FxTrusts privacy policy detailing how we collect, use, store, and protect your personal data in compliance with GDPR and global privacy regulations.',
    keywords: ['privacy policy', 'data protection', 'GDPR', 'personal data', 'privacy', 'data security'],
    openGraph: {
        title: 'Privacy Policy | FxTrusts',
        description: 'How we collect, protect, and use your personal information. GDPR compliant.',
        type: 'website',
        url: 'https://fxtrusts.com/legal/privacy-policy',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Privacy Policy | FxTrusts',
        description: 'How we collect, protect, and use your personal information. GDPR compliant.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/legal/privacy-policy',
    },
};

export default function PrivacyPolicyPage() {
    const tableOfContents = [
        { id: 'collection', title: 'Data Collection' },
        { id: 'usage', title: 'How We Use Data' },
        { id: 'sharing', title: 'Data Sharing' },
        { id: 'storage', title: 'Data Storage' },
        { id: 'rights', title: 'Your Rights' },
        { id: 'contact', title: 'Contact Us' },
    ];

    const relatedLinks = [
        { title: 'Terms of Service', href: '/legal/terms-conditions', readTime: '10 min' },
        { title: 'Refund Policy', href: '/legal/refund-policy', readTime: '4 min' },
        { title: 'Risk Disclosure', href: '/legal/risk-disclosure', readTime: '6 min' },
    ];

    const quickFacts = [
        { label: 'Last Updated', value: 'Dec 2024' },
        { label: 'GDPR', value: 'Compliant' },
        { label: 'Data Retention', value: '7 years' },
        { label: 'Encryption', value: 'AES-256' },
    ];

    return (
        <main>
            <PageHeader
                title="Privacy Policy"
                subtitle="How we collect, protect, and use your personal information."
                badge="Legal"
            />
            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Questions About Privacy?"
                ctaText="Our data protection team is here to help."
                ctaButtonText="Contact Us"
                ctaButtonHref="/company/contact"
            >
                
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Privacy Policy | Data Protection | FxTrusts","description":"FxTrusts privacy policy detailing how we collect, use, store, and protect your personal data in compliance with GDPR and global privacy regulations.","url":"https://fxtrusts.com/legal/privacy-policy"}) }}
      />
      <h1>Privacy Policy</h1>
                <p>
                    FxTrusts ("we," "our," or "us") is committed to protecting the privacy and security of personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
                </p>
                <p>
                    This policy applies to all users of FxTrusts services, including brokerage operators, their staff, and end-users of client portals. By accessing or using our services, you consent to the practices described in this policy.
                </p>
                <p>
                    <strong>Effective Date:</strong> December 1, 2024<br />
                    <strong>Last Updated:</strong> December 1, 2024
                </p>

                <h2 id="collection">Information We Collect</h2>
                <p>
                    We collect information you provide directly, information collected automatically, and information from third-party sources.
                </p>

                <h3>Information You Provide</h3>
                <ul>
                    <li><strong>Account Information:</strong> Name, email address, phone number, company name, and job title when you register for an account</li>
                    <li><strong>Profile Data:</strong> Business information, billing address, tax identification numbers</li>
                    <li><strong>Communication Data:</strong> Messages, support requests, and correspondence with our team</li>
                    <li><strong>Payment Information:</strong> Credit card numbers, bank account details for billing purposes (processed by PCI-compliant payment processors)</li>
                    <li><strong>Verification Documents:</strong> Identity documents, proof of address, and corporate documentation for compliance purposes</li>
                </ul>

                <h3>Automatically Collected Information</h3>
                <ul>
                    <li><strong>Usage Data:</strong> Pages visited, features used, actions taken within the platform</li>
                    <li><strong>Device Information:</strong> Browser type, operating system, device identifiers, IP address</li>
                    <li><strong>Log Data:</strong> Access times, error logs, and system diagnostics</li>
                    <li><strong>Cookies:</strong> Session cookies, preference cookies, and analytics cookies</li>
                </ul>

                <h3>Third-Party Sources</h3>
                <ul>
                    <li><strong>Verification Services:</strong> Identity verification results from SumSub, ShuftiPro, or similar providers</li>
                    <li><strong>Payment Processors:</strong> Transaction confirmations and payment status</li>
                    <li><strong>Business Partners:</strong> Referral information from introducing brokers or affiliates</li>
                </ul>

                <h2 id="usage">How We Use Your Information</h2>
                <p>
                    We use collected information for the following purposes:
                </p>

                <h3>Service Provision</h3>
                <ul>
                    <li>Creating and managing your account</li>
                    <li>Processing transactions and payments</li>
                    <li>Providing customer support and responding to inquiries</li>
                    <li>Delivering requested products and features</li>
                    <li>Sending service-related communications (receipts, updates, security alerts)</li>
                </ul>

                <h3>Business Operations</h3>
                <ul>
                    <li>Analyzing usage patterns to improve our services</li>
                    <li>Developing new products and features</li>
                    <li>Monitoring system performance and reliability</li>
                    <li>Preventing fraud and ensuring platform security</li>
                    <li>Enforcing our terms of service and acceptable use policies</li>
                </ul>

                <h3>Marketing and Communication</h3>
                <ul>
                    <li>Sending promotional materials (with your consent)</li>
                    <li>Informing you about product updates and new features</li>
                    <li>Conducting surveys and research</li>
                    <li>Personalizing your experience based on preferences</li>
                </ul>

                <div className="infoBox">
                    <p>
                        <strong>Marketing Opt-Out:</strong> You may opt out of marketing communications at any time by clicking the unsubscribe link in any email or updating your communication preferences in your account settings.
                    </p>
                </div>

                <h2 id="sharing">Information Sharing</h2>
                <p>
                    We do not sell your personal information. We may share your information in the following circumstances:
                </p>

                <h3>Service Providers</h3>
                <p>
                    We share data with third-party vendors who provide services on our behalf, including:
                </p>
                <ul>
                    <li>Cloud hosting providers (AWS, Google Cloud)</li>
                    <li>Payment processors (Stripe, Checkout.com)</li>
                    <li>Customer support platforms (Zendesk, Intercom)</li>
                    <li>Analytics services (Google Analytics, Mixpanel)</li>
                    <li>Identity verification services (SumSub, ShuftiPro)</li>
                </ul>
                <p>
                    These providers are contractually bound to protect your data and use it only for the services they provide to us.
                </p>

                <h3>Legal Requirements</h3>
                <p>
                    We may disclose your information when required by law, including:
                </p>
                <ul>
                    <li>Responding to court orders, subpoenas, or legal process</li>
                    <li>Cooperating with law enforcement or regulatory authorities</li>
                    <li>Protecting our legal rights or defending against claims</li>
                    <li>Preventing fraud, illegal activities, or security threats</li>
                </ul>

                <h3>Business Transfers</h3>
                <p>
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity. We will notify you of any such transfer and any changes to this privacy policy.
                </p>

                <h2 id="storage">Data Storage and Security</h2>
                <p>
                    We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h3>Security Measures</h3>
                <ul>
                    <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                    <li><strong>Access Controls:</strong> Role-based access with multi-factor authentication</li>
                    <li><strong>Monitoring:</strong> 24/7 security monitoring and intrusion detection</li>
                    <li><strong>Audits:</strong> Regular third-party security assessments and penetration testing</li>
                    <li><strong>Compliance:</strong> SOC 2 Type II certified data centers</li>
                </ul>

                <h3>Data Retention</h3>
                <p>
                    We retain your personal data for as long as necessary to provide services and comply with legal obligations:
                </p>
                <ul>
                    <li><strong>Active Accounts:</strong> Data retained throughout the account lifecycle</li>
                    <li><strong>Closed Accounts:</strong> Core data retained for 7 years for regulatory compliance</li>
                    <li><strong>Transaction Records:</strong> Retained for 7 years per financial regulations</li>
                    <li><strong>Marketing Data:</strong> Retained until you opt out or 3 years of inactivity</li>
                </ul>

                <h3>Data Location</h3>
                <p>
                    Your data may be processed and stored in the European Union, United Kingdom, United States, or other locations where our service providers operate. All international transfers comply with applicable data protection laws, including GDPR Standard Contractual Clauses.
                </p>

                <h2 id="rights">Your Rights</h2>
                <p>
                    Under GDPR and other applicable privacy laws, you have the following rights regarding your personal data:
                </p>

                <h3>Access and Portability</h3>
                <p>
                    You have the right to request a copy of your personal data in a commonly used, machine-readable format. You can export most data directly from your account settings.
                </p>

                <h3>Correction</h3>
                <p>
                    You have the right to request correction of inaccurate or incomplete personal data. You can update most information directly in your account settings.
                </p>

                <h3>Deletion</h3>
                <p>
                    You have the right to request deletion of your personal data, subject to legal retention requirements. We will delete or anonymize your data upon request unless we are legally required to retain it.
                </p>

                <h3>Restriction and Objection</h3>
                <p>
                    You have the right to restrict processing of your data or object to processing based on our legitimate interests. You can also object to automated decision-making and profiling.
                </p>

                <h3>Exercising Your Rights</h3>
                <p>
                    To exercise any of these rights, contact our Data Protection Officer at business@fxtrusts.com. We will respond to your request within 30 days as required by law.
                </p>

                <h2 id="contact">Contact Us</h2>
                <p>
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <ul>
                    <li><strong>Email:</strong> business@fxtrusts.com</li>
                    <li><strong>Data Protection Officer:</strong> business@fxtrusts.com</li>
                    <li><strong>Postal Address:</strong> FxTrusts Ltd, Data Protection Team, [Address]</li>
                </ul>
                <p>
                    If you are unsatisfied with our response, you have the right to lodge a complaint with your local data protection authority.
                </p>
            </ContentPageLayout>
        </main>
    );
}
