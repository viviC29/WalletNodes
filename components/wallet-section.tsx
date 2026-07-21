'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const wallets = [
  {
    id: 1,
    name: 'Tonkeeper',
    description: 'The leading non-custodial wallet on TON, delivering the best set of features',
    icon: '🔷',
  },
  {
    id: 2,
    name: 'Tonkeeper Pro',
    description: 'Your personal wallet on desktop. Receive, buy and spend crypto with ease',
    icon: '◇',
  },
];

export function WalletSection() {
  return (
    <section className="px-4 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Wallets */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
            <span>Wallets</span>
            <ChevronRight size={24} />
          </h2>
          <div className="space-y-4">
            {wallets.map((wallet, index) => (
              <motion.div
                key={wallet.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-4 bg-surface rounded-xl hover:bg-opacity-80 transition cursor-pointer group"
              >
                <div className="flex items-start space-x-3">
                  <div className="text-2xl mt-1">{wallet.icon}</div>
                  <div>
                    <h3 className="font-bold group-hover:text-accent transition">{wallet.name}</h3>
                    <p className="text-text-secondary text-sm">{wallet.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tokens */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
            <span>Tokens</span>
            <ChevronRight size={24} />
          </h2>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-4 bg-surface rounded-xl"
            >
              <h3 className="font-bold mb-1">Most visited</h3>
              <p className="text-text-secondary text-sm">Popular tokens</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="p-4 bg-surface rounded-xl"
            >
              <h3 className="font-bold mb-1">Recently added</h3>
              <p className="text-text-secondary text-sm">New tokens</p>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
            <span>Stats</span>
            <ChevronRight size={24} />
          </h2>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-text-secondary text-sm mb-2">Jettons Transfer · 1d</p>
              <p className="text-3xl font-bold">360,740</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <p className="text-text-secondary text-sm mb-2">NFT Transfer · 1d</p>
              <p className="text-3xl font-bold">25,165</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
