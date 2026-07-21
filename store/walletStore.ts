import { create } from 'zustand';
import type { Wallet } from '@/types/wallet';

interface WalletState {
  currentWallet: Wallet | null;
  wallets: Wallet[];
  setCurrentWallet: (wallet: Wallet) => void;
  setWallets: (wallets: Wallet[]) => void;
  updateWallet: (wallet: Wallet) => void;
}

export const useWalletStore = create<WalletState>((set) => (({
  currentWallet: null,
  wallets: [],
  setCurrentWallet: (wallet: Wallet) => set({ currentWallet: wallet }),
  setWallets: (wallets: Wallet[]) => set({ wallets }),
  updateWallet: (wallet: Wallet) =>
    set((state) => (({
      wallets: state.wallets.map((w) => (w.id === wallet.id ? wallet : w)),
      currentWallet: state.currentWallet?.id === wallet.id ? wallet : state.currentWallet,
    }))),
})));
