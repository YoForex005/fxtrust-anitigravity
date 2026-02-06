import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './blog.module.css';
import { blogService } from '@/services/blogService';

export const metadata: Metadata = {
    title: "Forex Broker Resources & Industry Insights | FxTrusts",
    description: "In-depth guides, technology reviews, and market analysis for Forex brokerage professionals. Expert resources on CRM systems, MT5 integration, and regulatory compliance.",
    keywords: ["forex broker resources", "forex crm reviews", "broker technology guides", "mt5 white label"],
    openGraph: {
        title: "Forex Broker Resources & Industry Insights | FxTrusts",
        description: "In-depth guides, technology reviews, and market analysis for Forex brokerage professionals. Expert resources on CRM systems, MT5 integration, and regulatory compliance.",
        type: "website",
        url: "https://fxtrusts.com/resources/blog",
    },
    twitter: {
        card: "summary_large_image",
        title: "Forex Broker Resources & Industry Insights | FxTrusts",
        description: "In-depth guides, technology reviews, and market analysis for Forex brokerage professionals. Expert resources on CRM systems, MT5 integration, and regulatory compliance.",
    },
    alternates: {
        canonical: "https://fxtrusts.com/resources/blog",
    },
};

export const revalidate = 3600; // ISR: Revalidate every hour

export default async function BlogIndex() {
    // Fetch data from DB
    const { posts: articles } = await blogService.getPosts(1, 100);
    const featuredArticle = await blogService.getFeaturedPost();

    const categories = [
        { name: "All Resources", count: articles.length, active: true },
        // TODO: Fetch categories dynamically if needed
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
                            {featuredArticle && (
                                <div className={styles.featuredWrapper}>
                                    <span className={styles.featuredLabel}>Featured Resource</span>
                                    <Link href={`/resources/blog/${featuredArticle.seoSlug}`} className={styles.featuredCard}>
                                        <div className={styles.featuredContent}>
                                            <div className={styles.featuredMeta}>
                                                <span className={styles.featuredCategory}>Featured</span>
                                                <span className={styles.featuredDivider}>|</span>
                                                <span>5 min read</span>
                                            </div>
                                            <h2 className={styles.featuredTitle}>{featuredArticle.title}</h2>
                                            {/* Strip HTML tags for description preview if content is HTML */}
                                            <p className={styles.featuredDescription}>
                                                {featuredArticle.content.replace(/<[^>]*>?/gm, '').substring(0, 150)}...
                                            </p>
                                            <div className={styles.featuredFooter}>
                                                <div className={styles.featuredAuthor}>
                                                    <span className={styles.authorAvatar}>FT</span>
                                                    <div>
                                                        <span className={styles.authorName}>{featuredArticle.author}</span>
                                                        <span className={styles.authorDate}>
                                                            Last updated: {new Date(featuredArticle.updatedAt).toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className={styles.readMore}>
                                                    Read Full Guide →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )}

                            {/* Article List */}
                            <div className={styles.articlesList}>
                                <div className={styles.articlesHeader}>
                                    <h3>All Resources</h3>
                                    <span className={styles.articlesCount}>{articles.length} articles</span>
                                </div>
                                {articles.length > 0 ? (
                                    articles.map((article, index) => (
                                        <Link key={index} href={`/resources/blog/${article.seoSlug}`} className={styles.articleCard}>
                                            <div className={styles.articleContent}>
                                                <div className={styles.articleMeta}>
                                                    <span className={styles.articleCategory}>
                                                        {/* @ts-ignore */}
                                                        {article.categories?.[0]?.category?.name || 'Guide'}
                                                    </span>
                                                    <span className={styles.articleDivider}>|</span>
                                                    <span>5 min read</span>
                                                    <span className={styles.articleDivider}>|</span>
                                                    <span>{Number(article.views)} views</span>
                                                </div>
                                                <h4 className={styles.articleTitle}>{article.title}</h4>
                                                <p className={styles.articleDescription}>
                                                    {article.content.replace(/<[^>]*>?/gm, '').substring(0, 120)}...
                                                </p>
                                                <div className={styles.articleFooter}>
                                                    <div className={styles.articleTopics}>
                                                        {article.tags.split(',').slice(0, 3).map((tag, i) => (
                                                            <span key={i} className={styles.topicTag}>{tag.trim()}</span>
                                                        ))}
                                                    </div>
                                                    <span className={styles.articleDate}>
                                                        Updated: {new Date(article.updatedAt).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles.articleArrow}>→</div>
                                        </Link>
                                    ))
                                ) : (
                                    <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                                        <p>No articles found. Add some to the database!</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter and Footer (Same as before) */}
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
