import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../class/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private User:User|any=null;
 public eventUser=new EventEmitter<User>();

  constructor() {
    this.eventUser.subscribe(x=>{this.User=x
      console.log("ffff")
    })
   }


  getUser(){
    return this.User;
  }

}
