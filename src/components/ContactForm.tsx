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
        <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] text-center lg:text-left">
            {status === 'success' ? (
                <div className="text-center py-8">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full text-emerald-600 flex items-center justify-center mx-auto mb-4">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500">We'll get back to you shortly.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="mt-6 text-blue-600 font-semibold bg-transparent border-none cursor-pointer hover:underline"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                        <label htmlFor="name" className="block mb-2 font-semibold text-gray-700 text-center lg:text-left">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl border border-gray-200 text-base outline-none focus:border-blue-500 transition-colors text-center lg:text-left"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 font-semibold text-gray-700 text-center lg:text-left">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="john@brokerage.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl border border-gray-200 text-base outline-none focus:border-blue-500 transition-colors text-center lg:text-left"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 font-semibold text-gray-700 text-center lg:text-left">What's Broken?</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Tell us what your current provider is doing wrong..."
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl border border-gray-200 text-base font-inherit outline-none focus:border-blue-500 transition-colors text-center lg:text-left"
                        ></textarea>
                    </div>

                    {status === 'error' && (
                        <div className="text-red-600 text-sm p-2 bg-red-50 rounded-lg text-center">
                            Something went wrong. Please try again or email us directly.
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`
                            w-full p-4 rounded-full font-bold text-lg border-none cursor-pointer mt-4 transition-transform flex items-center justify-center gap-2
                            ${status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-900 text-white hover:scale-[1.02]'}
                        `}
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
