'use client';

import Link from 'next/link';
import { Search, Heart, Network } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-background border-b border-surface z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">◆</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">Wallet Nodes</span>
        </Link>

        {/* Center */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-surface rounded-lg transition text-text-secondary hover:text-text-primary">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-surface rounded-lg transition text-text-secondary hover:text-text-primary">
            <Heart size={20} />
          </button>
          <button className="p-2 hover:bg-surface rounded-lg transition text-text-secondary hover:text-text-primary">
            <Network size={20} />
          </button>
        </div>

        {/* Right */}
        <button className="px-6 py-2 bg-accent text-white rounded-lg font-medium hover:bg-blue-600 transition">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
