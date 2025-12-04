import { Metadata } from 'next';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
    title: 'Help Center | Support Resources | FxTrusts',
    description: 'Comprehensive support resources for FxTrusts platform. Getting started guides, troubleshooting, settings, and frequently asked questions.',
    keywords: ['forex help', 'broker support', 'FxTrusts help', 'trading support', 'help center'],
};

export default function HelpCenterPage() {
    const tableOfContents = [
        { id: 'getting-started', title: 'Getting Started' },
        { id: 'account', title: 'Account Management' },
        { id: 'trading', title: 'Trading Platform' },
        { id: 'deposits', title: 'Deposits & Withdrawals' },
        { id: 'crm', title: 'CRM & Back Office' },
        { id: 'contact', title: 'Contact Support' },
    ];

    const relatedLinks = [
        { title: 'API Documentation', href: '/resources/api-docs', readTime: '8 min' },
        { title: 'System Status', href: '/resources/status', readTime: '1 min' },
        { title: 'How to Start a Broker', href: '/resources/guides/how-to-start-forex-broker', readTime: '22 min' },
    ];

    const quickFacts = [
        { label: 'Articles', value: '200+' },
        { label: 'Videos', value: '50+' },
        { label: 'Response', value: '<1 hour' },
        { label: 'Support', value: '24/7' },
    ];

    return (
        <main>
            <PageHeader
                title="Help Center"
                subtitle="Everything you need to get the most out of FxTrusts."
                badge="Resources"
            />
            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Can't Find What You Need?"
                ctaText="Our support team is available around the clock."
                ctaButtonText="Contact Support"
                ctaButtonHref="/company/contact"
            >
                <h1>FxTrusts Help Center</h1>
                <p>
                    Welcome to the FxTrusts Help Center. This comprehensive resource library contains guides, tutorials, and troubleshooting information to help you make the most of our platform. Whether you're setting up your first brokerage or optimizing an existing operation, you'll find the answers you need here.
                </p>

                <div className="statsGrid">
                    <div className="statBox">
                        <strong>200+</strong>
                        <span>Help Articles</span>
                    </div>
                    <div className="statBox">
                        <strong>50+</strong>
                        <span>Video Tutorials</span>
                    </div>
                    <div className="statBox">
                        <strong>&lt;1hr</strong>
                        <span>Avg Response</span>
                    </div>
                    <div className="statBox">
                        <strong>24/7</strong>
                        <span>Support</span>
                    </div>
                </div>

                <h2 id="getting-started">Getting Started</h2>
                <p>
                    New to FxTrusts? These guides will help you get up and running quickly with the core platform features.
                </p>

                <h3>Initial Setup</h3>
                <ul>
                    <li><strong>Platform Overview</strong> – Understanding the FxTrusts ecosystem</li>
                    <li><strong>Dashboard Navigation</strong> – Finding your way around the back office</li>
                    <li><strong>User Roles & Permissions</strong> – Setting up team access levels</li>
                    <li><strong>Branding Configuration</strong> – Customizing logos, colors, and content</li>
                    <li><strong>Domain Setup</strong> – Connecting your custom domain</li>
                </ul>

                <h3>Quick Start Checklist</h3>
                <ol>
                    <li>Complete your company profile and contact information</li>
                    <li>Upload branding assets (logo, favicon, colors)</li>
                    <li>Configure payment methods for deposits and withdrawals</li>
                    <li>Set up trading conditions (symbols, spreads, leverage)</li>
                    <li>Create your first admin user accounts</li>
                    <li>Test the client registration and deposit flow</li>
                    <li>Review compliance settings (KYC requirements, geo-blocking)</li>
                </ol>

                <div className="infoBox">
                    <p>
                        <strong>Need Hands-On Help?</strong> Our onboarding team provides complimentary setup assistance for all new clients. Request a setup call through your dashboard.
                    </p>
                </div>

                <h2 id="account">Account Management</h2>
                <p>
                    Managing client accounts is a core function of any brokerage. These guides cover the essential account operations.
                </p>

                <h3>Client Accounts</h3>
                <ul>
                    <li><strong>Creating Trading Accounts</strong> – Manual and automated account creation</li>
                    <li><strong>Account Types</strong> – Setting up different account categories (Standard, ECN, Demo)</li>
                    <li><strong>Leverage Configuration</strong> – Per-client and per-symbol leverage rules</li>
                    <li><strong>Account Transfers</strong> – Moving funds between client accounts</li>
                    <li><strong>Account Archiving</strong> – Handling inactive or closed accounts</li>
                </ul>

                <h3>KYC Verification</h3>
                <ul>
                    <li><strong>Verification Workflows</strong> – Configuring document requirements</li>
                    <li><strong>Manual Review</strong> – Processing verification requests</li>
                    <li><strong>SumSub/ShuftiPro Integration</strong> – Automated verification setup</li>
                    <li><strong>Rejection Handling</strong> – Managing failed verifications</li>
                </ul>

                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            Client Search
                        </h4>
                        <p>Find clients by name, email, account number, or custom fields using global search.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
                            Bulk Operations
                        </h4>
                        <p>Export client data, send mass emails, or apply bulk changes to multiple accounts.</p>
                    </div>
                </div>

                <h2 id="trading">Trading Platform</h2>
                <p>
                    Your clients access markets through the MetaTrader 5 platform. These guides help you configure and support the trading experience.
                </p>

                <h3>MT5 Configuration</h3>
                <ul>
                    <li><strong>Symbol Setup</strong> – Adding and configuring trading instruments</li>
                    <li><strong>Groups Configuration</strong> – Creating client groups with different conditions</li>
                    <li><strong>Spread Management</strong> – Setting up fixed, variable, and raw spreads</li>
                    <li><strong>Trading Sessions</strong> – Configuring market hours and holidays</li>
                    <li><strong>Order Execution</strong> – Market vs. instant execution settings</li>
                </ul>

                <h3>Client Support</h3>
                <ul>
                    <li><strong>Platform Downloads</strong> – Where clients get MT5 terminal</li>
                    <li><strong>Login Credentials</strong> – How clients access their accounts</li>
                    <li><strong>Password Reset</strong> – Investor and master password procedures</li>
                    <li><strong>Web Terminal</strong> – Browser-based trading access</li>
                    <li><strong>Mobile Apps</strong> – iOS and Android application setup</li>
                </ul>

                <h3>Common Issues</h3>
                <ul>
                    <li>Connection problems and server status</li>
                    <li>Order execution errors and requotes</li>
                    <li>Chart data issues and missing history</li>
                    <li>Expert Advisor and indicator problems</li>
                    <li>Two-factor authentication setup</li>
                </ul>

                <h2 id="deposits">Deposits & Withdrawals</h2>
                <p>
                    Payment processing is critical for client acquisition and retention. These guides cover all aspects of funds management.
                </p>

                <h3>Payment Methods</h3>
                <ul>
                    <li><strong>Bank Wire</strong> – Processing international wire transfers</li>
                    <li><strong>Card Payments</strong> – Credit and debit card processing</li>
                    <li><strong>E-Wallets</strong> – Skrill, Neteller, and PayPal integration</li>
                    <li><strong>Cryptocurrency</strong> – Bitcoin and stablecoin deposits</li>
                    <li><strong>Local Methods</strong> – Region-specific payment options</li>
                </ul>

                <h3>Deposit Processing</h3>
                <ul>
                    <li><strong>Automatic Credits</strong> – Instant deposit confirmation</li>
                    <li><strong>Manual Processing</strong> – Handling wire transfers and checks</li>
                    <li><strong>Bonus Allocation</strong> – Deposit bonus workflows</li>
                    <li><strong>Currency Conversion</strong> – Multi-currency wallet management</li>
                </ul>

                <h3>Withdrawal Processing</h3>
                <ul>
                    <li><strong>Approval Workflow</strong> – Two-step withdrawal verification</li>
                    <li><strong>Same Method Rule</strong> – Implementing anti-money laundering controls</li>
                    <li><strong>Processing Times</strong> – Setting client expectations</li>
                    <li><strong>Rejection Handling</strong> – Managing incomplete withdrawals</li>
                </ul>

                <h2 id="crm">CRM & Back Office</h2>
                <p>
                    The FxTrusts CRM provides comprehensive tools for managing your brokerage operations.
                </p>

                <h3>Sales & Marketing</h3>
                <ul>
                    <li><strong>Lead Management</strong> – Tracking and nurturing prospects</li>
                    <li><strong>Sales Pipeline</strong> – Managing conversion funnels</li>
                    <li><strong>Email Campaigns</strong> – Creating and sending marketing emails</li>
                    <li><strong>IB Management</strong> – Partner onboarding and commission tracking</li>
                </ul>

                <h3>Reporting</h3>
                <ul>
                    <li><strong>Executive Dashboard</strong> – Key performance indicators</li>
                    <li><strong>Financial Reports</strong> – Revenue, deposits, and P&L</li>
                    <li><strong>Trading Reports</strong> – Volume, positions, and client activity</li>
                    <li><strong>Custom Reports</strong> – Building and scheduling reports</li>
                </ul>

                <h3>System Settings</h3>
                <ul>
                    <li><strong>Email Templates</strong> – Customizing automated messages</li>
                    <li><strong>Notification Rules</strong> – Setting up alerts and triggers</li>
                    <li><strong>Audit Logs</strong> – Reviewing system activity</li>
                    <li><strong>Backup & Export</strong> – Data management procedures</li>
                </ul>

                <h2 id="contact">Contact Support</h2>
                <p>
                    Our support team is available 24 hours a day, 7 days a week, to assist with any questions or issues.
                </p>

                <h3>Support Channels</h3>
                <ul>
                    <li><strong>Live Chat</strong> – Instant support via in-dashboard chat widget</li>
                    <li><strong>Email</strong> – support@fxtrusts.com (response within 1 hour)</li>
                    <li><strong>Telegram</strong> – @fxtrusts_support for quick questions</li>
                    <li><strong>WhatsApp</strong> – +1 (555) 123-4567 for urgent matters</li>
                    <li><strong>Phone</strong> – Scheduled calls available upon request</li>
                </ul>

                <h3>When to Escalate</h3>
                <p>
                    For critical issues affecting trading or payments, use the Priority Support option in your dashboard. This ensures immediate attention from our senior technical team.
                </p>

                <h3>Feature Requests</h3>
                <p>
                    We actively incorporate client feedback into our product roadmap. Submit feature requests through the Ideas Portal in your dashboard, and vote on suggestions from other brokerages.
                </p>
            </ContentPageLayout>
        </main>
    );
}
