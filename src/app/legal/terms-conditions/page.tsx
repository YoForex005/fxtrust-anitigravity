import PageHeader from '../../../components/PageHeader';

export default function TermsConditionsPage() {
    return (
        <main>
            <PageHeader
                title="Terms of Service"
                subtitle="The rules and regulations for using our platform."
                badge="Legal"
            />
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div className="prose">
                    <h2>1. Agreement to Terms</h2>
                    <p>By accessing our website and using our services, you agree to be bound by these Terms of Service. If you do not agree to abide by the terms of this Agreement, you are not authorized to use or access the website and its services.</p>

                    <h2>2. Services Provided</h2>
                    <p>FXTrusts provides institutional trading infrastructure, CRM solutions, and liquidity connectivity. We are a technology provider, not a financial broker. We do not hold client funds or execute trades directly.</p>

                    <h2>3. Intellectual Property</h2>
                    <p>The Service and its original content, features and functionality are and will remain the exclusive property of FXTrusts and its licensors.</p>

                    <h2>4. Limitation of Liability</h2>
                    <p>In no event shall FXTrusts, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>

                    <h2>5. Governing Law</h2>
                    <p>These Terms shall be governed and construed in accordance with the laws of Saint Lucia, without regard to its conflict of law provisions.</p>
                </div>
            </div>
        </main>
    );
}
