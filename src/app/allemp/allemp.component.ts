import { Component, OnInit } from '@angular/core';
import { Emp } from '../class/Emp';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-allemp',
  templateUrl: './allemp.component.html',
  styleUrls: ['./allemp.component.css']
})
export class AllempComponent implements OnInit {
arr:Emp[]=[];
  arrEmp:Emp[]=[];
  constructor(private mydb:DbserviceService) { 
 this.mydb.getallemp().subscribe(x=>{
  this.arr=<Emp[]>x;
})
  }

  ngOnInit() {
  }

}
