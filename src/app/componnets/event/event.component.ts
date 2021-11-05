import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListDetails } from 'src/app/class/listDetails';
import { __param } from 'tslib';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  listid:number=0;
  //להציג את כל הקטגוריות של אותו אירוע 
  //לחיצה על כל קטגוריה תראה את המוצרים של כל קטגוריה  
  //ואז לחיצה על כל מוצר תעביר לדף החיפוש החופשי עם אפשרות לסינונים נוספים
  //או תציג את התוצאות של החיפוש מיד
  arr:ListDetails|any;
  constructor(private httpClient:HttpClient,private route: ActivatedRoute) { }
  ngOnInit() {
     this.route.paramMap.subscribe(x=>{
       //איך אפשר לגשת לאידי שהגיע בניתוב באיקס 
       //כדי להכניס אותו לליסטאידי ולפי זה לסנן את הקטגוריות שיוצגו
      // console.log(x);
      this.listid=Number(x.get("id"));
      console.log(this.listid);
    })
    //צריך להחזיר רק את המוצרים של אותו אירוע
    //צריך לבדוק מה קוד האירוע (לפי השם שלו או לקבל אותו כשמגיע)
    //ובגט שיחזרו המוצרים  שקוד האירוע שלהם שווה לקוד האירוע הספציפי
     this.httpClient.get(`http://localhost:62631/api/listDetails?Id=${this.listid}`).subscribe(x=>
     {
       console.log("ggggggggggggggggggggg", x);
       this.arr=x;
    },x=>{console.log(x)},()=>{});
  }
  addProduct(){
    console.log("addProduct");
    //לפתוח את דף הוספת אירוע אך שיהיו בו כבר את שם האירוע וכל המוצרים שלו 
    //כאילו כדי לערוך את האירוע ותהיה אפשרות למחוק ולהוסיף מוצרים
  }
}
