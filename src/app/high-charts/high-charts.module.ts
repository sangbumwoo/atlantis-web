import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighChartsRoutingModule } from './high-charts-rouging.module'
import { LineChartComponent } from './line-chart/line-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { HighChartsComponent } from './high-charts/high-charts.component';

@NgModule({
  declarations: [LineChartComponent, RadarChartComponent, HighChartsComponent],
  imports: [
    CommonModule,
    HighChartsRoutingModule
  ]
})
export class HighChartsModule { }
