import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-search',
  templateUrl: './free-search.component.html',
  styleUrls: ['./free-search.component.css']
})
export class FreeSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
search(){
  console.log("search");

}
}
