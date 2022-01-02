import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/class/shop';

@Component({
  selector: 'app-update-product-shops',
  templateUrl: './update-product-shops.component.html',
  styleUrls: ['./update-product-shops.component.css']
})
export class UpdateProductShopsComponent implements OnInit {
 arr:Shop[]=[];
 shopId:number|any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Shop[]>(`http://localhost:62631/api/productInShop?shopId=${this.shopId}`).subscribe(x=>
    {
      console.log(x);
      this.arr=x;
   },x=>{},()=>{});
  }

}
