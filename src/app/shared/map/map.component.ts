import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

import { states_json } from './map.states';
import { quakes_json } from './map.quakes';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit, OnChanges {
  @ViewChild('map') private mapContainer: ElementRef;
  @Input() private mapdata: Array<any>;
  private margin: any = { top: 20, bottom: 20, left: 20, right: 20};
  private map: any;
  private width: number;
  private height: number;
  /* private albersProjection: any;
  private geoPath: any;
  private barTooltip: any;
  private tip: any; */

  constructor() { }

  ngOnInit() {
    /* var barTooltip = d3.select("#d3Container").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("width", 600);

    var albersProjection = d3.geoAlbersUsa()
        .scale( 1000 )
        .translate( [this.width/2,this.height/2] );

    // d3.v3 call was d3.geo.path()
    var geoPath = d3.geoPath()
        .projection( albersProjection );
*/
    this.createMap();
    if (this.mapdata) {
      this.updateMap();
    }
  }

  ngOnChanges() {
    /* if (this.map) {
      this.updateMap();
    } */
  }

  createMap() {
    let element = this.mapContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    // this.map.centered;

    var albersProjection = d3.geoAlbersUsa()
        .scale( 1000 )
        .translate( [this.width/2,this.height/2] );

    // d3.v3 call was d3.geo.path()
    var geoPath = d3.geoPath()
        .projection( albersProjection );

    let svg = d3.select(element).append("svg")
        .attr("width", element.offsetWidth)
        .attr("height", element.offsetHeight);

    this.map = svg.append("g");

    this.map.selectAll( "path" )
        .data( states_json.features )
        .enter()
        .append( "path" )
        .attr( "fill", "#1c5785" )
        .attr( "class", "state" )
        .attr( "d", geoPath );

  }

  updateMap() {
    let element = this.mapContainer.nativeElement;
    var barTooltip = d3.select(element).append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("width", 600);

    let update = this.map.selectAll("path")
      .data(quakes_json.features);

    update.exit().remove();

    update
      .enter()
      .append("path")
      .attr("d", d3.geoPath)
      .on("mouseover", function(d) {
        this.barTooltip.transition()
        .duration(500)
        .style("opacity", 1);
      this.tip = "<strong>" + d.properties.type + ": " + d.properties.title + "</strong>";

      this.barTooltip.html(this.tip)
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY) + "px");
      })
      .on("mouseout", function(d) {
        this.barTooltip.transition()
        .duration(500)
        .style("opacity", 0);
      }) 
  }

}
