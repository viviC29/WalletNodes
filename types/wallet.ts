export interface Wallet {
  id: string;
  address: string;
  balance: number;
  usdValue: number;
  lockedBalance: number;
  lockedUsdValue: number;
  tokenCount: number;
  collectibleCount: number;
  contractType: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  walletId: string;
  txHash: string;
  direction: 'sent' | 'received';
  amount: number;
  gramAmount: number;
  usdAmount: number;
  timestamp: string;
  status: 'completed' | 'failed' | 'pending';
  from?: string;
  to?: string;
  description?: string;
}

export interface Token {
  id: string;
  walletId: string;
  symbol: string;
  name: string;
  balance: number;
  decimals: number;
  contractAddress: string;
}

export interface Collectible {
  id: string;
  walletId: string;
  name: string;
  description?: string;
  image: string;
  tokenId: string;
  collectionAddress: string;
}

export interface WalletDetailsResponse {
  wallet: Wallet;
  transactions: Transaction[];
  tokens: Token[];
  collectibles: Collectible[];
}
