import type { Metadata } from 'next';
import { GlassCard } from '@/components/GlassCard';

export const metadata: Metadata = {
  title: 'Risk Disclaimer | TradeSignal',
  description: 'Important risk disclosure and trading warnings for TradeSignal platform users.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Risk Disclaimer</h1>

        <GlassCard className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">Important Risk Warning</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Trading in foreign currencies (forex) and synthetic indices is extremely risky and may not be suitable for all investors. Past performance is NOT indicative of future results. The trading of currency pairs, commodities, and other financial instruments carries a high risk of loss. It is possible to lose all or more than your initial investment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">No Guarantee of Profits</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              We do NOT guarantee that trading signals provided by TradeSignal will be profitable or result in gains. All trading involves substantial risk of loss. No one should trade funds they cannot afford to lose. Each signal is for educational and informational purposes only, not as a direct recommendation for specific trades.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">Educational Content Only</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              All content, signals, courses, and materials provided by TradeSignal are for educational purposes only. We are not providing financial advice, investment recommendations, or professional trading advice. You should conduct your own thorough due diligence and consult with a qualified financial advisor before making any trading decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">Leverage Risk</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Trading with leverage can amplify both profits and losses. Even small movements in currency pairs can result in substantial losses if leverage is used. You may lose more than your initial deposit if you trade with leverage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">Market Risk</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              The forex and synthetic indices markets are volatile and unpredictable. Economic events, political developments, and unexpected news can cause rapid price movements that result in significant losses. No analysis technique can guarantee profits in such an environment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">Technical Risk</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Trading platforms and systems may experience technical failures, connectivity issues, or service disruptions that could result in losses. You assume all risks associated with technical failures and service interruptions.
            </p>
          </div>

          <div className="border-t border-border/40 pt-6">
            <h2 className="text-2xl font-bold text-accent mb-4">Your Responsibility</h2>
            <p className="text-foreground/70 leading-relaxed">
              By using TradeSignal services, you acknowledge that you understand the risks involved in trading, and you accept full responsibility for any trading decisions you make. You agree that TradeSignal is not liable for any losses or damages resulting from your trading activities.
            </p>
          </div>
        </GlassCard>

        <div className="mt-12 p-6 rounded-lg bg-destructive/20 border border-destructive/40">
          <p className="text-foreground text-sm">
            <span className="font-bold">Last Updated:</span> February 2024. Please review this disclaimer regularly as it may be updated without notice.
          </p>
        </div>
      </section>
    </div>
  );
}
