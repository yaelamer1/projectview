import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/class/product';

@Component({
  selector: 'app-free-search',
  templateUrl: './free-search.component.html',
  styleUrls: ['./free-search.component.css']
})
export class FreeSearchComponent implements OnInit {
  arrp:Product[]=[];
  constructor(private httpClient:HttpClient) { 
    
  }
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
