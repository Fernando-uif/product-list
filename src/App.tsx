import { Children } from "react";
import { Card, Cart, Title } from "./components/";
import { TotalModal } from "./components/totalModal/TotalModal";

import { desserts } from "./data/desserts";
import { CartProduct } from "./interfaces";

import card from "./sass/card/card.module.scss";
import titleStyle from "./sass/title/title.module.scss";
import { useCartStore } from "./store/cart/cart-store";
import { useToggleStore } from "./store/cart/preview-store";

function App() {
  const cart: CartProduct[] =
    useCartStore((state) => state?.getTotalItems()) || [];
  const isOpen = useToggleStore((state) => state.getIsOpen());

  return (
    <>
      <Title text="Desserts" className={`${titleStyle["title__main"]}`} />

      <section className={`${card["card__wrapper"]}`}>
        <div className={`${card["card__wrapperCards"]}`}>
          {Children.toArray(
            desserts.map((dessert) => {
              return (
                <Card
                  category={dessert.category}
                  image={dessert.image}
                  name={dessert.name}
                  price={dessert.price}
                  id={dessert.id}
                />
              );
            })
          )}
        </div>
        <Cart cartItems={cart} />
      </section>
      {isOpen && <TotalModal />}
    </>
  );
}

export default App;
