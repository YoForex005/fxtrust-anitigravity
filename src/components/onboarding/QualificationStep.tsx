'use client';

import React, { useEffect, useState } from 'react';
import styles from './Onboarding.module.css';

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

    if (!currentQuestion) return null;

    return (
        <div 
            className={styles.stepWrapper}
            style={{
                opacity: animatingOut ? 0 : 1,
                transform: animatingOut ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'all 0.3s ease-out',
            }}
        >
            <div className={styles.stepIndicator}>
                <span>{step}</span>
                <span>/</span>
                <span>{questions.length + 2}</span> {/* Total steps including Contact & Booking */}
            </div>

            <h2 className={styles.stepTitle}>
                {currentQuestion.label}
            </h2>

            <div className={styles.optionsGrid}>
                {currentQuestion.options.map((opt, index) => {
                    const isSelected = data[currentQuestion.key as keyof QualificationData] === opt.value;
                    return (
                        <button
                            key={opt.value}
                            onClick={() => handleSelect(opt.value)}
                            className={`${styles.optionButton} ${isSelected ? styles.selected : ''}`}
                            style={{
                                animation: `fadeInUp 0.5s ease-out forwards`,
                                animationDelay: `${index * 100}ms`,
                                opacity: 0
                            }}
                        >
                            <span className={styles.keyBox}>
                                {opt.key}
                            </span>
                            <span className={styles.optionLabel}>
                                {opt.label}
                            </span>
                            {isSelected && (
                                <span style={{ marginLeft: 'auto', color: '#2563EB', animation: 'scaleIn 0.2s ease-out' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
            
            {/* Removed Previous button here as it's handled by parent or not needed for single question flow */}
        </div>
    );
}
