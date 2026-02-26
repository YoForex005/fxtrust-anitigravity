import InnerPageHeader from '@/components/InnerPageHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './hosting.module.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'MT5 Server Hosting | Equinix LD4 & NY4 | Low Latency Forex | FXTrusts',
    description: 'Dedicated MT5 server hosting in Equinix LD4 & NY4. Sub-millisecond latency to major LPs. Bare metal servers, DDoS protection, 24/7 monitoring.',
    keywords: [
        'MT5 server hosting',
        'forex VPS',
        'Equinix LD4',
        'Equinix NY4',
        'low latency trading',
        'forex server hosting',
        'trading server colocation',
        'dedicated forex server',
        'MT5 VPS hosting',
        'broker hosting solution',
        'trading latency optimization',
        'forex data center',
        'LP cross-connect',
        'trading infrastructure',
        'high frequency trading hosting'
    ],
    openGraph: {
        title: 'MT5 Server Hosting | Equinix LD4 & NY4 | Sub-1ms Latency',
        description: 'Dedicated bare metal servers next to major LPs. DDoS protection, 24/7 monitoring, enterprise-grade infrastructure.',
        type: 'website',
        url: 'https://fxtrusts.com/platform/hosting',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Low Latency MT5 Hosting | Equinix LD4 & NY4 | FXTrusts',
        description: 'Bare metal servers with direct cross-connects to LMAX, CFH, Saxo. Sub-1ms latency.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/platform/hosting',
    },
};

