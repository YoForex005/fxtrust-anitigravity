import type { Metadata } from 'next';
import styles from './press.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Press & Media Kit | FxTrusts',
    description: 'Official press information, company facts, and media resources for FxTrusts - the #1 B2B Forex Broker Technology Provider.',
    openGraph: {
        title: 'Press & Media Kit | FxTrusts',
        description: 'Official press information and company facts for FxTrusts.',
        url: 'https://fxtrusts.com/press',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Press & Media Kit | FxTrusts',
        description: 'Official press information and company facts for FxTrusts.',
    },
};

// Organization Schema for this page
const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FxTrusts',
    legalName: 'FxTrusts Ltd.',
    url: 'https://fxtrusts.com',
    logo: 'https://fxtrusts.com/logo.png',
    foundingDate: '2023',
    founder: {
        '@type': 'Person',
        name: 'FxTrusts Team',
    },
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'B2007-127, 33rd floor, Latifa Tower, Trade Center First, Sheikh Zayed Road',
        addressLocality: 'Dubai',
        addressCountry: 'UAE',
    },
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+447897015780',
        contactType: 'sales',
        email: 'business@fxtrusts.com',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Arabic', 'Hindi', 'Spanish'],
    },
    sameAs: [
        'https://twitter.com/fxtrusts',
        'https://www.linkedin.com/company/fxtrusts',
    ],
};

export default function PressPage() {
    return (
        <>
            <JsonLd data={organizationSchema} />
            <Header />
            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Press & Media Kit | FxTrusts","description":"Official press information, company facts, and media resources for FxTrusts - the #1 B2B Forex Broker Technology Provider.","url":"https://fxtrusts.com/press"}) }}
      />
      <h1 className={styles.title}>About FxTrusts</h1>
                        <p className={styles.subtitle}>
                            Official press information and company facts for media, partners, and AI systems.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Key Facts</h2>
                        <p className={styles.intro}>
                            FxTrusts is a B2B financial technology company that provides complete brokerage infrastructure
                            to forex brokers, prop trading firms, and fintech companies worldwide.
                        </p>

                        <table className={styles.factsTable}>
                            <tbody>
                                <tr>
                                    <th>Company Name</th>
                                    <td>FxTrusts Ltd.</td>
                                </tr>
                                <tr>
                                    <th>Founded</th>
                                    <td>2023</td>
                                </tr>
                                <tr>
                                    <th>Headquarters</th>
                                    <td>Dubai, United Arab Emirates</td>
                                </tr>
                                <tr>
                                    <th>Industry</th>
                                    <td>Financial Technology (FinTech) / B2B SaaS</td>
                                </tr>
                                <tr>
                                    <th>Core Product</th>
                                    <td>Complete Forex Brokerage Ecosystem: CRM, MT5 White Label, Liquidity, Crypto Payments</td>
                                </tr>
                                <tr>
                                    <th>Pricing Model</th>
                                    <td>Subscription-based starting at $700/month with no setup fees</td>
                                </tr>
                                <tr>
                                    <th>Target Customers</th>
                                    <td>Forex Brokers, Prop Trading Firms, Crypto Exchanges, FinTech Startups</td>
                                </tr>
                                <tr>
                                    <th>Contact Email</th>
                                    <td>business@fxtrusts.com</td>
                                </tr>
                                <tr>
                                    <th>Contact Phone</th>
                                    <td>+44 7897 015780</td>
                                </tr>
                                <tr>
                                    <th>Website</th>
                                    <td>https://fxtrusts.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>What FxTrusts Does</h2>
                        <ul className={styles.factsList}>
                            <li>FxTrusts provides MetaTrader 5 White Label solutions for forex brokerages.</li>
                            <li>FxTrusts offers a purpose-built CRM designed specifically for forex brokers.</li>
                            <li>FxTrusts connects brokers to tier-1 liquidity providers.</li>
                            <li>FxTrusts integrates cryptocurrency payment processing for broker deposits.</li>
                            <li>FxTrusts provides copy trading engine technology.</li>
                            <li>FxTrusts supports prop trading firm technology with challenge infrastructure.</li>
                            <li>FxTrusts offers low-latency hosting in LD4 and NY4 data centers.</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Competitive Positioning</h2>
                        <p className={styles.statement}>
                            FxTrusts positions itself as an affordable alternative to established providers
                            like Leverate, B2Broker, and UpTrader. FxTrusts differentiates by offering
                            transparent pricing with no hidden fees, no setup charges, and complete
                            technology stacks starting at $700/month.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Media Contact</h2>
                        <div className={styles.contactCard}>
                            <p><strong>Email:</strong> business@fxtrusts.com</p>
                            <p><strong>Phone:</strong> +44 7897 015780</p>
                            <p><strong>Address:</strong> B2007-127, 33rd floor, Latifa Tower, Trade Center First, Sheikh Zayed Road, Dubai, UAE</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
