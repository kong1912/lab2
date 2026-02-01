import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  // Add item to cart
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        // If item exists, increase quantity
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      // If item doesn't exist, add new item with quantity 1
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  // Remove item from cart
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  // Clear entire cart
  clearCart: () => set({ cart: [] }),
}));
