import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/class/category';
import { Shop } from 'src/app/class/shop';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  form: FormGroup=new FormGroup({});
  shop:Shop|any;
  cityName:string|any;
  constructor( private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      Id: new FormControl('', ),
      Name: new FormControl('', [Validators.required]),
      CityId: new FormControl('',),
      Phone: new FormControl('', [Validators.required])
    });
  }
  save(){
    this.httpClient.post(`http://localhost:62631/api/shop`,this.cityName,this.form.value).subscribe(x=>
    {
      this.shop=x;
      console.log(x);
    },x=>{console.log(x);},()=>{});
    console.log(this.form.value);
  }

}
