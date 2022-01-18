import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/class/product';
import { ProductInShop } from 'src/app/class/productInShop';

@Component({
  selector: 'app-products-found',
  templateUrl: './products-found.component.html',
  styleUrls: ['./products-found.component.css']
})
export class ProductsFoundComponent implements OnInit {
  displayedColumns: string[] = ['Shop', 'City','Phone', 'Price'];
  @Input()
  arr: ProductInShop[] = [];
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    //להציג מתוך טבלת המוצרים את אותו מוצר לפי הסינונים מכל החנויות
    //אם לא קיים להשאיר הודעה שלא קיים
    //איך להציג כאן חיפוש של קומפוננטה אחרת
  }
}

