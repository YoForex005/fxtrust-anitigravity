'use client';

import React from 'react';
import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    YoutubeIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FxTrustsStickyFooter() {
    return (
        <footer className="border-t" style={{ background: '#fafbfc' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 1.5rem 1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {/* Brand */}
                    <div style={{ maxWidth: 280 }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: '#0f172a' }}>FxTrusts</h3>
                        <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
                            The complete forex technology provider. Whitelabel solutions, custom websites, and end-to-end brokerage infrastructure.
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                            {[FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon].map((Icon, i) => (
                                <Button key={i} size="icon" variant="outline" className="size-8">
                                    <Icon className="size-4" />
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinkGroups.map((group) => (
                        <div key={group.label}>
                            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0f172a', marginBottom: '1rem' }}>
                                {group.label}
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {group.links.map((link) => (
                                    <li key={link.title} style={{ marginBottom: '0.5rem' }}>
                                        <a
                                            href={link.href}
                                            style={{ fontSize: '0.875rem', color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
                                            onMouseEnter={(e) => (e.currentTarget.style.color = '#0f172a')}
                                            onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '2rem', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>&copy; 2025 FxTrusts. All rights reserved.</p>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Built with precision for the forex industry.</p>
                </div>
            </div>
        </footer>
    );
}

const footerLinkGroups = [
    {
        label: 'Products',
        links: [
            { title: 'PropFirm Platform', href: '/get-started' },
            { title: 'RTX5 Terminal', href: '/get-started' },
            { title: 'Forex CRM', href: '/get-started' },
            { title: 'Trade Copier', href: '/get-started' },
            { title: 'YoForex AI', href: '/get-started' },
            { title: 'Custom Websites', href: '/get-started' },
        ],
    },
    {
        label: 'Solutions',
        links: [
            { title: 'Forex Brokers', href: '/get-started' },
            { title: 'Prop Trading Firms', href: '/get-started' },
            { title: 'Crypto Exchanges', href: '/get-started' },
            { title: 'Liquidity Providers', href: '/get-started' },
        ],
    },
    {
        label: 'Company',
        links: [
            { title: 'About Us', href: '/about' },
            { title: 'Contact', href: '/get-started' },
            { title: 'Blog', href: '/blog' },
            { title: 'Privacy Policy', href: '/privacy' },
            { title: 'Terms of Service', href: '/terms' },
        ],
    },
];
