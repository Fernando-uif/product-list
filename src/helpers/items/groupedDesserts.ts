import { CartProduct } from "../../interfaces";

export const groupedDesserts = (desserts: CartProduct[]) => {
  console.log(desserts,'dessert');
  const groupedDesserts = desserts.reduce(
    (acc: CartProduct[], curr: CartProduct) => {
      const existingDessert = acc.find((dessert) => dessert.id === curr.id);
      if (existingDessert) {
        existingDessert.howMany += curr.howMany;
      } else {
        acc.push({ ...curr });
      }
      return acc;
    },
    []
  );

  const updatedDesserts = groupedDesserts.map((dessert) => {
    const count = desserts.filter((d) => d.id === dessert.id).length;
    return {
      ...dessert,
      howMany: count,
    };
  });
  return updatedDesserts;
};
