import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.badge}>
                    <span className={styles.badgeIcon}>⚡</span>
                    <span>Built with MetaTrader 5</span>
                </div>
                <h1 className={styles.headline}>
                    MetaTrader 5 White-Label Platform That Actually Works. <br /> (And Launches in Weeks, Not "Eventually")
                </h1>
                <p className={styles.subtext}>
                    Built on MetaTrader 5 - the world's most trusted trading platform. Remember when your old provider said "it'll be ready next week" for 6 months straight? Yeah, we're not that. Launch a fully-compliant MT5 brokerage faster than your last provider answered a support ticket. $700/mo base + $60 per active user. No setup fees that require a second mortgage.
                </p>
                <div className={styles.actions}>
                    <Link href="/get-started" className={styles.primaryBtn}>
                        Show Me How This Works
                        <span>→</span>
                    </Link>
                </div>

            </div>
        </section>
    );
}
