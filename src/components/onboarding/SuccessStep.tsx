'use client';

import React from 'react';
import styles from './Onboarding.module.css';

export default function SuccessStep() {
    return (
        <div className={styles.stepWrapper} style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ 
                width: '80px', 
                height: '80px', 
                background: '#DCFCE7', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 2rem auto',
                color: '#16A34A',
                animation: 'scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>

            <h2 className={styles.stepTitle} style={{ marginBottom: '1rem' }}>
                You're All Set!
            </h2>
            
            <p className={styles.stepDescription} style={{ margin: '0 auto 3rem auto' }}>
                Your strategy session has been confirmed. We've sent a calendar invitation and the architecture diagram to your email.
            </p>

            <div style={{ 
                background: '#F9FAFB', 
                padding: '2rem', 
                borderRadius: '16px', 
                border: '1px solid #E5E7EB',
                maxWidth: '500px',
                margin: '0 auto'
            }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>
                    What happens next?
                </h3>
                <ul style={{ 
                    textAlign: 'left', 
                    listStyle: 'none', 
                    padding: 0, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '1rem' 
                }}>
                    <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'start', color: '#4B5563' }}>
                        <span style={{ color: '#2563EB', fontWeight: 'bold' }}>1.</span>
                        <span>Check your email for the meeting link.</span>
                    </li>
                    <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'start', color: '#4B5563' }}>
                        <span style={{ color: '#2563EB', fontWeight: 'bold' }}>2.</span>
                        <span>Review the architecture diagram we sent.</span>
                    </li>
                    <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'start', color: '#4B5563' }}>
                        <span style={{ color: '#2563EB', fontWeight: 'bold' }}>3.</span>
                        <span>Prepare any specific questions for our team.</span>
                    </li>
                </ul>
            </div>
            
            <div style={{ marginTop: '3rem' }}>
                <a href="/" style={{ 
                    color: '#2563EB', 
                    fontWeight: '600', 
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    Return to Homepage
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
}
