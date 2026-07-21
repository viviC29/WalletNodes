'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSearch } from '@/hooks/useSearch';

export function SearchBar() {
  const [address, setAddress] = useState('');
  const router = useRouter();
  const { search, isLoading, error } = useSearch();
  const [showError, setShowError] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;

    const result = await search(address);
    if (result) {
      router.push(`/wallet/${address}`);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <section className="px-4 py-12">
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onSubmit={handleSearch}
        className="max-w-2xl mx-auto"
      >
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none">
            <Search size={20} />
          </div>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Search wallet address…"
            className="w-full pl-12 pr-12 py-4 bg-surface border border-surface rounded-2xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-text-primary placeholder-text-secondary transition"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary text-sm font-medium">
            /
          </div>
        </div>

        {showError && error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 p-3 bg-red-900 bg-opacity-20 border border-red-700 rounded-lg text-red-300 text-sm"
          >
            {error}
          </motion.div>
        )}
      </motion.form>
    </section>
  );
}
