import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geology',
  templateUrl: './geology.component.html',
  styleUrls: ['./geology.component.scss']
})
export class GeologyComponent implements OnInit {

  active = '';

  constructor() { }

  toggleMenu() {
    this.active = this.active === 'active' ? '' : 'active';
  }

  ngOnInit() {
  }

}
