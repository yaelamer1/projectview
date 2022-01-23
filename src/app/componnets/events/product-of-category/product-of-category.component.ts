import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/class/list';
import { Product } from 'src/app/class/product';
// import {DataSource} from '@angular/cdk/collections';
@Component({
  selector: 'app-product-of-category',
  templateUrl: './product-of-category.component.html',
  styleUrls: ['./product-of-category.component.css']
})
export class ProductOfCategoryComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Description', 'Picture'];

  arr: Product[] = [];
  categoryId: number = 0;
  categoryName: string = "";
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      this.categoryId = Number(x.get("id"));
      this.categoryName = String(x.get("name"));
    })
    this.httpClient.get<Product[]>(`http://localhost:62631/api/product?Id=${this.categoryId}`).subscribe(x => {
      console.log(x);
      this.arr = x;
    }, x => { }, () => { });
  }

}
