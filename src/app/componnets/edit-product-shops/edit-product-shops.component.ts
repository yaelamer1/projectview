import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductInShop } from 'src/app/class/productInShop';
import { ProductShopService } from 'src/app/services/product-shop.service';

@Component({
  selector: 'app-edit-product-shops',
  templateUrl: './edit-product-shops.component.html',
  styleUrls: ['./edit-product-shops.component.css']
})
export class EditProductShopsComponent implements OnInit {
  form: FormGroup=new FormGroup({});
  productId:number=0;
  shopId:number=0;
  product:ProductInShop|any;
  constructor(private httpClient: HttpClient,private productShopService:ProductShopService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      // this.productId = Number(x.get("productId"));
      this.shopId = Number(x.get("shopId"));
  })
    this.form = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
      Price: new FormControl('', [Validators.required]),
      ProdDate: new FormControl('', [Validators.required]),
      Picture: new FormControl('', [Validators.required])
    });
    this.product = this.productShopService.getProduct();
    this.form.controls['Name'].setValue(this.product?.Product?.Name);
    this.form.controls['Description'].setValue(this.product?.Product?.Description);
    this.form.controls['Price'].setValue(this.product?.Price);
    this.form.controls['ProdDate'].setValue(this.product?.Product?.ProdDate);
    this.form.controls['Picture'].setValue(this.product?.Product?.Picture);

  }
  save(){
    const form={...this.form.value }
    form["Id"]=this.product?.productId;
    form["shopId"]=this.shopId;
    this.httpClient.post(`http://localhost:62631/api/productInShop`,form).subscribe(x=>
    {
      console.log(x);
    },x=>{console.log(x);},()=>{});
    console.log(this.form.value);
  }

}
