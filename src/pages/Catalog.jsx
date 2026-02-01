import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Catalog = () => {
  const [search, setSearch] = useState("");

  // Search and filter logic
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Product Catalog</h1>
        <p className="text-gray-600 mb-8">Discover amazing products with instant search</p>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-4 border-2 border-gray-200 rounded-lg mb-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
