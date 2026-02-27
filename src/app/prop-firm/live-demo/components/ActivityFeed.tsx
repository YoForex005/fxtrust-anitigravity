'use client';

import styles from '../demo.module.css';

export default function ActivityFeed() {
    const activities = [
        { id: 1, user: 'System', action: 'Automated Backup Completed', time: '2 mins ago', type: 'system' },
        { id: 2, user: 'Sarah Martinez', action: 'Deposited $5,000 (USDT)', time: '15 mins ago', type: 'finance' },
        { id: 3, user: 'John Anderson', action: 'Updated KYC Documents', time: '1 hour ago', type: 'user' },
        { id: 4, user: 'Admin', action: 'Changed Commission Structure', time: '2 hours ago', type: 'admin' },
        { id: 5, user: 'Emma Thompson', action: 'New Account Registration', time: '3 hours ago', type: 'user' },
    ];

    const getIcon = (type: string) => {
        switch (type) {
            case 'system': return '🔄';
            case 'finance': return '💰';
            case 'user': return '👤';
            case 'admin': return '🛡️';
            default: return '📝';
        }
    };

    return (
        <div className={styles.activityCard}>
            <div className={styles.activityHeader}>
                <h3 className={styles.sectionTitle}>RECENT ACTIVITY</h3>
                <button className={styles.viewAllButton}>View All</button>
            </div>

            <div className={styles.timeline}>
                {activities.map((activity, index) => (
                    <div key={activity.id} className={styles.timelineItem}>
                        <div className={styles.timelineIcon}>
                            {getIcon(activity.type)}
                        </div>
                        <div className={styles.timelineContent}>
                            <p className={styles.timelineText}>
                                <span className={styles.timelineUser}>{activity.user}</span>
                                {activity.action}
                            </p>
                            <span className={styles.timelineTime}>{activity.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
