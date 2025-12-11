'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

interface CalendlySchedulerProps {
    url: string;
    onEventScheduled?: () => void;
    style?: React.CSSProperties;
}

export default function CalendlyScheduler({ url, onEventScheduled, style }: CalendlySchedulerProps) {
    useEffect(() => {
        if (typeof window === 'undefined' || !onEventScheduled) return;

        const handleMessage = (event: MessageEvent) => {
            const data: any = event.data;
            if (!data) return;

            let eventName: string | undefined;

            if (typeof data === 'string') {
                eventName = data;
            } else if (typeof data === 'object') {
                if (typeof data.event === 'string') {
                    eventName = data.event;
                } else if (typeof (data.eventName ?? data.name) === 'string') {
                    eventName = (data.eventName ?? data.name) as string;
                }
            }

            if (!eventName || !eventName.startsWith('calendly.')) {
                return;
            }

            console.log('Calendly message event:', eventName, data);

            if (eventName === 'calendly.event_scheduled' || eventName.includes('event_scheduled')) {
                console.log('CalendlyScheduler: event scheduled detected, redirecting to /thank-you');

                if (typeof window !== 'undefined') {
                    window.location.href = '/thank-you';
                }

                if (onEventScheduled) {
                    onEventScheduled();
                }
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [onEventScheduled]);

    const combinedStyle: React.CSSProperties = {
        minWidth: '320px',
        height: '1000px',
        ...style,
    };

    return (
        <>
            <div
                className="calendly-inline-widget"
                data-url={url}
                style={combinedStyle}
            />
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
            />
        </>
    );
}
