import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Liquidity Bridge & Aggregation | Connect to Top-Tier LPs',
    description: 'Optimize your A-Book execution with a high-speed Liquidity Bridge and Aggregator. Connect to Tier-1 LPs, reduce slippage, and manage risk with ease.',
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/liquidity',
    },
    keywords: [
        'Liquidity Bridge',
        'Liquidity Aggregator',
        'A-Book Broker Execution',
        'Forex Bridge Software',
        'MT4 MT5 LP Connectivity',
        'Multi-asset Liquidity Bridge',
    ],
    openGraph: {
        title: 'Liquidity Bridge & Aggregation | Connect to Top-Tier LPs',
        description: 'Optimize your A-Book execution with a high-speed Liquidity Bridge and Aggregator. Connect to Tier-1 LPs, reduce slippage, and manage risk with ease.',
        url: 'https://fxtrusts.com/solutions/liquidity',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Liquidity Bridge & Aggregation | Connect to Top-Tier LPs',
        description: 'Optimize your A-Book execution with a high-speed Liquidity Bridge and Aggregator. Connect to Tier-1 LPs, reduce slippage, and manage risk with ease.',
    },
};

export default function LiquidityPage() {
    const tableOfContents = [
        { id: 'solution', title: 'Liquidity Bridge & Aggregation Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Liquidity Bridge?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'MT5 White Label', href: '/solutions/mt5', readTime: '5 min' },
        { title: 'Institutional CRM', href: '/solutions/crm', readTime: '6 min' },
        { title: 'Risk Management', href: '/solutions/risk-management', readTime: '4 min' },
    ];

    const quickFacts = [
        { label: 'Uptime SLA', value: '99.99%' },
        { label: 'Latency', value: '< 10ms' },
        { label: 'Map Tier-1 LPs', value: '20+' },
        { label: 'Support', value: '24/7' },
    ];

    const features = [
        'Multi-LP Aggregation Engine',
        'Smart Order Routing (SOR)',
        'Real-time Risk Monitoring',
        'Advanced Mark-up Management',
        'Fix API Connectivity',
        'Detailed Execution Reporting',
        'Failover Protection',
    ];

    const faqs = [
        {
            question: 'How long does it take to connect a new Liquidity Provider?',
            answer: 'Once the LP provides the FIX credentials, we can typically have a new connection mapped and tested within 1 to 3 business days.',
        },
        {
            question: 'Does the bridge support both MT4 and MT5?',
            answer: 'Yes. Our bridge is compatible with both MT4 and MT5, and it can even aggregate liquidity across multiple servers or different trading platforms simultaneously.',
        },
        {
            question: 'Can I set different mark-ups for different clients?',
            answer: 'Absolutely. The bridge allows for granular mark-up profiles. You can apply specific spreads or commissions based on the client group on your trading server.',
        },
        {
            question: 'What happens if an LP goes offline during a trade?',
            answer: 'Our bridge includes automated failover rules. If a connection is lost, the system can automatically reroute the order to the next best available LP in your aggregation pool.',
        },
        {
            question: 'What are the minimum volume requirements?',
            answer: 'We do not enforce strict minimum volumes; however, our solution is best suited for brokers processing at least $10-50 million in monthly turnover to maximize the benefits of aggregation.',
        },
        {
            question: 'Is my trade data secure?',
            answer: 'Yes. All bridge communication is performed over encrypted FIX sessions or VPNs. We do not store your trade data beyond the logs required for your own reporting and troubleshooting.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="Broker Infrastructure"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}
                title="Liquidity Bridge & Aggregation"
                subtitle="Unlock institutional-grade execution with a robust bridge and aggregation engine. Connect your trading platform to global liquidity providers, minimize latency, and optimize your A-Book risk management."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
            />

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Optimize Your Execution in X Days"
                ctaText="Deploy a high-performance bridge to connect your brokerage to global Tier-1 liquidity."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Contact our liquidity specialists to discuss custom LP configurations."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Liquidity Bridge & Aggregation | Connect to Top-Tier LPs","description":"Optimize your A-Book execution with a high-speed Liquidity Bridge and Aggregator. Connect to Tier-1 LPs, reduce slippage, and manage risk with ease.","url":"https://fxtrusts.com/solutions/liquidity"}) }}
      />
      <h1>Liquidity Bridge & Aggregation Solution</h1>
                    <p>
                        The Liquidity Bridge & Aggregation engine is the technical heart of any A-Book or Hybrid brokerage. It acts as a high-speed gateway that routes client orders from your trading terminal (MT4/MT5) directly to external Liquidity Providers (LPs). This solution is designed for fintech founders and institutional brokers who require transparency, speed, and the ability to aggregate price feeds from various sources into a single, optimized stream.
                    </p>
                    <p>
                        By utilizing our aggregation technology, you can ensure your clients always receive the tightest spreads available. The system automatically selects the best Bid and Ask prices across your pool of LPs, allowing you to remain competitive in the market while maintaining full control over your execution policies and risk exposure.
                    </p>
                    <ul>
                        <li><strong>Advanced Price Aggregation:</strong> Combines multiple liquidity sources into one "Best Bid/Best Offer" (BBO) stream for your clients.</li>
                        <li><strong>High-Speed Execution:</strong> Built on enterprise-grade FIX protocol to ensure orders are filled at the best possible price with minimal slippage.</li>
                        <li><strong>Customizable Routing Rules:</strong> Define exactly how and where orders are sent based on symbol, client group, or order volume.</li>
                        <li><strong>A-Book Transparency:</strong> Gain full visibility into your STP (Straight-Through Processing) workflows and execution quality.</li>
                    </ul>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our bridge technology is engineered for the high-frequency requirements of modern financial markets, ensuring stability even during periods of extreme volatility.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>99.99%</strong>
                            <span>Execution Uptime SLA</span>
                        </div>
                        <div className="statBox">
                            <strong>&lt; 10ms</strong>
                            <span>Latency to LPs</span>
                        </div>
                        <div className="statBox">
                            <strong>20+</strong>
                            <span>Pre-integrated LPs</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Expert Technical Support</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why Liquidity Bridge?</h2>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M3 3v18h18M7 16l4-4 4 4 5-8" /></svg>
                                Reduced Slippage
                            </h4>
                            <p>By aggregating multiple LPs, the bridge finds deeper liquidity, resulting in better fills for your clients.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                Institutional Connectivity
                            </h4>
                            <p>Access Tier-1 liquidity pools that are typically reserved for large-scale financial institutions.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Risk Mitigation
                            </h4>
                            <p>Use advanced failover rules to automatically route orders to a backup LP if a primary provider goes offline.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Dynamic Mark-ups
                            </h4>
                            <p>Easily manage your revenue by applying custom spreads or commissions per symbol or per client group.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                Scalability
                            </h4>
                            <p>Whether you process 100 or 100,000 trades a day, the bridge scales effortlessly with your volume.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a4 4 0 0 0-4-4H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a4 4 0 0 1 4-4h6z" /></svg>
                                Multi-Asset Support
                            </h4>
                            <p>Execute Forex, Metals, Indices, and Crypto through a single unified bridge interface.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Comprehensive Analytics
                            </h4>
                            <p>Track LP performance, rejection rates, and execution speed with built-in reporting tools.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        While the bridge is a backend component, our solution allows you to maintain a professional presence when dealing with institutional partners and sub-brokers.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                Custom Reporting
                            </h4>
                            <p>Generate branded execution and slippage reports to share with institutional clients or regulatory authorities.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                Manager Interface
                            </h4>
                            <p>A clean, professional admin dashboard for your dealing desk that reflects your firm's operational standards.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                                Liquidity Pool Customization
                            </h4>
                            <p>Create unique "liquidity groups" that you can market as specialized trading environments (e.g., "Institutional ECN" vs. "Retail Standard").</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                                API Documentation
                            </h4>
                            <p>Provide your own branded FIX API documentation to clients who wish to connect directly to your aggregated liquidity.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        The Liquidity Bridge is hosted in the world’s most prominent financial data centers to ensure physical proximity to major liquidity providers.
                    </p>
                    <h3>Data Center Locations</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                London, UK
                            </h4>
                            <p>Equinix LD4 - Primary European Hub.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                New York, USA
                            </h4>
                            <p>Equinix NY4 - Primary US Financial Hub.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Tokyo, Japan
                            </h4>
                            <p>Equinix TY3 - Asian Market Gateway.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Singapore
                            </h4>
                            <p>Equinix SG1 - APAC Regional Hub.</p>
                        </div>
                    </div>

                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                Cross-Connected
                            </h4>
                            <p>Direct connections to major Tier-1 Banks and Prime Brokers.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                                Dedicated Hardware
                            </h4>
                            <p>Optimized for high-frequency FIX messaging and low-latency execution.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                Redundant Paths
                            </h4>
                            <p>Multiple redundant internet paths to prevent connectivity loss.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Security Protocols
                            </h4>
                            <p>Hardened security to protect trade data and LP credentials.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                                Real-Time Backups
                            </h4>
                            <p>Automated backups of all bridge configurations and logs.</p>
                        </div>
                    </div>
                    <div className="infoBox">
                        <p>
                            <strong>SLA Statement:</strong> Our infrastructure is designed for 99.99% availability. By hosting in Equinix LD4 and NY4, we provide the lowest possible latency between your trading server and the global liquidity pool.
                        </p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Our bridge solution provides the granular control needed by professional dealing desks.</p>

                    <h3>Execution &amp; Routing Features</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" /></svg>
                                Smart Order Routing
                            </h4>
                            <p>SOR based on price, volume, and LP health for optimal execution.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                                Partial Fill Support
                            </h4>
                            <p>Ensure large orders are executed efficiently with partial fills.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                Order Types
                            </h4>
                            <p>Support for Market, Limit, and Stop orders with various fill types.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                                Status Dashboard
                            </h4>
                            <p>Real-time bridge status and LP connectivity monitoring.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
                                Symbol Mapping
                            </h4>
                            <p>Automated mapping between your server and different LP naming conventions.</p>
                        </div>
                    </div>

                    <h3>Risk &amp; Management Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Exposure Limits
                            </h4>
                            <p>Per-LP exposure limits and automated risk alerts.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Mark-up Management
                            </h4>
                            <p>Hard mark-up and soft mark-up (spread) management tools.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                                Rejection Rules
                            </h4>
                            <p>Order rejection rules for toxic flow or off-market pricing.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Audit Logging
                            </h4>
                            <p>Sophisticated logging for audit trails and dispute resolution.</p>
                        </div>
                    </div>

                    <h3>Analytics Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M3 3v18h18M7 16l4-4 4 4 5-8" /></svg>
                                LP Performance
                            </h4>
                            <p>Metrics including Latency, Rejection rate, and Slippage tracking.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                                Volume Distribution
                            </h4>
                            <p>Visual volume distribution charts per LP and per symbol.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                PnL Tracking
                            </h4>
                            <p>Profit and Loss tracking for A-Book and B-Book segments.</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>Our bridge is built on open standards, making it the most flexible connectivity solution in the market.</p>

                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                Remote Configuration
                            </h4>
                            <p>Remotely configure symbol settings and mark-ups via API.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                                Data Extraction
                            </h4>
                            <p>Extract real-time execution data for external risk management systems.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                LP Management
                            </h4>
                            <p>Manage LP login credentials and connectivity status via API.</p>
                        </div>
                    </div>

                    <h3>FIX API Connectivity</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
                                FIX 4.4 Protocol
                            </h4>
                            <p>Industry-standard FIX 4.4 protocol support for reliable connectivity.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                Platform Connectivity
                            </h4>
                            <p>Connect any proprietary trading platform or front-end to our bridge.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                                Direct Market Access
                            </h4>
                            <p>Provide direct liquidity access (DMA) to your institutional clients.</p>
                        </div>
                    </div>

                    <h3>Web API / SDK</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
                                Comprehensive SDK
                            </h4>
                            <p>Build custom dashboards or integrate bridge data into your internal CRM. See real-time A-Book performance without leaving your primary management environment.</p>
                        </div>
                    </div>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing models are designed to be fair, typically involving a combination of a monthly fee and a volume-based component.</p>

                    <h3>What's Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                Software License
                            </h4>
                            <p>Full Bridge &amp; Aggregator software license included.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                LP Connectivity
                            </h4>
                            <p>Connectivity for up to [X] Liquidity Providers.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
                                Symbol Mapping
                            </h4>
                            <p>Standard symbol mapping and setup configuration.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                24/7 Monitoring
                            </h4>
                            <p>Technical monitoring of FIX sessions around the clock.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Performance Reports
                            </h4>
                            <p>Monthly execution and performance reports.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Regular Updates
                            </h4>
                            <p>Regular security and performance updates included.</p>
                        </div>
                    </div>

                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg>
                                Additional LPs
                            </h4>
                            <p>Additional LP connections beyond the standard package.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                                Failover Setup
                            </h4>
                            <p>High-availability failover server setup for maximum uptime.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
                                Custom Gateway
                            </h4>
                            <p>Custom FIX gateway development for unique liquidity sources.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                Risk Consulting
                            </h4>
                            <p>Specialized A-Book risk management consulting services.</p>
                        </div>
                    </div>

                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                                LP Connectivity Check
                            </h4>
                            <p>Verifying credentials and FIX sessions with your LPs (Days 1-2).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                                Bridge Installation
                            </h4>
                            <p>Deploying the software in the selected data center (Days 3-4).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                                Symbol Mapping
                            </h4>
                            <p>Configuring symbols, spreads, and routing rules (Days 5-7).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                                UAT &amp; Testing
                            </h4>
                            <p>End-to-end testing of order execution (Days 7-9).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>05</span>
                                Go-Live
                            </h4>
                            <p>Switching live traffic to the new bridge (Day 10).</p>
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
