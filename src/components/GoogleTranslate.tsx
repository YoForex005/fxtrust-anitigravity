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

        // If no cookie AND we haven't tried auto-detecting yet
        if (!hasLanguageCookie && !hasAutoDetected) {
            // Mark as done immediately to prevent loops
            sessionStorage.setItem('fx_auto_translate_done', 'true');

            fetch('https://ipapi.co/json/')
                .then(res => res.json())
                .then(data => {
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

                    if (langCode !== 'en') {
                        // Set cookie for Google Translate
                        // Format: /source_lang/target_lang
                        document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;
                        document.cookie = `googtrans=/en/${langCode}; path=/;`;
                        
                        // Reload to apply translation
                        window.location.reload();
                    }
                })
                .catch(err => console.error('Error detecting location:', err));
        }
    }, []);

    return (
        <>
            <div id="google_translate_element" style={{ display: 'none' }}></div>
            <Script
                src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                strategy="afterInteractive"
            />
        </>
    );
}
