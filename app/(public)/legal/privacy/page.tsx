import type { Metadata } from 'next';
import { GlassCard } from '@/components/GlassCard';

export const metadata: Metadata = {
  title: 'Privacy Policy | TradeSignal',
  description: 'Privacy policy and data protection information for TradeSignal users.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <GlassCard className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">1. Introduction</h2>
            <p className="text-foreground/70 leading-relaxed">
              TradeSignal ("we", "us", "our") operates the platform. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">2. Information Collection</h2>
            <p className="text-foreground/70 leading-relaxed mb-3">We collect information in the following ways:</p>
            <ul className="space-y-2 text-foreground/70">
              <li>• <strong>Account Information:</strong> Name, email, phone number, trading experience</li>
              <li>• <strong>Payment Information:</strong> Processed securely through third-party payment providers</li>
              <li>• <strong>Usage Data:</strong> Pages visited, time spent, features used, IP address</li>
              <li>• <strong>Device Information:</strong> Browser type, operating system, device type</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">3. Use of Information</h2>
            <p className="text-foreground/70 leading-relaxed mb-3">Your information is used to:</p>
            <ul className="space-y-2 text-foreground/70">
              <li>• Provide and improve our services</li>
              <li>• Process transactions and send related information</li>
              <li>• Send promotional communications (with your consent)</li>
              <li>• Detect and prevent fraud</li>
              <li>• Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">4. Data Security</h2>
            <p className="text-foreground/70 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">5. Third-Party Services</h2>
            <p className="text-foreground/70 leading-relaxed">
              We may use third-party services for payment processing, analytics, and communication. These providers have their own privacy policies and are not subject to our privacy practices. We encourage you to review their privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">6. Your Rights</h2>
            <p className="text-foreground/70 leading-relaxed mb-3">You have the right to:</p>
            <ul className="space-y-2 text-foreground/70">
              <li>• Access your personal data</li>
              <li>• Correct inaccurate data</li>
              <li>• Request deletion of your data</li>
              <li>• Opt-out of marketing communications</li>
              <li>• Withdraw consent at any time</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">7. Contact Us</h2>
            <p className="text-foreground/70 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at <a href="mailto:privacy@tradesignal.com" className="text-accent hover:underline">privacy@tradesignal.com</a>.
            </p>
          </div>

          <div className="border-t border-border/40 pt-6">
            <p className="text-foreground/70 text-sm">
              <span className="font-bold">Last Updated:</span> February 2024. We reserve the right to update this policy at any time.
            </p>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
