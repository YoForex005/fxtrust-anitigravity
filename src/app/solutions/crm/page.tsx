import { Metadata } from 'next';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHeader from '@/components/PageHeader';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
    title: 'Forex CRM Software | Best Forex Broker CRM System | FxTrusts',
    description: 'Best Forex CRM provider for brokers. Complete forex broker CRM solution with MT5 CRM integration, automated KYC, multi-tier IB system, and marketing automation.',
    keywords: [
        'forex CRM',
        'forex CRM provider',
        'forex broker CRM',
        'best forex CRM',
        'forex CRM software',
        'mt5 CRM',
        'forex CRM system',
        'forex CRM solution',
        'best forex CRM systems',
        'b2b CRM',
        'forex CRM developer',
        'mt4 CRM',
        'business forex CRM solution',
        'forex back office',
        'brokerage CRM',
        'leverate CRM alternative',
    ],
    openGraph: {
        title: 'Forex CRM Software | Built for Brokers',
        description: 'Scalable CRM with automated KYC, multi-tier IB system, and complete client lifecycle management.',
        type: 'website',
        url: 'https://fxtrusts.com/solutions/crm',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/crm',
    },
};

export default function CRMPage() {
    const tableOfContents = [
        { id: 'overview', title: 'CRM Overview' },
        { id: 'client-management', title: 'Client Management' },
        { id: 'kyc-aml', title: 'KYC & AML' },
        { id: 'ib-system', title: 'IB Partner System' },
        { id: 'marketing', title: 'Marketing Automation' },
        { id: 'reporting', title: 'Reporting & Analytics' },
        { id: 'integration', title: 'Platform Integration' },
        { id: 'faq', title: 'FAQ' },
    ];

    const relatedLinks = [
        { title: 'MT5 White Label', href: '/solutions/mt5', readTime: '5 min' },
        { title: 'Liquidity Solutions', href: '/solutions/liquidity', readTime: '4 min' },
        { title: 'Copy Trading', href: '/platform/copy-trading', readTime: '4 min' },
    ];

    const quickFacts = [
        { label: 'Setup Time', value: '48 hours' },
        { label: 'Languages', value: '15+' },
        { label: 'Integrations', value: '50+' },
        { label: 'Uptime', value: '99.9%' },
    ];

    const faqs = [
        {
            question: 'What is included in the Forex CRM?',
            answer: 'Everything you\'d expect: client management, lead tracking, automated KYC, multi-tier IB commissions, payment integrations, marketing automation, and reporting dashboards. We apologize for not making you pay extra for each feature—an oversight our competitors would never commit.',
        },
        {
            question: 'Does the CRM integrate with MetaTrader 5?',
            answer: 'Yes. Native MT5 integration via the Manager API. Accounts create themselves, balances sync automatically, and trading data appears like magic. We regret to inform you there\'s no 6-week "integration project" to bill you for.',
        },
        {
            question: 'How long does CRM setup take?',
            answer: '48 hours. Yes, really. Configuration, branding, payment gateways, and staff training—all done before your competitor\'s sales team has even sent you a quote. We understand this timeline may cause confusion.',
        },
        {
            question: 'Can I customize the client portal?',
            answer: 'Fully white-labeled. Colors, logos, layouts, content—all yours. 15+ languages included. We\'ve been told we should charge separately for "premium customization," but we forgot to read that memo.',
        },
        {
            question: 'What KYC providers do you integrate with?',
            answer: 'SumSub, ShuftiPro, and Onfido for the robots. Manual review for the edge cases. Documents get verified, clients get approved, and your compliance team stops staying late. Industry standard? Arguably better.',
        },
        {
            question: 'Is the CRM available in multiple languages?',
            answer: '15+ languages: English, Arabic, Chinese, Spanish, Portuguese, Russian, and more. Your global ambitions are covered. We apologize for not charging per language—another revenue stream we inexplicably ignored.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <PageHeader
                title="Institutional CRM"
                subtitle="The backbone of your brokerage operations—built for scale."
                badge="Solutions"
            />
            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Launch Your Brokerage CRM"
                ctaText="Complete CRM solution ready in 48 hours."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
            >
                <h1>Forex CRM Built for High-Volume Brokers</h1>
                <p>
                    Our CRM isn't just a database—it's a complete automation engine designed specifically for forex and crypto brokerages. From the moment a lead enters your funnel to their tenth trading anniversary, our platform manages the entire client lifecycle with minimal manual intervention.
                </p>
                <p>
                    Unlike generic CRM solutions adapted for finance, our system was built from the ground up for the unique requirements of retail trading operations. Every feature, workflow, and integration is optimized for brokerage-specific use cases.
                </p>

                <h2 id="overview">CRM Overview</h2>
                <p>
                    The FxTrusts CRM provides a unified back-office solution that connects to MetaTrader, payment providers, verification services, and marketing platforms. Your team operates from a single dashboard with complete visibility into client status, trading activity, and business metrics.
                </p>

                <div className="statsGrid">
                    <div className="statBox">
                        <strong>500+</strong>
                        <span>Brokers Live</span>
                    </div>
                    <div className="statBox">
                        <strong>10M+</strong>
                        <span>Clients Managed</span>
                    </div>
                    <div className="statBox">
                        <strong>99.9%</strong>
                        <span>Uptime SLA</span>
                    </div>
                    <div className="statBox">
                        <strong>15+</strong>
                        <span>Languages</span>
                    </div>
                </div>

                <h2 id="client-management">Client Management</h2>
                <p>
                    Comprehensive client profiles provide your team with everything needed to serve and retain clients effectively.
                </p>

                <h3>Client Portal</h3>
                <p>
                    White-labeled client portal where traders manage their accounts, deposit funds, request withdrawals, and access trading platforms. Fully customizable with your branding, colors, and content.
                </p>
                <ul>
                    <li><strong>Account Dashboard</strong> – Balance, equity, margin usage, trading history</li>
                    <li><strong>Deposit & Withdrawal</strong> – Multiple payment method integration</li>
                    <li><strong>Document Upload</strong> – KYC document submission and status tracking</li>
                    <li><strong>Platform Access</strong> – Direct links to MT5 web, desktop, and mobile</li>
                    <li><strong>Support Tickets</strong> – Integrated help desk with live chat</li>
                </ul>

                <h3>Back-Office Client View</h3>
                <p>
                    Your staff sees comprehensive client profiles including:
                </p>
                <ul>
                    <li>Complete trading history and performance metrics</li>
                    <li>All communications (email, chat, calls)</li>
                    <li>Deposit and withdrawal history</li>
                    <li>KYC verification status and documents</li>
                    <li>IB relationships and referral chains</li>
                    <li>Custom notes and follow-up reminders</li>
                </ul>

                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            Multi-Account Types
                        </h4>
                        <p>Standard, ECN, Islamic, Demo, Contest. Configure unlimited account types with different conditions.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            Multi-Currency Wallets
                        </h4>
                        <p>USD, EUR, GBP, crypto wallets per client. Automatic currency conversion at competitive rates.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            Custom Fields
                        </h4>
                        <p>Add unlimited custom fields to client profiles. Capture any data your business needs.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
                            Activity Logging
                        </h4>
                        <p>Complete audit trail of all actions. Know who did what, when, and why.</p>
                    </div>
                </div>

                <h2 id="kyc-aml">KYC & AML Compliance</h2>
                <p>
                    Automated verification workflows that reduce manual processing while maintaining regulatory compliance across jurisdictions.
                </p>

                <h3>Verification Integrations</h3>
                <ul>
                    <li><strong>SumSub</strong> – Identity verification, document check, liveness detection</li>
                    <li><strong>ShuftiPro</strong> – Alternative verification with global coverage</li>
                    <li><strong>Onfido</strong> – Enterprise-grade identity verification</li>
                    <li><strong>Manual Review</strong> – Back-office document review for edge cases</li>
                </ul>

                <h3>Automated Workflows</h3>
                <p>
                    Configure verification requirements by jurisdiction, deposit amount, or client segment. Automatic approval triggers for low-risk clients, escalation queues for manual review.
                </p>

                <h3>AML Monitoring</h3>
                <ul>
                    <li>PEP (Politically Exposed Person) screening</li>
                    <li>Sanctions list checking</li>
                    <li>Suspicious transaction monitoring</li>
                    <li>Automated SAR (Suspicious Activity Report) generation</li>
                </ul>

                <div className="infoBox">
                    <p>
                        <strong>GDPR Compliant:</strong> All client data stored with encryption at rest and in transit. Data retention policies, right to deletion, and export capabilities built in.
                    </p>
                </div>

                <h2 id="ib-system">Introducing Broker (IB) System</h2>
                <p>
                    Our multi-tier IB system automates partner management, commission calculations, and payouts—supporting unlimited hierarchy levels.
                </p>

                <h3>IB Features</h3>
                <ul>
                    <li><strong>Multi-Tier Commissions</strong> – Support for sub-IBs with configurable revenue sharing</li>
                    <li><strong>Automatic Payouts</strong> – Daily, weekly, or monthly commission payments</li>
                    <li><strong>IB Portal</strong> – Partners access their own dashboard with real-time statistics</li>
                    <li><strong>Marketing Materials</strong> – Branded landing pages, banners, tracking links</li>
                    <li><strong>Rebate Options</strong> – Spread rebates, volume rebates, or hybrid models</li>
                    <li><strong>Referral Tracking</strong> – Unique tracking codes with attribution windows</li>
                </ul>

                <h3>Commission Structures</h3>
                <p>
                    Configure any commission model your business requires:
                </p>
                <ul>
                    <li>Fixed per-lot commission ($X per lot traded)</li>
                    <li>Spread markup sharing (percentage of spread)</li>
                    <li>Revenue sharing (percentage of net trading revenue)</li>
                    <li>CPA (cost per acquisition) for new depositing clients</li>
                    <li>Hybrid models combining multiple methods</li>
                </ul>

                <h2 id="marketing">Marketing Automation</h2>
                <p>
                    Convert leads and retain clients with integrated marketing tools—no third-party subscriptions needed.
                </p>

                <h3>Email Marketing</h3>
                <ul>
                    <li><strong>Drag-and-Drop Builder</strong> – Create beautiful emails without coding</li>
                    <li><strong>Automated Campaigns</strong> – Drip sequences triggered by user behavior</li>
                    <li><strong>Segmentation</strong> – Target by deposit level, activity, location, or custom tags</li>
                    <li><strong>A/B Testing</strong> – Test subject lines, content, and send times</li>
                    <li><strong>Deliverability</strong> – Dedicated SMTP with SPF, DKIM, and DMARC</li>
                </ul>

                <h3>Automated Triggers</h3>
                <p>
                    Pre-built automation for common scenarios:
                </p>
                <ul>
                    <li>Welcome series for new registrations</li>
                    <li>Deposit reminders for leads who registered but didn't fund</li>
                    <li>Win-back campaigns for dormant accounts</li>
                    <li>Birthday and anniversary messages</li>
                    <li>KYC completion reminders</li>
                </ul>

                <h2 id="reporting">Reporting & Analytics</h2>
                <p>
                    Real-time dashboards and customizable reports give you complete visibility into business performance.
                </p>

                <h3>Pre-Built Reports</h3>
                <ul>
                    <li><strong>Executive Dashboard</strong> – High-level KPIs, trends, and alerts</li>
                    <li><strong>Sales Pipeline</strong> – Lead to client conversion funnel</li>
                    <li><strong>Deposit & Withdrawal</strong> – Cash flow analysis by payment method</li>
                    <li><strong>Trading Volume</strong> – Volume by symbol, client segment, or time period</li>
                    <li><strong>IB Performance</strong> – Partner rankings, commissions, and client quality</li>
                    <li><strong>Risk Exposure</strong> – Current positions, largest clients, concentration risks</li>
                </ul>

                <h3>Custom Reports</h3>
                <p>
                    Build custom reports with our report builder. Export to CSV, Excel, or PDF. Schedule automatic delivery to stakeholder email addresses.
                </p>

                <h2 id="integration">Platform Integration</h2>
                <p>
                    Our CRM integrates seamlessly with the technology stack modern brokerages need.
                </p>

                <h3>Trading Platforms</h3>
                <ul>
                    <li>MetaTrader 5 – Full Manager API integration</li>
                    <li>MetaTrader 4 – Legacy support available</li>
                    <li>cTrader – Optional integration</li>
                </ul>

                <h3>Payment Providers</h3>
                <ul>
                    <li>Bank wire transfers</li>
                    <li>Credit/Debit cards (Stripe, Checkout.com)</li>
                    <li>E-wallets (Skrill, Neteller, PayPal)</li>
                    <li>Crypto payments (BitPay, Coinbase Commerce)</li>
                    <li>Local payment methods by region</li>
                </ul>

                <h3>Third-Party Services</h3>
                <ul>
                    <li>VoIP systems (Twilio, VoIP.ms, custom SIP)</li>
                    <li>Live chat (Intercom, Zendesk, Tawk.to)</li>
                    <li>Analytics (Google Analytics, Mixpanel)</li>
                    <li>CRM sync (Salesforce, HubSpot via API)</li>
                </ul>

                <h2 id="faq">Frequently Asked Questions</h2>
                <div className="faqGrid">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faqItem">
                            <h4>{faq.question}</h4>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </ContentPageLayout>
        </main>
    );
}
