import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  //איך לנווט בין הקומפוננטות
  ngOnInit() {
  }
  signin(){
    console.log("signin");
    //להעביר לדף ההרשמה
  }
  events(){
    console.log("events");
    //להעביר לדף ארגון אירוע
  }
  freeSearch(){
    console.log("freeSearch");
    //להעביר לדף חיפוש חופשי
  }
}
