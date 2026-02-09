import Header from '@/components/Header';
import { ReactNode } from 'react';

export default function SolutionsLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
