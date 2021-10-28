import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/class/product';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-free-search',
  templateUrl: './free-search.component.html',
  styleUrls: ['./free-search.component.css']
})
export class FreeSearchComponent implements OnInit {
  arr:Product[]=[];
  allProduct:Product[]=[];
  form: FormGroup=new FormGroup({});

  constructor(private httpClient:HttpClient) {//,private route:Router 
    //,public dialog: MatDialog למה זה לא עובד
  }
  //להוסיף אפשרויות לסינונים נוספים
  //להוסיף דיב שבו תוצג קןמפוננטת התוצאות
  ngOnInit() {
    this.form = new FormGroup({
      UserId: new FormControl('')})

    this.httpClient.get<Product[]>(`http://localhost:62631/api/product`).subscribe(x=>
     {
       console.log(x);
       this.allProduct=x;
    },x=>{console.log(x)},()=>{});
  }
  // openDialog() {
  //   this.dialog.open(LoginComponent);
  // }
  search(){
    // var i=0;
    // this.allProduct.forEach(element => {
     this.arr= this.allProduct.filter(word => word.Name?.includes(this.form.controls['UserId'].value));
        // this.arr.push(element);
    // });
    this.httpClient.post(`http://localhost:62631/api/history`,this.form.value)
    .subscribe(x=>{console.log(x)},x=>{},()=>{});
    console.log("search");
    console.log(this.form.value);
    //להציג את התוצאות בקומפננטת מוצרים שנמצאו
  }
  filter(e:Product){
    //לבדוק את התנאי מהתיבות טקסט עם האלמנט
    //איך לגשת לתיבות טקסט מכאן
    //return condition==element.account&&condition==element.material
    // return e.name?.startsWith("g");
    return true;
  }
  // update(){
  //   console.log("update");
  //   //להעביר לדף הכניסה (login)
  //   //כי זה רק לרשומים
  // }
}
