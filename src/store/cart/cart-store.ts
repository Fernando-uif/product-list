import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Cart, CartProduct } from "../../interfaces";

export const useCartStore = create<Cart>()(
  persist(
    (set, get) => ({
      cart: [
        {
          howMany: 0,
          name: "",
          price: 0,
          id: "",
          image: { thumbnail: "" },
        },
      ],
      getTotalItems: () => {
        const { cart } = get();
        return cart;
      },
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();
        const productInCart = cart.some((item) => {
          return item.id === product.id;
        });
        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }
        const updatedCartProduct = cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, howMany: item.howMany + product.howMany };
          }
          return item;
        });

        set({ cart: updatedCartProduct });

        return;
      },
      removeProductCart: (productId: string) => {
        const { cart } = get();
        // set({cart:[]})
        // return;
        const cartUpdate = cart.map((item) => {
          if (item.id === productId) {
            return { ...item, howMany: item.howMany - 1 };
          }
          return item;
        });

        const moreItems = cartUpdate.filter((item) => item.howMany >= 1);

        set({ cart: moreItems });

        return;
      },
      removeProduct: (producId: string) => {
        const { cart } = get();
        const restCart = cart.filter((item) => {
          return item.id !== producId;
        });
        set({ cart: restCart });
        return;
      },
      clearCart: () => {
        set({ cart: [] });
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
