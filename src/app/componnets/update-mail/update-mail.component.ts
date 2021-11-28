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
  user: User | any;
  message: string | any;
  item:string|any;  
  mailOrId:string|any;
  form:FormGroup=new FormGroup({});
  constructor(private httpClient: HttpClient, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {  
    this.route.paramMap.subscribe(x => {
      this.message = String(x.get("message"));
      this.item=String(x.get("item"));
    });
    
    this.user = this.userService.getUser();
    this.userService.eventUser.subscribe(x => this.user = x);
    // this.form=new FormGroup({
    //   type:this.message,
    //   mailOrId:this.user!=null?this.user.Email:this.item,
    //   productName:this.user!=null?this.item:""
    // });
    this.mailOrId=this.user!=null?this.user.Email:this.item,
    this.item=this.user!=null?this.item:"";
    this.item=this.user!=null?this.item:"";
    console.log(this.message,this.item,this.mailOrId);
    this.httpClient.get(`http://localhost:62631/api/mail`,this.message)
    .subscribe(x=>{
    },x=>{},()=>{});
  }

}
