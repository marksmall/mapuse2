import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadService } from './file-upload.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [FileUploadComponent],
  providers: [FileUploadService],
  exports: [FileUploadComponent],
})
export class FileUploadModule { }
