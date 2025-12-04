import { Metadata } from 'next';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
    title: 'API Documentation | Developer Resources | FxTrusts',
    description: 'Complete API documentation for integrating with FxTrusts platform. REST APIs, webhooks, authentication, and code samples.',
    keywords: ['forex API', 'trading API', 'broker API', 'developer documentation', 'API integration'],
};

export default function APIDocsPage() {
    const tableOfContents = [
        { id: 'overview', title: 'API Overview' },
        { id: 'authentication', title: 'Authentication' },
        { id: 'endpoints', title: 'Core Endpoints' },
        { id: 'webhooks', title: 'Webhooks' },
        { id: 'rate-limits', title: 'Rate Limits' },
        { id: 'sdks', title: 'SDKs & Libraries' },
    ];

    const relatedLinks = [
        { title: 'Help Center', href: '/resources/help-center', readTime: '4 min' },
        { title: 'System Status', href: '/resources/status', readTime: '1 min' },
        { title: 'Contact Support', href: '/company/contact', readTime: '2 min' },
    ];

    const quickFacts = [
        { label: 'API Version', value: 'v2.0' },
        { label: 'Protocol', value: 'REST' },
        { label: 'Format', value: 'JSON' },
        { label: 'Uptime', value: '99.9%' },
    ];

    return (
        <main>
            <PageHeader
                title="API Documentation"
                subtitle="Integrate FxTrusts into your applications with our comprehensive APIs."
                badge="Resources"
            />
            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Need Help Integrating?"
                ctaText="Our developer support team is available 24/7."
                ctaButtonText="Contact Support"
                ctaButtonHref="/company/contact"
            >
                <h1>FxTrusts API Documentation</h1>
                <p>
                    The FxTrusts API provides programmatic access to our platform's core functionality, enabling you to build custom integrations, automate workflows, and extend the platform to meet your specific business requirements.
                </p>
                <p>
                    Our RESTful API follows industry best practices, using JSON for request and response payloads, standard HTTP methods, and OAuth 2.0 for authentication. Whether you're building a mobile app, connecting to a third-party CRM, or automating reporting, the API has you covered.
                </p>

                <h2 id="overview">API Overview</h2>
                <p>
                    The FxTrusts API is organized around REST. Our API has predictable resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.
                </p>

                <div className="statsGrid">
                    <div className="statBox">
                        <strong>100+</strong>
                        <span>Endpoints</span>
                    </div>
                    <div className="statBox">
                        <strong>&lt;50ms</strong>
                        <span>Avg Response</span>
                    </div>
                    <div className="statBox">
                        <strong>99.9%</strong>
                        <span>Uptime</span>
                    </div>
                    <div className="statBox">
                        <strong>24/7</strong>
                        <span>Support</span>
                    </div>
                </div>

                <h3>Base URL</h3>
                <p>
                    All API requests should be made to the base URL:
                </p>
                <ul>
                    <li><strong>Production:</strong> https://api.fxtrusts.com/v2</li>
                    <li><strong>Sandbox:</strong> https://sandbox-api.fxtrusts.com/v2</li>
                </ul>

                <h3>API Versioning</h3>
                <p>
                    The API is versioned via URL path (e.g., /v2/). We maintain backward compatibility within major versions. When breaking changes are necessary, we release a new major version and maintain the previous version for at least 12 months.
                </p>

                <h2 id="authentication">Authentication</h2>
                <p>
                    The FxTrusts API uses OAuth 2.0 for authentication. All API requests must include a valid access token in the Authorization header.
                </p>

                <h3>Obtaining Access Tokens</h3>
                <p>
                    Access tokens are obtained through the OAuth 2.0 client credentials flow:
                </p>
                <ol>
                    <li>Create an API application in your FxTrusts dashboard</li>
                    <li>Note your Client ID and Client Secret</li>
                    <li>Exchange credentials for an access token</li>
                    <li>Include the token in subsequent API requests</li>
                </ol>

                <div className="infoBox">
                    <p>
                        <strong>Security:</strong> Never expose your Client Secret in client-side code. Access tokens should be treated as sensitive credentials and stored securely.
                    </p>
                </div>

                <h3>Token Refresh</h3>
                <p>
                    Access tokens expire after 1 hour. Use the refresh token to obtain a new access token without re-authenticating. Refresh tokens expire after 30 days of inactivity.
                </p>

                <h2 id="endpoints">Core Endpoints</h2>
                <p>
                    The API is organized into logical resource groups corresponding to platform functionality.
                </p>

                <h3>Accounts</h3>
                <ul>
                    <li><strong>GET /accounts</strong> – List all trading accounts</li>
                    <li><strong>POST /accounts</strong> – Create a new trading account</li>
                    <li><strong>GET /accounts/:id</strong> – Retrieve account details</li>
                    <li><strong>PATCH /accounts/:id</strong> – Update account settings</li>
                    <li><strong>DELETE /accounts/:id</strong> – Disable trading account</li>
                </ul>

                <h3>Clients</h3>
                <ul>
                    <li><strong>GET /clients</strong> – List all clients with pagination</li>
                    <li><strong>POST /clients</strong> – Create a new client</li>
                    <li><strong>GET /clients/:id</strong> – Retrieve client profile</li>
                    <li><strong>PATCH /clients/:id</strong> – Update client information</li>
                    <li><strong>GET /clients/:id/accounts</strong> – List client's trading accounts</li>
                    <li><strong>GET /clients/:id/transactions</strong> – List client transactions</li>
                </ul>

                <h3>Transactions</h3>
                <ul>
                    <li><strong>GET /transactions</strong> – List all transactions</li>
                    <li><strong>POST /transactions/deposit</strong> – Create deposit request</li>
                    <li><strong>POST /transactions/withdrawal</strong> – Create withdrawal request</li>
                    <li><strong>GET /transactions/:id</strong> – Retrieve transaction details</li>
                    <li><strong>PATCH /transactions/:id</strong> – Update transaction status</li>
                </ul>

                <h3>Trading</h3>
                <ul>
                    <li><strong>GET /trades</strong> – List trades with filtering</li>
                    <li><strong>GET /trades/:id</strong> – Retrieve trade details</li>
                    <li><strong>GET /positions</strong> – List open positions</li>
                    <li><strong>GET /orders</strong> – List pending orders</li>
                    <li><strong>GET /symbols</strong> – List available trading symbols</li>
                    <li><strong>GET /quotes/:symbol</strong> – Get real-time quote</li>
                </ul>

                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                            Request Format
                        </h4>
                        <p>All requests accept JSON body with Content-Type: application/json header.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                            Response Format
                        </h4>
                        <p>Responses are JSON with consistent structure: data, pagination, and errors.</p>
                    </div>
                </div>

                <h2 id="webhooks">Webhooks</h2>
                <p>
                    Webhooks allow your application to receive real-time notifications when events occur in the platform. Instead of polling the API for changes, webhooks push data to your endpoint.
                </p>

                <h3>Available Events</h3>
                <ul>
                    <li><strong>client.created</strong> – New client registration</li>
                    <li><strong>client.verified</strong> – Client passed KYC verification</li>
                    <li><strong>account.created</strong> – New trading account created</li>
                    <li><strong>transaction.created</strong> – Deposit or withdrawal initiated</li>
                    <li><strong>transaction.completed</strong> – Transaction processed</li>
                    <li><strong>trade.opened</strong> – New trade executed</li>
                    <li><strong>trade.closed</strong> – Trade closed</li>
                    <li><strong>margin.call</strong> – Account margin warning</li>
                    <li><strong>stop.out</strong> – Account stopped out</li>
                </ul>

                <h3>Webhook Security</h3>
                <p>
                    All webhooks include an HMAC signature header (X-FxTrusts-Signature) allowing you to verify that the payload originated from FxTrusts. Compare the signature with the hash of the request body using your webhook secret.
                </p>

                <h3>Retry Policy</h3>
                <p>
                    If your endpoint returns a non-2xx status code, we retry the webhook with exponential backoff: 1 minute, 5 minutes, 30 minutes, 2 hours, 24 hours. After 5 failed attempts, the webhook is marked as failed and logged in your dashboard.
                </p>

                <h2 id="rate-limits">Rate Limits</h2>
                <p>
                    To ensure fair usage and platform stability, the API implements rate limiting on all endpoints.
                </p>

                <h3>Default Limits</h3>
                <ul>
                    <li><strong>Standard:</strong> 1,000 requests per minute</li>
                    <li><strong>Burst:</strong> Up to 50 requests per second</li>
                    <li><strong>Quotes:</strong> 100 requests per second (separate limit)</li>
                </ul>

                <h3>Rate Limit Headers</h3>
                <p>
                    All responses include headers indicating your current rate limit status:
                </p>
                <ul>
                    <li><strong>X-RateLimit-Limit:</strong> Your request limit per minute</li>
                    <li><strong>X-RateLimit-Remaining:</strong> Requests remaining in current window</li>
                    <li><strong>X-RateLimit-Reset:</strong> Time when the limit resets (Unix timestamp)</li>
                </ul>

                <h2 id="sdks">SDKs & Libraries</h2>
                <p>
                    We provide official SDKs for popular programming languages, simplifying API integration with type-safe methods and error handling.
                </p>

                <h3>Official SDKs</h3>
                <ul>
                    <li><strong>JavaScript/TypeScript</strong> – npm install @fxtrusts/sdk</li>
                    <li><strong>Python</strong> – pip install fxtrusts</li>
                    <li><strong>PHP</strong> – composer require fxtrusts/sdk</li>
                    <li><strong>Java</strong> – Maven repository available</li>
                    <li><strong>C#/.NET</strong> – NuGet package available</li>
                </ul>

                <h3>Sample Code</h3>
                <p>
                    Comprehensive code samples are available in our GitHub repository, covering common use cases including client management, deposit processing, and report generation.
                </p>

                <h3>Postman Collection</h3>
                <p>
                    Import our Postman collection to quickly explore the API endpoints with pre-configured authentication and sample requests. Available for download from your dashboard.
                </p>
            </ContentPageLayout>
        </main>
    );
}
