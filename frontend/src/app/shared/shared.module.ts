import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [MaterialModule],
  exports: [MaterialModule],
  providers: [],
})
export class SharedModule { }
