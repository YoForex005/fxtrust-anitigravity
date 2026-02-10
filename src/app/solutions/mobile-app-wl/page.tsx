
import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
    title: 'White Label Mobile App | Custom iOS & Android',
    description: 'Launch your own branded mobile trading app for iOS and Android. High-performance White Label solution with real-time charts and full broker integration.',
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/mobile-app-wl',
    },
    keywords: [
        'White Label Mobile App',
        'Branded Trading App',
        'Custom iOS Trading App',
        'Android Forex App',
        'Mobile Brokerage Solution',
        'White Label MT4 MT5 App'
    ],
    openGraph: {
        title: 'White Label Mobile App | Custom iOS & Android',
        description: 'Launch your own branded mobile trading app for iOS and Android. High-performance White Label solution with real-time charts and full broker integration.',
        url: 'https://fxtrusts.com/solutions/mobile-app-wl',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'White Label Mobile App | Custom iOS & Android',
        description: 'Launch your own branded mobile trading app for iOS and Android. High-performance White Label solution with real-time charts and full broker integration.',
    },
};

export default function MobileAppWLPage() {
    const tableOfContents = [
        { id: 'solution', title: 'White Label Mobile App Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why White Label Mobile App?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'MT5 Solution', href: '/solutions/mt5', readTime: '5 min' },
        { title: 'Liquidity Access', href: '/solutions/liquidity-access', readTime: '4 min' },
        { title: 'Crypto Gateway', href: '/solutions/crypto-gateway', readTime: '3 min' },
    ];

    const quickFacts = [
        { label: 'Uptime SLA', value: '99.9%' },
        { label: 'Deployment', value: '[X] Days' },
        { label: 'Indicators', value: '100+' },
        { label: 'Monitoring', value: '24/7' },
    ];

    const features = [
        'Real-Time Push Notifications',
        'Biometric Secure Login',
        'Advanced Technical Charting',
        'In-App Deposits & Payouts',
        'Multi-Language Interface',
        'One-Click Trading',
        'Integrated Economic Calendar'
    ];

    const faqs = [
        {
            question: 'Is the app listed under my company\'s name?',
            answer: 'Yes. Unlike "generic" platform apps, our White Label solution is submitted to the stores under your developer account, meaning your company name is listed as the provider.',
        },
        {
            question: 'Does it work with MT4 and MT5?',
            answer: 'Absolutely. The app is fully compatible with MetaTrader 4, MetaTrader 5, and cTrader. All trades, balances, and history are synchronized in real-time across all devices.',
        },
        {
            question: 'How do you handle App Store rejections?',
            answer: 'Our team has years of experience in store submissions. We ensure your app meets all Apple and Google guidelines regarding financial services, handled through our managed submission service.',
        },
        {
            question: 'Can clients deposit money directly through the app?',
            answer: 'Yes. We integrate your Payment Service Providers (PSPs) and Crypto gateways directly into the app, allowing for a frictionless, one-click funding experience.',
        },
        {
            question: 'What is the minimum requirement to start?',
            answer: 'You will need a registered company and a trading server license. Our team will guide you through the Developer Account setup for Apple and Google to ensure a smooth launch.',
        },
        {
            question: 'How often is the app updated?',
            answer: 'We provide regular maintenance updates to ensure compatibility with new iOS and Android releases, as well as periodic feature enhancements and security patches.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="WHITE LABEL SOLUTION"
                title="White Label Mobile App"
                subtitle="Put your brokerage in the palm of your clients' hands. Our White Label mobile solution provides a premium, fully branded trading experience for iOS and Android, featuring lightning-fast execution, advanced technical analysis tools, and seamless account management."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
            >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', fontSize: '0.875rem', color: '#4B5563' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        <span>Native Performance</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        <span>Rapid Deployment</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        <span>Unified Experience</span>
                    </div>
                </div>
            </InnerPageHeader>

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Launch Your Branded App in [X Days]"
                ctaText="Deliver a professional mobile trading experience under your own firm's name."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Contact our mobile developers to discuss custom UI/UX requirements."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    <h1>White Label Mobile App Solution</h1>
                    <p>
                        The White Label Mobile App is a sophisticated, turnkey trading solution designed for brokers, prop firms, and fintech startups who want to own the client relationship. In an era where over 70% of trades are initiated via mobile, having a generic platform is no longer enough. Our custom iOS and Android apps allow you to offer a unique, high-performance environment that carries your brand’s identity, increasing user loyalty and market authority.
                    </p>
                    <p>
                        This solution removes the multi-million dollar overhead of developing a trading app from scratch. We provide a hardened, secure, and feature-rich core that is fully customizable to your specifications. From the splash screen and color palette to the integrated payment gateways and support tools, the app is built to represent your firm exclusively.
                    </p>
                    <ul>
                        <li><strong>Brand Dominance:</strong> Stand out in the App Store and Google Play with your own name, logo, and unique interface.</li>
                        <li><strong>End-to-End Trading:</strong> Users can register, verify their KYC, fund their accounts, and trade—all without leaving the app.</li>
                        <li><strong>Enterprise-Grade Security:</strong> Integrated 2FA, biometric encryption, and secure API tunnels protect user data and funds.</li>
                        <li><strong>Global Market Access:</strong> Offer trading in Forex, Crypto, Stocks, and Commodities via a single mobile portal.</li>
                    </ul>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our mobile infrastructure is optimized for high-concurrency environments, ensuring your app remains responsive during peak market volatility.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>99.9%</strong>
                            <span>App Runtime Uptime SLA</span>
                        </div>
                        <div className="statBox">
                            <strong>[X] Days</strong>
                            <span>Average Deployment</span>
                        </div>
                        <div className="statBox">
                            <strong>100+</strong>
                            <span>Technical Indicators</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Backend Monitoring</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why White Label Mobile App?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Ownership of the Ecosystem</h3>
                            <p className="text-sm text-gray-600">Avoid sending your clients to third-party app providers; keep them within your own branded environment.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Direct Communication</h3>
                            <p className="text-sm text-gray-600">Use powerful push notifications to alert traders of margin calls, price hits, or promotional offers instantly.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Superior User Retention</h3>
                            <p className="text-sm text-gray-600">A dedicated, easy-to-use app significantly lowers churn compared to mobile-web interfaces.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Custom Integration</h3>
                            <p className="text-sm text-gray-600">Tailor the app’s funding and support features to match your specific localized payment providers.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Compliance Readiness</h3>
                            <p className="text-sm text-gray-600">Built-in modules for KYC document uploads and AML-compliant data handling.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Low Latency Execution</h3>
                            <p className="text-sm text-gray-600">Native code ensures that order execution is as fast as your server allows, with zero web-browser lag.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Regular Updates</h3>
                            <p className="text-sm text-gray-600">We handle the technical maintenance and OS updates, ensuring your app always works on the latest iPhone or Android models.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        Our "White Label" approach means the technology is ours, but the brand is 100% yours.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>Full UI/UX Customization</h4>
                            <p>Apply your brand's color codes, font styles, and iconography to create a truly bespoke trading terminal.</p>
                        </div>
                        <div className="featureCard">
                            <h4>Branded Store Presence</h4>
                            <p>Your app appears in the Apple App Store and Google Play Store under your developer account and company name.</p>
                        </div>
                        <div className="featureCard">
                            <h4>Custom Splash & Iconography</h4>
                            <p>From the home screen icon to the loading animations, every visual element is aligned with your corporate identity.</p>
                        </div>
                        <div className="featureCard">
                            <h4>Proprietary Notifications</h4>
                            <p>All alerts and communications are delivered through your branded notification channel.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        The performance of a mobile app is only as good as the backend infrastructure supporting it. We provide a world-class financial hosting environment.
                    </p>
                    <h3>Data Center Locations</h3>
                    <ul>
                        <li><strong>London, UK</strong> - Equinix LD4 (Direct Cross-Connects)</li>
                        <li><strong>New York, USA</strong> - Equinix NY4</li>
                        <li><strong>Singapore</strong> - SG1 (Asian Regional Hub)</li>
                        <li><strong>Dubai, UAE</strong> - MENA Region Hub</li>
                    </ul>
                    <h3>Infrastructure Specifications</h3>
                    <ul>
                        <li><strong>Dedicated API Gateway:</strong> Isolated endpoints for mobile traffic to ensure high-speed data delivery.</li>
                        <li><strong>Edge Caching:</strong> Global content delivery networks (CDNs) to reduce chart loading times for users worldwide.</li>
                        <li><strong>DDoS Protection:</strong> Hardware-level traffic filtering to prevent app service interruptions.</li>
                        <li><strong>Secure WebSockets:</strong> Real-time price streaming via encrypted, low-latency data pipes.</li>
                        <li><strong>Automated Failover:</strong> Redundant server clusters ensure the app remains online even during maintenance.</li>
                        <li><strong>SLA Statement:</strong> We guarantee [99.9%] availability for the mobile backend services. Our infrastructure is colocated in the same data centers as major liquidity providers to minimize price-feed latency.</li>
                    </ul>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Designed to provide a professional-grade experience for both novice and experienced traders.</p>

                    <h3>Trading & Analysis Features</h3>
                    <ul>
                        <li>Full order book visibility and one-click execution.</li>
                        <li>Multi-chart viewing with landscape and portrait support.</li>
                        <li>Advanced technical tools: RSI, MACD, Bollinger Bands, and more.</li>
                        <li>Multiple order types: Market, Limit, Stop, and Trailing Stop.</li>
                        <li>Real-time position management and P&L tracking.</li>
                        <li>Price alerts and automated trading signals.</li>
                    </ul>

                    <h3>Mobile-Specific Tools</h3>
                    <ul>
                        <li>Biometric Login (FaceID / Fingerprint).</li>
                        <li>Dark Mode and Light Mode support.</li>
                        <li>Integrated "Live Chat" for instant client support.</li>
                        <li>In-app document scanner for rapid KYC verification.</li>
                    </ul>

                    <h3>Back-Office Connectivity</h3>
                    <ul>
                        <li>Real-time balance and equity synchronization with MT4/MT5/cTrader.</li>
                        <li>Integrated deposit/withdrawal requests via local and crypto gateways.</li>
                        <li>Full trade history with filterable reporting.</li>
                    </ul>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>The mobile app is designed to be the front-end for your existing brokerage or prop firm technology stack.</p>

                    <h3>Manager / Admin API</h3>
                    <ul>
                        <li>Control featured instruments and promotional banners within the app.</li>
                        <li>Monitor app usage analytics and user behavior.</li>
                        <li>Manage push notification campaigns from a centralized dashboard.</li>
                    </ul>

                    <h3>Gateway & Connectivity API</h3>
                    <ul>
                        <li><strong>MetaTrader 4/5:</strong> Native bridge for real-time account and trade syncing.</li>
                        <li><strong>cTrader:</strong> Deep integration via Open API.</li>
                        <li><strong>Payment Gateways:</strong> Integration with [PSP A], [PSP B], and crypto processors.</li>
                    </ul>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a comprehensive REST API and SDK. This allows your team to add custom modules to the app, such as specialized educational content, proprietary trading signals, or a custom news feed, ensuring the app evolves with your business.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is structured with a setup fee for branding and store submission, followed by a monthly maintenance and support fee.</p>

                    <h3>What’s Included</h3>
                    <ul>
                        <li>Custom-branded iOS and Android applications.</li>
                        <li>Direct submission to Apple and Google stores.</li>
                        <li>Integration with [1] trading server and [1] CRM.</li>
                        <li>Secure mobile backend hosting.</li>
                        <li>Regular OS compatibility and security updates.</li>
                        <li>[24/7] Technical support for infrastructure.</li>
                    </ul>

                    <h3>Optional Add-Ons</h3>
                    <ul>
                        <li>Custom feature development (e.g., social trading integration).</li>
                        <li>Multi-language translation services.</li>
                        <li>Advanced marketing and App Store Optimization (ASO).</li>
                        <li>Integrated "Trader Leaderboards" and competitions.</li>
                    </ul>

                    <h3>Setup Timeline</h3>
                    <ol>
                        <li><strong>Design & Branding (Days 1-5):</strong> Defining the look, feel, and brand assets.</li>
                        <li><strong>API Configuration (Days 5-10):</strong> Linking the app to your trading server and CRM.</li>
                        <li><strong>Beta Testing (Days 10-15):</strong> Rigorous testing on multiple device models.</li>
                        <li><strong>Store Submission (Days 15-20):</strong> Handling the approval process with Apple and Google.</li>
                        <li><strong>Go-Live (Day [X]):</strong> Official launch on the App Store and Google Play.</li>
                    </ol>
                </div>

                <div id="faq">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faqGrid">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faqItem">
                                <h4>{faq.question}</h4>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentPageLayout>
        </main>
    );
}
