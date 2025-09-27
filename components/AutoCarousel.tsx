"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function AutoCarousel({ items, interval = 3800 }: { items: any[]; interval?: number }) {
  const controls = useAnimation();
  const indexRef = useRef(0);

  useEffect(() => {
    const id = setInterval(async () => {
      await controls.start({ x: `-${indexRef.current * 100}%`, transition: { duration: 0.7 } });
      indexRef.current = (indexRef.current + 1) % items.length;
    }, interval);
    return () => clearInterval(id);
  }, [controls, items.length, interval]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <motion.div className="flex w-full" animate={controls}>
        {items.map((it, i) => (
          <div key={i} className="w-full shrink-0 p-6 md:p-10">
            <h3 className="text-lg font-semibold">{it.org} <span className="opacity-70">• {it.year}</span></h3>
            <p className="mt-3 opacity-90">{it.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {it.tech.map((t: string) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}