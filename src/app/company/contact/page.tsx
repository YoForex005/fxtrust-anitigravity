import PageHeader from '../../../components/PageHeader';

export default function ContactPage() {
    return (
        <main>
            <PageHeader
                title="Contact Us"
                subtitle="Get in touch with our global team."
                badge="Company"
            />
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div className="prose">
                    <h2>Global Support</h2>
                    <p>Our team is available 24/7 to assist you with technical support, sales inquiries, and partnership opportunities.</p>

                    <div style={{ background: '#F9FAFB', padding: '2rem', borderRadius: '12px', marginTop: '2rem' }}>
                        <h3 style={{ marginTop: 0 }}>Email Us</h3>
                        <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#3B82F6' }}>
                            <a href="mailto:support@fxtrust.com">support@fxtrust.com</a>
                        </p>
                    </div>

                    <div style={{ background: '#F9FAFB', padding: '2rem', borderRadius: '12px', marginTop: '2rem' }}>
                        <h3 style={{ marginTop: 0 }}>Middle East Office</h3>
                        <p>
                            B2007-127, 33rd floor, Latifa Tower,<br />
                            Trade Center first, Seikh Zayad Road,<br />
                            Dubai-UAE
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
