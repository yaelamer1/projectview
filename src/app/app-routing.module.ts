import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './componnets/login/login.component';
import { SigninComponent } from './componnets/signin/signin.component';
import { HeaderComponent } from './componnets/header/header.component';
import { FooterComponent } from './componnets/footer/footer.component';
import { OrganizeEventComponent } from './componnets/organize-event/organize-event.component';
import { FreeSearchComponent } from './componnets/free-search/free-search.component';
import { AddEventComponent } from './componnets/add-event/add-event.component';

const routes: Routes = [
  {path:"organize-event" ,component:OrganizeEventComponent},
    {path:"add-event",component :AddEventComponent},
  
  {path:"freeSearch" ,component:FreeSearchComponent},
  {path:"login" ,component:LoginComponent},
  {path:"signin" ,component:SigninComponent,children:[
    {path:'user',component :HeaderComponent},
    {path:"customer", component:FooterComponent}

  ]},
  // { path: 'home', redirectTo: "login" },
  // { path: '**', redirectTo: "login" },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
