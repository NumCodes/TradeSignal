'use client';

import React from "react"

'use client';

import Link from 'next/link';
import { DashboardNav } from '@/components/DashboardNav';
import { useEffect, useState } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      window.location.href = '/auth/login';
    } else {
      setIsAuthed(true);
    }
  }, []);

  if (!isAuthed) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r border-border/40 bg-background/50 backdrop-blur flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border/40">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-accent">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-background">
              T
            </div>
            TradeSignal
          </Link>
        </div>

        {/* Navigation */}
        <DashboardNav />

        {/* Footer */}
        <div className="mt-auto p-6 border-t border-border/40">
          <p className="text-xs text-foreground/60 mb-4">
            Trading signals for professional traders
          </p>
          <a
            href="/contact"
            className="text-xs text-accent hover:text-accent/80 transition-colors"
          >
            Need help? Contact support
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="h-16 border-b border-border/40 bg-background/50 backdrop-blur flex items-center justify-between px-8">
          <div>
            <h2 className="text-sm text-foreground/60">Welcome Back</h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                localStorage.removeItem('authToken');
                localStorage.removeItem('userEmail');
                localStorage.removeItem('userName');
                window.location.href = '/';
              }}
              className="px-4 py-2 rounded-lg border border-border/40 text-foreground/70 hover:text-foreground hover:bg-accent/10 transition-colors text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
