import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
    title: 'MT5 White Label | MetaTrader 5 Manager | MT5 CRM Integration | FxTrusts',
    description: 'Launch your forex brokerage on MetaTrader 5 with our fully managed white label solution. Complete MT5 CRM integration, MetaTrader 5 manager access, branding, hosting included.',
    keywords: [
        'MT5 white label',
        'MetaTrader 5 broker',
        'mt5 CRM',
        'metatrader 5 manager',
        'metatrader 5 administrator',
        'MT5 white label cost',
        'MT5 solution',
        'MetaQuotes',
        'forex white label',
        'mt5 integration',
        'metatrader broker',
        'white label trading platform',
    ],
    openGraph: {
        title: 'MT5 White Label | Launch Your Broker in 48 Hours',
        description: 'Fully managed MetaTrader 5 white label. Branding, hosting, support included.',
        type: 'website',
        url: 'https://fxtrusts.com/solutions/mt5',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MT5 White Label | Launch Your Broker in 48 Hours',
        description: 'Fully managed MetaTrader 5 white label. Branding, hosting, support included.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/mt5',
    },
};

export default function MT5Page() {
    const tableOfContents = [
        { id: 'overview', title: 'Platform Overview' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'hosting', title: 'Server Hosting' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'FAQ' },
    ];

    const relatedLinks = [
        { title: 'Institutional CRM', href: '/solutions/crm', readTime: '6 min' },
        { title: 'Liquidity Solutions', href: '/solutions/liquidity', readTime: '5 min' },
        { title: 'Copy Trading', href: '/platform/copy-trading', readTime: '4 min' },
    ];

    const quickFacts = [
        { label: 'Setup Time', value: '48 hours' },
        { label: 'Platforms', value: 'Desktop, Web, Mobile' },
        { label: 'Instruments', value: 'Unlimited' },
        { label: 'Support', value: '24/7' },
    ];

    const faqs = [
        {
            question: 'How long does MT5 white label setup really take?',
            answer: '48 hours for standard configurations. We know, we know—other providers quote "4-6 weeks" and charge a $10,000 "implementation fee." We forgot to add the delays and the fee. It\'s a character flaw.',
        },
        {
            question: 'Do I need to negotiate with MetaQuotes directly?',
            answer: 'No. We hold the licensing relationship. You get the platform, the updates, and the support without sending legal documents to Cyprus and waiting 3 months for approval. You\'re welcome.',
        },
        {
            question: 'Can I get my own branded mobile apps?',
            answer: 'Yes. iOS and Android apps under your company name in the App Store and Google Play. It\'s an optional add-on, and yes, we actually tell you how much it costs upfront. Revolutionary, we know.',
        },
        {
            question: 'What if I already have an MT4 brokerage?',
            answer: 'We can migrate your accounts, history, and configurations. Your traders won\'t even notice (except they\'ll suddenly have a much better platform). MT4 support is still available if you need it.',
        },
        {
            question: 'Is there a minimum number of accounts?',
            answer: 'No. Start with 10 accounts or 10,000—the platform scales seamlessly. We don\'t believe in the "enterprise minimum" model where you pay for 5,000 accounts you don\'t have yet.',
        },
        {
            question: 'What happens if MetaQuotes releases an update?',
            answer: 'We test it, stage it, and deploy it—usually same-day for security patches. You don\'t have to worry about update logistics or compatibility. That\'s the "fully managed" part.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="The Industry Standard"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                title="MetaTrader 5 White Label"
                subtitle="Launch your broker on the world's most trusted trading platform. Fully managed, with branding, hosting, and support included."
            />
            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Launch Your MT5 Broker"
                ctaText="Go live in 48 hours with full branding and support."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
            >
                <h1>MetaTrader 5 White Label Solution</h1>
                <p>
                    MetaTrader 5 is the multi-asset trading platform of choice for professional traders worldwide. Our white label solution provides everything you need to launch a fully branded MT5 brokerage—from server hosting and branding to liquidity integration and ongoing support.
                </p>
                <p>
                    Unlike DIY solutions that require MetaQuotes licensing negotiations and infrastructure setup, we handle all technical complexity. You focus on client acquisition while we manage servers, updates, and maintenance.
                </p>

                <h2 id="overview">Platform Overview</h2>
                <p>
                    MetaTrader 5 supports forex, stocks, indices, commodities, and cryptocurrency trading from a single platform. With built-in technical analysis, algorithmic trading, and copy trading capabilities, MT5 provides everything modern traders expect.
                </p>

                <div className="statsGrid">
                    <div className="statBox">
                        <strong>80%</strong>
                        <span>Market Share</span>
                    </div>
                    <div className="statBox">
                        <strong>38</strong>
                        <span>Timeframes</span>
                    </div>
                    <div className="statBox">
                        <strong>100+</strong>
                        <span>Indicators</span>
                    </div>
                    <div className="statBox">
                        <strong>6</strong>
                        <span>Order Types</span>
                    </div>
                </div>

                <h3>Why MetaTrader 5?</h3>
                <ul>
                    <li><strong>Industry Standard</strong> – Traders know and trust the platform</li>
                    <li><strong>Multi-Asset</strong> – Trade forex, stocks, and crypto from one account</li>
                    <li><strong>Advanced Charting</strong> – 21 timeframes, 80+ indicators, custom objects</li>
                    <li><strong>Algorithmic Trading</strong> – MQL5 language for Expert Advisors</li>
                    <li><strong>Mobile Apps</strong> – Native iOS and Android applications</li>
                    <li><strong>Web Terminal</strong> – Trade from any browser, no download required</li>
                </ul>

                <h2 id="branding">White Label Branding</h2>
                <p>
                    Your MT5 platform carries your brand identity across all touchpoints. We customize every client-facing element to reinforce your brand.
                </p>

                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                            Desktop Platform
                        </h4>
                        <p>Your logo in the terminal header, About dialog, and installer splash screens.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            Web Terminal
                        </h4>
                        <p>Custom domain, full color scheme customization, your favicon and branding.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                            Mobile Apps
                        </h4>
                        <p>Branded iOS and Android apps published under your company name (optional add-on).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            Server Labels
                        </h4>
                        <p>Your company name appears as the server in client terminals.</p>
                    </div>
                </div>

                <h2 id="hosting">Server Hosting & Infrastructure</h2>
                <p>
                    We provide enterprise-grade hosting with the reliability and performance institutional clients expect.
                </p>

                <h3>Data Center Locations</h3>
                <ul>
                    <li><strong>Equinix LD4 (London)</strong> – Primary location, optimal for European LPs</li>
                    <li><strong>Equinix NY4 (New York)</strong> – US market access, close to major venues</li>
                    <li><strong>Equinix TY3 (Tokyo)</strong> – Asia-Pacific coverage</li>
                    <li><strong>Custom Locations</strong> – Available for enterprise clients</li>
                </ul>

                <h3>Infrastructure Specifications</h3>
                <ul>
                    <li><strong>Server Configuration</strong> – Dedicated servers, 8vCPU+ configurations</li>
                    <li><strong>Network</strong> – Multiple tier-1 carrier connections, DDoS protection</li>
                    <li><strong>Redundancy</strong> – Database replication, automated failover</li>
                    <li><strong>Backups</strong> – Daily incremental, weekly full backups with 30-day retention</li>
                    <li><strong>Monitoring</strong> – 24/7 infrastructure monitoring with &lt;5 minute response</li>
                </ul>

                <div className="infoBox">
                    <p>
                        <strong>Uptime Guarantee:</strong> 99.9% uptime SLA with service credits for any downtime. Enterprise clients receive 99.99% SLA with dedicated support team.
                    </p>
                </div>

                <h2 id="features">Platform Features</h2>
                <p>
                    MT5 provides the comprehensive feature set that modern traders expect, with capabilities that exceed MT4 in every dimension.
                </p>

                <h3>Trading Features</h3>
                <ul>
                    <li><strong>Order Types</strong> – Market, Limit, Stop, Stop Limit, Trailing Stop, Fill Policy options</li>
                    <li><strong>Hedging & Netting</strong> – Support both position accounting modes</li>
                    <li><strong>Partial Close</strong> – Close portions of positions</li>
                    <li><strong>Close By</strong> – Close opposite positions to reduce margin</li>
                    <li><strong>One-Click Trading</strong> – Instant execution from chart or DOM</li>
                    <li><strong>Depth of Market</strong> – Level 2 pricing visualization</li>
                </ul>

                <h3>Analysis Tools</h3>
                <ul>
                    <li><strong>38 Timeframes</strong> – From 1-minute to monthly charts</li>
                    <li><strong>80+ Indicators</strong> – Technical analysis library</li>
                    <li><strong>44 Graphical Objects</strong> – Lines, channels, Elliott waves, Fibonacci</li>
                    <li><strong>Economic Calendar</strong> – Built-in news and event tracking</li>
                    <li><strong>Fundamental Analysis</strong> – Market news and economic data</li>
                </ul>

                <h3>Algorithmic Trading</h3>
                <ul>
                    <li><strong>MQL5 Language</strong> – C++-like language for strategy development</li>
                    <li><strong>Strategy Tester</strong> – Tick-level backtesting with optimization</li>
                    <li><strong>MQL5 Market</strong> – Thousands of Expert Advisors and indicators</li>
                    <li><strong>VPS Hosting</strong> – Low-latency algo execution options</li>
                </ul>

                <h2 id="api">API & Integration</h2>
                <p>
                    Full programmatic access to your MT5 server enables custom integrations and advanced automation.
                </p>

                <h3>Manager API</h3>
                <p>
                    Complete access to the MT5 Manager API for back-office integration:
                </p>
                <ul>
                    <li>Account management (create, modify, delete)</li>
                    <li>Trade execution and manipulation</li>
                    <li>Symbol and group configuration</li>
                    <li>Risk management and exposure monitoring</li>
                    <li>Report generation and data export</li>
                </ul>

                <h3>Gateway API</h3>
                <p>
                    Liquidity bridge connectivity through standard protocols:
                </p>
                <ul>
                    <li>FIX 4.4 for institutional connectivity</li>
                    <li>Custom gateway development supported</li>
                    <li>Multiple LP aggregation</li>
                </ul>

                <h3>Web API</h3>
                <p>
                    REST API for web and mobile application development, providing access to account data, history, and trading operations through standard HTTP endpoints.
                </p>

                <h2 id="pricing">Pricing & Setup</h2>
                <p>
                    Our MT5 white label includes everything needed for immediate launch.
                </p>

                <h3>What's Included</h3>
                <ul>
                    <li>MT5 server licensing and hosting</li>
                    <li>Complete branding package</li>
                    <li>Web terminal with your domain</li>
                    <li>CRM integration</li>
                    <li>Liquidity bridge connection</li>
                    <li>24/7 technical support</li>
                    <li>Platform updates and maintenance</li>
                </ul>

                <h3>Optional Add-Ons</h3>
                <ul>
                    <li><strong>Branded Mobile Apps</strong> – iOS and Android under your company name</li>
                    <li><strong>Manager Terminal Licenses</strong> – Additional back-office access</li>
                    <li><strong>Additional Server Regions</strong> – Multi-region deployment</li>
                    <li><strong>VPS for Clients</strong> – Low-latency algo trading hosting</li>
                </ul>

                <h3>Setup Timeline</h3>
                <ol>
                    <li><strong>Day 1</strong> – Contract signing and branding assets received</li>
                    <li><strong>Day 2</strong> – Server provisioning and branding application</li>
                    <li><strong>Day 3-5</strong> – Liquidity connection and symbol configuration</li>
                    <li><strong>Day 5-7</strong> – CRM integration and testing</li>
                    <li><strong>Day 7+</strong> – Go live with monitoring and support</li>
                </ol>
                <p>
                    Express setup (48 hours) available for standard configurations using pre-built liquidity feeds and default symbol sets.
                </p>

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
