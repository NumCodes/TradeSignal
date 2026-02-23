'use client';

import { useEffect, useRef, useState } from 'react';

export function AnimatedProgressBars() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="space-y-3">
      {/* Win Rate */}
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>Win Rate</span>
          <span className="text-accent font-semibold">87%</span>
        </div>
        <div className="h-2 bg-border/40 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
            style={{
              width: isVisible ? '87%' : '0%',
            }}
          />
        </div>
      </div>

      {/* Risk Management */}
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>Risk Management</span>
          <span className="text-accent font-semibold">Excellent</span>
        </div>
        <div className="h-2 bg-border/40 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
            style={{
              width: isVisible ? '95%' : '0%',
            }}
          />
        </div>
      </div>

      {/* Trader Satisfaction */}
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>Trader Satisfaction</span>
          <span className="text-accent font-semibold">93%</span>
        </div>
        <div className="h-2 bg-border/40 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
            style={{
              width: isVisible ? '93%' : '0%',
            }}
          />
        </div>
      </div>
    </div>
  );
}
