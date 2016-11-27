import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { AnnotationsModule } from '../annotations/annotations.module';
import { OverviewMapModule } from '../overview-map/overview-map.module';

import { MenuComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    AnnotationsModule,
    OverviewMapModule,
    DragulaModule,
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule { }
