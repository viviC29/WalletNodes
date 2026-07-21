'use client';

import { useState } from 'react';
import { walletService } from '@/services/api';

export function useSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (address: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await walletService.search(address);
      if (!result.found) {
        setError('Wallet not found. This wallet is not registered in Wallet Nodes.');
        return null;
      }
      return result.wallet;
    } catch (err) {
      setError('Error searching for wallet. Please try again.');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { search, isLoading, error };
}
