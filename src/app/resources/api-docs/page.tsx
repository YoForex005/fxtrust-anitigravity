import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerPageHeader from '@/components/InnerPageHeader';
import styles from './docs.module.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'API Documentation | Developer Resources | REST API Guide | FXTrusts',
    description: 'Complete REST API documentation for forex broker integration. OAuth 2.0 authentication, 100+ endpoints, webhooks, SDKs for Python, JavaScript, PHP.',
    keywords: [
        'forex API documentation',
        'trading API integration',
        'broker API endpoints',
        'forex REST API',
        'MT5 API',
        'trading platform API',
        'CRM API integration',
        'developer documentation forex',
        'broker webhook API',
        'OAuth forex API',
        'trading SDK',
        'forex developer tools',
        'API authentication forex',
        'trading API examples',
        'broker API sandbox'
    ],
    openGraph: {
        title: 'API Documentation | 100+ Endpoints | FXTrusts Developer Portal',
        description: 'REST API for forex brokers. OAuth 2.0, webhooks, SDKs. <50ms response time. 99.9% uptime.',
        type: 'website',
        url: 'https://fxtrusts.com/resources/api-docs',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FXTrusts API Documentation | Developer Resources',
        description: 'Build custom integrations with our REST API. 100+ endpoints, real-time webhooks, official SDKs.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/resources/api-docs',
    },
};

