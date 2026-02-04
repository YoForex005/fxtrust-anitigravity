'use client';

import React, { useState } from 'react';
import styles from './Onboarding.module.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { motion, Variants } from 'framer-motion';

interface ContactData {
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    phone: string;
    whatsapp: string;
    telegram: string;
}

interface ContactStepProps {
    data: ContactData;
    updateData: (key: keyof ContactData, value: string) => void;
    onNext: () => void;
    onBack: () => void; // Keeping onBack for now, though it might be hidden in the first step
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const renderInput = (key: keyof ContactData, label: string, placeholder: string, type: string = 'text', required: boolean = false) => {
        const isFocused = focusedField === key;
        const hasError = !!errors[key];

        return (
            <motion.div className={styles.inputGroup} variants={itemVariants}>
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
            </motion.div>
        );
    };

    return (
        <motion.div
            className={styles.stepWrapper}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className={styles.stepIndicator} variants={itemVariants}>
                <span>1</span>
                <span>/</span>
                <span>6</span>
            </motion.div>

            <motion.h2 className={styles.stepTitle} variants={itemVariants}>
                Let's get started.
            </motion.h2>
            <motion.p className={styles.stepDescription} variants={itemVariants}>
                Tell us a bit about yourself so we can tailor the experience.
            </motion.p>

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

            <div className={styles.formGrid} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '2.5rem' }}>
                <motion.div className={styles.inputGroup} variants={itemVariants}>
                    <label className={`${styles.inputLabel} ${focusedField === 'phone' ? styles.focused : ''}`}>
                        Phone Number *
                    </label>
                    <div className={!!errors.phone ? styles.errorBorder : ''}>
                        <PhoneInput
                            id="contact-phone-input"
                            international
                            withCountryCallingCode
                            placeholder="Enter phone number"
                            defaultCountry="US"
                            value={data.phone}
                            onChange={(value) => updateData('phone', value || '')}
                            className={styles.phoneInput}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                        />
                    </div>
                    {errors.phone && (
                        <span className={styles.errorMessage}>
                            {errors.phone}
                        </span>
                    )}
                </motion.div>

                <motion.div className={styles.inputGroup} variants={itemVariants}>
                    <label className={`${styles.inputLabel} ${focusedField === 'whatsapp' ? styles.focused : ''}`}>
                        WhatsApp Number
                    </label>
                    <PhoneInput
                        international
                        withCountryCallingCode
                        placeholder="Enter WhatsApp number"
                        defaultCountry="US"
                        value={data.whatsapp}
                        onChange={(value) => updateData('whatsapp', value || '')}
                        className={styles.phoneInput}
                        onFocus={() => setFocusedField('whatsapp')}
                        onBlur={() => setFocusedField(null)}
                    />
                </motion.div>
            </div>

            <div style={{ marginBottom: '4rem' }}>
                {renderInput('telegram', 'Telegram ID', '@username', 'text', false)}
            </div>

            <motion.div className={styles.navButtons} variants={itemVariants}>
                <div />
                <motion.button
                    onClick={handleNext}
                    className={styles.nextBtn}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Next Step
                </motion.button>
            </motion.div>
        </motion.div>
    );
}
