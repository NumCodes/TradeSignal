'use client';

import { GlassCard } from '@/components/GlassCard';
import { TrendingUp, TrendingDown, Filter } from 'lucide-react';
import { useState } from 'react';

export default function SignalsPage() {
  const [filter, setFilter] = useState<'all' | 'active' | 'closed'>('all');

  const signals = [
    {
      id: 1,
      pair: 'EUR/USD',
      type: 'Forex',
      direction: 'buy',
      entry: 1.0845,
      current: 1.0875,
      target: 1.0920,
      stopLoss: 1.0800,
      status: 'active',
      date: '2024-02-04',
      accuracy: 'High',
      riskReward: '1:2.5',
    },
    {
      id: 2,
      pair: 'GBP/USD',
      type: 'Forex',
      direction: 'sell',
      entry: 1.2650,
      current: 1.2620,
      target: 1.2600,
      stopLoss: 1.2680,
      status: 'closed',
      date: '2024-02-03',
      accuracy: 'Won',
      riskReward: '1:2',
      pips: 50,
    },
    {
      id: 3,
      pair: 'Volatility 100 Index',
      type: 'Indices',
      direction: 'buy',
      entry: 1250.5,
      current: 1265.2,
      target: 1280.0,
      stopLoss: 1240.0,
      status: 'active',
      date: '2024-02-04',
      accuracy: 'High',
      riskReward: '1:3',
    },
    {
      id: 4,
      pair: 'USD/JPY',
      type: 'Forex',
      direction: 'buy',
      entry: 110.25,
      current: 110.95,
      target: 111.00,
      stopLoss: 109.50,
      status: 'closed',
      date: '2024-02-02',
      accuracy: 'Won',
      riskReward: '1:1.2',
      pips: 75,
    },
    {
      id: 5,
      pair: 'Gold/USD',
      type: 'Commodities',
      direction: 'sell',
      entry: 2045.50,
      current: 2035.20,
      target: 2020.00,
      stopLoss: 2060.00,
      status: 'active',
      date: '2024-02-03',
      accuracy: 'Medium',
      riskReward: '1:1.7',
    },
  ];

  const filtered = signals.filter(s => {
    if (filter === 'all') return true;
    return s.status === filter;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Trading Signals</h1>
        <p className="text-foreground/70">View all active and closed trading signals with detailed analysis</p>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'all'
              ? 'bg-accent text-background'
              : 'border border-border/40 text-foreground/70 hover:text-foreground'
          }`}
        >
          All Signals
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'active'
              ? 'bg-accent text-background'
              : 'border border-border/40 text-foreground/70 hover:text-foreground'
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('closed')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'closed'
              ? 'bg-accent text-background'
              : 'border border-border/40 text-foreground/70 hover:text-foreground'
          }`}
        >
          Closed
        </button>
      </div>

      {/* Signals Grid */}
      <div className="space-y-4">
        {filtered.map((signal) => (
          <GlassCard key={signal.id} hover>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
              {/* Pair Info */}
              <div>
                <h3 className="font-bold text-lg mb-1">{signal.pair}</h3>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded text-xs font-medium bg-accent/20 text-accent">
                    {signal.type}
                  </span>
                  <span className={`text-sm font-semibold ${
                    signal.direction === 'buy' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {signal.direction === 'buy' ? '↑ BUY' : '↓ SELL'}
                  </span>
                </div>
              </div>

              {/* Levels */}
              <div className="text-sm space-y-1">
                <p className="text-foreground/70">Entry: <span className="font-semibold text-foreground">{signal.entry}</span></p>
                <p className="text-foreground/70">Target: <span className="font-semibold text-accent">{signal.target}</span></p>
                <p className="text-foreground/70">SL: <span className="font-semibold text-destructive">{signal.stopLoss}</span></p>
              </div>

              {/* Current Price */}
              <div className="text-center">
                <p className="text-foreground/70 text-sm mb-1">Current</p>
                <p className="text-xl font-bold text-accent">{signal.current}</p>
                <p className={`text-xs font-semibold ${
                  signal.direction === 'buy' 
                    ? signal.current > signal.entry ? 'text-green-400' : 'text-red-400'
                    : signal.current < signal.entry ? 'text-green-400' : 'text-red-400'
                }`}>
                  {signal.direction === 'buy' 
                    ? signal.current > signal.entry ? '↑ +' : '↓ '
                    : signal.current < signal.entry ? '↑ -' : '↓ +'
                  }{Math.abs(signal.current - signal.entry).toFixed(2)}
                </p>
              </div>

              {/* Stats */}
              <div className="text-sm space-y-1">
                <p className="text-foreground/70">Risk/Reward: <span className="font-semibold text-foreground">{signal.riskReward}</span></p>
                <p className="text-foreground/70">Accuracy: <span className="font-semibold text-accent">{signal.accuracy}</span></p>
                <p className="text-foreground/70 text-xs">{signal.date}</p>
              </div>

              {/* Status */}
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  signal.status === 'active'
                    ? 'bg-accent/20 text-accent'
                    : 'bg-green-500/20 text-green-400'
                }`}>
                  {signal.status === 'active' ? 'Active' : `Closed ${signal.pips ? `(+${signal.pips} pips)` : ''}`}
                </span>
              </div>

              {/* Action */}
              <div className="text-right">
                <button className="px-4 py-2 rounded-lg border border-accent/40 text-accent hover:bg-accent/10 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <GlassCard className="text-center py-12">
          <p className="text-foreground/70 text-lg">No signals found for selected filter</p>
        </GlassCard>
      )}
    </div>
  );
}
