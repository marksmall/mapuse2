import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapModule } from '../map/map.module';

import { OsComponent } from './os.component';
import { OsRoutingModule } from './os.routing';

@NgModule({
  imports: [
    CommonModule,
    MapModule,
    OsRoutingModule,
  ],
  declarations: [OsComponent],
})
export class OsModule { }
