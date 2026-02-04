'use client';

import { useState } from 'react';

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
        <div style={{ background: 'white', padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <div style={{ width: '60px', height: '60px', background: '#ecfdf5', borderRadius: '50%', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', marginBottom: '0.5rem' }}>Message Sent!</h3>
                    <p style={{ color: '#6B7280' }}>We'll get back to you shortly.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        style={{ marginTop: '1.5rem', color: '#4353F2', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E5E7EB', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="john@brokerage.com"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E5E7EB', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>What's Broken?</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Tell us what your current provider is doing wrong..."
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #E5E7EB', fontSize: '1rem', fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.2s' }}
                        ></textarea>
                    </div>

                    {status === 'error' && (
                        <div style={{ color: '#DC2626', fontSize: '0.9rem', padding: '0.5rem', background: '#FEF2F2', borderRadius: '8px' }}>
                            Something went wrong. Please try again or email us directly.
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        style={{
                            background: status === 'loading' ? '#9CA3AF' : '#111827',
                            color: 'white',
                            padding: '1rem',
                            borderRadius: '12px',
                            fontWeight: '600',
                            fontSize: '1.1rem',
                            border: 'none',
                            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                            marginTop: '1rem',
                            transition: 'transform 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}
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
