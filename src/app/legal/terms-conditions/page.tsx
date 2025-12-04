import { Metadata } from 'next';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
    title: 'Terms & Conditions | Service Agreement | FxTrusts',
    description: 'Terms and conditions governing the use of FxTrusts platform and services. Legal agreement for all users and brokerage operators.',
    keywords: ['terms of service', 'terms and conditions', 'user agreement', 'service agreement', 'legal terms'],
};

export default function TermsPage() {
    const tableOfContents = [
        { id: 'acceptance', title: 'Acceptance of Terms' },
        { id: 'services', title: 'Description of Services' },
        { id: 'obligations', title: 'User Obligations' },
        { id: 'payment', title: 'Payment Terms' },
        { id: 'ip', title: 'Intellectual Property' },
        { id: 'liability', title: 'Limitation of Liability' },
        { id: 'termination', title: 'Termination' },
    ];

    const relatedLinks = [
        { title: 'Privacy Policy', href: '/legal/privacy-policy', readTime: '8 min' },
        { title: 'Refund Policy', href: '/legal/refund-policy', readTime: '4 min' },
        { title: 'Risk Disclosure', href: '/legal/risk-disclosure', readTime: '6 min' },
    ];

    const quickFacts = [
        { label: 'Effective', value: 'Dec 2024' },
        { label: 'Version', value: '2.1' },
        { label: 'Jurisdiction', value: 'UK Law' },
        { label: 'Updates', value: 'Quarterly' },
    ];

    return (
        <main>
            <PageHeader
                title="Terms & Conditions"
                subtitle="Legal agreement governing your use of FxTrusts services."
                badge="Legal"
            />
            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Have Questions?"
                ctaText="Our legal team can clarify any terms."
                ctaButtonText="Contact Us"
                ctaButtonHref="/company/contact"
            >
                <h1>Terms and Conditions</h1>
                <p>
                    These Terms and Conditions ("Agreement") constitute a legally binding contract between you ("Client," "you," or "your") and FxTrusts Ltd ("FxTrusts," "we," "us," or "our") governing your access to and use of our platform, software, and related services.
                </p>
                <p>
                    By accessing or using FxTrusts services, you acknowledge that you have read, understood, and agree to be bound by this Agreement. If you do not agree to these terms, you may not use our services.
                </p>
                <p>
                    <strong>Effective Date:</strong> December 1, 2024<br />
                    <strong>Version:</strong> 2.1
                </p>

                <h2 id="acceptance">Acceptance of Terms</h2>
                <p>
                    By creating an account, subscribing to services, or otherwise accessing the FxTrusts platform, you represent and warrant that:
                </p>
                <ul>
                    <li>You are at least 18 years of age and have the legal capacity to enter into contracts</li>
                    <li>You have the authority to bind the business entity you represent (if applicable)</li>
                    <li>You will comply with all applicable laws and regulations in your jurisdiction</li>
                    <li>All information you provide is accurate, complete, and current</li>
                    <li>You will maintain the confidentiality of your account credentials</li>
                </ul>

                <h3>Updates to Terms</h3>
                <p>
                    We may modify these terms at any time by posting updated terms on our website. Material changes will be communicated via email at least 30 days before taking effect. Your continued use of services after changes become effective constitutes acceptance of the modified terms.
                </p>

                <h2 id="services">Description of Services</h2>
                <p>
                    FxTrusts provides technology solutions for forex and cryptocurrency brokerages, including:
                </p>

                <h3>Core Services</h3>
                <ul>
                    <li><strong>CRM Platform:</strong> Client relationship management and back-office operations</li>
                    <li><strong>White Label Solutions:</strong> MetaTrader 5 white label and branding services</li>
                    <li><strong>Liquidity Access:</strong> Connection to aggregated liquidity providers</li>
                    <li><strong>Client Portal:</strong> Trader-facing account management interface</li>
                    <li><strong>IB System:</strong> Introducing broker management and commission tracking</li>
                    <li><strong>Payment Processing:</strong> Integration with payment service providers</li>
                </ul>

                <h3>Service Availability</h3>
                <p>
                    We strive to maintain 99.9% uptime for critical services. However, we reserve the right to perform scheduled maintenance, upgrades, and modifications as necessary. We will provide reasonable advance notice of planned downtime when possible.
                </p>

                <h3>Service Modifications</h3>
                <p>
                    We may modify, suspend, or discontinue any aspect of our services at any time. For material changes affecting your operations, we will provide at least 30 days' notice and work with you on transition arrangements.
                </p>

                <h2 id="obligations">User Obligations</h2>
                <p>
                    As a user of FxTrusts services, you agree to:
                </p>

                <h3>Compliance Requirements</h3>
                <ul>
                    <li>Obtain and maintain all necessary licenses and regulatory approvals to operate a brokerage in your jurisdiction</li>
                    <li>Implement appropriate AML/KYC procedures for your end clients</li>
                    <li>Maintain accurate books and records as required by applicable regulations</li>
                    <li>Promptly notify us of any regulatory actions, investigations, or material changes to your business</li>
                </ul>

                <h3>Prohibited Activities</h3>
                <p>
                    You may not use our services to:
                </p>
                <ul>
                    <li>Operate in jurisdictions where you are not licensed or authorized</li>
                    <li>Solicit clients from prohibited countries or sanctioned entities</li>
                    <li>Engage in market manipulation, fraud, or other illegal activities</li>
                    <li>Violate intellectual property rights or third-party rights</li>
                    <li>Interfere with platform security or attempt unauthorized access</li>
                    <li>Reverse engineer, decompile, or extract source code</li>
                    <li>Resell or sublicense services without written authorization</li>
                </ul>

                <div className="warningBox">
                    <p>
                        <strong>Regulatory Responsibility:</strong> You are solely responsible for ensuring your brokerage operations comply with all applicable laws. FxTrusts provides technology services only and does not provide legal, regulatory, or compliance advice.
                    </p>
                </div>

                <h2 id="payment">Payment Terms</h2>
                <p>
                    All fees are as specified in your service agreement or the current pricing available on our website.
                </p>

                <h3>Billing and Payment</h3>
                <ul>
                    <li><strong>Billing Cycle:</strong> Monthly, billed in advance on the first of each month</li>
                    <li><strong>Payment Methods:</strong> Credit card, bank transfer, or cryptocurrency</li>
                    <li><strong>Currency:</strong> All fees are in USD unless otherwise specified</li>
                    <li><strong>Due Date:</strong> Payment is due upon invoice. Net-15 terms available for established clients</li>
                </ul>

                <h3>Late Payment</h3>
                <p>
                    Payments not received within 15 days of the due date may result in:
                </p>
                <ul>
                    <li>Late fee of 1.5% per month on the outstanding balance</li>
                    <li>Suspension of services until the account is current</li>
                    <li>Termination of services with 7 days' notice</li>
                    <li>Collection action for recovery of outstanding amounts</li>
                </ul>

                <h3>Taxes</h3>
                <p>
                    All fees are exclusive of applicable taxes. You are responsible for paying all taxes, duties, and levies imposed by your jurisdiction. We will add VAT to invoices where required by law.
                </p>

                <h2 id="ip">Intellectual Property</h2>
                <p>
                    All intellectual property rights in the FxTrusts platform, software, documentation, and related materials remain our exclusive property.
                </p>

                <h3>License Grant</h3>
                <p>
                    Subject to this Agreement, we grant you a limited, non-exclusive, non-transferable license to use our services solely for your internal business operations during the subscription term.
                </p>

                <h3>Your Content</h3>
                <p>
                    You retain ownership of content you upload to the platform (logos, branding, client data). You grant us a limited license to host, display, and process this content as necessary to provide services.
                </p>

                <h3>Feedback</h3>
                <p>
                    Any feedback, suggestions, or ideas you provide may be used by us without compensation or attribution to develop and improve our services.
                </p>

                <h2 id="liability">Limitation of Liability</h2>
                <p>
                    To the maximum extent permitted by applicable law:
                </p>

                <h3>Disclaimer of Warranties</h3>
                <p>
                    Services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>

                <h3>Limitation of Damages</h3>
                <p>
                    In no event shall FxTrusts be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul>
                    <li>Lost profits, revenue, or business opportunities</li>
                    <li>Trading losses incurred by you or your clients</li>
                    <li>Data loss or corruption</li>
                    <li>Cost of procurement of substitute services</li>
                </ul>

                <h3>Maximum Liability</h3>
                <p>
                    Our total aggregate liability for all claims arising under this Agreement shall not exceed the fees paid by you during the twelve (12) months preceding the claim.
                </p>

                <h2 id="termination">Termination</h2>
                <p>
                    Either party may terminate this Agreement as follows:
                </p>

                <h3>Termination for Convenience</h3>
                <p>
                    You may terminate your subscription at any time with 30 days' written notice. We may terminate with 90 days' written notice.
                </p>

                <h3>Termination for Cause</h3>
                <p>
                    Either party may terminate immediately if the other party:
                </p>
                <ul>
                    <li>Materially breaches the Agreement and fails to cure within 30 days of notice</li>
                    <li>Becomes insolvent, files for bankruptcy, or makes an assignment for creditors</li>
                    <li>Engages in fraudulent or illegal activities</li>
                </ul>

                <h3>Effect of Termination</h3>
                <ul>
                    <li>Access to services will be terminated</li>
                    <li>You may export your data within 30 days of termination</li>
                    <li>You remain liable for all fees incurred through termination date</li>
                    <li>Provisions that by their nature should survive will remain in effect</li>
                </ul>

                <h3>Contact Information</h3>
                <p>
                    For questions about these terms, please contact:
                </p>
                <ul>
                    <li><strong>Email:</strong> business@fxtrusts.com</li>
                    <li><strong>Address:</strong> FxTrusts Ltd, Legal Department, [Address]</li>
                </ul>
            </ContentPageLayout>
        </main>
    );
}
