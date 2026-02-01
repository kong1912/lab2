import { useState } from "react";
import { useCartStore } from "../store/useCartStore";

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeFromCart, clearCart } = useCartStore();

  // Derived state calculations
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.07;
  const shipping = subtotal > 0 ? 100 : 0;
  const total = subtotal + tax + shipping;

  return (
    <>
      {/* Cart Button (Navbar Badge) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-40 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-lg"
      >
        🛒 Cart ({cart.length})
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-40 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start border-b pb-4"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-gray-500 text-sm">
                        {item.price} THB × {item.quantity}
                      </p>
                      <p className="text-gray-700 font-medium mt-1">
                        {item.price * item.quantity} THB
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-500 hover:text-red-700 font-bold text-lg transition"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="border-t pt-4 space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">{subtotal} THB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (7%):</span>
                  <span className="font-semibold">{tax.toFixed(2)} THB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-semibold">{shipping} THB</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="font-bold text-lg">Total:</span>
                  <span className="font-bold text-lg text-blue-600">
                    {total.toFixed(2)} THB
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium">
                  Checkout
                </button>
                <button
                  onClick={() => clearCart()}
                  className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
