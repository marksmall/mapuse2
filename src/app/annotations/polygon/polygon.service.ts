import { Injectable } from '@angular/core';

import {
  Map, layer, source, interaction } from 'openlayers';

import { MapService } from '../../map/map.service';

@Injectable()
export class PolygonService {

  private map: Map;
  private interact: interaction.Draw;

  constructor(private mapService: MapService) { }

  handle(name: string) {
    const polygonSource = new source.Vector({wrapX: false});

    const vector = new layer.Vector({
      source: polygonSource,
    });

    // Add layer to map (get from MapService).
    this.map = this.mapService.getMap('mainmap');
    this.map.addLayer(vector);
    console.log('Main Map: ', this.map);

    this.interact = new interaction.Draw({
      source: polygonSource,
      type: 'Circle',
      geometryFunction: interaction.Draw.createRegularPolygon(4),
    });
    this.map.addInteraction(this.interact);
  }

}
