import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ChartsModule } from 'ng2-charts';

import {
  DynamicFormComponent,
  DynamicFormQuestionComponent
} from './components/form';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  DynamicFormComponent,
  DynamicFormQuestionComponent,

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
