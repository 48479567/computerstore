export class Product {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class ProductCard extends Product {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}
