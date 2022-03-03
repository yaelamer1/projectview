import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { LoginComponent } from './componnets/public/login/login.component';
import { SigninComponent } from './componnets/public/signin/signin.component';
import { RouterModule } from '@angular/router';
import { arrPath } from './ArrPath';
import { HomePageComponent } from './componnets/public/home-page/home-page.component';
import { FreeSearchComponent } from './componnets/search/free-search/free-search.component';
import { OrganizeEventComponent } from './componnets/events/organize-event/organize-event.component';
import { ProductsFoundComponent } from './componnets/search/products-found/products-found.component';
import { EventComponent } from './componnets/events/event/event.component';
import { AddEventComponent } from './componnets/events/add-event/add-event.component';
import { HistoryComponent } from './componnets/public/history/history.component';
import { AboutComponent } from './componnets/public/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductOfCategoryComponent } from './componnets/events/product-of-category/product-of-category.component';

//material
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
// import { MatTabGroup} from '@angular/material/tabs';
// import { MatTab} from '@angular/material/tabs';
// import {DataSource} from '@angular/cdk/collections';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { UpdateMailComponent } from './componnets/events/update-mail/update-mail.component';
import { ForgotPasswordComponent } from './componnets/public/forgot-password/forgot-password.component';
import { ShopsComponent } from './componnets/shop/shops/shops.component';
import { ProductDetailShopComponent } from './componnets/shop/product-detail-shop/product-detail-shop.component';
// import {MatNavListModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { CategoryForShopComponent } from './componnets/shop/category-for-shop/category-for-shop.component';
import { ProductInShopOfCategoryComponent } from './componnets/shop/product-in-shop-of-category/product-in-shop-of-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenComponent } from './componnets/public/open/open.component';
// import { DialogOverviewComponent } from './componnets/search/try/dialog/dialog-overview/dialog-overview.component';
import { AutocompleteAutoActiveFirstOptionExample } from './componnets/search/try/dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOption, MatOptionModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


import { AllProductOfShopComponent } from './componnets/shop/all-product-of-shop/all-product-of-shop.component';
// import { DialogComponent } from './componnets/dialog/dialog.component';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    FreeSearchComponent,
    OrganizeEventComponent,
    HomePageComponent,
    ProductsFoundComponent,
    EventComponent,
    AddEventComponent,
    HistoryComponent,
    AboutComponent,
    ProductOfCategoryComponent,
    UpdateMailComponent,
    ForgotPasswordComponent,
    ShopsComponent,
    ProductDetailShopComponent,
    CategoryForShopComponent,
    ProductInShopOfCategoryComponent,
    OpenComponent,
    // DialogOverviewComponent,
    AutocompleteAutoActiveFirstOptionExample,
    // DialogComponent,
    AllProductOfShopComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(arrPath),
    AppRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatAutocompleteModule,
    // MatDialogRef,MatDialog,
    // MAT_DIALOG_DATA,
    BrowserAnimationsModule,
    MatSelectModule,MatOptionModule
    
    
  ],

  bootstrap: [AppComponent],
  entryComponents: [ProductsFoundComponent,ProductOfCategoryComponent]
})
export class AppModule { }
