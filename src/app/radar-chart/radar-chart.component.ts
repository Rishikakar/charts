import { Component } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})

export class RadarChartComponent {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Punctuality', 'Communication', 'Problem Solving',
  'Team Player', 'Coding', 'Technical Knowledge'];

  public radarChartData: ChartDataSets[] = [
    { data: [8, 4, 7, 4.5, 2.5, 4.4], label: ' Skill Analysis' }
  ];
  public radarChartType: ChartType = 'radar';

}