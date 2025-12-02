import PageHeader from '../../../components/PageHeader';

export default function MT5Page() {
    return (
        <main>
            <PageHeader
                title="MetaTrader 5 White Label"
                subtitle="Launch your broker on the world's most popular platform."
                badge="Solutions"
            />
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div className="prose">
                    <h2>The Gold Standard</h2>
                    <p>MetaTrader 5 is the multi-asset platform of choice for modern traders. We provide a fully managed White Label solution that gets you to market in weeks, not months.</p>

                    <h3>What's Included</h3>
                    <ul>
                        <li><strong>Branded Terminal:</strong> Your logo and color scheme on Desktop, Web, and Mobile.</li>
                        <li><strong>Manager API:</strong> Full access to the Manager API for custom plugin development.</li>
                        <li><strong>Hosting:</strong> Low-latency hosting in LD4 (London) or NY4 (New York).</li>
                        <li><strong>24/7 Support:</strong> Technical support for server maintenance and updates.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
