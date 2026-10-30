import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface HeartParticle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  rotation: number;
}

export const FloatingHearts: React.FC = () => {
  // Generate a deterministic or randomized set of hearts
  const hearts = useMemo<HeartParticle[]>(() => {
    return Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      x: Math.floor(Math.random() * 100), // percentage along screen width
      size: Math.floor(Math.random() * 16) + 12, // 12px to 28px
      duration: Math.random() * 12 + 14, // 14s to 26s
      delay: Math.random() * 10,
      opacity: Math.random() * 0.35 + 0.15,
      rotation: Math.floor(Math.random() * 60) - 30,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{
            y: '105vh',
            x: `${h.x}vw`,
            opacity: 0,
            rotate: h.rotation,
          }}
          animate={{
            y: '-10vh',
            x: [`${h.x}vw`, `${h.x + (h.id % 2 === 0 ? 3 : -3)}vw`, `${h.x}vw`],
            opacity: [0, h.opacity, h.opacity, 0],
            rotate: [h.rotation, h.rotation + (h.id % 2 === 0 ? 25 : -25)],
          }}
          transition={{
            duration: h.duration,
            repeat: Infinity,
            delay: h.delay,
            ease: "easeInOut",
          }}
          style={{ width: h.size, height: h.size }}
          className="absolute text-rose-300/40 select-none"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full drop-shadow-sm"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Dreamy soft gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl" />
      <div className="absolute top-2/3 -right-32 w-[30rem] h-[30rem] bg-blush-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-pink-100/30 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
