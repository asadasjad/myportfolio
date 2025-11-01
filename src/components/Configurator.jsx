import { useState } from "react";

const packages = [
  {
    id: "launch",
    name: "Launch",
    description: "A sleek one-page site built to make your idea real — clean, fast, and mobile-perfect.",
    price: 1099,
    ideal: "Personal portfolio, freelancer intro",
  },
  {
    id: "grow",
    name: "Grow",
    description: "A 3-page website that gives your idea more room — includes landing, about, and contact sections.",
    price: 4999,
    ideal: "Startups, small businesses",
  },
  {
    id: "scale",
    name: "Scale",
    description: "A custom multi-page site with animations, interactions, and premium structure.",
    price: 9999,
    ideal: "Agencies, brands",
  },
];

const addons = [
  { id: "fast", name: "⚡ Fast Delivery", price: 299 },
  { id: "page", name: "🧩 Add a Page", price: 800  },
  { id: "anim", name: "✨ Basic Animation Pack", price: 700 },
  { id: "theme", name: "🎨 Custom Theme Design", price: 1200 },
  { id: "seo", name: "🔍 SEO Setup", price: 600 },
  { id: "copy", name: "🪄 Content Polishing", price: 400 },
];

export default function Configurator() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const total =
    (selectedPackage ? selectedPackage.price : 0) +
    selectedAddons.reduce(
      (sum, id) => sum + addons.find((a) => a.id === id).price,
      0
    );

  return (
    <section className="py-16 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          Build yours. Designed around what matters.
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          Choose how you want to start — focused, flexible, or full-scale. Add
          what you need, skip what you don’t.
        </p>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg)}
              className={`p-6 rounded-2xl border transition-all duration-300 text-left
                ${
                  selectedPackage?.id === pkg.id
                    ? "border-neutral-900 dark:border-white scale-105 shadow-lg"
                    : "border-neutral-300 dark:border-neutral-700 hover:scale-[1.02]"
                }`}
            >
              <h3 className="text-xl font-semibold">{pkg.name}</h3>
              <p className="text-sm mt-2 text-neutral-600 dark:text-neutral-400">
                {pkg.description}
              </p>
              <p className="mt-4 text-lg font-medium text-neutral-900 dark:text-white">
                ₹{pkg.price.toLocaleString()}
              </p>
              <p className="text-xs mt-1 text-neutral-500">{pkg.ideal}</p>
            </button>
          ))}
        </div>

        {/* Add-ons */}
        {selectedPackage && (
          <div className="mt-12 text-left max-w-2xl mx-auto">
            <h4 className="text-lg font-medium mb-3 text-neutral-900 dark:text-white">
              Extras
            </h4>
            <div className="space-y-3">
              {addons.map((addon) => (
                <label
                  key={addon.id}
                  className="flex items-center justify-between p-3 rounded-xl border dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
                >
                  <div>
                    <input
                      type="checkbox"
                      className="mr-3 accent-neutral-900 dark:accent-white"
                      checked={selectedAddons.includes(addon.id)}
                      onChange={() => toggleAddon(addon.id)}
                    />
                    <span className="text-neutral-800 dark:text-neutral-200 font-medium">
                      {addon.name}
                    </span>
                  </div>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    +₹{addon.price}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Total Summary */}
        {selectedPackage && (
          <div className="mt-10">
            <div className="text-xl font-semibold text-neutral-900 dark:text-white">
              Total: ₹{total.toLocaleString()}
            </div>
            <button
              className="mt-4 px-8 py-3 bg-neutral-900 text-white rounded-full hover:scale-105 transition"
            >
              Start Your Build
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
