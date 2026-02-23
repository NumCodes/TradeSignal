'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, TrendingUp, BarChart3, User, Settings } from 'lucide-react';

export function DashboardNav() {
  const pathname = usePathname();

  const links = [
    { href: '/dashboard', label: 'Overview', icon: LayoutGrid },
    { href: '/dashboard/signals', label: 'Trading Signals', icon: TrendingUp },
    { href: '/dashboard/trades', label: 'Trade History', icon: BarChart3 },
    { href: '/dashboard/profile', label: 'Profile', icon: User },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="flex-1 px-4 py-6 space-y-1">
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              isActive
                ? 'bg-accent/20 text-accent'
                : 'text-foreground/70 hover:text-foreground hover:bg-accent/10'
            }`}
          >
            <Icon size={20} />
            <span className="text-sm font-medium">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
