'use client';

import React, { useEffect, useState } from 'react';

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
}

export default function QualificationStep({ data, updateData, onNext }: QualificationStepProps) {
    const [currentQIndex, setCurrentQIndex] = useState(0);
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

    const currentQuestion = questions[currentQIndex];

    const handleSelect = (value: string) => {
        updateData(currentQuestion.key as keyof QualificationData, value);

        // Auto-advance with a small delay for better UX
        setTimeout(() => {
            setAnimatingOut(true);
            setTimeout(() => {
                if (currentQIndex < questions.length - 1) {
                    setCurrentQIndex(prev => prev + 1);
                    setAnimatingOut(false);
                } else {
                    onNext();
                }
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
    }, [currentQIndex, currentQuestion]);

    return (
        <div style={{
            opacity: animatingOut ? 0 : 1,
            transform: animatingOut ? 'translateY(-10px)' : 'translateY(0)',
            transition: 'all 0.3s ease-out',
            padding: '1rem 0' // Added vertical padding
        }}>
            <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6B7280', fontSize: '0.9rem', fontWeight: '500' }}>
                <span>{currentQIndex + 1}</span>
                <span>/</span>
                <span>{questions.length}</span>
            </div>

            <h2 style={{
                fontSize: '2rem', // Increased font size
                fontWeight: '600',
                marginBottom: '3rem', // Increased margin
                color: '#111827',
                lineHeight: '1.3',
                animation: 'fadeInUp 0.5s ease-out'
            }}>
                {currentQuestion.label}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}> {/* Increased gap */}
                {currentQuestion.options.map((opt, index) => {
                    const isSelected = data[currentQuestion.key as keyof QualificationData] === opt.value;
                    return (
                        <button
                            key={opt.value}
                            onClick={() => handleSelect(opt.value)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.25rem', // Increased gap
                                padding: '1rem 1.25rem', // Increased padding
                                background: isSelected ? '#EFF6FF' : '#F9FAFB',
                                border: isSelected ? '1px solid #2563EB' : '1px solid transparent',
                                borderRadius: '6px', // Slightly larger radius
                                cursor: 'pointer',
                                textAlign: 'left',
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                width: '100%',
                                maxWidth: '600px', // Increased max-width
                                animation: `fadeInUp 0.5s ease-out forwards`,
                                animationDelay: `${index * 100}ms`,
                                opacity: 0,
                                transform: isSelected ? 'scale(1.02)' : 'scale(1)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#EFF6FF';
                                e.currentTarget.style.borderColor = '#BFDBFE';
                                e.currentTarget.style.transform = 'scale(1.02) translateX(5px)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                            }}
                            onMouseLeave={(e) => {
                                if (!isSelected) {
                                    e.currentTarget.style.background = '#F9FAFB';
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.transform = 'scale(1) translateX(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }
                            }}
                        >
                            <span style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '28px', // Larger key box
                                height: '28px',
                                background: isSelected ? '#2563EB' : '#FFFFFF',
                                color: isSelected ? '#FFFFFF' : '#374151',
                                border: isSelected ? 'none' : '1px solid #D1D5DB',
                                borderRadius: '4px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                transition: 'all 0.2s'
                            }}>
                                {opt.key}
                            </span>
                            <span style={{
                                fontSize: '1.1rem', // Larger text
                                color: isSelected ? '#1E3A8A' : '#374151',
                                fontWeight: isSelected ? '500' : '400'
                            }}>
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

            <div style={{ marginTop: '3.5rem', display: 'flex', gap: '1rem' }}> {/* Increased margin */}
                {currentQIndex > 0 && (
                    <button
                        onClick={() => setCurrentQIndex(prev => prev - 1)}
                        style={{
                            background: '#F3F4F6',
                            color: '#374151',
                            border: 'none',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '4px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#E5E7EB'}
                        onMouseLeave={(e) => e.currentTarget.style.background = '#F3F4F6'}
                    >
                        Previous
                    </button>
                )}
            </div>
        </div>
    );
}
