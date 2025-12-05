import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OnboardingWizard from '@/components/onboarding/OnboardingWizard';

export const metadata = {
    title: 'Get Started | FxTrusts',
    description: 'Start your brokerage journey with FxTrusts.',
};

export default function GetStartedPage() {
    return (
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
    );
}
