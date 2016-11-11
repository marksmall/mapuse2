import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SearchResult } from './search-result';

const API = {
  search: 'api/search',
};

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  search(term: string): Observable<SearchResult[]> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('term', term);
    console.log(`Search Term: ${term}`);

    return this.http.get(API.search, { search: params }).map((res: Response) => {
      let searchResults = res.json();

      return searchResults;
    });
  }

}
