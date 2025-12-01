'use client';

import { useRouter } from 'next/navigation';
import styles from './LiveDemo.module.css';

export default function LiveDemo() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/live-demo');
    };

    return (
        <section className={styles.section} id="live-demo">
            <div className={styles.container}>
                {/* Admin Panel Demo */}
                <div className={styles.demoBlock}>
                    <div className={styles.header}>
                        <div className={styles.badge}>
                            <span>🎮 INTERACTIVE DEMO</span>
                        </div>
                        <h2 className={styles.headline}>
                            Test Drive the Admin Panel
                        </h2>
                        <p className={styles.subheadline}>
                            Experience the speed and control of our backend before you buy. No login required.
                        </p>
                    </div>

                    <div className={styles.browserWrapper} onClick={handleClick}>
                        <div className={styles.browserMockup}>
                            <div className={styles.browserHeader}>
                                <div className={styles.trafficLights}>
                                    <div className={`${styles.trafficLight} ${styles.red}`}></div>
                                    <div className={`${styles.trafficLight} ${styles.yellow}`}></div>
                                    <div className={`${styles.trafficLight} ${styles.green}`}></div>
                                </div>
                            </div>
                            <div className={styles.browserContent}>
                                <img
                                    src="/crm-dashboard.png"
                                    alt="FXTrusts Admin CRM Dashboard"
                                    className={styles.dashboardImage}
                                />
                                <div className={styles.playButtonOverlay}>
                                    <div className={styles.playButton}>
                                        <div className={styles.playIcon}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Client Dashboard Demo */}
                <div className={styles.demoBlock} style={{ marginTop: '8rem' }}>
                    <div className={styles.header}>
                        <div className={styles.badge} style={{ background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)' }}>
                            <span>👨‍💻 TRADER EXPERIENCE</span>
                        </div>
                        <h2 className={styles.headline}>
                            Test Drive the Client Dashboard
                        </h2>
                        <p className={styles.subheadline}>
                            Experience the premium trader's room. Seamless deposits, trading, and account management.
                        </p>
                    </div>

                    <div className={styles.browserWrapper} onClick={handleClick}>
                        <div className={styles.browserMockup}>
                            <div className={styles.browserHeader}>
                                <div className={styles.trafficLights}>
                                    <div className={`${styles.trafficLight} ${styles.red}`}></div>
                                    <div className={`${styles.trafficLight} ${styles.yellow}`}></div>
                                    <div className={`${styles.trafficLight} ${styles.green}`}></div>
                                </div>
                            </div>
                            <div className={styles.browserContent}>
                                <img
                                    src="/crm-dashboard.png"
                                    alt="FXTrusts Client Dashboard"
                                    className={styles.dashboardImage}
                                />
                                <div className={styles.playButtonOverlay}>
                                    <div className={styles.playButton} style={{ background: 'rgba(16, 185, 129, 0.95)', boxShadow: '0 12px 40px rgba(16, 185, 129, 0.4)' }}>
                                        <div className={styles.playIcon}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
