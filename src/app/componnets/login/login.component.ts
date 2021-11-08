import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { Location } from '@angular/common';
import { UserService } from '../../services/user.service'
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

myVar:boolean=true;
form:FormGroup=new  FormGroup({});
stringErr:string="";
constructor(private httpClient:HttpClient, private location: Location,private userService:UserService) { }
// , private _bottomSheetRef: MatBottomSheetRef<LoginComponent>
  ngOnInit() {
    this.form=new FormGroup({
      name:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }
save(){
  // console.log(this.form.value);
  this.httpClient.get(`http://localhost:62631/api/users?userName=${this.form.value["name"]}&pass=${this.form.value["password"]}`)
  .subscribe(x=>{ console.log(x);
    this.userService.eventUser.emit(x);
    this.none();
    this.stringErr="";
    // this.location.normalize("/product-found");
  },x=>{
    console.log("errr",x)
    this.stringErr="המידע שהוקש שגוי, נא נסה שנית"
  },()=>{});
// console.log(this.location.historyGo());
  //איך אפשר לדעת מאיזה דף הגיעו לכניסה כדי להעביר לשם כשהשם קיים?
  //אם לא קיים להעביר לדף ההרשמה
 }
//  openLink(event: MouseEvent): void {
//   this._bottomSheetRef.dismiss();
//   event.preventDefault();
// }
none(){
  this.myVar=false;

}
}
