'use client';

import styles from './Testimonials.module.css';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Michael Rodriguez',
            role: 'CEO',
            company: 'Apex Forex Group',
            location: 'Dubai, UAE',
            quote: 'I was paying $12K/month to a provider whose support team only worked "business hours" in a timezone I\'ve never heard of. Switched to FXTrusts. Cut costs by 68%. Support actually responds. I may have cried tears of joy.',
            metrics: '68% Cost Reduction',
            image: '👨‍💼'
        },
        {
            name: 'Sarah Chen',
            role: 'CTO',
            company: 'TradeFirst Capital',
            location: 'Singapore',
            quote: 'Spent 8 months with our previous provider. They promised "next week" so many times I started a tally. Week 32, still nothing. FXTrusts had us live in 14 days. I\'m still processing the shock.',
            metrics: '14 Days to Launch',
            image: '👩‍💼'
        },
        {
            name: 'James Thompson',
            role: 'Founder',
            company: 'PropTrade Elite',
            location: 'London, UK',
            quote: 'Every vendor meeting felt like a therapy session where they explained why I needed features I didn\'t ask for. FXTrusts just... gave me what I needed? Novel concept. 10/10 would not suffer again.',
            metrics: 'Actually Listened',
            image: '🧑‍💼'
        },
        {
            name: 'Ahmed Al-Mansouri',
            role: 'Managing Director',
            company: 'MENA Trading Solutions',
            location: 'Abu Dhabi, UAE',
            quote: 'The anti-grey shield alone saved my sanity. MetaQuotes audits used to give me nightmares. Now I sleep like a baby. A very profitable, compliant baby.',
            metrics: '100% Compliance',
            image: '👨‍💻'
        }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span>😅</span>
                        <span>Real Humans, Real Relief</span>
                    </div>
                    <h2 className={styles.headline}>
                        People Who Used to Hate Mondays<br />(Now They Just Tolerate Them)
                    </h2>
                    <p className={styles.subtext}>
                        Real brokers. Real struggles. Real "wait, it actually works?" moments. No stock photos of people pointing at laptops.
                    </p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.metrics}>
                                    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span>{testimonial.metrics}</span>
                                </div>
                                <div className={styles.quoteMark}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017C15.4647 18 15.017 18.4477 15.017 19V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166C6.46432 18 6.0166 18.4477 6.0166 19V21H5.0166Z" />
                                    </svg>
                                </div>
                            </div>

                            <p className={styles.quote}>"{testimonial.quote}"</p>

                            <div className={styles.author}>
                                <div className={styles.avatar}>{testimonial.image}</div>
                                <div className={styles.authorInfo}>
                                    <div className={styles.authorHeader}>
                                        <div className={styles.authorName}>{testimonial.name}</div>
                                        <div className={styles.verifiedBadge}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M6 0L7.5 3L10.5 3.5L8.5 6L9 9L6 7.5L3 9L3.5 6L1.5 3.5L4.5 3L6 0Z" fill="#10B981" />
                                            </svg>
                                            <span>Verified Client</span>
                                        </div>
                                    </div>
                                    <div className={styles.authorRole}>{testimonial.role}, {testimonial.company}</div>
                                    <div className={styles.authorLocation}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M6 1C4.07 1 2.5 2.57 2.5 4.5C2.5 7.125 6 11 6 11C6 11 9.5 7.125 9.5 4.5C9.5 2.57 7.93 1 6 1ZM6 5.75C5.31 5.75 4.75 5.19 4.75 4.5C4.75 3.81 5.31 3.25 6 3.25C6.69 3.25 7.25 3.81 7.25 4.5C7.25 5.19 6.69 5.75 6 5.75Z" fill="#9CA3AF" />
                                        </svg>
                                        <span>{testimonial.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <p className={styles.ctaText}>Join 140+ brokers who finally stopped stress-eating during setup</p>
                    <button className={styles.ctaButton}>See If We're Full of It →</button>
                </div>
            </div>
        </section>
    );
}
