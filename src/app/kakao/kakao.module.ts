import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KakaoRoutingModule } from './kakao-routing.module'
import { KakaoComponent } from './kakao.component';


@NgModule({
  imports: [
    CommonModule,
    KakaoRoutingModule
  ],
  declarations: [KakaoComponent]
})
export class KakaoModule { }
