import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/class/product';
import { MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/class/User';
import { UserService } from 'src/app/services/user.service';
import { ProductInShop } from 'src/app/class/productInShop';


@Component({
  selector: 'app-free-search',
  templateUrl: './free-search.component.html',
  styleUrls: ['./free-search.component.css']
})
export class FreeSearchComponent implements OnInit {
  srch:boolean=false;
  arr:ProductInShop[]|any;
  user:User|any;
  searchName:string|any;
  message:string="update";
  // allProduct:ProductInShop[]=[];
  form: FormGroup=new FormGroup({});
  static num:number=4;
  constructor(private httpClient:HttpClient,private userService:UserService,private route: ActivatedRoute) {}//,private route:Router 
    //,public dialog: MatDialog למה זה לא עובד
  
  //להוסיף אפשרויות לסינונים נוספים
  //להוסיף דיב שבו תוצג קןמפוננטת התוצאות
  ngOnInit() {     
    this.route.paramMap.subscribe(x=>{
    this.searchName=String(x.get("ProductName"));});
    this.user=this.userService.getUser();
    this.userService.eventUser.subscribe(x=>this.user=x);
    this.form = new FormGroup({
      Id:new FormControl(FreeSearchComponent.num++),
      ProductName: new FormControl(''),
      UserId: new FormControl(this.user.Id)
    });
    this.form.controls['ProductName'].setValue(this.searchName);
    console.log(this.searchName);
    // this.httpClient.get<ProductInShop[]>(`http://localhost:62631/api/productInShop`).subscribe(x=>
    //  {
    //    console.log(x);
    //    this.allProduct=x;
    // },x=>{console.log(x)},()=>{});
  }
  // openDialog() {
  //   this.dialog.open(LoginComponent);
  // }
  search(isSend:boolean){
    this.srch=true;
    const form={...this.form.value }
    form["SendMail"]=isSend;
    this.httpClient.post(`http://localhost:62631/api/history`,form)
    .subscribe(x=>{
      this.arr=x;
      console.log(this.arr);
    },x=>{},()=>{});

    // this.arr=this.allProduct.filter(x=>
    //   x.Productld==this.form.controls['ProductName'].value);
      //x.product?.Name==this.form.controls['ProductName'].value);
      
  }
}

