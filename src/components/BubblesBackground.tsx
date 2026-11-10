import React, { useMemo } from 'react';

interface Bubble {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export const BubblesBackground: React.FC = () => {
  // Generate bubble data deterministically
  const bubbles: Bubble[] = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: Math.round(((i * 4.2 + (i % 5) * 8.3) % 96) + 2), // Spread nicely 2% - 98%
      size: Math.round(((i * 7) % 22) + 10), // 10px - 32px
      duration: Number((((i * 3.7) % 8) + 7).toFixed(1)), // 7s - 15s
      delay: Number((((i * 2.3) % 9)).toFixed(1)), // 0s - 9s
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Ambient water caustics rays */}
      <div className="absolute inset-0 god-rays opacity-25" />

      {/* Floating bubbles */}
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="bubble"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
