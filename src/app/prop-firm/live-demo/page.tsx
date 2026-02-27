import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Prop Firm Live Demo | FxTrusts',
    description: 'Interactive demo of the FxTrusts Prop Firm platform.',
    openGraph: {
        title: 'Prop Firm Live Demo | FxTrusts',
        description: 'Interactive demo of the FxTrusts Prop Firm platform.',
    },
    twitter: {
        card: 'summary',
        title: 'Prop Firm Live Demo | FxTrusts',
        description: 'Interactive demo of the FxTrusts Prop Firm platform.',
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function PropFirmLiveDemoPage() {
    redirect('/prop-firm/live-demo/admin');
    return <h1 className="sr-only">Prop Firm Live Demo Redirect</h1>;
}
