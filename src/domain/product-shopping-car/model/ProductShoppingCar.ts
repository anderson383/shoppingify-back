export class ProductShoppingCar {
  public pcx: number;
  public product: string;
  public category: string;

  constructor(pcx: number, product: string) {
    this.pcx = pcx;
    this.product = product;
  }
}

export class ShoppingCar {
  name: string;
  products: ProductShoppingCar[];

  constructor(name: string, products: ProductShoppingCar[]) {
    this.name = name;
    this.products = products;
  }
}
