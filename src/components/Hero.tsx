import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.badge}>
                    <span className={styles.badgeIcon}>i</span>
                    <span>New Model: Pay-Per-Active-User Pricing</span>
                </div>
                <h1 className={styles.headline}>
                    Launch a Tier-1 Brokerage. <br /> Without the Tier-1 Capital.
                </h1>
                <p className={styles.subtext}>
                    Stop paying $10,000 setup fees. Start for just $700/mo. Includes branded CRM, 4vCPU Cloud Server (AWS/Azure), and Institutional Liquidity API (Forex, Crypto, Gold). Pay just $60 per active user.
                </p>
                <div className={styles.actions}>
                    <button className={styles.primaryBtn}>
                        Book A Demo
                        <span>→</span>
                    </button>
                </div>

            </div>
        </section>
    );
}
