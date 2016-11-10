import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnknownClientComponent } from './unknown-client.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [UnknownClientComponent],
  exports: [UnknownClientComponent],
})
export class UnknownClientModule { }
