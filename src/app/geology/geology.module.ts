import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapModule } from '../map/map.module';

import { GeologyComponent } from './geology.component';
import { GeologyRoutingModule } from './geology.routing';

@NgModule({
  imports: [
    CommonModule,
    MapModule,
    GeologyRoutingModule,
  ],
  declarations: [GeologyComponent],
})
export class GeologyModule { }
