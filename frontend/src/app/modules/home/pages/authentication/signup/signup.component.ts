import { Component, OnInit } from '@angular/core';
import { QuestionBase, TextboxQuestion } from 'src/app/shared/models';

const questions: QuestionBase<any>[] = [
  new TextboxQuestion({
    key: 'firstname',
    label: 'First name',
    value: '',
    required: true,
    order: 1,
    type: 'text'
  }),
  new TextboxQuestion({
    key: 'lastname',
    label: 'Last name',
    value: '',
    required: true,
    order: 2,
    type: 'text'
  }),
  new TextboxQuestion({
    key: 'username',
    label: 'Username',
    value: '',
    required: true,
    order: 3,
    type: 'text'
  }),
  new TextboxQuestion({
    key: 'password',
    label: 'Password',
    value: '',
    required: true,
    order: 4,
    type: 'password'
  }),
  new TextboxQuestion({
    key: 'confirm',
    label: 'Confirm',
    value: '',
    required: true,
    order: 5,
    type: 'password'
  }),
];

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  questions: any[];
  constructor() { }

  ngOnInit() {
    this.questions = questions;
  }
}
