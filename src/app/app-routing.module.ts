//import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './componnets/public/login/login.component';
import { SigninComponent } from './componnets/public/signin/signin.component';
import { OrganizeEventComponent } from './componnets/events/organize-event/organize-event.component';
import { FreeSearchComponent } from './componnets/search/free-search/free-search.component';
import { AddEventComponent } from './componnets/events/add-event/add-event.component';
import { EventComponent } from './componnets/events/event/event.component';
import { HistoryComponent } from './componnets/public/history/history.component';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './componnets/public/home-page/home-page.component';
import { AboutComponent } from './componnets/public/about/about.component';
import { ProductOfCategoryComponent } from './componnets/events/product-of-category/product-of-category.component';
import { ProductsFoundComponent } from './componnets/search/products-found/products-found.component';
import { UpdateMailComponent } from './componnets/events/update-mail/update-mail.component';
import { ForgotPasswordComponent } from './componnets/public/forgot-password/forgot-password.component';
import { ShopsComponent } from './componnets/shop/shops/shops.component';
import { ProductDetailShopComponent } from './componnets/shop/product-detail-shop/product-detail-shop.component';
import { CategoryForShopComponent } from './componnets/shop/category-for-shop/category-for-shop.component';
import { ProductInShopOfCategoryComponent } from './componnets/shop/product-in-shop-of-category/product-in-shop-of-category.component';
import { OpenComponent } from './componnets/public/open/open.component';
import { AllProductOfShopComponent } from './componnets/shop/all-product-of-shop/all-product-of-shop.component';
import { AutocompleteAutoActiveFirstOptionExample } from './componnets/search/try/dialog/dialog.component';


const routes: Routes = [
  {path:"organize-event" ,component:OrganizeEventComponent},
  {path:"add-event",component :AddEventComponent},
  {path:"add-event/:name",component :AddEventComponent},
  {path:"freeSearch" ,component:FreeSearchComponent,children:[ {path:"product-found",component:ProductsFoundComponent} ]},
  {path:"freeSearch/:ProductName" ,component:FreeSearchComponent},
  {path:"login" ,component:LoginComponent},
  {path:"signin" ,component:SigninComponent},
  {path:"event/:id/:name",component :EventComponent ,children:[ {path:"product-of-category",component:ProductOfCategoryComponent} ] },
  {path:"event/:id/:name/product-of-category/:id/:name",component :ProductOfCategoryComponent},
  {path:"event",component :EventComponent},
  {path:"update-mail/:message/:item",component :UpdateMailComponent},
  {path:"forgot-password",component :ForgotPasswordComponent},
  {path:"shops",component :ShopsComponent},
  {path:"product-detail-shop/:shopId",component :ProductDetailShopComponent},
  //איך עושים קומפוננטה בתוך קומפוננטה זה לא עובד לי
 
  {path:"history" ,component:HistoryComponent},
  {path:"home-page" ,component:HomePageComponent},
  {path:"about" ,component:AboutComponent},
  {path:"product-of-category" ,component:ProductOfCategoryComponent},
  {path:"product-found/:productId" ,component:ProductsFoundComponent},
  {path:"category-for-shop/:shopId" ,component:CategoryForShopComponent},
  {path:"all-product-of-shop/:shopId" ,component:AllProductOfShopComponent},
  {path:"product-in-shop-of-category/:shopId/:categoryId" ,component:ProductInShopOfCategoryComponent},
  // {path:"" ,component:AutocompleteAutoActiveFirstOptionExample}
  {path:"" ,component:OpenComponent}

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
