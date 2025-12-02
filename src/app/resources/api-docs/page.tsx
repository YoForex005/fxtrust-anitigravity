import PageHeader from '../../../components/PageHeader';

export default function ApiDocsPage() {
    return (
        <main>
            <PageHeader
                title="API Documentation"
                subtitle="Integrate your systems with our powerful REST and FIX APIs."
                badge="Resources"
            />
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div className="prose">
                    <h2>Developer First</h2>
                    <p>Our APIs are built by developers, for developers. Access market data, execute trades, and manage accounts programmatically.</p>

                    <h3>Available APIs</h3>
                    <ul>
                        <li><strong>REST API:</strong> For account management and reporting.</li>
                        <li><strong>FIX API 4.4:</strong> For high-frequency trading and direct market access.</li>
                        <li><strong>WebSocket API:</strong> For real-time market data streaming.</li>
                    </ul>

                    <div style={{ background: '#1E293B', color: 'white', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem', fontFamily: 'monospace' }}>
                        <p style={{ color: '#94A3B8', marginBottom: '0.5rem' }}>// Example Request</p>
                        <p>GET /api/v1/market/quote?symbol=EURUSD</p>
                        <p style={{ marginTop: '1rem', color: '#94A3B8' }}>// Response</p>
                        <p>{`{ "symbol": "EURUSD", "bid": 1.0845, "ask": 1.0846 }`}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
