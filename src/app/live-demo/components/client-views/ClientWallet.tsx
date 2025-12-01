'use client';

import styles from '../../demo.module.css';

export default function ClientWallet() {
    const paymentMethods = [
        {
            name: 'Bank deposit',
            icon: '🏦',
            iconColor: '#10B981',
            processingTime: '30 minutes - 1 hour',
            fee: '0%',
            limits: '50 - 2,000 USD',
            available: true
        },
        {
            name: 'Tether (USDT TRC20)',
            icon: '₮',
            iconColor: '#10B981',
            processingTime: 'Instant - 15 minutes',
            fee: '0%',
            limits: '10 - 10,000,000 USD',
            available: true
        },
        {
            name: 'BinancePay',
            icon: '🔶',
            iconColor: '#F59E0B',
            processingTime: 'Instant - 30 minutes',
            fee: '0%',
            limits: '10 - 20,000 USD',
            available: false
        },
        {
            name: 'Bitcoin (BTC)',
            icon: '₿',
            iconColor: '#F59E0B',
            processingTime: 'Instant - 1 hour',
            fee: '0%',
            limits: '10 - 10,000,000 USD',
            available: false
        },
        {
            name: 'Neteller',
            icon: 'N',
            iconColor: '#84CC16',
            processingTime: 'Instant - 30 minutes',
            fee: '0%',
            limits: '10 - 50,000 USD',
            available: false
        },
        {
            name: 'Skrill',
            icon: 'S',
            iconColor: '#8B5CF6',
            processingTime: 'Instant - 30 minutes',
            fee: '0%',
            limits: '10 - 100,000 USD',
            available: false
        },
        {
            name: 'SticPay',
            icon: 'S',
            iconColor: '#EF4444',
            processingTime: 'Instant - 30 minutes',
            fee: '0%',
            limits: '10 - 10,000 USD',
            available: false
        },
        {
            name: 'UPI ID',
            icon: '▶',
            iconColor: '#F97316',
            processingTime: 'Instant - 45 minutes',
            fee: '0%',
            limits: '20 - 530 USD',
            available: false
        }
    ];

    return (
        <div className={styles.clientViewContainer} style={{ background: '#FFFFFF', minHeight: '100%', padding: '2rem' }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#111827', marginBottom: '2rem' }}>Deposit</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
                {paymentMethods.map((method, index) => (
                    <div key={index} style={{
                        border: '1px solid #E5E7EB',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        background: 'white',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                        position: 'relative'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    background: method.available ? '#ECFDF5' : '#F3F4F6',
                                    color: method.available ? '#10B981' : '#9CA3AF',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '700'
                                }}>
                                    {method.icon}
                                </div>
                                <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: 0 }}>{method.name}</h3>
                            </div>
                            {!method.available && (
                                <div style={{
                                    background: '#FEF3C7',
                                    color: '#D97706',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '100px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.25rem'
                                }}>
                                    <span>🔒</span> Unavailable
                                </div>
                            )}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#6B7280' }}>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <span>Processing time</span>
                                <span style={{ fontWeight: '600', color: '#111827' }}>{method.processingTime}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <span>Fee</span>
                                <span style={{ fontWeight: '600', color: '#111827' }}>{method.fee}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <span>Limits</span>
                                <span style={{ fontWeight: '600', color: '#111827' }}>{method.limits}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
