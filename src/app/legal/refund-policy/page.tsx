import { Metadata } from 'next';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
    title: 'Refund Policy | Money Back Guarantee | FxTrusts',
    description: 'FxTrusts refund policy detailing our 30-day money-back guarantee, refund eligibility, and cancellation procedures.',
    keywords: ['refund policy', 'money back guarantee', 'cancellation', 'subscription refund', 'refund terms'],
};

export default function RefundPolicyPage() {
    const tableOfContents = [
        { id: 'guarantee', title: 'Money Back Guarantee' },
        { id: 'eligibility', title: 'Refund Eligibility' },
        { id: 'process', title: 'Refund Process' },
        { id: 'cancellation', title: 'Cancellation Policy' },
        { id: 'exceptions', title: 'Exceptions' },
        { id: 'contact', title: 'Contact Us' },
    ];

    const relatedLinks = [
        { title: 'Terms of Service', href: '/legal/terms-conditions', readTime: '10 min' },
        { title: 'Privacy Policy', href: '/legal/privacy-policy', readTime: '8 min' },
        { title: 'Pricing', href: '/pricing', readTime: '3 min' },
    ];

    const quickFacts = [
        { label: 'Guarantee', value: '30 days' },
        { label: 'Processing', value: '5-7 days' },
        { label: 'Method', value: 'Original' },
        { label: 'Last Update', value: 'Dec 2024' },
    ];

    return (
        <main>
            <PageHeader
                title="Refund Policy"
                subtitle="Our commitment to your satisfaction with a 30-day money-back guarantee."
                badge="Legal"
            />
            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Need a Refund?"
                ctaText="Our billing team processes refunds quickly."
                ctaButtonText="Contact Billing"
                ctaButtonHref="/company/contact"
            >
                <h1>Refund Policy</h1>
                <p>
                    At FxTrusts, we are confident in the quality of our platform and services. We offer a straightforward 30-day money-back guarantee to ensure you can evaluate our solution risk-free. This policy outlines the terms, eligibility requirements, and procedures for requesting refunds.
                </p>
                <p>
                    <strong>Effective Date:</strong> December 1, 2024<br />
                    <strong>Last Updated:</strong> December 1, 2024
                </p>

                <h2 id="guarantee">30-Day Money-Back Guarantee</h2>
                <p>
                    We offer a full refund of your initial subscription fee within 30 days of your first payment if you are not satisfied with our services for any reason. This guarantee applies to new customers only and is limited to the first month's subscription fee.
                </p>

                <div className="infoBox">
                    <p>
                        <strong>No Questions Asked:</strong> During the first 30 days, you can request a refund for any reason—whether the platform doesn't meet your needs, you've reconsidered your business plans, or simply changed your mind. We respect your decision.
                    </p>
                </div>

                <h3>What's Covered</h3>
                <ul>
                    <li>Monthly subscription fees (CRM, Client Portal, IB System)</li>
                    <li>White label setup fees (if refunded within 30 days of setup completion)</li>
                    <li>Add-on services purchased with initial subscription</li>
                </ul>

                <h3>What's Not Covered</h3>
                <ul>
                    <li>Third-party fees (MetaQuotes licensing, payment processor fees)</li>
                    <li>Custom development work completed to specification</li>
                    <li>Transaction fees or usage-based charges</li>
                    <li>Domain registration and SSL certificates</li>
                </ul>

                <h2 id="eligibility">Refund Eligibility</h2>
                <p>
                    To be eligible for a refund under our money-back guarantee, you must meet the following criteria:
                </p>

                <h3>New Customer Guarantee (First 30 Days)</h3>
                <ul>
                    <li>You are a first-time FxTrusts customer</li>
                    <li>You request the refund within 30 days of your first payment</li>
                    <li>You have not previously received a refund from FxTrusts</li>
                    <li>Your account is in good standing (no fraud or abuse)</li>
                </ul>

                <h3>Existing Customer Refunds</h3>
                <p>
                    After the initial 30-day period, refunds are considered on a case-by-case basis for:
                </p>
                <ul>
                    <li><strong>Service Failures:</strong> Extended outages or failures in service delivery that significantly impacted your operations</li>
                    <li><strong>Billing Errors:</strong> Incorrect charges, duplicate payments, or pricing discrepancies</li>
                    <li><strong>Feature Misrepresentation:</strong> Services materially different from documented specifications</li>
                    <li><strong>Early Termination:</strong> Pro-rated refunds may be provided for annual plans cancelled mid-term</li>
                </ul>

                <h3>Refund Amounts</h3>
                <ul>
                    <li><strong>First 30 Days:</strong> 100% refund of subscription fees</li>
                    <li><strong>Annual Plans (after 30 days):</strong> Pro-rated refund minus a 15% early termination fee</li>
                    <li><strong>Service Failure:</strong> Proportional credit based on downtime duration</li>
                </ul>

                <h2 id="process">Refund Process</h2>
                <p>
                    Follow these steps to request a refund:
                </p>

                <h3>Step 1: Submit Request</h3>
                <p>
                    Contact our billing team through one of the following channels:
                </p>
                <ul>
                    <li><strong>Email:</strong> business@fxtrusts.com</li>
                    <li><strong>Dashboard:</strong> Settings → Billing → Request Refund</li>
                    <li><strong>Support Chat:</strong> Available 24/7 in your dashboard</li>
                </ul>

                <h3>Step 2: Provide Information</h3>
                <p>
                    Include the following in your request:
                </p>
                <ul>
                    <li>Your account email and company name</li>
                    <li>Invoice number(s) for the charges to be refunded</li>
                    <li>Reason for the refund request (helps us improve)</li>
                    <li>Preferred refund method (if different from original payment)</li>
                </ul>

                <h3>Step 3: Review</h3>
                <p>
                    Our billing team will review your request within 1-2 business days. For straightforward refunds within the guarantee period, approval is typically immediate.
                </p>

                <h3>Step 4: Processing</h3>
                <p>
                    Once approved:
                </p>
                <ul>
                    <li><strong>Credit Card:</strong> Refunded to original card within 5-7 business days</li>
                    <li><strong>Bank Transfer:</strong> Processed within 5-10 business days</li>
                    <li><strong>Cryptocurrency:</strong> Refunded to provided wallet address within 24 hours</li>
                    <li><strong>Account Credit:</strong> Applied immediately (available for future charges)</li>
                </ul>

                <h2 id="cancellation">Cancellation Policy</h2>
                <p>
                    You may cancel your FxTrusts subscription at any time. Here's what happens when you cancel:
                </p>

                <h3>Monthly Subscriptions</h3>
                <ul>
                    <li>Service continues until the end of your current billing period</li>
                    <li>No refund for partial months (you've already paid for this period)</li>
                    <li>Access to export data for 30 days after cancellation</li>
                    <li>Data deleted after 30 days unless you request an extension</li>
                </ul>

                <h3>Annual Subscriptions</h3>
                <ul>
                    <li>If within 30 days: Full refund available</li>
                    <li>After 30 days: Pro-rated refund minus 15% early termination fee</li>
                    <li>Service continues until refund is processed</li>
                    <li>30-day data export window after cancellation</li>
                </ul>

                <h3>How to Cancel</h3>
                <ol>
                    <li>Log into your FxTrusts dashboard</li>
                    <li>Navigate to Settings → Subscription</li>
                    <li>Click "Cancel Subscription"</li>
                    <li>Complete the brief cancellation survey</li>
                    <li>Confirm cancellation</li>
                </ol>
                <p>
                    You will receive a confirmation email with details about your final invoice and data export options.
                </p>

                <h2 id="exceptions">Exceptions and Special Cases</h2>
                <p>
                    Certain circumstances may affect refund eligibility:
                </p>

                <h3>Non-Refundable Items</h3>
                <ul>
                    <li><strong>Custom Development:</strong> Bespoke development work delivered to your specifications is non-refundable once completed and accepted</li>
                    <li><strong>Third-Party Fees:</strong> Fees paid to third parties (MetaQuotes, payment processors, verification services) are handled by those providers</li>
                    <li><strong>Server Migration:</strong> One-time migration fees are non-refundable after migration is complete</li>
                    <li><strong>Training Sessions:</strong> Completed training or onboarding sessions</li>
                </ul>

                <h3>Abuse Prevention</h3>
                <p>
                    We reserve the right to decline refund requests if we detect patterns of abuse, including:
                </p>
                <ul>
                    <li>Repeated sign-ups and refund requests</li>
                    <li>Operating a live brokerage during the refund period</li>
                    <li>Fraudulent activity or terms of service violations</li>
                </ul>

                <h3>Disputes</h3>
                <p>
                    If you believe your refund request was incorrectly denied, you may escalate to our management team at business@fxtrusts.com. We aim to resolve all disputes within 5 business days.
                </p>

                <h2 id="contact">Contact Billing</h2>
                <p>
                    For refund requests, billing questions, or payment disputes, contact our billing team:
                </p>
                <ul>
                    <li><strong>Email:</strong> business@fxtrusts.com</li>
                    <li><strong>Response Time:</strong> Within 4 business hours</li>
                    <li><strong>Hours:</strong> 24/7 support available</li>
                </ul>
                <p>
                    When contacting billing, please have your account email and invoice numbers ready to expedite your request.
                </p>
            </ContentPageLayout>
        </main>
    );
}
