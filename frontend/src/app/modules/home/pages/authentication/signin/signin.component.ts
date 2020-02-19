import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../../../core/services/form/question.service';
import { QuestionBase, TextboxQuestion } from '../../../../../shared/models';

const questions: QuestionBase<any>[] = [
  new TextboxQuestion({
    key: 'username',
    label: 'username',
    value: '',
    required: true,
    type: 'email'
  }),
  new TextboxQuestion({
    key: 'password',
    label: 'password',
    value: '',
    required: true,
    type: 'password'
  }),
];

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {
  questions: any[];

  constructor(
    private service: QuestionService
  ) {
  }

  ngOnInit() {
    this.questions = questions;
  }

}
