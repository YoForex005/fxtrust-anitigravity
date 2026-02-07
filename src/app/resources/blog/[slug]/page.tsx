import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogService } from '@/services/blogService';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../blog.module.css'; // Reusing blog styles or create new ones
import articleStyles from '@/styles/article.module.css'; // Assuming you want specific article styles

export const revalidate = 3600; // ISR: Revalidate every hour

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await blogService.getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.seoMeta[0]?.seoTitle || post.title,
        description: post.seoMeta[0]?.seoDescription || post.content.substring(0, 160),
        openGraph: {
            title: post.seoMeta[0]?.ogTitle || post.title,
            description: post.seoMeta[0]?.ogDescription || post.content.substring(0, 160),
            images: post.seoMeta[0]?.ogImage ? [post.seoMeta[0]?.ogImage] : [],
        },
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = await blogService.getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className={styles.main}>
            <Header />
            <article className={articleStyles.article}>
                <header className={articleStyles.articleHeader}>
                    <h1 className={articleStyles.articleTitle}>{post.title}</h1>
                    <div className={articleStyles.articleMeta}>
                        <span>By {post.author}</span>
                        <span> | </span>
                        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    </div>
                    {post.featuredImage && (
                        <div className={articleStyles.featuredImageWrapper}>
                            <img src={post.featuredImage} alt={post.title} className={articleStyles.featuredImage} />
                        </div>
                    )}
                </header>

                <div className={articleStyles.content} dangerouslySetInnerHTML={{ __html: post.content }} />

                <footer className={articleStyles.articleFooter}>
                    <div className={articleStyles.tags}>
                        {post.tags.split(',').map((tag, i) => (
                            <span key={i} className={articleStyles.tag}>{tag.trim()}</span>
                        ))}
                    </div>
                </footer>
            </article>
            <Footer />
        </main>
    );
}
