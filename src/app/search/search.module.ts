import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SearchComponent } from './search.component';
import { SearchService } from './search.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [SearchComponent],
  providers: [SearchService],
  exports: [SearchComponent],
})
export class SearchModule { }
