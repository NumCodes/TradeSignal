import type { Metadata } from 'next';
import Link from 'next/link';
import { GlassCard } from '@/components/GlassCard';
import { Play, Download, Clock, Star, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Trading Education | TradeSignal',
  description: 'Comprehensive trading courses and learning paths from beginner to advanced. Master forex and indices trading.',
};

export default function EducationPage() {
  const courses = [
    {
      level: 'Beginner',
      title: 'Forex Trading Fundamentals',
      description: 'Learn the basics of forex trading, currency pairs, and market mechanics.',
      lessons: 12,
      duration: '4 weeks',
      topics: ['Currency Pairs', 'Bid & Ask', 'Pips & Lots', 'Trading Hours'],
      locked: false,
    },
    {
      level: 'Beginner',
      title: 'Risk Management Essentials',
      description: 'Master the most critical skill in trading: protecting your capital.',
      lessons: 8,
      duration: '2 weeks',
      topics: ['Position Sizing', 'Stop Loss', 'Take Profit', 'Risk Ratios'],
      locked: false,
    },
    {
      level: 'Intermediate',
      title: 'Technical Analysis Mastery',
      description: 'Advanced chart analysis, indicators, and pattern recognition techniques.',
      lessons: 15,
      duration: '6 weeks',
      topics: ['Support & Resistance', 'Candlesticks', 'Indicators', 'Fibonacci'],
      locked: false,
    },
    {
      level: 'Intermediate',
      title: 'Synthetic Indices Trading',
      description: 'Specialized strategies for trading synthetic indices with consistency.',
      lessons: 10,
      duration: '3 weeks',
      topics: ['Index Characteristics', 'Volatility Patterns', 'Signal Timing', 'Risk Control'],
      locked: true,
    },
    {
      level: 'Advanced',
      title: 'Psychology & Discipline',
      description: 'Overcome emotional trading and develop a professional trading mindset.',
      lessons: 8,
      duration: '4 weeks',
      topics: ['Fear & Greed', 'Discipline', 'Motivation', 'Trading Journal'],
      locked: true,
    },
    {
      level: 'Advanced',
      title: 'Advanced Strategy Development',
      description: 'Create and backtest your own profitable trading strategies.',
      lessons: 12,
      duration: '8 weeks',
      topics: ['Strategy Components', 'Backtesting', 'Optimization', 'Live Trading'],
      locked: true,
    },
  ];

  const resources = [
    {
      icon: Download,
      title: 'Trading Templates',
      description: '10+ downloadable trading journal and analysis templates.',
    },
    {
      icon: Clock,
      title: 'Live Webinars',
      description: 'Weekly live sessions covering market analysis and trading strategies.',
    },
    {
      icon: Download,
      title: 'Strategy Guides',
      description: 'PDF guides for 15+ proven trading strategies with examples.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Master <span className="text-accent">Trading</span> with Confidence
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive courses from beginner fundamentals to advanced strategies. Learn at your own pace with lifetime access.
          </p>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Learning Paths</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Beginner Path */}
          <GlassCard hover className="text-center">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-bold text-accent">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Beginner Path</h3>
            <p className="text-foreground/70 mb-4">
              Start with fundamentals and build a solid foundation in forex and indices trading.
            </p>
            <ul className="text-sm text-foreground/60 space-y-1">
              <li>• 4 comprehensive courses</li>
              <li>• 20+ lessons</li>
              <li>• 6 weeks average</li>
            </ul>
          </GlassCard>

          {/* Intermediate Path */}
          <GlassCard hover className="text-center">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-bold text-accent">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Intermediate Path</h3>
            <p className="text-foreground/70 mb-4">
              Develop advanced technical skills and specialized trading techniques.
            </p>
            <ul className="text-sm text-foreground/60 space-y-1">
              <li>• 4 advanced courses</li>
              <li>• 30+ lessons</li>
              <li>• 10 weeks average</li>
            </ul>
          </GlassCard>

          {/* Professional Path */}
          <GlassCard hover className="text-center">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-lg font-bold text-accent">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Professional Path</h3>
            <p className="text-foreground/70 mb-4">
              Master psychology, strategy development, and professional trading techniques.
            </p>
            <ul className="text-sm text-foreground/60 space-y-1">
              <li>• Premium mentorship</li>
              <li>• 1-on-1 guidance</li>
              <li>• Personalized coaching</li>
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">All Courses</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <GlassCard key={index} hover className="relative">
              {course.locked && (
                <div className="absolute inset-0 rounded-xl bg-black/40 flex items-center justify-center cursor-not-allowed">
                  <div className="text-center">
                    <Lock size={32} className="text-accent mx-auto mb-2" />
                    <p className="text-sm font-semibold">Pro Plan Only</p>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
                    {course.level} Level
                  </div>
                  <h3 className="text-xl font-bold">{course.title}</h3>
                </div>
                {course.locked ? (
                  <Lock size={20} className="text-accent/60 flex-shrink-0" />
                ) : (
                  <Play size={20} className="text-accent flex-shrink-0" />
                )}
              </div>

              <p className="text-foreground/70 mb-4">{course.description}</p>

              <div className="flex gap-4 mb-4 pb-4 border-b border-border/40">
                <div className="flex items-center gap-1 text-sm text-foreground/60">
                  <Clock size={16} />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1 text-sm text-foreground/60">
                  <Play size={16} />
                  {course.lessons} Lessons
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-foreground/70 uppercase tracking-widest mb-3">
                  Topics Covered:
                </p>
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs bg-accent/10 text-accent"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={course.locked ? '/pricing' : '/auth/register'}
                className="w-full px-4 py-2 rounded-lg border border-accent/40 text-accent font-medium hover:bg-accent/10 text-center transition-colors text-sm"
              >
                {course.locked ? 'Unlock with Pro' : 'Start Learning'}
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Learning Resources</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <GlassCard key={index} hover>
                <Icon size={32} className="text-accent mb-4" />
                <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                <p className="text-foreground/70 text-sm">{resource.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* Why Learn */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Our Education Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Structured Learning',
              description: 'Follow proven learning paths designed to progressively build your trading skills.',
            },
            {
              title: 'Real Examples',
              description: 'Every concept is taught with real market examples and practical applications.',
            },
            {
              title: 'Lifetime Access',
              description: 'Access all course materials forever. Receive updates and new content free.',
            },
            {
              title: 'Community Support',
              description: 'Learn alongside thousands of traders. Share insights and ask questions.',
            },
            {
              title: 'Actionable Content',
              description: 'Focus on immediately applicable strategies, not just theory.',
            },
            {
              title: 'Expert Instructors',
              description: 'Learn from professional traders with 8+ years of market experience.',
            },
          ].map((item, index) => (
            <GlassCard key={index} hover>
              <Star size={24} className="text-accent mb-3" />
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-foreground/70 text-sm">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <GlassCard gradient className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
          <p className="text-foreground/70 text-lg mb-8">
            Invest in yourself and become the trader you want to be.
          </p>
          <Link
            href="/auth/register"
            className="inline-block px-8 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 transition-colors"
          >
            Join Now
          </Link>
        </GlassCard>
      </section>
    </div>
  );
}
