import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { OsComponent }    from './os.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'os',  component: OsComponent },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class OsRoutingModule { }
