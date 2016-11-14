import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
// import { ConfigModule } from '../config/config.module';

@NgModule({
  imports: [
    CommonModule,
    // ConfigModule,
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MenuModule { }
