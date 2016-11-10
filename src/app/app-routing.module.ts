import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { UnknownClientComponent } from './unknown-client/unknown-client.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: UnknownClientComponent },
    ]),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
  ],
})
export class AppRoutingModule {}
