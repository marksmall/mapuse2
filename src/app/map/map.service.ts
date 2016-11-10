import { Injectable } from '@angular/core';

import * as proj4 from 'proj4';

import { Map, proj, View, control, layer, source, Attribution, Extent } from 'openlayers';

import { MapConfig, Layer } from '../config/map';
import { ConfigService } from '../config/config.service';

proj4.defs('EPSG:27700', '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717' +
                         ' +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,' +
                         '-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs');
proj.setProj4(proj4);

@Injectable()
export class MapService {

  constructor(private configService: ConfigService) {
    // TODO
  }

  public createMap(name: string, collectionId: string): Map {
    let config: MapConfig;
    // FIXME: Hard-coded collection id, need to pass it in somehow.
    this.configService.getMapConfig(collectionId).subscribe(collection => {
      config = collection;
    });
    console.log('CONFIG: ', config);

    let extent: Extent = [0, 0, 700000, 1300000];
    let projection = proj.get(config.crs.code);
    proj.addProjection(projection);

    // Convert layer config to an array of OpenLayers Layer objects.
    let layers = this.getLayers(config.layers, projection);

    // FIXME: config.center is just an array e.g. [33600, 67500] (easting/northing)
    //        we need a better way to set the center point of the map.
    // console.log('Centre Point: ', proj.transform([55.945589, -3.182186], 'EPSG:3857', projection));
    // console.log('Centre Point: ', proj.transform([55.945589, -3.182186], 'EPSG:4326', projection));
    // center: proj.fromLonLat([55.945589, -3.182186], 'EPSG:27700'),

    // Create map.
    let map = new Map({
      controls: control.defaults().extend([
        new control.ZoomSlider(),
        new control.ScaleLine(),
        new control.Attribution(),
      ]),
      layers: layers,
      target: name,
      view: new View({
        projection: projection,
        center: config.center, // FIXME: See above.
        extent: extent,
        zoom: 6, // FIXME: Hard-coded, not good.
      }),
    });

    return map;
  }

  /**
   * Construct a list of layers from the map config.
   */
  private getLayers(layerConfig: Layer[], projection: proj.Projection): any[] {
    let layers: layer.Tile[] = [];

    for (let layerConf of layerConfig) {
      let attributions = '';
      for (let attribution of layerConf.attributions) {
        attributions += attribution;
      }

      layers.push(new layer.Tile({
        source: new source.TileWMS({
          url: layerConf.url,
          attributions: [
            new Attribution({html: attributions}),
          ],
          projection: projection,
          params: {
            'LAYERS': layerConf.sublayers,
            'FORMAT': layerConf.format,
          },
        }),
        opacity: layerConf.opacity,
      }));
    }

    return layers;
  }

}
