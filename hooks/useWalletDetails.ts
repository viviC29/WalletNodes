import { useQuery } from '@tanstack/react-query';
import { walletService } from '@/services/api';

export function useWalletDetails(address: string) {
  return useQuery({
    queryKey: ['wallet', address],
    queryFn: () => walletService.getDetails(address),
    enabled: !!address,
  });
}
