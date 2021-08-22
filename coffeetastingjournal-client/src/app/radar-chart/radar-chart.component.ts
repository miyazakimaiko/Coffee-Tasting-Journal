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
    'Acidic',
    'Floral',
    'Berryfruit',
    'Citrusfruit',
    'Stonefruit',
    'Chocolate',
    'Caramel',
    'Bitter',
    'Smoky',
    'Savory',
    'Spicy',
    'Body',
    'Linger',
    'Clean'
  ];

  radarChartData: ChartDataSets[] = [
    {data: [], label: 'Palates'}
  ];

  radarChartType: ChartType = 'radar';

  radarChartOptions: RadialChartOptions = {
    scale: {
      ticks: {
          beginAtZero: true,
          min: 0,
          max: 10,
          //stepSize: 10
      }
    }
  };

  constructor() {}

  ngOnInit() {
    for(const t in this.coffee.taste) {
      this.radarChartData[0].data?.push(this.coffee.taste[t])
    }
  }
}