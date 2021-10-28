import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit, OnDestroy {
  [x: string]: any;
  form: FormGroup=new FormGroup({});
  subscription?: Subscription;

  constructor(private httpClient: HttpClient) { }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  //כשמגיע מלחיצה על הוספת מוצר באירוע שכבר קיים
  //איך לעשות שכל הפרטים לאירוע כבר יהיו על המסך ויוכל לערוך אותם
  ngOnInit() {
    //אני רוצה לשלוח פרמטר עם הניווט איך אפשר לקבל אותו ולהשתמש בו
    // this.subscription=this.routes.paramMap.subscribe(params => {
    //   this.tasksHttpService.getAllTasksFromServer().subscribe(data=>{
    //     let Name=+params.get('item')
    //     if (item != undefined){
    //       this.allTasks = data.filter(function(e,i){
    //         return e.Name=Name
    //       })
    //     }
    //     else
    //       this.allTasks=data;
    //   });
    // });
    this.form = new FormGroup({name: new FormControl('')});
  }
  more(){
    var mr, br;
    mr= document.createElement("input");
    br= document.createElement("br");
    mr.setAttribute("type", "text");
    mr.setAttribute("value", "מוצר");  
    mr.setAttribute("formControlName", "name");  
    // document.getElementById("m").appendChild(br); 
    // document.getElementById("m").appendChild(mr); 
    //להוסיף תיבת טקסט נוספת להוספת מוצר - דינאמי מתוך הקוד
  }
  save(){
    console.log(this.form.value);
    //אני רוצה שרשימת המוצרים יכנסו או כרשימה חדשה או כתוספת על רשימה קיימת
    this.httpClient.post(`http://localhost:62631/api/listDetails?name=לתיבת טקסט של שם האירוע`,this.form.value)
    .subscribe(x=>{},x=>{},()=>{});
  }
}
