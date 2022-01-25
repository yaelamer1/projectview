import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

// let img="green.jpg";
// const arrImg = [
//   "green.jpg",
//   "תכנון-שנתי.jpg",
//   "-photo_csp9190116.jpg",
// ]
// let isOpen=true;
// let i=0;
// let change: () => void
//   img=arrImg[i++];
//   if (i >= arrImg.length) 
//   {i = 0}
//   isOpen=!isOpen;


  @Component({
    selector: 'app-open',
    templateUrl: './open.component.html',
    styleUrls: ['./open.component.css'],
  
  animations: [
    // animation triggers go here
      trigger('display', 
      [
        state('block', style({
          opacity: 1,
          // display:"block",
          // backgroundColor:"red",
          //  backgroundImage:`url(/assets/image/${img})`
        })),
        state('none', style({
          opacity: 0.8,
           // backgroundColor:"yellow",
           // display:"none"
        })),
        transition('block => none', [
          animate('1s')
        ]),
        transition('none => block', [
          animate('0.5s')
        ]),
      ]),
  ]
})
export class OpenComponent implements OnInit {
  arrImg = [
    "green.jpg",
    "תכנון-שנתי.jpg",
    "-photo_csp9190116.jpg",
  ]
  img="green.jpg";
  img1="green.jpg";
  isOpen:boolean=true;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.change();
    },5000);
  }
  i=0;
  // toggle() {
  //   this.i++;
  //   this.isOpen[this.i-1] = !this.isOpen[this.i-1];
  //   if (this.i >= this.isOpen.length) 
  //   {this.i = 0}
  // } 
   change(){
    this.img=this.arrImg[this.i++];
    this.img1=this.arrImg[this.i];
    if (this.i >= this.arrImg.length) 
    {this.i = 0}
  }

}
