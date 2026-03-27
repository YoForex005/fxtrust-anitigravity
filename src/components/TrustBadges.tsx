'use client';

import styles from './TrustBadges.module.css';
import Image from "next/image";

export default function TrustBadges() {
    const badges = [
        {
            icon: (
                // ISO 27001 - Shield with checkmark (white on dark)
                <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4L8 11v13c0 10.5 7 20 16 23 9-3 16-12.5 16-23V11L24 4z" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="2"/>
                    <path d="M17 24l5 5 9-9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: 'ISO 27001',
            subtitle: 'Certified'
        },
        {
            icon: (
                // PCI DSS - Credit card
                <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="12" width="36" height="24" rx="4" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.1)"/>
                    <rect x="6" y="18" width="36" height="6" fill="rgba(255,255,255,0.25)"/>
                    <rect x="12" y="30" width="10" height="3" rx="1.5" fill="white" opacity="0.7"/>
                    <circle cx="34" cy="31.5" r="3" stroke="white" strokeWidth="1.5"/>
                    <path d="M32.5 31v-1.5a1.5 1.5 0 013 0V31" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
            ),
            title: 'PCI DSS',
            subtitle: 'Level 1'
        },
        {
            icon: (
                // SOC 2 - Double ring checkmark
                <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="19" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                    <circle cx="24" cy="24" r="13" stroke="white" strokeWidth="2"/>
                    <path d="M17 24l5 5 9-9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: 'SOC 2',
            subtitle: 'Type II'
        },
        {
            icon: (
                // GDPR - Shield with EU stars
                <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4L8 11v13c0 10.5 7 20 16 23 9-3 16-12.5 16-23V11L24 4z" fill="rgba(255,255,255,0.1)" stroke="white" strokeWidth="2"/>
                    <text x="24" y="29" textAnchor="middle" fontSize="11" fontWeight="800" fontFamily="Arial" fill="white">EU</text>
                </svg>
            ),
            title: 'GDPR',
            subtitle: 'Compliant'
        },
        {
            icon: (
                // SSL - Padlock
                <svg width="28" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12" y="22" width="24" height="18" rx="4" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.1)"/>
                    <path d="M17 22v-6a7 7 0 0114 0v6" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                    <circle cx="24" cy="31" r="3" fill="white"/>
                    <line x1="24" y1="34" x2="24" y2="37" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ),
            title: '256-bit SSL',
            subtitle: 'Encrypted'
        },
        {
            icon: (
                // 99.99% Uptime - Clock
                <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="18" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                    <circle cx="24" cy="24" r="13" stroke="white" strokeWidth="2"/>
                    <path d="M24 14v10l6 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: '99.99%',
            subtitle: 'Uptime SLA'
        },
        {
            icon: <Image src="/logos/aws.svg" alt="AWS" width={500} height={500} style={{width:'40px', height:'auto', objectFit:'contain', filter:'brightness(0) invert(1)'}} />,
            title: 'AWS',
            subtitle: 'Infrastructure'
        },
        {
            icon: <Image src="/logos/azure.svg" alt="Azure" width={500} height={500} style={{width:'34px', height:'auto', objectFit:'contain', filter:'brightness(0) invert(1)'}} />,
            title: 'Azure',
            subtitle: 'Cloud Partner'
        },
        {
            icon: <Image src="/logos/cloudflare.svg" alt="Cloudflare" width={500} height={500} style={{width:'40px', height:'auto', objectFit:'contain', filter:'brightness(0) invert(1)'}} />,
            title: 'Cloudflare',
            subtitle: 'DDoS Protected'
        },
        {
            icon: (
                // MetaQuotes - trading chart
                <svg width="32" height="30" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 32L14 14L24 26L34 10L44 32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="24" cy="26" r="3" fill="white"/>
                    <circle cx="14" cy="14" r="2" fill="rgba(255,255,255,0.6)"/>
                    <circle cx="34" cy="10" r="2" fill="rgba(255,255,255,0.6)"/>
                </svg>
            ),
            title: 'MetaQuotes',
            subtitle: 'Official Partner'
        },
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
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
            </div>
        </section>
    );
}
