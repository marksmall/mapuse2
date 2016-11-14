import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { SimpleNotificationsModule } from 'angular2-notifications';

import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { UnknownClientModule } from './unknown-client/unknown-client.module';
import { MapModule } from './map/map.module';
import { OsModule } from './os/os.module';
import { GeologyModule } from './geology/geology.module';
import { SearchModule } from './search/search.module';

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
    UnknownClientModule,
    MapModule,
    OsModule,
    GeologyModule,
    SearchModule,
    // SimpleNotificationsModule,
  ],
  providers: [ConfigService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
