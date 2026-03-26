import React from 'react';
import styles from './data-exchange.module.css';

export default function DataExchangeApiSection() {
    return (
        <section className={styles.apiSection}>
            <div className={styles.container}>
                <div className={styles.card}>
                    
                    {/* Left Typography Column */}
                    <div className={styles.textContent}>
                        <div className={styles.badge}>Infrastructure</div>
                        <h2 className={styles.title}>RTX5 Data Exchange API</h2>
                        <p className={styles.description}>
                            Enterprise-grade REST API powering real-time data exchange between your trading systems and the RTX5 platform. Built for reliability and speed.
                        </p>
                    </div>

                    {/* Right Interactive Diagram */}
                    <div className={styles.diagramArea}>
                        <div className={styles.diagramWrapper}>
                            
                            {/* SVG Connectors */}
                            <svg className={styles.connectorPaths} preserveAspectRatio="none" viewBox="0 0 1000 600">
                                {/* GET */}
                                <path d="M 150 60 L 150 150 C 150 200, 500 200, 500 250" className={styles.pathBg} />
                                <path d="M 150 60 L 150 150 C 150 200, 500 200, 500 250" className={styles.pathFlow1} />
                                {/* POST */}
                                <path d="M 383 60 L 383 150 C 383 200, 500 200, 500 250" className={styles.pathBg} />
                                <path d="M 383 60 L 383 150 C 383 200, 500 200, 500 250" className={styles.pathFlow2} />
                                {/* PUT */}
                                <path d="M 616 60 L 616 150 C 616 200, 500 200, 500 250" className={styles.pathBg} />
                                <path d="M 616 60 L 616 150 C 616 200, 500 200, 500 250" className={styles.pathFlow3} />
                                {/* DELETE */}
                                <path d="M 850 60 L 850 150 C 850 200, 500 200, 500 250" className={styles.pathBg} />
                                <path d="M 850 60 L 850 150 C 850 200, 500 200, 500 250" className={styles.pathFlow4} />
                            </svg>

                            {/* Method Nodes */}
                            <div className={styles.methodNode} style={{ top: '10%', left: '15%' }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
                                GET
                            </div>
                            <div className={styles.methodNode} style={{ top: '10%', left: '38.3%' }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
                                POST
                            </div>
                            <div className={styles.methodNode} style={{ top: '10%', left: '61.6%' }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
                                PUT
                            </div>
                            <div className={styles.methodNode} style={{ top: '10%', left: '85%' }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
                                DELETE
                            </div>

                            {/* Center Hub */}
                            <div className={styles.centerHub} style={{ top: '41.6%', left: '50%' }}>
                                <span className={styles.sparkle}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                                </span> 
                                RTX5 Data Exchange API
                            </div>

                            {/* Base Radar Panel */}
                            <div className={styles.radarPanelContainer}>
                                <div className={styles.radarPanel}>
                                    {/* Concentric Rings */}
                                    <div className={styles.radarRing} style={{ width: '200px', height: '100px' }} />
                                    <div className={styles.radarRing} style={{ width: '380px', height: '190px' }} />
                                    <div className={styles.radarRing} style={{ width: '560px', height: '280px' }} />

                                    {/* Inner Nodes */}
                                    <div className={styles.innerNodeLeft}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                        Orrnn
                                    </div>
                                    <div className={styles.innerNodeRight}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v11z"/></svg>
                                        v5_core
                                    </div>

                                    {/* Bottom Node */}
                                    <div className={styles.apiNode}>API</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
