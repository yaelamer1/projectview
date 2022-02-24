import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/class/product';
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
  arr:Product[]=[];
  product1:ProductInShop|any;

  constructor(private httpClient: HttpClient,private productShopService:ProductShopService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      this.categoryId = Number(x.get("categoryId"));
      this.shopId = Number(x.get("shopId"));
  })
    this.httpClient.get<Product[]>(`http://localhost:62631/api/product?categoryId=${this.categoryId}`).subscribe(x => {
    console.log(x);
    this.arr = x;
  }, x => { }, () => { });
  }
  product(item:Product){
    // this.product1.Name=item.Name;
    // this.product1.Product.CategoryId=item.CategoryId;
    // console.log(this.product1);
    var d=new ProductInShop(0,0,item.Id,"",0,item)
    this.productShopService.emitEvent.emit(d);
  }
}
