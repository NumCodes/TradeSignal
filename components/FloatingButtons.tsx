'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi, I\'d like to learn more about Montero FX trading signals.');
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        aria-label="Contact us on WhatsApp"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:scale-110"
      >
        <MessageCircle size={24} />
      </button>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-background hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl hover:scale-110 animate-in fade-in slide-in-from-bottom-3 duration-300"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
