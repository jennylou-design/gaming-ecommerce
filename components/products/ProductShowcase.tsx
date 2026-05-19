import ProductCard from "./ProductCard";
import Reveal from "@/components/animations/Reveal";

const products = [
  {
    title: "Phantom X Keyboard",
    category: "Keyboard",
    price: "$129",
  },
  {
    title: "Nova Pro Mouse",
    category: "Mouse",
    price: "$89",
  },
  {
    title: "Cyber Headset",
    category: "Audio",
    price: "$149",
  },
];

export default function ProductShowcase() {
  return (
    <Reveal>
    <section className="px-6 pb-32">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm">
            Featured Products
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Next-Gen Gaming Gear
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>

      </div>
    </section>
    </Reveal>
  );
}