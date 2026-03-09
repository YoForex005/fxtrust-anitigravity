import React from 'react';
import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import ContentPageLayout from '@/components/ContentPageLayout';
import FAQSchema from '@/components/seo/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: '24/7 Outsourced Technical Support | L1/L2 Broker Helpdesk',
    description: 'Scale your brokerage with 24/7 outsourced technical support. Expert L1/L2 helpdesk services for MetaTrader, cTrader, and CRM issues. Secure, white-labeled support.',
    alternates: {
        canonical: 'https://fxtrusts.com/solutions/technical-support',
    },
    keywords: [
        'Outsourced Technical Support',
        'Broker Helpdesk Services',
        'MetaTrader Support Team',
        'White Label Technical Support',
        'L1 L2 Support for Brokers',
        '24/7 Trading Support',
    ],
    openGraph: {
        title: '24/7 Outsourced Technical Support | L1/L2 Broker Helpdesk',
        description: 'Scale your brokerage with 24/7 outsourced technical support. Expert L1/L2 helpdesk services for MetaTrader, cTrader, and CRM issues. Secure, white-labeled support.',
        url: 'https://fxtrusts.com/solutions/technical-support',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '24/7 Outsourced Technical Support | L1/L2 Broker Helpdesk',
        description: 'Scale your brokerage with 24/7 outsourced technical support. Expert L1/L2 helpdesk services for MetaTrader, cTrader, and CRM issues. Secure, white-labeled support.',
    },
};

