import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './componnets/login/login.component';
import { SigninComponent } from './componnets/signin/signin.component';
import { OrganizeEventComponent } from './componnets/organize-event/organize-event.component';
import { FreeSearchComponent } from './componnets/free-search/free-search.component';
import { AddEventComponent } from './componnets/add-event/add-event.component';
import { EventComponent } from './componnets/event/event.component';
import { HistoryComponent } from './componnets/history/history.component';

const routes: Routes = [
  {path:"organize-event" ,component:OrganizeEventComponent,
  // children:[ {path:"add-event",component :AddEventComponent} ] 
  },
  {path:"add-event",component :AddEventComponent},
  {path:"freeSearch" ,component:FreeSearchComponent},
  {path:"login" ,component:LoginComponent},
  {path:"signin" ,component:SigninComponent},
  {path:"event" ,component:EventComponent},
  {path:"history" ,component:HistoryComponent},
  // { path: 'home', redirectTo: "login" },
  // { path: '**', redirectTo: "login" },”
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    // RouterModule.forChild(routes)

  ],
  declarations: []
})
export class AppRoutingModule { }
