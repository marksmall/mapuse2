import { Component, OnInit, Input } from '@angular/core';

import { ConfigService } from '../config/config.service';
import { PolygonService } from '../annotations/polygon/polygon.service';
import { DrawLineService } from '../annotations/draw-line/draw-line.service';
import { Tool } from '../config/map';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  private services: any[];
  tools: Tool[];
  @Input() collection: string;

  constructor(private configService: ConfigService,
              private polygonService: PolygonService,
              private drawLineService: DrawLineService) { }

  handle(tool: string) {
    // Get the applicable service.
    let service = this.services.find(item => item.name === tool).service;
    // Execute method.
    service.handle(tool);
  }

  ngOnInit() {
    this.services = [{
      name: 'polygon',
      service: this.polygonService,
    }, {
      name: 'draw-line',
      service: this.drawLineService,
    }];

    this.configService.getMapConfig(this.collection).subscribe(tools => {
      const config = tools;
      this.tools = config.tools;
    });
    console.log('TOOLS: ', this.tools);
  }

}
