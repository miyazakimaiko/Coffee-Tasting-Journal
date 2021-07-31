import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts'

@Component({
  selector: 'radar-chart',
  templateUrl: 'radar-chart.component.html'
})
export class RadarChartComponent implements OnInit {
  @Input() coffee: any;

  radarChartLabels: Label[] = [
    'Sweet',
    'Acidic',
    'Floral',
    'Spicy',
    'Salty',
    'Berryfruit',
    'Citrusfruit',
    'Stonefruit',
    'Chocolate',
    'Caramel',
    'Smoky',
    'Bitter',
    'Savory',
    'Body',
    'Clean',
    'Linger'
  ];

  radarChartData: ChartDataSets[] = [
    {data: [], label: 'Palates'}
  ];

  radarChartType: ChartType = 'radar';

  constructor() {}

  ngOnInit() {
    this.radarChartData[0].data?.push(this.coffee.sweet)
    this.radarChartData[0].data?.push(this.coffee.acidic)
    this.radarChartData[0].data?.push(this.coffee.floral)
    this.radarChartData[0].data?.push(this.coffee.spicy)
    this.radarChartData[0].data?.push(this.coffee.salty)
    this.radarChartData[0].data?.push(this.coffee.berryfriut)
    this.radarChartData[0].data?.push(this.coffee.citrusfruit)
    this.radarChartData[0].data?.push(this.coffee.stonefruit)
    this.radarChartData[0].data?.push(this.coffee.chocolate)
    this.radarChartData[0].data?.push(this.coffee.caramel)
    this.radarChartData[0].data?.push(this.coffee.smoky)
    this.radarChartData[0].data?.push(this.coffee.bitter)
    this.radarChartData[0].data?.push(this.coffee.savory)
    this.radarChartData[0].data?.push(this.coffee.body)
    this.radarChartData[0].data?.push(this.coffee.clean)
    this.radarChartData[0].data?.push(this.coffee.linger)
  }
}