import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchModule } from '../search/search.module';

import { MapComponent } from './map.component';
import { MapService } from './map.service';

@NgModule({
  imports: [
    CommonModule,
    SearchModule,
  ],
  declarations: [MapComponent],
  providers: [MapService],
  exports: [MapComponent],
})
export class MapModule { }
