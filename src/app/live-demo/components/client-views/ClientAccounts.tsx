'use client';

import styles from '../../demo.module.css';

export default function ClientAccounts() {
    const accountTypes = [
        {
            name: 'ECN',
            badge: 'Good',
            badgeIcon: '⭐',
            minDeposit: '0 USD',
            spread: 'From 200',
            commission: '0',
            leverage: '100',
        },
        {
            name: 'Pro',
            badge: 'Professional',
            badgeIcon: '⭐',
            minDeposit: '0 USD',
            spread: 'No spread',
            commission: 'No commission',
            leverage: '---',
        },
        {
            name: 'Superfast',
            badge: 'Professional',
            badgeIcon: '⭐',
            minDeposit: '0 USD',
            spread: 'No spread',
            commission: 'No commission',
            leverage: '---',
        },
        {
            name: 'Standard',
            badge: 'Pro',
            badgeIcon: '⭐',
            minDeposit: '0 USD',
            spread: 'From 200',
            commission: '0',
            leverage: '100',
        }
    ];

    return (
        <div className={styles.clientViewContainer} style={{ background: '#FFFFFF', minHeight: '100%', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>←</button>
                    <h1 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#111827', margin: 0 }}>Open New Account</h1>
                </div>
                <span style={{ fontWeight: '700', fontSize: '1.2rem' }}>MT5</span>
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <select style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #D1D5DB',
                    width: '200px',
                    fontSize: '1rem',
                    color: '#111827',
                    background: 'white'
                }}>
                    <option>REAL</option>
                    <option>DEMO</option>
                </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                {accountTypes.map((type, index) => (
                    <div key={index} style={{
                        border: '1px solid #E5E7EB',
                        borderRadius: '12px',
                        padding: '2rem 1.5rem',
                        textAlign: 'center',
                        background: 'white',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem' }}>{type.name}</h3>

                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: '#F3F4F6',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '100px',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            marginBottom: '2rem'
                        }}>
                            <span>{type.badgeIcon}</span>
                            <span>{type.badge}</span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                <span style={{ color: '#6B7280' }}>minDeposit</span>
                                <span style={{ fontWeight: '600' }}>{type.minDeposit}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                <span style={{ color: '#6B7280' }}>spread</span>
                                <span style={{ fontWeight: '600' }}>{type.spread}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                <span style={{ color: '#6B7280' }}>commission</span>
                                <span style={{ fontWeight: '600' }}>{type.commission}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                <span style={{ color: '#6B7280' }}>leverage</span>
                                <span style={{ fontWeight: '600' }}>{type.leverage}</span>
                            </div>
                        </div>

                        <button style={{
                            width: '100%',
                            background: '#1F2937',
                            color: 'white',
                            border: 'none',
                            padding: '0.75rem',
                            borderRadius: '6px',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}>
                            Select Plan
                        </button>
                    </div>
                ))}
            </div>

            <div style={{
                background: '#EFF6FF',
                border: '1px solid #DBEAFE',
                borderRadius: '8px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                color: '#1E40AF',
                fontSize: '0.9rem'
            }}>
                <span style={{ fontSize: '1.2rem' }}>ⓘ</span>
                <span>Detailed information on our instruments and trading conditions can be found on the <strong style={{ textDecoration: 'underline', cursor: 'pointer' }}>Contract Specifications page.</strong></span>
            </div>

            {/* Footer Disclaimer (Reused from Overview for consistency) */}
            <div style={{ marginTop: '4rem', borderTop: '1px solid #E5E7EB', paddingTop: '2rem', color: '#6B7280', fontSize: '0.75rem', lineHeight: '1.5' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
                    <div>
                        <p style={{ marginBottom: '1rem' }}>FxTrusts technologies Limited (Reg. No. 2024-00752) — Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.</p>
                        <p style={{ marginBottom: '1rem' }}>The information on this website may only be copied with the express written permission of FxTrusts technologies. General Risk Warning: CFDs are leveraged products. Trading in CFDs carries a high level of risk thus may not be appropriate for all investors. The investment value can both increase and decrease and the investors may lose all their invested capital. Under no circumstances shall the Company have any liability to any person or entity for any loss or damage in whole or part caused by, resulting from, or relating to any transactions related to CFDs. Learn more</p>
                    </div>
                    <div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>Privacy policy</li>
                            <li>Terms and conditions</li>
                            <li>Risk Disclosure for Financial Instruments</li>
                            <li>Preventing Money Laundering</li>
                            <li>Legal documents</li>
                            <li>Complaints Handling Policy</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem', fontWeight: '600' }}>
                    © 2025. FxTrusts technologies
                </div>
            </div>
        </div>
    );
}
