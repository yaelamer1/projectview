import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/class/product';

@Component({
  selector: 'app-products-found',
  templateUrl: './products-found.component.html',
  styleUrls: ['./products-found.component.css']
})
export class ProductsFoundComponent implements OnInit {
  arr:Product[]=[];
  constructor(private httpClient:HttpClient) { }
  ngOnInit() {
     this.httpClient.get<Product[]>(`http://localhost:62631/api/product`).subscribe(x=>
     {
       console.log(x);
       this.arr=x;
    },x=>{console.log(x)},()=>{});
    //להציג מתוך טבלת המוצרים את אותו מוצר לפי הסינונים מכל החנויות
    //אם לא קיים להשאיר הודעה שלא קיים
    //איך להציג כאן חיפוש של קומפוננטה אחרת
  }

}
