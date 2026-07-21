import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1D2330',
        surface: '#2A3142',
        accent: '#3B82F6',
        text: {
          primary: '#FFFFFF',
          secondary: '#9CA3AF',
        },
        status: {
          active: '#10B981',
          inactive: '#6B7280',
          failed: '#EF4444',
        },
      },
      backgroundColor: {
        base: '#1D2330',
        card: '#2A3142',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
