import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SuccessStep from '@/components/onboarding/SuccessStep';

export const metadata: Metadata = {
    title: 'Thank You | FxTrusts',
    description: 'Your strategy session with FxTrusts has been scheduled.',
    openGraph: {
        title: 'Thank You | FxTrusts',
        description: 'Your strategy session has been confirmed. We\'ve sent a calendar invitation and architecture diagram to your email.',
        type: 'website',
        url: 'https://fxtrusts.com/thank-you',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/thank-you',
    },
};

export default function ThankYouPage() {
    return (
        <main
            style={{
                background: '#FFFFFF',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                color: '#111827',
                backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)',
                backgroundSize: '24px 24px',
            }}
        >
            <Header />

            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '120px',
                    paddingBottom: '80px',
                    paddingLeft: '2rem',
                    paddingRight: '2rem',
                }}
            >
                <SuccessStep />
            </div>

            <Footer />
        </main>
    );
}
