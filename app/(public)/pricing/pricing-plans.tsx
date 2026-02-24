'use client';

import Link from 'next/link';
import { GlassCard } from '@/components/GlassCard';
import { Check } from 'lucide-react';
import { useState } from 'react';

export function PricingPlans() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for beginners',
      price: billingPeriod === 'monthly' ? 29 : 290,
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      savings: billingPeriod === 'yearly' ? 'Save 16%' : null,
      features: [
        'Forex signals (5-7 per week)',
        'Basic education courses',
        'Email support',
        'Community forum access',
        'Trading journal template',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Pro',
      description: 'For serious traders',
      price: billingPeriod === 'monthly' ? 79 : 790,
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      savings: billingPeriod === 'yearly' ? 'Save 16%' : null,
      features: [
        'All Basic features',
        'Synthetic indices signals',
        'Advanced education courses',
        'Priority email & chat support',
        'Weekly webinars',
        'Signal analysis breakdowns',
        'Strategy guides',
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Elite',
      description: 'Professional trading',
      price: billingPeriod === 'monthly' ? 199 : 1990,
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      savings: billingPeriod === 'yearly' ? 'Save 16%' : null,
      features: [
        'All Pro features',
        'One-on-one mentorship',
        '2 mentoring sessions/month',
        'Custom strategy development',
        '24/7 priority support',
        'VIP trading room access',
        'Personal portfolio review',
        'Advanced analytics dashboard',
      ],
      cta: 'Start Mentorship',
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Simple, Transparent <span className="text-accent">Pricing</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Choose the perfect plan for your trading journey. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-border/40 bg-card/50 backdrop-blur-md p-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-accent text-background'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                billingPeriod === 'yearly'
                  ? 'bg-accent text-background'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Yearly (Save 16%)
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all ${plan.highlighted ? 'md:scale-105' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute inset-0 rounded-xl bg-accent/20 blur-xl -z-10"></div>
              )}

              <GlassCard
                className={`h-full flex flex-col ${
                  plan.highlighted ? 'border-accent/60 bg-card/80' : ''
                }`}
              >
                {plan.savings && (
                  <div className="text-xs font-bold text-accent uppercase tracking-widest mb-4">
                    {plan.savings}
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-foreground/60 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-sm text-foreground/60">{plan.period}</span>
                </div>

                <Link
                  href="/auth/register"
                  className={`w-full px-6 py-3 rounded-lg font-semibold text-center transition-colors mb-6 ${
                    plan.highlighted
                      ? 'bg-accent text-background hover:bg-accent/90'
                      : 'border border-accent/40 text-accent hover:bg-accent/10'
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-3 flex-1">
                  <p className="text-xs font-semibold text-foreground/70 uppercase tracking-widest">
                    Features:
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: 'Can I change my plan anytime?',
              a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
            },
            {
              q: 'Do you offer a free trial?',
              a: 'Yes, Basic plan members get a 7-day free trial. No credit card required to start.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards (Visa, Mastercard, Amex), bank transfers, and cryptocurrency.',
            },
            {
              q: 'Is there a money-back guarantee?',
              a: '100% money-back guarantee within 7 days if you\'re not satisfied.',
            },
            {
              q: 'Do you offer discounts for annual payments?',
              a: 'Yes! Pay yearly and save 16% compared to monthly billing.',
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Absolutely. No long-term contracts. Cancel anytime with one click.',
            },
          ].map((faq, index) => (
            <GlassCard key={index} hover>
              <h3 className="font-bold mb-2 text-accent">{faq.q}</h3>
              <p className="text-foreground/70 text-sm">{faq.a}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <GlassCard gradient className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your Trading?</h2>
          <p className="text-foreground/70 text-lg mb-8">
            Join 2,800+ traders using Montero FX for professional signals and education.
          </p>
          <Link
            href="/auth/register"
            className="inline-block px-8 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 transition-colors"
          >
            Start Your Journey
          </Link>
        </GlassCard>
      </section>
    </div>
  );
}
