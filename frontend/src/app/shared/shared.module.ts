import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ChartsModule } from 'ng2-charts';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  DynamicFormComponent,
  DynamicFormQuestionComponent,
  ReportComponent,
  ChartComponent,
  FilterComponent

} from './components';

const COMPONENTS = [
  DynamicFormComponent,
  DynamicFormQuestionComponent,
  ReportComponent,
  ChartComponent,
  FilterComponent,

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
  providers: [],
})
export class SharedModule { }
