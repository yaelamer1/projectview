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
arr:List[]=[];
  constructor(private httpClient:HttpClient) { }
  ngOnInit() {
     this.httpClient.get<List[]>(`http://localhost:62631/api/lists`).subscribe(x=>
     {
       console.log(x);
       this.arr=x;
    },x=>{},()=>{});
  }
}
