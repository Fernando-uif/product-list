export interface DessertsProps {
    image: Image;
    price: number;
    name: string;
    category: string;
  }
  export interface Image {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  }