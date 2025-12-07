'use client';

interface PricingSchemaProps {
    products: {
        name: string;
        description: string;
        price: string;
        priceCurrency?: string;
        priceSpecification?: {
            price: string;
            priceCurrency: string;
            unitText?: string;
        };
        features?: string[];
    }[];
}

export default function PricingSchema({ products }: PricingSchemaProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'FxTrusts Pricing',
        description: 'Transparent, usage-based pricing for forex broker infrastructure. CRM, White Label, and Liquidity solutions.',
        url: 'https://fxtrusts.com/pricing',
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: products.map((product, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'Product',
                    name: product.name,
                    description: product.description,
                    brand: {
                        '@type': 'Brand',
                        name: 'FxTrusts',
                    },
                    offers: {
                        '@type': 'Offer',
                        price: product.price,
                        priceCurrency: product.priceCurrency || 'USD',
                        availability: 'https://schema.org/InStock',
                        priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
                        ...(product.priceSpecification && {
                            priceSpecification: {
                                '@type': 'UnitPriceSpecification',
                                price: product.priceSpecification.price,
                                priceCurrency: product.priceSpecification.priceCurrency,
                                unitText: product.priceSpecification.unitText || 'month',
                            },
                        }),
                    },
                    ...(product.features && {
                        additionalProperty: product.features.map(feature => ({
                            '@type': 'PropertyValue',
                            name: 'Feature',
                            value: feature,
                        })),
                    }),
                },
            })),
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
