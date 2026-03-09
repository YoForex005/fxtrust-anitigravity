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
                    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"MetaTrader 5 (MT5) White Label License | Branded Broker Platform","description":"Launch your own branded brokerage with a MetaTrader 5 (MT5) White Label. Fully customizable, secure hosting, and 24/7 expert support for brokers.","url":"https://fxtrusts.com/solutions/mt5"}) }}
      />
      <h1>MetaTrader 5 (MT5) White Label License Solution</h1>
                    <p>
                        The MetaTrader 5 (MT5) White Label solution is a comprehensive package designed for emerging brokers, fintech startups, and established financial institutions looking to offer a premium trading experience. By utilizing our infrastructure, you bypass the massive capital expenditure and technical complexity of purchasing a full MetaQuotes server license, while still providing your clients with the industry’s gold-standard platform.
                    </p>
                    <p>
                        This turnkey solution is built for scalability. Whether you are targeting retail forex traders or institutional investors, the MT5 White Label allows you to operate under your own brand name, set your own trading conditions, and manage your clients through a powerful, centralized backend.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Turnkey Setup
                            </h4>
                            <p>A complete ecosystem including the trading terminal, manager tools, and liquidity connectivity.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg>
                                Total Brand Ownership
                            </h4>
                            <p>Your logo and company information are visible across all desktop, mobile, and web versions.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Cost-Effective Entry
                            </h4>
                            <p>Access the world&apos;s most advanced multi-asset platform with a manageable monthly fee structure.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a4 4 0 0 0-4-4H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a4 4 0 0 1 4-4h6z" /></svg>
                                Multi-Asset Capabilities
                            </h4>
                            <p>Offer trading in Forex, Stocks, Futures, and Cryptocurrencies from a single interface.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Advanced Risk Controls
                            </h4>
                            <p>Comprehensive tools to manage exposure, leverage, and client groups in real-time.</p>
                        </div>
                    </div>
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
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                            Multi-Asset Support
                        </h4>
                        <p>Designed from the ground up to handle Forex and centralized exchange-traded instruments.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" /></svg>
                            Hedging & Netting
                        </h4>
                        <p>Flexibility of both accounting systems to suit diverse trading strategies.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M3 3v18h18M7 16l4-4 4 4 5-8" /></svg>
                            Advanced Analytics
                        </h4>
                        <p>Features 21 timeframes and over 80 built-in indicators for professional-grade study.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M2 12h20M2 5h20M2 19h20" /></svg>
                            Depth of Market (DOM)
                        </h4>
                        <p>Built-in Depth of Market feature for real-time liquidity analysis and transparency.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
                            MQL5 Modernity
                        </h4>
                        <p>Faster, more efficient programming language for automated trading bots and signals.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            Regulatory Readiness
                        </h4>
                        <p>Built-in reporting and compliance tools to meet global jurisdictional standards.</p>
                    </div>
                </div>

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
                        <p>Your company name and logo are integrated into the &quot;About&quot; section, splash screens, and header of the desktop and mobile applications.</p>
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
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            London, UK
                        </h4>
                        <p>LD4 Equinix Data Center - Primary European Hub.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            New York, USA
                        </h4>
                        <p>NY4 Equinix Data Center - Primary US Financial Hub.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            Singapore
                        </h4>
                        <p>SG1 Equinix Data Center - APAC Regional Gateway.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            Dubai, UAE
                        </h4>
                        <p>Equinix Regional Hub - MENA Strategic Location.</p>
                    </div>
                </div>

                <h3>Infrastructure Specifications</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                            Low Latency
                        </h4>
                        <p>Equinix-based cross-connects for ultra-low latency execution.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                            Hardware Redundancy
                        </h4>
                        <p>Full hardware redundancy with automated failover systems.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            DDoS Protection
                        </h4>
                        <p>Tier-1 protection to safeguard against malicious network attacks.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                            Data Security
                        </h4>
                        <p>Encrypted database backups performed on Daily/Hourly intervals.</p>
                    </div>
                </div>

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
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" /></svg>
                            Accounting Modes
                        </h4>
                        <p>Support for both Netting and Hedging accounting systems.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                            One-Click Trading
                        </h4>
                        <p>Fast execution with advanced Depth of Market integration.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                            Full Order Set
                        </h4>
                        <p>Complete range of market, pending, and stop orders available.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                            Execution Modes
                        </h4>
                        <p>Market, Request, Instant, and Exchange execution types.</p>
                    </div>
                </div>

                <h3>Analytics Tools</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                            Analytics & Charting
                        </h4>
                        <p>80+ indicators and advanced charting with unlimited displays.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            Economic Calendar
                        </h4>
                        <p>Integrated real-time news and event feed with impact ratings.</p>
                    </div>
                </div>

                <h3>Algorithmic & Automation</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
                            MQL5 Development
                        </h4>
                        <p>Integrated environment for developing EAs and technical indicators.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                            Strategy Tester
                        </h4>
                        <p>High-speed testing and optimization for automated trading strategies.</p>
                    </div>
                </div>

                <h2 id="api">API & Integration</h2>
                <p>
                    Our MT5 White Label is designed to be the core of a larger, extensible business ecosystem through powerful API support.
                </p>

                <h3>Integration & Extensibility</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            Manager & Admin API
                        </h4>
                        <p>Automate account creation, adjustments, and reporting via CRM.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            Gateway & Connectivity
                        </h4>
                        <p>Connect to multiple Tier-1 liquidity providers with FIX Bridge support.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
                            Web API / SDK
                        </h4>
                        <p>REST-based API to build custom web and mobile trading experiences.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                            Common Integrations
                        </h4>
                        <p>Seamlessly connect with top CRMs, PSPs, and KYC verification services.</p>
                    </div>
                </div>

                <h2 id="pricing">Pricing & Setup</h2>
                <p>
                    We offer flexible pricing models designed to grow alongside your brokerage, ensuring that your costs remain aligned with your active user base.
                </p>

                <h3>Service Inclusions</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                            Turnkey Terminals
                        </h4>
                        <p>Branded Desktop, Web, and Mobile terminals for your clients.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            Full Maintenance
                        </h4>
                        <p>Standard hosting, server maintenance, and 24/7 technical support.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            Onboarding
                        </h4>
                        <p>Comprehensive technical onboarding and staff training provided.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                            Add-Ons
                        </h4>
                        <p>Optional PAMM/MAM, Copy Trading, and custom Bridge configurations.</p>
                    </div>
                </div>

                <h3>Setup Timeline</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                            Consultation
                        </h4>
                        <p>Requirement gathering and contract signing (Days 1-2).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                            Provisioning
                        </h4>
                        <p>Server setup and security configuration (Days 3-5).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                            Customization
                        </h4>
                        <p>Terminal branding and group settings (Days 5-7).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                            Go-Live
                        </h4>
                        <p>Integration testing and final platform launch (Day 14).</p>
                    </div>
                </div>

                <h2 id="faq">Frequently Asked Questions</h2>
                <FAQAccordion faqs={faqs} />
            </ContentPageLayout>
        </main>
    );
}
