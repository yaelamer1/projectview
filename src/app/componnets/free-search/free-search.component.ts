import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/class/product';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/class/User';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-free-search',
  templateUrl: './free-search.component.html',
  styleUrls: ['./free-search.component.css']
})
export class FreeSearchComponent implements OnInit {
  arr:Product[]=[];
  user:User|any;
  allProduct:Product[]=[];
  form: FormGroup=new FormGroup({});

  constructor(private httpClient:HttpClient,private userService:UserService) {//,private route:Router 
    //,public dialog: MatDialog למה זה לא עובד
  }
  //להוסיף אפשרויות לסינונים נוספים
  //להוסיף דיב שבו תוצג קןמפוננטת התוצאות

  ngOnInit() {
    this.user=this.userService.getUser();
    this.userService.eventUser.subscribe(x=>this.user=x);
    this.form = new FormGroup({
      //חייב שיהיה אידי אפילו שהוא ידנטיטי 
      //איך אפשר לעשות מפה מספור?
      Id:new FormControl(1),
      ProductName: new FormControl(''),
      UserId: new FormControl('')
    })

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
     //this.arr= this.allProduct.filter(word => word.Name?.includes(this.form.controls['ProductName'].value));
        // this.arr.push(element);
    // });
    //כשאדם לוחץ על חיפוש שומר לו את החיפוש שלו בהיסטוריה 
   // אבל כשהוא עושה חיפוש הוא עוד לא רשום איך אני אידע כבר משלב החיפוש מה התז שלו
    this.httpClient.post(`http://localhost:62631/api/history`,this.form.value)
    .subscribe(x=>{console.log(x)},x=>{},()=>{});
    console.log("search");
    console.log(this.form.value);
    //איך להציג את הקומפוננטה מוצרים שנמצאו באותו דף
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
