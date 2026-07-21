'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  address: string;
}

export function Breadcrumb({ address }: BreadcrumbProps) {
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <div className="flex items-center space-x-2 text-text-secondary">
        <Link href="/" className="hover:text-accent transition">Home</Link>
        <ChevronRight size={16} />
        <span className="text-text-primary font-medium truncate">{address.slice(0, 10)}...{address.slice(-8)}</span>
      </div>
    </div>
  );
}
