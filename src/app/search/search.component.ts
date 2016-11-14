import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators,
  // FormBuilder, FormGroup, FormControl, FormControlName, Validators,
} from '@angular/forms';

import { MapService } from '../map/map.service';
import { NotificationsService } from 'angular2-notifications';
import { SearchService } from './search.service';
import { SearchResult } from './search-result';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  term: string;
  searchResults: SearchResult[];
  searchForm: FormGroup;
  errorMessage: string; // If an error has occured, the message from the server

  constructor(private fb: FormBuilder,
              private searchService: SearchService,
              private mapService: MapService,
              private notificationsService: NotificationsService) { }

  search() {
    this.searchService.search(this.term).subscribe(
      (result: SearchResult[]) => {
        this.searchResults = result;
        console.log('Search Results: ', this.searchResults);

        if (this.searchResults.length === 0) {
          console.log(`No results for search term: ${this.term}`);
          // Display no result message.
          this.notificationsService.alert('No match for Term', this.term);
        }
      },
      (err: any) => {
        const error = JSON.parse(err._body)[0];
        console.log('Error response from server: ', error);
        // Display error message.
        this.notificationsService.error('Internal Error', error.message);
      },
    );
  }

  selectResult(result: SearchResult) {
    console.log('Search Result: ', result);
    this.mapService.setCenter(result.point, result.zoomLevel);
  }

  /**
   * Returns true if the form is in a state where submission of the data
   * is possible, i.e. the form is valid and there has been changes.
   */
  canSubmit(): boolean {
    return this.searchForm.valid;
  }

  ngOnInit() {
    this.searchResults = [];
    this.searchForm = this.fb.group({
      'searchTerm': ['', [Validators.required, Validators.maxLength(64)]],
    });
  }

}
