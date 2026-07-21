'use client';

import { Copy, Share2 } from 'lucide-react';
import type { Wallet } from '@/types/wallet';

interface WalletCardProps {
  wallet: Wallet;
}

export function WalletCard({ wallet }: WalletCardProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(wallet.address);
  };

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <div className="bg-surface rounded-2xl p-8 border border-surface">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-8">
          <div className="flex-1 mb-6 md:mb-0">
            <h1 className="text-3xl font-bold mb-4">Wallet Details</h1>
            <div className="flex items-center space-x-2 mb-6">
              <code className="bg-background px-4 py-2 rounded-lg text-sm font-mono text-text-secondary">
                {wallet.address}
              </code>
              <button onClick={copyToClipboard} className="p-2 hover:bg-background rounded-lg transition">
                <Copy size={18} />
              </button>
              <button className="p-2 hover:bg-background rounded-lg transition">
                <Share2 size={18} />
              </button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="text-right">
              <p className="text-text-secondary text-sm mb-1">Balance</p>
              <h2 className="text-4xl font-bold mb-2">{wallet.balance} TON</h2>
              <p className="text-accent">${wallet.usdValue.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
