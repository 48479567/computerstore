import { QuestionBase, TextboxQuestion, CategorySchemaForm } from 'src/app/shared/models';

export const categoryQuestions: QuestionBase<any>[] = [
  new TextboxQuestion({
    key: 'name',
    label: 'Product Name',
    value: ''
  })
];


export const setCategoryQuestions = (category: CategorySchemaForm) => {
  const entriesCategory = Object.entries(category);
  const questions = entriesCategory.map(
    (entryCategory) => {
      return new TextboxQuestion({
        key: entryCategory[0],
        label: entryCategory[0],
        value: entryCategory[1],
        type: typeof entryCategory[1],
        required: true
      });
    });
  return questions;
};


