import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  form: FormGroup=new FormGroup({});
  constructor(private httpClient: HttpClient) { }
  //כשמגיע מלחיצה על הוספת מוצר באירוע שכבר קיים
  //איך לעשות שכל הפרטים לאירוע כבר יהיו על המסך ויוכל לערוך אותם
  ngOnInit() {
    this.form = new FormGroup({name: new FormControl('')});
  }
  more(){
    var mr, br;
    mr= document.createElement("input");
    br= document.createElement("br");
    mr.setAttribute("type", "text");
    mr.setAttribute("value", "מוצר");  
    mr.setAttribute("formControlName", "name");  
    //document.getElementById("m").appendChild(br); 
    //document.getElementById("m").appendChild(mr); 
    //להוסיף תיבת טקסט נוספת להוספת מוצר - דינאמי מתוך הקוד
  }
  save(){
    console.log(this.form.value);
    //אני רוצה שרשימת המוצרים יכנסו או כרשימה חדשה או כתוספת על רשימה קיימת
    this.httpClient.post(`http://localhost:62631/api/listDetails?name=לתיבת טקסט של שם האירוע`,this.form.value)
    .subscribe(x=>{},x=>{},()=>{});
  }
}
