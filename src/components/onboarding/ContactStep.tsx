'use client';

import React, { useState } from 'react';
import styles from './Onboarding.module.css';

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
        if (!data.email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)) newErrors.email = "Please enter a valid email address";
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

    const renderInput = (key: keyof ContactData, label: string, placeholder: string, type: string = 'text', required: boolean = false) => {
        const isFocused = focusedField === key;
        const hasError = !!errors[key];

        return (
            <div className={styles.inputGroup}>
                <label className={`${styles.inputLabel} ${isFocused ? styles.focused : ''}`}>
                    {label} {required && '*'}
                </label>
                <input
                    type={type}
                    value={data[key] || ''}
                    onChange={(e) => updateData(key, e.target.value)}
                    className={`${styles.inputField} ${hasError ? styles.error : ''}`}
                    placeholder={placeholder}
                    onFocus={() => setFocusedField(key)}
                    onBlur={() => setFocusedField(null)}
                />
                {hasError && (
                    <span className={styles.errorMessage}>
                        {errors[key]}
                    </span>
                )}
            </div>
        );
    };

    return (
        <div className={styles.stepWrapper}>
            <div className={styles.stepIndicator}>
                <span>5</span>
                <span>/</span>
                <span>6</span>
            </div>

            <h2 className={styles.stepTitle}>
                Almost there. Who should we contact?
            </h2>
            <p className={styles.stepDescription}>
                We'll send the architecture diagram to this email.
            </p>

            <div className={styles.formGrid} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '2.5rem' }}>
                {renderInput('firstName', 'First Name', 'Jane', 'text', true)}
                {renderInput('lastName', 'Last Name', 'Doe', 'text', true)}
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
                {renderInput('email', 'Work Email', 'name@company.com', 'email', true)}
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
                {renderInput('companyName', 'Company Name', 'Global FX Ltd', 'text', true)}
            </div>

            <div className={styles.formGrid} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
                {renderInput('phone', 'Phone Number', '+1 555 000 0000', 'tel', true)}
                {renderInput('telegram', 'Telegram (Optional)', '@username', 'text', false)}
            </div>

            <div className={styles.navButtons}>
                <button
                    onClick={onBack}
                    className={styles.backBtn}
                >
                    Back
                </button>
                <button
                    onClick={handleNext}
                    className={styles.nextBtn}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}
