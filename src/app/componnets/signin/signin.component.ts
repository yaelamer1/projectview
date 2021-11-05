import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup=new FormGroup({});
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl('',[Validators.required,Validators.maxLength(9), Validators.minLength(9)]),//איך מחייבים שיהיה 9 בצורה אחרת?
      name: new FormControl(''),
      Email: new FormControl('', [Validators.required]),//,Validators.email]),
      Phon: new FormControl('', [Validators.required]),//,Validators.pattern(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/),Validators.maxLength(10)]),//איך מחייבים רק מספרים
      area: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])//רק מספרים
      //כשקיימת סיסמה כזו צריך להודיע למשתמש להחליף סיסמא
    })
  }
  isTzValid(){

    return (control: FormControl): ValidationErrors | null => {
      console.log(control)
      const forbidden = control.value.length==9;
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
   
}

  signin(){
    // if(this.form.v)
    console.log(this.form.value);
    this.httpClient.post(`http://localhost:62631/api/users`,this.form.value)
    .subscribe(x=>{
      
      console.log(x)},x=>{},()=>{});
    //לא רושם לי בטבלאות את הפלאפון והמייל
    //צריך להוסיף בדיקות תקינות לפורמ
  }
}
