"use client";

import { motion } from "framer-motion";

type ProductCardProps = {
  title: string;
  category: string;
  price: string;
};

export default function ProductCard({
  title,
  category,
  price,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        rotateX: 5,
        rotateY: 5,
      }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden p-6 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] transition-all duration-300"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-400/5 transition-all duration-300" />

      {/* Fake Product Image */}
      <div className="relative h-48 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
        <div className="w-24 h-24 rounded-full bg-cyan-300/30 blur-2xl absolute" />

        <p className="relative z-10 text-white/70 text-sm tracking-widest uppercase">
          Gaming Gear
        </p>
      </div>

      {/* Content */}
      <div className="relative mt-6">
        <p className="text-cyan-300 text-sm uppercase tracking-widest">
          {category}
        </p>

        <h3 className="text-2xl font-bold mt-2">
          {title}
        </h3>

        <div className="flex items-center justify-between mt-6">
          <p className="text-white/70">
            {price}
          </p>

          <button className="px-4 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">
            Buy
          </button>
        </div>
      </div>
    </motion.div>
  );
}