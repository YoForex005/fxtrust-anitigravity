/**
 * SpeakableSchema Component
 * =========================
 * 
 * Adds Speakable structured data for voice search optimization (AEO).
 * Helps voice assistants like Alexa, Siri, Google Assistant find
 * and speak the most relevant content from your pages.
 * 
 * @see https://schema.org/SpeakableSpecification
 * @see https://developers.google.com/search/docs/appearance/structured-data/speakable
 */

import JsonLd from '../JsonLd';

interface SpeakableSchemaProps {
    /** Page URL */
    url: string;
    /** Page headline/title */
    headline: string;
    /** CSS selectors for speakable content */
    cssSelectors?: string[];
    /** XPath selectors for speakable content */
    xpathSelectors?: string[];
    /** Date when content was published */
    datePublished?: string;
    /** Date when content was last modified */
    dateModified?: string;
    /** Author name */
    author?: string;
    /** Publisher name */
    publisher?: string;
    /** Main image URL */
    image?: string;
}

export function SpeakableSchema({
    url,
    headline,
    cssSelectors = ['.article-summary', '.main-content h1', '.main-content h2', '.faq-answer'],
    xpathSelectors,
    datePublished,
    dateModified,
    author = 'FXTrusts',
    publisher = 'FXTrusts',
    image,
}: SpeakableSchemaProps) {
    const speakableSpec: Record<string, unknown> = {
        '@type': 'SpeakableSpecification',
    };

    if (cssSelectors && cssSelectors.length > 0) {
        speakableSpec.cssSelector = cssSelectors;
    }

    if (xpathSelectors && xpathSelectors.length > 0) {
        speakableSpec.xpath = xpathSelectors;
    }

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': url,
        url: url,
        name: headline,
        headline: headline,
        speakable: speakableSpec,
        ...(datePublished && { datePublished }),
        ...(dateModified && { dateModified }),
        author: {
            '@type': 'Organization',
            name: author,
        },
        publisher: {
            '@type': 'Organization',
            name: publisher,
            logo: {
                '@type': 'ImageObject',
                url: 'https://fxtrusts.com/logo.png',
            },
        },
        ...(image && {
            image: {
                '@type': 'ImageObject',
                url: image,
            },
        }),
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
    };

    return <JsonLd data={schema} />;
}

/**
 * Usage Example:
 * 
 * <SpeakableSchema
 *   url="https://fxtrusts.com/resources/blog/best-forex-crm-2025"
 *   headline="Best Forex CRM Providers in 2025"
 *   cssSelectors={['.article-intro', '.key-points', '.conclusion']}
 *   datePublished="2024-12-01"
 *   dateModified="2024-12-12"
 * />
 */
