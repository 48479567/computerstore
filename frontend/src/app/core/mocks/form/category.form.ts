import { QuestionBase, TextboxQuestion, CategorySchemaForm } from '../../../shared/models';

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



