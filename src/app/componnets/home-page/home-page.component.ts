import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/User';
import { UserService } from 'src/app/services/user.service';
import { MatBottomSheet} from '@angular/material/bottom-sheet';
import { LoginComponent } from '../login/login.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user:User|any;

  constructor(private route:Router,private userService:UserService,private httpClient:HttpClient) { }
  ngOnInit() {
    this.user=this.userService.getUser();
    this.userService.eventUser.subscribe(x=>this.user=x);
   }


  delete(){
    // alert("are you sure to delete?");
    this.httpClient.delete(`http://localhost:62631/api/users`,this.user)
    .subscribe(x=>{},x=>{},()=>{});
  }
}

