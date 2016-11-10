import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { MapModule } from './map/map.module';
import { OsModule } from './os/os.module';
import { GeologyModule } from './geology/geology.module';

import { ConfigService } from './config/config.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    MapModule,
    OsModule,
    GeologyModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule { }
