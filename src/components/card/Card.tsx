import { formatPrice } from "../../helpers";
import { CartProduct } from "../../interfaces";
import { DessertsProps } from "../../interfaces/Desserts.interface";
import style from "../../sass/card/card.module.scss";
import { useCartStore } from "../../store/cart/cart-store";
import Icon from "../icons/Icon";

export const Card = ({ image, category, name, price, id }: DessertsProps) => {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const getAllProducts = useCartStore((state) => state.getTotalItems());
  const removeItem = useCartStore((state) => state.removeProductCart);

  const handleAddProduct = (product: CartProduct) => {
    addProductToCart({ ...product, howMany: 1, id });
  };

  const isInside = getAllProducts.some((item) => item.id === id);
  console.log(isInside, "existe");
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
        <button
          className={`${style["card__button"]} ${
            isInside ? style["card__validCount"] : ""
          }`}
          onClick={
            !isInside
              ? () => handleAddProduct({ howMany: 0, name, price, id: "" })
              : undefined
          }
        >
          {isInside ? (
            getAllProducts.map((item) => {
              if (item.id === id) {
                return (
                  <>
                    <Icon
                      name="substractItem"
                      className={`${style["card__validCount__substract"]}`}
                      onClick={() => removeItem(item.id || "")}
                    />
                    <span className={`${style["card__validCount__count"]}`}>
                      {item.howMany}
                    </span>
                    <Icon
                      name="addItem"
                      className={`${style["card__validCount__add"]}`}
                      onClick={() =>
                        handleAddProduct({ howMany: 0, name, price, id: "" })
                      }
                    />
                  </>
                );
              }
            })
          ) : (
            <></>
          )}
          {!isInside && (
            <>
              <Icon name="cart" className={`${style["card__button__icon"]}`} />
              <span className={`${style["card__button__text"]}`}>
                Add to Cart
              </span>
            </>
          )}
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
