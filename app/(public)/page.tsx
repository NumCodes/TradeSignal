'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Award, Zap, BookOpen, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { GlassCard } from '@/components/GlassCard';

export default function LandingPage() {
  const [stats, setStats] = useState({ accuracy: 0, traders: 0, years: 0 });

  useEffect(() => {
    const animateStats = async () => {
      for (let i = 0; i <= 87; i += 5) {
        setStats(prev => ({ ...prev, accuracy: i }));
        await new Promise(resolve => setTimeout(resolve, 20));
      }
      for (let i = 0; i <= 2800; i += 200) {
        setStats(prev => ({ ...prev, traders: i }));
        await new Promise(resolve => setTimeout(resolve, 20));
      }
      for (let i = 0; i <= 8; i++) {
        setStats(prev => ({ ...prev, years: i }));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    };
    animateStats();
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: 'Forex Signals',
      description: 'Real-time trading signals with detailed entry, exit, and stop-loss levels.',
    },
    {
      icon: Award,
      title: 'Mentorship Program',
      description: 'One-on-one guidance from experienced traders to accelerate your learning.',
    },
    {
      icon: BookOpen,
      title: 'Trading Education',
      description: 'Comprehensive courses from beginner to advanced trading strategies.',
    },
    {
      icon: Zap,
      title: 'Synthetic Indices',
      description: 'Specialized signals for synthetic indices with consistent opportunities.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5">
            <Zap size={16} className="text-accent" />
            <span className="text-sm text-accent font-medium">Join 2,800+ Traders Worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            Master <span className="text-accent">Forex & Indices</span> Trading
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-foreground/70 text-balance max-w-2xl mx-auto leading-relaxed">
            Get professional trading signals, expert mentorship, and comprehensive education to become a successful trader. Join our elite community today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/auth/register"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 transition-colors"
            >
              Get Started Free <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-accent/40 text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
              {stats.accuracy}%
            </div>
            <p className="text-foreground/70">Average Accuracy Rate</p>
            <p className="text-xs text-foreground/50 mt-2">Based on last 6 months of signals</p>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
              {stats.traders.toLocaleString()}
            </div>
            <p className="text-foreground/70">Active Traders</p>
            <p className="text-xs text-foreground/50 mt-2">Growing community</p>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
              {stats.years}+
            </div>
            <p className="text-foreground/70">Years Experience</p>
            <p className="text-xs text-foreground/50 mt-2">Founded in 2016</p>
          </GlassCard>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Montero FX?</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Everything you need to trade successfully with confidence and consistency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <GlassCard key={index} hover>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <GlassCard gradient className="text-center py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Trading?</h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Start your journey with professional signals and expert guidance. No credit card required.
          </p>
          <Link
            href="/auth/register"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 transition-colors"
          >
            Join Montero FX Now <ArrowRight size={18} />
          </Link>
        </GlassCard>
      </section>
    </div>
  );
}
