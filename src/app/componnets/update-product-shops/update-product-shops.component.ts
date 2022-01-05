import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/class/category';
import { Shop } from 'src/app/class/shop';

@Component({
  selector: 'app-update-product-shops',
  templateUrl: './update-product-shops.component.html',
  styleUrls: ['./update-product-shops.component.css']
})
export class UpdateProductShopsComponent implements OnInit {
 arr:Category[]=[];
 shopId:number|any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.shopId=1;
    this.httpClient.get<Category[]>(`http://localhost:62631/api/category?shopId=${this.shopId}`).subscribe(x=>
    {
      console.log(x);
      this.arr=x;
   },x=>{},()=>{});
  }

}
