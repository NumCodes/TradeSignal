'use client';

import { GlassCard } from '@/components/GlassCard';
import { TrendingUp } from 'lucide-react';

export default function TradesPage() {
  const trades = [
    { pair: 'GBP/USD', entry: 1.2650, exit: 1.2720, pips: 70, profit: '$350', date: '2024-02-03', status: 'Won' },
    { pair: 'USD/JPY', entry: 110.25, exit: 111.00, pips: 75, profit: '$450', date: '2024-02-02', status: 'Won' },
    { pair: 'EUR/USD', entry: 1.0920, exit: 1.0850, pips: -70, profit: '-$280', date: '2024-01-31', status: 'Loss' },
    { pair: 'AUD/USD', entry: 0.6750, exit: 0.6850, pips: 100, profit: '$300', date: '2024-01-29', status: 'Won' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Trade History</h1>
        <p className="text-foreground/70">Your closed trades and historical performance</p>
      </div>

      <div className="space-y-4">
        {trades.map((trade, index) => (
          <GlassCard key={index} hover>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{trade.pair}</h3>
                <p className="text-sm text-foreground/70">
                  Entry: <span className="text-accent font-semibold">{trade.entry}</span> → Exit: <span className="text-accent font-semibold">{trade.exit}</span>
                </p>
              </div>
              <div className="text-right">
                <p className={`text-lg font-bold ${trade.status === 'Won' ? 'text-green-400' : 'text-red-400'}`}>
                  {trade.profit}
                </p>
                <p className="text-sm text-foreground/70">{trade.pips} pips</p>
                <p className="text-xs text-foreground/60">{trade.date}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
