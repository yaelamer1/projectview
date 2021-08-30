import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { HeaderComponent } from './componnets/header/header.component';
import { FooterComponent } from './componnets/footer/footer.component';
import { LoginComponent } from './componnets/login/login.component';
import { SigninComponent } from './componnets/signin/signin.component';
import { RouterModule } from '@angular/router';
import { arrPath } from './ArrPath';
import { HomePageComponent } from './componnets/home-page/home-page.component';
import { FreeSearchComponent } from './componnets/free-search/free-search.component';
import { OrganizeEventComponent } from './componnets/organize-event/organize-event.component';
import { ProductsFoundComponent } from './componnets/products-found/products-found.component';
import { EventComponent } from './componnets/event/event.component';
import { AddEventComponent } from './componnets/add-event/add-event.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SigninComponent,
    FreeSearchComponent,
    OrganizeEventComponent,
    HomePageComponent,
    ProductsFoundComponent,
    EventComponent,
    AddEventComponent
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(arrPath),
    AppRoutingModule
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
