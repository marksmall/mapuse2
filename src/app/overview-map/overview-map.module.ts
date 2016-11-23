import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewMapComponent } from './overview-map.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [OverviewMapComponent],
  exports: [OverviewMapComponent],
})
export class OverviewMapModule { }
