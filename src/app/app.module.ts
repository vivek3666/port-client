import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './@moments/components/header/header.component';

import { LoginComponent } from './authorization/login/login.component';
import { SignupComponent } from './authorization/signup/signup.component';

import { AuthService } from './authorization/services/auth.service';
import {RouterModule, Routes} from "@angular/router";
import {mainRoutes} from "./app-routing.module";

export const routes: Routes = [
  ...mainRoutes,
];
@NgModule({
  exports: [RouterModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
