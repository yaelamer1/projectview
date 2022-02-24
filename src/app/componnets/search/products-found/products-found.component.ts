import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/class/product';
import { ProductInShop } from 'src/app/class/productInShop';
import { User } from 'src/app/class/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-products-found',
  templateUrl: './products-found.component.html',
  styleUrls: ['./products-found.component.css']
})
export class ProductsFoundComponent implements OnInit {
  displayedColumns: string[] = ['Shop', 'City', 'Phone', 'Price', 'ProdDate'];
  @Input()
  arr: Product[] | any;
  @Input()
  massge:string="";
  user: User | any;
  message="askUpdate";
  myVar: number =-1;



  // msg="";
  constructor(private userService: UserService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.user = this.userService.getUser();
    //להציג מתוך טבלת המוצרים את אותו מוצר לפי הסינונים מכל החנויות
    //אם לא קיים להשאיר הודעה שלא קיים
    //איך להציג כאן חיפוש של קומפוננטה אחרת
  }
  none(Iteem:number) {
    console.log(this.myVar)
    this.myVar = Iteem  ;
    
  }
}

