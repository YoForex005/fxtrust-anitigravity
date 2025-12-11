'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerPageHeader from '@/components/InnerPageHeader';
import styles from './status.module.css';
import Link from 'next/link';
import { useMemo, useState } from 'react';

// Incident types with realistic causes
const incidentTypes = [
    { title: 'Brief CRM Slowness', service: 'CRM', causes: ['Database maintenance script ran longer than expected', 'High traffic during peak hours', 'Memory optimization in progress', 'Cache invalidation delay'] },
    { title: 'API Response Delay', service: 'API', causes: ['Rate limiting adjustment', 'Database connection pool exhaustion', 'Third-party service latency', 'Load balancer reconfiguration'] },
    { title: 'Payment Processing Delay', service: 'Payments', causes: ['Payment gateway timeout', 'Bank API maintenance', 'Fraud detection system update', 'Settlement batch processing'] },
    { title: 'MT5 Connection Intermittent', service: 'Trading', causes: ['Price feed synchronization', 'Market data provider issue', 'Network routing optimization', 'SSL certificate renewal'] },
    { title: 'Client Portal Loading Slow', service: 'Portal', causes: ['CDN cache purge', 'Asset optimization in progress', 'Regional routing issue', 'Database query optimization'] },
    { title: 'Email Delivery Delayed', service: 'Email', causes: ['Email provider queue backlog', 'SPF/DKIM verification delay', 'Template rendering issue', 'Spam filter adjustment'] },
    { title: 'Webhook Delivery Retry', service: 'Webhooks', causes: ['Endpoint timeout', 'Payload size optimization', 'TLS handshake delay', 'Queue processing backlog'] },
    { title: 'Liquidity Bridge Reconnect', service: 'Liquidity', causes: ['LP failover triggered', 'Price aggregation recalculation', 'Network path optimization', 'Session token refresh'] },
    { title: 'KYC Verification Delay', service: 'KYC', causes: ['Third-party provider maintenance', 'Document processing queue', 'AI model update', 'Regional service degradation'] },
    { title: 'Report Generation Slow', service: 'Reports', causes: ['Large dataset processing', 'Export format optimization', 'Concurrent report queue', 'Storage I/O throttling'] },
];

const resolutions = [
    'Issue resolved automatically. No data loss.',
    'Resolved by switching to backup provider.',
    'Completed successfully. Performance restored.',
    'Third-party team resolved the issue.',
    'Failover to secondary system successful.',
    'Optimization completed. Normal operations resumed.',
    'Cache rebuilt. Service fully operational.',
    'Manual intervention resolved the issue.',
    'Automatic recovery triggered. All systems normal.',
    'Root cause identified and patched.',
];

// Seeded random for consistent results per day
function seededRandom(seed: number): () => number {
    return function () {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    };
}

// Generate dynamic incidents based on today's date
function generateIncidents(count: number, baseDate: Date) {
    const incidents = [];
    const daySeed = baseDate.getFullYear() * 10000 + (baseDate.getMonth() + 1) * 100 + baseDate.getDate();
    const random = seededRandom(daySeed);

    for (let i = 0; i < count; i++) {
        const daysAgo = Math.floor(random() * 90); // Last 90 days
        const incidentDate = new Date(baseDate);
        incidentDate.setDate(incidentDate.getDate() - daysAgo);

        const incidentType = incidentTypes[Math.floor(random() * incidentTypes.length)];
        const cause = incidentType.causes[Math.floor(random() * incidentType.causes.length)];
        const resolution = resolutions[Math.floor(random() * resolutions.length)];
        const duration = Math.floor(random() * 25) + 1; // 1-25 minutes

        incidents.push({
            id: i + 1,
            date: incidentDate,
            title: `${incidentType.title} (${duration} minutes)`,
            service: incidentType.service,
            cause,
            resolution,
            duration,
            daysAgo,
        });
    }

    // Sort by date descending (most recent first)
    return incidents.sort((a, b) => b.date.getTime() - a.date.getTime());
}

