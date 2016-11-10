import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MapConfig } from './map';
import { MAP_CONFIG } from './map.config';

@Injectable()
export class ConfigService {

  constructor() { }

  getMapConfig(collection: string): Observable<MapConfig> {
    return Observable.of(MAP_CONFIG.find(c => c.id === collection));
  }

}
