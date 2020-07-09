import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.scss']
})
export class PolarAreaChartComponent implements OnInit {
  // PolarArea
  public polarAreaChartLabels: Label[] = ['Live', 'mobile', 'radio', 'tv', 'internet'];
  public polarAreaChartData: SingleDataSet = [350, 200, 250, 50, 90];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}