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
  user:User|any=null;
  searchName:string|any;
  message:string="update";
  // allProduct:ProductInShop[]=[];
  form: FormGroup=new FormGroup({});
  constructor(private httpClient:HttpClient,private userService:UserService,private route: ActivatedRoute) {}
  
  //להוסיף אפשרויות לסינונים נוספים
  //להוסיף דיב שבו תוצג קןמפוננטת התוצאות
  ngOnInit() {     
    this.route.paramMap.subscribe(x=>{
    this.searchName=String(x.get("ProductName")||"");});
    this.user=this.userService.getUser();
    this.userService.eventUser.subscribe(x=>this.user=x);
    this.form = new FormGroup({
      ProductName: new FormControl(''),
    });
    this.form.controls['ProductName'].setValue(this.searchName);
  }
  search(isSend:boolean){
    this.srch=true;
    const form={...this.form.value }
    form["SendMail"]=isSend;
    form["UserId"]=this.user?.Id;
    console.log(form)
    this.httpClient.post(`http://localhost:62631/api/history`,form)
    .subscribe(x=>{
      this.arr=x;
      console.log(this.arr);
    },x=>{},()=>{});
  }
}