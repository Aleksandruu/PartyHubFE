import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { EventStatistics } from 'src/app/types/eventStatistics.type';

@Component({
  selector: 'app-admin-event-details-page',
  templateUrl: './admin-event-details-page.component.html',
  styleUrl: './admin-event-details-page.component.css',
})
export class AdminEventDetailsPageComponent {
  eventStatistics!: EventStatistics;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let eventId: string;
    this.route.params.subscribe((params) => {
      eventId = params['id'];
      console.log(eventId);
      this.eventService
        .getEventStatistics(eventId)
        .subscribe((eventStatistics) => {
          this.eventStatistics = eventStatistics;
        });
    });
  }
}
