'use client';

import React from "react"

import { useState, useEffect } from 'react';
import { GlassCard } from './GlassCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: string | number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface SlidingCarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
  showControls?: boolean;
}

export function SlidingCarousel({
  items,
  autoPlayInterval = 5000,
  showControls = true,
}: SlidingCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay || items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlay, items.length, autoPlayInterval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    setIsAutoPlay(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  // Resume autoplay after 10 seconds of user interaction
  useEffect(() => {
    if (!isAutoPlay) {
      const timeout = setTimeout(() => setIsAutoPlay(true), 10000);
      return () => clearTimeout(timeout);
    }
  }, [isAutoPlay]);

  if (items.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Slides */}
        <div className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item) => (
            <div key={item.id} className="min-w-full px-4">
              <GlassCard hover className="h-full">
                {item.icon && (
                  <div className="mb-4 text-accent">
                    {item.icon}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {showControls && items.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-colors -translate-x-6 sm:translate-x-0"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-colors translate-x-6 sm:translate-x-0"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {items.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-accent'
                  : 'w-3 bg-accent/30 hover:bg-accent/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}
