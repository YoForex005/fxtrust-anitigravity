import styles from './Logos.module.css';

export default function Logos() {
    const partners = [
        {
            name: 'AWS',
            subtitle: 'Cloud Infrastructure',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.653 11.237c.068-.695.103-1.39.103-2.086 0-1.596-.342-2.952-1.027-4.068-.684-1.116-1.66-1.674-2.927-1.674-1.267 0-2.243.558-2.928 1.674-.685 1.116-1.027 2.472-1.027 4.068 0 .695.034 1.39.102 2.086H6.223c-.069-.695-.103-1.39-.103-2.086 0-2.736.77-4.944 2.311-6.624C10.04.907 12.164.067 14.802.067c2.636 0 4.76.84 6.37 2.52 1.54 1.68 2.311 3.888 2.311 6.624 0 .695-.034 1.39-.103 2.086h-5.727zM6.634 13.918c-.069.695-.103 1.39-.103 2.085 0 1.596.342 2.952 1.027 4.068.685 1.116 1.66 1.674 2.928 1.674 1.266 0 2.243-.558 2.927-1.674.685-1.116 1.027-2.472 1.027-4.068 0-.695-.034-1.39-.103-2.085h5.727c.069.695.103 1.39.103 2.085 0 2.736-.77 4.944-2.311 6.624-1.61 1.68-3.734 2.52-6.37 2.52-2.637 0-4.76-.84-6.37-2.52-1.541-1.68-2.312-3.888-2.312-6.624 0-.695.035-1.39.103-2.085h5.727zM11.88 9.322h1.045v6.514H11.88V9.322z" />
                </svg>
            ),
            width: 50
        },
        {
            name: 'Azure',
            subtitle: 'Cloud Platform',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.4 20h13.2l-2.4-3.6H8.6l-3.2 3.6zm-1.8 0h3.2l8.6-9.8-3.2-3.8-8.6 13.6zm13.6-16H14L5.4 17.6l1.8 2.4L17.2 4z" />
                </svg>
            ),
            width: 40
        },
        {
            name: 'LMAX',
            subtitle: 'Liquidity Provider',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3h4v14H3V3zm6 0h4v18H9V3zm6 0h4v10h-4V3z" />
                </svg>
            ),
            width: 45
        },
        {
            name: 'Saxo Bank',
            subtitle: 'Liquidity Provider',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h2v6h-2v-6zm0-4h2v2h-2V7z" />
                </svg>
            ),
            width: 55
        },
        {
            name: 'MetaQuotes',
            subtitle: 'Authorized Vendor',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v4.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3h1c.55 0 1-.45 1-1V7h-2v2h-1V7H8v2h-1V7H5v1c0 3.69 2.47 6.8 5.83 7.72L17.9 17.39z" />
                </svg>
            ),
            width: 45
        },
        {
            name: 'Cloudflare',
            subtitle: 'Security',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.2 10.5c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .3 0 .5-.1.8 1.9.3 3.4 2 3.4 4 0 2.2-1.8 4-4 4H7.5c-2.5 0-4.5-2-4.5-4.5 0-2.2 1.6-4 3.7-4.4.4-2.5 2.5-4.4 5-4.4.5 0 1 .1 1.5.2z" />
                </svg>
            ),
            width: 55
        },
        {
            name: 'Centroid',
            subtitle: 'Server Provider',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
            ),
            width: 50
        },
        {
            name: 'T4B',
            subtitle: 'Bridge Technology',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
            ),
            width: 40
        },
        {
            name: 'Binance Connect',
            subtitle: 'Crypto Liquidity',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.624 13.9202l2.7175 2.7154-7.353 7.353-7.353-7.352 2.7175-2.7164 4.6355 4.6595 4.6356-4.6595zm4.6366-4.6366L24 12l-2.7154 2.7164L18.5682 12l2.6924-2.7164zm-9.272.001l2.7163 2.6914-2.7164 2.7174v-.001L9.2721 12l2.7164-2.7154zm-9.2722-.001L5.4088 12l-2.6914 2.6924L0 12l2.7164-2.7164zM11.9885.011l7.353 7.329-2.7174 2.7154-4.6356-4.6356-4.6355 4.6355-2.7175-2.7155 7.353-7.3288z" />
                </svg>
            ),
            width: 45
        }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <h3 className={styles.title}>Powering the next generation of fintech unicorns.</h3>
                <div className={styles.scrollWrapper}>
                    <div className={styles.scrollTrack}>
                        {/* First set of logos */}
                        {partners.map((partner, i) => (
                            <div key={`first-${i}`} className={styles.logo}>
                                <div className={styles.logoWrapper}>
                                    <div className={styles.svgContainer} style={{ width: partner.width }}>
                                        {partner.svg}
                                    </div>
                                    {partner.subtitle && (
                                        <span className={styles.logoSubtitle}>{partner.subtitle}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {partners.map((partner, i) => (
                            <div key={`second-${i}`} className={styles.logo}>
                                <div className={styles.logoWrapper}>
                                    <div className={styles.svgContainer} style={{ width: partner.width }}>
                                        {partner.svg}
                                    </div>
                                    {partner.subtitle && (
                                        <span className={styles.logoSubtitle}>{partner.subtitle}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
