import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListDetails } from 'src/app/class/listDetails';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  listid:number=7;
  //להציג את כל המוצרים של אותו אירוע 
  //לחיצה על כל מוצר תעביר לדף החיפוש החופשי 
  //שם יהיה אפשר להרחיב את החיפוש ולהוסיף עוד סינונים
  arr:ListDetails[]=[];
  constructor(private httpClient:HttpClient,private route: ActivatedRoute) { }
  ngOnInit() {
     this.route.paramMap.subscribe(x=>console.log(x))
        //צריך להחזיר רק את המוצרים של אותו אירוע
    //צריך לבדוק מה קוד האירוע (לפי השם שלו או לקבל אותו כשמגיע)
    //ובגט שיחזרו המוצרים  שקוד האירוע שלהם שווה לקוד האירוע הספציפי
     this.httpClient.get<ListDetails[]>(`http://localhost:62631/api/listDetails?ListId=${this.listid}`).subscribe(x=>
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
