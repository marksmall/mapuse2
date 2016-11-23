import { Component, AfterViewChecked, AfterViewInit } from '@angular/core';

import { Map, layer, source, control } from 'openlayers';

import { MapService } from '../map/map.service';

@Component({
  selector: 'app-overview-map',
  templateUrl: './overview-map.component.html',
  styleUrls: ['./overview-map.component.scss']
})
// export class OverviewMapComponent implements AfterViewInit {
export class OverviewMapComponent implements AfterViewChecked {

  private map: Map;

  constructor(private mapService: MapService) { }

  // ngAfterViewInit() {
  ngAfterViewChecked() {
    this.map = this.mapService.getMap('mainmap');
    // console.log('Overview Map: ', this.map);
    if (this.map) {
      let controlExists = false;
      this.map.getControls().forEach((ctrl: control.Control) => {
        if (ctrl instanceof control.OverviewMap) {
          controlExists = true;
        }
      });

      if (!controlExists) {
        let overviewMapControl = new control.OverviewMap({
          // see in overviewmap-custom.html to see the custom CSS used
          // className: 'ol-overviewmap ol-custom-overviewmap',
          layers: [
            new layer.Tile({
              source: new source.OSM({
                'url': 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
              }),
            }),
          ],
          collapseLabel: '\u00BB',
          label: '\u00AB',
          collapsed: false,
        });

        console.log('Map is no longer null: ', this.map);
        this.map.addControl(overviewMapControl);
      }
    }
  }

}
