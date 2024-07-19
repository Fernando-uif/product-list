import { useState } from "react";
import style from "../../sass/cart/cart.module.scss";
import Icon from "../icons/Icon";

export const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  return (
    <section className={`${style["cart"]}`}>
      <span className={`${style["cart__title"]}`}>Your Cart ({totalCart})</span>
      <Icon name="previewEmpty" className={`${style["cart__emptyImage"]}`} />
      <p className={`${style['cart__emptyDescription']}`}>Your added items will appear here</p>
    </section>
  );
};
