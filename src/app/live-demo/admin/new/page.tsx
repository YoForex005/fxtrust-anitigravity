import { Metadata } from 'next';
import NewAccountContent from './NewAccountContent';

export const metadata: Metadata = {
    title: 'New Client Registration | Account Creation | FxTrusts',
    description: 'Manually register a new client account directly into the CRM system.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function NewAccountPage() {
    return <NewAccountContent />;
}
