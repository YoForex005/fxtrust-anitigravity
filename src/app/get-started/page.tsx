import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OnboardingWizard from '@/components/onboarding/OnboardingWizard';

export const metadata: Metadata = {
    title: 'Get Started | Launch Your Brokerage | FxTrusts',
    description: 'Start your forex brokerage journey with FxTrusts. Complete our onboarding wizard to get your MT5 white label, CRM, and liquidity setup.',
    keywords: ['get started', 'start forex broker', 'brokerage onboarding', 'forex broker setup', 'launch brokerage'],
    openGraph: {
        title: 'Get Started | Launch Your Brokerage',
        description: 'Begin your brokerage journey with FxTrusts. Complete setup in weeks.',
        type: 'website',
        url: 'https://fxtrusts.com/get-started',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Get Started | Launch Your Brokerage',
        description: 'Begin your brokerage journey with FxTrusts. Complete setup in weeks.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/get-started',
    },
};

export default function GetStartedPage() {
    return (
        <>
            
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Get Started | Launch Your Brokerage | FxTrusts","description":"Start your forex brokerage journey with FxTrusts. Complete our onboarding wizard to get your MT5 white label, CRM, and liquidity setup.","url":"https://fxtrusts.com/get-started"}) }}
      />
      <h1 className="sr-only">Get Started Page</h1>
            {/* Original Component */}
            
        <main style={{
            background: '#FFFFFF',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            color: '#111827',
            backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)',
            backgroundSize: '24px 24px'
        }}>
            <Header />

            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '120px',
                paddingBottom: '80px',
                paddingLeft: '2rem',
                paddingRight: '2rem'
            }}>
                <OnboardingWizard />
            </div>

            <Footer />
        </main>
    
        </>
    );
}
