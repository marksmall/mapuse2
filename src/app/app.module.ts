import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { SimpleNotificationsModule } from 'angular2-notifications';

import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { UnknownClientModule } from './unknown-client/unknown-client.module';
import { OsModule } from './os/os.module';
import { GeologyModule } from './geology/geology.module';
import { MenuModule } from './menu/menu.module';

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
    OsModule,
    GeologyModule,
    MenuModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule { }
