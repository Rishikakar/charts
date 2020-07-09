import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';


const routes: Routes = [{ path: "line",
component: LineChartComponent
},
{
path: "bar",
component: BarChartComponent
},
{
path: "doughnut",
component: DoughnutChartComponent
},
{
path: "bubble",
component: BubbleChartComponent
},
{
path: "pie",
component: PieChartComponent
},
{
path: "radar",
component: RadarChartComponent
},
{
path: "scatter",
component: ScatterChartComponent
},
{
path: "polar",
component: PolarAreaChartComponent
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
