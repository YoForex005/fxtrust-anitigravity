import Link from 'next/link';
import Image from 'next/image';
import styles from './BlogCard.module.css';
import { Blog } from '@prisma/client';

// Extend Blog type to include category if needed, or assume it's passed separately
interface BlogCardProps {
    post: Blog & {
        categories?: { category: { name: string } }[];
    };
    priority?: boolean;
}

export default function BlogCard({ post, priority = false }: BlogCardProps) {
    const categoryName = post.categories?.[0]?.category?.name || 'General';
    // Fallback image if featuredImage is missing or empty
    const imageUrl = post.featuredImage || '/images/blog-placeholder.jpg';

    return (
        <Link href={`/resources/blog/${post.seoSlug}`} className={styles.card}>
            <div className={styles.imageWrapper}>
                {/* Use optimization when possible, but for now simple img or Next Image with unoptimized if domain not configured */}
                <Image
                    src={imageUrl}
                    alt={post.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={priority}
                />
                <div className={styles.bookmark}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
            </div>
            <div className={styles.content}>
                <span className={styles.badge}>{categoryName}</span>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>
                    {post.content.replace(/<[^>]*>?/gm, '').substring(0, 120)}...
                </p>
                <div className={styles.footer}>
                    <span className={styles.author}>{post.author}</span>
                    <span className={styles.date}>
                        {new Date(post.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                    </span>
                </div>
            </div>
        </Link>
    );
}
