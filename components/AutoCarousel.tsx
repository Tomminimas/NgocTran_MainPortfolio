'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface CarouselItem {
  org: string;
  year: string;
  summary: string;
  tech: string[];
}

interface AutoCarouselProps {
  items: CarouselItem[];
  autoAdvanceInterval?: number;
}

const AutoCarousel = ({ items, autoAdvanceInterval = 4000 }: AutoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, autoAdvanceInterval);

    return () => clearInterval(interval);
  }, [items.length, autoAdvanceInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!items.length) return null;

  return (
    <div className="relative h-48 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 p-6"
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">
                  {items[currentIndex].org}
                </h3>
                <span className="text-sm text-gray-400">
                  {items[currentIndex].year}
                </span>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {items[currentIndex].summary}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {items[currentIndex].tech.map((tech, index) => (
                <span
                  key={index}
                  className="badge text-xs px-2 py-1 bg-white/10 border border-white/20 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      {items.length > 1 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-hover ${
                index === currentIndex
                  ? 'bg-white scale-110'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{
            duration: autoAdvanceInterval / 1000,
            ease: 'linear',
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
};

export default AutoCarousel;


