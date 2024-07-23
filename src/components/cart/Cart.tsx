import { useState } from "react";
import style from "../../sass/cart/cart.module.scss";
import Icon from "../icons/Icon";
import { PreviewCart } from "./PreviewCart";

export const Cart = () => {
  const [totalCart] = useState(0);
  return (
    <section className={`${style["cart"]}`}>
      {totalCart ? (
        <div className={`${style["cart__fill"]}`}>
          <span className={`${style["cart__title"]}`}>Your Cart (7)</span>

          <PreviewCart />

          <div className={`${style["cart__fill__order"]}`}>
            <div className={`${style["cart__fill__orderTotalText"]}`}>
              Order Total
            </div>
            <div className={`${style["cart__fill__orderTotal"]}`}>$46.50</div>
          </div>
          <div className={`${style["cart__fill__carbonMessage"]}`}>
            <Icon name="carbon" className={`${style['cart__fill__carbonIcon']}`} />
            <div className={`${style['cart__fill__carbonText--normal']}`}>
              This is a{" "}
              <span className={`${style["cart__fill__carbonText"]}`}>
                carbon-neutral
              </span>{" "}
              delivery
            </div>
          </div>
          <button className={`${style['cart__fill__button']}`}>Confirm Order</button>
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
