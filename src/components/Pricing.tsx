import styles from './Pricing.module.css';

export default function Pricing() {
    return (
        <section className={styles.section} id="pricing">
            <div className={styles.container}>
                <div className={`${styles.card} floating-shadow antigravity-float`}>
                    <div className={styles.popularBadge}>Most Popular</div>
                    <h3 className={styles.title}>Growth Plan</h3>
                    <div className={styles.price}>
                        $997<span className={styles.period}>/mo</span>
                    </div>
                    <p className={styles.description}>
                        Perfect for growing brokerages that need a complete, scalable infrastructure.
                    </p>

                    <ul className={styles.features}>
                        <li><span className={styles.check}>✓</span> Full White Label Platform</li>
                        <li><span className={styles.check}>✓</span> Unlimited Trading Accounts</li>
                        <li><span className={styles.check}>✓</span> CRM & Back Office Included</li>
                        <li><span className={styles.check}>✓</span> Mobile App (iOS & Android)</li>
                        <li><span className={styles.check}>✓</span> 24/7 Technical Support</li>
                    </ul>

                    <button className={styles.ctaButton}>Start Free Trial</button>
                </div>
            </div>
        </section>
    );
}
