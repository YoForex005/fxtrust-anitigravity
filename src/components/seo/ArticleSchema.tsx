import Script from 'next/script';

interface ArticleSchemaProps {
    headline: string;
    image?: string;
    datePublished: string;
    dateModified?: string;
    authorName?: string;
    description: string;
    url: string;
    wordCount?: number;
    articleSection?: string;
    keywords?: string[];
}

export default function ArticleSchema({
    headline,
    image = 'https://fxtrusts.com/og-image.png',
    datePublished,
    dateModified,
    authorName = 'FxTrusts Team',
    description,
    url,
    wordCount,
    articleSection,
    keywords = [],
}: ArticleSchemaProps) {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: headline,
        image: [image],
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        author: {
            '@type': 'Organization',
            name: authorName,
            url: 'https://fxtrusts.com',
        },
        publisher: {
            '@type': 'Organization',
            name: 'FxTrusts',
            logo: {
                '@type': 'ImageObject',
                url: 'https://fxtrusts.com/fxtrusts_logo_v2.png',
                width: 200,
                height: 60,
            },
        },
        description: description,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
        ...(wordCount && { wordCount }),
        ...(articleSection && { articleSection }),
        ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
    };

    return (
        <Script
            id={`article-schema-${headline.replace(/\s+/g, '-').toLowerCase()}`}
            type="application/ld+json"
            strategy="afterInteractive"
        >
            {JSON.stringify(articleJsonLd)}
        </Script>
    );
}

