import { Metadata } from 'next';
import CasesContent from './CasesContent';

export const metadata: Metadata = {
    title: 'Support Case Management | Ticketing System | FxTrusts',
    description: 'Track and resolve client issues efficiently with the integrated support ticketing system.',
    openGraph: {
        title: 'Support Case Management | Ticketing System | FxTrusts',
        description: 'Track and resolve client issues efficiently with the integrated support ticketing system.',
        type: 'website',
        url: 'https://fxtrusts.com/prop-firm/live-demo/admin/cases',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Support Case Management | Ticketing System | FxTrusts',
        description: 'Track and resolve client issues efficiently with the integrated support ticketing system.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/prop-firm/live-demo/admin/cases',
    },
};

export default function CasesPage() {
    return (
        <>
            <h1 className="sr-only">Cases Page</h1>
            <CasesContent />
        </>
    );
}
