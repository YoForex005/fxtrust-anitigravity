import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InnerPageHeader from '@/components/InnerPageHeader';

export const metadata: Metadata = {
    title: "Forex Broker Resources & Blog | Expert Guides & Reviews | FxTrusts",
    description: "Expert guides, CRM reviews, and industry insights for Forex Brokers. Learn about the best CRM systems, how to start a brokerage, and compare top providers.",
    keywords: ["forex broker resources", "forex crm reviews", "broker guides", "b2b broker blog"],
};

const TrophyIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38 8H34V4H14V8H10C8.9 8 8 8.9 8 10V16C8 19.31 10.69 22 14 22H15.64C16.97 24.76 19.54 26.85 22.67 27.69V34H18C15.79 34 14 35.79 14 38V42H34V38C34 35.79 32.21 34 30 34H25.33V27.69C28.46 26.85 31.03 24.76 32.36 22H34C37.31 22 40 19.31 40 16V10C40 8.9 39.1 8 38 8ZM14 18C12.9 18 12 17.1 12 16V12H14V18ZM36 16C36 17.1 35.1 18 34 18V12H36V16Z" fill="currentColor" />
    </svg>
);

const SettingsIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.86 25.95C38.94 25.31 39 24.66 39 24C39 23.34 38.94 22.69 38.86 22.05L42.92 18.89C43.28 18.61 43.38 18.1 43.17 17.68L39.33 10.32C39.12 9.9 38.63 9.73 38.2 9.89L33.44 11.82C32.46 11.07 31.4 10.45 30.24 9.98L29.5 4.94C29.43 4.48 29.04 4.13 28.58 4.13H20.9C20.44 4.13 20.05 4.48 19.98 4.94L19.24 9.98C18.08 10.45 17.02 11.08 16.04 11.82L11.28 9.89C10.85 9.72 10.36 9.9 10.15 10.32L6.31 17.68C6.09 18.1 6.2 18.61 6.56 18.89L10.62 22.05C10.54 22.69 10.48 23.35 10.48 24C10.48 24.65 10.54 25.31 10.62 25.95L6.56 29.11C6.2 29.39 6.1 29.9 6.31 30.32L10.15 37.68C10.36 38.1 10.85 38.27 11.28 38.11L16.04 36.18C17.02 36.93 18.08 37.55 19.24 38.02L19.98 43.06C20.05 43.52 20.44 43.87 20.9 43.87H28.58C29.04 43.87 29.43 43.52 29.5 43.06L30.24 38.02C31.4 37.55 32.46 36.92 33.44 36.18L38.2 38.11C38.63 38.28 39.12 38.1 39.33 37.68L43.17 30.32C43.38 29.9 43.28 29.39 42.92 29.11L38.86 25.95ZM24.74 32C20.33 32 16.74 28.41 16.74 24C16.74 19.59 20.33 16 24.74 16C29.15 16 32.74 19.59 32.74 24C32.74 28.41 29.15 32 24.74 32Z" fill="currentColor" />
    </svg>
);

const CompareIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6H4V42H20V6ZM16 38H8V10H16V38ZM44 18H28V42H44V18ZM40 38H32V22H40V38ZM28 14H44V10H28V14Z" fill="currentColor" />
    </svg>
);

const RocketIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 32C18 32 14 28 10 28C6 28 4 32 4 32L4 44C4 44 6 40 10 40C14 40 18 44 18 44V32ZM44 4C44 4 36 6 28 14C26 16 24.67 18 24 19.33L20 24L14 30L8 36L12 40L18 34L24 28L28.67 24C30 23.33 32 22 34 20C42 12 44 4 44 4ZM32 16C33.1 16 34 16.9 34 18C34 19.1 33.1 20 32 20C30.9 20 30 19.1 30 18C30 16.9 30.9 16 32 16Z" fill="currentColor" />
    </svg>
);

