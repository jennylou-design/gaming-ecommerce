export default function BentoGrid() {
  return (
    <section className="relative px-6 pb-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Large Card */}
        <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-white/5 border border-white/10 p-8 min-h-[320px] hover:bg-white/10 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] transition-all duration-300">
          <p className="text-cyan-300 text-sm uppercase tracking-widest">
            Featured Setup
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Ultimate Gaming Station
          </h2>

          <p className="text-white/60 mt-4">
            Built for elite gamers seeking immersive performance.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl bg-white/5 border border-white/10 p-6 min-h-[150px] hover:bg-cyan-400/10 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] transition-all duration-300">
          <h3 className="text-2xl font-semibold">
            Mechanical Keyboards
          </h3>
        </div>

        {/* Card */}
        <div className="rounded-3xl bg-white/5 border border-white/10 p-6 min-h-[150px] hover:bg-purple-400/10 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] transition-all duration-300">
          <h3 className="text-2xl font-semibold">
            Gaming Mice
          </h3>
        </div>

        {/* Wide Card */}
        <div className="md:col-span-2 rounded-3xl bg-white/5 border border-white/10 p-8 min-h-[180px] hover:bg-white/10 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] transition-all duration-300">
          <h3 className="text-3xl font-bold">
            Explore Next-Gen Gear
          </h3>

          <p className="text-white/60 mt-3">
            Curated gaming accessories for modern setups.
          </p>
        </div>

      </div>
    </section>
  );
}