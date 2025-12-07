import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Our Manifesto | Why We Built FxTrusts',
    description: 'We were brokers. We hated our tech providers. So we built the tech provider we wished we had. The FxTrusts origin story and philosophy.',
    keywords: ['fxtrusts manifesto', 'forex technology philosophy', 'broker technology story', 'fintech startup'],
    openGraph: {
        title: 'Our Manifesto | The FxTrusts Origin Story',
        description: 'We were brokers. We hated our tech providers. So we built better technology.',
        type: 'website',
        url: 'https://fxtrusts.com/company/manifesto',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/company/manifesto',
    },
};

export default function ManifestoPage() {
    return (
        <main>
            <Header />
            <InnerPageHeader
                badge="The Origin Story"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>}
                title="The Manifesto.<br/>Why We Built This Thing."
                subtitle="We were brokers. We hated our tech providers. So we built the tech provider we wished we had. It's not altruism, it's just better business."
            />

            <section style={{ padding: '80px 0', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ padding: '0 2rem' }}>
                    <div style={{ borderLeft: '4px solid #4353F2', paddingLeft: '2rem', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem', color: '#111827' }}>We Were You.</h2>
                        <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: '#4B5563', fontStyle: 'italic' }}>
                            "Ten years ago, we started a brokerage. We had big dreams. We wanted to disrupt the market. Then we met the tech providers."
                        </p>
                    </div>

                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4B5563', marginBottom: '1.5rem' }}>
                        <strong>"It'll be ready in 2 weeks"</strong> turned into 6 months.
                        <br />
                        <strong>"24/7 Support"</strong> meant a chatbot that didn't understand English.
                        <br />
                        <strong>"Enterprise Grade"</strong> meant a shared VPS that crashed every NFP.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4B5563', marginBottom: '1.5rem' }}>
                        We lost money. We lost clients. We lost sleep. Not because we were bad brokers, but because our infrastructure was built on lies.
                    </p>

                    <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: '3rem 0 2rem', color: '#111827' }}>So We Quit.</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4B5563', marginBottom: '1.5rem' }}>
                        We sold the brokerage. We took the capital and hired the best engineers we could find. We spent 3 years building the platform we wished we had.
                    </p>

                    <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px', margin: '2rem 0' }}>
                        <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: '#111827', fontWeight: '600', textAlign: 'center' }}>
                            FxTrusts isn't just a software company. It's a revenge project.
                        </p>
                    </div>

                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4B5563', marginBottom: '1.5rem' }}>
                        We are proving that you can offer institutional-grade tech without the institutional-grade arrogance. We are proving that "fast support" can actually mean fast support.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4B5563', marginBottom: '1.5rem' }}>
                        If you're tired of being treated like a number, welcome home.
                    </p>

                    {/* Our Philosophy Section (New Content) */}
                    <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2rem', color: '#111827' }}>Our Philosophy</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>No Salesmen</h3>
                                <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                    We don't have a sales team. We have engineers who can talk. If you ask a technical question, you get a technical answer, not a brochure.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>No Lock-In</h3>
                                <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                    We don't force you to sign 3-year contracts. If our tech sucks, you should be able to leave. We bet on the fact that you won't want to.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>No Hidden Fees</h3>
                                <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                    The price on the website is the price you pay. No "setup fees", no "integration fees", no "breathing fees".
                                </p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Code Wins</h3>
                                <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                    Marketing is temporary. Code is forever. We spend 80% of our budget on R&D, not Google Ads.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Future of FX Section (New Content) */}
                    <div style={{ background: '#111827', padding: '3rem', borderRadius: '24px', color: 'white', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem' }}>The Future of FX</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#9CA3AF', marginBottom: '1.5rem' }}>
                            The old model of "Call Center Brokerage" is dying. Regulators are cracking down. Clients are getting smarter. The future belongs to:
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <span style={{ color: '#10B981', fontWeight: 'bold' }}>✓</span>
                                <span><strong>Prop Firms:</strong> Skill-based trading, not gambling.</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <span style={{ color: '#10B981', fontWeight: 'bold' }}>✓</span>
                                <span><strong>Crypto-Native:</strong> Instant deposits, global reach.</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <span style={{ color: '#10B981', fontWeight: 'bold' }}>✓</span>
                                <span><strong>AI-Driven:</strong> Automated risk management and support.</span>
                            </li>
                        </ul>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#9CA3AF', marginTop: '1.5rem' }}>
                            We built FxTrusts to power this future. If you're still running a call center in 2024, we can't help you.
                        </p>
                    </div>

                    {/* The Architects Section (New Content) */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2rem', color: '#111827' }}>The Architects</h2>
                        <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                            <div style={{ minWidth: '200px', textAlign: 'center' }}>
                                <div style={{ width: '100px', height: '100px', background: '#E5E7EB', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>👨‍💻</div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>The CTO</h3>
                                <p style={{ fontSize: '0.9rem', color: '#6B7280' }}>Ex-HFT Engineer. Obsessed with latency.</p>
                            </div>
                            <div style={{ minWidth: '200px', textAlign: 'center' }}>
                                <div style={{ width: '100px', height: '100px', background: '#E5E7EB', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🕵️‍♂️</div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>The Risk Head</h3>
                                <p style={{ fontSize: '0.9rem', color: '#6B7280' }}>Former Bank Dealer. Knows every trick.</p>
                            </div>
                            <div style={{ minWidth: '200px', textAlign: 'center' }}>
                                <div style={{ width: '100px', height: '100px', background: '#E5E7EB', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🎨</div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>The Product Lead</h3>
                                <p style={{ fontSize: '0.9rem', color: '#6B7280' }}>Hates bad UI. Will fire you for using Comic Sans.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '4rem', borderTop: '1px solid #E5E7EB', paddingTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '60px', height: '60px', background: '#111827', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>FX</div>
                        <div>
                            <p style={{ fontFamily: 'cursive', fontSize: '1.5rem', color: '#111827', margin: 0 }}>The FxTrusts Team</p>
                            <p style={{ color: '#6B7280', fontSize: '0.9rem', margin: 0 }}>London, UK</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
