'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import QualificationStep from './QualificationStep';
import ContactStep from './ContactStep';
import BookingStep from './BookingStep';
import styles from './Onboarding.module.css';

export default function OnboardingWizard() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [qualificationData, setQualificationData] = useState({
        businessModel: '',
        status: '',
        techNeeds: '',
        timeline: ''
    });
    const [contactData, setContactData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        phone: '',
        telegram: ''
    });

    const updateQualification = (key: string, value: string) => {
        setQualificationData(prev => ({ ...prev, [key]: value }));
    };

    const updateContact = (key: string, value: string) => {
        setContactData(prev => ({ ...prev, [key]: value }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);
    
    const handleContactNext = async () => {
        try {
            await fetch('/api/signups/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    qualificationData,
                    contactData,
                }),
            });
        } catch (error) {
            console.error('Failed to save signup data', error);
        } finally {
            nextStep();
        }
    };

    const handleComplete = () => {
        console.log('Onboarding complete, redirecting to /thank-you');
        try {
            router.push('/thank-you');
        } catch (e) {
            console.error('router.push failed, falling back to window.location', e);
            if (typeof window !== 'undefined') {
                window.location.href = '/thank-you';
            }
        }
    };

    return (
        <div className={styles.wizardContainer}>
            {/* Progress Bar */}
            <div className={styles.progressBarContainer}>
                <div 
                    className={styles.progressBarFill}
                    style={{ width: `${(step / 6) * 100}%` }} 
                />
            </div>

            <div className={styles.stepContent}>
                {step <= 4 && (
                    <QualificationStep
                        data={qualificationData}
                        updateData={updateQualification}
                        onNext={nextStep}
                        step={step}
                    />
                )}
                {step === 5 && (
                    <ContactStep
                        data={contactData}
                        updateData={updateContact}
                        onNext={handleContactNext}
                        onBack={prevStep}
                    />
                )}
                {step === 6 && (
                    <BookingStep
                        onBack={prevStep}
                        onComplete={handleComplete}
                        contactData={contactData}
                    />
                )}
            </div>
        </div>
    );
}
