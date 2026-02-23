'use client';

import React from "react"

import Link from 'next/link';
import { useState } from 'react';
import { GlassCard } from '@/components/GlassCard';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // Demo authentication - in production, this would verify credentials
      if (email && password.length >= 6) {
        // Store demo session
        localStorage.setItem('authToken', 'demo-' + Date.now());
        localStorage.setItem('userEmail', email);
        
        setMessage('✓ Login successful! Redirecting...');
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1000);
      } else {
        setMessage('✗ Please enter valid credentials (password min 6 chars)');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-foreground/70">Log in to access your trading dashboard</p>
        </div>

        <GlassCard>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
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

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded accent-accent" />
                <span className="text-foreground/70">Remember me</span>
              </label>
              <Link href="#" className="text-accent hover:text-accent/80 transition-colors">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Logging in...' : (
                <>
                  Sign In <ArrowRight size={18} />
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

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-foreground/70 text-sm mb-3">
              Don't have an account?
            </p>
            <Link
              href="/auth/register"
              className="inline-block px-6 py-2 rounded-lg border border-accent/40 text-accent font-medium hover:bg-accent/10 transition-colors"
            >
              Create Account
            </Link>
          </div>
        </GlassCard>

        {/* Demo Notice */}
        <div className="mt-6 p-4 rounded-lg border border-accent/20 bg-accent/5">
          <p className="text-xs text-foreground/60">
            <span className="font-semibold text-accent">Demo Mode:</span> Use any email and password (min 6 chars) to test the platform.
          </p>
        </div>
      </div>
    </div>
  );
}
