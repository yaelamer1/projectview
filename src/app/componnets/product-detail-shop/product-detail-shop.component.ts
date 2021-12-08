import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-detail-shop',
  templateUrl: './product-detail-shop.component.html',
  styleUrls: ['./product-detail-shop.component.css']
})
export class ProductDetailShopComponent implements OnInit {
  form: FormGroup=new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
      ProdDate: new FormControl('', [Validators.required]),
      Picture: new FormControl('', [Validators.required]),
      Price: new FormControl('', [Validators.required])
    })
  }
}
