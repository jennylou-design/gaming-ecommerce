const products = {
  "phantom-x-keyboard": {
    image: "/images/keyboard.png",
    price: "$129",
  },

  "nova-pro-mouse": {
    image: "/images/mouse-new.png",
    price: "$89",
  },

  "cyber-headset": {
    image: "/images/headset-new.png",
    price: "$149",
  },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const product =
    products[
      slug as keyof typeof products
    ];

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-20">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Product Image */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-10 overflow-hidden">

          <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full top-10 left-10" />

          <img
            src={product.image}
            alt="Product"
            className="relative z-10 w-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div>

          <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm">
            Gaming Gear
          </p>

          <h1 className="text-6xl font-black mt-4">
            {slug
            ?.replaceAll("-", " ")
            ?.toUpperCase()}
          </h1>

          <p className="text-white/60 mt-6 text-lg leading-relaxed">
            Experience next-generation gaming performance with
            futuristic aesthetics, elite precision, and immersive
            technology engineered for competitive players.
          </p>

          {/* Price */}
          <div className="mt-10 text-4xl font-bold">
            {product.price}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex gap-4">

            <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300">
              Add to Cart
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
              Wishlist
            </button>

          </div>

          {/* Specs */}
          <div className="mt-16 grid grid-cols-2 gap-6">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/50 text-sm">
                Response Time
              </p>

              <h3 className="text-2xl font-bold mt-2">
                1ms
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/50 text-sm">
                RGB Lighting
              </p>

              <h3 className="text-2xl font-bold mt-2">
                Dynamic
              </h3>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}