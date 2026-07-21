import { useEffect, useState } from 'react';
import { useAuthStore } from '@/store/authStore';

export function useAdminAuth() {
  const { isAuthenticated, token } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('adminToken');
    if (storedToken) {
      useAuthStore.setState({ isAuthenticated: true, token: storedToken });
    }
    setIsLoading(false);
  }, []);

  return { isAuthenticated, token, isLoading };
}
