import style from "../../sass/cart/cart.module.scss";
import Icon from "../icons/Icon";
import { PreviewCart } from "./PreviewCart";
import { CartProduct } from "../../interfaces/cart/CartProduct.interface";


export const Cart = ({ cartItems }: { cartItems: CartProduct[] }) => {
  console.log(cartItems, "items");
  
  return (
    <section className={`${style["cart"]}`}>
      {cartItems.length ? (
        <div className={`${style["cart__fill"]}`}>
          <span className={`${style["cart__title"]}`}>
            Your Cart ({cartItems.length})
          </span>

          {cartItems.map((dessert: CartProduct) => {
            return (
              <PreviewCart
                howMany={dessert.howMany}
                name={dessert.name}
                price={dessert.price}
              />
            );
          })}

          <div className={`${style["cart__fill__order"]}`}>
            <div className={`${style["cart__fill__orderTotalText"]}`}>
              Order Total
            </div>
            <div className={`${style["cart__fill__orderTotal"]}`}>$46.50</div>
          </div>
          <div className={`${style["cart__fill__carbonMessage"]}`}>
            <Icon
              name="carbon"
              className={`${style["cart__fill__carbonIcon"]}`}
            />
            <div className={`${style["cart__fill__carbonText--normal"]}`}>
              This is a{" "}
              <span className={`${style["cart__fill__carbonText"]}`}>
                carbon-neutral
              </span>{" "}
              delivery
            </div>
          </div>
          <button className={`${style["cart__fill__button"]}`}>
            Confirm Order
          </button>
        </div>
      ) : (
        <>
          <span className={`${style["cart__title"]}`}>Your Cart (0)</span>
          <Icon
            name="previewEmpty"
            className={`${style["cart__emptyImage"]}`}
          />
          <p className={`${style["cart__emptyDescription"]}`}>
            Your added items will appear here
          </p>
        </>
      )}
    </section>
  );
};
