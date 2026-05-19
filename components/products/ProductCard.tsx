"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/cartStore";
import { toast } from "sonner";

type ProductCardProps = {
  title: string;
  category: string;
  price: string;
  image: string;
};

export default function ProductCard({
  title,
  category,
  price,
  image,
}: ProductCardProps) {

const addToCart = useCartStore(
  (state) => state.addToCart
);

const rotateX = useMotionValue(0);
const rotateY = useMotionValue(0);

const smoothRotateX = useTransform(
  rotateX,
  [-100, 100],
  [10, -10]
);

const smoothRotateY = useTransform(
  rotateY,
  [-100, 100],
  [-10, 10]
);

const handleMouseMove = (
  e: React.MouseEvent<HTMLDivElement>
) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const width = rect.width;
  const height = rect.height;

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const xPct = mouseX - width / 2;
  const yPct = mouseY - height / 2;

  rotateX.set(yPct);
  rotateY.set(xPct);
};

const handleMouseLeave = () => {
  rotateX.set(0);
  rotateY.set(0);
};
  return (
      <Link
    href={`/product/${title
      .toLowerCase()
      .replaceAll(" ", "-")}`}
  >
    <motion.div
      onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  style={{
    rotateX: smoothRotateX,
    rotateY: smoothRotateY,
    transformStyle: "preserve-3d",
  }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden p-6 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] transition-all duration-300"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-400/5 transition-all duration-300" />

      {/* Fake Product Image */}
      <div className="relative h-48 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-purple-500/10 flex items-center justify-center overflow-hidden">

     <div className="absolute w-32 h-32 bg-cyan-400/20 blur-3xl rounded-full" />

        <Image
            src={image}
            alt={title}
            width={220}
            height={220}
            className="relative z-10 object-contain transition-transform duration-500 group-hover:scale-110"
        />
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
<button 
      onClick={(e) => {
        e.preventDefault();

        addToCart({
          title,
          price,
          image,
        });

        toast.success(`${title} added to cart`);
      }}
      className="px-4 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300"
    >
      Buy
    </button>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}