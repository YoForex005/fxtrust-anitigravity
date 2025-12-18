'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './LiveDemo.module.css';

export default function LiveDemo() {
    return (
        <section className={styles.section} id="live-demo">
            <div className={styles.container}>
                {/* Admin Panel Demo */}
                <div className={styles.demoBlock}>
                    <div className={styles.header}>
                        <div className={styles.badge}>
                            <span>🎮 TRY BEFORE YOU CRY</span>
                        </div>
                        <h2 className={styles.headline}>
                            Test Drive the Platform (Because You Don't Trust Marketing Copy)
                        </h2>
                        <p className={styles.subheadline}>
                            Click around. Break stuff. See if we're lying about the speed. No login required. We promise not to immediately sell your email to our sales team.
                        </p>
                    </div>

                    <Link href="/live-demo/admin" prefetch={true} className={styles.browserWrapper}>
                        <div className={styles.browserMockup}>
                            <div className={styles.browserHeader}>
                                <div className={styles.trafficLights}>
                                    <div className={`${styles.trafficLight} ${styles.red}`}></div>
                                    <div className={`${styles.trafficLight} ${styles.yellow}`}></div>
                                    <div className={`${styles.trafficLight} ${styles.green}`}></div>
                                </div>
                            </div>
                            <div className={styles.browserContent}>
                                <Image
                                    src="/crm-dashboard.png"
                                    alt="FXTrusts Admin CRM Dashboard"
                                    width={800}
                                    height={500}
                                    className={styles.dashboardImage}
                                />
                                <div className={styles.playButtonOverlay}>
                                    <div className={styles.playButton}>
                                        <div className={styles.playIcon}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Client Dashboard Demo */}
                <div className={styles.demoBlock} style={{ marginTop: '8rem' }}>
                    <div className={styles.header}>
                        <div className={styles.badge} style={{ background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)' }}>
                            <span>👨‍💻 TRADER EXPERIENCE</span>
                        </div>
                        <h2 className={styles.headline}>
                            Now Try the Trader's Side
                        </h2>
                        <p className={styles.subheadline}>
                            This is what your traders will actually see. Deposits, trades, account history... all the stuff they'll spam you about if it doesn't work perfectly.
                        </p>
                    </div>

                    <Link href="/live-demo/client" prefetch={true} className={styles.browserWrapper}>
                        <div className={styles.browserMockup}>
                            <div className={styles.browserHeader}>
                                <div className={styles.trafficLights}>
                                    <div className={`${styles.trafficLight} ${styles.red}`}></div>
                                    <div className={`${styles.trafficLight} ${styles.yellow}`}></div>
                                    <div className={`${styles.trafficLight} ${styles.green}`}></div>
                                </div>
                            </div>
                            <div className={styles.browserContent}>
                                <Image
                                    src="/crm-dashboard.png"
                                    alt="FXTrusts Client Dashboard"
                                    width={800}
                                    height={500}
                                    className={styles.dashboardImage}
                                />
                                <div className={styles.playButtonOverlay}>
                                    <div className={styles.playButton} style={{ background: 'rgba(16, 185, 129, 0.95)', boxShadow: '0 12px 40px rgba(16, 185, 129, 0.4)' }}>
                                        <div className={styles.playIcon}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

