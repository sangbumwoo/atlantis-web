import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { KakaoComponent } from './kakao.component';

const routes: Routes = [
  { 
    path: 'kakao',
    component:MainLayoutComponent,
    children: [
      { path: '', component:KakaoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KakaoRoutingModule { }
