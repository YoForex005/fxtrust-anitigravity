import PageHeader from '../../components/PageHeader';

export default function PricingPage() {
    return (
        <main>
            <PageHeader
                title="Simple, Transparent Pricing"
                subtitle="Start small and scale as you grow."
                badge="Pricing"
            />
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    {/* Starter Plan */}
                    <div style={{ border: '1px solid #E5E7EB', borderRadius: '12px', padding: '2rem', background: 'white' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Starter</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#111827' }}>$700<span style={{ fontSize: '1rem', fontWeight: '500', color: '#6B7280' }}>/mo</span></div>
                        <p style={{ color: '#6B7280', marginBottom: '2rem' }}>Perfect for new brokerages just getting started.</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><span>✅</span> Branded CRM</li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><span>✅</span> 1,000 Active Clients</li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><span>✅</span> Standard Support</li>
                        </ul>
                        <button style={{ width: '100%', padding: '1rem', background: '#111827', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>Get Started</button>
                    </div>

                    {/* Growth Plan */}
                    <div style={{ border: '2px solid #3B82F6', borderRadius: '12px', padding: '2rem', background: 'white', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#3B82F6', color: 'white', padding: '0.25rem 1rem', borderRadius: '100px', fontSize: '0.875rem', fontWeight: '600' }}>MOST POPULAR</div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Growth</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#111827' }}>$1,500<span style={{ fontSize: '1rem', fontWeight: '500', color: '#6B7280' }}>/mo</span></div>
                        <p style={{ color: '#6B7280', marginBottom: '2rem' }}>For growing brokers with active volume.</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><span>✅</span> Everything in Starter</li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><span>✅</span> 5,000 Active Clients</li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><span>✅</span> Priority Support</li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><span>✅</span> White Label App</li>
                        </ul>
                        <button style={{ width: '100%', padding: '1rem', background: '#3B82F6', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>Get Started</button>
                    </div>

                    {/* Enterprise Plan */}
                    <div style={{ border: '1px solid #E5E7EB', borderRadius: '12px', padding: '2rem', background: 'white' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Enterprise</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#111827' }}>Custom</div>
                        <p style={{ color: '#6B7280', marginBottom: '2rem' }}>Full infrastructure for established institutions.</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><span>✅</span> Unlimited Clients</li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><span>✅</span> Dedicated Server Cluster</li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><span>✅</span> 24/7 Dedicated Manager</li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}><span>✅</span> Custom Development</li>
                        </ul>
                        <button style={{ width: '100%', padding: '1rem', background: 'white', color: '#111827', border: '1px solid #E5E7EB', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>Contact Sales</button>
                    </div>

                </div>
            </div>
        </main>
    );
}
