import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  gradient?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  gradient = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border/40 bg-card/50 backdrop-blur-md p-6',
        'transition-all duration-300',
        hover && 'hover:bg-card/70 hover:border-border/60 hover:shadow-lg',
        gradient && 'bg-gradient-to-br from-card/50 to-card/30',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
