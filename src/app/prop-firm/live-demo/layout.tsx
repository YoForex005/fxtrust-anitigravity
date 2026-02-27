import { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://fxtrusts.com'),
    title: {
        default: 'Live Demo | Forex CRM Demo | FxTrusts',
        template: '%s | Live Demo | FxTrusts',
    },
    description: 'Try the FxTrusts CRM demo. See our admin panel, client portal, and trading interface in action.',
    keywords: ['forex CRM demo', 'broker CRM trial', 'trading platform demo', 'client portal demo'],
    openGraph: {
        title: 'Live Demo | Try FxTrusts CRM',
        description: 'Interactive demo of our broker admin panel and client trading interface.',
        type: 'website',
        url: 'https://fxtrusts.com/live-demo',
    },
    robots: {
        index: false,
        follow: false,
    },
    alternates: {
        canonical: 'https://fxtrusts.com/live-demo',
    },
};

export default function LiveDemoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
