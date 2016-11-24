import { Component, OnInit, AfterViewChecked, ElementRef } from '@angular/core';

import { Map, layer, source, control } from 'openlayers';

import { MapService } from '../map/map.service';

@Component({
  selector: 'app-overview-map',
  templateUrl: './overview-map.component.html',
  styleUrls: ['./overview-map.component.scss'],
})
// export class OverviewMapComponent implements AfterViewInit {
export class OverviewMapComponent implements OnInit, AfterViewChecked {

  private map: Map;
  private overviewMapControl: control.OverviewMap;

  constructor(private mapService: MapService, private el: ElementRef) { }

  ngOnInit() {
    // let overviewMap = this.el.nativeElement;
    let overviewMap = this.el.nativeElement.querySelector('div');
    // let overviewMap = this.el.nativeElement.querySelector('app-overview-map');
    console.log('Overview Map: ', overviewMap);
    this.overviewMapControl = new control.OverviewMap({
      target: overviewMap,
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
  }

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
        // let overviewMap = this.el.nativeElement;
        // let overviewMapControl = new control.OverviewMap({
        //   target: overviewMap,
        //   // see in overviewmap-custom.html to see the custom CSS used
        //   // className: 'ol-overviewmap ol-custom-overviewmap',
        //   layers: [
        //     new layer.Tile({
        //       source: new source.OSM({
        //         'url': 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
        //       }),
        //     }),
        //   ],
        //   collapseLabel: '\u00BB',
        //   label: '\u00AB',
        //   collapsed: false,
        // });

        console.log('Map is no longer null: ', this.map);
        this.map.addControl(this.overviewMapControl);
      }
    }
  }

}
