import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Contact Us | Sales & Support | FxTrusts',
    description: 'Get in touch with FxTrusts for sales inquiries, technical support, or partnership opportunities. We actually reply - email, Telegram, or phone.',
    keywords: ['contact fxtrusts', 'forex broker support', 'B2B support', 'sales inquiry', 'technical support'],
    openGraph: {
        title: 'Contact FxTrusts | We Actually Reply',
        description: 'Sales, support, and partnership inquiries. Real engineers, not chatbots.',
        type: 'website',
        url: 'https://fxtrusts.com/company/contact',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact FxTrusts | We Actually Reply',
        description: 'Sales, support, and partnership inquiries. Real engineers, not chatbots.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/company/contact',
    },
};

export default function ContactPage() {
    return (
        <main>
            <Header />
            <InnerPageHeader
                badge="We Actually Reply"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>}
                title="Contact Us.<br/>Sales, Support, & Therapy."
                subtitle="Whether you want to buy our software or just vent about your current provider, we're here. We actually answer emails."
            />

            <section style={{ padding: '80px 0', background: '#F8FAFC' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

                    {/* Contact Info Side */}
                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem', color: '#111827' }}>Get in Touch</h2>
                        <p style={{ color: '#6B7280', marginBottom: '3rem', fontSize: '1.1rem' }}>
                            We don't have a call center in a basement somewhere. You'll talk to a real engineer or a product manager.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ width: '50px', height: '50px', background: '#EFF6FF', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4353F2' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginBottom: '0.25rem' }}>Email Us</h3>
                                    <p style={{ color: '#6B7280', marginBottom: '0.25rem' }}>For general inquiries and sales.</p>
                                    <a href="mailto:business@fxtrusts.com" style={{ color: '#4353F2', fontWeight: '600' }}>business@fxtrusts.com</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ width: '50px', height: '50px', background: '#F0FDF4', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16A34A' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginBottom: '0.25rem' }}>Telegram</h3>
                                    <p style={{ color: '#6B7280', marginBottom: '0.25rem' }}>For faster, informal chat.</p>
                                    <a href="#" style={{ color: '#16A34A', fontWeight: '600' }}>@FxTrustsSupport</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ width: '50px', height: '50px', background: '#FEF2F2', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#DC2626' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginBottom: '0.25rem' }}>Emergency Line</h3>
                                    <p style={{ color: '#6B7280', marginBottom: '0.25rem' }}>Server down? Call us 24/7.</p>
                                    <span style={{ color: '#DC2626', fontWeight: '600' }}>+971 55 146 1476</span>
                                </div>
                            </div>
                        </div>

                        {/* Office Locations (New Content) */}
                        <div style={{ marginTop: '4rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem', color: '#111827' }}>Our Offices</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ fontWeight: '700', color: '#111827', marginBottom: '0.5rem' }}>London HQ</h4>
                                    <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>
                                        1 Canada Square<br />
                                        Canary Wharf, E14 5AB<br />
                                        United Kingdom
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: '700', color: '#111827', marginBottom: '0.5rem' }}>Dubai Tech Hub</h4>
                                    <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>
                                        Office 204, Building 3<br />
                                        Dubai Internet City<br />
                                        UAE
                                    </p>
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: '700', color: '#111827', marginBottom: '0.5rem' }}>Cyprus Sales</h4>
                                    <p style={{ color: '#6B7280', fontSize: '0.9rem' }}>
                                        Spyrou Kyprianou 50<br />
                                        Limassol 4040<br />
                                        Cyprus
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>Name</label>
                                    <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E5E7EB', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>Email</label>
                                    <input type="email" placeholder="john@brokerage.com" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E5E7EB', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>What's Broken?</label>
                                    <textarea placeholder="Tell us what your current provider is doing wrong..." rows={5} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E5E7EB', fontSize: '1rem', fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.2s' }}></textarea>
                                </div>
                                <button style={{
                                    background: '#111827',
                                    color: 'white',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    fontWeight: '600',
                                    fontSize: '1.1rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    marginTop: '1rem',
                                    transition: 'transform 0.2s'
                                }}>
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Support Tiers (New Content) */}
                        <div style={{ background: '#1E293B', padding: '2rem', borderRadius: '24px', color: 'white' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>Support Tiers</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #374151', paddingBottom: '0.5rem' }}>
                                    <span style={{ color: '#9CA3AF' }}>Standard</span>
                                    <span style={{ fontWeight: 'bold' }}>Email (24h Response)</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #374151', paddingBottom: '0.5rem' }}>
                                    <span style={{ color: '#9CA3AF' }}>Business</span>
                                    <span style={{ fontWeight: 'bold' }}>Live Chat (1h Response)</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: '#F59E0B', fontWeight: 'bold' }}>Enterprise</span>
                                    <span style={{ fontWeight: 'bold', color: '#F59E0B' }}>Dedicated Slack Channel (Instant)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
