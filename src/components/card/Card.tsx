import { formatPrice } from "../../helpers";
import { DessertsProps } from "../../interfaces/Desserts.interface";
import style from "../../sass/card/card.module.scss";
import Icon from "../icons/Icon";

export const Card = ({ image, category, name, price }: DessertsProps) => {
  return (
    <div>
      <div className={`${style["card"]}`}>
        <figure>
          <img
            className={`${style["card__image"]}`}
            alt={name}
            src={`./src/assets${image.tablet}`}
            srcSet={`
               ./src/assets/${image.mobile} 833w,
              ./src/assets/${image.tablet} 1279w,
              ./src/assets/${image.desktop} 1280w
            `}
            sizes="(max-width: 833px) 100vw, (max-width: 1279px) 100vw, 100vw"
          />
        </figure>
        <button className={`${style["card__button"]}`}>
          <Icon name="cart" className={`${style["card__button__icon"]}`} />
          <span className={`${style["card__button__text"]}`}>Add to Cart</span>
        </button>
      </div>
      <figcaption className={`${style["card__figcaption"]}`}>
        <span className={`${style["card__figcaption__category"]}`}>
          {category}
        </span>
        <p className={`${style["card__figcaption__name"]}`}>{name}</p>
        <span className={`${style["card__figcaption__price"]}`}>
          {formatPrice(price)}
        </span>
      </figcaption>
    </div>
  );
};
