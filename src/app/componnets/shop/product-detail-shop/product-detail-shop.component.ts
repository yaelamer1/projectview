import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductInShop } from 'src/app/class/productInShop';
import { ProductShopService } from 'src/app/services/product-shop.service';

@Component({
  selector: 'app-product-detail-shop',
  templateUrl: './product-detail-shop.component.html',
  styleUrls: ['./product-detail-shop.component.css']
})
export class ProductDetailShopComponent implements OnInit {
  form: FormGroup=new FormGroup({});
  product:ProductInShop|any;
  shopId:number|any;
  msg="";
  constructor(private route: ActivatedRoute,private productShopService:ProductShopService,private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(x=>{
    this.shopId=Number(x.get("shopId"));
  })
    this.form = new FormGroup({
      Description: new FormControl('', [Validators.required]),
      Price: new FormControl('', [Validators.required])
    })
    this.product = this.productShopService.getProduct();
    console.log(this.product);
    this.form.controls['Description'].setValue(this.product?.Description);
    this.form.controls['Price'].setValue(this.product?.Price);
  }
  save(){
    const form={...this.form.value }
    form["Id"]=this.product.Product.Id;
    form["categoryId"]=this.product?.Product.CategoryId;
    form["shopId"]=this.shopId;
    this.httpClient.post(`http://localhost:62631/api/productInShop`,form).subscribe(x=>
    {
      console.log(x);
      this.msg="המוצר עודכן בהצלחה!"
    },x=>{
      console.log(x);
    },()=>{});
    console.log(this.form.value);
  }
}
