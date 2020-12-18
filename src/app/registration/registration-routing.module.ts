import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {FooterOnlyLayoutComponent} from '../layout/footer-only-layout/footer-only-layout.component';
import {MainLayoutComponent} from '../layout/main-layout/main-layout.component';
import {RegistrationComponent} from './registration.component';

const routes: Routes = [
  {
    path: 'registration',
    component: MainLayoutComponent,
    children: [
      { path: '', component: RegistrationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
