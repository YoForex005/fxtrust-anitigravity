import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Client Dashboard | FxTrusts',
    description: 'FxTrusts Client Trading Dashboard - Trade forex, gold, and other instruments with real-time data.',
};

export default function ClientDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // This layout is intentionally minimal - the client dashboard has its own 
    // complete header, sidebar, and footer built into the page component.
    // No additional layout elements (like the landing page Header) should be added here.
    return <>{children}</>;
}
