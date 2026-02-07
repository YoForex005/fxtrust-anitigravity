import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Trader Leaderboards & Competitions | Gamification for Prop Firms",
    description: "Engage your trading community with live leaderboards, trading competitions, and gamification tools for your prop firm.",
    keywords: ["trader leaderboards", "trading competitions", "prop firm gamification", "trader engagement", "community trading"],
};

export default function LeaderboardsPage() {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroBadge}>
                        <span className={styles.badgeDot}></span>
                        <span>COMMUNITY GROWTH</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Engaging <span className={styles.heroHighlight}>LEADERBOARDS</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Turn trading into a social experience. Drive higher engagement and community growth
                        with real-time leaderboards and competitive trading events.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/company/contact" className={styles.btnPrimary}>Start a Competition</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>GAMIFICATION</span>
                        <h2 className={styles.sectionTitle}>Build a Loyal Community</h2>
                    </div>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>🏆</div>
                            <h3 className={styles.featureTitle}>Global Rankings</h3>
                            <p className={styles.featureText}>Filterable leaderboards based on ROI, profit, or consistency to highlight your top talent.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>⚔️</div>
                            <h3 className={styles.featureTitle}>Trading Battles</h3>
                            <p className={styles.featureText}>Host time-limited competitions with automated entry and prize distribution systems.</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>📊</div>
                            <h3 className={styles.featureTitle}>Social Proof</h3>
                            <p className={styles.featureText}>Enable traders to share their rankings and progress on social media directly from their dash.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
