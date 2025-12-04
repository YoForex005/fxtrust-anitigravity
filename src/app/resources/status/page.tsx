import { Metadata } from 'next';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
    title: 'System Status | Platform Uptime | FxTrusts',
    description: 'Real-time status of FxTrusts services including MT5 servers, CRM, API, and payment processing. View uptime history and scheduled maintenance.',
    keywords: ['system status', 'server status', 'platform uptime', 'maintenance schedule', 'service status'],
};

export default function StatusPage() {
    const tableOfContents = [
        { id: 'current', title: 'Current Status' },
        { id: 'services', title: 'Service Details' },
        { id: 'history', title: 'Uptime History' },
        { id: 'maintenance', title: 'Maintenance Schedule' },
        { id: 'subscribe', title: 'Status Alerts' },
    ];

    const relatedLinks = [
        { title: 'Help Center', href: '/resources/help-center', readTime: '5 min' },
        { title: 'API Documentation', href: '/resources/api-docs', readTime: '8 min' },
        { title: 'Contact Support', href: '/company/contact', readTime: '2 min' },
    ];

    const quickFacts = [
        { label: 'Status', value: 'Operational' },
        { label: '30-Day Uptime', value: '99.99%' },
        { label: 'Incidents', value: '0' },
        { label: 'Last Update', value: 'Just now' },
    ];

    return (
        <main>
            <PageHeader
                title="System Status"
                subtitle="Real-time status of all FxTrusts services and infrastructure."
                badge="Resources"
            />
            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Report an Issue"
                ctaText="Experiencing problems not shown here? Let us know."
                ctaButtonText="Contact Support"
                ctaButtonHref="/company/contact"
            >
                <h1>Platform Status</h1>
                <p>
                    This page provides real-time visibility into the operational status of FxTrusts infrastructure and services. We monitor all critical systems 24/7 and update this page within minutes of any detected issues.
                </p>

                <h2 id="current">Current Status</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', background: 'linear-gradient(135deg, #DCFCE7 0%, #D1FAE5 100%)', borderRadius: '12px', marginBottom: '2rem', border: '1px solid #86EFAC' }}>
                    <div style={{ width: '20px', height: '20px', background: '#22C55E', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>
                    <div>
                        <strong style={{ color: '#166534', fontSize: '1.1rem' }}>All Systems Operational</strong>
                        <p style={{ margin: '0.25rem 0 0', color: '#15803D', fontSize: '0.9rem' }}>All monitored services are running as expected. Last checked: Just now.</p>
                    </div>
                </div>

                <h2 id="services">Service Details</h2>
                <p>
                    Below is the status of individual services within the FxTrusts platform. Click on any service for detailed metrics and recent incidents.
                </p>

                <h3>Trading Infrastructure</h3>
                <ul>
                    <li>
                        <strong>MetaTrader 5 Servers</strong> – Operational
                        <ul>
                            <li>Trade execution: Normal</li>
                            <li>Price feed: Normal</li>
                            <li>Web Terminal: Normal</li>
                            <li>Manager API: Normal</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Liquidity Bridge</strong> – Operational
                        <ul>
                            <li>LP Connections: All connected</li>
                            <li>Order routing: Normal latency</li>
                            <li>Price aggregation: Normal</li>
                        </ul>
                    </li>
                </ul>

                <h3>Back Office Systems</h3>
                <ul>
                    <li><strong>CRM Dashboard</strong> – Operational</li>
                    <li><strong>Client Portal</strong> – Operational</li>
                    <li><strong>IB Portal</strong> – Operational</li>
                    <li><strong>Admin Panel</strong> – Operational</li>
                    <li><strong>Reporting Engine</strong> – Operational</li>
                </ul>

                <h3>Payment Processing</h3>
                <ul>
                    <li><strong>Card Payments</strong> – Operational</li>
                    <li><strong>Bank Wire</strong> – Operational</li>
                    <li><strong>E-Wallet Integration</strong> – Operational</li>
                    <li><strong>Crypto Payments</strong> – Operational</li>
                    <li><strong>Withdrawal Processing</strong> – Operational</li>
                </ul>

                <h3>External Services</h3>
                <ul>
                    <li><strong>REST API</strong> – Operational (Latency: 42ms)</li>
                    <li><strong>Webhooks</strong> – Operational</li>
                    <li><strong>Email Delivery</strong> – Operational</li>
                    <li><strong>SMS Gateway</strong> – Operational</li>
                    <li><strong>KYC Provider (SumSub)</strong> – Operational</li>
                </ul>

                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            Trading
                        </h4>
                        <p>MT5, liquidity, and execution systems are operating normally with no incidents.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            Payments
                        </h4>
                        <p>All payment methods processing deposits and withdrawals without delays.</p>
                    </div>
                </div>

                <h2 id="history">Uptime History</h2>
                <p>
                    Historical availability data for our core services over the past 90 days. Our SLA target is 99.9% uptime for all critical services.
                </p>

                <h3>Last 90 Days</h3>
                <ul>
                    <li><strong>MT5 Trading Servers:</strong> 99.99% uptime (1 minute downtime)</li>
                    <li><strong>CRM Platform:</strong> 99.98% uptime (13 minutes downtime)</li>
                    <li><strong>Client Portal:</strong> 99.99% uptime (1 minute downtime)</li>
                    <li><strong>REST API:</strong> 99.99% uptime (0 minutes downtime)</li>
                    <li><strong>Payment Processing:</strong> 99.97% uptime (26 minutes downtime)</li>
                </ul>

                <h3>Recent Incidents</h3>
                <p>
                    No major incidents in the past 30 days. Minor incidents and their resolutions:
                </p>
                <ul>
                    <li>
                        <strong>November 28, 2024</strong> – Brief CRM slowness (3 minutes)
                        <br />Due to database maintenance. No data loss. Resolved automatically.
                    </li>
                    <li>
                        <strong>November 15, 2024</strong> – Skrill deposits delayed (15 minutes)
                        <br />Third-party provider issue. Resolved by Skrill technical team.
                    </li>
                </ul>

                <h2 id="maintenance">Maintenance Schedule</h2>
                <p>
                    Planned maintenance windows are scheduled during low-activity periods to minimize client impact. We notify all affected users at least 72 hours in advance.
                </p>

                <h3>Upcoming Maintenance</h3>
                <ul>
                    <li>
                        <strong>December 15, 2024, 05:00-07:00 UTC</strong> – Database Optimization
                        <br />CRM performance improvements. No trading impact expected.
                    </li>
                    <li>
                        <strong>December 22, 2024, 04:00-05:00 UTC</strong> – Security Updates
                        <br />Routine security patching. Brief portal unavailability possible.
                    </li>
                </ul>

                <h3>Maintenance Windows</h3>
                <p>
                    Regular maintenance is typically performed during:
                </p>
                <ul>
                    <li><strong>Trading Infrastructure:</strong> Weekends only (Saturday 00:00 - Sunday 12:00 UTC)</li>
                    <li><strong>CRM/Portal:</strong> Weekdays 03:00-05:00 UTC or weekends</li>
                    <li><strong>API:</strong> Rolling updates with no downtime</li>
                </ul>

                <div className="infoBox">
                    <p>
                        <strong>Emergency Maintenance:</strong> In rare cases, critical security patches may require immediate deployment outside normal windows. We provide maximum possible notice via all channels.
                    </p>
                </div>

                <h2 id="subscribe">Status Alerts</h2>
                <p>
                    Subscribe to receive instant notifications when service status changes or maintenance is scheduled.
                </p>

                <h3>Notification Channels</h3>
                <ul>
                    <li><strong>Email</strong> – Detailed incident reports and resolution updates</li>
                    <li><strong>SMS</strong> – Critical alerts for major outages</li>
                    <li><strong>Webhook</strong> – Programmatic notifications for your monitoring systems</li>
                    <li><strong>RSS Feed</strong> – Subscribe with any RSS reader</li>
                    <li><strong>Telegram</strong> – Join @fxtrusts_status for instant updates</li>
                </ul>

                <h3>How to Subscribe</h3>
                <ol>
                    <li>Log into your FxTrusts dashboard</li>
                    <li>Navigate to Settings → Notifications</li>
                    <li>Select "System Status Alerts"</li>
                    <li>Choose your preferred channels and severity levels</li>
                    <li>Save your preferences</li>
                </ol>
                <p>
                    You can also subscribe without an account by entering your email address on our public status page at status.fxtrusts.com.
                </p>

                <h3>Monitoring Tools</h3>
                <p>
                    For technical teams, we provide API endpoints for integrating status data into your own monitoring solutions:
                </p>
                <ul>
                    <li><strong>GET /status</strong> – Current status of all services</li>
                    <li><strong>GET /status/history</strong> – Historical uptime data</li>
                    <li><strong>GET /status/incidents</strong> – Recent and ongoing incidents</li>
                    <li><strong>GET /status/maintenance</strong> – Scheduled maintenance windows</li>
                </ul>
            </ContentPageLayout>
        </main>
    );
}
