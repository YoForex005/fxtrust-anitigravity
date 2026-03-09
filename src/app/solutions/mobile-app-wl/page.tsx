
import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

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
                    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"White Label Mobile App | Custom iOS & Android","description":"Launch your own branded mobile trading app for iOS and Android. High-performance White Label solution with real-time charts and full broker integration.","url":"https://fxtrusts.com/solutions/mobile-app-wl"}) }}
      />
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
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Ecosystem
                            </h4>
                            <p>Ownership of the Ecosystem: Avoid third-party providers; keep clients in your branded environment.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                Communication
                            </h4>
                            <p>Direct Communication: Push notifications for margin calls, price hits, or promos.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Retention
                            </h4>
                            <p>Superior User Retention: dedicated apps lower churn compared to mobile-web.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2.69l5.74 5.88a1 1 0 0 1 .23.95l-1.35 6a1 1 0 0 1-.5.7l-4.12 2.37a1 1 0 0 1-1 0l-4.12-2.37a1 1 0 0 1-.5-.7l-1.35-6a1 1 0 0 1 .23-.95L12 2.69z" /></svg>
                                Integration
                            </h4>
                            <p>Custom Integration: Tailor funding and support features to your needs.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Compliance
                            </h4>
                            <p>Compliance Readiness: Built-in KYC upload and AML monitoring modules.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                Speed
                            </h4>
                            <p>Low Latency Execution: Native code ensures zero-lag order execution.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></svg>
                                Updates
                            </h4>
                            <p>Regular Updates: We handle technical maintenance and OS compatibility.</p>
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
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                London
                            </h4>
                            <p>London, UK - Equinix LD4 (Direct Cross-Connects)</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                New York
                            </h4>
                            <p>New York, USA - Equinix NY4</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Singapore
                            </h4>
                            <p>Singapore - SG1 (Asian Regional Hub)</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Dubai
                            </h4>
                            <p>Dubai, UAE - MENA Region Hub</p>
                        </div>
                    </div>
                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M4 17l6-6-6-6" /><path d="M12 19h8" /></svg>
                                API
                            </h4>
                            <p>Dedicated API Gateway: Isolated endpoints for high-speed mobile data.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12" y2="20" /></svg>
                                Caching
                            </h4>
                            <p>Edge Caching: Global CDNs to reduce chart loading times.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                DDoS
                            </h4>
                            <p>DDoS Protection: Hardware-level traffic filtering.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                Sockets
                            </h4>
                            <p>Secure WebSockets: Real-time price streaming via encrypted pipes.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" /></svg>
                                Failover
                            </h4>
                            <p>Automated Failover: Redundant clusters ensure online status.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                SLA
                            </h4>
                            <p>SLA Statement: 99.9% availability guarantee.</p>
                        </div>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Designed to provide a professional-grade experience for both novice and experienced traders.</p>

                    <h3>Trading & Analysis Features</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="9" y1="9" x2="15" y2="15" /><line x1="15" y1="9" x2="9" y2="15" /></svg>
                                Execution
                            </h4>
                            <p>Full order book visibility and one-click execution.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                                Charts
                            </h4>
                            <p>Multi-chart viewing with landscape and portrait support.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                Analysis
                            </h4>
                            <p>Advanced technical tools: RSI, MACD, Bollinger Bands.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                Orders
                            </h4>
                            <p>Multiple types: Market, Limit, Stop, and Trailing Stop.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                                Positions
                            </h4>
                            <p>Real-time position management and P&L tracking.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                                Signals
                            </h4>
                            <p>Price alerts and automated trading signals.</p>
                        </div>
                    </div>

                    <h3>Mobile-Specific Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /></svg>
                                Biometrics
                            </h4>
                            <p>Biometric Login (FaceID / Fingerprint) for security.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                                Themes
                            </h4>
                            <p>Dark Mode and Light Mode support.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                Chat
                            </h4>
                            <p>Integrated "Live Chat" for instant client support.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                                Scanner
                            </h4>
                            <p>In-app document scanner for rapid KYC verification.</p>
                        </div>
                    </div>

                    <h3>Back-Office Connectivity</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /><polyline points="9 9 13 4 15 4 17 4 20 4" /></svg>
                                Sync
                            </h4>
                            <p>Real-time balance and equity synchronization with platforms.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Funds
                            </h4>
                            <p>Integrated deposit/withdrawal requests via local and crypto gateways.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                History
                            </h4>
                            <p>Full trade history with filterable reporting.</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>The mobile app is designed to be the front-end for your existing brokerage or prop firm technology stack.</p>

                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                                Control
                            </h4>
                            <p>Control featured instruments and promotional banners within the app.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                Analytics
                            </h4>
                            <p>Monitor app usage analytics and user behavior.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                                Notifications
                            </h4>
                            <p>Manage push notification campaigns from a centralized dashboard.</p>
                        </div>
                    </div>

                    <h3>Gateway & Connectivity API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                MT4/MT5
                            </h4>
                            <p>MetaTrader 4/5: Native bridge for real-time account and trade syncing.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                cTrader
                            </h4>
                            <p>cTrader: Deep integration via Open API.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                                Payments
                            </h4>
                            <p>Payment Gateways: Integration with PSPs and crypto processors.</p>
                        </div>
                    </div>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a comprehensive REST API and SDK. This allows your team to add custom modules to the app, such as specialized educational content, proprietary trading signals, or a custom news feed, ensuring the app evolves with your business.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is structured with a setup fee for branding and store submission, followed by a monthly maintenance and support fee.</p>

                    <h3>What’s Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                                Apps
                            </h4>
                            <p>Custom-branded iOS and Android applications.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                Submission
                            </h4>
                            <p>Direct submission to Apple and Google stores.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>
                                Integration
                            </h4>
                            <p>Integration with [1] trading server and [1] CRM.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Support
                            </h4>
                            <p>[24/7] Technical support for infrastructure.</p>
                        </div>
                    </div>

                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                                Custom
                            </h4>
                            <p>Custom feature development (e.g., social trading).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Languages
                            </h4>
                            <p>Multi-language translation services.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                ASO
                            </h4>
                            <p>Advanced marketing and App Store Optimization.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                                Competitions
                            </h4>
                            <p>Integrated "Trader Leaderboards" and competitions.</p>
                        </div>
                    </div>

                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                                Design
                            </h4>
                            <p>Design & Branding (Days 1-5): Defining the look, feel, and brand assets.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                                API
                            </h4>
                            <p>API Configuration (Days 5-10): Linking the app to your trading server and CRM.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                                Testing
                            </h4>
                            <p>Beta Testing (Days 10-15): Rigorous testing on multiple device models.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                                Submission
                            </h4>
                            <p>Store Submission (Days 15-20): Handling the approval process.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>05</span>
                                Go-Live
                            </h4>
                            <p>Go-Live (Day [X]): Official launch on the App Store and Google Play.</p>
                        </div>
                    </div>
                </div>

                <div id="faq">
                    <h2>Frequently Asked Questions</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </ContentPageLayout>
        </main>
    );
}
