import { Card, Cart, Title } from "./components/";
// import { TotalModal } from "./components/totalModal/TotalModal";

import { desserts } from "./data/desserts";
import { CartProduct } from "./interfaces";

import card from "./sass/card/card.module.scss";
import titleStyle from "./sass/title/title.module.scss";
import { useCartStore } from "./store/cart/cart-store";

function App() {
  const cart: CartProduct[] = useCartStore((state) => state.cart);

  return (
    <>
      <Title text="Desserts" className={`${titleStyle["title__main"]}`} />

      <section className={`${card["card__wrapper"]}`}>
        <div className={`${card["card__wrapperCards"]}`}>
          {desserts.map((dessert) => {
            return (
              <Card
                category={dessert.category}
                image={dessert.image}
                name={dessert.name}
                price={dessert.price}
                id={dessert.id}
              />
            );
          })}
        </div>
        <Cart cartItems={cart} />
      </section>
      {/* <TotalModal /> */}
    </>
  );
}

export default App;
