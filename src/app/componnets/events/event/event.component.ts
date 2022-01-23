import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/class/list';
import { ListDetails } from 'src/app/class/listDetails';
import { __param } from 'tslib';
import { Event } from 'src/app/class/event';
import { Category } from 'src/app/class/category';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  listid: number = 0;
  arr: Category | any;
  event: Event = new Event("", []);
  constructor(private httpClient: HttpClient,private eventService:EventService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(x => {
      this.listid = Number(x.get("id"));
      this.event.Name  = String(x.get("name"));
    })
    this.httpClient.get<Category[]>(`http://localhost:62631/api/listDetails?Id=${this.listid}`)
    .subscribe(x => {
      this.arr = x;
      this.arr.forEach((x: Category) => {
        this.event.Categories?.push((Number)(x.Id));
      });
      this.eventService.emitEvent.emit(this.event);
    }, x => { console.log(x) }, () => { });
    
  }
}
