import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapModule } from '../map/map.module';
import { SearchModule } from '../search/search.module';

import { GeologyComponent } from './geology.component';
import { GeologyRoutingModule } from './geology.routing';

@NgModule({
  imports: [
    CommonModule,
    MapModule,
    GeologyRoutingModule,
    SearchModule,
  ],
  declarations: [GeologyComponent],
})
export class GeologyModule { }
