import styles from './Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Image
                src="/hero.png"
                alt="FxTrusts - Complete Forex Technology Portfolio"
                fill
                priority
                sizes="100vw"
                className={styles.heroBg}
            />
            <div className={styles.content}>
                {/* <div className={styles.badge}>
                    <span className={styles.badgeIcon}>⚡</span>
                    <span>Please Remove MetaTrader</span>
                </div> */}
                <h1 className={styles.headline}>
                    The Complete Forex Technology Portfolio. Whitelabel Solutions & Custom Websites Built for Your Brand.
                </h1>
                <p className={styles.subtext}>
                    FxTrusts delivers end-to-end forex technology — from PropFirm platforms and AI-powered trading to full CRM systems and cross-platform trade copiers. We build fully whitelabeled solutions and custom websites tailored to your brokerage. Everything you need under one roof, launched in weeks, not months.
                </p>
                <div className={styles.actions}>
                    <Link href="/get-started" className={styles.primaryBtn}>
                        Explore Our Portfolio
                        <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
