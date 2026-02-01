import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

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
            <div
              key={product.id}
              className="p-6 border border-gray-200 rounded-lg bg-white hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h2>
              <p className="text-gray-500 mb-3">{product.price} THB</p>
              <p className="text-blue-600 bg-blue-100 rounded-full text-sm inline-block px-3 py-1 mb-4">
                {product.category}
              </p>
              <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
              <Link
                to={`/product/${product.id}`}
                className="mt-3 inline-block text-blue-500 font-medium hover:text-blue-700 hover:underline transition"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
