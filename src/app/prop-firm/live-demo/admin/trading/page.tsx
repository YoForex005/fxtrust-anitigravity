import { Metadata } from 'next';
import TradingContent from './TradingContent';

export const metadata: Metadata = {
    title: 'Live Trading Monitor | Risk Management | FxTrusts',
    description: 'Real-time monitoring of client trading activity. View open positions, equity, and margin levels instantly.',
    openGraph: {
        title: 'Live Trading Monitor | Risk Management | FxTrusts',
        description: 'Real-time monitoring of client trading activity. View open positions, equity, and margin levels instantly.',
        type: 'website',
        url: 'https://fxtrusts.com/prop-firm/live-demo/admin/trading',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Live Trading Monitor | Risk Management | FxTrusts',
        description: 'Real-time monitoring of client trading activity. View open positions, equity, and margin levels instantly.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/prop-firm/live-demo/admin/trading',
    },
};

export default function TradingPage() {
    return (
        <>
            <h1 className="sr-only">Trading Page</h1>
            <TradingContent />
        </>
    );
}
