import { Metadata } from 'next';
import InnerPageHeader from '@/components/InnerPageHeader';
import styles from '../solution-subpage.module.css';

export const metadata: Metadata = {
    title: "Trader Leaderboards & Competitions | Gamification for Prop Firms",
    description: "Engage your trading community with live leaderboards, trading competitions, and gamification tools for your prop firm.",
    keywords: ["trader leaderboards", "trading competitions", "prop firm gamification", "trader engagement", "community trading"],
};

export default function LeaderboardsPage() {
    return (
        <main className={styles.main}>
            <InnerPageHeader
                badge="Community Growth"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>}
                title="Engaging Leaderboards"
                subtitle="Turn trading into a social experience. Drive higher engagement and community growth with real-time leaderboards and competitive trading events."
            />

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

        </main>
    );
}
