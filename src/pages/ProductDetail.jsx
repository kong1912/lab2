import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCartStore } from "../store/useCartStore";

const ProductDetail = () => {
  const { id } = useParams(); // Get ID from URL
  const navigate = useNavigate(); // Navigate using JavaScript
  const addToCart = useCartStore((state) => state.addToCart);

  // Find product by ID
  const product = products.find((p) => p.id === id);

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-10 bg-white rounded-lg shadow-lg">
          <p className="text-3xl text-red-500 font-bold">Product not found!</p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Back to Catalog
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-10 border border-gray-200 mt-10 rounded-2xl shadow-lg">
        <button
          onClick={() => navigate(-1)} // Go back using navigate
          className="mb-6 text-sm text-gray-500 hover:text-black hover:scale-110 transition"
        >
          ← Back to Catalog
        </button>
        <h1 className="text-4xl font-bold mb-2 text-gray-900">{product.name}</h1>
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
          {product.category}
        </span>
        <p className="text-3xl text-green-600 font-bold my-6">{product.price} THB</p>
        <p className="text-gray-600 leading-relaxed text-lg mb-8">{product.desc}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:shadow-lg transition-all font-medium"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
