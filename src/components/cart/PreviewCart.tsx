import style from "../../sass/cart/cart.module.scss";
import Icon from "../icons/Icon";

export const PreviewCart = () => {
  return (
    <div className={`${style["cart__fill__item"]}`}>
      <div className={`${style["cart__fill__description"]}`}>
        <div className={`${style["cart__fill__name"]}`}>Classic Tiramisu</div>
        <div className={`${style["cart__fill__wrapperValue"]}`}>
          <div className={`${style["cart__fill__times"]}`}>1X</div>
          <div className={`${style["cart__fill__cost__unit"]}`}>@$5.50</div>
          <div className={`${style["cart__fill__cost__total"]}`}>$5.50</div>
        </div>
      </div>

      <Icon name="close" className={`${style["cart__fill__icon__remove"]}`} />
    </div>
  );
};
