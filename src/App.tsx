import { Card, Cart, Title } from "./components/";
import { TotalModal } from "./components/totalModal/TotalModal";

import { desserts } from "./data/desserts";

import card from "./sass/card/card.module.scss";
import titleStyle from "./sass/title/title.module.scss";

function App() {
  return (
    <>
      <Title text="Desserts" className={`${titleStyle["title__main"]}`} />

      <section className={`${card["card__wrapper"]}`}>
        <div className={`${card['card__wrapperCards']}`}>

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
        </div>
        <Cart />
      </section>
      <TotalModal />
    </>
  );
}

export default App;
