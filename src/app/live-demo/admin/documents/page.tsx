import { Metadata } from 'next';
import DocumentsContent from './DocumentsContent';

export const metadata: Metadata = {
    title: 'KYC Document Management | Compliance Module | FxTrusts',
    description: 'Manage client KYC documents securely. View, approve, or reject identity and residence proofs with ease.',
    openGraph: {
        title: 'KYC Document Management | Compliance Module | FxTrusts',
        description: 'Manage client KYC documents securely. View, approve, or reject identity and residence proofs with ease.',
        type: 'website',
        url: 'https://fxtrusts.com/live-demo/admin/documents',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KYC Document Management | Compliance Module | FxTrusts',
        description: 'Manage client KYC documents securely. View, approve, or reject identity and residence proofs with ease.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/live-demo/admin/documents',
    },
};

export default function DocumentsPage() {
    return (
        <>
            <h1 className="sr-only">Documents Page</h1>
            <DocumentsContent />
        </>
    );
}
