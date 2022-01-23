import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  mess:string|any;
  form: FormGroup=new FormGroup({});
  constructor(private httpClient: HttpClient,private userService:UserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl('',[Validators.required,Validators.maxLength(9), Validators.minLength(9)]),//איך מחייבים שיהיה 9 בצורה אחרת?
      name: new FormControl('', [Validators.required]),//, Validators.pattern(/[a-zA-Z]+\s+[a-zA-Z]/)
      Email: new FormControl('', [Validators.required,Validators.email]),
      Phon: new FormControl('', [Validators.required,Validators.maxLength(10)]),//,Validators.pattern("\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4}))")
      area: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
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
    console.log(this.form.value);
    this.httpClient.post(`http://localhost:62631/api/users`,this.form.value)
    .subscribe(x=>{
      this.userService.eventUser.emit(x);
      console.log(x)
      this.mess="ההרשמה בוצעה בהצלחה!!"
    },x=>{
      this.mess=String(x.error.Message); 
    },()=>{});
  }
}
