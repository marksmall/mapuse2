import { Injectable } from '@angular/core';

@Injectable()
export class DrawLineService {

  constructor() { }

  handle(name: string) {
    console.log('DrawLineService');
  }

}
