export interface Cart {
  cart: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  removeProductCart: (productId: string) => void;
  getTotalItems: () => CartProduct[];
}
export interface CartProduct {
  id?: string;
  name: string;
  howMany: number;
  price: number;
}
