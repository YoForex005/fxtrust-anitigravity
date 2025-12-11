'use client';

import React, { useEffect } from 'react';

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

            if (!data || typeof data !== 'object' || !data.event) {
                return;
            }

            if (typeof data.event !== 'string' || !data.event.startsWith('calendly.')) {
                return;
            }

            if (data.event === 'calendly.event_scheduled') {
                onEventScheduled();
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [onEventScheduled]);

    const combinedStyle: React.CSSProperties = {
        width: '100%',
        minWidth: '320px',
        minHeight: '1000px',
        border: '0',
        ...style,
    };

    return (
        <iframe
            src={url}
            style={combinedStyle}
            frameBorder={0}
            title="Schedule a meeting"
        />
    );
}
