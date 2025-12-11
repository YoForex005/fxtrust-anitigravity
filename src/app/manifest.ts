import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'FxTrusts - B2B Forex Broker Technology',
        short_name: 'FxTrusts',
        description: 'Complete forex brokerage ecosystem: MT5 White Label, CRM, Liquidity, and Crypto Payments. Launch your brokerage in weeks.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0A0A0F',
        theme_color: '#D4AF37',
        icons: [
            {
                src: '/logo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
