import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Copy Trading & Social Trading Platform | White Label Solution',
    description: 'Launch your own Social Trading network with our high-performance Copy Trading platform. Seamlessly link followers to master traders with instant execution.',
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/copy-trading-social-trading-platform',
    },
    keywords: [
        'Copy Trading Platform',
        'Social Trading Software',
        'White Label Copy Trading',
        'Forex Trade Copier',
        'Multi-Asset Social Trading',
        'Mirror Trading Solution',
    ],
    openGraph: {
        title: 'Copy Trading & Social Trading Platform | White Label Solution',
        description: 'Launch your own Social Trading network with our high-performance Copy Trading platform. Seamlessly link followers to master traders with instant execution.',
        url: 'https://fxtrusts.com/solutions/copy-trading-social-trading-platform',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Copy Trading & Social Trading Platform | White Label Solution',
        description: 'Launch your own Social Trading network with our high-performance Copy Trading platform. Seamlessly link followers to master traders with instant execution.',
    },
};

export default function CopyTradingPage() {
    const tableOfContents = [
        { id: 'solution', title: 'Copy Trading / Social Trading Platform Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Social Trading?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'PAMM Solution', href: '/solutions/pamm', readTime: '5 min' },
        { title: 'MAM Solution', href: '/solutions/mam', readTime: '5 min' },
        { title: 'MT5 White Label', href: '/solutions/mt5', readTime: '5 min' },
    ];

    const quickFacts = [
        { label: 'Copy Accuracy', value: '99.9%' },
        { label: 'Latency', value: '[X] ms' },
        { label: 'Metrics', value: '100+' },
        { label: 'Monitoring', value: '24/7' },
    ];

    const features = [
        'Public Trader Leaderboards',
        'Automated Performance Fees',
        'Proportional/Fixed Lot Copying',
        'Risk Management Suite',
        'Strategy Provider Portals',
        'Social News Feeds',
        'Detailed Performance Stats'
    ];

    const faqs = [
        {
            question: 'How much latency is there when copying a trade?',
            answer: 'Our server-side technology ensures minimal delay. On average, a trade is duplicated in [X] to [X] milliseconds, ensuring that followers receive the same price as the Master even in fast-moving markets.',
        },
        {
            question: 'Can I set different fee structures for different traders?',
            answer: 'Yes. You can allow Strategy Providers to set their own Performance Fees (Success Fees), or you can enforce a firm-wide standard. The system handles the automated deduction and payout of these fees.',
        },
        {
            question: 'Does this work with my existing MT4/MT5 groups?',
            answer: 'Absolutely. We can map the social trading platform to your existing account groups. You can even designate specific groups as "Master-only" or "Follower-only" to keep your backend organized.',
        },
        {
            question: 'Can followers stop copying at any time?',
            answer: 'Yes. Followers have full control over their individual dashboards. They can pause copying, detach from a master, or close individual trades manually at any time.',
        },
        {
            question: 'What are the minimum requirements to start?',
            answer: 'You need an active MT4/MT5 or cTrader server with Manager API access. We recommend having at least [X] proven traders to act as your initial Strategy Providers.',
        },
        {
            question: 'How is slippage managed?',
            answer: 'The platform includes slippage filters. If the price on the follower\'s account deviates too far from the Master\'s entry price due to market volatility, the system can be set to either reject the trade or wait for a better price.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="White Label Solution"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
                title="Copy Trading / Social Trading Platform"
                subtitle="Build a thriving trading community and unlock new revenue streams. Our social trading technology allows your clients to discover, follow, and automatically mirror the trades of top-performing strategy providers in real-time."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
            >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', fontSize: '0.875rem', color: '#4B5563' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        <span>Instant Mirroring</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        <span>Seamless Integration</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg style={{ width: '20px', height: '20px', color: '#4353F2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        <span>Full Brand Control</span>
                    </div>
                </div>
            </InnerPageHeader>

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Launch Your Social Network in [X Days]"
                ctaText="Deploy a professional copy trading environment and start monetizing your top traders."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Contact our social trading specialists to design your network's fee structure."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    <h1>Copy Trading / Social Trading Platform Solution</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Social Ecosystem</h3>
                            <p className="text-sm text-blue-800">Allows brokers to bridge the gap between experienced strategy providers and retail investors.</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Automated Duplication</h3>
                            <p className="text-sm text-blue-800">Complex handling of duplicating orders from a Master account across hundreds of followers.</p>
                        </div>
                    </div>
                    <p>
                        The Copy Trading / Social Trading Platform is a turnkey technical ecosystem that allows brokers and fintech founders to bridge the gap between experienced strategy providers and retail investors. Unlike traditional managed accounts, social trading offers a more interactive experience where "Followers" can choose from a marketplace of "Masters," analyzing their historical performance and risk metrics before committing capital.
                    </p>
                    <p>
                        Our solution is built for high-scale engagement. The platform handles the complex, high-speed task of duplicating orders from a Master account across hundreds or thousands of Follower accounts simultaneously. It manages the mathematical scaling of lot sizes based on equity ratios, ensuring that every follower's risk is proportional to their balance. For the broker, this translates to increased trading volume, higher retention, and a powerful tool for customer acquisition.
                    </p>
                    <ul>
                        <li><strong>Automated Trade Duplication:</strong> Orders are mirrored instantly, ensuring followers get the same entry and exit prices as the Master.</li>
                        <li><strong>Strategy Marketplace:</strong> A branded public portal where your top traders can showcase their results and attract followers.</li>
                        <li><strong>Flexible Performance Billing:</strong> Automatically calculate and deduct success fees, management fees, or per-trade commissions.</li>
                        <li><strong>Social Interaction Tools:</strong> Integrated features for comments, likes, and strategy descriptions to foster a true community feel.</li>
                    </ul>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our social trading engine utilizes server-side technology to ensure that trade duplication happens with the lowest possible latency, regardless of the number of followers.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>99.9%</strong>
                            <span>Copy Accuracy SLA</span>
                        </div>
                        <div className="statBox">
                            <strong>[X] ms</strong>
                            <span>Latency</span>
                        </div>
                        <div className="statBox">
                            <strong>100+</strong>
                            <span>Performance Metrics</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Real-time Analytics</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why Social Trading?</h2>
                    <ul>
                        <li><strong>Higher Client Lifetime Value:</strong> Investors who follow successful strategies tend to trade longer and remain active on your platform.</li>
                        <li><strong>Lower Barrier to Entry:</strong> Attract novice traders who may be intimidated by manual trading but are comfortable following a pro.</li>
                        <li><strong>Monetize Top Talent:</strong> Turn your most successful traders into "Strategy Providers," allowing them to earn fees and bringing more volume to your book.</li>
                        <li><strong>Diversified Revenue:</strong> Collect additional fees through the platform’s automated billing system for performance and management.</li>
                        <li><strong>Organic Growth:</strong> Social trading platforms naturally encourage users to share their results, providing your brand with viral marketing potential.</li>
                        <li><strong>Advanced Risk Filtering:</strong> Followers can set their own stop-loss limits and maximum drawdown levels to protect their individual accounts.</li>
                        <li><strong>Transparency & Trust:</strong> Real-time leaderboards with un-editable trading history build high levels of trust within your community.</li>
                    </ul>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        Your social trading network should look and feel like a proprietary part of your brokerage. Our platform is built for deep white-labeling.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                Custom Leaderboards
                            </h4>
                            <p>Integrate high-converting, branded leaderboards directly into your marketing website or client portal.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                Strategy Provider Profiles
                            </h4>
                            <p>Fully branded "Storefronts" for your Master traders to showcase their performance, bio, and trading style.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                Branded Mobile App
                            </h4>
                            <p>Provide a dedicated, white-labeled mobile experience where followers can browse strategies and fund accounts on the go.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                Automated Social Emails
                            </h4>
                            <p>Branded notifications for "New Follower," "Weekly Performance Report," and "Fee Deduction" alerts.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        Copy trading requires an infrastructure that can handle massive spikes in trade volume, especially when a popular Master trader opens a position.
                    </p>
                    <h3>Data Center Locations</h3>
                    <ul>
                        <li><strong>London, UK</strong> - Equinix LD4 (Primary Trading Hub)</li>
                        <li><strong>New York, USA</strong> - Equinix NY4</li>
                        <li><strong>Singapore</strong> - Equinix SG1</li>
                        <li><strong>Tokyo, Japan</strong> - Equinix TY3</li>
                    </ul>

                    <h3>Infrastructure Specifications</h3>
                    <ul>
                        <li>Server-side plugins for direct MT4/MT5/cTrader core integration.</li>
                        <li>High-availability database clusters for sub-millisecond data retrieval.</li>
                        <li>Tier-1 DDoS protection to ensure the social marketplace remains online.</li>
                        <li>End-to-end encryption for all trade signals and account credentials.</li>
                        <li>Automated real-time backups of all follower settings and history.</li>
                    </ul>
                    <div className="infoBox">
                        <p><strong>Infrastructure Statement:</strong> We guarantee a [99.9%] uptime for the social trading engine. Our load-balanced architecture ensures that even if a Master has [1,000+] followers, every order is duplicated within [X] milliseconds.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Comprehensive tools designed for both the professional strategy provider and the retail follower.</p>

                    <h3>Copying & Execution Features</h3>
                    <ul>
                        <li><strong>Proportional Copying:</strong> Volume based on Equity/Balance ratios.</li>
                        <li><strong>Fixed Lot Copying:</strong> Every trade is copied at a pre-defined volume.</li>
                        <li><strong>Multiplier Mode:</strong> Copy a Master at [2x] or [0.5x] their risk.</li>
                        <li><strong>Partial Close Support:</strong> Automatically syncs partial exits across all followers.</li>
                        <li><strong>Reverse Trading:</strong> Option for followers to "Fade" or trade against a strategy.</li>
                    </ul>

                    <h3>Analytics & Social Tools</h3>
                    <ul>
                        <li>Sharpe Ratio, Max Drawdown, and Recovery Factor tracking.</li>
                        <li>Interactive equity curves with time-frame filtering.</li>
                        <li>Strategy tags (e.g., "Scalping," "Gold-only," "Low Risk").</li>
                        <li>News feed for Strategy Providers to post updates to followers.</li>
                    </ul>

                    <h3>Risk Management</h3>
                    <ul>
                        <li>Individual Follower Equity Stop-Loss.</li>
                        <li>Maximum allowable slippage filters.</li>
                        <li>Symbol-specific restrictions (e.g., block Crypto copying).</li>
                    </ul>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>The Social Trading platform is designed to be the social layer of your existing brokerage tech stack.</p>

                    <h3>Manager / Admin API</h3>
                    <ul>
                        <li>Programmatically approve or feature specific Strategy Providers.</li>
                        <li>Extract network-wide AUM (Assets Under Management) and volume data.</li>
                        <li>Manage fee distributions and affiliate payouts via API.</li>
                    </ul>

                    <h3>Platform Connectivity</h3>
                    <ul>
                        <li><strong>MetaTrader 4/5:</strong> Full server-to-server synchronization.</li>
                        <li><strong>cTrader:</strong> Native integration via Open API.</li>
                        <li><strong>Web API:</strong> RESTful endpoints for building custom mobile and web dashboards.</li>
                    </ul>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a comprehensive SDK for brokers who want to build a bespoke social experience. Use our webhooks to trigger Telegram or Discord notifications whenever a Master trader opens a new position, keeping your community engaged 24/7.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is modular, starting with a base license and scaling with the number of active followers or volume.</p>

                    <h3>What’s Included</h3>
                    <ul>
                        <li>Full White Label Social Marketplace & Leaderboard.</li>
                        <li>Server-side trade copier for [1] trading server.</li>
                        <li>Strategy Provider & Follower admin dashboards.</li>
                        <li>Automated fee calculation and billing engine.</li>
                        <li>Initial branding and UI/UX styling.</li>
                        <li>Regular security and feature updates.</li>
                    </ul>

                    <h3>Optional Add-Ons</h3>
                    <ul>
                        <li>Custom mobile app for social trading (iOS/Android).</li>
                        <li>Multi-server/Cross-platform copying (e.g., MT4 to MT5).</li>
                        <li>Advanced anti-fraud and "Copy-the-Copier" protection.</li>
                        <li>Specialized marketing and SEO for your strategy marketplace.</li>
                    </ul>

                    <h3>Setup Timeline</h3>
                    <ol>
                        <li><strong>Requirement Specification (Days 1-2):</strong> Defining fee structures and ranking logic.</li>
                        <li><strong>Server Integration (Days 3-5):</strong> Linking the copier to your MT4/MT5/cTrader server.</li>
                        <li><strong>UI/UX Customization (Days 5-7):</strong> Styling the leaderboard and trader profiles.</li>
                        <li><strong>UAT & Load Testing (Days 7-9):</strong> Simulating mass-copy events for stability.</li>
                        <li><strong>Go-Live (Day [X]):</strong> Production launch and onboarding your first Masters.</li>
                    </ol>
                </div>

                <div id="faq">
                    <h2>Frequently Asked Questions</h2>
                    <FAQAccordion faqs={faqs} />
                </div>
            </ContentPageLayout>
        </main>
    );
}
