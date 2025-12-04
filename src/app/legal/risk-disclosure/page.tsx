import PageHeader from '../../../components/PageHeader';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Risk Disclosure | FxTrusts',
    description: 'Important risk disclosure information for Forex and CFD trading.',
};

export default function RiskDisclosurePage() {
    return (
        <main>
            <PageHeader
                title="Risk Disclosure"
                subtitle="Important information about the risks of trading leveraged products."
                badge="Legal"
            />
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div className="prose">
                    <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
                        <strong style={{ color: '#991B1B' }}>⚠️ High Risk Warning</strong>
                        <p style={{ margin: '0.5rem 0 0', color: '#7F1D1D' }}>
                            Trading Forex and CFDs involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford to lose.
                        </p>
                    </div>

                    <h2>General Risk Warning</h2>
                    <p>
                        Contracts for Difference ('CFDs') are complex financial products that are traded on margin. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, CFDs may not be suitable for all investors because you may lose all your invested capital.
                    </p>

                    <h2>Key Risks</h2>
                    <h3>1. Leverage Risk</h3>
                    <p>
                        While leverage allows you to trade with more capital than you deposit, it also magnifies both profits and losses. A small market movement can have a proportionally larger impact on the funds you have deposited.
                    </p>

                    <h3>2. Market Risk</h3>
                    <p>
                        Financial markets can be volatile and unpredictable. Prices can move rapidly, especially during news events, and gaps in pricing can occur, particularly over weekends.
                    </p>

                    <h3>3. Liquidity Risk</h3>
                    <p>
                        In certain market conditions, it may be difficult or impossible to execute trades at desired prices. This is particularly relevant for exotic currency pairs and during low-liquidity periods.
                    </p>

                    <h3>4. Counterparty Risk</h3>
                    <p>
                        When you trade CFDs, you are trading with the broker as your counterparty. The broker's financial stability and regulatory status are important considerations.
                    </p>

                    <h3>5. Operational Risk</h3>
                    <p>
                        Technical failures, platform issues, or connectivity problems can affect your ability to manage positions in a timely manner.
                    </p>

                    <h2>Important Considerations</h2>
                    <ul>
                        <li>Only invest money you can afford to lose entirely</li>
                        <li>Educate yourself about the products before trading</li>
                        <li>Use risk management tools such as stop-loss orders</li>
                        <li>Start with a demo account to practice</li>
                        <li>Seek independent financial advice if unsure</li>
                        <li>Understand that past performance doesn't guarantee future results</li>
                    </ul>

                    <h2>Regulatory Information</h2>
                    <p>
                        FxTrusts provides technology solutions to licensed brokerages. We are not a broker ourselves and do not solicit or accept retail trading accounts. Our clients are regulated financial institutions that must comply with their respective jurisdictional requirements.
                    </p>

                    <p style={{ marginTop: '2rem', padding: '1rem', background: '#F1F5F9', borderRadius: '8px', fontSize: '0.9rem' }}>
                        <strong>Last Updated:</strong> December 2024<br />
                        For questions about this disclosure, contact: <a href="mailto:business@fxtrusts.com">business@fxtrusts.com</a>
                    </p>
                </div>
            </div>
        </main>
    );
}
