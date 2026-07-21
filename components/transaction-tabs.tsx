'use client';

import { useState } from 'react';
import type { Transaction, Token, Collectible } from '@/types/wallet';

interface TransactionTabsProps {
  transactions: Transaction[];
  tokens: Token[];
  collectibles: Collectible[];
}

export function TransactionTabs({
  transactions,
  tokens,
  collectibles,
}: TransactionTabsProps) {
  const [activeTab, setActiveTab] = useState<'transactions' | 'tokens' | 'collectibles'>('transactions');

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <div className="bg-surface rounded-2xl border border-surface overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-background">
          {[
            { id: 'transactions', label: 'Transactions', count: transactions.length },
            { id: 'tokens', label: 'Tokens', count: tokens.length },
            { id: 'collectibles', label: 'Collectibles', count: collectibles.length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 px-6 py-4 font-medium transition ${
                activeTab === tab.id
                  ? 'border-b-2 border-accent text-accent'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'transactions' && (
            <div className="space-y-4">
              {transactions.length === 0 ? (
                <p className="text-text-secondary">No transactions</p>
              ) : (
                transactions.map((tx) => (
                  <div key={tx.id} className="p-4 bg-background rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">{tx.direction === 'sent' ? 'Sent' : 'Received'}</p>
                      <p className="text-text-secondary text-sm">{tx.timestamp}</p>
                    </div>
                    <p className={tx.direction === 'sent' ? 'text-red-400' : 'text-green-400'}>
                      {tx.direction === 'sent' ? '-' : '+'}{tx.amount} TON
                    </p>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'tokens' && (
            <div className="space-y-4">
              {tokens.length === 0 ? (
                <p className="text-text-secondary">No tokens</p>
              ) : (
                tokens.map((token) => (
                  <div key={token.id} className="p-4 bg-background rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">{token.name}</p>
                      <p className="text-text-secondary text-sm">{token.symbol}</p>
                    </div>
                    <p className="font-medium">{token.balance}</p>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'collectibles' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {collectibles.length === 0 ? (
                <p className="text-text-secondary">No collectibles</p>
              ) : (
                collectibles.map((nft) => (
                  <div key={nft.id} className="p-4 bg-background rounded-lg">
                    <div className="mb-3 bg-surface rounded aspect-square flex items-center justify-center">
                      <img src={nft.image} alt={nft.name} className="w-full h-full object-cover rounded" />
                    </div>
                    <p className="font-medium">{nft.name}</p>
                    <p className="text-text-secondary text-sm truncate">{nft.tokenId}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
