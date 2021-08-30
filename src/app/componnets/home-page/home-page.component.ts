import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route:Router) { }
  //איך לנווט בין הקומפוננטות
  ngOnInit() {
  }
  signin(name:string){
    this.route.navigate([`/${name}`])
    console.log("signin");
    //להעביר לדף ההרשמה
  }
  events(name:string){
    this.route.navigate([`/${name}`])
    console.log("events");
    //להעביר לדף ארגון אירוע
  }
  freeSearch(){
    console.log("freeSearch");
    //להעביר לדף חיפוש חופשי
  }
}
