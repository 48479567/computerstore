import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ChartsModule } from 'ng2-charts';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  DynamicFormComponent,
  DynamicFormQuestionComponent,
  DynamicFormAuthComponent,
  DynamicFormAuthQuestionComponent,
  EmailFieldComponent,
  PasswordFieldComponent,
  DynamicFormObjectComponent,
  DynamicFormObjectQuestionComponent,
  DynamicFormScalableComponent,
  ReportComponent,
  ChartComponent,
  FilterComponent,
  DialogCreateResourceComponent,
  FormDialogComponent,
  TableComponent,
  ItemComponent,
  ItemCreateComponent,
  ContentComponent,

} from './components';

const COMPONENTS = [
  DynamicFormComponent,
  DynamicFormQuestionComponent,
  DynamicFormAuthComponent,
  DynamicFormAuthQuestionComponent,
  EmailFieldComponent,
  PasswordFieldComponent,
  DynamicFormObjectComponent,
  DynamicFormObjectQuestionComponent,
  DynamicFormScalableComponent,
  ReportComponent,
  ChartComponent,
  FilterComponent,
  DialogCreateResourceComponent,
  FormDialogComponent,
  TableComponent,
  ItemComponent,
  ItemCreateComponent,
  ContentComponent,

];

const ENTRY_COMPONENTS = [
  DialogCreateResourceComponent,
  FormDialogComponent,

];

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    ChartsModule,

  ],
  exports: [MaterialModule, ...COMPONENTS],
  declarations: [...COMPONENTS],
  entryComponents: [...ENTRY_COMPONENTS],
  providers: [],
})
export class SharedModule { }
