import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/class/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-mail',
  templateUrl: './update-mail.component.html',
  styleUrls: ['./update-mail.component.css']
})
export class UpdateMailComponent implements OnInit {
  routerLink: string | any;
  myVar: boolean = false;
  err=false;
  user: User | any;
  message: string | any;
  mmm: string | any;
  item: string | any;
  mailOrId: string | any;
  form: FormGroup = new FormGroup({});
  constructor(private httpClient: HttpClient, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      this.message = String(x.get("message"));
      this.item = String(x.get("item"));
    });

    this.user = this.userService.getUser();
    this.userService.eventUser.subscribe(x => this.user = x);
    // this.form=new FormGroup({
    //   type:this.message,
    //   mailOrId:this.user!=null?this.user.Email:this.item,
    //   productName:this.user!=null?this.item:""
    // });
    this.mailOrId = this.user != null ? this.user.Email : this.item,
    this.item = this.user != null ? this.item : "";
    console.log(this.message, this.item, this.mailOrId);
    this.func();

  }
  func(){
    this.httpClient.get(`http://localhost:62631/api/mail?type=${this.message}&mailOrId=${this.mailOrId}&productName=${this.item}`)
    .subscribe(x => {
      this.mmm = String(x);
      if (this.mmm!="המייל נשלח בהצלחה!!!") {
        this.err=true;
      }
      if (this.message == "password")
        this.routerLink = "/login";
    },
      x => {
        console.log("err", x);
        this.mmm = String(x);
      }, () => { });
  }
  none() {
   
    this.myVar = !this.myVar; 
  }
}
