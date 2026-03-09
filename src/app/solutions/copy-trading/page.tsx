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
                    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Copy Trading & Social Trading Platform | White Label Solution","description":"Launch your own Social Trading network with our high-performance Copy Trading platform. Seamlessly link followers to master traders with instant execution.","url":"https://fxtrusts.com/solutions/copy-trading-social-trading-platform"}) }}
      />
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
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                LTV
                            </h4>
                            <p>Higher Client Lifetime Value: Investors who follow successful strategies tend to trade longer and remain active on your platform.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></svg>
                                Entry
                            </h4>
                            <p>Lower Barrier to Entry: Attract novice traders who may be intimidated by manual trading but are comfortable following a pro.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                Talent
                            </h4>
                            <p>Monetize Top Talent: Turn your most successful traders into "Strategy Providers," allowing them to earn fees and bringing more volume to your book.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Revenue
                            </h4>
                            <p>Diversified Revenue: Collect additional fees through the platform’s automated billing system for performance and management.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Viral
                            </h4>
                            <p>Organic Growth: Social trading platforms naturally encourage users to share their results, providing your brand with viral marketing potential.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                Filtering
                            </h4>
                            <p>Advanced Risk Filtering: Followers can set their own stop-loss limits and maximum drawdown levels to protect their individual accounts.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                Trust
                            </h4>
                            <p>Transparency & Trust: Real-time leaderboards with un-editable trading history build high levels of trust within your community.</p>
                        </div>
                    </div>
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
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                London, UK
                            </h4>
                            <p>Equinix LD4 (Primary Trading Hub)</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                New York, USA
                            </h4>
                            <p>Equinix NY4</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Singapore
                            </h4>
                            <p>Equinix SG1</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Tokyo, Japan
                            </h4>
                            <p>Equinix TY3</p>
                        </div>
                    </div>

                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                Plugins
                            </h4>
                            <p>Server-side plugins for direct MT4/MT5/cTrader core integration.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                Database
                            </h4>
                            <p>High-availability database clusters for sub-millisecond data retrieval.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Protection
                            </h4>
                            <p>Tier-1 DDoS protection to ensure the social marketplace remains online.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Encryption
                            </h4>
                            <p>End-to-end encryption for all trade signals and account credentials.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                Backups
                            </h4>
                            <p>Automated real-time backups of all follower settings and history.</p>
                        </div>
                    </div>
                    <div className="infoBox">
                        <p><strong>Infrastructure Statement:</strong> We guarantee a [99.9%] uptime for the social trading engine. Our load-balanced architecture ensures that even if a Master has [1,000+] followers, every order is duplicated within [X] milliseconds.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Comprehensive tools designed for both the professional strategy provider and the retail follower.</p>

                    <h3>Copying & Execution Features</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
                                Proportional
                            </h4>
                            <p>Proportional Copying: Volume based on Equity/Balance ratios.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                                Fixed
                            </h4>
                            <p>Fixed Lot Copying: Every trade is copied at a pre-defined volume.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                Multiplier
                            </h4>
                            <p>Multiplier Mode: Copy a Master at [2x] or [0.5x] their risk.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Partial
                            </h4>
                            <p>Partial Close Support: Automatically syncs partial exits across all followers.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg>
                                Reverse
                            </h4>
                            <p>Reverse Trading: Option for followers to "Fade" or trade against a strategy.</p>
                        </div>
                    </div>

                    <h3>Analytics & Social Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                Ratios
                            </h4>
                            <p>Sharpe Ratio, Max Drawdown, and Recovery Factor tracking.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                Curves
                            </h4>
                            <p>Interactive equity curves with time-frame filtering.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>
                                Tags
                            </h4>
                            <p>Strategy tags (e.g., "Scalping," "Gold-only," "Low Risk").</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                News
                            </h4>
                            <p>News feed for Strategy Providers to post updates to followers.</p>
                        </div>
                    </div>

                    <h3>Risk Management</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
                                Stop-Loss
                            </h4>
                            <p>Individual Follower Equity Stop-Loss.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Slippage
                            </h4>
                            <p>Maximum allowable slippage filters.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
                                Restrictions
                            </h4>
                            <p>Symbol-specific restrictions (e.g., block Crypto copying).</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>The Social Trading platform is designed to be the social layer of your existing brokerage tech stack.</p>

                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                Approve
                            </h4>
                            <p>Programmatically approve or feature specific Strategy Providers.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                AUM
                            </h4>
                            <p>Extract network-wide AUM (Assets Under Management) and volume data.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Fees
                            </h4>
                            <p>Manage fee distributions and affiliate payouts via API.</p>
                        </div>
                    </div>

                    <h3>Platform Connectivity</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                MetaTrader 4/5
                            </h4>
                            <p>Full server-to-server synchronization.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
                                cTrader
                            </h4>
                            <p>Native integration via Open API.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="9" y1="3" x2="9" y2="21" /></svg>
                                Web API
                            </h4>
                            <p>RESTful endpoints for building custom mobile and web dashboards.</p>
                        </div>
                    </div>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a comprehensive SDK for brokers who want to build a bespoke social experience. Use our webhooks to trigger Telegram or Discord notifications whenever a Master trader opens a new position, keeping your community engaged 24/7.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is modular, starting with a base license and scaling with the number of active followers or volume.</p>

                    <h3>What’s Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                Marketplace
                            </h4>
                            <p>Full White Label Social Marketplace & Leaderboard.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                Copier
                            </h4>
                            <p>Server-side trade copier for [1] trading server.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                                Dashboards
                            </h4>
                            <p>Strategy Provider & Follower admin dashboards.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Billing
                            </h4>
                            <p>Automated fee calculation and billing engine.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                                Branding
                            </h4>
                            <p>Initial branding and UI/UX styling.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                Updates
                            </h4>
                            <p>Regular security and feature updates.</p>
                        </div>
                    </div>

                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                                Mobile App
                            </h4>
                            <p>Custom mobile app for social trading (iOS/Android).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                                Multi-Server
                            </h4>
                            <p>Multi-server/Cross-platform copying (e.g., MT4 to MT5).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Anti-Fraud
                            </h4>
                            <p>Advanced anti-fraud and "Copy-the-Copier" protection.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                Marketing
                            </h4>
                            <p>Specialized marketing and SEO for your strategy marketplace.</p>
                        </div>
                    </div>

                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                                Specs
                            </h4>
                            <p>Requirement Specification: Defining fee structures and ranking logic (Days 1-2).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                                Integrate
                            </h4>
                            <p>Server Integration: Linking the copier to your MT4/MT5/cTrader server (Days 3-5).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                                Style
                            </h4>
                            <p>UI/UX Customization: Styling the leaderboard and trader profiles (Days 5-7).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                                Test
                            </h4>
                            <p>UAT & Load Testing: Simulating mass-copy events for stability (Days 7-9).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>05</span>
                                Go-Live
                            </h4>
                            <p>Go-Live: Production launch and onboarding your first Masters (Day 10).</p>
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
