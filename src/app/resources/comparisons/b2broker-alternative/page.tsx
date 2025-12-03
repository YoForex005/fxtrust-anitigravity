import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerPageHeader from '@/components/InnerPageHeader';

export const metadata: Metadata = {
    title: "B2Broker Alternative | Better Pricing & Technology | FxTrusts",
    description: "Looking for a B2Broker alternative? FxTrusts offers superior B2B Broker solutions with transparent pricing, no hidden fees, and faster support. Compare us now.",
    keywords: [
        "b2broker alternative",
        "b2b broker competitors",
        "better than b2broker",
        "b2broker vs fxtrusts",
        "b2b forex broker solutions",
        "white label forex broker cost",
        "forex liquidity provider comparison"
    ],
};

export default function ComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Table",
        "about": "FxTrusts vs B2Broker Comparison"
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Header />
            <InnerPageHeader
                title="FxTrusts vs. B2Broker"
                subtitle="The B2B Broker Landscape has changed. You deserve better."
                badge="Comparison"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Brokers Are Switching</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            B2Broker is a giant. We respect them. But giants get slow. They get expensive. And they stop caring about the little guy. We are the agile, hungry alternative that puts <strong>your profit</strong> first.
                        </p>
                    </div>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto mb-20">
                        <table className="w-full border-collapse bg-white shadow-xl rounded-2xl overflow-hidden">
                            <thead>
                                <tr className="bg-gray-900 text-white">
                                    <th className="p-6 text-left text-xl font-bold w-1/3">Feature</th>
                                    <th className="p-6 text-center text-xl font-bold w-1/3 bg-blue-600">FxTrusts (Us)</th>
                                    <th className="p-6 text-center text-xl font-bold w-1/3 bg-gray-800">B2Broker (Them)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="p-6 font-semibold text-gray-900">Setup Fee</td>
                                    <td className="p-6 text-center font-bold text-green-600">Transparent & Low</td>
                                    <td className="p-6 text-center text-gray-600">High ($20k+)</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-semibold text-gray-900">Monthly Fees</td>
                                    <td className="p-6 text-center font-bold text-green-600">Flat Rate (No Volume Tax)</td>
                                    <td className="p-6 text-center text-gray-600">Volume-Based (You grow, you pay more)</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-semibold text-gray-900">Support Response</td>
                                    <td className="p-6 text-center font-bold text-green-600">&lt; 5 Minutes (Direct Slack)</td>
                                    <td className="p-6 text-center text-gray-600">Ticket System (24-48 Hours)</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-semibold text-gray-900">Customization</td>
                                    <td className="p-6 text-center font-bold text-green-600">Full Custom Dev Available</td>
                                    <td className="p-6 text-center text-gray-600">"Take it or leave it"</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-semibold text-gray-900">Crypto Payments</td>
                                    <td className="p-6 text-center font-bold text-green-600">1% Flat Fee</td>
                                    <td className="p-6 text-center text-gray-600">High Spreads + Fees</td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-semibold text-gray-900">Liquidity</td>
                                    <td className="p-6 text-center font-bold text-green-600">Agnostic (Connect Anyone)</td>
                                    <td className="p-6 text-center text-gray-600">Ecosystem Lock-in</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 text-gray-900">The "Ecosystem" Trap</h3>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                B2Broker wants you to use <strong>only</strong> their products. Their CRM only works well with their Trader's Room. Their Trader's Room only works with their Liquidity.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                <strong>FxTrusts is open.</strong> We believe in freedom. Use our CRM with any liquidity provider. Use our Liquidity with any bridge. We win your business by being the best, not by locking you in.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <h4 className="text-xl font-bold mb-4 text-gray-900">What Our Clients Say</h4>
                            <blockquote className="italic text-gray-600 mb-4">
                                "We moved from B2Broker to FxTrusts last year. The migration was seamless. We saved 40% on monthly fees and the support is actually helpful."
                            </blockquote>
                            <cite className="font-bold text-gray-900 not-italic">- CEO, Top 20 MENA Broker</cite>
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Upgrade?</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Don't settle for being just another number in a giant database.
                        </p>
                        <a href="/company/contact" className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-colors text-lg">
                            Get a Quote (It's Free)
                        </a>
                    </div>

                </div>
            </section>
            <Footer />
        </main>
    );
}