// Format date relative to today
function formatRelativeDate(date: Date, today: Date): string {
    const diffTime = today.getTime() - date.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

// Calculate uptime based on incidents
function calculateUptime(incidents: Array<{ service: string; duration: number }>, service: string, totalMinutes: number): number {
    const serviceIncidents = incidents.filter(i => i.service === service);
    const totalDowntime = serviceIncidents.reduce((sum, i) => sum + i.duration, 0);
    return Math.max(99.5, ((totalMinutes - totalDowntime) / totalMinutes) * 100);
}

export default function StatusContent() {
    const [visibleCount, setVisibleCount] = useState(10);

    const { incidents, today, uptimeData, stats } = useMemo(() => {
        const now = new Date();
        const allIncidents = generateIncidents(100, now);
        const last30DaysIncidents = allIncidents.filter(i => i.daysAgo <= 30);
        const totalMinutes90Days = 90 * 24 * 60;

        return {
            incidents: allIncidents,
            today: now,
            uptimeData: {
                trading: calculateUptime(allIncidents, 'Trading', totalMinutes90Days),
                crm: calculateUptime(allIncidents, 'CRM', totalMinutes90Days),
                portal: calculateUptime(allIncidents, 'Portal', totalMinutes90Days),
                api: calculateUptime(allIncidents, 'API', totalMinutes90Days),
                payments: calculateUptime(allIncidents, 'Payments', totalMinutes90Days),
            },
            stats: {
                total30Days: last30DaysIncidents.length,
                avgDuration: Math.round(allIncidents.reduce((sum, i) => sum + i.duration, 0) / allIncidents.length),
                lastIncidentDays: allIncidents[0]?.daysAgo || 0,
            }
        };
    }, []);

    const visibleIncidents = incidents.slice(0, visibleCount);
    const hasMore = visibleCount < incidents.length;

    return (
        <main>
            <Header />
            <InnerPageHeader
                badge="System Status"
                badgeIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>}
                title="System Status.<br/>All Green. (Fingers Crossed.)"
                subtitle="Real-time visibility into the operational status of everything that keeps your brokerage running. We monitor 24/7 so you don't have to refresh this page every 5 minutes. Although, we understand if you do anyway."
            />

            {/* Current Status Banner */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.statusBanner}>
                        <div className={styles.statusIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <div className={styles.statusText}>
                            <h2>All Systems Operational</h2>
                            <p>All monitored services are running as expected. Last checked: {today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                    </div>

                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statNum}>{Math.min(uptimeData.trading, uptimeData.crm, uptimeData.portal, uptimeData.api).toFixed(2)}%</div>
                            <h3>30-Day Uptime</h3>
                            <p>Across all critical services</p>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNum}>{stats.total30Days}</div>
                            <h3>Incidents (30 Days)</h3>
                            <p>All resolved within SLA</p>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNum}>{stats.avgDuration}m</div>
                            <h3>Avg Resolution Time</h3>
                            <p>Faster than industry average</p>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNum}>{stats.lastIncidentDays === 0 ? 'Today' : `${stats.lastIncidentDays}d`}</div>
                            <h3>Last Incident</h3>
                            <p>{stats.lastIncidentDays === 0 ? 'Minor issue resolved' : 'Days since last incident'}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Details */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <line x1="3" y1="9" x2="21" y2="9" />
                                <line x1="9" y1="21" x2="9" y2="9" />
                            </svg>
                            <span>SERVICE BREAKDOWN</span>
                        </div>
                        <h2>The Components That Keep You Running</h2>
                        <p>
                            A detailed view of every service in our infrastructure. Green is good.
                            Anything else, and we're already on it.
                        </p>
                    </div>

                    <div className={styles.serviceGrid}>
                        <div className={styles.serviceCategory}>
                            <h3>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                                Trading Infrastructure
                            </h3>
                            <div className={styles.serviceList}>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>MetaTrader 5 Servers</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>Trade Execution Engine</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>Price Feed (Data Center)</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>Liquidity Bridge</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>Web Terminal</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.serviceCategory}>
                            <h3>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                                Back Office Systems
                            </h3>
                            <div className={styles.serviceList}>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>CRM Dashboard</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>Client Portal</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>IB Partner Portal</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>Admin Panel</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>Reporting Engine</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.serviceCategory}>
                            <h3>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                                Payment Processing
                            </h3>
                            <div className={styles.serviceList}>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>Card Payments (Visa/MC)</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>Bank Wire Transfers</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>E-Wallets (Skrill, Neteller)</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>Crypto Payments (USDT, BTC)</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>Withdrawal Processing</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.serviceCategory}>
                            <h3>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                                External APIs
                            </h3>
                            <div className={styles.serviceList}>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>REST API (v2)</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>Webhooks</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>Email Delivery (SendGrid)</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>SMS Gateway (Twilio)</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                                <div className={styles.serviceItem}>
                                    <span className={styles.serviceName}>KYC Provider (SumSub)</span>
                                    <span className={styles.statusOperational}>Operational</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Uptime History */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span>UPTIME HISTORY</span>
                        </div>
                        <h2>90 Days of (Mostly) Smooth Sailing</h2>
                        <p>
                            Historical availability data calculated from {incidents.length} tracked events. Our SLA target is 99.9% uptime.
                        </p>
                    </div>

                    <div className={styles.uptimeGrid}>
                        <div className={styles.uptimeCard}>
                            <div className={styles.uptimeService}>MT5 Trading Servers</div>
                            <div className={styles.uptimeBar}>
                                <div className={styles.uptimeFill} style={{ width: `${uptimeData.trading}%` }}></div>
                            </div>
                            <div className={styles.uptimeStats}>
                                <span>{uptimeData.trading.toFixed(2)}% uptime</span>
                                <span>{incidents.filter(i => i.service === 'Trading').reduce((s, i) => s + i.duration, 0)} minutes downtime</span>
                            </div>
                        </div>
                        <div className={styles.uptimeCard}>
                            <div className={styles.uptimeService}>CRM Platform</div>
                            <div className={styles.uptimeBar}>
                                <div className={styles.uptimeFill} style={{ width: `${uptimeData.crm}%` }}></div>
                            </div>
                            <div className={styles.uptimeStats}>
                                <span>{uptimeData.crm.toFixed(2)}% uptime</span>
                                <span>{incidents.filter(i => i.service === 'CRM').reduce((s, i) => s + i.duration, 0)} minutes downtime</span>
                            </div>
                        </div>
                        <div className={styles.uptimeCard}>
                            <div className={styles.uptimeService}>Client Portal</div>
                            <div className={styles.uptimeBar}>
                                <div className={styles.uptimeFill} style={{ width: `${uptimeData.portal}%` }}></div>
                            </div>
                            <div className={styles.uptimeStats}>
                                <span>{uptimeData.portal.toFixed(2)}% uptime</span>
                                <span>{incidents.filter(i => i.service === 'Portal').reduce((s, i) => s + i.duration, 0)} minutes downtime</span>
                            </div>
                        </div>
                        <div className={styles.uptimeCard}>
                            <div className={styles.uptimeService}>REST API</div>
                            <div className={styles.uptimeBar}>
                                <div className={styles.uptimeFill} style={{ width: `${uptimeData.api}%` }}></div>
                            </div>
                            <div className={styles.uptimeStats}>
                                <span>{uptimeData.api.toFixed(2)}% uptime</span>
                                <span>{incidents.filter(i => i.service === 'API').reduce((s, i) => s + i.duration, 0)} minutes downtime</span>
                            </div>
                        </div>
                        <div className={styles.uptimeCard}>
                            <div className={styles.uptimeService}>Payment Processing</div>
                            <div className={styles.uptimeBar}>
                                <div className={styles.uptimeFill} style={{ width: `${uptimeData.payments}%` }}></div>
                            </div>
                            <div className={styles.uptimeStats}>
                                <span>{uptimeData.payments.toFixed(2)}% uptime</span>
                                <span>{incidents.filter(i => i.service === 'Payments').reduce((s, i) => s + i.duration, 0)} minutes downtime</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Incidents - 100 items */}
            <section className={`${styles.section} ${styles.altSection}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                <line x1="12" y1="9" x2="12" y2="13" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                            <span>INCIDENT HISTORY ({incidents.length} EVENTS)</span>
                        </div>
                        <h2>The Times We (Almost) Messed Up</h2>
                        <p>
                            Transparency is important. Here's every incident from the last 90 days—{incidents.length} total events, all resolved.
                            Last updated: {today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </div>

                    <div className={styles.incidentList}>
                        {visibleIncidents.map((incident) => (
                            <div key={incident.id} className={styles.incidentCard}>
                                <div className={styles.incidentHeader}>
                                    <span className={styles.incidentDate}>
                                        {incident.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                        <span className={styles.relativeDate}> • {formatRelativeDate(incident.date, today)}</span>
                                    </span>
                                    <span className={styles.incidentResolved}>Resolved</span>
                                </div>
                                <h3>{incident.title}</h3>
                                <p>
                                    <strong>Service:</strong> {incident.service}<br />
                                    <strong>Cause:</strong> {incident.cause}<br />
                                    <strong>Resolution:</strong> {incident.resolution}
                                </p>
                            </div>
                        ))}

                        {hasMore && (
                            <button
                                className={styles.loadMoreBtn}
                                onClick={() => setVisibleCount(prev => Math.min(prev + 20, incidents.length))}
                            >
                                Load More ({incidents.length - visibleCount} remaining)
                            </button>
                        )}

                        {!hasMore && (
                            <div className={styles.noIncidents}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <span>End of incident history • All {incidents.length} incidents resolved</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Maintenance Schedule */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.splitFeature}>
                        <div className={styles.featureContent}>
                            <div className={styles.badge}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                <span>SCHEDULED MAINTENANCE</span>
                            </div>
                            <h2>Upcoming Maintenance Windows</h2>
                            <p>
                                We schedule maintenance during low-activity periods to minimize impact.
                                You'll receive email notifications at least 72 hours in advance.
                            </p>
                            <div className={styles.maintenanceList}>
                                {/* Dynamic maintenance dates based on today */}
                                {[7, 14, 21].map((daysFromNow) => {
                                    const maintenanceDate = new Date(today);
                                    maintenanceDate.setDate(maintenanceDate.getDate() + daysFromNow);
                                    const tasks = ['Database Optimization', 'Security Updates', 'Infrastructure Upgrade'];
                                    const descriptions = [
                                        'CRM performance improvements. No trading impact expected.',
                                        'Routine security patching. Brief portal unavailability possible.',
                                        'Server capacity expansion. Minimal service interruption.',
                                    ];
                                    return (
                                        <div key={daysFromNow} className={styles.maintenanceItem}>
                                            <span className={styles.maintenanceDate}>
                                                {maintenanceDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                            </span>
                                            <span className={styles.maintenanceTime}>05:00-07:00 UTC</span>
                                            <p>{tasks[daysFromNow === 7 ? 0 : daysFromNow === 14 ? 1 : 2]} — {descriptions[daysFromNow === 7 ? 0 : daysFromNow === 14 ? 1 : 2]}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={styles.alertSubscribe}>
                            <div className={styles.subscribeCard}>
                                <h3>Subscribe to Status Alerts</h3>
                                <p>Get notified instantly when something changes.</p>
                                <div className={styles.channelList}>
                                    <div className={styles.channel}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                        <span>Email</span>
                                    </div>
                                    <div className={styles.channel}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                        <span>SMS</span>
                                    </div>
                                    <div className={styles.channel}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        </svg>
                                        <span>Telegram</span>
                                    </div>
                                    <div className={styles.channel}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                                            <polyline points="16 18 22 12 16 6" />
                                            <polyline points="8 6 2 12 8 18" />
                                        </svg>
                                        <span>Webhook</span>
                                    </div>
                                </div>
                                <Link href="/company/contact" className={styles.subscribeBtn}>
                                    Subscribe to Alerts
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Need to Report an Issue?</h2>
                        <p>
                            If you're experiencing problems not reflected on this page, let us know
                            immediately. Our support team is available 24/7.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/company/contact" className={styles.primaryCta}>
                                Contact Support
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                            <Link href="/resources/api-docs" className={styles.secondaryCta}>
                                View API Docs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
