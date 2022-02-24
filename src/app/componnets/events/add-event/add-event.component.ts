import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Category } from 'src/app/class/category';
import { Event } from 'src/app/class/event';
import { ListDetails } from 'src/app/class/listDetails';
import { EventService } from 'src/app/services/event.service';
import { NavigationService } from 'src/app/services/navigation.service';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  categoryName: string | any;
  [x: string]: any;
  arr: Category | any;
  event: Event = new Event("", []);
  isAddProduct:boolean=false;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute,private eventService:EventService,private navigation: NavigationService) { }

  currentEvent(e: Event) {
    this.event = e;
  }
  ngOnInit() {
    this.route.paramMap.subscribe(x => {
      this.isAddProduct  = Boolean(x.get("name"));
    })
    this.httpClient.get(`http://localhost:62631/api/category`).subscribe(x => {
      this.arr = x;
      if (this.isAddProduct) {
        this.event=this.eventService.getEvent();
        var i=0;
        this.event.Categories?.forEach((x) => {
          console.log(x);
          
          this.arr[x - 1].checked = true;
        })
      }
    }, x => { }, () => { });
  }
  save() {
    this.arr.forEach((x: Category) => {
      if (x.checked == true) {
        this.event?.Categories?.push((Number)(x.Id));
      }
    });
    this.httpClient.post(`http://localhost:62631/api/lists`, this.event)
      .subscribe(x => {
        this.navigation.back()
       }, x => { }, () => { });
  }
}