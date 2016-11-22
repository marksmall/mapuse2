import { NgModule } from '@angular/core';
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
})
export class MenuModule { }
