import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListDetails } from 'src/app/class/listDetails';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  //להציג את כל המוצרים של אותו אירוע 
  //לחיצה על כל מוצר תעביר לדף החיפוש החופשי 
  //שם יהיה אפשר להרחיב את החיפוש ולהוסיף עוד סינונים
  arr:ListDetails[]=[];
  constructor(private httpClient:HttpClient) { }
  ngOnInit() {
     this.httpClient.get<ListDetails[]>(`http://localhost:62631/api/listDetails`).subscribe(x=>
     {
       console.log(x);
       this.arr=x;
    },x=>{console.log(x)},()=>{});
  }
  addProduct(){
    console.log("addProduct");
    //לפתוח את דף הוספת אירוע אך שיהיו בו כבר את שם האירוע וכל המוצרים שלו 
    //כאילו כדי לערוך את האירוע ותהיה אפשרות למחוק ולהוסיף מוצרים
  }
}
