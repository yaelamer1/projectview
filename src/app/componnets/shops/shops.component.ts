import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/class/category';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  form: FormGroup=new FormGroup({});
  arr:Category|any;
  constructor( private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      CityId: new FormControl('', [Validators.required]),
      Phone: new FormControl('', [Validators.required])
    });
    this.httpClient.get(`http://localhost:62631/api/category`).subscribe(x=>
    {
      console.log(x);
      this.arr=x;
    },x=>{},()=>{});
  }
  save(){
    this.httpClient.post(`http://localhost:62631/api/shop`,this.form.value).subscribe(x=>
    {
      console.log(x);
      this.arr=x;
    },x=>{console.log(x);},()=>{});
    console.log(this.form.value);
  }

}
