import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { List } from 'src/app/class/list';
import { Product } from 'src/app/class/product';

@Component({
  selector: 'app-organize-event',
  templateUrl: './organize-event.component.html',
  styleUrls: ['./organize-event.component.css']
})
export class OrganizeEventComponent implements OnInit {
arr:List[]=[];
@Input()
  randArr:number[]=[];
  constructor(private httpClient:HttpClient) { }
  ngOnInit() {
     this.httpClient.get<List[]>(`http://localhost:62631/api/lists`).subscribe(x=>
     {
       console.log(x);
       x.forEach(g=>g.Picture==null?g.Picture="תכנון-שנתי.jpg":g.Picture=g.Picture);
       this.arr=x;
    },x=>{},()=>{});
  }
}
