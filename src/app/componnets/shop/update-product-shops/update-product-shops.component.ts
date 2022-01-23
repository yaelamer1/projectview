import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
 allOrShop:number|any;
  constructor(private httpClient:HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      this.shopId = Number(x.get("shopId"));
      this.allOrShop = Number(x.get("allOrShop"));
  })
    this.httpClient.get<Category[]>(`http://localhost:62631/api/category?shopId=${this.allOrShop}`).subscribe(x=>
    {
      console.log(x);
      this.arr=x;
   },x=>{},()=>{});
  }

}
