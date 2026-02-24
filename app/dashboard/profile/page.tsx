'use client';

import { GlassCard } from '@/components/GlassCard';
import { User, Mail, Phone, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ProfilePage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [edited, setEdited] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail') || '';
    const storedName = localStorage.getItem('userName') || 'Trader';
    setEmail(storedEmail);
    setName(storedName);
  }, []);

  const handleSave = () => {
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name);
    setEdited(false);
  };

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Profile Settings</h1>
        <p className="text-foreground/70">Manage your account information</p>
      </div>

      {/* Profile Card */}
      <GlassCard className="mb-6">
        <h2 className="text-2xl font-bold mb-6">Personal Information</h2>

        <div className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <div className="relative">
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setEdited(true);
                }}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEdited(true);
                }}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          {/* Member Since */}
          <div>
            <label className="block text-sm font-medium mb-2">Member Since</label>
            <p className="text-foreground/70">February 2024</p>
          </div>

          {/* Trading Level */}
          <div>
            <label className="block text-sm font-medium mb-2">Trading Experience</label>
            <select className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
              <option>Beginner (0-1 year)</option>
              <option>Intermediate (1-3 years)</option>
              <option>Advanced (3+ years)</option>
            </select>
          </div>

          {/* Save Button */}
          <div className="flex gap-3 pt-4 border-t border-border/40">
            <button
              onClick={handleSave}
              disabled={!edited}
              className="px-6 py-2 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEdited(false)}
              className="px-6 py-2 rounded-lg border border-border/40 text-foreground/70 hover:text-foreground transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </GlassCard>

      {/* Subscription Card */}
      <GlassCard className="mb-6">
        <h2 className="text-2xl font-bold mb-6">Subscription</h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-border/40">
            <div>
              <p className="text-foreground/70 text-sm">Current Plan</p>
              <p className="text-xl font-bold text-accent">Pro Plan</p>
            </div>
            <button className="px-4 py-2 rounded-lg border border-accent/40 text-accent hover:bg-accent/10 transition-colors text-sm font-medium">
              Upgrade
            </button>
          </div>

          <div>
            <p className="text-foreground/70 text-sm mb-2">Renewal Date</p>
            <p className="font-semibold">March 5, 2024</p>
          </div>

          <div>
            <p className="text-foreground/70 text-sm mb-2">Signals Received This Month</p>
            <p className="font-semibold">24 signals</p>
          </div>
        </div>
      </GlassCard>

      {/* Security Card */}
      <GlassCard>
        <h2 className="text-2xl font-bold mb-6">Security</h2>

        <div className="space-y-4">
          <button className="w-full px-4 py-2 rounded-lg border border-border/40 text-foreground/70 hover:text-foreground hover:bg-accent/10 transition-colors text-sm font-medium text-left">
            Change Password
          </button>
          <button className="w-full px-4 py-2 rounded-lg border border-border/40 text-foreground/70 hover:text-foreground hover:bg-accent/10 transition-colors text-sm font-medium text-left">
            Enable Two-Factor Authentication
          </button>
          <button className="w-full px-4 py-2 rounded-lg border border-destructive/40 text-destructive hover:bg-destructive/10 transition-colors text-sm font-medium text-left">
            Delete Account
          </button>
        </div>
      </GlassCard>
    </div>
  );
}
