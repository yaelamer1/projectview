import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-shop',
  templateUrl: './product-detail-shop.component.html',
  styleUrls: ['./product-detail-shop.component.css']
})
export class ProductDetailShopComponent implements OnInit {
  form: FormGroup=new FormGroup({});
  categoryId:number=0;
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(x=>{
    this.categoryId=Number(x.get("id"));})
    this.form = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
      ProdDate: new FormControl('', [Validators.required]),
      Picture: new FormControl('', [Validators.required]),
      Price: new FormControl('', [Validators.required])
    })
  }
  save(){
    
  }
}
