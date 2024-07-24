import Icon from "../icons/Icon";
import { Title } from "../title/Title";
import totalModalStyle from "../../sass/totalModal/totalModal.module.scss";
import { ItemTotal } from "./ItemTotal";
import { useToggleStore } from "../../store/cart/preview-store";

export const TotalModal = () => {
  const handleSetToggle = useToggleStore((state) => state.setToggle);

  return (
    <section className={`${totalModalStyle['totalModal--background']}`}>

    <div className={`${totalModalStyle["totalModal"]}`}>
      <div className={`${totalModalStyle["totalModal__wrapper"]}`}>
        <Icon
          name="check"
          className={`${totalModalStyle["totalModal__check"]}`}
        />
        <div>
          <Title text="Order Confirmed" />
          <p className={`${totalModalStyle["totalModal__regards"]}`}>
            We hope you enjoy your food!
          </p>
        </div>
        <div className={`${totalModalStyle["totalModal__totalItems"]}`}>
          <ItemTotal />
          <div className={`${totalModalStyle["totalModal__line"]}`} />
          <div className={`${totalModalStyle["totalModal__total"]}`}>
            <div
              className={`${totalModalStyle["totalModal__total__orderText"]}`}
            >
              Order Total
            </div>
            <div
              className={`${totalModalStyle["totalModal__total__totalNumber"]}`}
            >
              $46.50
            </div>
          </div>
        </div>
      </div>

      <button
        className={`${totalModalStyle["totalModal__button"]}`}
        onClick={() => handleSetToggle(false)}
      >
        Start New Order
      </button>
    </div>
    </section>
  );
};
