import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { History } from 'src/app/class/history';
import { User } from 'src/app/class/User';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  user:User|any;
  arr:History[]=[];
  constructor(private httpClient:HttpClient,private userService:UserService) { }

  ngOnInit(): void {
    this.user=this.userService.getUser();
    this.userService.eventUser.subscribe(x=>this.user=x);
    this.httpClient.get<History[]>(`http://localhost:62631/api/history?UserId=${this.user.Id}`).subscribe(x=>
    {
      this.arr=x;
   },x=>{},()=>{});
  }

}
