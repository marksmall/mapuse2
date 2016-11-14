import { Component, OnInit, Input } from '@angular/core';

import { ConfigService } from '../config/config.service';
import { Tool } from '../config/map';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  tools: Tool[];

  @Input() collection: string;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getMapConfig(this.collection).subscribe(tools => {
      const config = tools;
      this.tools = config.tools;
    });
    console.log('TOOLS: ', this.tools);

  }

}
