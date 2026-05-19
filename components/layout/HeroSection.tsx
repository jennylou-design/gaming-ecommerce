"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6">
      
      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[20%]" />

      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-100px] right-[10%]" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-5xl"
      >
        <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-6">
          Futuristic Gaming Experience
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-tight">
          LEVEL UP
          <br />
          YOUR GAMING
        </h1>

        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
          Discover premium gaming gear with futuristic design,
          immersive technology, and next-level performance.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300">
            Shop Now
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300">
            Explore Gear
          </button>
        </div>
      </motion.div>
    </section>
  );
}