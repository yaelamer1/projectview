import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/class/list';
import { Product } from 'src/app/class/product';

@Component({
  selector: 'app-organize-event',
  templateUrl: './organize-event.component.html',
  styleUrls: ['./organize-event.component.css']
})
export class OrganizeEventComponent implements OnInit {
arr:Product[]=[];
  constructor(private httpClient:HttpClient) { }
  //לא יודעת איך להציג את מה שחוזר לי מהטבלאות בדפדפן
  //איך להמיר את מה שחוזר לסוג המערך
  ngOnInit() {
    // this.arr.map(x=>)
     this.httpClient.get<Product[]>(`http://localhost:62631/api/lists`).subscribe(x=>{  console.log(x);
      this.arr=x
    },x=>{console.log(x)},()=>{});
    //איך לעשות שכל אירוע יהיה קישור לדף ארגון אירוע בעצמו
  }
  addEvent(){
    console.log("addEvent");
    //לפתוח דף של הוספת אירוע
  }
}
