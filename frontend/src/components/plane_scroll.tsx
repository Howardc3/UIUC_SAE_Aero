'use client';

import { useEffect, useState } from 'react';

export default function PlaneScroll() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const section = document.getElementById('plane-section');
    const handleScroll = () => {
      if (!section) return;
      const wrapper = section.parentElement;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / window.innerHeight));
      setRotation(progress * 360);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="plane-section"
      className="h-screen flex items-center justify-center bg-prussian-blue sticky top-0"
    >
      <div style={{ perspective: '600px' }}>
        <div
          className="text-frosted-blue select-none"
          style={{ fontSize: '10rem', transform: `rotateY(${rotation}deg)`, transition: 'transform 0.05s linear' }}
        >
          ✈
        </div>
      </div>
      <p className="absolute bottom-12 text-frosted-blue text-sm opacity-60 tracking-widest uppercase">
        Keep scrolling
      </p>
    </section>
  );
}
