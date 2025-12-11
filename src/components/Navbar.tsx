'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>
                <Image src="/logo.png" alt="FxTrusts Logo" width={120} height={40} />
            </div>
            <div className={styles.navLinks}>
                <a href="#solutions" className={styles.link}>Solutions</a>
                <a href="#about" className={styles.link}>About</a>
                <a href="#contact" className={styles.link}>Contact</a>
            </div>
            <button className={styles.ctaButton}>Fine, Show Me</button>
        </nav>
    );
}
