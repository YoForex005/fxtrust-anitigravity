import { Metadata } from 'next';
import ContentPageLayout from '@/components/ContentPageLayout';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
    title: 'Commodities Trading | Gold, Oil & More | FxTrusts',
    description: 'Trade precious metals, energy products, and agricultural commodities with institutional spreads. Gold, Silver, Crude Oil, Natural Gas, and more.',
    keywords: ['commodities trading', 'gold trading', 'oil trading', 'precious metals', 'commodity broker', 'XAU', 'WTI crude'],
    openGraph: {
        title: 'Commodities Trading | Gold, Oil & Metals',
        description: 'Trade gold, silver, oil and 30+ commodities with institutional spreads and deep liquidity.',
        type: 'website',
        url: 'https://fxtrusts.com/markets/commodities',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Commodities Trading | Gold, Oil & Metals',
        description: 'Trade gold, silver, oil and 30+ commodities with institutional spreads.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/markets/commodities',
    },
};

export default function CommoditiesPage() {
    const tableOfContents = [
        { id: 'overview', title: 'Market Overview' },
        { id: 'precious-metals', title: 'Precious Metals' },
        { id: 'energy', title: 'Energy Products' },
        { id: 'agriculture', title: 'Agricultural Commodities' },
        { id: 'conditions', title: 'Trading Conditions' },
        { id: 'integration', title: 'Integration' },
    ];

    const relatedLinks = [
        { title: 'Forex Trading', href: '/markets/forex', readTime: '6 min' },
        { title: 'Indices Trading', href: '/markets/indices', readTime: '5 min' },
        { title: 'Risk Management', href: '/solutions/risk-management', readTime: '4 min' },
    ];

    const quickFacts = [
        { label: 'Instruments', value: '30+' },
        { label: 'Gold Spread', value: 'From 0.15' },
        { label: 'Oil Spread', value: 'From 0.03' },
        { label: 'Leverage', value: 'Up to 1:200' },
    ];

    return (
        <main>
            <PageHeader
                title="Commodities Trading"
                subtitle="Access global commodity markets with institutional-grade execution."
                badge="Markets"
            />
            <ContentPageLayout
                tableOfContents={tableOfContents}
                relatedLinks={relatedLinks}
                quickFacts={quickFacts}
                ctaTitle="Add Commodities to Your Platform"
                ctaText="Offer your clients exposure to precious metals and energy markets."
                ctaButtonText="Get Started"
                ctaButtonHref="/company/contact"
            >
                
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Commodities Trading | Gold, Oil & More | FxTrusts","description":"Trade precious metals, energy products, and agricultural commodities with institutional spreads. Gold, Silver, Crude Oil, Natural Gas, and more.","url":"https://fxtrusts.com/markets/commodities"}) }}
      />
      <h1>Commodity Trading Infrastructure</h1>
                <p>
                    Commodities represent some of the oldest traded assets in human history, and they remain critical components of modern portfolios. At FxTrusts, we provide brokerages with access to precious metals, energy products, and agricultural commodities through CFDs, allowing clients to speculate on price movements without physical delivery concerns.
                </p>

                <h2 id="overview">Market Overview</h2>
                <p>
                    The global commodities market spans trillions of dollars in daily volume, driven by industrial demand, geopolitical events, and macroeconomic trends. From safe-haven gold during market uncertainty to oil prices impacting inflation, commodities offer unique trading opportunities uncorrelated with traditional equity markets.
                </p>
                <p>
                    Our commodity offering includes spot and futures-based CFDs, providing flexibility for different trading strategies. All instruments are available through the same MT5 platform your clients use for forex and indices, creating a unified trading experience.
                </p>

                <div className="statsGrid">
                    <div className="statBox">
                        <strong>30+</strong>
                        <span>Instruments</span>
                    </div>
                    <div className="statBox">
                        <strong>$200B+</strong>
                        <span>Daily Volume</span>
                    </div>
                    <div className="statBox">
                        <strong>0.15</strong>
                        <span>Gold Spread</span>
                    </div>
                    <div className="statBox">
                        <strong>23/5</strong>
                        <span>Trading Hours</span>
                    </div>
                </div>

                <h2 id="precious-metals">Precious Metals</h2>
                <p>
                    Precious metals have served as stores of value for millennia and continue to attract investors seeking portfolio diversification and inflation protection. Our platform offers the most liquid metals with institutional pricing.
                </p>

                <h3>Gold (XAU/USD)</h3>
                <p>
                    The world's ultimate safe-haven asset. Gold trading volumes exceed $130 billion daily, making it one of the most liquid markets globally. Key trading characteristics include:
                </p>
                <ul>
                    <li><strong>Inverse USD Correlation</strong> – Typically rises when dollar weakens</li>
                    <li><strong>Safe-Haven Demand</strong> – Increases during geopolitical uncertainty</li>
                    <li><strong>Central Bank Activity</strong> – Major buyers include central banks</li>
                    <li><strong>Inflation Hedge</strong> – Traditional protection against currency debasement</li>
                </ul>

                <h3>Silver (XAG/USD)</h3>
                <p>
                    Silver offers higher volatility than gold due to smaller market size and dual role as industrial and precious metal. Popular with traders seeking larger percentage moves.
                </p>

                <h3>Additional Metals</h3>
                <ul>
                    <li><strong>Platinum (XPT/USD)</strong> – Industrial metal with automotive applications</li>
                    <li><strong>Palladium (XPD/USD)</strong> – Rarer than platinum, used in catalytic converters</li>
                    <li><strong>Copper</strong> – Dr. Copper - the metal with a PhD in economics</li>
                </ul>

                <div className="featureGrid">
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            Tight Spreads
                        </h4>
                        <p>Gold from 0.15 pips, Silver from 0.015 pips. Institutional-grade pricing passed to your clients.</p>
                    </div>
                    <div className="featureCard">
                        <h4>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            Deep Liquidity
                        </h4>
                        <p>Connected to major metals dealers including LBMA market makers for reliable execution.</p>
                    </div>
                </div>

                <h2 id="energy">Energy Products</h2>
                <p>
                    Energy commodities drive the global economy and offer exceptional trading opportunities driven by supply disruptions, OPEC decisions, and seasonal demand patterns.
                </p>

                <h3>Crude Oil</h3>
                <p>
                    We offer both major oil benchmarks:
                </p>
                <ul>
                    <li><strong>WTI Crude (CL)</strong> – US benchmark, Cushing Oklahoma delivery. Most liquid oil contract globally.</li>
                    <li><strong>Brent Crude (BRN)</strong> – International benchmark, North Sea production. Reference for 60% of global oil trades.</li>
                </ul>
                <p>
                    Oil prices are influenced by OPEC+ production decisions, US inventory data, geopolitical tensions in producing regions, and global economic growth expectations.
                </p>

                <h3>Natural Gas</h3>
                <p>
                    Natural gas (NG) offers extreme volatility, particularly during winter months when heating demand spikes. European gas (TTF) is also available for traders focused on EU energy markets.
                </p>

                <h3>Additional Energy Products</h3>
                <ul>
                    <li><strong>Heating Oil</strong> – Refined petroleum product for heating</li>
                    <li><strong>Gasoline (RBOB)</strong> – Reformulated blendstock</li>
                    <li><strong>Carbon Emissions</strong> – EU ETS carbon allowances</li>
                </ul>

                <h2 id="agriculture">Agricultural Commodities</h2>
                <p>
                    Agricultural commodities, often called "softs," are influenced by weather patterns, crop reports, and global food demand trends.
                </p>

                <h3>Available Agricultural Products</h3>
                <ul>
                    <li><strong>Corn</strong> – Largest US crop by volume, biofuel feedstock</li>
                    <li><strong>Wheat</strong> – Global food staple, weather-sensitive</li>
                    <li><strong>Soybeans</strong> – Key protein source, China demand driver</li>
                    <li><strong>Coffee</strong> – Second most traded commodity by value</li>
                    <li><strong>Sugar</strong> – Global sweetener and ethanol feedstock</li>
                    <li><strong>Cotton</strong> – Textile industry benchmark</li>
                    <li><strong>Cocoa</strong> – Premium confectionery ingredient</li>
                </ul>

                <div className="infoBox">
                    <p>
                        <strong>Seasonal Trading:</strong> Agricultural commodities often exhibit seasonal patterns related to planting and harvest cycles. Our research team provides insights on seasonal opportunities.
                    </p>
                </div>

                <h2 id="conditions">Trading Conditions</h2>
                <p>
                    We offer competitive conditions across all commodity instruments, with parameters configurable to match your business model and regulatory requirements.
                </p>

                <h3>Spreads & Pricing</h3>
                <ul>
                    <li><strong>Gold:</strong> From 0.15 pips (variable, raw spread account)</li>
                    <li><strong>Silver:</strong> From 0.015 pips</li>
                    <li><strong>WTI Oil:</strong> From 0.03 pips</li>
                    <li><strong>Brent Oil:</strong> From 0.03 pips</li>
                    <li><strong>Natural Gas:</strong> From 0.005 pips</li>
                </ul>

                <h3>Leverage Options</h3>
                <ul>
                    <li>Precious Metals: Up to 1:200</li>
                    <li>Energy Products: Up to 1:100</li>
                    <li>Agricultural: Up to 1:50</li>
                </ul>

                <h3>Trading Hours</h3>
                <p>
                    Most commodities follow near-continuous trading schedules with brief daily maintenance breaks. Gold and silver trade 23 hours per day, while oil follows similar extended hours aligned with NYMEX and ICE exchange schedules.
                </p>

                <h2 id="integration">Integration & Launch</h2>
                <p>
                    Adding commodities to your existing FxTrusts platform is straightforward. The integration process includes:
                </p>
                <ol>
                    <li><strong>Instrument Selection</strong> – Choose which commodities to offer based on client demand</li>
                    <li><strong>Risk Configuration</strong> – Set leverage, margin, and exposure limits</li>
                    <li><strong>Symbol Setup</strong> – Configure MT5 symbols with your naming conventions</li>
                    <li><strong>Liquidity Connection</strong> – Enable commodity feeds from our liquidity network</li>
                    <li><strong>Testing</strong> – Verify execution quality and pricing accuracy</li>
                    <li><strong>Marketing Support</strong> – Receive trader education materials and promotional content</li>
                </ol>
                <p>
                    Typical integration timeline is 1-2 weeks for brokerages already running on our platform. New clients can launch with full commodity access as part of the standard onboarding process.
                </p>
            </ContentPageLayout>
        </main>
    );
}
