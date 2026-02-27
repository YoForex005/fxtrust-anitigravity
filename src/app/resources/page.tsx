import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerPageHeader from '@/components/InnerPageHeader';
import styles from './resources.module.css';

export const metadata: Metadata = {
    title: "Resources | Documentation, Guides & Support | FxTrusts",
    description: "Comprehensive forex broker resources including API documentation, platform guides, industry comparisons, blog articles, and 24/7 support. Everything you need to succeed.",
    keywords: [
        "forex broker resources",
        "trading platform documentation",
        "forex API docs",
        "broker guides",
        "MT5 tutorials",
        "forex CRM guide",
        "white label documentation",
        "broker support center",
        "forex industry insights",
        "trading technology resources",
        "broker comparison guides",
        "forex blog",
        "platform status page",
        "help center forex",
        "broker knowledge base"
    ],
    openGraph: {
        title: "FxTrusts Resources | Documentation, Guides & Support",
        description: "Everything you need to launch and scale your forex brokerage. Guides, documentation, comparisons, and expert insights.",
        type: 'website',
        url: 'https://fxtrusts.com/resources',
    },
    twitter: {
        card: 'summary_large_image',
        title: "FxTrusts Resources Hub",
        description: "Comprehensive forex broker resources: API docs, guides, comparisons, and support.",
    },
    alternates: {
        canonical: 'https://fxtrusts.com/resources',
    },
};

