export interface Cart {
  cart: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
}
export interface CartProduct {
  id?: string;
  name: string;
  howMany: number;
  price: number;

}
