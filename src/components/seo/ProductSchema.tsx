import Script from 'next/script';

interface ProductSchemaProps {
    name: string;
    description: string;
    image?: string;
    applicationCategory?: string; // e.g., "FinanceApplication", "BusinessApplication"
    operatingSystem?: string; // e.g., "Web, iOS, Android"
    price?: string;
    currency?: string;
    ratingValue?: number;
    reviewCount?: number;
}

export default function ProductSchema({
    name,
    description,
    image = 'https://fxtrusts.com/logo.png',
    applicationCategory = 'FinanceApplication',
    operatingSystem = 'Web',
    price = '700', // Default to your base price
    currency = 'USD',
    ratingValue = 4.8, // Placeholder or real rating
    reviewCount = 120, // Placeholder or real count
}: ProductSchemaProps) {
    const productJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: name,
        description: description,
        image: image,
        applicationCategory: applicationCategory,
        operatingSystem: operatingSystem,
        offers: {
            '@type': 'Offer',
            price: price,
            priceCurrency: currency,
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: ratingValue,
            reviewCount: reviewCount,
        },
    };

    return (
        <Script
            id={`product-schema-${name.replace(/\s+/g, '-').toLowerCase()}`}
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
    );
}
