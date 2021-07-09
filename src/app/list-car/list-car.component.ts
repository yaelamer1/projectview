import { Component, OnInit } from '@angular/core';
import { Car } from '../class/car';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
c:Car;
  constructor() { }

  ngOnInit() {
  }

}
