import Script from 'next/script';

interface ArticleSchemaProps {
    headline: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    authorName?: string;
    description: string;
}

export default function ArticleSchema({
    headline,
    image,
    datePublished,
    dateModified,
    authorName = 'FxTrusts Team',
    description,
}: ArticleSchemaProps) {
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: headline,
        image: [image],
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        author: {
            '@type': 'Organization', // Or 'Person' if it's a specific person
            name: authorName,
        },
        publisher: {
            '@type': 'Organization',
            name: 'FxTrusts',
            logo: {
                '@type': 'ImageObject',
                url: 'https://fxtrusts.com/fxtrusts_logo_v2.png',
            },
        },
        description: description,
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
