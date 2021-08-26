import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-search',
  templateUrl: './free-search.component.html',
  styleUrls: ['./free-search.component.css']
})
export class FreeSearchComponent implements OnInit {

  constructor() { }
  //להוסיף אפשרויות לסינונים נוספים
  //להוסיף דיב שבו תוצג קןמפוננטת התוצאות
  ngOnInit() {
  }
  search(){
    console.log("search");
    //להציג את התוצאות בקומפננטת מוצרים שנמצאו
  }
  update(){
    console.log("update");
    //להעביר לדף הכניסה (login)
    //כי זה רק לרשומים
  }
}
