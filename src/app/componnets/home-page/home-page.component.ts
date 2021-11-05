import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
user:User|any;
  constructor(private route:Router,private userService:UserService) { }
  ngOnInit() {
    this.user=this.userService.getUser();
    this.userService.eventUser.subscribe(x=>this.user=x);

  }
}
