import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnotationsModule } from '../annotations/annotations.module';

import { MenuComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    AnnotationsModule,
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MenuModule { }
