import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './mobile.module.css';
import { IPhoneFrame } from '@/components/DeviceFrames';

export default function MobileAppPage() {
    return (
        <main>
            <Header />
            <InnerPageHeader
                badge="Retention Machine"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>}
                title="Native Mobile App.<br/>Your Logo. Their Pocket."
                subtitle="Don't make your clients download a generic 'MetaTrader' app where they see your competitors in the server list. Give them YOUR app. With YOUR icon. On THEIR home screen."
            />

            {/* The "Reality Check" Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>The "Generic App" Trap</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>
                            Sending your clients to the App Store to download a generic platform is like a restaurant sending you to a grocery store to buy ingredients. It kills the vibe.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Competitor List</h3>
                            <p className={styles.painText}>
                                When they search for your server in the generic app, they see 500 other brokers. Some offer better spreads. Why risk it?
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                    <line x1="2" y1="2" x2="22" y2="22" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Silence</h3>
                            <p className={styles.painText}>
                                Generic apps don't let you send push notifications. You can't ping them about NFP. You can't remind them to deposit. They forget you exist.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Trust Gap</h3>
                            <p className={styles.painText}>
                                A generic app feels cheap. A branded app with FaceID login feels like a bank. Which one do you think gets larger deposits?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution Section */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitFeature}>
                        <div className={styles.featureContent}>
                            <h2>We Publish It For You.<br />Apple & Google Approved.</h2>
                            <p>
                                We handle the entire submission process. We deal with Apple's annoying guidelines. You just give us your logo and colors. Two weeks later, you're on the App Store.
                            </p>
                            <ul className={styles.featureList}>
                                <li><span className={styles.check}>✓</span> Published Under Your Developer Account</li>
                                <li><span className={styles.check}>✓</span> Biometric Login (FaceID / TouchID)</li>
                                <li><span className={styles.check}>✓</span> Custom Push Notifications Engine</li>
                                <li><span className={styles.check}>✓</span> Integrated Deposits & Withdrawals</li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            {/* Placeholder for a dashboard image */}
                            <div style={{
                                width: '100%',
                                height: '400px',
                                background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#1D4ED8',
                                fontWeight: 'bold'
                            }}>
                                [iPhone Mockup with Branded App]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* User Experience Walkthrough (Enhanced with iPhoneFrame) */}
            <section className={styles.section}>
            </section>

            {/* Push Notification Strategy (New Section) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>The "Wake Up" Call</h2>
                            <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '2rem' }}>
                                Email open rates are 20%. Push notification open rates are 90%. Use our engine to send targeted alerts that drive volume.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ background: '#DBEAFE', color: '#1D4ED8', padding: '0.5rem', borderRadius: '8px', fontWeight: 'bold' }}>Margin Call</span>
                                    <span style={{ color: '#4B5563' }}>"Your equity is low. Deposit now to save your positions."</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ background: '#DCFCE7', color: '#166534', padding: '0.5rem', borderRadius: '8px', fontWeight: 'bold' }}>Market Volatility</span>
                                    <span style={{ color: '#4B5563' }}>"Gold is moving fast! +2% in 10 mins. Trade now."</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ background: '#FEF3C7', color: '#D97706', padding: '0.5rem', borderRadius: '8px', fontWeight: 'bold' }}>Inactive User</span>
                                    <span style={{ color: '#4B5563' }}>"We miss you. Here's a 50% bonus on your next deposit."</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            {/* Visual representation of a push notification */}
                            <div style={{ background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', maxWidth: '400px', margin: '0 auto' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#111827', borderRadius: '8px' }}></div>
                                    <div>
                                        <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>YOUR BROKER</div>
                                        <div style={{ fontSize: '0.8rem', color: '#6B7280' }}>now</div>
                                    </div>
                                </div>
                                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>🔥 Gold is breaking out!</div>
                                <div style={{ color: '#4B5563', fontSize: '0.9rem' }}>XAUUSD just hit 2050. Volatility is high. Tap to trade.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Publishing Timeline */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>The "No-Headache" Timeline</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>We know Apple is annoying. That's why we deal with them.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', position: 'relative' }}>
                        {/* Connecting Line */}
                        <div style={{ position: 'absolute', top: '24px', left: '0', right: '0', height: '2px', background: '#E2E8F0', zIndex: -1 }}></div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '50px', height: '50px', background: '#4353F2', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', margin: '0 auto 1.5rem', border: '4px solid white' }}>1</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Day 1</h3>
                            <p style={{ color: '#64748B' }}>You send us your logo, colors, and developer account access.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '50px', height: '50px', background: '#4353F2', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', margin: '0 auto 1.5rem', border: '4px solid white' }}>2</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Day 3</h3>
                            <p style={{ color: '#64748B' }}>We build the binaries and submit to TestFlight for your approval.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '50px', height: '50px', background: '#4353F2', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', margin: '0 auto 1.5rem', border: '4px solid white' }}>3</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Day 7</h3>
                            <p style={{ color: '#64748B' }}>We submit to App Store Review and handle any rejections.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '50px', height: '50px', background: '#10B981', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', margin: '0 auto 1.5rem', border: '4px solid white' }}>4</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Day 14</h3>
                            <p style={{ color: '#64748B' }}>Your app is live. Your clients start downloading. You pop champagne.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section (New Section) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Frequently Asked Questions</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Common questions about the mobile app.</p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Do I need an Apple Developer Account?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Yes. To have your name as the "Seller" on the App Store, you need your own account ($99/year). We guide you through the enrollment process. It takes about 2 days.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>What if Apple rejects the app?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                It happens. Usually it's for something minor like a missing privacy policy link. We handle all the back-and-forth with Apple's review team until it gets approved. We have a 100% success rate.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Can I update the app later?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Yes. We provide monthly maintenance updates to ensure compatibility with new iOS/Android versions. If you want to change your logo or add features, we can push an update to the store.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
