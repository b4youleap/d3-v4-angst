import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartComponent } from './barchart/barchart.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BarchartComponent,
    MapComponent
  ],
  declarations: [BarchartComponent, MapComponent]
})
export class SharedModule { }
