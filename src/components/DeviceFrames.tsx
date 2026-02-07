import React, { ReactNode } from 'react';
import styles from './DeviceFrames.module.css';

interface MacWindowProps {
    children: ReactNode;
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}

export function MacWindow({ children, title = "Terminal", className, style }: MacWindowProps) {
    return (
        <div className={`${styles.macWindow} ${className || ''}`} style={style}>
            <div className={styles.macHeader}>
                <div className={styles.macControls}>
                    <div className={`${styles.macDot} ${styles.close}`}></div>
                    <div className={`${styles.macDot} ${styles.minimize}`}></div>
                    <div className={`${styles.macDot} ${styles.maximize}`}></div>
                </div>
                <div className={styles.macTitle}>{title}</div>
            </div>
            <div className={styles.macContent}>
                {children}
            </div>
        </div>
    );
}

interface IPhoneFrameProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export function IPhoneFrame({ children, className, style }: IPhoneFrameProps) {
    return (
        <div className={`${styles.iphoneFrame} ${className || ''}`} style={style}>
            <div className={styles.iphoneNotch}></div>
            <div className={styles.iphoneScreen}>
                {children}
            </div>
        </div>
    );
}

interface CodeTerminalProps {
    title?: string;
    code: string;
    language?: 'javascript' | 'typescript' | 'json' | 'bash';
    className?: string;
}

export function CodeTerminal({ title = "bash", code, language = 'javascript', className }: CodeTerminalProps) {
    // Simple syntax highlighting
    const highlightCode = (code: string) => {
        return code.split('\n').map((line, i) => {
            // Very basic highlighting logic
            let highlightedLine = line;

            // Comments
            if (line.trim().startsWith('//') || line.trim().startsWith('#')) {
                return <span key={i} className={`${styles.line} ${styles.comment}`}>{line}</span>;
            }

            // Keywords
            const keywords = ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'import', 'export', 'default', 'interface'];
            keywords.forEach(kw => {
                const regex = new RegExp(`\\b${kw}\\b`, 'g');
                highlightedLine = highlightedLine.replace(regex, `<span class="${styles.keyword}">${kw}</span>`);
            });

            // Functions
            highlightedLine = highlightedLine.replace(/(\w+)\(/g, `<span class="${styles.function}">$1</span>(`);

            // Strings
            highlightedLine = highlightedLine.replace(/(["'`].*?["'`])/g, `<span class="${styles.string}">$1</span>`);

            // Numbers
            highlightedLine = highlightedLine.replace(/\b(\d+)\b/g, `<span class="${styles.number}">$1</span>`);

            return (
                <span
                    key={i}
                    className={styles.line}
                    dangerouslySetInnerHTML={{ __html: highlightedLine }}
                />
            );
        });
    };

    return (
        <div className={`${styles.codeTerminal} ${className || ''}`}>
            <div className={styles.terminalHeader}>
                <div className={styles.macControls}>
                    <div className={`${styles.macDot} ${styles.close}`}></div>
                    <div className={`${styles.macDot} ${styles.minimize}`}></div>
                    <div className={`${styles.macDot} ${styles.maximize}`}></div>
                </div>
                <div className={styles.terminalTitle}>{title}</div>
            </div>
            <div className={styles.terminalContent}>
                {highlightCode(code)}
            </div>
        </div>
    );
}
