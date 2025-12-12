import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FxTrusts Blog | Forex Broker Insights',
    description: 'Read the latest insights, guides, and news about forex brokerage technology, MT5 white labels, and liquidity.',
    openGraph: {
        title: 'FxTrusts Blog | Forex Broker Insights',
        description: 'Read the latest insights, guides, and news about forex brokerage technology, MT5 white labels, and liquidity.',
        type: 'website',
        url: 'https://fxtrusts.com/blog',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FxTrusts Blog | Forex Broker Insights',
        description: 'Read the latest insights, guides, and news about forex brokerage technology.',
    },
};

export default function BlogRedirect() {
    redirect('/resources/blog');
}
