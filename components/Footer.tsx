'use client';

import Link from 'next/link';
import { Mail, MessageCircle, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg text-accent">Montero FX</h3>
            <p className="text-sm text-foreground/60">
              Professional forex and synthetic indices trading signals for serious traders.
            </p>
            <div className="flex gap-4">
              <a
                href="https://telegram.com"
                className="text-foreground/60 hover:text-accent transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:support@montero-fx.com"
                className="text-foreground/60 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-sm text-foreground">Services</h4>
            <Link href="/services" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              Trading Signals
            </Link>
            <Link href="/services" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              Mentorship
            </Link>
            <Link href="/education" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              Education
            </Link>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-sm text-foreground">Company</h4>
            <Link href="/about" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              Contact
            </Link>
            <Link href="/pricing" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              Pricing
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-sm text-foreground">Legal</h4>
            <Link href="/legal/terms" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/legal/privacy" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/disclaimer" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60 text-center sm:text-left">
              © {currentYear} Montero FX. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              Built with <Heart size={16} className="text-accent" /> for traders
            </div>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="mt-8 p-4 rounded-lg bg-accent/10 border border-accent/20">
          <p className="text-xs text-foreground/70">
            <span className="font-semibold text-accent">Risk Disclaimer:</span> Trading involves substantial risk of loss and is not suitable for everyone. Past performance does not guarantee future results. We provide educational content and trading signals for informational purposes only. Always conduct your own due diligence and consult with a financial advisor before trading.
          </p>
        </div>
      </div>
    </footer>
  );
}