export default function BlogIndex() {
    const articles = [
        {
            title: "Top 10 Best Forex CRM Providers 2025",
            description: "We reviewed the top Forex CRM systems including FxTrusts, Leverate, B2Broker, ASJ, and Evergreen. Find out which CRM is the best for your brokerage.",
            href: "/resources/blog/best-forex-crm-providers-2025",
            category: "Reviews",
            icon: TrophyIcon,
            color: "blue",
            tags: ["CRM", "Reviews", "Comparison"]
        },
        {
            title: "MT4 vs MT5 CRM: The Manager's Guide",
            description: "Technical deep dive into the differences between MetaTrader 4 and 5 Manager APIs. Learn how your CRM integrates with the trading platform.",
            href: "/resources/blog/mt4-vs-mt5-crm",
            category: "Technical",
            icon: SettingsIcon,
            color: "green",
            tags: ["MT5", "Technical", "Integration"]
        },
        {
            title: "FxTrusts vs B2Broker: Which is Better?",
            description: "Head-to-head comparison of FxTrusts and B2Broker. See why 500+ brokers switched to us for better pricing and faster support.",
            href: "/resources/comparisons/b2broker-alternative",
            category: "Comparison",
            icon: CompareIcon,
            color: "purple",
            tags: ["B2Broker", "Comparison", "Pricing"]
        },
        {
            title: "FxTrusts vs Leverate: Modern vs Legacy",
            description: "Tired of Leverate's outdated technology? See why FxTrusts is the modern alternative with custom development and agile updates.",
            href: "/resources/comparisons/leverate-alternative",
            category: "Comparison",
            icon: CompareIcon,
            color: "purple",
            tags: ["Leverate", "LXCRM", "Alternative"]
        },
        {
            title: "How to Start a Forex Brokerage Firm",
            description: "The ultimate guide to launching your own Forex broker in 2025. From licensing to technology setup, we cover everything you need to know.",
            href: "/resources/guides/how-to-start-forex-broker",
            category: "Guide",
            icon: RocketIcon,
            color: "orange",
            tags: ["Getting Started", "Licensing", "Setup"]
        },
        {
            title: "Forex CRM Provider: The Complete Guide",
            description: "Everything you need to know about Forex CRM systems. Learn how to choose the best Forex CRM provider, integrate with MT5 Manager, and avoid common mistakes.",
            href: "/resources/guides/forex-crm-complete-guide",
            category: "Guide",
            icon: TrophyIcon,
            color: "blue",
            tags: ["CRM", "Provider Selection", "MT5"]
        }
    ];

    const categories = [
        { name: "All", count: articles.length },
        { name: "Reviews", count: articles.filter(a => a.category === "Reviews").length },
        { name: "Technical", count: articles.filter(a => a.category === "Technical").length },
        { name: "Comparison", count: articles.filter(a => a.category === "Comparison").length },
        { name: "Guide", count: articles.filter(a => a.category === "Guide").length }
    ];

    const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
        blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
        green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
        purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
        orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" }
    };

    return (
        <main>
            <Header />
            <InnerPageHeader
                title="Broker Resources & Knowledge Base"
                subtitle="Expert guides, reviews, and industry insights to help you build a better brokerage."
                badge="Blog & Resources"
            />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-7xl">

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                className="px-6 py-2 rounded-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all font-semibold text-gray-700 hover:text-blue-600"
                            >
                                {cat.name} <span className="ml-2 text-sm text-gray-500">({cat.count})</span>
                            </button>
                        ))}
                    </div>

                    {/* Articles Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => {
                            const Icon = article.icon;
                            const colors = colorClasses[article.color];

                            return (
                                <Link key={index} href={article.href} className="block group">
                                    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-blue-300">

                                        {/* Icon Header */}
                                        <div className={`h-40 ${colors.bg} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                                            <div className={colors.text}>
                                                <Icon />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            {/* Category Badge */}
                                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${colors.bg} ${colors.text}`}>
                                                {article.category}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                                                {article.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                                {article.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {article.tags.map((tag, i) => (
                                                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Read More Link */}
                                            <div className="flex items-center gap-2 font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                Read Article
                                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            );
                        })}
                    </div>

                    {/* SEO-Rich Bottom Section */}
                    <div className="mt-20 max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 border border-gray-200">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Read Our Broker Resources?</h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Industry Expertise</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our team has launched 100+ brokerages. We've seen what works and what doesn't. These guides are based on real-world experience, not theory.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">No BS, Just Facts</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We compare ourselves directly to competitors like B2Broker and Leverate. We're transparent about pricing, features, and trade-offs.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Updated for 2025</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        The Forex tech landscape changes fast. All our guides are updated regularly to reflect the latest regulations, platforms, and best practices.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">Actionable Insights</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Every article includes specific steps, tools, and recommendations. You'll finish reading with a clear action plan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Brokerage?</h3>
                            <p className="mb-6 text-blue-100 max-w-2xl">
                                Stop reading and start building. FxTrusts provides everything you need: MT5 White Label, CRM, Liquidity, and Crypto Payments.
                            </p>
                            <a href="/company/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors">
                                Get Started Today
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
