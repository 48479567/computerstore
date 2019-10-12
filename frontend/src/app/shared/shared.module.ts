import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

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
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  exports: [MaterialModule, ...COMPONENTS],
  declarations: [...COMPONENTS],
  providers: [],
})
export class SharedModule { }
