'use client';

import styles from '../demo.module.css';

export default function SystemHealth() {
    const metrics = [
        { label: 'API Latency', value: 45, unit: 'ms', status: 'good', max: 200 },
        { label: 'Server Load', value: 78, unit: '%', status: 'warning', max: 100 },
        { label: 'DB Connections', value: 342, unit: '', status: 'good', max: 1000 },
        { label: 'Error Rate', value: 0.02, unit: '%', status: 'good', max: 1 },
    ];

    return (
        <div className={styles.healthCard}>
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>SYSTEM HEALTH</h3>
                <div className={styles.statusIndicator}>
                    <span className={styles.statusDot}></span>
                    <span className={styles.statusText}>Operational</span>
                </div>
            </div>

            <div className={styles.metricsGrid}>
                {metrics.map((metric, i) => (
                    <div key={i} className={styles.metricItem}>
                        <div className={styles.metricHeader}>
                            <span className={styles.metricLabel}>{metric.label}</span>
                            <span className={`${styles.metricValue} ${styles[metric.status]}`}>
                                {metric.value}{metric.unit}
                            </span>
                        </div>
                        <div className={styles.progressBarBg}>
                            <div
                                className={`${styles.progressBarFill} ${styles[`bg${metric.status}`]}`}
                                style={{ width: `${(metric.value / metric.max) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
