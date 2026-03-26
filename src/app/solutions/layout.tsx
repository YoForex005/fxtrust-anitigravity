import Header from '@/components/Header';
import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://fxtrusts.com'),
    title: {
        default: 'Solutions | FxTrusts',
        template: '%s | Solutions | FxTrusts',
    },
};

export default function SolutionsLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            {children}
            
        </>
    );
}