export default function TechnicalSupportPage() {
    const tableOfContents = [
        { id: 'solution', title: '24/7 Technical Support Solution' },
        { id: 'platform-overview', title: 'Platform Overview' },
        { id: 'why', title: 'Why Outsourced Technical Support?' },
        { id: 'branding', title: 'White Label Branding' },
        { id: 'infrastructure', title: 'Server Hosting & Infrastructure' },
        { id: 'features', title: 'Platform Features' },
        { id: 'api', title: 'API & Integration' },
        { id: 'pricing', title: 'Pricing & Setup' },
        { id: 'faq', title: 'Frequently Asked Questions' },
    ];

    const relatedLinks = [
        { title: 'Forex Licensing', href: '/solutions/forex-licensing', readTime: '5 min' },
        { title: 'Forex CRM', href: '/solutions/crm', readTime: '5 min' },
        { title: 'Traders Room', href: '/solutions/traders-room', readTime: '4 min' },
    ];

    const quickFacts = [
        { label: 'Response Time', value: '< 60 Seconds' },
        { label: 'Resolution Time', value: '2 Hours' },
        { label: 'Languages', value: '10+' },
        { label: 'Available', value: '24/7' },
    ];

    const featuresList = [
        '24/7 Live Chat & Tickets',
        'MT4/MT5 Server Management',
        'Client Portal Troubleshooting',
        'Liquidity Bridge Monitoring',
        'KYC/Onboarding Assistance',
        'Multi-Language Support',
        'Deep Technical Forensics',
    ];

    const faqs = [
        {
            question: 'Do your agents have access to our trading server?',
            answer: 'We work with limited permissions. Typically, L1 agents have "Read-Only" access to verify data, while L2 agents may have specific permissions to adjust groups or investigate logs, all controlled via secure VPN tunnels.',
        },
        {
            question: 'Which trading platforms do you support?',
            answer: 'Our team is expert in MT4, MT5, cTrader, and TradingView, as well as various proprietary mobile and web terminals. We are also familiar with most major Broker CRMs.',
        },
        {
            question: 'How do you handle a major server outage?',
            answer: 'We have a Critical Incident Protocol. Our L2 agents immediately notify your technical directors while our L1 team manages the influx of client inquiries using a pre-approved "Status Update" message to keep your brand\'s reputation intact.',
        },
        {
            question: 'Can you provide support in multiple languages?',
            answer: 'Yes. We currently offer support in 10 major languages, including English, Spanish, Arabic, Chinese, and Portuguese. We can add additional languages based on your specific market focus.',
        },
        {
            question: 'What is the average setup time?',
            answer: 'A full global helpdesk activation typically takes 2 to 4 weeks, including the critical training and knowledge-transfer phase to ensure our agents represent your brand perfectly.',
        },
        {
            question: 'How do we monitor the quality of your support?',
            answer: 'You have 100% transparency. You can log into our helpdesk dashboard at any time to read chat transcripts, listen to recordings, and view real-time performance analytics and CSAT scores.',
        },
    ];

    return (
        <main>
            <FAQSchema faqs={faqs} />
            <InnerPageHeader
                badge="Broker Infrastructure"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                title="24/7 Outsourced Technical Support"
                subtitle='Protect your brokerage’s reputation with round-the-clock technical expertise. Our specialized L1 and L2 helpdesk services provide your traders with instant resolutions for platform, connectivity, and account issues, ensuring your firm delivers a premium, "always-on" experience across every global time zone.'
                primaryButtonText="Get Started"
                primaryButtonHref="/company/contact"
                secondaryButtonText="Talk to an Expert"
                secondaryButtonHref="/company/contact"
                benefits={[
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20M12 2a10 10 0 0 1 10 10M2 12a10 10 0 0 1 10 10" /></svg>,
                        text: "Global 24/7 Availability"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
                        text: "Multi-Platform Experts"
                    },
                    {
                        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
                        text: "Fully White Label"
                    }
                ]}
            />

            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Activate Global Support in 14 Days"
                ctaText="Stop losing traders to technical frustration. Deploy an expert helpdesk today."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
                features={featuresList}
                contactTitle="Need help?"
                contactText="Contact our operations team to design a custom support workflow for your firm."
                contactEmail="support@domain.com"
            >
                <div id="solution">
                    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"24/7 Outsourced Technical Support | L1/L2 Broker Helpdesk","description":"Scale your brokerage with 24/7 outsourced technical support. Expert L1/L2 helpdesk services for MetaTrader, cTrader, and CRM issues. Secure, white-labeled support.","url":"https://fxtrusts.com/solutions/technical-support"}) }}
      />
      <h1>24/7 Technical Support Solution</h1>
                    <p>
                        The 24/7 Outsourced Technical Support solution is an essential operational layer for modern brokerages, prop firms, and fintech providers. In the high-stakes world of online trading, a technical glitch during a high-volatility news event can result in massive client dissatisfaction. Our L1/L2 helpdesk serves as your first line of defense, providing immediate, technically accurate answers to trader inquiries while escalating complex server or bridge issues to specialized engineers.
                    </p>
                    <p>
                        For fintech founders and brokerage owners, this service eliminates the immense overhead and complexity of managing a multi-shift, multi-lingual support team. We provide the human capital and the technical knowledge base to handle everything from simple login resets and platform navigation (L1) to deeper investigations into trade execution, slippage reports, and API connectivity issues (L2). By outsourcing this function, you ensure your core team can focus on growth while we handle the daily technical friction.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Tiered Expertise</h3>
                            <p className="text-sm text-gray-700">L1 agents for high-volume general inquiries and L2 specialists for deep-dive technical troubleshooting.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Trading Platform Fluency</h3>
                            <p className="text-sm text-gray-700">Deep knowledge of MetaTrader Manager, server logs, and mobile app synchronization.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Crisis Management</h3>
                            <p className="text-sm text-gray-700">Immediate response protocols for server downtime, price feed gaps, or bridge disconnects.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Operational Scalability</h3>
                            <p className="text-sm text-gray-700">Easily handle seasonal spikes in trader activity or marketing-driven growth without hiring new staff.</p>
                        </div>
                    </div>
                </div>

                <div id="platform-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Our support infrastructure is designed for rapid response and total transparency, allowing you to monitor our performance in real-time.
                    </p>
                    <div className="statsGrid">
                        <div className="statBox">
                            <strong>&lt; 60s</strong>
                            <span>Average Initial Response<br />for live chat inquiries</span>
                        </div>
                        <div className="statBox">
                            <strong>2 Hours</strong>
                            <span>Average Resolution<br />for complex L2 technical tickets</span>
                        </div>
                        <div className="statBox">
                            <strong>10+</strong>
                            <span>Supported Languages<br />to serve a global client base</span>
                        </div>
                        <div className="statBox">
                            <strong>24/7</strong>
                            <span>Real-time Dashboard<br />to track CSAT and ticket volume</span>
                        </div>
                    </div>
                </div>

                <div id="why">
                    <h2>Why Outsourced Technical Support?</h2>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                Service
                            </h4>
                            <p>Uninterrupted Service: Global markets never sleep; our 24/7 presence ensures your traders get help at 2:00 AM as easily as 2:00 PM.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                                Knowledge
                            </h4>
                            <p>Deep Industry Knowledge: Our agents aren't generic; they are trained specifically in Forex, Crypto, and CFD market mechanics.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                Cost
                            </h4>
                            <p>Cost Efficiency: Eliminate the costs of recruiting, training, and housing a 24/7 internal helpdesk across multiple time zones.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                Stress
                            </h4>
                            <p>Reduced Executive Stress: Rest easy knowing that technical emergencies are being handled by professionals who know your stack.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                LTV
                            </h4>
                            <p>Increased Trader Lifetime Value (LTV): Fast, accurate support builds massive trust, leading to higher retention and larger deposits.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Security
                            </h4>
                            <p>Security & Compliance: All support interactions are recorded and handled according to strict data privacy and security protocols.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                Scalability
                            </h4>
                            <p>Seamless Scalability: Whether you have 500 or 50,000 active traders, our team scales to meet your ticket volume instantly.</p>
                        </div>
                    </div>
                </div>

                <div id="branding">
                    <h2>White Label Branding</h2>
                    <p>
                        Our team acts as your team. The transition is invisible, ensuring your brand equity remains front and center.
                    </p>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                Integrated Helpdesk Software
                            </h4>
                            <p>We can work within your existing Zendesk, Freshdesk, or Intercom instance, or provide a branded portal for your clients.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                Company-Specific Voice
                            </h4>
                            <p>Our agents are trained on your specific brand guidelines, tone of voice, and internal brokerage policies.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
                                Branded Email & Chat
                            </h4>
                            <p>All communications come from your @yourbroker.com email addresses and appear in your branded chat widgets.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                Internal Knowledge Base
                            </h4>
                            <p>We build and maintain a custom technical wiki specifically for your firm&apos;s unique platform configurations and rules.</p>
                        </div>
                    </div>
                </div>

                <div id="infrastructure">
                    <h2>Server Hosting & Infrastructure</h2>
                    <p>
                        Support quality is backed by a redundant, high-speed technical infrastructure that ensures our agents are always connected.
                    </p>
                    <h3>Data Center Locations</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                London
                            </h4>
                            <p>London, UK: Strategic Management Hub</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Dubai
                            </h4>
                            <p>Dubai, UAE: MENA Region Support Center</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Singapore
                            </h4>
                            <p>Singapore: APAC Support Center</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg>
                                Cloud
                            </h4>
                            <p>Cloud-Based: Redundant global helpdesk nodes</p>
                        </div>
                    </div>

                    <h3>Infrastructure Specifications</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                CRM
                            </h4>
                            <p>High-Availability CRM: Redundant helpdesk servers to ensure we never miss a client incoming message.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Security
                            </h4>
                            <p>Encrypted Voice/Data: All support calls and chats are protected by enterprise-grade TLS 1.3 encryption.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                                Manager
                            </h4>
                            <p>Direct Manager Access: Secure, VPN-tunnel access to your MT4/MT5 Manager terminals (view-only or limited admin).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                Failover
                            </h4>
                            <p>Automated Failover: If one support hub faces an outage, traffic is instantly rerouted to our other global centers.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Compliant
                            </h4>
                            <p>Compliant Data Handling: Full adherence to GDPR and regional data residency requirements for PII.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                SLA
                            </h4>
                            <p>SLA Guarantee: We offer a strictly enforced 99.9% uptime for our helpdesk accessibility. Our agents utilize dual-ISP connections and backup power.</p>
                        </div>
                    </div>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Comprehensive helpdesk capabilities designed to manage the specific technical needs of a modern brokerage.</p>

                    <h3>L1 Support Features (General)</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                Install
                            </h4>
                            <p>Platform installation and login assistance.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
                                Navigation
                            </h4>
                            <p>Basic MT4/MT5/cTrader navigation.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                Access
                            </h4>
                            <p>Password resets and 2FA troubleshooting.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                                Funds
                            </h4>
                            <p>"How-to" guidance for deposits and withdrawals.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                KYC
                            </h4>
                            <p>KYC document status updates and guidance.</p>
                        </div>
                    </div>

                    <h3>L2 Support Features (Technical)</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                Forensics
                            </h4>
                            <p>Trade execution forensics (investigating slippage/execution time).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Bridge
                            </h4>
                            <p>Bridge and Liquidity Provider (LP) connectivity checks.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                Algo
                            </h4>
                            <p>API key configuration for algorithmic traders.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Logs
                            </h4>
                            <p>EA (Expert Advisor) error log analysis.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                                Mobile
                            </h4>
                            <p>Mobile app sync and data feed troubleshooting.</p>
                        </div>
                    </div>

                    <h3>Reporting & Analytics</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                                Trends
                            </h4>
                            <p>Weekly "Issue Trend" reports to identify recurring platform bugs.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                CSAT
                            </h4>
                            <p>Client Satisfaction (CSAT) and Net Promoter Score (NPS) tracking.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                Metrics
                            </h4>
                            <p>Agent performance metrics (Average Handling Time, Resolution Rate).</p>
                        </div>
                    </div>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>Our support team integrates deeply with your technology stack to provide context-aware assistance.</p>

                    <h3>Manager / Admin API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                CRM
                            </h4>
                            <p>Secure integration with your Broker CRM to view real-time trader status.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Ticket
                            </h4>
                            <p>Automated ticket creation from "Platform Error" webhooks.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                                Logs
                            </h4>
                            <p>Ability to pull historical trade logs via API for L2 investigations.</p>
                        </div>
                    </div>

                    <h3>Gateway & Connectivity API</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                                Manager
                            </h4>
                            <p>MetaTrader Manager: Secure access for account monitoring and group management.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                Portal
                            </h4>
                            <p>Client Portal Integration: Deep linking between helpdesk tickets and the trader's dashboard.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                Chat
                            </h4>
                            <p>Slack/Teams Integration: Real-time escalation channel between our team and your senior management.</p>
                        </div>
                    </div>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a &quot;Support Widget&quot; SDK that can be embedded in your website, mobile app, or trading terminal. This widget allows traders to start a live chat, browse the knowledge base, or submit a ticket, with their account data automatically passed to our agents to speed up the resolution process.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is based on a &quot;Pay-as-you-go&quot; model per verification check, ensuring you only pay for the volume you actually process.</p>

                    <h3>What’s Included</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                24/7
                            </h4>
                            <p>24/7/365 Coverage across L1 and L2 tiers.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Access
                            </h4>
                            <p>Access to our branded multi-channel helpdesk software.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Lang
                            </h4>
                            <p>Multi-language support for 10 core languages.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                                Reports
                            </h4>
                            <p>Weekly operational and technical performance reports.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                                Training
                            </h4>
                            <p>Continuous training and knowledge base maintenance.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                Manager
                            </h4>
                            <p>Dedicated Account Manager for your firm.</p>
                        </div>
                    </div>

                    <h3>Optional Add-Ons</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                Calls
                            </h4>
                            <p>Outbound "Welcome Calls" for new registrations.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Agents
                            </h4>
                            <p>Dedicated agents (Exclusive to your brand).</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
                                Video
                            </h4>
                            <p>Technical "Live Video" support sessions.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                Prop
                            </h4>
                            <p>Specialized support for Proprietary Trading Firms (Rules/Breach assistance).</p>
                        </div>
                    </div>

                    <h3>Setup Timeline</h3>
                    <div className="featureGrid">
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>01</span>
                                Config
                            </h4>
                            <p>Workflow Configuration (Days 2-3): Defining your "Pass/Fail" rules and required levels.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>02</span>
                                Link
                            </h4>
                            <p>Infrastructure Link (Days 3-5): Setting up API access and helpdesk instances.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>03</span>
                                Training
                            </h4>
                            <p>Team Training (Days 5-10): Training our agents on your brand’s specific "Playbook."</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>04</span>
                                Shadow
                            </h4>
                            <p>Shadowing Phase (Days 10-14): Working alongside your team to verify accuracy.</p>
                        </div>
                        <div className="featureCard">
                            <h4>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#2563EB', marginRight: '8px' }}>05</span>
                                Live
                            </h4>
                            <p>Go-Live (Day 14): Our team takes full responsibility for 24/7 technical helpdesk operations.</p>
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
