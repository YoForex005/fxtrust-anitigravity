import { Metadata } from 'next';
import PageHeader from '../../../components/PageHeader';

export const metadata: Metadata = {
    title: 'About FxTrusts | Our Story & Mission',
    description: 'FxTrusts is a team of fintech veterans, quantitative developers, and infrastructure engineers. We democratize access to institutional-grade trading infrastructure.',
    keywords: ['about fxtrusts', 'forex technology company', 'fintech team', 'trading infrastructure', 'B2B broker technology'],
    openGraph: {
        title: 'About FxTrusts | B2B Broker Technology',
        description: 'Meet the team democratizing institutional-grade trading infrastructure for brokerages worldwide.',
        type: 'website',
        url: 'https://fxtrusts.com/company/about',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About FxTrusts | B2B Broker Technology',
        description: 'Meet the team democratizing institutional-grade trading infrastructure for brokerages worldwide.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/company/about',
    },
};

export default function AboutPage() {
    return (
        <>
            <h1 className="sr-only">About Page</h1>
            {/* Original Component */}
            
        <main>
            <PageHeader
                title="About FXTrusts"
                subtitle="Empowering the next generation of financial institutions."
                badge="Company"
            />
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div className="prose">
                    <h2>Our Mission</h2>
                    <p>FXTrusts was founded with a single mission: to democratize access to institutional-grade trading infrastructure. We believe that launching a brokerage shouldn't require millions in capital or years of development.</p>

                    <h2>Who We Are</h2>
                    <p>We are a team of fintech veterans, quantitative developers, and infrastructure engineers. We've built systems for some of the world's largest banks and hedge funds, and now we're bringing that same technology to you.</p>

                    <h2>Why Choose Us</h2>
                    <ul>
                        <li><strong>Technology First:</strong> We are engineers, not salespeople. Our product speaks for itself.</li>
                        <li><strong>Transparent Pricing:</strong> No hidden fees. Pay for what you use.</li>
                        <li><strong>Global Reach:</strong> Servers in London, New York, Tokyo, and Singapore.</li>
                    </ul>
                </div>
            </div>
        </main>
    
        </>
    );
}
