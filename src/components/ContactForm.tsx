'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.formCard}>
            {status === 'success' ? (
                <div className={styles.successCard}>
                    <div className={styles.successIcon}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <h3 className={styles.successTitle}>Message Sent!</h3>
                    <p className={styles.successText}>We'll get back to you shortly.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className={styles.retryButton}
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.label}>Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="john@brokerage.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message" className={styles.label}>What's Broken?</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Tell us what your current provider is doing wrong..."
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className={styles.textarea}
                        ></textarea>
                    </div>

                    {status === 'error' && (
                        <div className={`${styles.statusMessage} ${styles.error}`}>
                            Something went wrong. Please try again or email us directly.
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={styles.submitButton}
                    >
                        {status === 'loading' ? (
                            <>Sending...</>
                        ) : (
                            <>Send Message</>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}
