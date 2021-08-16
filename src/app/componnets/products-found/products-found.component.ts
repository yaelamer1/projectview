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
  arr:Product;
  constructor(private httpClient:HttpClient) { }
  //לא יודעת איך להציג את מה שחוזר לי מהטבלאות בדפדפן
  ngOnInit() {
 
    this.httpClient.get(`http://localhost:62631/api/product`)
    // ?name=${this.form.value["name"]}
    .subscribe(x=>{  console.log(x);},x=>{},()=>{});
    //להציג מתוך טבלת המוצרים את אותו מוצר לפי הסינונים מכל החנויות
    //אם לא קיים להשאיר הודעה שלא קיים
  }

}
