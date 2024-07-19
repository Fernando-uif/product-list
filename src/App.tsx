
import { Card } from "./components/card/Card";
import { Cart } from "./components/cart/Cart";
import { Title } from "./components/title/Title";
import { desserts } from "./data/desserts";

import style from './sass/card/card.module.scss';

function App() {
  return (
    <>
      <Title text="Desserts" />
      <section className={`${style['card__wrapper']}`}>

      {desserts.map((dessert) => {
        return (
          <Card
            category={dessert.category}
            image={dessert.image}
            name={dessert.name}
            price={dessert.price}
          />
        );
      })}
      <Cart/>
      </section>
    </>
  );
}

export default App;
