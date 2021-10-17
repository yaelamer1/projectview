import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/class/product';

@Component({
  selector: 'app-free-search',
  templateUrl: './free-search.component.html',
  styleUrls: ['./free-search.component.css']
})
export class FreeSearchComponent implements OnInit {
  arr:Product[]=[];
  allProduct:Product[]=[]
  constructor(private httpClient:HttpClient) { 
    
  }
  //להוסיף אפשרויות לסינונים נוספים
  //להוסיף דיב שבו תוצג קןמפוננטת התוצאות
  ngOnInit() {
    this.httpClient.get<Product[]>(`http://localhost:62631/api/product`).subscribe(x=>
     {
       console.log(x);
       this.allProduct=x;
    },x=>{console.log(x)},()=>{});
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
