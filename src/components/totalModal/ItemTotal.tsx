import itemTotalStyle from "../../sass/totalModal/itemTotal.module.scss";

export const ItemTotal = () => {
  return (
    <div className={`${itemTotalStyle["itemTotal"]}`}>
      <figure>
        <img
          src="../src/assets/image-tiramisu-thumbnail.jpg"
          alt=""
          className={`${itemTotalStyle["itemTotal__image"]}`}
        />
      </figure>
      <div className={`${itemTotalStyle["itemTotal__description"]}`}>
        <span className={`${itemTotalStyle["itemTotal__description__name"]}`}>
          Classic Tiramisu
        </span>
        <span className={`${itemTotalStyle["itemTotal__description__value"]}`}>
          <span
            className={`${itemTotalStyle["itemTotal__description__value__times"]}`}
          >
            1X
          </span>
          <span
            className={`${itemTotalStyle["itemTotal__description__value__total"]}`}
          >
            @$5.50
          </span>
        </span>
      </div>
      <span className={`${itemTotalStyle['itemTotal__description__itemTotal']}`}>$5.50</span>
    </div>
  );
};
