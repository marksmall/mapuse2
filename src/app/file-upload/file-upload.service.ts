import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { UploadData } from './file-upload';

@Injectable()
export class FileUploadService {

  private API = 'api/upload';

  constructor(private http: Http) { }

  getData(): Observable<UploadData> {
    return this.http.get(this.API)
                    .catch((err: Response) => Observable.throw(err.json()))
                    .map((res: Response) => res.json());
  }

  uploadFiles(files: Array<File>): Observable<boolean> {
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json')
    return this.http.put(this.API,
                         files)
                         //  JSON.stringify(notUserDto),
                         //  { headers: headers })
                    .catch((err: Response) => Observable.throw(err.json()))
                    .map((res: Response) => true);
  }

}
