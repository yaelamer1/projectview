import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/class/category';
import { Shop } from 'src/app/class/shop';

@Component({
  selector: 'app-category-for-shop',
  templateUrl: './category-for-shop.component.html',
  styleUrls: ['./category-for-shop.component.css']
})
export class CategoryForShopComponent implements OnInit {
 arr:Category[]=[];
 shopId:number|any;
  constructor(private httpClient:HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      this.shopId = Number(x.get("shopId"));
  })
    this.httpClient.get<Category[]>(`http://localhost:62631/api/category`).subscribe(x=>
    {
      console.log(x);
      this.arr=x;
   },x=>{},()=>{});
  }
}
