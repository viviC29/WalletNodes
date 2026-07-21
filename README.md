# Wallet Nodes

A premium blockchain wallet explorer for the TON network with private wallet verification and admin management.

## Features

- 🔍 **Private Wallet Search** - Search only wallets registered in the backend
- 💰 **Locked Balance Feature** - Display locked balances with premium styling
- 📊 **Transaction History** - View detailed transaction records
- 🔐 **Admin Dashboard** - Manage wallets and transactions
- 🎨 **Premium UI** - Dark theme with smooth animations
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui, Lucide React
- **Charts**: Recharts
- **State Management**: Zustand
- **Data Fetching**: React Query
- **Backend**: Node.js/Express (to be built)
- **Database**: PostgreSQL (to be configured)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
walletNodes/
├── app/                    # Next.js app directory
│   ├── layout.tsx
│   ├── page.tsx           # Landing page
│   ├── wallet/            # Wallet details page (coming)
│   └── admin/             # Admin dashboard (coming)
├── components/            # React components
├── hooks/                 # Custom React hooks
├── services/              # API services
├── store/                 # Zustand stores
├── types/                 # TypeScript types
└── public/                # Static assets
```

## Next Steps

1. Build wallet details page (`app/wallet/[address]/page.tsx`)
2. Build admin dashboard (`app/admin/page.tsx`)
3. Implement backend API
4. Set up PostgreSQL database
5. Implement authentication

## License

MIT
