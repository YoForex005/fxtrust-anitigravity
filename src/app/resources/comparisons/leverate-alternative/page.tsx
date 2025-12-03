import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerPageHeader from '@/components/InnerPageHeader';

export const metadata: Metadata = {
    title: "Leverate CRM Alternative | Best Forex CRM Developer | FxTrusts",
    description: "Tired of Leverate's legacy tech? FxTrusts is the modern Forex CRM Developer offering custom solutions, better UI, and lower costs. Compare LXCRM vs FxTrusts.",
    keywords: [
        "leverate crm",
        "forex crm developer",
        "lxcrm alternative",
        "best forex broker crm",
        "custom forex crm"
    ],
};

export default function LeverateComparisonPage() {
    return (
        <main>
            <Header />
            <InnerPageHeader
                title="FxTrusts vs. Leverate"
                subtitle="Legacy vs. Modern. The choice is clear."
                badge="Comparison"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Leave Leverate?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Leverate was great in 2015. But the market has moved on. Today's brokers need speed, customization, and crypto-native features. As a modern <strong>Forex CRM Developer</strong>, FxTrusts builds for the future, not the past.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Leverate (LXCRM)</h3>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-center gap-2">❌ <strong>Legacy UI:</strong> Looks like Windows 95.</li>
                                <li className="flex items-center gap-2">❌ <strong>Slow Dev Cycles:</strong> Custom features take months.</li>
                                <li className="flex items-center gap-2">❌ <strong>Expensive:</strong> High setup and monthly fees.</li>
                                <li className="flex items-center gap-2">❌ <strong>Closed Ecosystem:</strong> Hard to integrate 3rd party tools.</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
                            <h3 className="text-2xl font-bold mb-4 text-blue-900">FxTrusts</h3>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-center gap-2">✅ <strong>Modern UI:</strong> React-based, fast, and beautiful.</li>
                                <li className="flex items-center gap-2">✅ <strong>Agile Dev:</strong> We ship updates weekly.</li>
                                <li className="flex items-center gap-2">✅ <strong>Fair Pricing:</strong> Pay for what you use.</li>
                                <li className="flex items-center gap-2">✅ <strong>Open API:</strong> Connect to any VoIP, PSP, or KYC provider.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">The "Best Forex Broker CRM" for 2025</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Don't let legacy tech hold you back. Switch to FxTrusts.
                        </p>
                        <a href="/company/contact" className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-colors text-lg">
                            Get Migration Plan
                        </a>
                    </div>

                </div>
            </section>
            <Footer />
        </main>
    );
}
