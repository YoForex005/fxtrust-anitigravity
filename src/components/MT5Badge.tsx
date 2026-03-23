import styles from './MT5Badge.module.css';

export default function MT5Badge() {
    return (
        <section className={styles.mt5Badge}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.iconBadge}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M14 2L2 8L14 14L26 8L14 2Z" fill="#4353F2" />
                                <path d="M2 20L14 26L26 20V14L14 20L2 14V20Z" fill="#7B8BF6" />
                            </svg>
                        </div>
                        <div className={styles.headerText}>
                            <h3>FxTrusts Technology Portfolio</h3>
                            <p>Everything your forex business needs — fully whitelabeled</p>
                        </div>
                    </div>

                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <div className={styles.checkIcon}>✓</div>
                            <div className={styles.featureText}>
                                <strong>Full Whitelabel Solutions</strong>
                                <span>Your brand, our technology stack</span>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkIcon}>✓</div>
                            <div className={styles.featureText}>
                                <strong>Multi-Platform Support</strong>
                                <span>cTrader, MT5, MT4, RTX5 & more</span>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkIcon}>✓</div>
                            <div className={styles.featureText}>
                                <strong>Mobile + Web + Desktop</strong>
                                <span>iOS, Android & Web apps included</span>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkIcon}>✓</div>
                            <div className={styles.featureText}>
                                <strong>Custom Website Development</strong>
                                <span>Forex-focused websites built for you</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
