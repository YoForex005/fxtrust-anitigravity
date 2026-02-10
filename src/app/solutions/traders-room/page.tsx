import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Trader’s Room & Client Portal | Secure Broker User Dashboard',
    description: 'Streamline deposits, withdrawals, and account management with a custom-branded Trader’s Room. A secure, high-conversion portal for modern forex brokers.',
    keywords: [
        'Trader’s Room Client Portal',
        'Forex Client Cabinet',
        'Broker Dashboard Software',
        'MT5 CRM Integration',
        'Deposit and Withdrawal Portal',
        'Branded Trader Dashboard',
    ],
    openGraph: {
        title: 'Trader’s Room & Client Portal | Secure Broker User Dashboard',
        description: 'Streamline deposits, withdrawals, and account management with a custom-branded Trader’s Room. A secure, high-conversion portal for modern forex brokers.',
        type: 'website',
        url: 'https://fxtrusts.com/solutions/traders-room',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Trader’s Room & Client Portal | Secure Broker User Dashboard',
        description: 'Streamline deposits, withdrawals, and account management with a custom-branded Trader’s Room. A secure, high-conversion portal for modern forex brokers.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/traders-room',
    },
};

export default function TradersRoomPage() {
    const tableOfContents = [
        { id: 'solution', title: 'Trader’s Room Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Client Portal?' },
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
        { label: 'Setup Time', value: '7-10 Days' },
        { label: 'PSPs', value: '50+' },
        { label: 'Support', value: '24/7' },
    ];

    const features = [
        'Multi-Currency Wallets',
        'Instant Deposit/Withdrawal',
        'Automated KYC Module',
        'Trading Account Analytics',
        'Internal Fund Transfers',
        'IB & Affiliate Tracking',
        'Mobile-Responsive UI',
    ];

    const faqs = [
        {
            question: 'How long does it take to set up the Trader’s Room?',
            answer: 'A standard branded portal can typically be deployed within 7 to 10 business days, provided all branding assets and third-party API credentials are ready. Custom integrations may extend this timeline.',
        },
        {
            question: 'Is the portal fully mobile-responsive?',
            answer: 'Yes. The Trader’s Room is built with a "mobile-first" philosophy. Your clients can manage their accounts, upload documents, and make deposits from any mobile browser with a seamless user experience.',
        },
        {
            question: 'Can I integrate my own custom KYC or PSP provider?',
            answer: 'Absolutely. Our portal is designed with a modular architecture. We can integrate with any provider that offers an API or SDK, ensuring you can use the services that best suit your region and compliance needs.',
        },
        {
            question: 'Will the portal work with my existing MT4/MT5 server?',
            answer: 'Yes. We use standard Manager APIs to connect the portal to your trading server. This allows for real-time account creation, balance updates, and password changes directly from the dashboard.',
        },
        {
            question: 'What are the minimum server requirements?',
            answer: 'Our solution is typically provided as a SaaS or Managed Hosting service, meaning you don\'t need to provide your own servers. We recommend a minimum of X active users to maximize the value of the platform.',
        },
        {
            question: 'How is client data protected?',
            answer: 'Data security is our top priority. We use SSL/TLS encryption for all traffic, store sensitive data in encrypted databases, and offer 2FA (Two-Factor Authentication) to ensure only authorized users can access their funds.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="Broker Infrastructure"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>}
                title="Trader’s Room / Client Portal"
                subtitle="Empower your traders with a seamless, self-service dashboard designed to drive deposits and simplify account management. Reduce manual support and increase client lifetime value."
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
                benefits={[
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>,
                        text: "Instant Onboarding"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
                        text: "50+ Integrated PSPs"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                        text: "Fully White-Label"
                    }
                ]}
            />
            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Launch Your Trader’s Room in 10 Days"
                ctaText="Deploy a professional, high-converting client cabinet with full CRM sync."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={features}
                contactTitle="Need help?"
                contactText="Contact our technical team to discuss custom portal integrations."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    <h1>Trader&apos;s Room / Client Portal Solution</h1>
                    <p>
                        The Trader&apos;s Room (or Client Cabinet) is the central nervous system of your client&apos;s relationship with your brokerage. It is a secure, web-based portal where traders manage their financial operations, personal profiles, and trading accounts without requiring direct assistance from your support desk. Designed for fintech founders and brokers, this solution bridges the gap between your marketing website and the trading platform.
                    </p>
                    <p>
                        Our portal is optimized for high conversion and retention. By providing a frictionless environment for depositing funds, verifying identity, and accessing educational resources, you ensure that the barrier to entry for new traders is as low as possible. It serves as the primary touchpoint for everything from initial registration to advanced IB management.
                    </p>
                    <ul>
                        <li><strong>Streamlined Financial Operations:</strong> Centralized hub for managing deposits, withdrawals, and internal transfers across multiple trading accounts.</li>
                        <li><strong>Comprehensive Profile Management:</strong> Secure storage for KYC documents, contact preferences, and security settings like Two-Factor Authentication (2FA).</li>
                        <li><strong>Direct Trading Integration:</strong> Seamless sync with MT4, MT5, and other platforms to view equity, margin, and balance in real-time.</li>
                        <li><strong>Marketing &amp; Engagement Tools:</strong> Targeted banners, notifications, and bonus management systems to drive active trading behavior.</li>
                    </ul>
                </div>

                <h2 id="platform-overview">Platform Overview</h2>
                <p>
                    The Client Portal is built on a modern tech stack to ensure speed, security, and 24/7 availability for global audiences.
                </p>

                <div className="statsGrid">
                    <div className="statBox">
                        <strong>99.9%</strong>
                        <span>Uptime SLA ensuring clients can deposit funds at any time.</span>
                    </div>
                    <div className="statBox">
                        <strong>7-10 Days</strong>
                        <span>Average setup for standard branded portal deployment.</span>
                    </div>
                    <div className="statBox">
                        <strong>50+</strong>
                        <span>Integrated PSPs including Credit Cards, Wire, and Crypto.</span>
                    </div>
                    <div className="statBox">
                        <strong>24/7</strong>
                        <span>Technical Monitoring to protect against unauthorized access.</span>
                    </div>
                </div>

                <h2 id="why">Why Trader’s Room?</h2>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                            Optimized UX for Conversion
                        </h4>
                        <p>A clean, intuitive interface reduces &quot;churn&quot; during the registration and deposit process.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            Automated Compliance
                        </h4>
                        <p>Integrated KYC/AML workflows allow for rapid document verification and account approval.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            Reduced Operational Costs
                        </h4>
                        <p>Self-service tools for password resets and fund transfers significantly lower support ticket volume.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            Security & Trust
                        </h4>
                        <p>Bank-grade encryption and 2FA options provide clients with the peace of mind required to fund their accounts.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                            Cross-Platform Compatibility
                        </h4>
                        <p>Fully responsive design ensures the portal works perfectly on smartphones, tablets, and desktops.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            Enhanced Retention
                        </h4>
                        <p>Features like trading journals, calendars, and bonus tracking keep users returning to the portal.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            Multi-Language Support
                        </h4>
                        <p>Localize the experience for global regions with customizable language packs.</p>
                    </div>
                </div>

                <h2 id="branding">White Label Branding</h2>
                <p>
                    Your Trader&apos;s Room should feel like a natural extension of your website. We offer deep customization options to ensure your brand remains front and center throughout the user journey.
                </p>

                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>Custom User Interface</h4>
                        <p>Apply your color palette, logo, and typography across the entire dashboard to maintain a premium, unified brand image.</p>
                    </div>
                    <div className="featureCard">
                        <h4>Branded Mobile Access</h4>
                        <p>Whether through a web-responsive portal or a dedicated app, your brand identity remains consistent for on-the-go traders.</p>
                    </div>
                    <div className="featureCard">
                        <h4>Custom Email Templates</h4>
                        <p>All automated system emails (registrations, deposit confirmations, etc.) are fully white-labeled with your branding.</p>
                    </div>
                    <div className="featureCard">
                        <h4>Client Communication</h4>
                        <p>Control the messaging within the portal, from custom banners and news feeds to pop-up notifications for specific client segments.</p>
                    </div>
                </div>

                <h2 id="infrastructure">Server Hosting & Infrastructure</h2>
                <p>
                    The Client Portal is hosted on secure, cloud-based infrastructure designed to handle sensitive financial data and high concurrent user traffic with zero lag.
                </p>

                <h3>Data Center Locations</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            New York, USA
                        </h4>
                        <p>Primary Financial Hub - NY4 Equinix Data Center.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            London, UK
                        </h4>
                        <p>Low-latency European Access - LD4 Equinix Data Center.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            Singapore
                        </h4>
                        <p>Asian Market Optimization - SG1 Equinix Data Center.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            Dubai, UAE
                        </h4>
                        <p>MENA Region Connectivity - Equinix Data Center.</p>
                    </div>
                </div>

                <h3>Infrastructure Specifications</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            Advanced Encryption
                        </h4>
                        <p>End-to-end SSL/TLS encryption for all data transmissions and AES-256 for sensitive data.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            Compliant Security
                        </h4>
                        <p>SOC 2 compliant data centers with strict physical security and real-time monitoring.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7a7.5 7.5 0 1 1-1.39-1.39L4 16.39V20h3.61l6.22-6.22A7.5 7.5 0 0 1 21 2zm-8 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" /></svg>
                            Regular Auditing
                        </h4>
                        <p>Continuous penetration testing and vulnerability scanning to safeguard client assets.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                            Data Redundancy
                        </h4>
                        <p>Real-time database replication and automated daily backups for ultimate disaster recovery.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                            Scalable Performance
                        </h4>
                        <p>High-speed load balancing to maintain peak performance during massive market volatility.</p>
                    </div>
                </div>

                <div className="infoBox">
                    <p>
                        <strong>Security Statement:</strong> We implement AES-256 encryption for sensitive client data. All financial transactions are processed through secure, isolated environments to ensure maximum protection of client funds and information.
                    </p>
                </div>

                <h2 id="features">Platform Features</h2>
                <p>
                    Our Trader&apos;s Room is packed with features designed to enhance the client experience and simplify brokerage management.
                </p>

                <h3>Account Management</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                            Account Creation
                        </h4>
                        <p>Create and manage live and demo accounts for MT4/MT5 instantly.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
                            Real-Time Analytics
                        </h4>
                        <p>Real-time overview of balance, equity, and margin across all accounts.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            Access Control
                        </h4>
                        <p>Instant password reset and leverage change requests for traders.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M7 10L3 14l4 4" /><path d="M17 14l4-4-4-4" /><path d="M21 10H3" /></svg>
                            Internal Transfers
                        </h4>
                        <p>Seamless internal transfers between trading accounts and wallets.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                            Reporting
                        </h4>
                        <p>Comprehensive transaction history and downloadable account statements.</p>
                    </div>
                </div>

                <h3>Financial Tools</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                            Multi-Currency Wallets
                        </h4>
                        <p>Support for major fiats and cryptocurrencies (USD, EUR, BTC, USDT, etc.).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            Automated Deposits
                        </h4>
                        <p>Automated deposit processing for instant trading account funding.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            Withdrawal Tracking
                        </h4>
                        <p>Real-time withdrawal request tracking and status notifications.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg>
                            Currency Conversion
                        </h4>
                        <p>Integrated currency conversion calculator for seamless fund management.</p>
                    </div>
                </div>

                <h3>Compliance & Support</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            Advanced KYC
                        </h4>
                        <p>Multi-tier KYC document upload and automated verification system.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                            Integrated Support
                        </h4>
                        <p>Built-in support ticket system or seamless live chat widget integration.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                            Compliance Alerts
                        </h4>
                        <p>Automated notifications for expiring documents or KYC requirements.</p>
                    </div>
                </div>

                <h2 id="api">API &amp; Integration</h2>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            Manager / Admin API
                        </h4>
                        <ul>
                            <li>Sync client data directly with backend CRMs.</li>
                            <li>Automate account approvals based on criteria.</li>
                            <li>Extract financial reports for auditing.</li>
                            <li>Manage IB structures and payouts.</li>
                        </ul>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            Connectivity & Payment API
                        </h4>
                        <ul>
                            <li>Deep integration with payment gateways.</li>
                            <li>Real-time MT4/MT5 Manager API sync.</li>
                            <li>Webhooks for marketing automation.</li>
                        </ul>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
                            Web API / SDK
                        </h4>
                        <p>Comprehensive REST API for developers to build custom front-ends, unique mobile apps, and proprietary tools.</p>
                    </div>
                </div>

                <h3>Common Integrations</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>CRM Systems</h4>
                        <p>Salesforce, Microsoft Dynamics, Zoho, and Custom Solutions.</p>
                    </div>
                    <div className="featureCard">
                        <h4>KYC Providers</h4>
                        <p>Sumsub, Onfido, Shufti Pro, and local verification services.</p>
                    </div>
                    <div className="featureCard">
                        <h4>Payments</h4>
                        <p>Stripe, PayPal, B2BinPay, Skrill, Neteller, and Wire Transfer.</p>
                    </div>
                </div>

                <h2 id="pricing">Pricing & Setup</h2>
                <p>
                    Our pricing is structured to be transparent and scalable, catering to both startup brokers and established institutions.
                </p>

                <h3>What&apos;s Included</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>Trader&apos;s Room Portal</h4>
                        <p>Fully branded, web-responsive client cabinet for your brokerage.</p>
                    </div>
                    <div className="featureCard">
                        <h4>Trading Server Sync</h4>
                        <p>Seamless real-time integration with MT4/MT5 trading servers.</p>
                    </div>
                    <div className="featureCard">
                        <h4>Compliance Module</h4>
                        <p>Standard KYC/AML document management and profile system.</p>
                    </div>
                    <div className="featureCard">
                        <h4>Payment Gateways</h4>
                        <p>Core gateway integrations for deposits and withdrawals.</p>
                    </div>
                </div>

                <h3>Optional Add-Ons</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>IB / Affiliate Module</h4>
                        <p>Professional multi-tier commission and tracking system.</p>
                    </div>
                    <div className="featureCard">
                        <h4>Investor Dashboards</h4>
                        <p>Advanced PAMM/MAM dashboards for social trading.</p>
                    </div>
                    <div className="featureCard">
                        <h4>Custom Mobile App</h4>
                        <p>Dedicated branded apps for iOS and Android platforms.</p>
                    </div>
                    <div className="featureCard">
                        <h4>Local PSPs</h4>
                        <p>Specialized payment gateway integrations for your region.</p>
                    </div>
                </div>

                <h3>Setup Timeline</h3>
                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>01</span>
                            Branding
                        </h4>
                        <p>Asset collection and UI styling (Days 1-3).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>02</span>
                            Infrastructure
                        </h4>
                        <p>Cloud and database provisioning (Days 3-5).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>03</span>
                            Integration
                        </h4>
                        <p>Server and PSP connections (Days 5-8).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>04</span>
                            Testing
                        </h4>
                        <p>Security and QA testing (Days 8-10).</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1E40AF', marginRight: '8px' }}>05</span>
                            Go-Live
                        </h4>
                        <p>Production launch and training (Day 10).</p>
                    </div>
                </div>

                <h2 id="faq">Frequently Asked Questions</h2>
                <FAQAccordion faqs={faqs} />
            </ContentPageLayout>
        </main>
    );
}
