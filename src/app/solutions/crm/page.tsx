import PageHeader from '../../../components/PageHeader';

export default function CRMPage() {
    return (
        <main>
            <PageHeader
                title="Institutional CRM"
                subtitle="The backbone of your brokerage operations."
                badge="Solutions"
            />
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div className="prose">
                    <h2>Built for High-Volume Brokers</h2>
                    <p>Our CRM isn't just a database; it's an automation engine. Designed specifically for FX and Crypto brokerages, it handles the entire client lifecycle from lead acquisition to retention.</p>

                    <h3>Key Features</h3>
                    <ul>
                        <li><strong>Automated KYC:</strong> Integrated with SumSub and ShuftiPro for instant verification.</li>
                        <li><strong>Multi-Tier IB System:</strong> Automatic commission calculations and payouts.</li>
                        <li><strong>Sales Dialer:</strong> VoIP integration for one-click calling and recording.</li>
                        <li><strong>Marketing Automation:</strong> Email drip campaigns triggered by user behavior.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
