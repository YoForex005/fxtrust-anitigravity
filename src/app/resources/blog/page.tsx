import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './blog.module.css';

export const metadata: Metadata = {
    title: "Forex Broker Resources & Industry Insights | FxTrusts",
    description: "In-depth guides, technology reviews, and market analysis for Forex brokerage professionals. Expert resources on CRM systems, MT5 integration, and regulatory compliance.",
    keywords: ["forex broker resources", "forex crm reviews", "broker technology guides", "mt5 white label"],
};

export default function BlogIndex() {
    const featuredArticle = {
        title: "Investigative Report: Why Your Forex Broker CRM Costs More Than a Small Island",
        description: "An 'official' investigation into why competitors charge $5,000 setup fees while FxTrusts charges $0. Warning: Contains satire and shocking financial common sense.",
        href: "/resources/blog/forex-broker-crm-pricing-exposed",
        category: "Market Analysis (Satire)",
        readTime: "5 min read",
        date: "December 2024",
        lastUpdated: "December 4, 2024",
        author: "Chief Financial Investigator (Intern)"
    };

    const articles = [
        {
            title: "Investigative Report: Why Your Forex Broker CRM Costs More Than a Small Island",
            description: "An 'official' investigation into why competitors charge $5,000 setup fees while FxTrusts charges $0. Warning: Contains satire and shocking financial common sense.",
            href: "/resources/blog/forex-broker-crm-pricing-exposed",
            category: "Market Analysis (Satire)",
            readTime: "5 min read",
            date: "December 2024",
            lastUpdated: "December 4, 2024",
            topics: ["Forex CRM", "Pricing", "Satire"],
            stats: { views: "1,200", citations: "5" }
        },
        {
            title: "The Complete Guide to Forex CRM Systems in 2025",
            description: "A comprehensive analysis of CRM platforms for forex brokerages. This guide covers MT5 Manager API integration, lead management workflows, compliance automation, and evaluation criteria for selecting the right solution.",
            href: "/resources/guides/forex-crm-complete-guide",
            category: "Comprehensive Guide",
            readTime: "18 min read",
            date: "December 2024",
            lastUpdated: "December 2, 2024",
            topics: ["Forex CRM", "MT5 Integration", "Provider Selection"],
            stats: { views: "18,200", citations: "45" }
        },
        {
            title: "Top 10 Forex CRM Providers: 2025 Industry Analysis",
            description: "Independent evaluation of leading CRM platforms including feature comparison, pricing analysis, integration capabilities, and performance benchmarks. Based on direct testing and interviews with 200+ brokerage operators.",
            href: "/resources/blog/best-forex-crm-providers-2025",
            category: "Industry Report",
            readTime: "12 min read",
            date: "November 2024",
            lastUpdated: "November 28, 2024",
            topics: ["CRM Comparison", "Vendor Analysis", "Pricing"],
            stats: { views: "12,400", citations: "34" }
        },
        {
            title: "MT4 vs MT5 CRM Integration: Technical Architecture Guide",
            description: "Detailed technical comparison of Manager API implementations for MetaTrader 4 and MetaTrader 5. Covers WebAPI capabilities, data synchronization patterns, authentication protocols, and integration best practices.",
            href: "/resources/blog/mt4-vs-mt5-crm",
            category: "Technical Guide",
            readTime: "15 min read",
            date: "November 2024",
            lastUpdated: "November 20, 2024",
            topics: ["MT5 Integration", "API Architecture", "Development"],
            stats: { views: "8,200", citations: "21" }
        },
        {
            title: "B2Broker vs FxTrusts: Platform Comparison",
            description: "Objective comparison of B2Broker and FxTrusts technology stacks. Detailed analysis of infrastructure, pricing models, support responsiveness, and implementation timelines based on documented client experiences.",
            href: "/resources/comparisons/b2broker-alternative",
            category: "Competitor Analysis",
            readTime: "10 min read",
            date: "October 2024",
            lastUpdated: "October 15, 2024",
            topics: ["B2Broker", "Platform Comparison", "Pricing"],
            stats: { views: "6,100", citations: "12" }
        },
        {
            title: "Leverate Alternative: Migration and Comparison Guide",
            description: "Comprehensive evaluation of Leverate's technology platform versus modern alternatives. Includes migration planning considerations, feature gap analysis, and total cost of ownership calculations.",
            href: "/resources/comparisons/leverate-alternative",
            category: "Competitor Analysis",
            readTime: "9 min read",
            date: "October 2024",
            lastUpdated: "October 8, 2024",
            topics: ["Leverate", "Migration Planning", "TCO Analysis"],
            stats: { views: "4,800", citations: "8" }
        },
        {
            title: "How to Start a Forex Brokerage: Complete Startup Guide",
            description: "Step-by-step guide covering regulatory licensing, technology infrastructure, liquidity relationships, capital requirements, and operational planning. Based on experience launching 142 brokerages across 67 jurisdictions.",
            href: "/resources/guides/how-to-start-forex-broker",
            category: "Business Guide",
            readTime: "22 min read",
            date: "September 2024",
            lastUpdated: "November 30, 2024",
            topics: ["Brokerage Startup", "Licensing", "Regulatory"],
            stats: { views: "15,700", citations: "67" }
        }
    ];

    const categories = [
        { name: "All Resources", count: 7, active: true },
        { name: "Technical Guides", count: 2, active: false },
        { name: "Industry Reports", count: 2, active: false },
        { name: "Competitor Analysis", count: 2, active: false },
        { name: "Business Guides", count: 1, active: false }
    ];

    const platformStats = [
        { label: "Active Brokerages", value: "142", trend: "+12 this quarter" },
        { label: "Daily Trading Volume", value: "$2.85B", trend: "24h rolling" },
        { label: "Countries Served", value: "67", trend: "Multi-jurisdiction" },
        { label: "Avg. Execution", value: "8.4ms", trend: "LD4/NY4 colocated" }
    ];

    return (
        <main className={styles.main}>
            <Header />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroBreadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Resources</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Broker Technology<br />Resources & Insights
                    </h1>
                    <p className={styles.heroSubtitle}>
                        In-depth technical guides, market analysis, and vendor evaluations
                        for forex brokerage technology decision-makers.
                    </p>
                    <div className={styles.heroStats}>
                        {platformStats.map((stat, i) => (
                            <div key={i} className={styles.heroStat}>
                                <span className={styles.heroStatValue}>{stat.value}</span>
                                <span className={styles.heroStatLabel}>{stat.label}</span>
                                <span className={styles.heroStatTrend}>{stat.trend}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.contentGrid}>

                        {/* Sidebar */}
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarSection}>
                                <h3 className={styles.sidebarTitle}>Categories</h3>
                                <ul className={styles.categoryList}>
                                    {categories.map((cat, i) => (
                                        <li key={i} className={cat.active ? styles.categoryActive : ''}>
                                            <span>{cat.name}</span>
                                            <span className={styles.categoryCount}>{cat.count}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.sidebarSection}>
                                <h3 className={styles.sidebarTitle}>Popular Topics</h3>
                                <div className={styles.topicTags}>
                                    <span>Forex CRM</span>
                                    <span>MT5 Integration</span>
                                    <span>Licensing</span>
                                    <span>B2Broker</span>
                                    <span>Leverate</span>
                                    <span>White Label</span>
                                </div>
                            </div>
                            <div className={styles.sidebarCta}>
                                <h4>Need Expert Guidance?</h4>
                                <p>Our solutions team can assess your current infrastructure and provide tailored recommendations.</p>
                                <Link href="/company/contact" className={styles.sidebarBtn}>
                                    Schedule Consultation
                                </Link>
                            </div>
                        </aside>

                        {/* Main Articles */}
                        <div className={styles.articlesMain}>

                            {/* Featured Article */}
                            <div className={styles.featuredWrapper}>
                                <span className={styles.featuredLabel}>Featured Resource</span>
                                <Link href={featuredArticle.href} className={styles.featuredCard}>
                                    <div className={styles.featuredContent}>
                                        <div className={styles.featuredMeta}>
                                            <span className={styles.featuredCategory}>{featuredArticle.category}</span>
                                            <span className={styles.featuredDivider}>|</span>
                                            <span>{featuredArticle.readTime}</span>
                                        </div>
                                        <h2 className={styles.featuredTitle}>{featuredArticle.title}</h2>
                                        <p className={styles.featuredDescription}>{featuredArticle.description}</p>
                                        <div className={styles.featuredFooter}>
                                            <div className={styles.featuredAuthor}>
                                                <span className={styles.authorAvatar}>FT</span>
                                                <div>
                                                    <span className={styles.authorName}>{featuredArticle.author}</span>
                                                    <span className={styles.authorDate}>Last updated: {featuredArticle.lastUpdated}</span>
                                                </div>
                                            </div>
                                            <span className={styles.readMore}>
                                                Read Full Guide →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Article List */}
                            <div className={styles.articlesList}>
                                <div className={styles.articlesHeader}>
                                    <h3>All Resources</h3>
                                    <span className={styles.articlesCount}>{articles.length} articles</span>
                                </div>
                                {articles.map((article, index) => (
                                    <Link key={index} href={article.href} className={styles.articleCard}>
                                        <div className={styles.articleContent}>
                                            <div className={styles.articleMeta}>
                                                <span className={styles.articleCategory}>{article.category}</span>
                                                <span className={styles.articleDivider}>|</span>
                                                <span>{article.readTime}</span>
                                                <span className={styles.articleDivider}>|</span>
                                                <span>{article.stats.views} views</span>
                                            </div>
                                            <h4 className={styles.articleTitle}>{article.title}</h4>
                                            <p className={styles.articleDescription}>{article.description}</p>
                                            <div className={styles.articleFooter}>
                                                <div className={styles.articleTopics}>
                                                    {article.topics.map((topic, i) => (
                                                        <span key={i} className={styles.topicTag}>{topic}</span>
                                                    ))}
                                                </div>
                                                <span className={styles.articleDate}>Updated: {article.lastUpdated}</span>
                                            </div>
                                        </div>
                                        <div className={styles.articleArrow}>→</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Methodology */}
            <section className={styles.methodologySection}>
                <div className={styles.container}>
                    <div className={styles.methodologyHeader}>
                        <h2>Research Methodology</h2>
                        <p>Our evaluation process and content standards</p>
                    </div>
                    <div className={styles.methodologyGrid}>
                        <div className={styles.methodologyCard}>
                            <span className={styles.methodologyNumber}>01</span>
                            <h4>Direct Platform Testing</h4>
                            <p>All platforms reviewed are tested in production environments with real trading data and integration scenarios. We document actual performance metrics, not vendor claims.</p>
                        </div>
                        <div className={styles.methodologyCard}>
                            <span className={styles.methodologyNumber}>02</span>
                            <h4>Operator Interviews</h4>
                            <p>Each major guide includes insights from interviews with brokerage operators currently using the platforms discussed. Direct experience informs our analysis.</p>
                        </div>
                        <div className={styles.methodologyCard}>
                            <span className={styles.methodologyNumber}>03</span>
                            <h4>Quarterly Updates</h4>
                            <p>All content is reviewed and updated quarterly. Platform updates, pricing changes, and new features are incorporated to maintain accuracy.</p>
                        </div>
                        <div className={styles.methodologyCard}>
                            <span className={styles.methodologyNumber}>04</span>
                            <h4>Transparent Scoring</h4>
                            <p>Evaluation criteria and scoring rubrics are disclosed in each analysis. Readers can apply the same framework to their own assessments.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className={styles.newsletterSection}>
                <div className={styles.container}>
                    <div className={styles.newsletterCard}>
                        <div className={styles.newsletterContent}>
                            <h3>Industry Intelligence Report</h3>
                            <p>Monthly analysis of brokerage technology trends, regulatory updates, and market developments. Distributed to 3,400+ industry professionals.</p>
                        </div>
                        <div className={styles.newsletterForm}>
                            <input type="email" placeholder="Enter your work email" className={styles.newsletterInput} />
                            <button className={styles.newsletterBtn}>Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
