import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  signin(){
    console.log(this.form.value);
    this.httpClient.post(`http://localhost:62631/api/users`,this.form.value)
    .subscribe(x=>{},x=>{},()=>{});
  }
}
