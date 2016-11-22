/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DrawLineService } from './draw-line.service';

describe('Service: DrawLine', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawLineService],
    });
  });

  it('should ...', inject([DrawLineService], (service: DrawLineService) => {
    expect(service).toBeTruthy();
  }));
});
