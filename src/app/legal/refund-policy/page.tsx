import PageHeader from '../../../components/PageHeader';

export default function RefundPolicyPage() {
    return (
        <main>
            <PageHeader
                title="Refund Policy"
                subtitle="Our policies regarding payments and refunds."
                badge="Legal"
            />
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div className="prose">
                    <h2>1. Subscription Services</h2>
                    <p>Our services are billed on a subscription basis. You may cancel your subscription at any time. Refunds for partial months are not typically provided, but exceptions may be made on a case-by-case basis.</p>

                    <h2>2. Setup Fees</h2>
                    <p>One-time setup fees for white-label solutions and server provisioning are non-refundable once the provisioning process has begun.</p>

                    <h2>3. Service Level Agreement (SLA) Credits</h2>
                    <p>If we fail to meet our uptime guarantees as outlined in your Service Level Agreement, you may be eligible for service credits which will be applied to your next billing cycle.</p>

                    <h2>4. Dispute Resolution</h2>
                    <p>If you believe you have been billed incorrectly, please contact our support team at support@fxtrust.com within 30 days of the invoice date.</p>
                </div>
            </div>
        </main>
    );
}