export default function APIDocsPage() {
    return (
        <main>
            <Header />
            <InnerPageHeader
                badge="Developer Portal"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>}
                title="API Documentation.<br/>For Those Who Build."
                subtitle="You're not here to click buttons in a dashboard. You're here to integrate, automate, and build. Our REST API gives you programmatic access to everything—from account creation to trade execution. Let's get technical."
            />

            {/* Quick Stats */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statNum}>100+</div>
                            <h3>Endpoints</h3>
                            <p>Every feature you need, exposed via API</p>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNum}>&lt;50ms</div>
                            <h3>Avg Response</h3>
                            <p>Optimized for high-frequency operations</p>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNum}>99.9%</div>
                            <h3>Uptime SLA</h3>
                            <p>Guaranteed availability for production use</p>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNum}>24/7</div>
                            <h3>Dev Support</h3>
                            <p>Dedicated technical assistance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* API Overview */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitFeature}>
                        <div className={styles.featureContent}>
                            <div className={styles.badge}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="16" x2="12" y2="12" />
                                    <line x1="12" y1="8" x2="12.01" y2="8" />
                                </svg>
                                <span>API OVERVIEW</span>
                            </div>
                            <h2>RESTful, Predictable, Boring</h2>
                            <p>
                                No weird proprietary protocols. No SOAP (thank god). Just standard REST with
                                JSON payloads, sensible HTTP verbs, and OAuth 2.0 authentication. If you've
                                integrated with any modern API, you already know 90% of ours.
                            </p>
                            <ul className={styles.featureList}>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    JSON Request &amp; Response Bodies
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Standard HTTP Status Codes
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    OAuth 2.0 Client Credentials Flow
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    HATEOAS Pagination
                                </li>
                            </ul>
                        </div>
                        <div className={styles.codeBlock}>
                            <div className={styles.codeHeader}>
                                <span>Base URLs</span>
                            </div>
                            <div className={styles.codeContent}>
                                <div className={styles.codeLine}>
                                    <span className={styles.codeLabel}>Production:</span>
                                    <code>https://api.fxtrusts.com/v2</code>
                                </div>
                                <div className={styles.codeLine}>
                                    <span className={styles.codeLabel}>Sandbox:</span>
                                    <code>https://sandbox-api.fxtrusts.com/v2</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Authentication */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            <span>AUTHENTICATION</span>
                        </div>
                        <h2>OAuth 2.0—Because API Keys Are So 2010</h2>
                        <p>
                            We use OAuth 2.0 client credentials flow. Obtain an access token using your Client ID
                            and Secret, then include it as a Bearer token in all subsequent requests. Tokens
                            expire after 1 hour. Refresh tokens last 30 days.
                        </p>
                    </div>

                    <div className={styles.authSteps}>
                        <div className={styles.authStep}>
                            <span className={styles.stepNum}>1</span>
                            <div>
                                <strong>Create API Application</strong>
                                <p>In your dashboard, go to Settings → API → Create Application. Note your Client ID and Client Secret.</p>
                            </div>
                        </div>
                        <div className={styles.authStep}>
                            <span className={styles.stepNum}>2</span>
                            <div>
                                <strong>Exchange Credentials</strong>
                                <p>POST to /oauth/token with your credentials to receive an access token and refresh token.</p>
                            </div>
                        </div>
                        <div className={styles.authStep}>
                            <span className={styles.stepNum}>3</span>
                            <div>
                                <strong>Include Bearer Token</strong>
                                <p>Add Authorization: Bearer YOUR_TOKEN header to all API requests.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.warningBox}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                            <line x1="12" y1="9" x2="12" y2="13" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                        <div>
                            <strong>Security Warning</strong>
                            <p>Never expose your Client Secret in client-side code. Access tokens should be treated as sensitive credentials and stored securely.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Endpoints */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            <span>CORE ENDPOINTS</span>
                        </div>
                        <h2>The Endpoints You'll Actually Use</h2>
                        <p>
                            We have 100+ endpoints, but let's be honest—you're here for accounts, clients,
                            transactions, and trades. Here's the essential reference.
                        </p>
                    </div>

                    <div className={styles.endpointGrid}>
                        <div className={styles.endpointCategory}>
                            <h3>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                Clients
                            </h3>
                            <ul className={styles.endpointList}>
                                <li><span className={styles.methodGet}>GET</span> /clients — List all clients</li>
                                <li><span className={styles.methodPost}>POST</span> /clients — Create client</li>
                                <li><span className={styles.methodGet}>GET</span> /clients/:id — Get client</li>
                                <li><span className={styles.methodPatch}>PATCH</span> /clients/:id — Update client</li>
                                <li><span className={styles.methodGet}>GET</span> /clients/:id/accounts — Client accounts</li>
                            </ul>
                        </div>
                        <div className={styles.endpointCategory}>
                            <h3>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                                Accounts
                            </h3>
                            <ul className={styles.endpointList}>
                                <li><span className={styles.methodGet}>GET</span> /accounts — List accounts</li>
                                <li><span className={styles.methodPost}>POST</span> /accounts — Create account</li>
                                <li><span className={styles.methodGet}>GET</span> /accounts/:id — Get account</li>
                                <li><span className={styles.methodPatch}>PATCH</span> /accounts/:id — Update account</li>
                                <li><span className={styles.methodDelete}>DEL</span> /accounts/:id — Disable account</li>
                            </ul>
                        </div>
                        <div className={styles.endpointCategory}>
                            <h3>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                                Transactions
                            </h3>
                            <ul className={styles.endpointList}>
                                <li><span className={styles.methodGet}>GET</span> /transactions — List transactions</li>
                                <li><span className={styles.methodPost}>POST</span> /transactions/deposit — Create deposit</li>
                                <li><span className={styles.methodPost}>POST</span> /transactions/withdrawal — Create withdrawal</li>
                                <li><span className={styles.methodGet}>GET</span> /transactions/:id — Get transaction</li>
                                <li><span className={styles.methodPatch}>PATCH</span> /transactions/:id — Update status</li>
                            </ul>
                        </div>
                        <div className={styles.endpointCategory}>
                            <h3>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                                Trading
                            </h3>
                            <ul className={styles.endpointList}>
                                <li><span className={styles.methodGet}>GET</span> /trades — List trades</li>
                                <li><span className={styles.methodGet}>GET</span> /positions — Open positions</li>
                                <li><span className={styles.methodGet}>GET</span> /orders — Pending orders</li>
                                <li><span className={styles.methodGet}>GET</span> /symbols — Trading symbols</li>
                                <li><span className={styles.methodGet}>GET</span> /quotes/:symbol — Real-time quote</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Webhooks */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.splitFeature}>
                        <div className={styles.featureContent}>
                            <div className={styles.badge}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                </svg>
                                <span>WEBHOOKS</span>
                            </div>
                            <h2>Real-Time Events.<br />Stop Polling Like It's 2005.</h2>
                            <p>
                                Instead of hammering our API every 5 seconds to check if something changed,
                                let us push events to you. Configure webhook endpoints, subscribe to events,
                                and react in real-time.
                            </p>
                            <h3 className={styles.eventTitle}>Available Events:</h3>
                            <div className={styles.eventGrid}>
                                <div className={styles.eventTag}>client.created</div>
                                <div className={styles.eventTag}>client.verified</div>
                                <div className={styles.eventTag}>account.created</div>
                                <div className={styles.eventTag}>transaction.created</div>
                                <div className={styles.eventTag}>transaction.completed</div>
                                <div className={styles.eventTag}>trade.opened</div>
                                <div className={styles.eventTag}>trade.closed</div>
                                <div className={styles.eventTag}>margin.call</div>
                                <div className={styles.eventTag}>stop.out</div>
                            </div>
                        </div>
                        <div className={styles.webhookInfo}>
                            <div className={styles.infoCard}>
                                <h3>Security</h3>
                                <p>All webhooks include an HMAC signature (X-FxTrusts-Signature) so you can verify the payload originated from us.</p>
                            </div>
                            <div className={styles.infoCard}>
                                <h3>Retry Policy</h3>
                                <p>If your endpoint fails, we retry with exponential backoff: 1min → 5min → 30min → 2hrs → 24hrs. Max 5 attempts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rate Limits */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span>RATE LIMITS</span>
                        </div>
                        <h2>Don't DDoS Us, Please</h2>
                        <p>
                            We're generous with our limits, but not infinite. Here's what you get—exceed it and
                            you'll see HTTP 429. Check the headers to know your remaining quota.
                        </p>
                    </div>

                    <div className={styles.limitsGrid}>
                        <div className={styles.limitCard}>
                            <div className={styles.limitNum}>1,000</div>
                            <h3>Requests / Minute</h3>
                            <p>Standard rate limit for most endpoints</p>
                        </div>
                        <div className={styles.limitCard}>
                            <div className={styles.limitNum}>50</div>
                            <h3>Burst / Second</h3>
                            <p>Maximum concurrent requests per second</p>
                        </div>
                        <div className={styles.limitCard}>
                            <div className={styles.limitNum}>100</div>
                            <h3>Quotes / Second</h3>
                            <p>Separate limit for real-time price quotes</p>
                        </div>
                    </div>

                    <div className={styles.headersTable}>
                        <h3>Rate Limit Headers</h3>
                        <div className={styles.headerRow}>
                            <code>X-RateLimit-Limit</code>
                            <span>Your request limit per minute</span>
                        </div>
                        <div className={styles.headerRow}>
                            <code>X-RateLimit-Remaining</code>
                            <span>Requests remaining in current window</span>
                        </div>
                        <div className={styles.headerRow}>
                            <code>X-RateLimit-Reset</code>
                            <span>Unix timestamp when the limit resets</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SDKs */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M4 17l6-6-6-6" />
                                <path d="M12 19h8" />
                            </svg>
                            <span>SDKs &amp; LIBRARIES</span>
                        </div>
                        <h2>We Wrote the Code So You Don't Have To</h2>
                        <p>
                            Official SDKs for popular languages. Type-safe, well-documented, and maintained
                            by our team. Or just use curl if that's your thing.
                        </p>
                    </div>

                    <div className={styles.sdkGrid}>
                        <div className={styles.sdkCard}>
                            <div className={styles.sdkIcon}>
                                {/* JS/TS Icon - Braces */}
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 8l-4 4 4 4" />
                                    <path d="M17 8l4 4-4 4" />
                                    <line x1="14" y1="4" x2="10" y2="20" />
                                </svg>
                            </div>
                            <h3>JavaScript / TypeScript</h3>
                            <code>npm install @fxtrusts/sdk</code>
                        </div>
                        <div className={styles.sdkCard}>
                            <div className={styles.sdkIcon}>
                                {/* Python Icon - Snake-like curves */}
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2c-3 0-5 2-5 5v2h5v-2a3 3 0 0 1 3-3 3 3 0 0 1 3 3v5h-5v2h5a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-3z" />
                                    <path d="M12 22c3 0 5-2 5-5v-2H12v2a3 3 0 0 1-3 3 3 3 0 0 1-3-3v-5h5v-2H6a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h3z" />
                                </svg>
                            </div>
                            <h3>Python</h3>
                            <code>pip install fxtrusts</code>
                        </div>
                        <div className={styles.sdkCard}>
                            <div className={styles.sdkIcon}>
                                {/* PHP Icon - Variable/Script */}
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2v20" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <h3>PHP</h3>
                            <code>composer require fxtrusts/sdk</code>
                        </div>
                        <div className={styles.sdkCard}>
                            <div className={styles.sdkIcon}>
                                {/* C# / .NET Icon - Hexagon or C style */}
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10 9l-2-2-2 2" />
                                    <path d="M14 9l2-2 2 2" />
                                    <path d="M12 14v8" />
                                    <path d="M7 16l5-3 5 3" />
                                    <path d="M4 11h16" />
                                    <circle cx="12" cy="12" r="9" />
                                </svg>
                            </div>
                            <h3>C# / .NET</h3>
                            <code>Install-Package FxTrusts.SDK</code>
                        </div>
                    </div>

                    <div className={styles.resources}>
                        <h3>Additional Resources</h3>
                        <div className={styles.resourceGrid}>
                            <div className={styles.resourceCard}>
                                <h4>Postman Collection</h4>
                                <p>Import our collection to explore endpoints with pre-configured auth and sample requests.</p>
                            </div>
                            <div className={styles.resourceCard}>
                                <h4>GitHub Examples</h4>
                                <p>Full code samples covering client management, deposits, withdrawals, and reporting.</p>
                            </div>
                            <div className={styles.resourceCard}>
                                <h4>OpenAPI Spec</h4>
                                <p>Download our OpenAPI 3.0 specification for code generation and documentation tools.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Ready to Build?</h2>
                        <p>
                            Get your API credentials from the dashboard and start integrating. Our dev
                            support team is available 24/7 if you get stuck.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/get-started" className={styles.primaryCta}>
                                Get API Keys
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                            <Link href="/company/contact" className={styles.secondaryCta}>
                                Contact Dev Support
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
