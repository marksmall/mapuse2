import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapModule } from '../map/map.module';
import { SearchModule } from '../search/search.module';

import { OsComponent } from './os.component';
import { OsRoutingModule } from './os.routing';

@NgModule({
  imports: [
    CommonModule,
    MapModule,
    OsRoutingModule,
    SearchModule,
  ],
  declarations: [OsComponent],
})
export class OsModule { }
