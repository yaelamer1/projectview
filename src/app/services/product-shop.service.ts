import { EventEmitter, Injectable } from '@angular/core';
import { ProductInShop } from '../class/productInShop';
@Injectable({
  providedIn: 'root'
})
export class ProductShopService {
  private product: ProductInShop|any;
  public emitEvent=new EventEmitter<ProductInShop>();
  constructor() {
    this.emitEvent.subscribe(x=>{this.product=x
      console.log("product");
    })
   }
  getProduct(){
    return this.product;
  }
}
