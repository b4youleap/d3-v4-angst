import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Import base extensions
import './rxjs-extensions';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BarchartComponent } from './shared/barchart/barchart.component';
import { routing, appRoutingProviders } from './app.routes';
import { MapComponent } from './shared/map/map.component';

// Import Services
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarchartComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    DataService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
