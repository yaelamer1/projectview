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
      id: new FormControl('', [Validators.required,Validators.maxLength(9), Validators.minLength(9)]),//איך מחייבים שיהיה 9 בצורה אחרת?
      name: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required,Validators.email]),
      phone: new FormControl('', [Validators.required,Validators.maxLength(10)]),//איך מחייבים רק מספרים
      area: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])//רק מספרים
      //כשקיימת סיסמה כזו צריך להודיע למשתמש להחליף סיסמא
    })
  }
  signin(){
    console.log(this.form.value);
    this.httpClient.post(`http://localhost:62631/api/users`,this.form.value)
    .subscribe(x=>{},x=>{},()=>{});
    //לא רושם לי בטבלאות את הפלאפון והמייל
    //צריך להוסיף בדיקות תקינות לפורמ
  }
}
