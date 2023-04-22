export interface Product {
  id: number;
  image: string;
  description: string;
}

export interface ProductGroup {
  id: number;
  name: string;
  products: Array<Product>;
}
