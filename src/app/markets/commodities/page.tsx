import PageHeader from '../../../components/PageHeader';

export default function CommoditiesPage() {
    return (
        <main>
            <PageHeader
                title="Commodities"
                subtitle="Trade Gold, Silver, Oil, and more."
                badge="Markets"
            />
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div className="prose">
                    <h2>Hard Assets, Liquid Markets</h2>
                    <p>Diversify your portfolio with hard assets. We offer spot and futures contracts on precious metals, energies, and soft commodities.</p>

                    <h3>Available Assets</h3>
                    <ul>
                        <li><strong>Metals:</strong> Gold (XAUUSD), Silver (XAGUSD), Platinum, Palladium.</li>
                        <li><strong>Energy:</strong> Brent Crude, WTI Oil, Natural Gas.</li>
                        <li><strong>Softs:</strong> Coffee, Sugar, Cotton.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
