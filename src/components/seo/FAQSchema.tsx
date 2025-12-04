import Script from 'next/script';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    faqs: FAQItem[];
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <Script
            id={`faq-schema-${faqs.length}`} // Unique ID based on count to avoid conflicts if multiple
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
    );
}
