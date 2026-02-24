import type { Metadata } from 'next';
import { GlassCard } from '@/components/GlassCard';
import { Shield, Target, Zap, Users, Clock, TrendingUp, AlertCircle, FileText, DollarSign } from 'lucide-react';
import { AnimatedProgressBars } from '@/components/AnimatedProgressBars';
import { SlidingCarousel } from '@/components/SlidingCarousel';

export const metadata: Metadata = {
  title: 'About Montero FX | Trading Platform',
  description: 'Learn about our trading philosophy, risk management approach, and 8+ years of experience in forex and indices trading.',
};

export default function AboutPage() {
  const aboutCards = [
    {
      id: 1,
      title: 'Our Mission',
      icon: <Users size={32} />,
      description: 'Empowering traders worldwide with accurate trading signals and professional mentorship. We are committed to creating a supportive community where traders of all levels can grow their skills and achieve consistent profitability.',
    },
    {
      id: 2,
      title: 'Expert Team',
      icon: <TrendingUp size={32} />,
      description: 'Our team consists of experienced traders with 20+ combined years in forex and indices markets. We use advanced technical analysis and market research to generate signals with 87% average accuracy.',
    },
    {
      id: 3,
      title: 'Global Community',
      icon: <Users size={32} />,
      description: 'Join 2,800+ traders across 120+ countries who rely on Montero FX daily. Our community provides peer support, shared strategies, and collaborative learning opportunities in a professional trading environment.',
    },
  ];

  const accountRequirements = [
    {
      id: 1,
      title: 'Minimum Account Size',
      icon: <DollarSign size={32} />,
      description: 'Start with a minimum deposit of $100 USD. This ensures you have sufficient capital to manage proper position sizing while minimizing risk. Recommended: $500+ for optimal risk management.',
    },
    {
      id: 2,
      title: 'Verification Process',
      icon: <FileText size={32} />,
      description: 'Complete KYC verification within 48 hours of registration. Provide valid ID, proof of address, and bank details. This ensures compliance and protects your account security.',
    },
    {
      id: 3,
      title: 'Trading Experience',
      icon: <AlertCircle size={32} />,
      description: 'Basic understanding of forex and indices trading is recommended. Our free education courses prepare beginners. We provide guidance, but trading involves risk and you must trade responsibly.',
    },
    {
      id: 4,
      title: 'Account Agreement',
      icon: <FileText size={32} />,
      description: 'Accept our terms of service and risk disclaimer. You acknowledge that trading involves significant risk of loss. Our signals are educational tools, not guarantees of profit.',
    },
    {
      id: 5,
      title: 'Active Commitment',
      icon: <Clock size={32} />,
      description: 'Maintain active account status by checking signals at least 2-3 times weekly. Inactive accounts exceeding 60 days may be suspended. Stay engaged for optimal trading performance.',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Risk Management First',
      description: 'Every signal includes strict stop-loss levels and position sizing guidelines to protect your capital.',
    },
    {
      icon: Target,
      title: 'Precision Signals',
      description: 'Our analysis combines technical and fundamental approaches for highest accuracy signals.',
    },
    {
      icon: Zap,
      title: 'Continuous Education',
      description: 'We believe in empowering traders with knowledge to make independent trading decisions.',
    },
  ];

  const timeline = [
    {
      year: '2016',
      title: 'Founded',
      description: 'Started with a small group of professional traders sharing market analysis.',
    },
    {
      year: '2018',
      title: 'Community Growth',
      description: 'Expanded to 500+ active traders with consistent profitable signals.',
    },
    {
      year: '2020',
      title: 'Platform Launch',
      description: 'Launched full-featured trading platform with real-time signals and education.',
    },
    {
      year: '2024',
      title: 'Global Leader',
      description: '2,800+ traders across 120+ countries rely on our signals daily.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            About <span className="text-accent">Montero FX</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Empowering traders worldwide with professional signals, education, and mentorship since 2016.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Our Trading Philosophy</h2>
            <p className="text-foreground/70 leading-relaxed">
              At Montero FX, we believe successful trading comes from combining solid technical analysis with rigorous risk management. We've spent over 8 years perfecting our signal methodology to provide traders with reliable entry and exit points.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Our approach focuses on quality over quantity. We provide fewer, higher-confidence signals rather than flooding traders with options. This conservative approach has resulted in an 87% accuracy rate over the last 6 months.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Every signal includes detailed analysis, risk management guidelines, and educational context so you understand the "why" behind each trade.
            </p>
          </div>

          <GlassCard gradient>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">87%</h3>
              <p className="text-lg font-semibold">Average Signal Accuracy</p>
              <p className="text-sm text-foreground/70 mb-6">Last 6 months verified statistics</p>

              <div className="space-y-3 pt-6 border-t border-border/40">
                <AnimatedProgressBars />
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* About Montero FX Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Montero FX</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Discover what makes us the trusted choice for professional traders globally
          </p>
        </div>
        <SlidingCarousel items={aboutCards} autoPlayInterval={5000} showControls={true} />
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <GlassCard key={index} hover>
                <Icon size={32} className="text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* Account Requirements Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Do You Need To Know</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Account terms, requirements, and guidelines for trading with Montero FX
          </p>
        </div>
        <SlidingCarousel items={accountRequirements} autoPlayInterval={5000} showControls={true} />
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>

        <div className="space-y-6">
          {timeline.map((event, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-accent"></div>
                {index !== timeline.length - 1 && (
                  <div className="w-0.5 h-20 bg-border/40 mt-2 mb-2"></div>
                )}
              </div>
              <GlassCard hover className="flex-1">
                <h3 className="text-lg font-bold text-accent mb-2">{event.year}</h3>
                <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                <p className="text-foreground/70">{event.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <GlassCard gradient className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Start Your Trading Journey Today</h2>
          <p className="text-foreground/70 text-lg mb-8">
            Join thousands of traders who trust Montero FX for professional signals and education.
          </p>
          <a
            href="/auth/register"
            className="inline-block px-8 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 transition-colors"
          >
            Get Started Free
          </a>
        </GlassCard>
      </section>
    </div>
  );
}
