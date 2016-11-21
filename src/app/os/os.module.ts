import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapModule } from '../map/map.module';
import { SearchModule } from '../search/search.module';
import { MenuModule } from '../menu/menu.module';

import { OsComponent } from './os.component';
import { OsRoutingModule } from './os.routing';

@NgModule({
  imports: [
    CommonModule,
    MapModule,
    OsRoutingModule,
    SearchModule,
    MenuModule,
  ],
  declarations: [OsComponent],
})
export class OsModule { }
