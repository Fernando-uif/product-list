import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Cart, CartProduct } from "../../interfaces";
import { groupedDesserts } from "../../helpers/items/groupedDesserts";

export const useCartStore = create<Cart>()(
  persist(
    (set, get) => ({
      cart: [],
      getTotalItems: () => {
        const { cart } = get();
        return cart;
      },
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();
        const newCart = [...cart, product];
        console.log(newCart, "newcart");
        const updatedCart = groupedDesserts(newCart);
        set({ cart: updatedCart });

        return;
      },
      removeProductCart: (productId: string) => {
        const { cart } = get();
        const allProducts = groupedDesserts(cart);
        const filterProducts = allProducts.filter((product) => {
          return product.id !== productId;
        });
        console.log(filterProducts, "filterproduct");
        set({ cart: [...filterProducts] });
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
