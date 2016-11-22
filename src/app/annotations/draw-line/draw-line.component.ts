import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

import { Map, layer, source, interaction, style } from 'openlayers';

import { MapService } from '../../map/map.service';

@Component({
  selector: 'app-draw-line',
  templateUrl: './draw-line.component.html',
  styleUrls: ['./draw-line.component.scss'],
})
export class DrawLineComponent implements OnInit {

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
      const drawLineSource = new source.Vector({wrapX: false});

      let drawLineStyle = new style.Style({
        stroke: new style.Stroke({
          color: '#fff',
          width: 2,
        }),
      });

      const vector = new layer.Vector({
        source: drawLineSource,
        style: drawLineStyle,
      });

      this.map = this.mapService.getMap('mainmap');
      // FIXME: Get annotations layer from map.
      this.map.addLayer(vector);

      this.interact = new interaction.Draw({
        source: drawLineSource,
        type: 'LineString',
      });
      this.map.addInteraction(this.interact);
    } else {
      this.map.removeInteraction(this.interact);
    }
  }

  ngOnInit() {
  }

}
