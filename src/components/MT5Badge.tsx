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
                            <h3>Built with MetaTrader 5</h3>
                            <p>The platform 89% of forex traders already use</p>
                        </div>
                    </div>

                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <div className={styles.checkIcon}>✓</div>
                            <div className={styles.featureText}>
                                <strong>Full MT5 Stack</strong>
                                <span>Desktop, Web, Mobile apps included</span>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkIcon}>✓</div>
                            <div className={styles.featureText}>
                                <strong>Zero Learning Curve</strong>
                                <span>Traders already know MT5</span>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkIcon}>✓</div>
                            <div className={styles.featureText}>
                                <strong>Always Updated</strong>
                                <span>Latest MT5 builds included</span>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkIcon}>✓</div>
                            <div className={styles.featureText}>
                                <strong>Complete Ecosystem</strong>
                                <span>Manager Terminal + Full API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
