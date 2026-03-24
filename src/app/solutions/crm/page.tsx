import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';
import crmStyles from './crm.module.css';

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
        <>
            
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Forex CRM | Enterprise Back-Office & KYC Management","description":"Optimize your brokerage operations with a high-performance Forex CRM. Manage leads, automate KYC, and track deposits with an integrated back-office solution.","url":"https://fxtrusts.com/solutions/crm"}) }}
      />
      <h1 className="sr-only">C R M Page</h1>
            {/* Original Component */}
            
        <main className={crmStyles.crmPage}>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="BROKER INFRASTRUCTURE"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
                title="Forex CRM"
                subtitle="Centralize your brokerage operations with an enterprise-grade CRM designed for high-volume data and rapid scaling. Convert more leads and automate compliance workflows from a single, secure interface."
                primaryButtonText="Get Started"
                primaryButtonHref="https://user.flexymarkets.com/accounts/signIns"
                secondaryButtonText="Talk to Sales"
                secondaryButtonHref="/company/contact"
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
                ctaButtonHref="https://user.flexymarkets.com/accounts/signIns"
                quickFacts={[
                    { label: 'Setup Time', value: '7–10 Business Days' },
                    { label: 'Uptime SLA', value: '99.9%' },
                    { label: 'Integrations', value: '100+' },
                    { label: 'Server Sync', value: 'Real-Time' },
                ]}
                relatedLinks={[
                    { title: 'MetaTrader 5 White Label', href: '/solutions/mt5', readTime: '5 min' },
                    { title: 'Trader\'s Room / Client Portal', href: '/solutions/traders-room', readTime: '4 min' },
                    { title: 'Copy Trading Platform', href: '/solutions/copy-trading', readTime: '6 min' },
                    { title: 'Crypto Payment Gateway', href: '/solutions/crypto-gateway', readTime: '3 min' },
                ]}
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

                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                            Staff Portal Branding
                        </h4>
                        <p>Customize the administrative dashboard with your company colors and logo for a professional internal workspace.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                            Custom Reporting Templates
                        </h4>
                        <p>Generate branded PDF reports and statements for your clients and regulatory bodies.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            Integrated Communication
                        </h4>
                        <p>White-label all system-generated messages, including automated emails and SMS notifications for lead status changes.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                            Custom Field Management
                        </h4>
                        <p>Tailor the CRM database to collect the specific data points required for your region&apos;s compliance and sales strategy.</p>
                    </div>
                </div>

                <h2 id="infrastructure">Server Hosting &amp; Infrastructure</h2>
                <p>
                    We understand that your CRM stores your most valuable asset—your client data. Our infrastructure is built on high-security cloud environments with multi-layered protection.
                </p>

                <h3>Data Center Locations</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            London, UK
                        </h4>
                        <p>Tier-3 Secure Facility</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            Singapore
                        </h4>
                        <p>APAC Connectivity Hub</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            New York, USA
                        </h4>
                        <p>Financial Infrastructure Center</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            Frankfurt, Germany
                        </h4>
                        <p>Data Sovereignty Optimized</p>
                    </div>
                </div>

                <h3>Infrastructure Specifications</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            Data Encryption
                        </h4>
                        <p>AES-256 data encryption at rest and in transit.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                            Automated Backups
                        </h4>
                        <p>Daily automated off-site backups with 30-day retention.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                            Load Balancing
                        </h4>
                        <p>Load-balanced web servers for zero-lag dashboard performance.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            DDoS Protection
                        </h4>
                        <p>Advanced DDoS protection and Web Application Firewall (WAF).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                            Dedicated Access
                        </h4>
                        <p>Dedicated IP addresses for secure administrative access.</p>
                    </div>
                </div>

                <div className="infoBox">
                    <p><strong>SLA/Uptime Statement:</strong> Our infrastructure maintains a 99.9% availability rate. We employ proactive monitoring and automated failover systems to ensure your back-office is always accessible.</p>
                </div>

                <h2 id="features">Platform Features</h2>
                <p>Comprehensive tools to manage every facet of your brokerage business.</p>

                <h3>Back-office &amp; Management Features</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                            Client Card
                        </h4>
                        <p>Centralized &quot;Client Card&quot; with full 360-degree history.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a4 4 0 0 0-4-4H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a4 4 0 0 1 4-4h6z" /></svg>
                            Multi-Account Management
                        </h4>
                        <p>Multi-account management (Live, Demo, Archive).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" /></svg>
                            Bulk Operations
                        </h4>
                        <p>Bulk account creation and leverage adjustment tools.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                            Support Ticketing
                        </h4>
                        <p>Internal ticketing system for client support requests.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            Approval Workflows
                        </h4>
                        <p>Deposit and Withdrawal request approval workflows.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                            Real-Time Notifications
                        </h4>
                        <p>Real-time notification system for major account events.</p>
                    </div>
                </div>

                <h3>Lead &amp; Sales Tracking</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M3 3v18h18M7 16l4-4 4 4 5-8" /></svg>
                            Lead Source Tracking
                        </h4>
                        <p>Lead source tracking (UTM parameters) for marketing ROI.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg>
                            Automated Assignment
                        </h4>
                        <p>Automated lead assignment based on country, language, or weight.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                            Performance Tracking
                        </h4>
                        <p>Sales performance leaderboards and conversion tracking.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            VoIP Integration
                        </h4>
                        <p>Call log integration for VoIP systems.</p>
                    </div>
                </div>

                <h3>Compliance &amp; KYC</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                            Document Upload
                        </h4>
                        <p>Multi-tier document upload (POI, POR, etc.).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            PEP Screening
                        </h4>
                        <p>Automated blacklist and PEP screening options.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                            Regulatory Exports
                        </h4>
                        <p>Regulatory reporting exports for MiFID, ASIC, and other jurisdictions.</p>
                    </div>
                </div>

                <h2 id="api">API &amp; Integration</h2>
                <p>The CRM acts as the hub for your entire brokerage, connecting your website, trading servers, and external service providers.</p>

                <h3>Integration &amp; Extensibility</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            Manager / Admin API
                        </h4>
                        <ul>
                            <li>Programmatic account opening and group movement.</li>
                            <li>Real-time balance and credit adjustments via external triggers.</li>
                            <li>Secure data export for proprietary business intelligence tools.</li>
                        </ul>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            Gateway &amp; Connectivity
                        </h4>
                        <ul>
                            <li><strong>Trading Servers:</strong> Native connectors for MT4, MT5, and cTrader.</li>
                            <li><strong>Payment Gateways:</strong> Support for 50+ global and local PSPs.</li>
                            <li><strong>KYC Providers:</strong> Integrated APIs for Sumsub, Onfido, and more.</li>
                        </ul>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
                            Web API / SDK
                        </h4>
                        <p>RESTful Web API that allows your developers to build custom registration forms, client portals, or mobile apps that communicate directly with the CRM backend.</p>
                    </div>
                </div>

                <h2 id="pricing">Pricing &amp; Setup</h2>
                <p>
                    Our pricing is designed to scale with your business, moving from a fixed entry fee to a flexible model based on your account volume.
                </p>

                <h3>What's Included</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                            CRM Dashboard
                        </h4>
                        <p>Full CRM administrative dashboard access.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            KYC Module
                        </h4>
                        <p>Basic KYC module and document storage.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            Server Connectivity
                        </h4>
                        <p>Connectivity for active trading server(s).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            Staff Accounts
                        </h4>
                        <p>Unlimited Staff accounts with role-based access.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                            Payment Integration
                        </h4>
                        <p>Integration with standard payment gateways.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            Updates &amp; Support
                        </h4>
                        <p>Monthly security updates and bug fixes.</p>
                    </div>
                </div>

                <h3>Optional Add-Ons</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            IB/Affiliate Module
                        </h4>
                        <p>Advanced Multi-Tier IB/Affiliate Module.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                            Trader's Room
                        </h4>
                        <p>White-label Trader&apos;s Room (Client Portal).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            VoIP Integration
                        </h4>
                        <p>Custom VoIP/Call Center integration.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                            Regulatory Reports
                        </h4>
                        <p>Specialized regulatory reporting modules.</p>
                    </div>
                </div>

                <h3>Setup Timeline</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                            Requirement Mapping
                        </h4>
                        <p>Staff roles and data field configuration (Days 1-2).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                            Server Connectivity
                        </h4>
                        <p>Linking the CRM to your MT4/MT5 environment (Days 3-4).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                            Branding &amp; Styling
                        </h4>
                        <p>Applying your logo and internal color scheme (Days 5-6).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                            UAT &amp; Training
                        </h4>
                        <p>Staff training and workflow testing (Days 7-9).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>05</span>
                            Go-Live
                        </h4>
                        <p>Production deployment and lead ingestion (Day 10).</p>
                    </div>
                </div>

                <h2 id="faq">Frequently Asked Questions</h2>
                <FAQAccordion faqs={faqs} />
            </ContentPageLayout>
        </main>
    
        </>
    );
}
