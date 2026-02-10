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
                    <ul>
                        <li><strong>Uninterrupted Service:</strong> Global markets never sleep; our 24/7 presence ensures your traders get help at 2:00 AM as easily as 2:00 PM.</li>
                        <li><strong>Deep Industry Knowledge:</strong> Our agents aren&apos;t generic; they are trained specifically in Forex, Crypto, and CFD market mechanics.</li>
                        <li><strong>Cost Efficiency:</strong> Eliminate the costs of recruiting, training, and housing a 24/7 internal helpdesk across multiple time zones.</li>
                        <li><strong>Reduced Executive Stress:</strong> Rest easy knowing that technical emergencies are being handled by professionals who know your stack.</li>
                        <li><strong>Increased Trader Lifetime Value (LTV):</strong> Fast, accurate support builds massive trust, leading to higher retention and larger deposits.</li>
                        <li><strong>Security & Compliance:</strong> All support interactions are recorded and handled according to strict data privacy and security protocols.</li>
                        <li><strong>Seamless Scalability:</strong> Whether you have 500 or 50,000 active traders, our team scales to meet your ticket volume instantly.</li>
                    </ul>
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
                    <ul>
                        <li><strong>London, UK:</strong> Strategic Management Hub</li>
                        <li><strong>Dubai, UAE:</strong> MENA Region Support Center</li>
                        <li><strong>Singapore:</strong> APAC Support Center</li>
                        <li><strong>Cloud-Based:</strong> Redundant global helpdesk nodes</li>
                    </ul>

                    <h3>Infrastructure Specifications</h3>
                    <ul>
                        <li><strong>High-Availability CRM:</strong> Redundant helpdesk servers to ensure we never miss a client incoming message.</li>
                        <li><strong>Encrypted Voice/Data:</strong> All support calls and chats are protected by enterprise-grade TLS 1.3 encryption.</li>
                        <li><strong>Direct Manager Access:</strong> Secure, VPN-tunnel access to your MT4/MT5 Manager terminals (view-only or limited admin).</li>
                        <li><strong>Automated Failover:</strong> If one support hub faces an outage, traffic is instantly rerouted to our other global centers.</li>
                        <li><strong>Compliant Data Handling:</strong> Full adherence to GDPR and regional data residency requirements for PII.</li>
                        <li><strong>SLA Guarantee:</strong> We offer a strictly enforced 99.9% uptime for our helpdesk accessibility. Our agents utilize dual-ISP connections and backup power to ensure they are online during global market volatility.</li>
                    </ul>
                </div>

                <div id="features">
                    <h2>Platform Features</h2>
                    <p>Comprehensive helpdesk capabilities designed to manage the specific technical needs of a modern brokerage.</p>

                    <h3>L1 Support Features (General)</h3>
                    <ul>
                        <li>Platform installation and login assistance.</li>
                        <li>Basic MT4/MT5/cTrader navigation.</li>
                        <li>Password resets and 2FA troubleshooting.</li>
                        <li>&quot;How-to&quot; guidance for deposits and withdrawals.</li>
                        <li>KYC document status updates and guidance.</li>
                    </ul>

                    <h3>L2 Support Features (Technical)</h3>
                    <ul>
                        <li>Trade execution forensics (investigating slippage/execution time).</li>
                        <li>Bridge and Liquidity Provider (LP) connectivity checks.</li>
                        <li>API key configuration for algorithmic traders.</li>
                        <li>EA (Expert Advisor) error log analysis.</li>
                        <li>Mobile app sync and data feed troubleshooting.</li>
                    </ul>

                    <h3>Reporting & Analytics</h3>
                    <ul>
                        <li>Weekly &quot;Issue Trend&quot; reports to identify recurring platform bugs.</li>
                        <li>Client Satisfaction (CSAT) and Net Promoter Score (NPS) tracking.</li>
                        <li>Agent performance metrics (Average Handling Time, Resolution Rate).</li>
                    </ul>
                </div>

                <div id="api">
                    <h2>API & Integration</h2>
                    <p>Our support team integrates deeply with your technology stack to provide context-aware assistance.</p>

                    <h3>Manager / Admin API</h3>
                    <ul>
                        <li>Secure integration with your Broker CRM to view real-time trader status.</li>
                        <li>Automated ticket creation from &quot;Platform Error&quot; webhooks.</li>
                        <li>Ability to pull historical trade logs via API for L2 investigations.</li>
                    </ul>

                    <h3>Gateway & Connectivity API</h3>
                    <ul>
                        <li><strong>MetaTrader Manager:</strong> Secure access for account monitoring and group management.</li>
                        <li><strong>Client Portal Integration:</strong> Deep linking between helpdesk tickets and the trader&apos;s dashboard.</li>
                        <li><strong>Slack/Teams Integration:</strong> Real-time escalation channel between our team and your senior management.</li>
                    </ul>

                    <h3>Web API / SDK</h3>
                    <p>
                        We provide a &quot;Support Widget&quot; SDK that can be embedded in your website, mobile app, or trading terminal. This widget allows traders to start a live chat, browse the knowledge base, or submit a ticket, with their account data automatically passed to our agents to speed up the resolution process.
                    </p>
                </div>

                <div id="pricing">
                    <h2>Pricing & Setup</h2>
                    <p>Our pricing is based on a &quot;Pay-as-you-go&quot; model per verification check, ensuring you only pay for the volume you actually process.</p>

                    <h3>What’s Included</h3>
                    <ul>
                        <li>24/7/365 Coverage across L1 and L2 tiers.</li>
                        <li>Access to our branded multi-channel helpdesk software.</li>
                        <li>Multi-language support for 10 core languages.</li>
                        <li>Weekly operational and technical performance reports.</li>
                        <li>Continuous training and knowledge base maintenance.</li>
                        <li>Dedicated Account Manager for your firm.</li>
                    </ul>

                    <h3>Optional Add-Ons</h3>
                    <ul>
                        <li>Outbound &quot;Welcome Calls&quot; for new registrations.</li>
                        <li>Dedicated agents (Exclusive to your brand).</li>
                        <li>Technical &quot;Live Video&quot; support sessions.</li>
                        <li>Specialized support for Proprietary Trading Firms (Rules/Breach assistance).</li>
                    </ul>

                    <h3>Setup Timeline</h3>
                    <ol>
                        <li><strong>Workflow Configuration (Days 2-3):</strong> Defining your &quot;Pass/Fail&quot; rules and required levels.</li>
                        <li><strong>Infrastructure Link (Days 3-5):</strong> Setting up API access and helpdesk instances.</li>
                        <li><strong>Team Training (Days 5-10):</strong> Training our agents on your brand’s specific &quot;Playbook.&quot;</li>
                        <li><strong>Shadowing Phase (Days 10-14):</strong> Working alongside your team to verify accuracy.</li>
                        <li><strong>Go-Live (Day 14):</strong> Our team takes full responsibility for 24/7 technical helpdesk operations.</li>
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
