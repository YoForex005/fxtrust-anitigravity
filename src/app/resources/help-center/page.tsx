import PageHeader from '../../../components/PageHeader';

export default function HelpCenterPage() {
    return (
        <main>
            <PageHeader
                title="Help Center"
                subtitle="Guides, tutorials, and answers to your questions."
                badge="Resources"
            />
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div className="prose">
                    <h2>How can we help?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
                        <div style={{ padding: '1.5rem', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                            <h3 style={{ marginTop: 0 }}>Getting Started</h3>
                            <p>Learn the basics of setting up your brokerage.</p>
                        </div>
                        <div style={{ padding: '1.5rem', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                            <h3 style={{ marginTop: 0 }}>Account Management</h3>
                            <p>How to verify clients and manage funds.</p>
                        </div>
                        <div style={{ padding: '1.5rem', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                            <h3 style={{ marginTop: 0 }}>Trading Platform</h3>
                            <p>Guides for MT5 and our Web Trader.</p>
                        </div>
                        <div style={{ padding: '1.5rem', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                            <h3 style={{ marginTop: 0 }}>Technical Support</h3>
                            <p>Troubleshooting connection issues.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
