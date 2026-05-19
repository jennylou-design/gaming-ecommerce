"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 20 });

export default function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-cyan-400/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [
              Math.random() * window.innerHeight,
              -100,
            ],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}