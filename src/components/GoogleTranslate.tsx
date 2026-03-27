'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

declare global {
    interface Window {
        google: any;
        googleTranslateElementInit: () => void;
    }
}

const LANGUAGES = {
    'en': 'English',
    'es': 'Spanish',
    'fr': 'French',
    'de': 'German',
    'it': 'Italian',
    'pt': 'Portuguese',
    'ru': 'Russian',
    'zh-CN': 'Chinese (Simplified)',
    'ja': 'Japanese',
    'ko': 'Korean',
    'ar': 'Arabic',
    'hi': 'Hindi',
    'bn': 'Bengali',
    'ur': 'Urdu',
    'tr': 'Turkish',
    'vi': 'Vietnamese',
    'th': 'Thai',
    'id': 'Indonesian',
    'ms': 'Malay',
    'pl': 'Polish',
    'nl': 'Dutch',
    'sv': 'Swedish'
};

export default function GoogleTranslate() {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // Initialize Google Translate
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: 'en',
                    includedLanguages: Object.keys(LANGUAGES).join(','),
                    autoDisplay: false,
                },
                'google_translate_element'
            );
            setIsInitialized(true);
        };

        // Check for existing cookie
        const getCookie = (name: string) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(';').shift();
        };

        const hasLanguageCookie = getCookie('googtrans');
        const hasAutoDetected = sessionStorage.getItem('fx_auto_translate_done');

        // If no cookie, detect location and set language
        if (!hasLanguageCookie) {
            // Delay the heavy location fetch to prevent blocking the initial page paint and Speed Index
            const timer = setTimeout(() => {
                console.log('FxTrust: No language cookie found. Starting deferred auto-translation check...');

                fetch('https://ipapi.co/json/')
                    .then(res => res.json())
                    .then(data => {
                        console.log('FxTrust: IP Data received:', data);
                        const countryCode = data.country_code;
                        let langCode = 'en';

                        // Map country codes to language codes (simplified mapping)
                        const countryToLang: { [key: string]: string } = {
                            'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', // Spanish
                            'FR': 'fr', // French
                            'DE': 'de', // German
                            'IT': 'it', // Italian
                            'PT': 'pt', 'BR': 'pt', // Portuguese
                            'RU': 'ru', // Russian
                            'CN': 'zh-CN', // Chinese
                            'JP': 'ja', // Japanese
                            'KR': 'ko', // Korean
                            'AE': 'ar', 'SA': 'ar', 'EG': 'ar', // Arabic
                            'PK': 'ur', // Urdu
                            // 'IN': 'en', // India defaults to English (explicitly or by omission)
                            'TR': 'tr', // Turkish
                            'VN': 'vi', // Vietnamese
                            'TH': 'th', // Thai
                            'ID': 'id', // Indonesian
                            'MY': 'ms', // Malay
                            'PL': 'pl', // Polish
                            'NL': 'nl', // Dutch
                            'SE': 'sv', // Swedish
                            'BD': 'bn', // Bengali
                        };

                        if (countryToLang[countryCode]) {
                            langCode = countryToLang[countryCode];
                        }

                        console.log(`FxTrust: Detected Country: ${countryCode}, Mapped Language: ${langCode}`);

                        // Set cookie to prevent re-detection on next load (valid for session)
                        document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;
                        document.cookie = `googtrans=/en/${langCode}; path=/;`;

                        if (langCode !== 'en') {
                            console.log(`FxTrust: Switching language to ${langCode}...`);
                            window.location.reload();
                        } else {
                            console.log('FxTrust: Language is English. Cookie set, no reload needed.');
                        }
                    })
                    .catch(err => console.error('FxTrust: Error detecting location:', err));
            }, 3500); // 3.5 second delay

            return () => clearTimeout(timer);
        } else {
            console.log('FxTrust: Language cookie exists. Skipping auto-translation.');
        }
    }, []);

    return (
        <>
            <div id="google_translate_element" style={{ display: 'none' }}></div>
            <Script
                src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                strategy="lazyOnload"
            />
        </>
    );
}
