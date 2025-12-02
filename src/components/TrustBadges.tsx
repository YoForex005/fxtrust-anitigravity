'use client';

import styles from './TrustBadges.module.css';

export default function TrustBadges() {
    const badges = [
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M16 2l-4 4H6v6l-4 4 4 4v6h6l4 4 4-4h6v-6l4-4-4-4V6h-6l-4-4zm0 6l6 6v4l-6 6-6-6v-4l6-6z" />
                </svg>
            ),
            title: 'ISO 27001',
            subtitle: 'Certified'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm-2 21l-7-7 2.828-2.828L14 17.344l8.172-8.172L25 12z" />
                </svg>
            ),
            title: 'PCI DSS',
            subtitle: 'Level 1'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M16 2l-8 4v8c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V6l-8-4zm-1 18l-4-4 1.4-1.4 2.6 2.6 6.6-6.6L23 12l-8 8z" />
                </svg>
            ),
            title: 'SOC 2',
            subtitle: 'Type II'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M24 8h-2V6c0-2.21-1.79-4-4-4h-4c-2.21 0-4 1.79-4 4v2H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 6c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2H12V6zm4 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                </svg>
            ),
            title: 'GDPR',
            subtitle: 'Compliant'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M28 8H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 4l-12 6-12-6v-2l12 6 12-6v2z" />
                </svg>
            ),
            title: '256-bit SSL',
            subtitle: 'Encrypted'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M16 2C8.28 2 2 8.28 2 16s6.28 14 14 14 14-6.28 14-14S23.72 2 16 2zm0 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 16H10v-2c0-2 4-3.1 6-3.1s6 1.1 6 3.1v2z" />
                </svg>
            ),
            title: '99.99%',
            subtitle: 'Uptime SLA'
        },
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>🛡️</span>
                        <span>THE BORING-BUT-IMPORTANT STUFF</span>
                    </div>
                    <h2 className={styles.headline}>
                        Yes, We Actually Have Our Security Certificates.<br />(Unlike Some People We Won't Name)
                    </h2>
                    <p className={styles.subtext}>
                        ISO 27001, PCI DSS, SOC 2, GDPR... we collected them all like Pokémon cards so you don't have to worry about regulators showing up uninvited. Because apparently that's a thing that happens.
                    </p>
                </div>

                <div className={styles.grid}>
                    {badges.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardIcon}>
                                {item.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardSubtitle}>{item.subtitle}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.partners}>
                    <p className={styles.partnersLabel}>WE HANG OUT WITH THE COOL KIDS</p>
                    <div className={styles.partnerLogos}>
                        <div className={styles.partnerLogo}>AWS</div>
                        <div className={styles.partnerLogo}>Azure</div>
                        <div className={styles.partnerLogo}>MetaQuotes</div>
                        <div className={styles.partnerLogo}>Cloudflare</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
