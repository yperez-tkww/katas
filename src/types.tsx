export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type Products = {
  products: Product[];
};
