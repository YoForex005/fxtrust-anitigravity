import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';

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
                    <ul>
                        <li><strong>Instant Brand Authority:</strong> Institutional-grade design that makes your brokerage look established from day one.</li>
                        <li><strong>Zero Technical Friction:</strong> We handle the complex API connections between your website forms and your backend CRM.</li>
                        <li><strong>Localized Marketing:</strong> Easily launch multi-language versions of your site to target specific geographic regions effectively.</li>
                        <li><strong>Enhanced Lead Tracking:</strong> Know exactly which campaign produced which trader with deep UTM and pixel integration.</li>
                        <li><strong>Regulatory Compliance:</strong> Easily manage risk warnings, legal documents, and cookie consents across all pages.</li>
                        <li><strong>Mobile-First UX:</strong> Over 70% of traders register via mobile; our sites are built for a flawless "thumb-friendly" experience.</li>
                        <li><strong>Content Management Control:</strong> Easily update spreads, leverage, and promotion details without needing a developer.</li>
                    </ul>
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
                    <ul>
                        <li><strong>Global CDN Nodes</strong> - 200+ locations for sub-second loading.</li>
                        <li><strong>London, UK</strong> - Primary Financial Node.</li>
                        <li><strong>Singapore</strong> - Asian Markets Hub.</li>
                        <li><strong>New York, USA</strong> - North American Node.</li>
                    </ul>

                    <h3>Infrastructure Specifications</h3>
                    <ul>
                        <li><strong>Auto-Scaling Clusters:</strong> Handle massive traffic spikes during news events without performance loss.</li>
                        <li><strong>Daily Off-site Backups:</strong> Ensure your digital assets are always recoverable.</li>
                        <li><strong>Advanced WAF:</strong> Web Application Firewall to protect against SQL injections and XSS attacks.</li>
                        <li><strong>Automated SSL:</strong> Industry-standard encryption for all data submitted through registration forms.</li>
                        <li><strong>Headless CMS Options:</strong> Flexibility for advanced developers to pull content via API.</li>
                    </ul>
                    <div className="infoBox">
                        <p><strong>SLA Statement:</strong> We guarantee 99.9% uptime for your web presence. Our global Content Delivery Network (CDN) ensures that your landing pages are served from the server closest to your user, resulting in [X]ms load times.</p>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Tools designed to help brokerages market more effectively and convert more leads.</p>

                    <h3>Conversion & UX Features</h3>
                    <ul>
                        <li>Multi-step registration forms (proven to increase conversion).</li>
                        <li>Real-time "Live Account" count and volume widgets.</li>
                        <li>Sticky "Open Account" buttons for mobile users.</li>
                        <li>Integrated pop-ups for limited-time bonus offers.</li>
                        <li>"Compare Account Types" dynamic tables.</li>
                    </ul>

                    <h3>Marketing & Analytics Tools</h3>
                    <ul>
                        <li>Google Tag Manager (GTM) ready.</li>
                        <li>Server-side tracking for Meta (Facebook) CAPI.</li>
                        <li>Heatmap integration (Hotjar/Clarity) to track user behavior.</li>
                        <li>Dynamic Keyword Insertion (DKI) for PPC landing pages.</li>
                    </ul>

                    <h3>Content & Compliance</h3>
                    <ul>
                        <li>Integrated Economic Calendar and News Feeds.</li>
                        <li>Automated "Risk Warning" overlays for specific jurisdictions.</li>
                        <li>Document download center for T&Cs, Privacy Policy, and PDS.</li>
                    </ul>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>Our websites are not islands; they are fully integrated components of your brokerage ecosystem.</p>

                    <h3>Manager / Admin API</h3>
                    <ul>
                        <li>Feed registration data directly into your Broker CRM (Salesforce, HubSpot, or Custom).</li>
                        <li>Automated "Lead Attribution" to specific IBs or Affiliate IDs via cookies.</li>
                        <li>Sync live spread data from MT4/MT5 directly onto your homepage.</li>
                    </ul>

                    <h3>Gateway & Connectivity API</h3>
                    <ul>
                        <li><strong>Email Marketing Integration:</strong> Sync new leads to Mailchimp, ActiveCampaign, or SendGrid.</li>
                        <li><strong>SMS Integration:</strong> Trigger instant "Welcome" texts when a registration is completed.</li>
                        <li><strong>Live Chat:</strong> Seamless integration with Zendesk, Intercom, or Tidio.</li>
                    </ul>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a lightweight JS SDK for developers who want to build custom interactive tools—such as margin calculators or profit estimators—that pull real-time data from your trading server and display it on your marketing pages.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is structured based on the number of custom layouts required and the depth of CRM integration.</p>

                    <h3>What’s Included</h3>
                    <ul>
                        <li>[X] Custom Page Templates (Home, Accounts, About, Contact).</li>
                        <li>[X] High-Conversion Landing Pages for PPC.</li>
                        <li>Full integration with your Registration API.</li>
                        <li>Global CDN Hosting & SSL.</li>
                        <li>Multi-language setup for up to [X] languages.</li>
                        <li>Regular security and core updates.</li>
                    </ul>

                    <h3>Optional Add-Ons</h3>
                    <ul>
                        <li>Professional Copywriting (SEO-optimized).</li>
                        <li>Custom Blog/Education section management.</li>
                        <li>Advanced A/B testing and CRO (Conversion Rate Optimization) audits.</li>
                        <li>Automated "Trader Contest" landing pages.</li>
                    </ul>

                    <h3>Setup Timeline</h3>
                    <ol>
                        <li><strong>Brand Discovery (Days 1-2):</strong> Collecting logos, colors, and site requirements.</li>
                        <li><strong>UI/UX Design (Days 3-7):</strong> Providing mockups for your approval.</li>
                        <li><strong>Development & API Link (Days 7-12):</strong> Building the site and connecting registration forms.</li>
                        <li><strong>Content & Testing (Days 12-15):</strong> Adding copy and performing cross-browser testing.</li>
                        <li><strong>Go-Live (Day [X]):</strong> Domain propagation and final SEO verification.</li>
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
