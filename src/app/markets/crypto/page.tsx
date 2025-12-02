import PageHeader from '../../../components/PageHeader';

export default function CryptoPage() {
    return (
        <main>
            <PageHeader
                title="Crypto Trading"
                subtitle="24/7 access to the world's most volatile assets."
                badge="Markets"
            />
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div className="prose">
                    <h2>Institutional Crypto Liquidity</h2>
                    <p>Trade Bitcoin, Ethereum, Solana, and 50+ other digital assets. We aggregate liquidity from major exchanges to provide reliable pricing and execution even during high volatility.</p>

                    <h3>Why Trade Crypto with Us?</h3>
                    <ul>
                        <li><strong>24/7 Trading:</strong> Markets never sleep.</li>
                        <li><strong>Deep Liquidity:</strong> Execute large block orders without slippage.</li>
                        <li><strong>Security:</strong> Cold storage for digital assets.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
