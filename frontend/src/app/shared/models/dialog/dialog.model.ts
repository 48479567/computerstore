import { QuestionBase, SelectOption } from '../form/question-base';

export class DialogData {
  constructor(
    public title: any,
    public content: any,
    public actions: any
  ) {}
}

export class FormDialogData extends DialogData {
  constructor(
    public title: any,
    public content: any,
    public actions: any,
    public questions: QuestionBase<any>[],
    public refObject: SelectOption[] | Array<SelectOption[]>
  ) {
    super(title, content, actions);
  }
}

