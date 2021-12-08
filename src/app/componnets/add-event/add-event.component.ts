import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Category } from 'src/app/class/category';
import { ListDetails } from 'src/app/class/listDetails';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit, OnDestroy {
  categoryName: string = '';
  eventName: string = '';
  [x: string]: any;
  arr:Category|any;
  constructor(private httpClient: HttpClient) { }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  //כשמגיע מלחיצה על הוספת מוצר באירוע שכבר קיים
  //איך לעשות שכל הפרטים לאירוע כבר יהיו על המסך ויוכל לערוך אותם
  ngOnInit() {
    this.httpClient.get(`http://localhost:62631/api/category`).subscribe(x=>
    {
      console.log(x);
      this.arr=x;
    },x=>{},()=>{});
  }
  more(){
    //#region להוסיף תיבת טקסט נוספת להוספת מוצר - דינאמי מתוך הקוד
    // var mr, br;
    // mr= document.createElement("input");
    // br= document.createElement("br");
    // mr.setAttribute("type", "text");
    // mr.setAttribute("value", "מוצר");  
    // mr.setAttribute("formControlName", "name");  
    // document.getElementById("m").appendChild(br); 
    // document.getElementById("m").appendChild(mr); 
    //#endregion
  }
  save(){
    this.httpClient.post(`http://localhost:62631/api/lists`,this.eventName)
    .subscribe(x=>{},x=>{},()=>{});
  }
}
