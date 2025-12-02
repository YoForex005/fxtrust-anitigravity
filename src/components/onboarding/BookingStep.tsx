'use client';

import React, { useState, useEffect } from 'react';

interface BookingStepProps {
    onBack: () => void;
    onComplete: () => void;
}

interface TimeSlot {
    id: string;
    startTime: string;
    endTime: string;
}

export default function BookingStep({ onBack, onComplete }: BookingStepProps) {
    const [slots, setSlots] = useState<TimeSlot[]>([]);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [booking, setBooking] = useState(false);

    useEffect(() => {
        // Fetch slots from API
        fetch('/api/calendar/slots')
            .then(res => res.json())
            .then(data => {
                setSlots(data.slots);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch slots", err);
                setLoading(false);
            });
    }, []);

    const handleBook = async () => {
        if (!selectedSlot) return;

        setBooking(true);
        try {
            const res = await fetch('/api/calendar/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ slotId: selectedSlot })
            });

            if (res.ok) {
                onComplete();
            } else {
                alert("Failed to book slot. Please try again.");
            }
        } catch (error) {
            console.error("Booking error", error);
            alert("An error occurred.");
        } finally {
            setBooking(false);
        }
    };

    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    };

    const formatTime = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    };

    return (
        <div style={{ animation: 'fadeInUp 0.5s ease-out', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6B7280', fontSize: '0.9rem', fontWeight: '500' }}>
                <span>6</span>
                <span>/</span>
                <span>6</span>
            </div>

            <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '0.5rem', color: '#111827' }}>
                Final Step. Pick a time.
            </h2>
            <p style={{ color: '#6B7280', marginBottom: '3rem' }}>
                30 minute strategy session. No sales fluff.
            </p>

            {loading ? (
                <div style={{ padding: '3rem', textAlign: 'center', color: '#6B7280', animation: 'pulseSubtle 1.5s infinite' }}>
                    Loading availability...
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                    {slots.map((slot, index) => (
                        <button
                            key={slot.id}
                            onClick={() => setSelectedSlot(slot.id)}
                            style={{
                                padding: '1rem',
                                border: selectedSlot === slot.id ? '1px solid #2563EB' : '1px solid #E5E7EB',
                                borderRadius: '4px',
                                background: selectedSlot === slot.id ? '#EFF6FF' : '#FFFFFF',
                                cursor: 'pointer',
                                textAlign: 'center',
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: selectedSlot === slot.id ? '0 4px 6px -1px rgba(37, 99, 235, 0.1)' : 'none',
                                animation: 'fadeInUp 0.5s ease-out forwards',
                                animationDelay: `${index * 50}ms`,
                                opacity: 0,
                                transform: selectedSlot === slot.id ? 'scale(1.05)' : 'scale(1)'
                            }}
                            onMouseEnter={(e) => {
                                if (selectedSlot !== slot.id) {
                                    e.currentTarget.style.borderColor = '#BFDBFE';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectedSlot !== slot.id) {
                                    e.currentTarget.style.borderColor = '#E5E7EB';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }
                            }}
                        >
                            <div style={{ fontSize: '0.85rem', fontWeight: '500', color: '#6B7280', marginBottom: '0.25rem' }}>
                                {formatDate(slot.startTime)}
                            </div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '700', color: selectedSlot === slot.id ? '#1E3A8A' : '#111827' }}>
                                {formatTime(slot.startTime)}
                            </div>
                        </button>
                    ))}
                </div>
            )}

            <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                    onClick={onBack}
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
                    Back
                </button>
                <button
                    onClick={handleBook}
                    disabled={!selectedSlot || booking}
                    style={{
                        background: selectedSlot ? '#111827' : '#E5E7EB',
                        color: selectedSlot ? '#FFFFFF' : '#9CA3AF',
                        padding: '0.75rem 2rem',
                        borderRadius: '4px',
                        fontWeight: '600',
                        border: 'none',
                        cursor: selectedSlot && !booking ? 'pointer' : 'not-allowed',
                        boxShadow: selectedSlot ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
                        transition: 'all 0.2s',
                        transform: 'translateY(0)'
                    }}
                    onMouseEnter={(e) => {
                        if (selectedSlot && !booking) {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (selectedSlot && !booking) {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                        }
                    }}
                >
                    {booking ? 'Booking...' : 'Confirm Meeting'}
                </button>
            </div>
        </div>
    );
}
