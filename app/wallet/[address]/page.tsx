'use client';

import { useParams } from 'next/navigation';
import { useWalletDetails } from '@/hooks/useWalletDetails';
import { Navigation } from '@/components/navigation';
import { Breadcrumb } from '@/components/breadcrumb';
import { WalletCard } from '@/components/wallet-card';
import { TransactionTabs } from '@/components/transaction-tabs';

export default function WalletDetailsPage() {
  const params = useParams();
  const address = params.address as string;
  const { data, isLoading, error } = useWalletDetails(address);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <Breadcrumb address={address} />
        {isLoading && <div className="text-center py-20">Loading...</div>}
        {error && <div className="text-center py-20 text-red-400">Error loading wallet</div>}
        {data && (
          <>
            <WalletCard wallet={data.wallet} />
            <TransactionTabs transactions={data.transactions} tokens={data.tokens} collectibles={data.collectibles} />
          </>
        )}
      </div>
    </main>
  );
}
