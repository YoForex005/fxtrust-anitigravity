'use client';

import React, { useEffect, useState } from 'react';
import styles from './Onboarding.module.css';
import { motion, Variants } from 'framer-motion';

interface QualificationData {
    businessModel: string;
    status: string;
    techNeeds: string;
    timeline: string;
}

interface QualificationStepProps {
    data: QualificationData;
    updateData: (key: keyof QualificationData, value: string) => void;
    onNext: () => void;
    step: number; // Add step prop
}

export default function QualificationStep({ data, updateData, onNext, step }: QualificationStepProps) {
    const [animatingOut, setAnimatingOut] = useState(false);

    const questions = [
        {
            key: 'businessModel',
            label: "What business model are you launching?",
            options: [
                { key: 'A', value: 'retail_broker', label: "Retail Brokerage (Forex/CFD)" },
                { key: 'B', value: 'prop_firm', label: "Prop Firm (Funded Trader Model)" },
                { key: 'C', value: 'crypto_exchange', label: "Crypto Exchange" },
                { key: 'D', value: 'liquidity', label: "Liquidity / Institutional" },
            ]
        },
        {
            key: 'status',
            label: "What is your current operational status?",
            options: [
                { key: 'A', value: 'new_startup', label: "New Startup (Pre-launch)" },
                { key: 'B', value: 'existing', label: "Existing Operation (Migrating)" },
                { key: 'C', value: 'scaling', label: "Scaling (High Volume)" },
                { key: 'D', value: 'researching', label: "Just Researching" },
            ]
        },
        {
            key: 'techNeeds',
            label: "What technology do you primarily need?",
            options: [
                { key: 'A', value: 'full_turnkey', label: "Full White Label (Turnkey)" },
                { key: 'B', value: 'crm_only', label: "Just CRM / Back Office" },
                { key: 'C', value: 'liquidity_only', label: "Liquidity Only" },
                { key: 'D', value: 'prop_tech', label: "Prop Firm Challenge Engine" },
            ]
        },
        {
            key: 'timeline',
            label: "When are you looking to go live?",
            options: [
                { key: 'A', value: 'asap', label: "Immediately (ASAP)" },
                { key: 'B', value: '30_days', label: "Within 30 Days" },
                { key: 'C', value: 'quarter', label: "Next Quarter" },
                { key: 'D', value: 'unsure', label: "Not Sure Yet" },
            ]
        }
    ];

    // Determine current question based on step (1-indexed)
    const currentQIndex = step - 1;
    const currentQuestion = questions[currentQIndex];

    const handleSelect = (value: string) => {
        updateData(currentQuestion.key as keyof QualificationData, value);

        // Auto-advance with a small delay for better UX
        setTimeout(() => {
            setAnimatingOut(true);
            setTimeout(() => {
                onNext();
                setAnimatingOut(false);
            }, 300);
        }, 300);
    };

    // Keyboard support
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            const key = e.key.toUpperCase();
            const option = currentQuestion.options.find(opt => opt.key === key);
            if (option) {
                handleSelect(option.value);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentQuestion]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    if (!currentQuestion) return null;

    return (
        <motion.div 
            className={styles.stepWrapper}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={currentQIndex} // Key ensures animation reruns when question changes
        >
            <motion.div className={styles.stepIndicator} variants={itemVariants}>
                <span>{step}</span>
                <span>/</span>
                <span>{questions.length + 2}</span>
            </motion.div>

            <motion.h2 className={styles.stepTitle} variants={itemVariants}>
                {currentQuestion.label}
            </motion.h2>

            <div className={styles.optionsGrid}>
                {currentQuestion.options.map((opt, index) => {
                    const isSelected = data[currentQuestion.key as keyof QualificationData] === opt.value;
                    return (
                        <motion.button
                            key={opt.value}
                            onClick={() => handleSelect(opt.value)}
                            className={`${styles.optionButton} ${isSelected ? styles.selected : ''}`}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, backgroundColor: '#F3F4F6' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className={styles.keyBox}>
                                {opt.key}
                            </span>
                            <span className={styles.optionLabel}>
                                {opt.label}
                            </span>
                            {isSelected && (
                                <motion.span 
                                    style={{ marginLeft: 'auto', color: '#2563EB' }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                </motion.span>
                            )}
                        </motion.button>
                    );
                })}
            </div>
            
        </motion.div>
    );
}
