import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';


@Component({
  selector: 'app-stam',
  templateUrl: './stam.component.html',
  styleUrls: ['./stam.component.css']
})
export class StamComponent implements OnInit {

  constructor( private dbService:DbserviceService,  private router:Router ) { }
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  
  });
  ngOnInit() {
  }
// login(){
//   // debugger
//   // this.dbService.login(this.loginForm.controls["userName"].value,this.loginForm.controls["password"].value ).subscribe((x:User)=>{
//   //   debugger
//   //   this.dbService.setUser(x);
//   //   this.router.navigate(["/attraction"]);
//   // })
//   // console.log(this.loginForm.controls["userName"].value)
// }
}
