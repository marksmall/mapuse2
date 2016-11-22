import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

import { Map, layer, source, interaction } from 'openlayers';

import { MapService } from '../../map/map.service';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss'],
})
export class PolygonComponent implements OnInit {

  isActive: boolean = false;
  private map: Map;
  private interact: interaction.Draw;

  constructor(private el: ElementRef,
              private renderer: Renderer,
              private mapService: MapService) { }

  toggle() {
    this.isActive = !this.isActive;
    let button = this.el.nativeElement.querySelector('button');
    this.renderer.setElementClass(button, 'active', this.isActive);

    if (this.isActive) {
      // FIXME: Disable all other controls.
      const polygonSource = new source.Vector({wrapX: false});

      const vector = new layer.Vector({
        source: polygonSource,
      });

      this.map = this.mapService.getMap('mainmap');
      // FIXME: Get annotations layer from map.
      this.map.addLayer(vector);

      this.interact = new interaction.Draw({
        source: polygonSource,
        type: 'Circle',
        geometryFunction: interaction.Draw.createRegularPolygon(4),
      });
      this.map.addInteraction(this.interact);
    } else {
      this.map.removeInteraction(this.interact);
    }
  }

  ngOnInit() {
  }

}
