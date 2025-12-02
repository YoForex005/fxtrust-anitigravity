import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './hosting.module.css';

export default function HostingPage() {
    return (
        <main>
            <Header />
            <InnerPageHeader
                badge="Speed Kills (Slippage)"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>}
                title="Low-Latency Hosting.<br/>Faster Than Their Blink Reflex."
                subtitle="In FX, speed isn't a luxury. It's the difference between profit and slippage. We host in LD4 and NY4, right next to the liquidity providers. Because physics matters."
            />

            {/* The "Reality Check" Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Why "The Cloud" is Too Slow</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>
                            AWS is great for hosting cat photos. It's terrible for high-frequency trading. If your server is in Virginia and your LP is in London, you're already dead.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Latency Tax</h3>
                            <p className={styles.painText}>
                                Every millisecond of delay is money lost to slippage. Standard cloud providers have 50ms+ ping times. We have &lt;1ms.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The "Noisy Neighbor"</h3>
                            <p className={styles.painText}>
                                On a shared VPS, if your neighbor mines crypto, your trading server lags. We use dedicated bare metal. No neighbors.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The DDoS Attack</h3>
                            <p className={styles.painText}>
                                Competitors play dirty. If they DDoS you during NFP, you go offline. Our infrastructure eats DDoS attacks for breakfast.
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
                            <h2>Equinix LD4 & NY4.<br />Where the Big Boys Play.</h2>
                            <p>
                                We rack our servers in the same buildings as the major banks and liquidity providers. We run fiber cross-connects directly to them. The data travels feet, not miles.
                            </p>
                            <ul className={styles.featureList}>
                                <li><span className={styles.check}>✓</span> &lt;1ms Internal Latency to Major LPs</li>
                                <li><span className={styles.check}>✓</span> Enterprise-Grade DDoS Protection</li>
                                <li><span className={styles.check}>✓</span> 24/7 Hardware Monitoring & Replacement</li>
                                <li><span className={styles.check}>✓</span> Redundant Power & Connectivity</li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            {/* Placeholder for a dashboard image */}
                            <div style={{
                                width: '100%',
                                height: '400px',
                                background: 'linear-gradient(135deg, #111827 0%, #374151 100%)',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#60A5FA',
                                fontWeight: 'bold'
                            }}>
                                [Server Rack / Data Center Visual]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hardware Specs (New Section) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>The Iron</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>We don't use cheap VPS. We use beasts.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>CPU</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6', marginBottom: '1rem' }}>
                                <strong>Intel Xeon Gold 6354</strong><br />
                                3.0 GHz Base / 3.6 GHz Turbo.<br />
                                18 Cores / 36 Threads.
                            </p>
                            <p style={{ fontSize: '0.9rem', color: '#64748B' }}>Optimized for single-thread performance (critical for MT5).</p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>RAM</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6', marginBottom: '1rem' }}>
                                <strong>128GB DDR4 ECC</strong><br />
                                3200 MHz.<br />
                                Error Correction Code.
                            </p>
                            <p style={{ fontSize: '0.9rem', color: '#64748B' }}>Because a bit-flip error shouldn't crash your brokerage.</p>
                        </div>
                        <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#111827' }}>Storage</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6', marginBottom: '1rem' }}>
                                <strong>2x 3.84TB NVMe SSD</strong><br />
                                RAID 1 Config.<br />
                                7,000 MB/s Read Speed.
                            </p>
                            <p style={{ fontSize: '0.9rem', color: '#64748B' }}>Database queries happen instantly. No I/O bottlenecks.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Network Topology (New Section) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>The Network Map</h2>
                            <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: '1.6', marginBottom: '2rem' }}>
                                We don't route through the public internet unless we have to. We use private cross-connects.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: '#111827', display: 'block', marginBottom: '0.25rem' }}>1. Your MT5 Server (LD4)</strong>
                                    <span style={{ color: '#64748B' }}>Located in Equinix LD4 (London). The heart of FX.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: '#111827', display: 'block', marginBottom: '0.25rem' }}>2. Cross-Connect (Fiber)</strong>
                                    <span style={{ color: '#64748B' }}>A physical yellow cable running from our rack to the LP's rack. Distance: 50 meters. Latency: 0.01ms.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: '#111827', display: 'block', marginBottom: '0.25rem' }}>3. Liquidity Provider (LD4)</strong>
                                    <span style={{ color: '#64748B' }}>LMAX, CFH, Saxo. They are literally down the hall.</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            {/* Visual representation of network topology */}
                            <div style={{ background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ width: '100%', padding: '1.5rem', background: '#1E293B', color: 'white', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold' }}>
                                        Your MT5 Server
                                    </div>
                                    <div style={{ height: '40px', width: '4px', background: '#10B981' }}></div>
                                    <div style={{ width: '100%', padding: '1rem', background: '#F0FDF4', color: '#166534', borderRadius: '12px', textAlign: 'center', border: '2px dashed #10B981', fontWeight: 'bold' }}>
                                        Fiber Cross-Connect
                                    </div>
                                    <div style={{ height: '40px', width: '4px', background: '#10B981' }}></div>
                                    <div style={{ width: '100%', padding: '1.5rem', background: '#334155', color: 'white', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold' }}>
                                        Liquidity Provider
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latency Table (Existing Section - Enhanced) */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>The Speed Test</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>We pinged the major LPs from our LD4 rack. Here's the truth.</p>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <thead>
                                <tr style={{ background: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', color: '#64748B', fontWeight: '600' }}>Liquidity Provider</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', color: '#64748B', fontWeight: '600' }}>Location</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', color: '#64748B', fontWeight: '600' }}>Connection Type</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'right', color: '#64748B', fontWeight: '600' }}>Latency</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#0F172A' }}>LMAX Exchange</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>London (LD4)</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>Fiber Cross-Connect</td>
                                    <td style={{ padding: '1.5rem', textAlign: 'right', fontWeight: '700', color: '#10B981' }}>0.4ms</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#0F172A' }}>CFH Clearing</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>London (LD4)</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>Fiber Cross-Connect</td>
                                    <td style={{ padding: '1.5rem', textAlign: 'right', fontWeight: '700', color: '#10B981' }}>0.6ms</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#0F172A' }}>Saxo Bank</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>London (LD4)</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>Fiber Cross-Connect</td>
                                    <td style={{ padding: '1.5rem', textAlign: 'right', fontWeight: '700', color: '#10B981' }}>0.8ms</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '1.5rem', fontWeight: '600', color: '#0F172A' }}>Standard Cloud (AWS)</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>Dublin (eu-west-1)</td>
                                    <td style={{ padding: '1.5rem', color: '#4B5563' }}>Public Internet</td>
                                    <td style={{ padding: '1.5rem', textAlign: 'right', fontWeight: '700', color: '#EF4444' }}>24.0ms</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ Section (New Section) */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Frequently Asked Questions</h2>
                        <p style={{ fontSize: '1.1rem', color: '#6B7280' }}>Common questions about our infrastructure.</p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Do I get RDP access?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Yes. You get full Administrator RDP access to your server. It's your box. You can install whatever you want (within reason).
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>Can I install custom plugins?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                Absolutely. We support all standard MT5 server plugins. We can also help you install them if you're not comfortable doing it yourself.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111827' }}>What happens if the server crashes?</h3>
                            <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
                                It won't. But if it does, we have a hot-standby server ready to take over in seconds. We also have 24/7 engineers on site in the data center to physically replace hardware if needed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
