import { Metadata } from 'next';
import TransactionsContent from './TransactionsContent';

export const metadata: Metadata = {
    title: 'Transaction Management | Deposits & Withdrawals | FxTrusts',
    description: 'Securely manage client financial transactions. Approve deposits, process withdrawals, and audit history.',
    openGraph: {
        title: 'Transaction Management | Deposits & Withdrawals | FxTrusts',
        description: 'Securely manage client financial transactions. Approve deposits, process withdrawals, and audit history.',
        type: 'website',
        url: 'https://fxtrusts.com/prop-firm/live-demo/admin/transactions',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Transaction Management | Deposits & Withdrawals | FxTrusts',
        description: 'Securely manage client financial transactions. Approve deposits, process withdrawals, and audit history.',
    },
    alternates: {
        canonical: 'https://fxtrusts.com/prop-firm/live-demo/admin/transactions',
    },
};

export default function TransactionsPage() {
    return (
        <>
            
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Transaction Management | Deposits & Withdrawals | FxTrusts","description":"Securely manage client financial transactions. Approve deposits, process withdrawals, and audit history.","url":"https://fxtrusts.com/prop-firm/live-demo/admin/transactions"}) }}
      />
      <h1 className="sr-only">Transactions Page</h1>
            <TransactionsContent />
        </>
    );
}
