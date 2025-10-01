'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute w-20 h-20 border border-blue-400/20 rotate-45"
        initial={{ x: -100, y: dimensions.height + 100 }}
        animate={{
          x: dimensions.width + 100,
          y: -100,
          rotate: [45, 225, 405],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute w-16 h-16 bg-purple-500/10 rounded-full"
        initial={{ x: dimensions.width + 100, y: -100 }}
        animate={{
          x: -100,
          y: dimensions.height + 100,
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute w-12 h-12 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-lg rotate-12"
        initial={{ x: -50, y: dimensions.height / 2 }}
        animate={{
          x: dimensions.width + 50,
          y: dimensions.height / 3,
          rotate: [12, 192, 372],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating Data Icons */}
      <motion.div
        className="absolute text-2xl opacity-20"
        initial={{ x: dimensions.width + 50, y: dimensions.height * 0.2 }}
        animate={{
          x: -50,
          y: dimensions.height * 0.8,
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        📊
      </motion.div>

      <motion.div
        className="absolute text-xl opacity-15"
        initial={{ x: -30, y: dimensions.height * 0.7 }}
        animate={{
          x: dimensions.width + 30,
          y: dimensions.height * 0.3,
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        📈
      </motion.div>

      <motion.div
        className="absolute text-lg opacity-25"
        initial={{ x: dimensions.width * 0.8, y: -20 }}
        animate={{
          x: dimensions.width * 0.2,
          y: dimensions.height + 20,
          rotate: -180,
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        💼
      </motion.div>

      {/* Binary Code Rain Effect */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-green-400/10 text-xs font-mono select-none"
          style={{
            left: `${(i * 7) % 100}%`,
          }}
          initial={{ y: -50 }}
          animate={{ y: dimensions.height + 50 }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
