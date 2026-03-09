import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './blog.module.css';
import { blogService } from '@/services/blogService';
import BlogCard from '@/components/BlogCard';

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

import Link from 'next/link';

export default async function BlogIndex(props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const searchParams = await props.searchParams;
    const category = typeof searchParams.category === 'string' ? searchParams.category : 'All Posts';

    // Fetch data from DB
    const { posts: articles } = await blogService.getPosts(1, 100, category);

    // Combined list including featured if we want to treat them all same in grid
    // For now, let's just use the fetched articles.

    const categories = [
        "All Posts",
        "Technical Guides",
        "Market Analysis",
        "Case Studies",
        "News"
    ];

    return (
        <main className={styles.main}>
            <Header />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Forex Broker Resources & Industry Insights | FxTrusts","description":"In-depth guides, technology reviews, and market analysis for Forex brokerage professionals. Expert resources on CRM systems, MT5 integration, and regulatory compliance.","url":"https://fxtrusts.com/resources/blog"}) }}
      />
      <h1 className={styles.heroTitle}>
                        Resources & Insights
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Expert analysis, technical guides, and industry news for forex brokers.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.container}>

                    {/* Filter Bar */}
                    <div className={styles.filterBar}>
                        {categories.map((cat, i) => {
                            const isActive = category === cat || (cat === 'All Posts' && !category);
                            return (
                                <Link
                                    key={i}
                                    href={cat === 'All Posts' ? '/resources/blog' : `/resources/blog?category=${encodeURIComponent(cat)}`}
                                    className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
                                >
                                    {cat}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Blog Grid */}
                    <div className={styles.grid}>
                        {articles.length > 0 ? (
                            articles.map((article, i) => (
                                <BlogCard key={Number(article.id)} post={article} priority={i === 0} />
                            ))
                        ) : (
                            <div style={{ gridColumn: 'span 3', textAlign: 'center', color: '#94A3B8', padding: '4rem' }}>
                                <p>No articles found.</p>
                            </div>
                        )}
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
