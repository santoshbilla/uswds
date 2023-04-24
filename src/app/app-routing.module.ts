import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConnectAcademyComponent } from './components/connect-academy/connect-academy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'connect-academy', component: ConnectAcademyComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
