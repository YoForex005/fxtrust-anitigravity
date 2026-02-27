'use client';

import styles from '../../demo.module.css';

export default function ClientOverview() {
    return (
        <div className={styles.clientViewContainer} style={{ background: '#FFFFFF', minHeight: '100%' }}>
            {/* Top Bar with Balance (Placeholder for now, assuming global header handles this) */}

            {/* Banner */}
            <div style={{
                marginBottom: '2rem',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                background: 'linear-gradient(90deg, #2F4F4F 0%, #5F9EA0 100%)', // Placeholder gradient matching screenshot vibe
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 3rem'
            }}>
                <div style={{ color: 'white' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0, lineHeight: 1 }}>NO DEPOSIT</h2>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0, lineHeight: 1 }}>BONUS</h2>
                </div>
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <div style={{ fontSize: '3rem', fontWeight: '800' }}>150$</div>
                    <button style={{
                        background: 'white',
                        color: '#2F4F4F',
                        border: 'none',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '100px',
                        fontWeight: '700',
                        cursor: 'pointer'
                    }}>CLAIM NOW</button>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#111827', margin: 0 }}>My Accounts</h1>
                <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#F3F4F6',
                    border: 'none',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '6px',
                    fontWeight: '600',
                    color: '#374151',
                    cursor: 'pointer'
                }}>
                    <span>+</span> Open New Account
                </button>
            </div>

            {/* Tabs */}
            <div style={{ borderBottom: '1px solid #E5E7EB', marginBottom: '1.5rem', display: 'flex', gap: '2rem' }}>
                <button style={{
                    padding: '0.5rem 0',
                    borderBottom: '2px solid #008080',
                    color: '#008080',
                    fontWeight: '600',
                    background: 'none',
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    cursor: 'pointer'
                }}>Real</button>
                <button style={{
                    padding: '0.5rem 0',
                    borderBottom: '2px solid transparent',
                    color: '#6B7280',
                    fontWeight: '500',
                    background: 'none',
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    cursor: 'pointer'
                }}>Demo</button>
            </div>

            {/* Account Selector */}
            <div style={{ marginBottom: '1.5rem' }}>
                <select style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #D1D5DB',
                    width: '200px',
                    fontSize: '1rem',
                    color: '#111827',
                    background: 'white'
                }}>
                    <option>200008</option>
                    <option>200009</option>
                </select>
            </div>

            {/* Account Card */}
            <div style={{
                background: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
                {/* Top Row Placeholders */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} style={{ height: '12px', width: '100px', background: '#F3F4F6', borderRadius: '100px' }}></div>
                    ))}
                </div>

                {/* Middle Row Placeholders */}
                <div style={{ height: '20px', width: '200px', background: '#F3F4F6', borderRadius: '4px', marginBottom: '2rem' }}></div>

                {/* Actions Row */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginBottom: '2rem', borderBottom: '1px dashed #E5E7EB', paddingBottom: '2rem' }}>
                    <button style={{
                        background: '#064E3B',
                        color: 'white',
                        border: 'none',
                        padding: '0.6rem 1.5rem',
                        borderRadius: '6px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer'
                    }}>
                        <span>⚡</span> Trade
                    </button>
                    <button style={{
                        background: '#F9FAFB',
                        color: '#111827',
                        border: '1px solid #E5E7EB',
                        padding: '0.6rem 1.5rem',
                        borderRadius: '6px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer'
                    }}>
                        <span>⬇️</span> Deposit
                    </button>
                    <button style={{
                        background: '#F9FAFB',
                        color: '#111827',
                        border: '1px solid #E5E7EB',
                        padding: '0.6rem 1.5rem',
                        borderRadius: '6px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer'
                    }}>
                        <span>⬆️</span> Withdraw
                    </button>
                    <button style={{
                        background: '#F9FAFB',
                        color: '#111827',
                        border: '1px solid #E5E7EB',
                        padding: '0.6rem 1rem',
                        borderRadius: '6px',
                        cursor: 'pointer'
                    }}>⋮</button>
                </div>

                {/* Info Rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ height: '12px', width: '150px', background: '#F3F4F6', borderRadius: '100px' }}></div>
                            <div style={{ height: '12px', width: '100px', background: '#F3F4F6', borderRadius: '100px' }}></div>
                        </div>
                    ))}
                </div>

                {/* Footer Actions */}
                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '2rem', color: '#9CA3AF', fontSize: '0.9rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ width: '40px', height: '12px', background: '#F3F4F6', borderRadius: '4px' }}></span>
                            <span>Server:</span>
                            <span style={{ width: '60px', height: '12px', background: '#E5E7EB', borderRadius: '4px' }}></span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>MT5 login:</span>
                            <span style={{ width: '60px', height: '12px', background: '#E5E7EB', borderRadius: '4px' }}></span>
                        </div>
                    </div>
                    <button style={{
                        background: '#F3F4F6',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#111827',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer'
                    }}>
                        <span>✏️</span> Change trading password
                    </button>
                </div>
            </div>

            {/* Footer Disclaimer */}
            <div style={{ marginTop: '4rem', borderTop: '1px solid #E5E7EB', paddingTop: '2rem', color: '#6B7280', fontSize: '0.75rem', lineHeight: '1.5' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
                    <div>
                        <p style={{ marginBottom: '1rem' }}>FxTrusts technologies Limited (Reg. No. 2024-00752) — Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.</p>
                        <p style={{ marginBottom: '1rem' }}>The information on this website may only be copied with the express written permission of FxTrusts technologies. General Risk Warning: CFDs are leveraged products. Trading in CFDs carries a high level of risk thus may not be appropriate for all investors. The investment value can both increase and decrease and the investors may lose all their invested capital. Under no circumstances shall the Company have any liability to any person or entity for any loss or damage in whole or part caused by, resulting from, or relating to any transactions related to CFDs. Learn more</p>
                        <p>FxTrusts technologies complies with the Payment Card Industry Data Security Standard (PCI DSS) to ensure your security and privacy. We conduct regular vulnerability scans and penetration tests in accordance with the PCI DSS requirements for our business model.</p>
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
