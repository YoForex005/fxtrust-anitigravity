'use client';

import React, { useState } from 'react';
import QualificationStep from './QualificationStep';
import ContactStep from './ContactStep';
import BookingStep from './BookingStep';

export default function OnboardingWizard() {
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

    return (
        <div style={{
            width: '100%',
            maxWidth: '800px', // Increased from 600px
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '3rem', // Increased from 2rem
            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.05)', // Softer shadow
            position: 'relative',
            minHeight: '500px',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Progress Bar */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: '#F3F4F6',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
                overflow: 'hidden'
            }}>
                <div style={{
                    height: '100%',
                    background: '#2563EB',
                    width: `${(step / 6) * 100}%`,
                    transition: 'width 0.5s ease-in-out'
                }} />
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {step <= 4 && (
                    <QualificationStep
                        data={qualificationData}
                        updateData={updateQualification}
                        onNext={nextStep}
                    />
                )}
                {step === 5 && (
                    <ContactStep
                        data={contactData}
                        updateData={updateContact}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                )}
                {step === 6 && (
                    <BookingStep
                        onBack={prevStep}
                        onComplete={() => alert("Booking Confirmed! (Mock)")}
                    />
                )}
            </div>
        </div>
    );
}