export default function ResourcesPage() {
    const resourceCategories = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                </svg>
            ),
            title: "API Documentation",
            description: "Complete REST API reference with authentication guides, endpoint documentation, and code examples in multiple languages.",
            link: "/resources/api-docs",
            badge: "100+ Endpoints",
            articles: [
                { title: "Getting Started with OAuth 2.0", link: "/resources/api-docs#authentication" },
                { title: "Client Management Endpoints", link: "/resources/api-docs#endpoints" },
                { title: "Webhook Integration Guide", link: "/resources/api-docs#webhooks" },
            ]
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
            ),
            title: "Guides & Tutorials",
            description: "Step-by-step guides for launching your brokerage, integrating platforms, and optimizing operations.",
            link: "/resources/guides/how-to-start-forex-broker",
            badge: "10+ Guides",
            articles: [
                { title: "How to Start a Forex Broker in 2025", link: "/resources/guides/how-to-start-forex-broker" },
                { title: "Complete Forex CRM Guide", link: "/resources/guides/forex-crm-complete-guide" },
                { title: "MT5 White Label Setup", link: "/platform/mt5" },
            ]
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
            ),
            title: "Platform Comparisons",
            description: "Honest, detailed comparisons between FxTrusts and other B2B trading technology providers.",
            link: "/resources/comparisons/match-trader-alternative",
            badge: "6 Comparisons",
            articles: [
                { title: "FxTrusts vs Match-Trader", link: "/resources/comparisons/match-trader-alternative" },
                { title: "FxTrusts vs B2Broker", link: "/resources/comparisons/b2broker-alternative" },
                { title: "FxTrusts vs Leverate", link: "/resources/comparisons/leverate-alternative" },
                { title: "FxTrusts vs Gold-I", link: "/resources/comparisons/gold-i-alternative" },
                { title: "FxTrusts vs OneTrader", link: "/resources/comparisons/onetrader-alternative" },
                { title: "FxTrusts vs CurrencyCloud", link: "/resources/comparisons/currencycloud-alternative" },
            ]
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
            ),
            title: "Blog & Insights",
            description: "Industry analysis, product updates, and brutally honest takes on the forex technology landscape.",
            link: "/resources/blog",
            badge: "Weekly Updates",
            articles: [
                { title: "Best Forex CRM Providers 2025", link: "/resources/blog/best-forex-crm-providers-2025" },
                { title: "Forex Broker CRM Pricing Exposed", link: "/resources/blog/forex-broker-crm-pricing-exposed" },
                { title: "Why We Refuse to Charge Setup Fees", link: "/resources/blog/why-we-refuse-to-charge-setup-fees" },
            ]
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
            ),
            title: "Help Center",
            description: "FAQ, troubleshooting guides, and support resources to help you get the most from our platform.",
            link: "/resources/help-center",
            badge: "24/7 Support",
            articles: [
                { title: "Getting Started Guide", link: "/resources/help-center" },
                { title: "Common Integration Issues", link: "/resources/help-center" },
                { title: "Contact Support", link: "/company/contact" },
            ]
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            ),
            title: "System Status",
            description: "Real-time platform status, incident history, and scheduled maintenance notifications.",
            link: "/resources/status",
            badge: "99.99% Uptime",
            articles: [
                { title: "Current System Status", link: "/resources/status" },
                { title: "Incident History", link: "/resources/status#incidents" },
                { title: "Subscribe to Alerts", link: "/resources/status#alerts" },
            ]
        },
    ];

    return (
        <>
            <h1 className="sr-only">Resources Page</h1>
            {/* Original Component */}
            
        <main>
            <Header />
            <InnerPageHeader
                badge="KNOWLEDGE HUB"
                title="Resources & Documentation"
                subtitle="Everything you need to launch, operate, and scale your forex brokerage. From API documentation to industry insights—no fluff, just actionable content."
            />

            {/* Resource Grid */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.resourceGrid}>
                        {resourceCategories.map((category, index) => (
                            <div key={index} className={styles.resourceCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconWrapper}>
                                        {category.icon}
                                    </div>
                                    <span className={styles.badge}>{category.badge}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{category.title}</h3>
                                <p className={styles.cardDescription}>{category.description}</p>
                                <ul className={styles.articleList}>
                                    {category.articles.map((article, idx) => (
                                        <li key={idx}>
                                            <Link href={article.link} className={styles.articleLink}>
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <polyline points="9 18 15 12 9 6" />
                                                </svg>
                                                {article.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <Link href={category.link} className={styles.viewAll}>
                                    View All
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>BY THE NUMBERS</span>
                        <h2>Resources That Actually Help</h2>
                        <p>We believe documentation should be useful, not just impressive-looking PDFs nobody reads.</p>
                    </div>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statNum}>100+</div>
                            <h3>API Endpoints</h3>
                            <p>Fully documented with code examples</p>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNum}>50+</div>
                            <h3>Integration Guides</h3>
                            <p>Step-by-step with screenshots</p>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNum}>24/7</div>
                            <h3>Support Available</h3>
                            <p>Real humans, not chatbots</p>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNum}>&lt;15min</div>
                            <h3>Response Time</h3>
                            <p>Average first response</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>FEATURED CONTENT</span>
                        <h2>Most Popular Resources</h2>
                        <p>The guides brokers actually read (and re-read).</p>
                    </div>
                    <div className={styles.featuredGrid}>
                        <Link href="/resources/guides/how-to-start-forex-broker" className={styles.featuredCard}>
                            <div className={styles.featuredIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                </svg>
                            </div>
                            <div className={styles.featuredContent}>
                                <span className={styles.featuredBadge}>GUIDE</span>
                                <h3>How to Start a Forex Broker in 2025</h3>
                                <p>The complete, no-BS guide covering licensing, technology, liquidity, and everything in between.</p>
                                <span className={styles.featuredMeta}>25 min read • 45,000+ views</span>
                            </div>
                        </Link>
                        <Link href="/resources/blog/forex-broker-crm-pricing-exposed" className={styles.featuredCard}>
                            <div className={styles.featuredIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="16" x2="12" y2="12" />
                                    <line x1="12" y1="8" x2="12.01" y2="8" />
                                </svg>
                            </div>
                            <div className={styles.featuredContent}>
                                <span className={styles.featuredBadge}>EXPOSÉ</span>
                                <h3>Forex CRM Pricing Exposed</h3>
                                <p>The hidden fees, gotchas, and negotiation tactics you need to know before signing anything.</p>
                                <span className={styles.featuredMeta}>18 min read • 32,000+ views</span>
                            </div>
                        </Link>
                        <Link href="/resources/comparisons/b2broker-alternative" className={styles.featuredCard}>
                            <div className={styles.featuredIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <line x1="18" y1="20" x2="18" y2="10" />
                                    <line x1="12" y1="20" x2="12" y2="4" />
                                    <line x1="6" y1="20" x2="6" y2="14" />
                                </svg>
                            </div>
                            <div className={styles.featuredContent}>
                                <span className={styles.featuredBadge}>COMPARISON</span>
                                <h3>FxTrusts vs B2Broker</h3>
                                <p>A detailed comparison covering pricing, technology, support, and the factors that actually matter.</p>
                                <span className={styles.featuredMeta}>15 min read • 28,000+ views</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Can't Find What You're Looking For?</h2>
                        <p>
                            Our documentation is extensive, but we know it can't cover everything.
                            Reach out directly and a real human will help you within minutes—not days.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/company/contact" className={styles.primaryCta}>
                                Contact Support
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>
                            <Link href="/get-started" className={styles.secondaryCta}>
                                Schedule a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    
        </>
    );
}
