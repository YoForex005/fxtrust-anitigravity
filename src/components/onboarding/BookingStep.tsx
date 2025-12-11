'use client';

import React from 'react';
import styles from './Onboarding.module.css';
import CalendlyScheduler from './CalendlyScheduler';

interface BookingStepProps {
    onBack: () => void;
    onComplete: () => void;
    contactData: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    };
}

export default function BookingStep({ onBack, onComplete, contactData }: BookingStepProps) {
    // CALENDLY CONFIGURATION
    // Replace this with your actual Calendly link
    const calendlyBaseUrl = "https://calendly.com/fxtrusts-info/30min";
    
    const params = new URLSearchParams({
        name: `${contactData.firstName} ${contactData.lastName}`,
        email: contactData.email,
        // 'a1', 'a2', etc. can be used for custom questions if you know the order
        // e.g., a1: contactData.phone 
    });

    const calendarUrl = `${calendlyBaseUrl}?${params.toString()}`;

    return (
        <div className={styles.stepWrapper}>
            <div className={styles.stepIndicator}>
                <span>6</span>
                <span>/</span>
                <span>6</span>
            </div>

            <h2 className={styles.stepTitle}>
                Final Step. Pick a time.
            </h2>
            <p className={styles.stepDescription}>
                30 minute strategy session. No sales fluff.
            </p>

            <div style={{ width: '100%', minHeight: '1000px', marginBottom: '2rem' }}>
                <CalendlyScheduler
                    url={calendarUrl}
                    onEventScheduled={onComplete}
                    style={{ width: '100%', minHeight: '1000px' }}
                />
            </div>

            <div className={styles.navButtons}>
                <button
                    onClick={onBack}
                    className={styles.backBtn}
                >
                    Back
                </button>
            </div>
        </div>
    );
}
