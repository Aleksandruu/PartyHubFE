import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { EventDetails } from 'src/app/types/event.type';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css'],
})
export class EventsPageComponent implements OnInit {
  event!: EventDetails;
  noEvent = false;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvent().subscribe(
      (event: EventDetails) => {
        this.event = event;
      },
      (error: any) => {
        this.noEvent = true;
      }
    );
  }
}
