import PageHeader from '../../../components/PageHeader';

export default function IndicesPage() {
    return (
        <main>
            <PageHeader
                title="Global Indices"
                subtitle="Trade the world's leading stock market indices."
                badge="Markets"
            />
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div className="prose">
                    <h2>Access Global Economies</h2>
                    <p>Speculate on the performance of entire economies with CFDs on major indices like the S&P 500, NASDAQ 100, DAX 40, and FTSE 100.</p>

                    <h3>Key Benefits</h3>
                    <ul>
                        <li><strong>No Commission:</strong> Trade indices with zero commission.</li>
                        <li><strong>Long & Short:</strong> Profit from both rising and falling markets.</li>
                        <li><strong>Dividends:</strong> Receive dividend adjustments on long positions.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
