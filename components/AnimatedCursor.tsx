'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('cursor-hover')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        animate={{
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.5 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      />

      {/* Trailing particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`trail-${i}`}
          className="fixed top-0 left-0 w-1 h-1 bg-blue-400/40 rounded-full pointer-events-none z-40"
          style={{
            x: mousePosition.x - 2,
            y: mousePosition.y - 2,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeOut"
          }}
        />
      ))}
    </>
  );
};

export default AnimatedCursor;


