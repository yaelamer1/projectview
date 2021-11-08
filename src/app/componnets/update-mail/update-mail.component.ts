import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-mail',
  templateUrl: './update-mail.component.html',
  styleUrls: ['./update-mail.component.css']
})
export class UpdateMailComponent implements OnInit {
  user:User|any;
  constructor(private httpClient:HttpClient,private userService:UserService) { }

  ngOnInit(): void {
    this.user=this.userService.getUser();
    this.userService.eventUser.subscribe(x=>this.user=x);
  }

}
