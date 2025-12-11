/**
 * JsonLd - Reusable Server Component for Structured Data
 * 
 * Renders JSON-LD structured data for SEO and GEO (Generative Engine Optimization).
 * Compatible with Next.js 16 App Router Server Components.
 */

interface JsonLdProps {
    data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data, null, 0),
            }}
        />
    );
}
