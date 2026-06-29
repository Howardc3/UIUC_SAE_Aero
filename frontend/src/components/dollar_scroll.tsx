'use client';

import { useEffect, useState } from 'react';

export default function DollarScroll({ children }: { children?: React.ReactNode }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = document.getElementById('dollar-section');
    const handleScroll = () => {
      if (!section) return;
      const wrapper = section.parentElement;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const scrollable = wrapper.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, -rect.top / scrollable));
      setProgress(p);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rotation = Math.min(360, progress * 2 * 360);
  const textOpacity = Math.max(0, (progress - 0.5) * 2);

  return (
    <section
      id="dollar-section"
      className="h-screen flex items-center justify-center bg-prussian-blue sticky top-0"
    >
      <div style={{ perspective: '600px' }}>
        <div
          className="text-frosted-blue select-none"
          style={{ fontSize: '10rem', transform: `rotateY(${rotation}deg)`, opacity: 1 - textOpacity, transition: 'transform 0.05s linear, opacity 0.05s linear' }}
        >
          $
        </div>
      </div>
      {children && (
        <div
          className="absolute bg-imperial-blue px-10 py-6 rounded-xl"
          style={{ opacity: textOpacity, transition: 'opacity 0.05s linear' }}
        >
          {children}
        </div>
      )}
      {textOpacity < 0.1 && (
        <p className="absolute bottom-12 text-frosted-blue text-sm opacity-60 tracking-widest uppercase">
          Keep scrolling
        </p>
      )}
    </section>
  );
}
