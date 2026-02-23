'use client';

import { GlassCard } from '@/components/GlassCard';
import { TrendingUp, Users, Award, DollarSign, Bell, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('userEmail') || 'trader@example.com';
    setUserEmail(email);
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      label: 'Total Signals This Month',
      value: '24',
      change: '+8 from last month',
    },
    {
      icon: Award,
      label: 'Win Rate',
      value: '87%',
      change: 'Last 30 days',
    },
    {
      icon: DollarSign,
      label: 'Subscription Status',
      value: 'Pro Plan',
      change: 'Expires in 28 days',
    },
    {
      icon: Users,
      label: 'Active Signals',
      value: '7',
      change: '3 Forex, 4 Indices',
    },
  ];

  const recentSignals = [
    {
      pair: 'EUR/USD',
      type: 'Forex',
      entry: 1.0845,
      target: 1.0920,
      status: 'Active',
      time: '2 hours ago',
    },
    {
      pair: 'GBP/USD',
      type: 'Forex',
      entry: 1.2650,
      target: 1.2720,
      status: 'Closed (+85 pips)',
      time: '5 hours ago',
    },
    {
      pair: 'Volatility 100',
      type: 'Indices',
      entry: 1250.5,
      target: 1280.0,
      status: 'Active',
      time: '12 hours ago',
    },
    {
      pair: 'USD/JPY',
      type: 'Forex',
      entry: 110.25,
      target: 111.00,
      status: 'Closed (+75 pips)',
      time: '1 day ago',
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Trading Dashboard</h1>
        <p className="text-foreground/70">
          Welcome, <span className="text-accent font-semibold">{userEmail}</span>
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <GlassCard key={index} hover>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-foreground/70 text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold mb-2">{stat.value}</p>
                  <p className="text-xs text-foreground/60">{stat.change}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={24} className="text-accent" />
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Recent Signals and Updates */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Signals */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Recent Signals</h2>
          <div className="space-y-3">
            {recentSignals.map((signal, index) => (
              <GlassCard key={index} hover>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold">{signal.pair}</h3>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                        {signal.type}
                      </span>
                    </div>
                    <div className="text-sm text-foreground/70 space-y-1">
                      <p>Entry: <span className="text-accent font-semibold">{signal.entry}</span></p>
                      <p>Target: <span className="text-accent font-semibold">{signal.target}</span></p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold mb-2 ${
                      signal.status.includes('Closed') ? 'text-accent' : 'text-foreground'
                    }`}>
                      {signal.status}
                    </p>
                    <p className="text-xs text-foreground/60">{signal.time}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Notifications */}
          <GlassCard>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Bell size={20} className="text-accent" />
              Recent Updates
            </h3>
            <div className="space-y-4 text-sm text-foreground/70">
              <div>
                <p className="font-semibold text-foreground mb-1">New Signal: EUR/USD</p>
                <p className="text-xs text-foreground/60">2 hours ago</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Trade Closed Successfully</p>
                <p className="text-xs text-foreground/60">GBP/USD +85 pips</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Webinar Reminder</p>
                <p className="text-xs text-foreground/60">Tomorrow at 6 PM GMT</p>
              </div>
            </div>
          </GlassCard>

          {/* Subscription */}
          <GlassCard>
            <h3 className="text-lg font-bold mb-4">Subscription</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-foreground/70 mb-1">Current Plan</p>
                <p className="text-lg font-bold text-accent">Pro Plan</p>
              </div>
              <div>
                <p className="text-sm text-foreground/70 mb-1">Renewal Date</p>
                <p className="font-semibold flex items-center gap-2">
                  <Calendar size={16} className="text-accent" />
                  March 5, 2024
                </p>
              </div>
              <button className="w-full mt-4 px-4 py-2 rounded-lg border border-accent/40 text-accent font-medium hover:bg-accent/10 transition-colors text-sm">
                Upgrade Plan
              </button>
            </div>
          </GlassCard>

          {/* Quick Links */}
          <GlassCard>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/education" className="block px-3 py-2 rounded-lg text-sm text-accent hover:bg-accent/10 transition-colors">
                → View Courses
              </a>
              <a href="/dashboard/signals" className="block px-3 py-2 rounded-lg text-sm text-accent hover:bg-accent/10 transition-colors">
                → All Signals
              </a>
              <a href="/dashboard/profile" className="block px-3 py-2 rounded-lg text-sm text-accent hover:bg-accent/10 transition-colors">
                → Edit Profile
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
