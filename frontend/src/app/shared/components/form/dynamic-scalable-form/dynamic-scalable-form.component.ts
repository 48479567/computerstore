import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-scalable',
  templateUrl: './dynamic-scalable-form.component.html'
})

export class DynamicFormScalableComponent implements OnInit {
  object = { a: 'a', b: 'b', c: 'c' };
  @Input() section: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    fullname: new FormControl('', [Validators.email, Validators.required, Validators.minLength(5)])
  });
  @Input() form: FormGroup;


  constructor() { }

  ngOnInit() {
    this.form.addControl('section', this.section);
    console.log('form', this.section.controls);
  }

  errorInput(name) {
    if (!name) {
      return;
    }
    return Object.keys(name);
  }
}
