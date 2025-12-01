import styles from './Problem.module.css';

export default function Problem() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.badge}>
                    <span className={styles.badgeIcon}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L9.79611 6.20389L16 8L9.79611 9.79611L8 16L6.20389 9.79611L0 8L6.20389 6.20389L8 0Z" fill="currentColor" opacity="0.8" />
                            <path d="M13.5 0L14.3981 3.10194L17.5 4L14.3981 4.89806L13.5 8L12.6019 4.89806L9.5 4L12.6019 3.10194L13.5 0Z" fill="currentColor" opacity="0.6" transform="translate(-2 2) scale(0.6)" />
                        </svg>
                    </span>
                    <span>The Problem</span>
                </div>
                <h2 className={styles.headline}>
                    It shouldn't cost a fortune to rent a server and a license.
                </h2>
                <p className={styles.subtext}>
                    Legacy providers charge you for 'potential'. We charge you for 'performance'. If you don't have active traders, why should you pay for them?
                </p>
            </div>
        </section>
    );
}
