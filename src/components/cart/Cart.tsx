import { Children } from "react";

import Icon from "../icons/Icon";
import { PreviewCart } from "./PreviewCart";
import { CartProduct } from "../../interfaces/cart/CartProduct.interface";
import { formatPrice } from "../../helpers";
import { useToggleStore } from "../../store/cart/preview-store";

import style from "../../sass/cart/cart.module.scss";


export const Cart = ({ cartItems }: { cartItems: CartProduct[] }) => {
  const total = cartItems.reduce((prev, curre) => prev + curre?.price, 0);
  const handleToggle = useToggleStore((state) => state.setToggle);

  return (
    <section className={`${style["cart"]}`}>
      {cartItems.length ? (
        <div className={`${style["cart__fill"]}`}>
          <span className={`${style["cart__title"]}`}>
            Your Cart ({cartItems.length})
          </span>

          {Children.toArray(
            cartItems.map((dessert: CartProduct) => {
              return (
                <PreviewCart
                  howMany={dessert?.howMany}
                  name={dessert?.name}
                  price={dessert?.price}
                  id={dessert?.id}
                />
              );
            })
          )}

          <div className={`${style["cart__fill__order"]}`}>
            <div className={`${style["cart__fill__orderTotalText"]}`}>
              Order Total
            </div>
            <div className={`${style["cart__fill__orderTotal"]}`}>
              {formatPrice(total)}
            </div>
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
          <button
            className={`${style["cart__fill__button"]}`}
            onClick={() => handleToggle(true)}
          >
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
