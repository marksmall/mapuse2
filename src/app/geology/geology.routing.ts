import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { GeologyComponent }    from './geology.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'geology',  component: GeologyComponent },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class GeologyRoutingModule { }
