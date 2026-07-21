import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1d2330',
        surface: '#2a3441',
        accent: '#3B82F6',
        text: {
          primary: '#ffffff',
          secondary: '#94a3b8',
        },
      },
    },
  },
  plugins: [],
};

export default config;
