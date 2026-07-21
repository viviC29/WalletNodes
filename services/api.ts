import axios from 'axios';
import type { ApiResponse, SearchWalletResponse } from '@/types/api';
import type { WalletDetailsResponse } from '@/types/wallet';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const walletService = {
  search: async (address: string): Promise<SearchWalletResponse> => {
    const response = await apiClient.get(`/wallet/search?address=${address}`);
    return response.data;
  },

  getDetails: async (address: string): Promise<WalletDetailsResponse> => {
    const response = await apiClient.get(`/wallet/${address}`);
    return response.data;
  },
};

export const adminService = {
  login: async (email: string, password: string): Promise<any> => {
    const response = await apiClient.post('/admin/login', { email, password });
    return response.data;
  },

  createWallet: async (data: any): Promise<any> => {
    const response = await apiClient.post('/admin/wallets', data);
    return response.data;
  },

  updateWallet: async (id: string, data: any): Promise<any> => {
    const response = await apiClient.put(`/admin/wallets/${id}`, data);
    return response.data;
  },

  deleteWallet: async (id: string): Promise<any> => {
    const response = await apiClient.delete(`/admin/wallets/${id}`);
    return response.data;
  },

  addTransaction: async (data: any): Promise<any> => {
    const response = await apiClient.post('/admin/transactions', data);
    return response.data;
  },

  updateTransaction: async (id: string, data: any): Promise<any> => {
    const response = await apiClient.put(`/admin/transactions/${id}`, data);
    return response.data;
  },

  deleteTransaction: async (id: string): Promise<any> => {
    const response = await apiClient.delete(`/admin/transactions/${id}`);
    return response.data;
  },
};
