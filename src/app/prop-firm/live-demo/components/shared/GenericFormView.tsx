'use client';

import { useState } from 'react';
import styles from '../../demo.module.css';

interface Field {
    name: string;
    label: string;
    type: 'text' | 'email' | 'number' | 'select' | 'textarea' | 'checkbox' | 'date';
    placeholder?: string;
    options?: { label: string; value: string }[];
    required?: boolean;
    defaultValue?: any;
    description?: string;
}

interface GenericFormViewProps {
    title: string;
    subtitle?: string;
    fields: Field[];
    onSubmit: (data: any) => void;
    submitLabel?: string;
    cancelLabel?: string;
    onCancel?: () => void;
}

export default function GenericFormView({
    title,
    subtitle,
    fields,
    onSubmit,
    submitLabel = 'Save Changes',
    cancelLabel = 'Cancel',
    onCancel
}: GenericFormViewProps) {
    const [formData, setFormData] = useState<Record<string, any>>(() => {
        const initial: Record<string, any> = {};
        fields.forEach(f => {
            initial[f.name] = f.defaultValue || '';
        });
        return initial;
    });

    const handleChange = (name: string, value: any) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className={styles.viewContainer}>
            <div className={styles.viewHeader}>
                <div>
                    <h1 className={styles.viewTitle}>{title}</h1>
                    {subtitle && <p className={styles.viewSubtitle}>{subtitle}</p>}
                </div>
            </div>

            <div className={styles.card}>
                <form onSubmit={handleSubmit} className={styles.formGrid}>
                    {fields.map(field => (
                        <div key={field.name} className={`${styles.formGroup} ${field.type === 'textarea' ? styles.fullWidth : ''}`}>
                            <label className={styles.label}>
                                {field.label}
                                {field.required && <span className={styles.required}>*</span>}
                            </label>

                            {field.type === 'select' ? (
                                <select
                                    className={styles.input}
                                    value={formData[field.name]}
                                    onChange={e => handleChange(field.name, e.target.value)}
                                    required={field.required}
                                >
                                    <option value="">Select {field.label}</option>
                                    {field.options?.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            ) : field.type === 'textarea' ? (
                                <textarea
                                    className={styles.textarea}
                                    value={formData[field.name]}
                                    onChange={e => handleChange(field.name, e.target.value)}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    rows={5}
                                />
                            ) : field.type === 'checkbox' ? (
                                <div className={styles.checkboxWrapper}>
                                    <input
                                        type="checkbox"
                                        checked={formData[field.name]}
                                        onChange={e => handleChange(field.name, e.target.checked)}
                                        id={field.name}
                                    />
                                    <label htmlFor={field.name}>{field.description || field.label}</label>
                                </div>
                            ) : (
                                <input
                                    type={field.type}
                                    className={styles.input}
                                    value={formData[field.name]}
                                    onChange={e => handleChange(field.name, e.target.value)}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                />
                            )}

                            {field.description && field.type !== 'checkbox' && (
                                <p className={styles.fieldDescription}>{field.description}</p>
                            )}
                        </div>
                    ))}

                    <div className={styles.formActions}>
                        {onCancel && (
                            <button type="button" className={styles.secondaryButton} onClick={onCancel}>
                                {cancelLabel}
                            </button>
                        )}
                        <button type="submit" className={styles.primaryButton}>
                            {submitLabel}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
