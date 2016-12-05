import { Component, OnInit } from '@angular/core';

import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {

  private files: Array<File>;

  constructor(private fileUploadService: FileUploadService) { }

  upload() {
    console.log('Upload File');
    this.fileUploadService.uploadFiles(this.files);
  }

  fileChange(event: any) {
    console.log('File Changed');
    this.files = <Array<File>> event.target.files;
  }

  ngOnInit() {
  }

}
