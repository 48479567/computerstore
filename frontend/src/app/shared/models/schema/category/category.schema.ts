import { QuestionBase } from '../../form/question-base';
import { TextboxQuestion } from '../../form/question-textbox';

export class Category {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class CategoryCard extends Category {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}


export class CategorySchema extends CategoryCard {
  constructor(
    public name: string,
    public quantity: number,
    public investment: number,
    public sale: number,
    public image: string,
    public description?: string,
    public createdat?: number | string,
    public updatedat?: number | string,
    public id?: string,
  ) {
    super(name, quantity, image);
   }
}


export class CategorySchemaForm {
  constructor(
    public name?: string,
    public quantity?: number,
    public investment?: number,
    public sale?: number,
    public image?: string,
    public description?: string,
    public createdat?: number | string,
    public updatedat?: number | string,
    public id?: string,
  ) {
  }

  getQuestion(): QuestionBase<any>[] {
    return [
      new TextboxQuestion()
    ];
  }
}
