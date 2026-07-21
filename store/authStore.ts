import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  token: string | null;
  login: (token: string, user: any) => void;
  logout: () => void;
  setUser: (user: any) => void;
}

export const useAuthStore = create<AuthState>((set) => (({
  isAuthenticated: false,
  user: null,
  token: null,
  login: (token: string, user: any) => {
    localStorage.setItem('adminToken', token);
    set({ isAuthenticated: true, token, user });
  },
  logout: () => {
    localStorage.removeItem('adminToken');
    set({ isAuthenticated: false, token: null, user: null });
  },
  setUser: (user: any) => set({ user }),
})));
