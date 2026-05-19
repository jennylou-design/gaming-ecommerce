"use client";

import {
  Home,
  ShoppingBag,
  Heart,
  User,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: ShoppingBag, label: "Shop" },
  { icon: Heart, label: "Wishlist" },
  { icon: User, label: "Profile" },
];

export default function FloatingSidebar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-3 shadow-2xl">
        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 hover:bg-cyan-400/20 transition-all duration-300"
            >
              <Icon className="w-6 h-6 text-white group-hover:text-cyan-300 transition-all duration-300" />

              <span className="absolute left-16 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm text-white whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}