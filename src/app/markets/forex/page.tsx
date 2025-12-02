import PageHeader from '../../../components/PageHeader';

export default function ForexPage() {
    return (
        <main>
            <PageHeader
                title="Forex Trading"
                subtitle="Trade 80+ currency pairs with institutional spreads."
                badge="Markets"
            />
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div className="prose">
                    <h2>Major, Minor, and Exotic Pairs</h2>
                    <p>Access the global foreign exchange market with deep liquidity and ultra-low latency execution. Whether you are trading EURUSD or exotic crosses, we provide the infrastructure you need.</p>

                    <h3>Trading Conditions</h3>
                    <ul>
                        <li><strong>Spreads:</strong> From 0.0 pips on Majors.</li>
                        <li><strong>Leverage:</strong> Up to 1:500 available.</li>
                        <li><strong>Execution:</strong> Market Execution with no requotes.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
