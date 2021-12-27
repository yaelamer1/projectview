import { EventEmitter, Injectable } from '@angular/core';
import { Event } from '../class/event';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private event: Event|any;
  public emitEvent=new EventEmitter<Event>();
  constructor() {
    this.emitEvent.subscribe(x=>{this.event=x
      console.log("event");
    })
   }
  getEvent(){
    return this.event;
  }
}
