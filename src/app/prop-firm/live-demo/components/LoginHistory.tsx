'use client';

import { useState } from 'react';
import styles from '../demo.module.css';
import { demoLoginHistory } from '../data/demoData';

export default function LoginHistory() {
    const [selectedClient, setSelectedClient] = useState('all');

    const filteredHistory = selectedClient === 'all'
        ? demoLoginHistory
        : demoLoginHistory.filter(h => h.email === selectedClient);

    return (
        <div className={styles.loginHistorySection}>
            <div className={styles.loginHeader}>
                <h3 className={styles.sectionTitle}>SECURITY LOGS</h3>
                <button className={styles.exportButton}>
                    <span>⬇️ Export CSV</span>
                </button>
            </div>

            <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>FILTER BY CLIENT:</label>
                <select
                    className={styles.filterSelect}
                    value={selectedClient}
                    onChange={(e) => setSelectedClient(e.target.value)}
                >
                    <option value="all">All Clients</option>
                    {demoLoginHistory.map((event) => (
                        <option key={event.id} value={event.email}>
                            {event.clientName}
                        </option>
                    ))}
                </select>
            </div>

            <div className={styles.loginTable}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email Address</th>
                            <th>IP Address</th>
                            <th>Device / Browser</th>
                            <th>Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredHistory.map((event) => (
                            <tr key={event.id}>
                                <td style={{ fontWeight: 500, color: '#0F172A' }}>{event.clientName}</td>
                                <td style={{ color: '#475569' }}>{event.email}</td>
                                <td style={{ fontFamily: 'monospace', color: '#64748B' }}>{event.ipAddress}</td>
                                <td className={styles.deviceCell} title={event.device}>{event.device}</td>
                                <td style={{ color: '#64748B', fontVariantNumeric: 'tabular-nums' }}>{event.loginAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
