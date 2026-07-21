export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface SearchWalletResponse {
  found: boolean;
  wallet?: any;
}
