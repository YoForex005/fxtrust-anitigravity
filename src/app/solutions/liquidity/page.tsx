import PageHeader from '../../../components/PageHeader';

export default function LiquidityPage() {
    return (
        <main>
            <PageHeader
                title="Deep Liquidity Pools"
                subtitle="Direct market access to Tier-1 banks and exchanges."
                badge="Solutions"
            />
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div className="prose">
                    <h2>Institutional Grade Execution</h2>
                    <p>Connect your brokerage to the world's deepest liquidity pools. We aggregate pricing from top-tier banks, non-bank liquidity providers, and ECNs to deliver tight spreads and ultra-low latency execution.</p>

                    <h3>Liquidity Specs</h3>
                    <ul>
                        <li><strong>Forex:</strong> 80+ pairs with spreads from 0.0 pips.</li>
                        <li><strong>Metals:</strong> Gold and Silver against USD, EUR, and AUD.</li>
                        <li><strong>Crypto:</strong> 24/7 liquidity for BTC, ETH, and 50+ altcoins.</li>
                        <li><strong>Indices & Commodities:</strong> CFDs on major global indices and energy assets.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
