'use client';

import React, { useState } from 'react';
import styles from './Onboarding.module.css';
import CalendlyScheduler from './CalendlyScheduler';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface BookingStepProps {
    onBack: () => void;
    onComplete: (payload: any) => void;
    contactData: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    };
}

export default function BookingStep({ onBack, onComplete, contactData }: BookingStepProps) {
    const [isLoading, setIsLoading] = useState(true);

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

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <motion.div 
            className={styles.stepWrapper}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className={styles.stepIndicator} variants={itemVariants}>
                <span>6</span>
                <span>/</span>
                <span>6</span>
            </motion.div>

            <motion.h2 className={styles.stepTitle} variants={itemVariants}>
                Final Step. Pick a time.
            </motion.h2>
            <motion.p className={styles.stepDescription} variants={itemVariants}>
                30 minute strategy session. No sales fluff.
            </motion.p>

            <div style={{ width: '100%', minHeight: '800px', marginBottom: '2rem', position: 'relative' }}>
                <AnimatePresence>
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: 'rgba(255,255,255,0.8)',
                                zIndex: 10
                            }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                style={{
                                    width: 40,
                                    height: 40,
                                    border: '4px solid #F3F4F6',
                                    borderTop: '4px solid #2563EB',
                                    borderRadius: '50%'
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <CalendlyScheduler
                    url={calendarUrl}
                    onEventScheduled={onComplete}
                    style={{ width: '100%', minHeight: '800px' }}
                    onLoad={() => {
                        // Use a slight delay to ensure the widget actually renders
                        setTimeout(() => setIsLoading(false), 1000);
                    }}
                />
            </div>

            <motion.div className={styles.navButtons} variants={itemVariants}>
                <motion.button
                    onClick={onBack}
                    className={styles.backBtn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Back
                </motion.button>
            </motion.div>
        </motion.div>
    );
}
