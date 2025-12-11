'use client';

import React, { useEffect, useRef } from 'react';

interface CalendlySchedulerProps {
    url: string;
    onEventScheduled?: () => void;
    style?: React.CSSProperties;
}

export default function CalendlyScheduler({ url, onEventScheduled, style }: CalendlySchedulerProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const cssHref = 'https://assets.calendly.com/assets/external/widget.css';
        const scriptSrc = 'https://assets.calendly.com/assets/external/widget.js';

        const existingLink = document.querySelector<HTMLLinkElement>(`link[href="${cssHref}"]`);
        if (!existingLink) {
            const link = document.createElement('link');
            link.href = cssHref;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }

        const initCalendly = () => {
            const calendly = (window as any).Calendly;
            if (!calendly || !containerRef.current) return;

            containerRef.current.innerHTML = '';

            calendly.initInlineWidget({
                url,
                parentElement: containerRef.current,
            });
        };

        const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${scriptSrc}"]`);

        if (existingScript) {
            if ((window as any).Calendly) {
                initCalendly();
            } else {
                existingScript.addEventListener('load', initCalendly);
            }
        } else {
            const script = document.createElement('script');
            script.src = scriptSrc;
            script.async = true;
            script.onload = initCalendly;
            document.body.appendChild(script);
        }

        const handleMessage = (event: MessageEvent) => {
            const data: any = event.data;

            if (!data || typeof data !== 'object' || !data.event) {
                return;
            }

            if (typeof data.event !== 'string' || !data.event.startsWith('calendly.')) {
                return;
            }

            if (data.event === 'calendly.event_scheduled' && onEventScheduled) {
                onEventScheduled();
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);

            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, [url, onEventScheduled]);

    const combinedStyle: React.CSSProperties = {
        minWidth: '320px',
        height: '1000px',
        ...style,
    };

    return <div ref={containerRef} style={combinedStyle} />;
}
