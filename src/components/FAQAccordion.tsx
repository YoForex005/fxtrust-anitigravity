'use client';

import React, { useState } from 'react';
import styles from './FAQAccordion.module.css';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    faqs: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`${styles.faqCard} ${activeIndex === index ? styles.active : ''}`}
                >
                    <button
                        className={styles.faqQuestion}
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={activeIndex === index}
                    >
                        <h4>{faq.question}</h4>
                        <div className={styles.iconWrapper}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </div>
                    </button>
                    <div className={styles.faqAnswerWrapper}>
                        <div className={styles.faqAnswer}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
