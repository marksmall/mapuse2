import { Injectable } from '@angular/core';

// import proj4 = require('proj4')
import * as proj4 from 'proj4';

// import  { Proj, defs } from 'proj4'
import { Map, proj, View, control, layer, source, Attribution, Extent } from 'openlayers';
// import { Map, tilegrid, proj, View, control, layer, source, Attribution, Extent } from 'openlayers';

// import { MAP_CONFIG } from './map.config';
// import { Layer } from './map';

proj4.defs('EPSG:27700', '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717' +
                         ' +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,' +
                         '-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs');
proj.setProj4(proj4);

@Injectable()
export class MapService {

  constructor() {
    // TODO
  }

  public createMap(name: string): Map {
    console.log(`Map Div: ${name}`);

    let extent: Extent = [0, 0, 700000, 1300000];

    let projection = proj.get('EPSG:27700');
    console.log('27700 PROJECTION: ', projection);
    proj.addProjection(projection);

    let html = '©  <a href="http://bgs.ac.uk/data/services/soilwms.html">Contains British Geological Survey materials © NERC 2016</a>';
    let layers = [
      new layer.Tile({
        extent: extent,
        source: new source.TileWMS({
          url: 'https://map.bgs.ac.uk/arcgis/services/UKSO/UKSO_BGS/MapServer/WMSServer',
          attributions: [
            new Attribution({html: html}),
          ],
          projection: projection,
          params: {
            'LAYERS': 'Parent.Material.European.Soil.Bureau.Description.1km',
            'FORMAT': 'image/png',
          },
        }),
      }),
    ];

    // console.log('Centre Point: ', proj.transform([55.945589, -3.182186], 'EPSG:3857', projection));
    // console.log('Centre Point: ', proj.transform([55.945589, -3.182186], 'EPSG:4326', projection));
    // center: proj.fromLonLat([55.945589, -3.182186], 'EPSG:27700'),

    let map = new Map({
      controls: control.defaults().extend([
        new control.ZoomSlider(),
        new control.ScaleLine(),
      ]),
      layers: layers,
      target: name,
      view: new View({
        projection: projection,
        center: [33600, 67500],
        extent: extent,
        zoom: 6,
      }),
    });

    return map;
  }

  /**
   * Construct a list of layers from the map config.
   */
  // private getLayers(tileGrid: tilegrid.TileGrid): any[] {
  //   let layers: any = [];

  //   MAP_CONFIG.layers.forEach((layer: Layer) => {
  //     let attributions = '<p>';
  //     console.log(`Layer Attribution: ${JSON.stringify(layer)}`);
  //     layer.attributions.forEach((attribution: string) => {
  //       attributions += attribution + '<br/>';
  //     });
  //     attributions += '</p>';

  //     layers.push(new ol.layer.Tile({
  //       source: this.getSource(layer, attributions, tileGrid),
  //       opacity: layer.opacity,
  //     }));
  //   });

  //   return layers;
  // }

  /**
   *
   *
   * @private
   * @param {*} element
   * @param {string} attributions
   * @param {ol.tilegrid.TileGrid} tileGrid
   *
   * @returns {ol.source.TileWMS}
   */
  // private getSource(element: any, attributions: string, tileGrid: tilegrid.TileGrid): ol.source.TileWMS {
  //   if (element.type.toUpperCase() === 'WMS') {
  //     return this.getWmsSource(element, attributions, tileGrid);
  //   } else {
  //     throw new TypeError(`Unknown Source Type: ${element.type.toUpperCase()}`);
  //   }
  // }

  /**
   *
   *
   * @private
   * @param {*} element
   * @param {string} attributions
   * @param {ol.tilegrid.TileGrid} tileGrid
   *
   * @returns {ol.source.TileWMS}
   */
  // private getWmsSource(element: any, attributions: string, tileGrid: tilegrid.TileGrid): ol.source.TileWMS {
  //   let source = new ol.source.TileWMS({
  //     url: element.url,
  //     attributions: [
  //       new ol.Attribution({html: attributions}),
  //     ],
  //     projection: null,
  //     params: {
  //       'LAYERS': element.sublayers,
  //       'FORMAT': element.format,
  //       'TILED': true,
  //     },
  //     tileGrid: tileGrid,
  //   });

  //   return source;
  // }

}
