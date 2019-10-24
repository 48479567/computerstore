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

export class ProductSchema extends ProductCard {
  constructor(
    public name: string,
    public quantity: number,
    public investment: number,
    public gain: number,
    public mark: string,
    public image: string,
    public categoryid: string,
    public features: { },
    public createdat: Date,
    public id?: string,
  ) {
    super(name, quantity, image);
   }
}
