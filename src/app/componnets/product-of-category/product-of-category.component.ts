import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/class/list';
import { Product } from 'src/app/class/product';
// import {DataSource} from '@angular/cdk/collections';
@Component({
  selector: 'app-product-of-category',
  templateUrl: './product-of-category.component.html',
  styleUrls: ['./product-of-category.component.css']
})
export class ProductOfCategoryComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource : Product[]|any;
  arr: Product[]=[];

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<List[]>(`http://localhost:62631/api/product`).subscribe(x=>
    {
      console.log(x);
      this.arr=x;
   },x=>{},()=>{});
  }

}
