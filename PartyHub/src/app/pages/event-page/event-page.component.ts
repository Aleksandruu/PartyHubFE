import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { EventDetails } from 'src/app/types/event.type';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css'],
})
export class EventPageComponent {
  event!: Observable<EventDetails>;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent();
    this.event.subscribe();
  }
}
