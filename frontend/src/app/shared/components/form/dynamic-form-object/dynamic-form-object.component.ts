import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { formatObjectQuestion } from '../../../../shared/models/schema/product/product.schema';

@Component({
  selector: 'app-form-object',
  templateUrl: './dynamic-form-object.component.html'
})
export class DynamicFormObjectComponent implements OnInit {
  @Input() resource: any = {};
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = formatObjectQuestion(this.resource, null);
  }

  isTypeOfObject(value: any): boolean {
    return typeof value === 'object';
  }

}
