export class Set {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class SetCard extends Set {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}

export class SetSchema extends Set {
  constructor(
    public id: number,
    public name: string,
    public set: string,
    public mark: string,
    public quantity: number,
    public sales: number
  ) {
    super(name, quantity);
   }
}
