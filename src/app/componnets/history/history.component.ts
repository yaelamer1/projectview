import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { History } from 'src/app/class/history';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  
  arr:History[]=[];
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<History[]>(`http://localhost:62631/api/history`).subscribe(x=>
    {
      console.log(x);
      this.arr=x;
   },x=>{},()=>{});
  }

}
