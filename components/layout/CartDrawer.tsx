"use client";

import { useCartStore } from "@/lib/cartStore";

export default function CartDrawer() {
  const cart = useCartStore((state) => state.cart);

    const isOpen = useCartStore(
    (state) => state.isOpen
    );

    const toggleCart = useCartStore(
    (state) => state.toggleCart
    );

    const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
    );

    const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
    );

    const removeItem = useCartStore(
    (state) => state.removeItem
    );

    const total = cart.reduce(
    (acc, item) =>
        acc +
        Number(item.price.replace("$", "")) *
        item.quantity,
    0
    );
    
return (
  <>

    <button
      onClick={toggleCart}
      className="fixed top-6 right-6 z-50 rounded-2xl bg-cyan-400 text-black px-5 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-105 transition-all duration-300"
    >
      Cart ({cart.length})
    </button>

    <div
      className={`fixed top-0 right-0 h-screen w-[380px] bg-[#0b1120]/95 backdrop-blur-2xl border-l border-white/10 z-50 p-6 overflow-y-auto transition-transform duration-500 ${
        isOpen
          ? "translate-x-0"
          : "translate-x-full"
      }`}
    >

      <h2 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h2>

      <button
        onClick={toggleCart}
        className="absolute top-6 right-6 text-white/60 hover:text-white transition"
      >
        ✕
      </button>

      <div className="space-y-4">

        {cart.length === 0 && (
          <p className="text-white/50">
            Your cart is empty.
          </p>
        )}

        {cart.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-4"
          >

            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-contain"
            />

            <div className="flex-1">

    <h3 className="font-semibold">
        {item.title}
    </h3>

    <p className="text-cyan-300 mt-1">
        {item.price}
    </p>

    <div className="flex items-center gap-3 mt-4">

        <button
        onClick={() =>
            decreaseQuantity(item.title)
        }
        className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition"
        >
        -
        </button>

        <span>
        {item.quantity}
        </span>

        <button
        onClick={() =>
            increaseQuantity(item.title)
        }
        className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition"
        >
        +
        </button>

        <button
        onClick={() =>
            removeItem(item.title)
        }
        className="ml-auto text-red-400 hover:text-red-300 transition"
        >
        Remove
        </button>

    </div>

    </div>

          </div>
        ))}

            </div>

      <div className="mt-10 border-t border-white/10 pt-6">

        <div className="flex items-center justify-between text-lg">
          <p className="text-white/60">
            Subtotal
          </p>

          <p className="font-bold text-cyan-300">
            ${total.toFixed(2)}
          </p>
        </div>

        <button
          className="w-full mt-6 rounded-2xl bg-cyan-400 text-black py-4 font-semibold hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300"
        >
          Proceed to Checkout
        </button>

      </div>

    </div>

  </>
);
}