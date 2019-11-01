import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-scalable',
  templateUrl: './dynamic-scalable-form.component.html'
})

export class DynamicFormScalableComponent implements OnInit {
  @Input() section = { a: 'a', b: 'B', c: 'C'};
  @Input() form: FormGroup;


  constructor() { }

  ngOnInit() {
  }
}
