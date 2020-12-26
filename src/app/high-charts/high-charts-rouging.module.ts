import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {HighChartsComponent} from './high-charts/high-charts.component';

const routes: Routes = [
  {
    path: 'high-charts',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HighChartsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighChartsRoutingModule { }
