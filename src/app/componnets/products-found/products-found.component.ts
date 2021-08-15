import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/class/product';

@Component({
  selector: 'app-products-found',
  templateUrl: './products-found.component.html',
  styleUrls: ['./products-found.component.css']
})
export class ProductsFoundComponent implements OnInit {
  arr:Product;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
 
    this.httpClient.get(`http://localhost:62631/api/product`)
    // ?name=${this.form.value["name"]}
    .subscribe(x=>{  console.log(x);},x=>{},()=>{});
  }

}
