import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: (() => {
    // Load user from localStorage on initialization
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  })(),

  login: (userData) => {
    set({ user: userData });
    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(userData));
  },

  logout: () => {
    set({ user: null });
    // Remove from localStorage
    localStorage.removeItem("user");
  },
}));
