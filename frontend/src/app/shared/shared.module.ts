import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ChartsModule } from 'ng2-charts';

import {
  DynamicFormComponent,
  DynamicFormQuestionComponent
} from './components/form';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './components/report';

const COMPONENTS = [
  DynamicFormComponent,
  DynamicFormQuestionComponent,
  ReportComponent
];

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    ChartsModule,

  ],
  exports: [MaterialModule, ...COMPONENTS],
  declarations: [...COMPONENTS, ReportComponent],
  providers: [],
})
export class SharedModule { }
