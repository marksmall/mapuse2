import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnotationsComponent } from './annotations.component';
import { DrawLineComponent } from './draw-line/draw-line.component';
import { DrawLineService } from './draw-line/draw-line.service';
import { PolygonComponent } from './polygon/polygon.component';
import { PolygonService } from './polygon/polygon.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AnnotationsComponent, DrawLineComponent, PolygonComponent],
  providers: [DrawLineService, PolygonService],
  exports: [DrawLineComponent, PolygonComponent],
})
export class AnnotationsModule { }
