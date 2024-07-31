import { formatPrice } from "../../helpers";
import { CartProduct } from "../../interfaces";
import itemTotalStyle from "../../sass/totalModal/itemTotal.module.scss";

export const ItemTotal = ({ item }: { item: CartProduct }) => {
  console.log(item, "tenemos el item");
  return (
    <div className={`${itemTotalStyle["itemTotal"]}`}>
      <div className={`${itemTotalStyle['itemTotal__imageText']}`}>
        <figure>
          <img
            src={`../src/assets/${item.image?.thumbnail}`}
            alt=""
            className={`${itemTotalStyle["itemTotal__image"]}`}
          />
        </figure>
        <div className={`${itemTotalStyle["itemTotal__description"]}`}>
          <span className={`${itemTotalStyle["itemTotal__description__name"]}`}>
            {item.name}
          </span>
          <span
            className={`${itemTotalStyle["itemTotal__description__value"]}`}
          >
            <span
              className={`${itemTotalStyle["itemTotal__description__value__times"]}`}
            >
              {item.howMany}X
            </span>
            <span
              className={`${itemTotalStyle["itemTotal__description__value__total"]}`}
            >
              @{formatPrice(item.price)}
            </span>
          </span>
        </div>
      </div>
      <span
        className={`${itemTotalStyle["itemTotal__description__itemTotal"]}`}
      >
        {formatPrice(item.price * item.howMany)}
      </span>
    </div>
  );
};
