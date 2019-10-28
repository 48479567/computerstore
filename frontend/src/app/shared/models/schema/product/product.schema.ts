import { DropdownFormat, DropdownQuestion } from '../../form/question-dropdown';
import { QuestionBase, SelectOption } from '../../form/question-base';
import { TextboxQuestion } from '../../form/question-textbox';
import { CategoryService } from 'src/app/core/services/schema/category.service';

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
    public price: number,
    public sale: number,
    public mark: string,
    public image: string,
    public categoryid: string,
    public features: { },
    public createdat: number | string,
    public updatedat?: number | string,
    public id?: string,
  ) {
    super(name, quantity, image);
   }
}

export class ProductSchemaForm {
  constructor(
    public name?: string,
    public quantity?: number,
    public investment?: number,
    public price?: number,
    public sale?: number,
    public mark?: string,
    public image?: string,
    public categoryid?: SelectOption,
    public features?: { },
    public createdat?: number | string,
    public updatedat?: number | string,
    public id?: string,
  ) { }

  getQuestions(categoryIdInject: SelectOption[]): QuestionBase<any>[] {
    return [
      new TextboxQuestion({
        type: 'string',
        label: 'Product Name',
        value: this.name,
        required: true,
        key: 'name'
      }),
      new TextboxQuestion({
        type: 'number',
        label: 'Quantity',
        value: this.quantity,
        required: true,
        key: 'quantity'
      }),
      new TextboxQuestion({
        type: 'number',
        label: 'Investment',
        value: this.investment,
        required: true,
        key: 'investment'
      }),
      new TextboxQuestion({
        type: 'number',
        label: 'Price',
        value: this.price,
        required: true,
        key: 'price'
      }),
      new TextboxQuestion({
        type: 'number',
        label: 'Sale',
        value: this.sale,
        required: true,
        key: 'sale'
      }),
      new TextboxQuestion({
        type: 'string',
        label: 'Mark',
        value: this.mark,
        required: true,
        key: 'mark'
      }),
      new TextboxQuestion({
        type: 'string',
        label: 'Image',
        value: this.image,
        required: true,
        key: 'image'
      }),
      new DropdownQuestion({
        type: 'string',
        label: 'Category',
        value: '',
        required: true,
        key: 'categoryid',
        options: categoryIdInject
      })
    ];
  }
}


