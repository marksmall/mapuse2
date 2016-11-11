import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators,
  // FormBuilder, FormGroup, FormControl, FormControlName, Validators,
} from '@angular/forms';

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

  constructor(private fb: FormBuilder, private searchService: SearchService) { }

  search() {
    this.searchService.search(this.term).subscribe(
      (result: SearchResult[]) => { this.searchResults = result; },
      (err: any) => {
        // Display no result message.
      },
    );
  }

  /**
   * Returns true if the form is in a state where submission of the data
   * is possible, i.e. the form is valid and there has been changes.
   */
  canSubmit(): boolean {
    return this.searchForm.valid;
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      'searchTerm': ['', [Validators.required, Validators.maxLength(64)]],
    });
  }

}
