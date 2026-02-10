import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Branded Broker Websites & Landing Pages | High-Conversion UX',
    description: 'Launch a high-converting broker website with integrated registration. Optimized for lead gen, SEO, and seamless syncing with your MT4/MT5/cTrader CRM.',
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/branded-website',
    },
    keywords: [
        'Branded Broker Website',
        'Forex Landing Page',
        'Broker Registration Integration',
        'High-Conversion Trading Website',
        'White Label Broker Web Design',
        'Lead Generation for Brokers',
    ],
    openGraph: {
        title: 'Branded Broker Websites & Landing Pages | High-Conversion UX',
        description: 'Launch a high-converting broker website with integrated registration. Optimized for lead gen, SEO, and seamless syncing with your MT4/MT5/cTrader CRM.',
        url: 'https://fxtrusts.com/solutions/branded-website',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Branded Broker Websites & Landing Pages | High-Conversion UX',
        description: 'Launch a high-converting broker website with integrated registration. Optimized for lead gen, SEO, and seamless syncing with your MT4/MT5/cTrader CRM.',
    },
};

export default function BrandedWebsitePage() {
    const tableOfContents = [
        { id: 'solution', title: 'Branded Website & Landing Pages Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Branded Website & Landing Pages?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'Mobile App', href: '/solutions/mobile-app-wl', readTime: '5 min' },
        { title: 'Forex CRM', href: '/solutions/crm', readTime: '4 min' },
        { title: 'Traders Room', href: '/solutions/traders-room', readTime: '4 min' },
    ];

    const quickFacts = [
        { label: 'Page Speed SLA', value: '99.9%' },
        { label: 'Avg Turnaround', value: '[X] Days' },
        { label: 'Components', value: '100+' },
        { label: 'Monitoring', value: '24/7' },
    ];

    const features = [
        'Multi-Step Registration Forms',
        'Real-Time Market Widgets',
        'CRM & Lead Portal Sync',
        'Dynamic Landing Pages',
        'Multi-Language Support',
        'Compliance-Ready Footers',
        'Analytics & Pixel Tracking',
    ];

    const faqs = [
        {
            question: 'How long does it take to build a broker website?',
            answer: 'A standard branded site with integrated registration typically takes [X] to [X] days. This timeline can vary based on the number of custom landing pages and the complexity of your CRM integration.',
        },
        {
            question: 'Can I manage the content myself?',
            answer: 'Yes. We provide a user-friendly CMS that allows your marketing team to change text, images, and promotions without needing to write any code.',
        },
        {
            question: 'Is the registration form secure?',
            answer: 'Absolutely. All forms are protected by SSL encryption and are connected via secure API tunnels directly to your CRM. We do not store sensitive trader data on the marketing website itself.',
        },
        {
            question: 'Do you help with the "Legal" pages?',
            answer: 'We provide compliance-ready templates for Risk Disclosures and Privacy Policies. However, we always recommend having these reviewed by your legal counsel to ensure they meet your specific jurisdictional requirements.',
        },
        {
            question: 'Will the site be SEO optimized?',
            answer: 'Yes. Every site we build follows SEO best practices, including fast loading speeds, mobile responsiveness, proper H-tag hierarchy, and schema markup for financial services.',
        },
        {
            question: 'Can I use my own domain?',
            answer: 'Yes. You maintain full ownership of your domain. Our team will simply provide the DNS records (A records or CNAMEs) required to point your domain to our high-performance hosting nodes.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="White Label Solution"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>}
                title="Branded Website & Landing Pages"
                subtitle="Convert more traffic into active traders with a professional, high-performance web presence. Our branded websites and landing pages are specifically engineered for the brokerage industry, combining elite design with deep integration into your registration and CRM workflows."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
            />

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Go Live with Your Site in [X Days]"
                ctaText="Stop losing leads to slow, generic sites. Launch a high-converting broker hub."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Our design team can help you build custom layouts for your specific target market."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    <h1>Branded Website & Landing Pages Solution</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Conversion-First Design</h3>
                            <p className="text-sm text-blue-800">Optimized UX to reduce abandonment during registration.</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Full CRM Integration</h3>
                            <p className="text-sm text-blue-800">Real-time data sync with your back-office and trading server.</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">SEO & Mobile Ready</h3>
                            <p className="text-sm text-blue-800">Fast-loading, responsive, and built to rank on search engines.</p>
                        </div>
                    </div>
                    <p>
                        In the competitive world of online trading, your website is your digital storefront. A generic, slow-loading site doesn't just look unprofessional—it directly kills your conversion rates. Our Branded Website & Landing Pages solution provides a high-end, institutional-grade web presence designed specifically for brokers and prop firms. We focus on the "Critical Path": the journey from a marketing click to a completed registration and a funded account.
                    </p>
                    <p>
                        This solution is perfect for fintech founders and marketing managers who need more than just a "pretty site." Our pages are pre-integrated with your registration API, ensuring that every lead is instantly captured in your CRM without manual data entry. Whether you need a comprehensive multi-page corporate site or a hyper-focused landing page for a specific Google Ads campaign, our infrastructure provides the speed, security, and scalability you need to grow your AUM.
                    </p>
                    <ul>
                        <li><strong>Integrated Registration Engine:</strong> Seamlessly bridge the gap between your marketing site and your Client Portal/CRM.</li>
                        <li><strong>Marketing Optimized:</strong> Built-in support for tracking pixels (Google, Meta, TikTok) and advanced A/B testing.</li>
                        <li><strong>Industry-Specific Content:</strong> Pre-designed sections for live price feeds, economic calendars, and instrument lists.</li>
                        <li><strong>Compliance-First Framework:</strong> Standardized templates that include required risk disclosures and regulatory jurisdictional logic.</li>
                    </ul>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our web infrastructure is optimized for global performance, ensuring your site loads instantly for traders in London, Tokyo, or New York.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>99.9%</strong>
                            <span>Page Speed SLA</span>
                        </div>
                        <div className="statBox">
                            <strong>[X] Days</strong>
                            <span>Avg Turnaround</span>
                        </div>
                        <div className="statBox">
                            <strong>100+</strong>
                            <span>Pre-built Components</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Security Monitoring</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why Branded Website & Landing Pages?</h2>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                Authority
                            </h4>
                            <p>Instant Brand Authority: Institutional-grade design that makes your brokerage look established from day one.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                                Friction-Free
                            </h4>
                            <p>Zero Technical Friction: We handle the complex API connections between your website forms and your backend CRM.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Localization
                            </h4>
                            <p>Localized Marketing: Easily launch multi-language versions of your site to target specific geographic regions effectively.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
                                Tracking
                            </h4>
                            <p>Enhanced Lead Tracking: Know exactly which campaign produced which trader with deep UTM and pixel integration.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Compliance
                            </h4>
                            <p>Regulatory Compliance: Easily manage risk warnings, legal documents, and cookie consents across all pages.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                                Mobile
                            </h4>
                            <p>Mobile-First UX: Over 70% of traders register via mobile; our sites are built for a flawless "thumb-friendly" experience.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                CMS
                            </h4>
                            <p>Content Management Control: Easily update spreads, leverage, and promotion details without needing a developer.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        Our solution is a true "White Label" experience—the technology is ours, but the look, feel, and voice are 100% yours.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                Custom Theme Development
                            </h4>
                            <p>We don't just use templates; we apply your brand's color palette, typography, and unique visual identity to every page.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M2 12h20"></path></svg>
                                Dynamic Instrument Widgets
                            </h4>
                            <p>Display live prices for your specific symbols (Forex, Crypto, Indices) using branded widgets that match your site design.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                Branded Lead Portals
                            </h4>
                            <p>The registration process feels like a continuous journey, moving from the landing page to the client area without visual disruption.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                Custom Domain Management
                            </h4>
                            <p>Full support for your primary domain and unlimited subdomains for specific marketing campaigns (e.g., promo.yourbroker.com).</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        Web performance is a ranking factor for Google and a trust factor for traders. We host our web solutions on high-performance global nodes.
                    </p>
                    <h3>Data Center Locations</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                CDN
                            </h4>
                            <p>Global CDN Nodes - 200+ locations for sub-second loading.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                London
                            </h4>
                            <p>London, UK - Primary Financial Node.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Singapore
                            </h4>
                            <p>Singapore - Asian Markets Hub.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                New York
                            </h4>
                            <p>New York, USA - North American Node.</p>
                        </div>
                    </div>

                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                Scaling
                            </h4>
                            <p>Auto-Scaling Clusters: Handle massive traffic spikes during news events without performance loss.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
                                Backups
                            </h4>
                            <p>Daily Off-site Backups: Ensure your digital assets are always recoverable.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                WAF
                            </h4>
                            <p>Advanced WAF: Web Application Firewall to protect against SQL injections and XSS attacks.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                SSL
                            </h4>
                            <p>Automated SSL: Industry-standard encryption for all data submitted through registration forms.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                                CMS
                            </h4>
                            <p>Headless CMS Options: Flexibility for advanced developers to pull content via API.</p>
                        </div>
                    </div>
                    <div className="infoBox">
                        <p><strong>SLA Statement:</strong> We guarantee 99.9% uptime for your web presence. Our global Content Delivery Network (CDN) ensures that your landing pages are served from the server closest to your user, resulting in [X]ms load times.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Tools designed to help brokerages market more effectively and convert more leads.</p>

                    <h3>Conversion & UX Features</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                Registration
                            </h4>
                            <p>Multi-step registration forms (proven to increase conversion).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Count
                            </h4>
                            <p>Real-time "Live Account" count and volume widgets.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M15 3h6v6" /><path d="M10 14L21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                                Sticky
                            </h4>
                            <p>Sticky "Open Account" buttons for mobile users.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6" /><path d="M10 14L21 3" /></svg>
                                Pop-ups
                            </h4>
                            <p>Integrated pop-ups for limited-time bonus offers.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                                Comparison
                            </h4>
                            <p>"Compare Account Types" dynamic tables.</p>
                        </div>
                    </div>

                    <h3>Marketing & Analytics Tools</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                GTM
                            </h4>
                            <p>Google Tag Manager (GTM) ready.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                CAPI
                            </h4>
                            <p>Server-side tracking for Meta (Facebook) CAPI.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                                Heatmap
                            </h4>
                            <p>Heatmap integration (Hotjar/Clarity) to track user behavior.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                DKI
                            </h4>
                            <p>Dynamic Keyword Insertion (DKI) for PPC landing pages.</p>
                        </div>
                    </div>

                    <h3>Content & Compliance</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                Calendar
                            </h4>
                            <p>Integrated Economic Calendar and News Feeds.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                Warnings
                            </h4>
                            <p>Automated "Risk Warning" overlays for specific jurisdictions.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
                                Documents
                            </h4>
                            <p>Document download center for T&Cs, Privacy Policy, and PDS.</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>Our websites are not islands; they are fully integrated components of your brokerage ecosystem.</p>

                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                Feed
                            </h4>
                            <p>Feed registration data directly into your Broker CRM (Salesforce, HubSpot, or Custom).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Attribution
                            </h4>
                            <p>Automated "Lead Attribution" to specific IBs or Affiliate IDs via cookies.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                Sync
                            </h4>
                            <p>Sync live spread data from MT4/MT5 directly onto your homepage.</p>
                        </div>
                    </div>

                    <h3>Gateway & Connectivity API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                Email
                            </h4>
                            <p>Email Marketing Integration: Sync new leads to Mailchimp, ActiveCampaign, or SendGrid.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                SMS
                            </h4>
                            <p>SMS Integration: Trigger instant "Welcome" texts when a registration is completed.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                                Chat
                            </h4>
                            <p>Live Chat: Seamless integration with Zendesk, Intercom, or Tidio.</p>
                        </div>
                    </div>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a lightweight JS SDK for developers who want to build custom interactive tools—such as margin calculators or profit estimators—that pull real-time data from your trading server and display it on your marketing pages.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is structured based on the number of custom layouts required and the depth of CRM integration.</p>

                    <h3>What’s Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                                Templates
                            </h4>
                            <p>[X] Custom Page Templates (Home, Accounts, About, Contact).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                Landing
                            </h4>
                            <p>[X] High-Conversion Landing Pages for PPC.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></svg>
                                API
                            </h4>
                            <p>Full integration with your Registration API.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                CDN
                            </h4>
                            <p>Global CDN Hosting & SSL.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Languages
                            </h4>
                            <p>Multi-language setup for up to [X] languages.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                                Updates
                            </h4>
                            <p>Regular security and core updates.</p>
                        </div>
                    </div>

                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>
                                Copywriting
                            </h4>
                            <p>Professional Copywriting (SEO-optimized).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                                Blog
                            </h4>
                            <p>Custom Blog/Education section management.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" /></svg>
                                Testing
                            </h4>
                            <p>Advanced A/B testing and CRO (Conversion Rate Optimization) audits.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                                Contests
                            </h4>
                            <p>Automated "Trader Contest" landing pages.</p>
                        </div>
                    </div>

                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                                Discovery
                            </h4>
                            <p>Brand Discovery (Days 1-2): Collecting logos, colors, and site requirements.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                                Design
                            </h4>
                            <p>UI/UX Design (Days 3-7): Providing mockups for your approval.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                                Development
                            </h4>
                            <p>Development & API Link (Days 7-12): Building the site and connecting registration forms.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                                Content
                            </h4>
                            <p>Content & Testing (Days 12-15): Adding copy and performing cross-browser testing.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>05</span>
                                Go-Live
                            </h4>
                            <p>Go-Live (Day [X]): Domain propagation and final SEO verification.</p>
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
