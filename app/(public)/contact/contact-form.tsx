'use client';

import React from "react"

import { GlassCard } from '@/components/GlassCard';
import { Mail, MessageCircle, Clock } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Have questions? Our support team is here to help you succeed in your trading journey.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email */}
          <GlassCard hover className="text-center">
            <Mail size={32} className="text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Email Support</h3>
            <p className="text-foreground/70 mb-4">
              Reach us at support@tradesignal.com for detailed inquiries.
            </p>
            <a
              href="mailto:support@tradesignal.com"
              className="text-accent font-semibold hover:text-accent/80 transition-colors"
            >
              Send Email
            </a>
          </GlassCard>

          {/* Telegram */}
          <GlassCard hover className="text-center">
            <MessageCircle size={32} className="text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Telegram Support</h3>
            <p className="text-foreground/70 mb-4">
              Get instant help on Telegram. Join our support community.
            </p>
            <a
              href="https://t.me/tradesignal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold hover:text-accent/80 transition-colors"
            >
              Join Telegram
            </a>
          </GlassCard>

          {/* Response Time */}
          <GlassCard hover className="text-center">
            <Clock size={32} className="text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Response Time</h3>
            <p className="text-foreground/70 mb-4">
              We typically respond within 2-4 hours during business hours.
            </p>
            <p className="text-accent font-semibold">
              Monday - Friday, 9 AM - 6 PM GMT
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <GlassCard>
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

          {submitted ? (
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/40 text-center">
              <p className="text-accent font-semibold">
                Thank you for your message! We'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="How can we help?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </GlassCard>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: 'How do I get started with TradeSignal?',
              a: 'Simply sign up for free, choose your plan, and start receiving trading signals. Our onboarding guide will walk you through everything.',
            },
            {
              q: 'Are trading signals guaranteed to be profitable?',
              a: 'No guarantees exist in trading. We provide high-quality signals based on technical analysis, but market conditions always carry risk.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards, bank transfers, and cryptocurrency payments for maximum convenience.',
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes, you can cancel anytime without penalties. No long-term contracts required.',
            },
            {
              q: 'Do you offer refunds?',
              a: 'We offer a 7-day money-back guarantee if you\'re not satisfied with our service.',
            },
            {
              q: 'What is your customer support availability?',
              a: 'We provide 24/7 support through email and Telegram. Average response time is 2-4 hours during business hours.',
            },
          ].map((faq, index) => (
            <GlassCard key={index} hover>
              <h3 className="font-bold mb-2 text-accent">{faq.q}</h3>
              <p className="text-foreground/70 text-sm">{faq.a}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
