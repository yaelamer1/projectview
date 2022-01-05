import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInShop } from 'src/app/class/productInShop';
import { ProductShopService } from 'src/app/services/product-shop.service';

@Component({
  selector: 'app-product-in-shop-of-category',
  templateUrl: './product-in-shop-of-category.component.html',
  styleUrls: ['./product-in-shop-of-category.component.css']
})
export class ProductInShopOfCategoryComponent implements OnInit {
  categoryId: number = 0;
  shopId: number = 0;
  arr:ProductInShop[]=[];
  constructor(private httpClient: HttpClient,private productShopService:ProductShopService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      this.categoryId = Number(x.get("categoryId"));
      this.shopId = Number(x.get("shopId"));
  })
    this.httpClient.get<ProductInShop[]>(`http://localhost:62631/api/productInShop?shopId=${this.shopId}&&categoryId=${this.categoryId}`).subscribe(x => {
    console.log(x);
    this.arr = x;
  }, x => { }, () => { });
  }
  product(item:ProductInShop){
    this.productShopService.emitEvent.emit(item);
  }
}
