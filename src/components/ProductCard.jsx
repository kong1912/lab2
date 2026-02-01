import { useCartStore } from "../store/useCartStore";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="p-6 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-all duration-200">
      <h2 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h2>
      <p className="text-gray-500 mb-3">{product.price} THB</p>
      <p className="text-blue-600 bg-blue-100 rounded-full text-sm inline-block px-3 py-1 mb-4">
        {product.category}
      </p>
      <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
      <button
        onClick={() => addToCart(product)}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