export default function HostingPage() {
    return (
        <main>
            <Header />
            <InnerPageHeader
                badge="Speed Kills (Slippage)"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>}
                title="Low-Latency Hosting.<br/>Where Milliseconds Mean Money."
                subtitle="In forex, speed isn't a luxury—it's the difference between profit and slippage. We host in Equinix LD4 and NY4, right next to the liquidity providers. Because physics is undefeated, and the speed of light is our only constraint."
            />

            {/* Why Cloud Is Too Slow */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                <line x1="12" y1="9" x2="12" y2="13" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                            <span>WHY GENERIC CLOUD FAILS</span>
                        </div>
                        <h2>AWS Is Great for Cat Photos. Terrible for Trading.</h2>
                        <p>
                            That $20/month VPS you found on DigitalOcean? It's running on shared hardware in a data center
                            optimized for streaming Netflix, not executing trades. If your server is in Virginia and your
                            liquidity provider is in London, you're paying a 70ms "stupidity tax" on every single order.
                        </p>
                    </div>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The Latency Tax</h3>
                            <p className={styles.painText}>
                                Every millisecond of network delay is money bleeding out through slippage. Standard cloud
                                providers have 50-100ms ping times to major LPs. We're at sub-1ms. Over a million orders
                                per year, that's the difference between profit and "what happened to the execution?"
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The "Noisy Neighbor" Problem</h3>
                            <p className={styles.painText}>
                                On a shared VPS, you're splitting CPU cycles with whoever else is on that box. If your
                                neighbor decides to mine crypto or run a botnet, your MT5 server starts lagging during
                                the most critical moments. We use dedicated bare metal. No neighbors. No surprises.
                            </p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3 className={styles.painTitle}>The DDoS Attack Vector</h3>
                            <p className={styles.painText}>
                                Competitors play dirty. If they DDoS you during Non-Farm Payroll, you go offline while
                                your traders can't close positions. Our infrastructure includes enterprise-grade DDoS
                                mitigation that eats 100 Gbps attacks for breakfast without breaking a sweat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution - Equinix */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitFeature}>
                        <div className={styles.featureContent}>
                            <div className={styles.featureBadge}>THE SOLUTION</div>
                            <h2>Equinix LD4 &amp; NY4.<br />Where the Serious Money Lives.</h2>
                            <p>
                                We don't rent space from generic cloud providers. We rack our own servers in the same
                                buildings as LMAX, CFH, Saxo, and the major Prime Brokers. We run fiber cross-connects
                                directly to their infrastructure. The data travels feet, not miles.
                            </p>
                            <ul className={styles.featureList}>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    &lt;1ms Internal Latency to Major LPs
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Enterprise-Grade DDoS Protection
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    24/7 Hardware Monitoring &amp; Replacement
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    N+1 Redundant Power &amp; Connectivity
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Full Administrator RDP Access
                                </li>
                            </ul>
                        </div>
                        <div className={styles.featureImage}>
                            <div className={styles.datacenterMockup}>
                                <div className={styles.rackVisual}>
                                    <div className={styles.rackHeader}>Equinix LD4 — Rack 42</div>
                                    <div className={styles.serverUnit}>
                                        <span className={styles.serverLabel}>MT5 Server</span>
                                        <span className={styles.serverStatus}>● ONLINE</span>
                                    </div>
                                    <div className={styles.serverUnit}>
                                        <span className={styles.serverLabel}>Database Server</span>
                                        <span className={styles.serverStatus}>● ONLINE</span>
                                    </div>
                                    <div className={styles.serverUnit}>
                                        <span className={styles.serverLabel}>Hot Standby</span>
                                        <span className={styles.serverStatusStandby}>● STANDBY</span>
                                    </div>
                                    <div className={styles.crossConnect}>
                                        <span>Cross-Connect to LMAX</span>
                                        <span className={styles.latency}>0.4ms</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hardware Specs */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                                <rect x="9" y="9" width="6" height="6" />
                                <line x1="9" y1="1" x2="9" y2="4" />
                                <line x1="15" y1="1" x2="15" y2="4" />
                                <line x1="9" y1="20" x2="9" y2="23" />
                                <line x1="15" y1="20" x2="15" y2="23" />
                            </svg>
                            <span>THE IRON</span>
                        </div>
                        <h2>We Don't Use Cheap VPS. We Use Beasts.</h2>
                        <p>
                            These are the same server specs you'd find at institutional trading firms. Because your
                            brokerage deserves enterprise-grade hardware, not whatever DigitalOcean has available.
                        </p>
                    </div>

                    <div className={styles.specsGrid}>
                        <div className={styles.specCard}>
                            <h3>CPU</h3>
                            <div className={styles.specValue}>Intel Xeon Gold 6354</div>
                            <ul className={styles.specList}>
                                <li>3.0 GHz Base / 3.6 GHz Turbo</li>
                                <li>18 Cores / 36 Threads</li>
                                <li>Optimized for single-thread (critical for MT5)</li>
                            </ul>
                        </div>
                        <div className={styles.specCard}>
                            <h3>RAM</h3>
                            <div className={styles.specValue}>128GB DDR4 ECC</div>
                            <ul className={styles.specList}>
                                <li>3200 MHz Speed</li>
                                <li>Error Correction Code</li>
                                <li>Because bit-flips shouldn't crash your brokerage</li>
                            </ul>
                        </div>
                        <div className={styles.specCard}>
                            <h3>Storage</h3>
                            <div className={styles.specValue}>2x 3.84TB NVMe SSD</div>
                            <ul className={styles.specList}>
                                <li>RAID 1 Configuration</li>
                                <li>7,000 MB/s Read Speed</li>
                                <li>No I/O bottlenecks on database queries</li>
                            </ul>
                        </div>
                        <div className={styles.specCard}>
                            <h3>Network</h3>
                            <div className={styles.specValue}>10 Gbps Dedicated</div>
                            <ul className={styles.specList}>
                                <li>Dual Redundant Uplinks</li>
                                <li>Private Cross-Connects Available</li>
                                <li>BGP Peering for Failover</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Network Topology */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.splitFeature}>
                        <div className={styles.featureContent}>
                            <h2>The Network Map: Physics, Not Magic</h2>
                            <p className={styles.networkIntro}>
                                We don't route through the public internet unless absolutely necessary. We use private
                                fiber cross-connects—physical cables running from our rack directly to the liquidity
                                provider's rack. No hops, no routing, no luck involved.
                            </p>
                            <div className={styles.networkSteps}>
                                <div className={styles.networkStep}>
                                    <span className={styles.stepNum}>1</span>
                                    <div>
                                        <strong>Your MT5 Server (LD4)</strong>
                                        <p>Located in Equinix LD4, Slough, UK. The heart of European FX trading.</p>
                                    </div>
                                </div>
                                <div className={styles.networkStep}>
                                    <span className={styles.stepNum}>2</span>
                                    <div>
                                        <strong>Fiber Cross-Connect</strong>
                                        <p>A physical yellow cable. Distance: 50 meters. Latency: 0.01ms. Simple physics.</p>
                                    </div>
                                </div>
                                <div className={styles.networkStep}>
                                    <span className={styles.stepNum}>3</span>
                                    <div>
                                        <strong>Liquidity Provider (LD4)</strong>
                                        <p>LMAX, CFH, Saxo—they're literally down the hall from our rack.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.networkDiagram}>
                            <div className={styles.diagramCard}>
                                <div className={styles.diagramNode + ' ' + styles.nodeServer}>Your MT5 Server</div>
                                <div className={styles.diagramLine}></div>
                                <div className={styles.diagramNode + ' ' + styles.nodeFiber}>Fiber Cross-Connect</div>
                                <div className={styles.diagramLine}></div>
                                <div className={styles.diagramNode + ' ' + styles.nodeLP}>Liquidity Provider</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latency Table */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg>
                            <span>THE SPEED TEST</span>
                        </div>
                        <h2>Real Latency Numbers. No Marketing Fluff.</h2>
                        <p>
                            We pinged the major liquidity providers from our LD4 rack. Here's what you're actually
                            getting—compared to what you'd get from a generic cloud provider.
                        </p>
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.latencyTable}>
                            <thead>
                                <tr>
                                    <th>Liquidity Provider</th>
                                    <th>Location</th>
                                    <th>Connection Type</th>
                                    <th>Latency</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>LMAX Exchange</strong></td>
                                    <td>London (LD4)</td>
                                    <td>Fiber Cross-Connect</td>
                                    <td className={styles.latencyGood}>0.4ms</td>
                                </tr>
                                <tr>
                                    <td><strong>CFH Clearing</strong></td>
                                    <td>London (LD4)</td>
                                    <td>Fiber Cross-Connect</td>
                                    <td className={styles.latencyGood}>0.6ms</td>
                                </tr>
                                <tr>
                                    <td><strong>Saxo Bank</strong></td>
                                    <td>London (LD4)</td>
                                    <td>Fiber Cross-Connect</td>
                                    <td className={styles.latencyGood}>0.8ms</td>
                                </tr>
                                <tr>
                                    <td><strong>IS Prime</strong></td>
                                    <td>London (LD4)</td>
                                    <td>Fiber Cross-Connect</td>
                                    <td className={styles.latencyGood}>0.5ms</td>
                                </tr>
                                <tr className={styles.comparisonRow}>
                                    <td><strong>Standard Cloud (AWS)</strong></td>
                                    <td>Dublin (eu-west-1)</td>
                                    <td>Public Internet</td>
                                    <td className={styles.latencyBad}>24.0ms</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Uptime & Support */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <span>UPTIME & SUPPORT</span>
                        </div>
                        <h2>99.99% Uptime. Because "Five Nines" Is Just Marketing.</h2>
                        <p>
                            We don't promise 99.999% uptime because that's 5 minutes of downtime per year and nobody
                            can guarantee that. We promise 99.99% (52 minutes/year) and we actually deliver it.
                        </p>
                    </div>

                    <div className={styles.uptimeGrid}>
                        <div className={styles.uptimeCard}>
                            <div className={styles.uptimeValue}>99.99%</div>
                            <h3>Guaranteed Uptime</h3>
                            <p>Backed by SLA with financial credits if we miss it. We rarely miss it.</p>
                        </div>
                        <div className={styles.uptimeCard}>
                            <div className={styles.uptimeValue}>24/7</div>
                            <h3>On-Site Engineers</h3>
                            <p>Physical humans in the data center, not a ticket queue in Bangladesh.</p>
                        </div>
                        <div className={styles.uptimeCard}>
                            <div className={styles.uptimeValue}>&lt;15min</div>
                            <h3>Hardware Replacement</h3>
                            <p>If a drive fails at 3 AM, it gets replaced before you wake up.</p>
                        </div>
                        <div className={styles.uptimeCard}>
                            <div className={styles.uptimeValue}>Hot Standby</div>
                            <h3>Instant Failover</h3>
                            <p>A second server sits ready to take over. Automatic, seamless, invisible.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                            <span>FREQUENTLY ASKED QUESTIONS</span>
                        </div>
                        <h2>Infrastructure Questions, Answered</h2>
                        <p>
                            What your CTO is going to ask before signing off on this.
                        </p>
                    </div>

                    <div className={styles.faqGrid}>
                        <div className={styles.faqCard}>
                            <h3>Do I get full RDP/SSH access?</h3>
                            <p>
                                Yes. You get full Administrator access to your server. It's your box. Install whatever
                                you want (within reason). We don't babysit your configuration.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Can I install custom MT5 plugins?</h3>
                            <p>
                                Absolutely. We support all standard MT5 server plugins. If you need help installing
                                them, our support team can assist—we've seen everything.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>What happens if the server crashes?</h3>
                            <p>
                                It won't. But if it does, we have a hot-standby server that takes over in seconds.
                                Plus 24/7 engineers on-site to physically replace hardware within 15 minutes.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Can I get a cross-connect to my LP?</h3>
                            <p>
                                If your LP is in LD4 or NY4, yes. We'll order the cross-connect, handle the paperwork,
                                and run the fiber. It typically takes 2-4 weeks.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>What about backups?</h3>
                            <p>
                                Daily incremental backups, weekly full backups, all stored off-site in a separate
                                data center. 30-day retention. Restore requests are processed same-day.
                            </p>
                        </div>
                        <div className={styles.faqCard}>
                            <h3>Can I start in NY4 instead of LD4?</h3>
                            <p>
                                Yes. If your traders and LPs are primarily US-based, NY4 makes more sense. Same
                                hardware, same SLA, different continent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Stop Paying the Latency Tax</h2>
                        <p>
                            Every millisecond you lose to bad hosting is money you're giving away. Let's put your
                            MT5 server where it belongs—next to the liquidity.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/get-started" className={styles.primaryCta}>
                                Get a Quote
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                            <Link href="/company/contact" className={styles.secondaryCta}>
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
