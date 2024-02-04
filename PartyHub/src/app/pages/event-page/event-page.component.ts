import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { EventDetails } from 'src/app/types/event.type';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EventPageComponent implements OnInit {
  event!: EventDetails;
  center!: { lat: number; lng: number };
  zoom = 12;
  id!: string;
  photoUrl!: SafeResourceUrl;
  notFound = false;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.eventService.getEvent(this.id).subscribe(
      (event) => {
        this.event = event;
        this.center = {
          lat: event.lat,
          lng: event.lng,
        };
        this.photoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          'data:image/jpg;base64,' + event.secondaryBanner
        );
      },
      (error) => {
        this.notFound = true;
      }
    );
  }
}
