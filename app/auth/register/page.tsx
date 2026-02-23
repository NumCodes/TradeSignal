'use client';

import React from "react"

import Link from 'next/link';
import { useState } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { Mail, Lock, User, ArrowRight, Check } from 'lucide-react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    experience: 'beginner',
    agree: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // Demo validation
      if (!formData.name || !formData.email || !formData.password) {
        setMessage('✗ Please fill in all fields');
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setMessage('✗ Passwords do not match');
        return;
      }

      if (formData.password.length < 6) {
        setMessage('✗ Password must be at least 6 characters');
        return;
      }

      if (!formData.agree) {
        setMessage('✗ Please agree to terms and privacy policy');
        return;
      }

      // Demo registration - store session
      localStorage.setItem('authToken', 'demo-' + Date.now());
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userName', formData.name);
      
      setMessage('✓ Account created successfully! Redirecting...');
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1500);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Join TradeSignal</h1>
          <p className="text-foreground/70">Start your professional trading journey today</p>
        </div>

        <GlassCard>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Trading Experience */}
            <div>
              <label htmlFor="experience" className="block text-sm font-medium mb-2">
                Trading Experience
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm"
              >
                <option value="beginner">Beginner (0-1 year)</option>
                <option value="intermediate">Intermediate (1-3 years)</option>
                <option value="advanced">Advanced (3+ years)</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Message */}
            {message && (
              <div className={`p-3 rounded-lg text-sm font-medium ${
                message.startsWith('✓') 
                  ? 'bg-accent/10 text-accent' 
                  : 'bg-destructive/10 text-destructive'
              }`}>
                {message}
              </div>
            )}

            {/* Terms Agreement */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="rounded accent-accent mt-1"
              />
              <span className="text-xs text-foreground/70">
                I agree to the <Link href="/legal/terms" className="text-accent hover:underline">Terms of Service</Link> and <Link href="/legal/privacy" className="text-accent hover:underline">Privacy Policy</Link>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {isLoading ? 'Creating Account...' : (
                <>
                  Create Account <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/40"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-foreground/60">or</span>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-foreground/70 text-sm mb-3">
              Already have an account?
            </p>
            <Link
              href="/auth/login"
              className="inline-block px-6 py-2 rounded-lg border border-accent/40 text-accent font-medium hover:bg-accent/10 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </GlassCard>

        {/* Benefits */}
        <div className="mt-6 space-y-2 text-sm text-foreground/70">
          <div className="flex items-center gap-2">
            <Check size={16} className="text-accent flex-shrink-0" />
            <span>7-day free trial with full access</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-accent flex-shrink-0" />
            <span>No credit card required to start</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-accent flex-shrink-0" />
            <span>Cancel anytime, no questions asked</span>
          </div>
        </div>
      </div>
    </div>
  );
}
