import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListCarComponent } from './list-car/list-car.component';
import { FormsModule } from '@angular/forms';
import { AllempComponent } from './allemp/allemp.component';
import {HttpClientModule} from '@angular/common/http';
import { MyDirectiveDirective } from './my-directive.directive';
import { AaaComponent } from './aaa/aaa.component';


@NgModule({
  declarations: [
    AppComponent,
    ListCarComponent,
    AllempComponent,
    MyDirectiveDirective,
    AaaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
