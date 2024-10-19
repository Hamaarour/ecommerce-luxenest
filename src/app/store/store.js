import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      cart: [],
      favorites: [],
      
      // Cart actions
      addToCart: (item) => 
        set((state) => ({
          cart: [...state.cart, { ...item, quantity: 1 }]
        })),
      
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id)
        })),
      
      updateCartItemQuantity: (id, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          )
        })),
      
      // Favorites actions
      addToFavorites: (item) =>
        set((state) => ({
          favorites: [...state.favorites, item]
        })),
      
      removeFromFavorites: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== id)
        })),
      
      // Clear actions
      clearCart: () => set({ cart: [] }),
      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: 'shop-storage', // unique name for localStorage
    }
  )
);

export default useStore;