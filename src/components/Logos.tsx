import styles from './Logos.module.css';

export default function Logos() {
    const partners = [
        {
            name: 'MetaQuotes',
            subtitle: 'MT5 Platform Provider',
            svg: (
                <svg viewBox="0 0 120 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" letterSpacing="-1">MetaQuotes</text>
                </svg>
            ),
            width: 120
        },
        {
            name: 'Binance',
            subtitle: 'Crypto Liquidity',
            svg: (
                <svg viewBox="0 0 126.61 126.61" fill="#F3BA2F" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.73 53.2l24.59-24.58 24.6 24.6 14.3-14.31L63.32 0 24.43 38.9zm-24.6 10.12L0 77.42l14.13 14.1 14.1-14.1zm24.6 10.12l24.59 24.58 24.6-24.6 14.31 14.29-38.9 38.9-38.91-38.88zm48.87-10.12l14.12-14.1 14.1 14.1-14.1 14.1z" />
                    <path d="M77.83 63.32L63.32 48.78 52.59 59.5l-1.24 1.23-2.54 2.54 14.51 14.5 14.51-14.47z" />
                </svg>
            ),
            width: 50
        },
        {
            name: 'AWS',
            subtitle: 'Cloud Infrastructure',
            svg: (
                <svg viewBox="0 0 304 182" fill="#FF9900" xmlns="http://www.w3.org/2000/svg">
                    <path d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6s14.2-7.8 24.5-7.8c3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5.5-.7 1.4-1.4 2.8-2.1 3.5-1.8 7.7-3.3 12.6-4.5C41 1.9 46.2 1.3 51.7 1.3c11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zM45.8 81.6c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4.6-2.4 1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7-3.2-.4-6.3-.6-9.4-.6-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-.9-.8-.6-1.5-2-2.1-3.9L96.7 10.2c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9.9.8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-.9 4-.9h8c1.9 0 3.2.3 4 .9.8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-.9 3.9-.9h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9-.8.6-2.1.9-3.8.9h-8.6c-1.9 0-3.2-.3-4-.9-.8-.6-1.5-2-1.9-4L156 23l-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.6-2.2.9-4 .9h-8.6zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2L246 52c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1 1.8-3.2 4.2-6 7.2-8.2 3-2.3 6.4-4 10.4-5.2 4-1.2 8.2-1.7 12.6-1.7 2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8-3.1 1.9-4.7 4.8-4.7 8.9 0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6 3.1 4.1 4.6 8.8 4.6 14 0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z" />
                    <g fillRule="evenodd">
                        <path d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z" />
                        <path d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z" />
                    </g>
                </svg>
            ),
            width: 50
        },
        {
            name: 'Microsoft Azure',
            subtitle: 'Cloud Services',
            svg: (
                <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="azureGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#114A8B" />
                            <stop offset="100%" stopColor="#0669BC" />
                        </linearGradient>
                    </defs>
                    <path d="M46.09.002H19.93L44.954 87.96l-.925 3.002L32.636 96h27.563a5.96 5.96 0 0 0 5.611-4.026L95.567 6.03A6.015 6.015 0 0 0 89.956 0H46.09z" fill="url(#azureGrad)" />
                    <path d="M46.09.002H19.93a5.972 5.972 0 0 0-5.615 4.028L.032 89.972A6.015 6.015 0 0 0 5.643 96h38.764L46.09.002z" fill="#0078D4" />
                </svg>
            ),
            width: 50
        },
        {
            name: 'LMAX Group',
            subtitle: 'Prime Liquidity',
            svg: (
                <svg viewBox="0 0 100 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold">LMAX</text>
                </svg>
            ),
            width: 60
        },
        {
            name: 'Cloudflare',
            subtitle: 'CDN & Security',
            svg: (
                <svg viewBox="0 0 109 40" fill="#F38020" xmlns="http://www.w3.org/2000/svg">
                    <path d="M93.41 14.88c-.14-.57-.75-.9-1.33-.726-.577.14-.902.755-.726 1.33.894 3.537-.696 7.18-3.846 8.806-1.52.785-3.308 1-.4 96 1-1.64.248-3.3.175-4.93-.19-5.082-2.04-8.943-6.03-10.66-11.01-.175-.507-.736-.782-1.244-.607-.51.175-.784.736-.61 1.245 1.876 5.44 6.097 9.65 11.64 11.602 1.78.628 3.65.93 5.55.896 1.672 0 3.36-.234 4.98-.73.755-.23 1.15-1.05.88-1.8zM87.34 8.472c-1.87-6.812-9.034-11.1-16.28-9.753-4.84.9-8.874 4.208-10.583 8.674-.175.456.05.967.506 1.142.456.176.967-.05 1.143-.506 1.498-3.92 5.03-6.83 9.27-7.634 6.354-1.18 12.654 2.582 14.33 8.56.175.622.786 1.008 1.406.833.622-.175 1.01-.784.835-1.406z" />
                </svg>
            ),
            width: 65
        },
        {
            name: 'Saxo Bank',
            subtitle: 'Banking Partner',
            svg: (
                <svg viewBox="0 0 100 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="600">Saxo Bank</text>
                </svg>
            ),
            width: 75
        },
        {
            name: 'Trading Technologies',
            subtitle: 'Trading Infrastructure',
            svg: (
                <svg viewBox="0 0 80 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold">TT</text>
                    <rect x="0" y="10" width="30" height="3" fill="currentColor" />
                    <rect x="0" y="32" width="30" height="3" fill="currentColor" />
                </svg>
            ),
            width: 45
        },
        {
            name: 'cTrader',
            subtitle: 'Trading Platform',
            svg: (
                <svg viewBox="0 0 90 40" fill="#00A4E0" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold">cTrader</text>
                </svg>
            ),
            width: 70
        }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <h3 className={styles.title}>Powered by MetaTrader 5 + Tier-1 partnerships. Join 140+ brokers who finally stopped pretending everything's fine.</h3>
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
