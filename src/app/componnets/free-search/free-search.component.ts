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
  srch:boolean=false;
  arr:Product[]=[];
  user:User|any;
  allProduct:Product[]=[];
  form: FormGroup=new FormGroup({});
  static num:number=4;
  constructor(private httpClient:HttpClient,private userService:UserService) {//,private route:Router 
    //,public dialog: MatDialog למה זה לא עובד
  }
  //להוסיף אפשרויות לסינונים נוספים
  //להוסיף דיב שבו תוצג קןמפוננטת התוצאות
  ngOnInit() {
    this.user=this.userService.getUser();
    this.userService.eventUser.subscribe(x=>this.user=x);
    this.form = new FormGroup({
      Id:new FormControl(FreeSearchComponent.num++),
      ProductName: new FormControl(''),
      UserId: new FormControl(this.user.Id)
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
    //     this.allProduct.filter(word => word.Name?.includes(this.form.controls['ProductName'].value));
    //     this.arr.push(element);
    // });
    this.srch=true;
    // this.httpClient.post(`http://localhost:62631/api/history`,this.form.value)
    // .subscribe(x=>{console.log(x)},x=>{},()=>{});
    console.log("search", this.user.Id);
    this.arr=this.allProduct.filter(x=>{x.Name==this.form.controls['ProductName'].value;console.log(this.form.controls['ProductName'].value)});
    this.arr.filter(x=>console.log(x));
  }


}
