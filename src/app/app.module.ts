import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RegistrationModule } from './registration/registration.module';
import { LayoutModule } from './layout/layout.module';
import { UsersModule } from './users/users.module';
import { AccountSettingsModule } from './account-settings/account-settings.module';
import { KakaoModule } from './kakao/kakao.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    LoginModule,
    DashboardModule,
    RegistrationModule,
    UsersModule,
    AccountSettingsModule,
    KakaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
