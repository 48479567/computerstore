import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from 'src/app/shared/models';
import { FormGroup, FormControl } from '@angular/forms';
import { QuestionControlService } from 'src/app/core/services/form/question-control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})

export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];

  form: FormGroup;

  constructor(
    private qcs: QuestionControlService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    console.log(this.form);
  }

  onSubmit() {
    this.router.navigateByUrl('/home/category');
  }

}
