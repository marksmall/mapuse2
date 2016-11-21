import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.scss'],
})
export class OsComponent implements OnInit {

  active = '';

  constructor() { }

  toggleMenu() {
    this.active = this.active === 'active' ? '' : 'active';
  }

  ngOnInit() {

  }

}
