'use client';

import React, { useState } from 'react';

interface ContactData {
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    phone: string;
    telegram?: string;
}

interface ContactStepProps {
    data: ContactData;
    updateData: (key: keyof ContactData, value: string) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function ContactStep({ data, updateData, onNext, onBack }: ContactStepProps) {
    const [errors, setErrors] = useState<Partial<ContactData>>({});
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const validate = () => {
        const newErrors: Partial<ContactData> = {};
        if (!data.firstName) newErrors.firstName = "Required";
        if (!data.lastName) newErrors.lastName = "Required";
        if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) newErrors.email = "Invalid email";
        if (!data.companyName) newErrors.companyName = "Required";
        if (!data.phone) newErrors.phone = "Required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validate()) {
            onNext();
        }
    };

    const inputContainerStyle = {
        position: 'relative' as const,
        width: '100%'
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem 0', // Increased padding
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid #E5E7EB',
        fontSize: '1.35rem', // Increased font size
        outline: 'none',
        color: '#111827',
        fontFamily: 'inherit',
        transition: 'all 0.3s ease'
    };

    const labelStyle = {
        display: 'block',
        fontWeight: '500',
        color: '#6B7280',
        fontSize: '1rem', // Increased font size
        marginBottom: '0.5rem', // Increased margin
        transition: 'color 0.3s ease'
    };

    const renderInput = (key: keyof ContactData, label: string, placeholder: string, type: string = 'text', required: boolean = false) => {
        const isFocused = focusedField === key;
        const hasError = !!errors[key];

        return (
            <div style={inputContainerStyle}>
                <label style={{ ...labelStyle, color: isFocused ? '#111827' : '#6B7280' }}>
                    {label} {required && '*'}
                </label>
                <input
                    type={type}
                    value={data[key] || ''}
                    onChange={(e) => updateData(key, e.target.value)}
                    style={{
                        ...inputStyle,
                        borderBottomColor: hasError ? '#EF4444' : '#E5E7EB'
                    }}
                    placeholder={placeholder}
                    onFocus={() => setFocusedField(key)}
                    onBlur={() => setFocusedField(null)}
                />
                {/* Animated Border Line */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: '#111827',
                    transform: isFocused ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'center',
                    transition: 'transform 0.3s ease-out'
                }} />

                {hasError && (
                    <span style={{
                        color: '#EF4444',
                        fontSize: '0.85rem',
                        marginTop: '0.5rem',
                        display: 'block',
                        animation: 'fadeInUp 0.3s ease-out'
                    }}>
                        {errors[key]}
                    </span>
                )}
            </div>
        );
    };

    return (
        <div style={{ animation: 'fadeInUp 0.5s ease-out', maxWidth: '700px', margin: '0 auto', padding: '1rem 0' }}>
            <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6B7280', fontSize: '0.9rem', fontWeight: '500' }}>
                <span>5</span>
                <span>/</span>
                <span>6</span>
            </div>

            <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '0.75rem', color: '#111827' }}>
                Almost there. Who should we contact?
            </h2>
            <p style={{ color: '#6B7280', marginBottom: '3.5rem', fontSize: '1.1rem' }}>
                We'll send the architecture diagram to this email.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '2.5rem' }}> {/* Increased gap */}
                {renderInput('firstName', 'First Name', 'Jane', 'text', true)}
                {renderInput('lastName', 'Last Name', 'Doe', 'text', true)}
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
                {renderInput('email', 'Work Email', 'name@company.com', 'email', true)}
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
                {renderInput('companyName', 'Company Name', 'Global FX Ltd', 'text', true)}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}> {/* Increased gap and margin */}
                {renderInput('phone', 'Phone Number', '+1 555 000 0000', 'tel', true)}
                {renderInput('telegram', 'Telegram (Optional)', '@username', 'text', false)}
            </div>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <button
                    onClick={onBack}
                    style={{
                        background: '#F3F4F6',
                        color: '#374151',
                        border: 'none',
                        padding: '1rem 2rem', // Larger button
                        borderRadius: '6px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                        fontSize: '1rem'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#E5E7EB'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#F3F4F6'}
                >
                    Back
                </button>
                <button
                    onClick={handleNext}
                    style={{
                        background: '#111827',
                        color: '#FFFFFF',
                        padding: '1rem 2.5rem', // Larger button
                        borderRadius: '6px',
                        fontWeight: '600',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.2s',
                        transform: 'translateY(0)',
                        fontSize: '1rem'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                    }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}
