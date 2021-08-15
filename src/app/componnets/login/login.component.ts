import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.form=new FormGroup({
      name:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }
save(){
  console.log(this.form.value);
  this.httpClient.get(`http://localhost:62631/api/users?name=${this.form.value["name"]}&password=${this.form.value["password"]}`)
  .subscribe(x=>{console.log(x)},x=>{},()=>{});

 }
}
