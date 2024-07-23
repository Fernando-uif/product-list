import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Cart, CartProduct } from "../../interfaces";

export const useCartStore = create<Cart>()(
  persist(
    (set, get) => ({
      getTotalItems: () => {
        const { cart } = get();
        console.log(cart);
        return cart;
      },
      cart: [],
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();
        set({ cart: [...cart, product] });
        return;
      },
    }),

    {
      name: "dessert-cart",
      // skipHydration: true,
      // evita que tengamos problema de que salga el error, pero tenemos que
    }
  )
);
