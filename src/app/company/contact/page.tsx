import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import styles from './Contact.module.css';

export const metadata: Metadata = {
    title: 'Contact Us | Sales & Support | FxTrusts',
    description: 'Get in touch with FxTrusts for sales inquiries, technical support, or partnership opportunities. We actually reply - email, Telegram, or phone.',
    keywords: ['contact fxtrusts', 'forex broker support', 'B2B support', 'sales inquiry', 'technical support'],
    openGraph: {
        title: 'Contact FxTrusts | We Actually Reply',
        description: 'Sales, support, and partnership inquiries. Real engineers, not chatbots.',
        type: 'website',
        url: 'https://fxtrusts.com/company/contact',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact FxTrusts | We Actually Reply',
        description: 'Sales, support, and partnership inquiries. Real engineers, not chatbots.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/company/contact',
    },
};

export default function ContactPage() {
    return (
        <>
            
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Contact Us | Sales & Support | FxTrusts","description":"Get in touch with FxTrusts for sales inquiries, technical support, or partnership opportunities. We actually reply - email, Telegram, or phone.","url":"https://fxtrusts.com/company/contact"}) }}
      />
      <h1 className="sr-only">Contact Page</h1>
            {/* Original Component */}
            
        <main>
            <Header />
            <InnerPageHeader
                badge="We Actually Reply"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>}
                title="Contact Us.<br/>Sales, Support, & Therapy."
                subtitle="Whether you want to buy our software or just vent about your current provider, we're here. We actually answer emails."
            />

            <section className={styles.contactSection}>
                <div className={styles.container}>

                    {/* Contact Info Side - Wrapped for ordering */}
                    <div className={styles.contactInfoWrapper}>
                        <h2 className={styles.getInTouchTitle}>Get in Touch</h2>
                        <p className={styles.getInTouchText}>
                            We don't have a call center in a basement somewhere. You'll talk to a real engineer or a product manager.
                        </p>

                        <div className={styles.contactInfoList}>
                            <div className={styles.contactInfoItem}>
                                <div className={`${styles.iconWrapper} ${styles.emailIcon}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </div>
                                <div>
                                    <h3 className={styles.itemTitle}>Email Us</h3>
                                    <p className={styles.itemText}>For general inquiries and sales.</p>
                                    <a  className={`${styles.itemLink} ${styles.emailLink}`}>business@fxtrusts.com</a>
                                </div>
                            </div>

                            <div className={styles.contactInfoItem}>
                                <div className={`${styles.iconWrapper} ${styles.telegramIcon}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                </div>
                                <div>
                                    <h3 className={styles.itemTitle}>Telegram</h3>
                                    <p className={styles.itemText}>For faster, informal chat.</p>
                                    <a href="https://t.me/FxTrustsSupport" target="_blank" rel="noopener noreferrer" className={`${styles.itemLink} ${styles.socialLink}`}>@FxTrustsSupport</a>
                                </div>
                            </div>

                            <div className={styles.contactInfoItem}>
                                <div className={`${styles.iconWrapper} ${styles.whatsappIcon}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div>
                                    <h3 className={styles.itemTitle}>WhatsApp Support</h3>
                                    <p className={styles.itemText}>Chat or Call us directly.</p>
                                    <a href="https://wa.me/447897015780" target="_blank" rel="noopener noreferrer" className={`${styles.itemLink} ${styles.socialLink}`}>+44 7897 015780 (Call+Whatsapp)</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Offices Section - moved out of wrapper to be direct child for ordering */}
                    <div className={styles.officesSection}>
                        <h3 className={styles.officesTitle}>Our Offices</h3>
                        <div className={styles.officesGrid}>
                            <div className={styles.officeItem}>
                                <h4>London HQ</h4>
                                <p>
                                    1 Canada Square<br />
                                    Canary Wharf, E14 5AB<br />
                                    United Kingdom
                                </p>
                            </div>
                            <div className={styles.officeItem}>
                                <h4>Dubai Tech Hub</h4>
                                <p>
                                    Office 204, Building 3<br />
                                    Dubai Internet City<br />
                                    UAE
                                </p>
                            </div>
                            <div className={styles.officeItem}>
                                <h4>Cyprus Sales</h4>
                                <p>
                                    Spyrou Kyprianou 50<br />
                                    Limassol 4040<br />
                                    Cyprus
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side - Wrapped for ordering */}
                    <div className={styles.formWrapper}>
                        <ContactForm />
                    </div>

                    {/* Support Tiers */}
                    <div className={styles.supportTiersCard}>
                        <h3 className={styles.supportTiersTitle}>Support Tiers</h3>
                        <div className={styles.tierList}>
                            <div className={styles.tierItem}>
                                <span className={styles.tierLabel}>Standard</span>
                                <span className={styles.tierValue}>Email (24h Response)</span>
                            </div>
                            <div className={styles.tierItem}>
                                <span className={styles.tierLabel}>Business</span>
                                <span className={styles.tierValue}>Live Chat (1h Response)</span>
                            </div>
                            <div className={styles.tierItem}>
                                <span className={styles.enterpriseLabel}>Enterprise</span>
                                <span className={styles.enterpriseValue}>Dedicated Slack Channel (Instant)</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    
        </>
    );
}
