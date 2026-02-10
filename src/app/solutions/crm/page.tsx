import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Forex CRM | Enterprise Back-Office & KYC Management',
    description: 'Optimize your brokerage operations with a high-performance Forex CRM. Manage leads, automate KYC, and track deposits with an integrated back-office solution.',
    keywords: [
        'Forex CRM',
        'Broker Back-Office Software',
        'Forex Lead Tracking',
        'Automated KYC System',
        'Brokerage Management Platform',
        'MT4 MT5 CRM Integration',
    ],
    openGraph: {
        title: 'Forex CRM | Enterprise Back-Office & KYC Management',
        description: 'Optimize your brokerage operations with a high-performance Forex CRM. Manage leads, automate KYC, and track deposits with an integrated back-office solution.',
        type: 'website',
        url: 'https://fxtrusts.com/solutions/crm',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Forex CRM | Enterprise Back-Office & KYC Management',
        description: 'Optimize your brokerage operations with a high-performance Forex CRM. Manage leads, automate KYC, and track deposits with an integrated back-office solution.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/crm',
    },
};

export default function CRMPage() {
    const tableOfContents = [
        { id: 'solution', title: 'Forex CRM Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Forex CRM?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const featuresInclude = [
        'Multi-tier IB/Affiliate System',
        'Automated KYC/AML Verification',
        'Real-time Transaction Monitoring',
        'Advanced Sales Analytics',
        'Role-based Staff Permissions',
        'Bulk Email & SMS Integration',
        'MT4/MT5 Manager Sync',
    ];

    const ctaTitle = "Launch Your Forex CRM in 10 Days";
    const ctaText = "Take control of your sales funnel and back-office with our turnkey CRM solution.";
    const ctaButtonText = "Get Started";

    /*
    Note: The "Need help?" card is handled by the ContentPageLayout via contact props.
    Phone/Email are handled there or can be customized if ContentPageLayout supports it.
    Looking at ContentPageLayout, it has contactTitle, contactText, contactEmail.
    */

    const faqs = [
        {
            question: 'How long does it take to deploy the Forex CRM?',
            answer: 'A standard setup typically takes 7 to 10 business days, assuming your trading server (MT4/MT5) is already active. This includes the configuration of basic staff roles and standard payment gateways.',
        },
        {
            question: 'Can we customize the KYC requirements per country?',
            answer: 'Yes. The CRM allows you to set granular KYC rules and document requirements based on the lead\'s country of residence, ensuring you stay compliant with various local regulations.',
        },
        {
            question: 'Does this CRM integrate with our existing website?',
            answer: 'Absolutely. We provide Web APIs and iframes for registration forms, allowing lead data to flow instantly from your website into the CRM sales pipeline.',
        },
        {
            question: 'How many trading accounts can the CRM handle?',
            answer: 'Our enterprise infrastructure is designed to scale from hundreds to over 100,000 accounts without performance degradation, utilizing optimized database structures.',
        },
        {
            question: 'What are the minimum requirements to start?',
            answer: 'You will need an active trading server license (like MT4/MT5) and a registered corporate entity to begin the integration of payment gateways and KYC modules.',
        },
        {
            question: 'Is my client data safe from internal theft?',
            answer: 'We provide role-based access control (RBAC). You can hide sensitive data like phone numbers or emails from junior staff, and all data exports require admin-level approval with logged activity.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="BROKER INFRASTRUCTURE"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
                title="Forex CRM"
                subtitle="Centralize your brokerage operations with an enterprise-grade CRM designed for high-volume data and rapid scaling. Convert more leads and automate compliance workflows from a single, secure interface."
                benefits={[
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
                        text: "360° Lead Management"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                        text: "Automated Compliance"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>,
                        text: "Seamless Integration"
                    }
                ]}
            />

            <ContentPageLayout
                tableOfContents={tableOfContents}
                ctaTitle={ctaTitle}
                ctaText={ctaText}
                ctaButtonText={ctaButtonText}
                features={featuresInclude}
                contactTitle="Need help?"
                contactText="Speak with a CRM specialist to tailor the platform to your workflow."
                contactEmail="support@domain.com"
            >
                <h2 id="solution">Forex CRM Solution</h2>
                <p>
                    The Forex CRM is a mission-critical platform for modern brokers, fintech founders, and sales teams. Unlike generic CRMs, this solution is purpose-built to handle the unique complexities of financial trading, including real-time synchronization with trading servers, complex multi-tier affiliate structures, and rigorous regulatory reporting requirements.
                </p>
                <p>
                    By automating the &quot;heavy lifting&quot; of back-office management, your team can focus on what matters: acquiring leads and retaining high-value traders. From the moment a lead enters your funnel to their 100th deposit, the CRM provides the transparency and automation needed to scale a global brokerage.
                </p>
                <ul className="feature-list">
                    <li><strong>Unified Lead &amp; Client Tracking:</strong> A single source of truth for all client interactions, trading history, and financial transactions.</li>
                    <li><strong>Turnkey Back-Office Management:</strong> Comprehensive tools for your support, sales, and compliance teams to manage accounts efficiently.</li>
                    <li><strong>Automated Onboarding Flow:</strong> Reduce time-to-trade by automating account approval and KYC document verification.</li>
                    <li><strong>Advanced Financial Reporting:</strong> Generate real-time reports on Net Deposit, AUM, and Sales Performance to drive data-led decisions.</li>
                </ul>

                <h2 id="platform-overview">Platform Overview</h2>
                <p>
                    Our CRM is built for speed and reliability, ensuring your sales and support teams can operate without latency during peak market volatility.
                </p>
                <div className="statsGrid">
                    <div className="statBox">
                        <strong>99.9%</strong>
                        <span>Uptime SLA ensuring your sales team never loses a lead.</span>
                    </div>
                    <div className="statBox">
                        <strong>7-10</strong>
                        <span>Days average setup for full CRM and server integration.</span>
                    </div>
                    <div className="statBox">
                        <strong>100+</strong>
                        <span>Pre-integrated Tools including PSPs, KYC providers, and VoIP.</span>
                    </div>
                    <div className="statBox">
                        <strong>24/7</strong>
                        <span>Infrastructure Monitoring to protect sensitive client data.</span>
                    </div>
                </div>

                <h2 id="why">Why Forex CRM?</h2>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>Optimized Sales Pipeline</h4>
                        <p>Use automated lead distribution to ensure your best sales reps are handling the highest quality leads.</p>
                    </div>
                    <div className="featureCard">
                        <h4>Compliance &amp; KYC Automation</h4>
                        <p>Integrated modules for document verification significantly reduce manual labor and human error.</p>
                    </div>
                    <div className="featureCard">
                        <h4>Seamless Trading Server Sync</h4>
                        <p>Real-time updates from MT4/MT5 ensure your back-office data always matches the trading floor.</p>
                    </div>
                    <div className="featureCard">
                        <h4>Scalable IB/Affiliate Modules</h4>
                        <p>Manage complex multi-level commission structures and track payouts with absolute precision.</p>
                    </div>
                    <div className="featureCard">
                        <h4>Granular Role Permissions</h4>
                        <p>Maintain security by restricting staff access to sensitive data based on their specific roles.</p>
                    </div>
                    <div className="featureCard">
                        <h4>Performance Analytics</h4>
                        <p>Visual dashboards provide instant insights into deposit trends, withdrawal ratios, and ROI.</p>
                    </div>
                    <div className="featureCard">
                        <h4>Retention Marketing</h4>
                        <p>Use built-in communication tools to target dormant accounts and encourage re-deposits.</p>
                    </div>
                </div>

                <h2 id="branding">White Label Branding</h2>
                <p>
                    Our CRM is designed to be invisible to your clients while empowering your staff. For your team, the interface is fully white-labeled to match your internal corporate identity.
                </p>
                <ul className="feature-list">
                    <li><strong>Staff Portal Branding:</strong> Customize the administrative dashboard with your company colors and logo for a professional internal workspace.</li>
                    <li><strong>Custom Reporting Templates:</strong> Generate branded PDF reports and statements for your clients and regulatory bodies.</li>
                    <li><strong>Integrated Communication:</strong> White-label all system-generated messages, including automated emails and SMS notifications for lead status changes.</li>
                    <li><strong>Custom Field Management:</strong> Tailor the CRM database to collect the specific data points required for your region&apos;s compliance and sales strategy.</li>
                </ul>

                <h2 id="infrastructure">Server Hosting &amp; Infrastructure</h2>
                <p>
                    We understand that your CRM stores your most valuable asset—your client data. Our infrastructure is built on high-security cloud environments with multi-layered protection.
                </p>
                <h3>Data Center Locations</h3>
                <ul>
                    <li><strong>London, UK</strong> - Tier-3 Secure Facility</li>
                    <li><strong>Singapore</strong> - APAC Connectivity Hub</li>
                    <li><strong>New York, USA</strong> - Financial Infrastructure Center</li>
                    <li><strong>Frankfurt, Germany</strong> - Data Sovereignty Optimized</li>
                </ul>
                <h3>Infrastructure Specifications</h3>
                <ul>
                    <li>AES-256 data encryption at rest and in transit.</li>
                    <li>Daily automated off-site backups with 30-day retention.</li>
                    <li>Load-balanced web servers for zero-lag dashboard performance.</li>
                    <li>Advanced DDoS protection and Web Application Firewall (WAF).</li>
                    <li>Dedicated IP addresses for secure administrative access.</li>
                </ul>
                <div className="infoBox">
                    <p><strong>SLA/Uptime Statement:</strong> Our infrastructure maintains a 99.9% availability rate. We employ proactive monitoring and automated failover systems to ensure your back-office is always accessible.</p>
                </div>

                <h2 id="features">Platform Features</h2>
                <p>Comprehensive tools to manage every facet of your brokerage business.</p>
                <h3>Back-office &amp; Management Features</h3>
                <ul>
                    <li>Centralized &quot;Client Card&quot; with full 360-degree history.</li>
                    <li>Multi-account management (Live, Demo, Archive).</li>
                    <li>Bulk account creation and leverage adjustment tools.</li>
                    <li>Internal ticketing system for client support requests.</li>
                    <li>Deposit and Withdrawal request approval workflows.</li>
                    <li>Real-time notification system for major account events.</li>
                </ul>
                <h3>Lead &amp; Sales Tracking</h3>
                <ul>
                    <li>Lead source tracking (UTM parameters) for marketing ROI.</li>
                    <li>Automated lead assignment based on country, language, or weight.</li>
                    <li>Sales performance leaderboards and conversion tracking.</li>
                    <li>Call log integration for VoIP systems.</li>
                </ul>
                <h3>Compliance &amp; KYC</h3>
                <ul>
                    <li>Multi-tier document upload (POI, POR, etc.).</li>
                    <li>Automated blacklist and PEP screening options.</li>
                    <li>Regulatory reporting exports for MiFID, ASIC, and other jurisdictions.</li>
                </ul>

                <h2 id="api">API &amp; Integration</h2>
                <p>The CRM acts as the hub for your entire brokerage, connecting your website, trading servers, and external service providers.</p>
                <h3>Manager / Admin API</h3>
                <ul>
                    <li>Programmatic account opening and group movement.</li>
                    <li>Real-time balance and credit adjustments via external triggers.</li>
                    <li>Secure data export for proprietary business intelligence tools.</li>
                </ul>
                <h3>Gateway &amp; Connectivity API</h3>
                <ul>
                    <li><strong>Trading Servers:</strong> Native connectors for MT4, MT5, and cTrader.</li>
                    <li><strong>Payment Gateways:</strong> Support for 50+ global and local PSPs.</li>
                    <li><strong>KYC Providers:</strong> Integrated APIs for Sumsub, Onfido, and more.</li>
                </ul>
                <h3>Web API / SDK</h3>
                <p>
                    We provide a RESTful Web API that allows your developers to build custom registration forms, client portals, or mobile apps that communicate directly with the CRM backend. This ensures a seamless flow of data from your public website to your private back-office.
                </p>

                <h2 id="pricing">Pricing &amp; Setup</h2>
                <p>
                    Our pricing is designed to scale with your business, moving from a fixed entry fee to a flexible model based on your account volume.
                </p>
                <h3>What’s Included</h3>
                <ul>
                    <li>Full CRM administrative dashboard access.</li>
                    <li>Basic KYC module and document storage.</li>
                    <li>Connectivity for active trading server(s).</li>
                    <li>Unlimited Staff accounts with role-based access.</li>
                    <li>Integration with standard payment gateways.</li>
                    <li>Monthly security updates and bug fixes.</li>
                </ul>
                <h3>Optional Add-Ons</h3>
                <ul>
                    <li>Advanced Multi-Tier IB/Affiliate Module.</li>
                    <li>White-label Trader&apos;s Room (Client Portal).</li>
                    <li>Custom VoIP/Call Center integration.</li>
                    <li>Specialized regulatory reporting modules.</li>
                </ul>
                <h3>Setup Timeline</h3>
                <ol>
                    <li><strong>Requirement Mapping (Days 1-2):</strong> Staff roles and data field configuration.</li>
                    <li><strong>Server Connectivity (Days 3-4):</strong> Linking the CRM to your MT4/MT5 environment.</li>
                    <li><strong>Branding &amp; Styling (Days 5-6):</strong> Applying your logo and internal color scheme.</li>
                    <li><strong>UAT &amp; Training (Days 7-9):</strong> Staff training and workflow testing.</li>
                    <li><strong>Go-Live (Day 10):</strong> Production deployment and lead ingestion.</li>
                </ol>

                <h2 id="faq">Frequently Asked Questions</h2>
                <FAQAccordion faqs={faqs} />
            </ContentPageLayout>
        </main>
    );
}
