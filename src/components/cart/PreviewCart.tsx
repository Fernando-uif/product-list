import { formatPrice } from "../../helpers";
import { CartProduct } from "../../interfaces";
import style from "../../sass/cart/cart.module.scss";
import Icon from "../icons/Icon";

export const PreviewCart = ({ price, howMany, name }: CartProduct) => {
  return (
    <div className={`${style["cart__fill__item"]}`}>
      <div className={`${style["cart__fill__description"]}`}>
        <div className={`${style["cart__fill__name"]}`}>{name}</div>
        <div className={`${style["cart__fill__wrapperValue"]}`}>
          <div className={`${style["cart__fill__times"]}`}>{howMany}X</div>
          <div className={`${style["cart__fill__cost__unit"]}`}>
            @{formatPrice(price)}
          </div>
          <div className={`${style["cart__fill__cost__total"]}`}>
            {formatPrice(howMany * price)}
          </div>
        </div>
      </div>

      <Icon name="close" className={`${style["cart__fill__icon__remove"]}`} />
    </div>
  );
};
