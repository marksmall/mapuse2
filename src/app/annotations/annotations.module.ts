import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnotationsComponent } from './annotations.component';
import { PolygonService } from './polygon/polygon.service';
import { DrawLineService } from './draw-line/draw-line.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AnnotationsComponent],
  providers: [PolygonService, DrawLineService],
})
export class AnnotationsModule { }
