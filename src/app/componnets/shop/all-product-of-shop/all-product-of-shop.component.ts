import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/class/product';
import { ProductInShop } from 'src/app/class/productInShop';
import { ProductShopService } from 'src/app/services/product-shop.service';

@Component({
  selector: 'app-all-product-of-shop',
  templateUrl: './all-product-of-shop.component.html',
  styleUrls: ['./all-product-of-shop.component.css']
})
export class AllProductOfShopComponent implements OnInit {
  shopId: number = 0;
  AllArr: ProductInShop[] = [];
  ShowArr: ProductInShop[] = [];


  Name = "";
  Description = "";
  Price: number|any=null;
  constructor(private httpClient: HttpClient, private productShopService: ProductShopService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      this.shopId = Number(x.get("shopId"));
    })
    this.httpClient.get<[]>(`http://localhost:62631/api/productInShop?shopId=${this.shopId}`)
      .subscribe(x => {
        console.log(x);
        this.AllArr = x;
        this.ShowArr=x;
      }, x => { }, () => { });
  }
  product(item: ProductInShop) {
    this.productShopService.emitEvent.emit(item);
  }
  filter() {
    // let arr = { ...this.arr };
    console.log(this)
    this.ShowArr = this.AllArr.filter(x =>
      (this.Price == null || x.Price==null||x.Price>= this.Price)
      && (this.Description == "" || x.Description?.includes(this.Description))
      && (this.Name == "" || x.Product?.Name?.includes(this.Name))
    )
  }
}


