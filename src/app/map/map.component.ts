import { Component, AfterViewInit, AfterContentInit, OnInit, Input } from '@angular/core';

import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
// export class MapComponent implements OnInit {
// export class MapComponent implements AfterContentInit {
export class MapComponent implements AfterViewInit {

  @Input() mapname: string;
  @Input() collection: string;

  constructor(private mapService: MapService) {
    console.log('Creating Map Component');
  }

  // ngAfterContentInit() {
  ngAfterViewInit() {
  // ngOnInit() {
    // Map needs to be created after the view has been initialized or the template
    // will not be properly defined i.e. map name will not have been set.
    this.mapService.createMap(this.mapname, this.collection);
  }
}
