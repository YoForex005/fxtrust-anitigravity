'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import QualificationStep from './QualificationStep';
import ContactStep from './ContactStep';
import BookingStep from './BookingStep';
import styles from './Onboarding.module.css';
import { motion, AnimatePresence } from 'framer-motion';

// Extend Window interface for gtag
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

export default function OnboardingWizard() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [showIntro, setShowIntro] = useState(true);
    const [signupId, setSignupId] = useState<string | null>(null);
    const hasTrackedClick = useRef(false);

    // Track page load
    useEffect(() => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'conversion_event_book_appointment', {
                event_category: 'get_started',
                event_label: 'page_view'
            });
        }
    }, []);

    // Intro Animation Timer
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 2000); // 2 seconds intro
        return () => clearTimeout(timer);
    }, []);

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
        whatsapp: '',
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

    const handleContactSubmit = async () => {
        try {
            // Save initial contact data
            const response = await fetch('/api/signups/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contactData,
                    // Sending empty/partial qualificationData is now allowed by backend
                }),
            });

            const result = await response.json();
            if (result.success && result.signup && result.signup.id) {
                setSignupId(result.signup.id);
            }
        } catch (error) {
            console.error('Failed to save contact data', error);
        } finally {
            nextStep();
        }
    };

    // This is now called after Qualification (last step before booking)
    const handleQualificationComplete = async () => {
         try {
            const response = await fetch('/api/signups/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: signupId, // Pass the existing ID to update
                    qualificationData,
                    contactData,
                }),
            });

            const result = await response.json();
            if (result.success && result.signup && result.signup.id) {
                setSignupId(result.signup.id);
            }

            if (typeof window !== 'undefined') {
                sessionStorage.setItem('fxtrusts_onboarding_submitted', '1');
            }
        } catch (error) {
            console.error('Failed to save signup data', error);
        } finally {
            nextStep();
        }
    }

    const handleComplete = async (eventDetails?: any) => {
        console.log('Onboarding complete, saving meeting details...', eventDetails);
        
        if (signupId && eventDetails) {
            try {
                await fetch('/api/signups/update-meeting', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        id: signupId,
                        meetingDetails: {
                           eventUri: eventDetails.event.uri,
                           inviteeUri: eventDetails.invitee.uri
                        }
                    }),
                });
            } catch (error) {
                console.error('Failed to update meeting details', error);
            }
        }

        console.log('Redirecting to /thank-you');
        try {
            router.push('/thank-you');
        } catch (e) {
            console.error('router.push failed, falling back to window.location', e);
            if (typeof window !== 'undefined') {
                window.location.href = '/thank-you';
            }
        }
    };

    if (showIntro) {
        return (
            <motion.div 
                className={styles.introContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.h1 
                    className={styles.introTitle}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Let's Build Your Brokerage
                </motion.h1>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 200 }}
                    style={{ height: 4, background: '#2563EB', borderRadius: 2 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </motion.div>
        );
    }

    return (
        <motion.div 
            className={styles.wizardContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Progress Bar */}
            <div className={styles.progressBarContainer}>
                <div
                    className={styles.progressBarFill}
                    style={{ width: `${(step / 6) * 100}%` }}
                />
            </div>

            <div className={styles.stepContent}>
                 <AnimatePresence mode='wait'>
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ContactStep
                                data={contactData}
                                updateData={updateContact}
                                onNext={handleContactSubmit}
                                onBack={() => {}} // No back from step 1
                            />
                        </motion.div>
                    )}
                    {step >= 2 && step <= 5 && (
                        <motion.div
                             key={`step${step}`}
                             initial={{ opacity: 0, x: 20 }}
                             animate={{ opacity: 1, x: 0 }}
                             exit={{ opacity: 0, x: -20 }}
                             transition={{ duration: 0.3 }}
                        >
                            <QualificationStep
                                data={qualificationData}
                                updateData={updateQualification}
                                onNext={step === 5 ? handleQualificationComplete : nextStep}
                                step={step - 1} // QualificationStep expects 1-4, but current step is 2-5
                            />
                         </motion.div>
                    )}
                    {step === 6 && (
                        <motion.div
                             key="step6"
                             initial={{ opacity: 0, x: 20 }}
                             animate={{ opacity: 1, x: 0 }}
                             exit={{ opacity: 0, x: -20 }}
                             transition={{ duration: 0.3 }}
                        >
                            <BookingStep
                                onBack={prevStep}
                                onComplete={handleComplete}
                                contactData={contactData}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
