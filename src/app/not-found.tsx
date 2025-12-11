import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerPageHeader from '@/components/InnerPageHeader';

export default function NotFound() {
    return (
        <main>
            <Header />
            <InnerPageHeader
                badge="404 Error"
                title="Page Not Found"
                subtitle="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
            />

            <section style={{ padding: '4rem 0', textAlign: 'center', minHeight: '40vh' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-outfit)' }}>
                        Lost in the Spread?
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#94A3B8', marginBottom: '3rem', lineHeight: '1.7' }}>
                        It looks like we've hit a liquidity gap. The requested URL doesn't match any of our active quote streams.
                        Let's get you back to trading.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link
                            href="/"
                            style={{
                                backgroundColor: '#D4AF37',
                                color: '#000',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '0.5rem',
                                fontWeight: '600',
                                textDecoration: 'none',
                                transition: 'all 0.2s',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            Return Home
                        </Link>
                        <Link
                            href="/company/contact"
                            style={{
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#fff',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '0.5rem',
                                fontWeight: '600',
                                textDecoration: 'none',
                                transition: 'all 0.2s'
                            }}
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
