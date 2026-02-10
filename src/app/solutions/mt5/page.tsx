import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'MetaTrader 5 (MT5) White Label License | Branded Broker Platform',
    description: 'Launch your own branded brokerage with a MetaTrader 5 (MT5) White Label. Fully customizable, secure hosting, and 24/7 expert support for brokers.',
    keywords: [
        'MT5 White Label License',
        'Branded MetaTrader 5',
        'MT5 White Label Pricing',
        'Brokerage Infrastructure',
        'MT5 Server Hosting',
        'Forex White Label Solution',
    ],
    openGraph: {
        title: 'MetaTrader 5 (MT5) White Label License | Branded Broker Platform',
        description: 'Launch your own branded brokerage with a MetaTrader 5 (MT5) White Label. Fully customizable, secure hosting, and 24/7 expert support for brokers.',
        type: 'website',
        url: 'https://fxtrusts.com/solutions/mt5',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MetaTrader 5 (MT5) White Label License | Branded Broker Platform',
        description: 'Launch your own branded brokerage with a MetaTrader 5 (MT5) White Label. Fully customizable, secure hosting, and 24/7 expert support for brokers.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/mt5',
    },
};

export default function MT5Page() {
    const tableOfContents = [
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why MetaTrader 5?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'Institutional CRM', href: '/solutions/crm', readTime: '6 min' },
        { title: 'Liquidity Solutions', href: '/solutions/liquidity', readTime: '5 min' },
        { title: 'Copy Trading', href: '/platform/copy-trading', readTime: '4 min' },
    ];

    const quickFacts = [
        { label: 'Uptime SLA', value: '99.9%' },
        { label: 'Setup Time', value: '7-14 Days' },
        { label: 'Instruments', value: '100+' },
        { label: 'Support', value: '24/7' },
    ];

    const faqs = [
        {
            question: 'How long does it take to launch my branded MT5 platform?',
            answer: 'The typical setup time is between 7 to 14 business days, depending on the complexity of your integrations and the speed of branding asset delivery. We guide you through every step to ensure a smooth transition to live trading.',
        },
        {
            question: 'Can I fully customize the platform with my own logo?',
            answer: 'Yes. Your MT5 White Label will be fully branded. This includes your logo on the desktop terminal, mobile apps (iOS and Android), and the web-based version, ensuring a consistent brand identity for your clients.',
        },
        {
            question: 'What kind of integrations are supported?',
            answer: 'Our platform supports a wide range of integrations via Manager and Web APIs. You can easily connect to popular CRMs, various Payment Service Providers (PSPs), and external liquidity sources to create a seamless workflow.',
        },
        {
            question: 'Is it possible to migrate from MT4 to MT5?',
            answer: 'Absolutely. We provide full migration support to help you move your existing client database and trading history from MT4 to MT5 with minimal downtime, ensuring your traders experience no disruption.',
        },
        {
            question: 'What are the minimum requirements to start?',
            answer: 'To start an MT5 White Label, you generally need a registered legal entity and basic compliance documentation. While we don\'t enforce strict minimums on accounts or volume, we recommend a business plan that supports a base monthly fee.',
        },
        {
            question: 'What kind of support do I receive after launch?',
            answer: 'We provide 24/7 technical support and server monitoring. Your dedicated account manager will be available to assist with configuration changes, platform updates, and any technical queries your team might have.',
        },
    ];

    const features = [
        'Branded Desktop, Web & Mobile',
        'Advanced Risk Management',
        'Multi-Asset Liquidity Bridge',
        'Integrated CRM & Back Office',
        '21 Timeframes & 80+ Indicators',
        'MQL5 Algorithmic Support',
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="White Label Broker Solution"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                title="MetaTrader 5 White Label License"
                subtitle="Scale your brokerage with a fully branded, high-performance MT5 environment. Gain complete control over your trading ecosystem without the overhead of a full server license."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
                benefits={[
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                        text: "Institutional Grade"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
                        text: "Multi-Asset Ready"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
                        text: "7-14 Day Setup"
                    }
                ]}
            />
            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Launch Your MT5 Brokerage in 14 Days"
                ctaText="Get a turnkey, branded trading environment designed for modern brokers."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Our technical specialists are available to discuss your custom requirements."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    <h1>MetaTrader 5 (MT5) White Label License (Branded platform) Solution</h1>
                    <p>
                        The MetaTrader 5 (MT5) White Label solution is a comprehensive package designed for emerging brokers, fintech startups, and established financial institutions looking to offer a premium trading experience. By utilizing our infrastructure, you bypass the massive capital expenditure and technical complexity of purchasing a full MetaQuotes server license, while still providing your clients with the industry’s gold-standard platform.
                    </p>
                    <p>
                        This turnkey solution is built for scalability. Whether you are targeting retail forex traders or institutional investors, the MT5 White Label allows you to operate under your own brand name, set your own trading conditions, and manage your clients through a powerful, centralized backend.
                    </p>
                    <ul>
                        <li><strong>Turnkey Brokerage Setup:</strong> A complete ecosystem including the trading terminal, manager tools, and liquidity connectivity.</li>
                        <li><strong>Total Brand Ownership:</strong> Your logo and company information are visible across all desktop, mobile, and web versions.</li>
                        <li><strong>Cost-Effective Entry:</strong> Access the world’s most advanced multi-asset platform with a manageable monthly fee structure.</li>
                        <li><strong>Multi-Asset Capabilities:</strong> Offer trading in Forex, Stocks, Futures, and Cryptocurrencies from a single interface.</li>
                        <li><strong>Advanced Risk Controls:</strong> Comprehensive tools to manage exposure, leverage, and client groups in real-time.</li>
                    </ul>
                </div>

                <h2 id="platform-overview">Platform Overview</h2>
                <p>
                    The MT5 White Label infrastructure is engineered for low-latency execution and high-volume reliability. We provide the technical backbone so you can focus on marketing and client acquisition.
                </p>

                <div className="statsGrid">
                    <div className="statBox">
                        <strong>99.9%</strong>
                        <span>Uptime SLA</span>
                    </div>
                    <div className="statBox">
                        <strong>7-14 Days</strong>
                        <span>Setup Time</span>
                    </div>
                    <div className="statBox">
                        <strong>100+</strong>
                        <span>Instruments</span>
                    </div>
                    <div className="statBox">
                        <strong>24/7</strong>
                        <span>Support</span>
                    </div>
                </div>

                <h2 id="why">Why MetaTrader 5?</h2>
                <ul>
                    <li><strong>Superior Multi-Asset Support:</strong> MT5 was designed from the ground up to handle more than just Forex, including centralized exchange-traded instruments.</li>
                    <li><strong>Hedging and Netting:</strong> Offer your clients the flexibility of both accounting systems to suit diverse trading strategies.</li>
                    <li><strong>Expanded Technical Analysis:</strong> Features 21 timeframes and over 80 built-in indicators for professional-grade market study.</li>
                    <li><strong>Depth of Market (DOM):</strong> Provide transparency with a built-in Depth of Market feature for real-time liquidity analysis.</li>
                    <li><strong>MQL5 Modernity:</strong> Benefit from a faster, more efficient programming language for automated trading bots and signals.</li>
                    <li><strong>Regulatory Readiness:</strong> Built-in reporting and compliance tools help you meet the standards of various global jurisdictions.</li>
                    <li><strong>Economic Calendar:</strong> Keep your clients engaged with an integrated, real-time news and event feed within the terminal.</li>
                </ul>

                <h2 id="branding">White Label Branding</h2>
                <p>
                    Maintaining brand consistency is vital for building trust with your traders. Our MT5 White Label ensures that your identity is the only one your clients see, providing a professional and cohesive user experience across all touchpoints.
                </p>

                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                            Custom Terminal Branding
                        </h4>
                        <p>Your company name and logo are integrated into the "About" section, splash screens, and header of the desktop and mobile applications.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            Web & Mobile Presence
                        </h4>
                        <p>Offer branded web terminals that require no installation, alongside fully functional mobile apps for iOS and Android.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                            Client Portal & CRM
                        </h4>
                        <p>Integrate your branded client area where users can manage accounts, deposits, and KYC documents seamlessly.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            Custom Trading Groups
                        </h4>
                        <p>Define your own symbols, spreads, commissions, and swap rates to create unique product offerings tailored to your audience.</p>
                    </div>
                </div>

                <h2 id="infrastructure">Server Hosting & Infrastructure</h2>
                <p>
                    We utilize premium data centers to ensure that your MT5 server environment remains stable, secure, and lightning-fast. Our infrastructure is optimized to reduce slippage and maximize execution speed for your global client base.
                </p>

                <h3>Data Center Locations</h3>
                <ul>
                    <li><strong>London, UK</strong> - LD4 Equinix</li>
                    <li><strong>New York, USA</strong> - NY4 Equinix</li>
                    <li><strong>Singapore</strong> - SG1 Equinix</li>
                    <li><strong>Dubai, UAE</strong> - Regional Hub</li>
                </ul>

                <h3>Infrastructure Specifications</h3>
                <ul>
                    <li>Equinix-based cross-connects for ultra-low latency.</li>
                    <li>Full hardware redundancy with automated failover systems.</li>
                    <li>Tier-1 DDoS protection to safeguard against malicious attacks.</li>
                    <li>Encrypted database backups performed Daily/Hourly.</li>
                    <li>Real-time server health monitoring and load balancing.</li>
                </ul>

                <div className="infoBox">
                    <p>
                        <strong>SLA Commitment:</strong> We guarantee a 99.9% network uptime. Our infrastructure is audited regularly to ensure compliance with the highest security standards in the fintech industry.
                    </p>
                </div>

                <h2 id="features">Platform Features</h2>
                <p>
                    MT5 offers an unparalleled suite of tools for both the trader and the broker.
                </p>

                <h3>Trading Features</h3>
                <ul>
                    <li>Two order accounting modes: Netting and Hedging.</li>
                    <li>One-click trading and advanced Market Depth.</li>
                    <li>Full set of trade orders, including pending and stop orders.</li>
                    <li>Market, Request, Instant, and Exchange execution modes.</li>
                    <li>Internal mailing system for direct client communication.</li>
                    <li>Historical data management and export capabilities.</li>
                </ul>

                <h3>Analytics Tools</h3>
                <ul>
                    <li>80+ built-in technical indicators and analytical objects.</li>
                    <li>Advanced charting with unlimited number of charts.</li>
                    <li>Integrated Economic Calendar with impact ratings.</li>
                    <li>Financial news streaming from major global providers.</li>
                </ul>

                <h3>Algorithmic & Automation</h3>
                <ul>
                    <li>Integrated MQL5 development environment.</li>
                    <li>High-speed Strategy Tester for EAs and indicators.</li>
                    <li>Access to the MQL5 Market and Signals service.</li>
                    <li>Virtual Hosting (VPS) support for automated trading.</li>
                </ul>

                <h2 id="api">API & Integration</h2>
                <p>
                    Our MT5 White Label is designed to be the core of a larger, extensible business ecosystem through powerful API support.
                </p>

                <h3>Manager & Admin API</h3>
                <ul>
                    <li>Automate account creation and group management.</li>
                    <li>Real-time balance and credit adjustments via CRM.</li>
                    <li>Customized reporting for compliance and internal audits.</li>
                    <li>Detailed permission control for staff and sub-white labels.</li>
                </ul>

                <h3>Gateway & Connectivity API</h3>
                <ul>
                    <li>Connect to multiple Tier-1 liquidity providers.</li>
                    <li>Aggregate feeds to provide the best possible spreads.</li>
                    <li>Support for FIX Bridge technology.</li>
                    <li>Custom plugins for non-standard asset classes.</li>
                </ul>

                <h3>Web API / SDK</h3>
                <p>
                    We provide a REST-based Web API that allows you to build custom web interfaces, integrate with third-party CRMs, and create unique mobile experiences. Use our SDKs to develop webhooks for real-time notifications regarding deposits, withdrawals, and margin calls.
                </p>

                <h3>Common Integrations:</h3>
                <ul>
                    <li>Popular Forex CRMs (e.g., [Provider Name])</li>
                    <li>Payment Service Providers (PSPs) and Crypto Gateways</li>
                    <li>KYC/AML Verification services</li>
                    <li>Marketing automation and email tools</li>
                </ul>

                <h2 id="pricing">Pricing & Setup</h2>
                <p>
                    We offer flexible pricing models designed to grow alongside your brokerage, ensuring that your costs remain aligned with your active user base.
                </p>

                <h3>What's Included</h3>
                <ul>
                    <li>Branded MT5 Desktop, Web, and Mobile terminals.</li>
                    <li>MT5 Manager access with full administrative rights.</li>
                    <li>Standard hosting and server maintenance.</li>
                    <li>Basic liquidity connectivity setup.</li>
                    <li>Technical onboarding and staff training.</li>
                    <li>24/7 Emergency technical support.</li>
                </ul>

                <h3>Optional Add-Ons</h3>
                <ul>
                    <li>Advanced CRM integration.</li>
                    <li>Custom Liquidity Bridge configurations.</li>
                    <li>PAMM/MAM/Copy Trading modules.</li>
                    <li>Additional security layers and custom firewalls.</li>
                </ul>

                <h3>Setup Timeline</h3>
                <ol>
                    <li><strong>Consultation & Agreement (Days 1-2):</strong> Requirement gathering and contract signing.</li>
                    <li><strong>Infrastructure Provisioning (Days 3-5):</strong> Server setup and security configuration.</li>
                    <li><strong>Branding & Customization (Days 5-7):</strong> Terminal branding and group settings.</li>
                    <li><strong>Integration & Testing (Days 7-10):</strong> API connections and UAT (User Acceptance Testing).</li>
                    <li><strong>Go-Live & Support (Day 14):</strong> Final launch and hand-over to your team.</li>
                </ol>

                <h2 id="faq">Frequently Asked Questions</h2>
                <FAQAccordion faqs={faqs} />
            </ContentPageLayout>
        </main>
    );
}
