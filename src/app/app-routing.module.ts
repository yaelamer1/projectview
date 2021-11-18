//import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './componnets/login/login.component';
import { SigninComponent } from './componnets/signin/signin.component';
import { OrganizeEventComponent } from './componnets/organize-event/organize-event.component';
import { FreeSearchComponent } from './componnets/free-search/free-search.component';
import { AddEventComponent } from './componnets/add-event/add-event.component';
import { EventComponent } from './componnets/event/event.component';
import { HistoryComponent } from './componnets/history/history.component';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './componnets/home-page/home-page.component';
import { AboutComponent } from './componnets/about/about.component';
import { ProductOfCategoryComponent } from './componnets/product-of-category/product-of-category.component';
import { ProductsFoundComponent } from './componnets/products-found/products-found.component';
import { UpdateMailComponent } from './componnets/update-mail/update-mail.component';

const routes: Routes = [
  {path:"organize-event" ,component:OrganizeEventComponent},
  {path:"add-event",component :AddEventComponent},
  {path:"add-event/:item",component :AddEventComponent},
  {path:"freeSearch" ,component:FreeSearchComponent,children:[ {path:"product-found",component:ProductsFoundComponent} ]},
  {path:"freeSearch/:ProductName" ,component:FreeSearchComponent},
  {path:"login" ,component:LoginComponent},
  {path:"signin" ,component:SigninComponent},
  {path:"event/:id/:name",component :EventComponent ,children:[ {path:"product-of-category",component:ProductOfCategoryComponent} ] },
  {path:"event/:id/:name/product-of-category/:id",component :ProductOfCategoryComponent},
  {path:"event",component :EventComponent},
  {path:"update-mail",component :UpdateMailComponent},
  //איך עושים קומפוננטה בתוך קומפוננטה זה לא עובד לי
 
  {path:"history" ,component:HistoryComponent},
  {path:"home-page" ,component:HomePageComponent},
  {path:"about" ,component:AboutComponent},
  {path:"product-of-category" ,component:ProductOfCategoryComponent},
  {path:"product-found" ,component:ProductsFoundComponent},
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
