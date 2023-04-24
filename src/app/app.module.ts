import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { ConnectAcademyComponent } from './components/connect-academy/connect-academy.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, ConnectAcademyComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
