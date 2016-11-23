import { Injectable, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import * as proj4 from 'proj4';

// import * as $ from 'jquery';
// import * as jquery from 'jquery';
// import $ from 'jquery';
import 'jquery';

import {
  Map as OlMap, proj, View, control, layer, source, Attribution, Extent,
  coordinate, Coordinate, Feature, geom, style, Overlay } from 'openlayers';

import { MapConfig, Layer } from '../config/map';
import { ConfigService } from '../config/config.service';
// import { NotificationsService } from '../notifications/notifications.service';

// import { Map as OlMap } from 'openlayers';

proj4.defs('EPSG:27700', '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717' +
                         ' +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,' +
                         '-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs');
proj.setProj4(proj4);

@Injectable()
export class MapService implements OnInit {

  private maps: Map<string, OlMap>;

  constructor(private configService: ConfigService) {
              // private notificationsService: NotificationsService) {
    // TODO
    this.maps = new Map();
  }

  createMap(name: string, collectionId: string): OlMap {
    let config: MapConfig;
    this.configService.getMapConfig(collectionId).subscribe(collection => {
      config = collection;
    });
    // console.log('CONFIG: ', config);

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
    let map = new OlMap({
      controls: control.defaults().extend([
        new control.ZoomSlider(),
        new control.ScaleLine(),
        new control.Attribution(),
        new control.MousePosition({
          coordinateFormat: coordinate.createStringXY(4),
          projection: 'EPSG:27700',
        }),
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

    this.maps.set(name, map);

    return map;
    // return Observable.of(map);
  }

  setCenter(point: Coordinate, zoomLevel: number) {
    // point = [33600, 67500];
    console.log('Centre on: ', point);
    let position = proj.transform(point, 'EPSG:27700', 'EPSG:27700');
    // let position = proj.transform(point, 'EPSG:4326', 'EPSG:3857');

    let map = this.maps.get('mainmap');

    map.getView().setCenter(position);
    map.getView().setZoom(zoomLevel);
    this.addMarker(position);
  }

  getMap(name: string): OlMap {
    return this.maps.get(name);
  }

  addMarker(position: Coordinate) {
    let iconFeature = new Feature({
      geometry: new geom.Point(position),
      name: 'Null Island',
      population: 4000,
      rainfall: 500,
    });

    let iconStyle = new style.Style({
      image: new style.Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        scale: 0.25,
        src: 'assets/marker.png',
      })),
    });

    iconFeature.setStyle(iconStyle);

    let vectorSource = new source.Vector({
      features: [iconFeature],
    });

    let vectorLayer = new layer.Vector({
      source: vectorSource,
    });
    let map = this.maps.get('mainmap');
    map.addLayer(vectorLayer);

    // FIXME: Must be a better way to get the element.
    let element = document.getElementById('mainmap-popup');
    console.log('Popover Element: ', element);
    let popup = new Overlay({
      element: element,
      // positioning: 'bottom-center',
      // stopEvent: false,
    });
    map.addOverlay(popup);

    // display popup on click
    map.on('click', function(evt) {
      let feature = map.forEachFeatureAtPixel(evt.pixel,
        function(feat) {
          return feat;
        });

      if (feature) {
        // let coordinates = feature.getGeometry().getCoordinates();
        // console.log('COORDS: ', coordinates);
        popup.setPosition(position);

        const hdms = coordinate.toStringHDMS(proj.transform(position, 'EPSG:27700', 'EPSG:4326'));

        /* tslint:disable-next-line */
        const content = `<strong>${feature.get('name')}</strong><hr/>Population: ${feature.get('population')}<br/>Rainfall: ${feature.get('rainfall')}<br/>Coordinates (BNG): ${position}<br/>Coordinates (HDMS): ${hdms}`;
        (<any>$(element)).popover({
          'placement': 'top',
          'html': true,
          'content': content,
        });
        (<any>$(element)).popover('show');
      } else {
        (<any>$(element)).popover('destroy');
      }
    });

    // change mouse cursor when over marker
    map.on('pointermove', function(e) {
      if (e.dragging) {
        (<any>$(element)).popover('destroy');
        return;
      }
      // let pixel = map.getEventPixel(e.originalEvent);
      // let hit = map.hasFeatureAtPixel(pixel);
      // console.log(`Hovering: ${hit}`);
      // map.getTarget().css('cursor', hit ? 'pointer' : '');
      // map.getTarget().style.cursor = hit ? 'pointer' : '';
      // map.getTarget().style.cursor = 'pointer';
    });
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

  ngOnInit() {
    // this.maps = new Map();
  }

}
