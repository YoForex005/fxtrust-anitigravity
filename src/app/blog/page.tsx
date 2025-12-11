import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FxTrusts Blog | Forex Broker Insights',
    description: 'Read the latest insights, guides, and news about forex brokerage technology, MT5 white labels, and liquidity.',
};

export default function BlogRedirect() {
    redirect('/resources/blog');
}
