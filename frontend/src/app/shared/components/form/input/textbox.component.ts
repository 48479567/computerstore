import { Component, OnInit, Input } from '@angular/core';
import { SelectOption } from 'src/app/shared/models';

@Component({
  selector: 'app-textbox',
  template: `
    <mat-form-field appearance="outline" [hideRequiredMarker]="required">
      <mat-label>{{ label | titlecase }}</mat-label>
      <input
        matInput
        [value]="value"
        [formControlName]="formControlName"
        [placeholder]="placeholder"
        aria-describedby="enter"
        autocomplete="off"
        [id]="label"
        [type]="type"
        [required]="required" />
      <mat-error *ngIf="required">{{ label }} is required!!</mat-error>
    </mat-form-field>
  `
})

export class TextboxComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() formControlName = '';
  @Input() value = '';
  @Input() type: string | number = '' || 0;
  @Input() required = true;


  constructor() { }

  ngOnInit() { }
}
