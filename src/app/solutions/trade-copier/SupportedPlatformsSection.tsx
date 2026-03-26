import React from 'react';
import styles from './platforms.module.css';

export default function SupportedPlatformsSection() {
    const platforms = [
        { name: 'MetaTrader 4', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg> },
        { name: 'MetaTrader 5', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg> },
        { name: 'cTrader', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg> },
        { name: 'DXTrade', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
        { name: 'TradeLocker', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg> },
        { name: 'Match-Trader', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> },
        { name: 'VertexFX', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 22h20L12 2z"/></svg> },
        { name: 'Ninjatrader', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Supporting Platforms</h2>
                
                <div className={styles.platformGrid}>
                    {platforms.map((platform, index) => (
                        <div key={index} className={styles.platformCard}>
                            <span className={styles.iconWrapper}>{platform.icon}</span>
                            <span className={styles.platformName}>{platform.name}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.integrationPillWrapper}>
                   
                </div>
            </div>
        </section>
    );
}
