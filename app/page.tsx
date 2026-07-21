import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { SearchBar } from '@/components/search-bar';
import { StatisticsCard } from '@/components/statistics-card';
import { WalletSection } from '@/components/wallet-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <Hero />
        <SearchBar />
        <StatisticsCard />
        <WalletSection />
      </div>
    </main>
  );
}
