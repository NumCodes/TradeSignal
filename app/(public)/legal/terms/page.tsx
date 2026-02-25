import type { Metadata } from 'next';
import { GlassCard } from '@/components/GlassCard';

export const metadata: Metadata = {
  title: 'Terms of Service | TradeSignal',
  description: 'Terms and conditions of use for TradeSignal trading platform and services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <GlassCard className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">1. Agreement to Terms</h2>
            <p className="text-foreground/70 leading-relaxed">
              By accessing and using TradeSignal, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">2. Use License</h2>
            <p className="text-foreground/70 leading-relaxed mb-3">Permission is granted to temporarily download one copy of the materials (information or software) on TradeSignal for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="space-y-2 text-foreground/70 pl-4">
              <li>• Modify or copy the materials</li>
              <li>• Use the materials for any commercial purpose</li>
              <li>• Attempt to decompile or reverse engineer any software</li>
              <li>• Remove any copyright or other proprietary notations</li>
              <li>• Transfer the materials to another person or "mirror" the materials</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">3. Disclaimer of Warranties</h2>
            <p className="text-foreground/70 leading-relaxed">
              The materials on TradeSignal are provided "as is". TradeSignal makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">4. Limitations of Liability</h2>
            <p className="text-foreground/70 leading-relaxed">
              In no event shall TradeSignal or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TradeSignal, even if TradeSignal or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">5. Accuracy of Materials</h2>
            <p className="text-foreground/70 leading-relaxed">
              The materials appearing on TradeSignal could include technical, typographical, or photographic errors. TradeSignal does not warrant that any of the materials on the site are accurate, complete, or current. TradeSignal may make changes to the materials contained on its site at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">6. Links</h2>
            <p className="text-foreground/70 leading-relaxed">
              TradeSignal has not reviewed all of the sites linked to its site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by TradeSignal of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">7. Modifications</h2>
            <p className="text-foreground/70 leading-relaxed">
              TradeSignal may revise these terms of service for our site at any time without notice. By using this site, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">8. Governing Law</h2>
            <p className="text-foreground/70 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction where TradeSignal is located, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">9. User Conduct</h2>
            <p className="text-foreground/70 leading-relaxed mb-3">You agree not to:</p>
            <ul className="space-y-2 text-foreground/70 pl-4">
              <li>• Harass or cause distress or inconvenience to any person</li>
              <li>• Transmit obscene or offensive content</li>
              <li>• Disrupt normal flow of dialogue within our community</li>
              <li>• Attempt to gain unauthorized access to our systems</li>
            </ul>
          </div>

          <div className="border-t border-border/40 pt-6">
            <h2 className="text-2xl font-bold text-accent mb-4">10. Contact Information</h2>
            <p className="text-foreground/70 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at <a href="mailto:legal@tradesignal.com" className="text-accent hover:underline">legal@tradesignal.com</a>.
            </p>
          </div>

          <div className="pt-6">
            <p className="text-foreground/70 text-sm">
              <span className="font-bold">Last Updated:</span> February 2024
            </p>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
