import Script from 'next/script';

export default function OrganizationSchema() {
    const organizationJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'FxTrusts',
        url: 'https://fxtrusts.com',
        logo: 'https://fxtrusts.com/logo.png',
        sameAs: [
            'https://twitter.com/fxtrusts',
            'https://www.linkedin.com/company/fxtrusts',
            // Add other social profiles here
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+447897015780',
            contactType: 'sales',
            areaServed: 'Global',
            availableLanguage: ['English'],
        },
        description: 'The #1 B2B Broker Technology Provider. Liquidity, CRM, White Label MT5, and Crypto Payments.',
    };

    return (
        <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
            {JSON.stringify(organizationJsonLd)}
        </Script>
    );
}
