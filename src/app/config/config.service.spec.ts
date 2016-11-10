/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { MapConfig } from './map';

describe('Service: Config', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigService],
    });
  });

  it('should return OS Collection config', inject([ConfigService], (service: ConfigService) => {
    const collection = 'os';
    expect(service).toBeTruthy();

    // Get Observable of OS MapConfig.
    const config = service.getMapConfig(collection);
    expect(config).toBeDefined();

    // Subscribe and verify config is for OS Collection.
    config.subscribe((coll: MapConfig) => {
      expect(coll.id).toEqual(collection);
    });
  }));
});
