import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FlexLayoutModule
  ],
  exports: [
    MainLayoutComponent,
    FooterOnlyLayoutComponent
  ],
  declarations: [
    MainLayoutComponent,
    FooterOnlyLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarRightComponent,
    SidebarLeftComponent
  ]
})
export class LayoutModule { }
