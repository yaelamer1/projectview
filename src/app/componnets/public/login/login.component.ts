import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Location } from '@angular/common';
import { UserService } from '../../../services/user.service'
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { OpenComponent } from '../open/open.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myVar: boolean = true;
  form: FormGroup = new FormGroup({});
  stringErr: string = "";
  constructor(private httpClient: HttpClient, private location: Location, private userService: UserService, private router:Router) { }
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  save() {
    this.httpClient.get(`http://localhost:62631/api/users?userName=${this.form.value["name"]}
    &pass=${this.form.value["password"]}`)
      .subscribe(x => {
        console.log(x);
        this.userService.eventUser.emit(x);
        this.router.navigateByUrl("/");
        this.none();
        this.stringErr = "";
      }, x => {
        console.log("errr", x)
        this.stringErr = "המידע שהוקש שגוי, נא נסה שנית"
      }, () => { });
  }
  none() {
    this.myVar = false;
  }
}
