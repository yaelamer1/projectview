import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/class/product';
import { MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../../public/login/login.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  arr:Product[]|any;
  user:User|any=null;
  searchName:string|any;
  myVar: boolean = false;

  massge:string="";
  // allProduct:ProductInShop[]=[];
  form: FormGroup=new FormGroup({});
  constructor(private httpClient:HttpClient,private userService:UserService,private route: ActivatedRoute, private router:Router) {}
  
  //להוסיף אפשרויות לסינונים נוספים
  //להוסיף דיב שבו תוצג קןמפוננטת התוצאות
  ngOnInit() {     
    this.route.paramMap.subscribe(x=>{
    this.searchName=String(x.get("ProductName")||"");});
    this.user=this.userService.getUser();
    this.userService.eventUser.subscribe(x=>this.user=x);
    this.form = new FormGroup({
      ProductName: new FormControl('',[Validators.required]),
    });
    this.form.controls['ProductName'].setValue(this.searchName);
    // window.open("two.html", "", "toolbar = no, location = yes, directories = no, status = no, menubar = no, scrollbars = no, resizable = no, width = 400, height = 400");
    // const my=setTimeout(this.none, 5000);
  }
  search(){
    this.srch=true;
    this.massge="המערכת מחפשת נתונים בשבילכם"
    const form={...this.form.value }
    form["UserId"]=this.user?.Id;
    console.log(form)
    this.httpClient.post<Product[]>(`http://localhost:62631/api/history`,form)
    .subscribe(x=>{
      this.arr=x;
      if(x.length)
      this.massge="";
      else{
        this.massge="לא נמצאו תוצאות "
      }
      console.log(this.arr);
      // this.arr.sort((a:ProductInShop,b:ProductInShop)=>a.ProductId-b.ProductId);
      this.arr.sort()
      this.router.navigate(["product-found"]);
    },x=>{},()=>{});
    
  }
  none() {
   
    this.myVar = !this.myVar; 
  }
}