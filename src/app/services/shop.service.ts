import { EventEmitter, Injectable } from '@angular/core';
import { Shop } from '../class/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private shop: Shop|any;
  public emitShop=new EventEmitter<Shop>();
  constructor() {
    this.emitShop.subscribe(x=>{this.shop=x
      console.log("event");
    })
    // localStorage.setItem("shop", this.shop);
    // this.shop = localStorage.getItem("shop");
   }
  getShop(){
    return this.shop;
  }
}
