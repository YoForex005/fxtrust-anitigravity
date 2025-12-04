'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function DynamicBreadcrumbs() {
    const pathname = usePathname();

    // Don't render on 404 or other special pages if needed
    if (!pathname) return null;

    const segments = pathname.split('/').filter((segment) => segment !== '');

    const breadcrumbItems = [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.fxtrusts.com',
        },
        ...segments.map((segment, index) => {
            const url = `https://www.fxtrusts.com/${segments.slice(0, index + 1).join('/')}`;
            // Capitalize and format segment name (e.g., "forex-broker" -> "Forex Broker")
            const name = segment
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            return {
                '@type': 'ListItem',
                position: index + 2,
                name: name,
                item: url,
            };
        }),
    ];

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems,
    };

    return (
        <Script
            id="dynamic-breadcrumbs"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
    );
}
