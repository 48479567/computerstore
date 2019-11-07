import { Component, OnInit, Input } from '@angular/core';
import { SelectOption } from 'src/app/shared/models';

@Component({
  selector: 'app-textarea',
  template: `
    <mat-form-field appearance="outline" [hideRequiredMarker]="required">
      <mat-label>{{ label | titlecase }}</mat-label>
      <textarea
        matInput
        [placeholder]="label"
        [formControlName]="formControlName"
        [id]="label"
        [required]="required"
        [value]="value"
      ></textarea>
      <mat-error *ngIf="required">{{ label }} is required!!</mat-error>
    </mat-form-field>
  `
})

export class TextareaComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() formControlName = '';
  @Input() value = '';
  @Input() required = true;


  constructor() { }

  ngOnInit() { }
}
