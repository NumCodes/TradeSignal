'use client';

import { GlassCard } from '@/components/GlassCard';
import { Bell, Globe, Lock, Eye } from 'lucide-react';
import { useState } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    signalAlerts: true,
    weeklyDigest: true,
    language: 'en',
    timezone: 'UTC',
    darkMode: true,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: typeof prev[key] === 'boolean' ? !prev[key] : prev[key],
    }));
  };

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-foreground/70">Customize your trading platform experience</p>
      </div>

      {/* Notifications */}
      <GlassCard className="mb-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Bell size={24} className="text-accent" />
          Notifications
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-border/40">
            <div>
              <p className="font-semibold">Email Notifications</p>
              <p className="text-sm text-foreground/70">Receive updates via email</p>
            </div>
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={() => handleToggle('emailNotifications')}
              className="w-5 h-5 cursor-pointer accent-accent"
            />
          </div>

          <div className="flex items-center justify-between py-3 border-b border-border/40">
            <div>
              <p className="font-semibold">Push Notifications</p>
              <p className="text-sm text-foreground/70">Get push alerts for new signals</p>
            </div>
            <input
              type="checkbox"
              checked={settings.pushNotifications}
              onChange={() => handleToggle('pushNotifications')}
              className="w-5 h-5 cursor-pointer accent-accent"
            />
          </div>

          <div className="flex items-center justify-between py-3 border-b border-border/40">
            <div>
              <p className="font-semibold">Signal Alerts</p>
              <p className="text-sm text-foreground/70">Notify when new signals are sent</p>
            </div>
            <input
              type="checkbox"
              checked={settings.signalAlerts}
              onChange={() => handleToggle('signalAlerts')}
              className="w-5 h-5 cursor-pointer accent-accent"
            />
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-semibold">Weekly Digest</p>
              <p className="text-sm text-foreground/70">Summary of weekly trading activity</p>
            </div>
            <input
              type="checkbox"
              checked={settings.weeklyDigest}
              onChange={() => handleToggle('weeklyDigest')}
              className="w-5 h-5 cursor-pointer accent-accent"
            />
          </div>
        </div>
      </GlassCard>

      {/* Preferences */}
      <GlassCard className="mb-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Globe size={24} className="text-accent" />
          Preferences
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Language</label>
            <select
              value={settings.language}
              onChange={(e) => setSettings({...settings, language: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Timezone</label>
            <select
              value={settings.timezone}
              onChange={(e) => setSettings({...settings, timezone: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="UTC">UTC (GMT)</option>
              <option value="EST">EST (GMT-5)</option>
              <option value="CST">CST (GMT-6)</option>
              <option value="PST">PST (GMT-8)</option>
            </select>
          </div>

          <div className="flex items-center justify-between py-3 border-t border-border/40">
            <div>
              <p className="font-semibold">Dark Mode</p>
              <p className="text-sm text-foreground/70">Currently enabled</p>
            </div>
            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={() => handleToggle('darkMode')}
              className="w-5 h-5 cursor-pointer accent-accent"
            />
          </div>
        </div>
      </GlassCard>

      {/* API Keys */}
      <GlassCard>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Lock size={24} className="text-accent" />
          API & Security
        </h2>

        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-3">API Keys</p>
            <p className="text-sm text-foreground/70 mb-4">
              Generate API keys to integrate TradeSignal with your trading systems
            </p>
            <button className="px-4 py-2 rounded-lg border border-accent/40 text-accent hover:bg-accent/10 transition-colors text-sm font-medium">
              Generate New Key
            </button>
          </div>

          <div className="pt-6 border-t border-border/40">
            <p className="font-semibold mb-3">Active Sessions</p>
            <p className="text-sm text-foreground/70 mb-3">Current session</p>
            <button className="text-sm text-destructive hover:text-destructive/80 transition-colors">
              Sign Out All Other Sessions
            </button>
          </div>
        </div>
      </GlassCard>

      {/* Save */}
      <div className="flex gap-3 mt-8">
        <button className="px-6 py-2 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 transition-colors">
          Save Settings
        </button>
      </div>
    </div>
  );
}
