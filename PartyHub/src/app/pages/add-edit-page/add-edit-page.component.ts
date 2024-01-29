import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EventDetails } from 'src/app/types/event.type';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-edit-page.component.html',
  styleUrls: ['./add-edit-page.component.css'],
})
export class AddEditPageComponent {
  addEventForm = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    coordinates: new FormControl(''),
    date: new FormControl(''),
    details: new FormControl(''),
    price: new FormControl(0),
    discount: new FormControl(0),
    ticketsNumber: new FormControl(0),
  });
  constructor(
    private httpClient: HttpClient,
    private eventService: EventService
  ) {}

  onSubmit() {
    const formData: EventDetails = {
      id: '',
      name: this.addEventForm.value.name!,
      mainBanner: '',
      secondaryBanner: '',
      location: this.addEventForm.value.location!,
      coordinates: this.addEventForm.value.coordinates!,
      date: this.addEventForm.value.date!,
      details: this.addEventForm.value.details!,
      price: this.addEventForm.value.price!,
      discount: this.addEventForm.value.discount!,
      ticketsNumber: this.addEventForm.value.ticketsNumber!,
    };

    this.eventService.postEvent(formData).subscribe();
  }

  addMainBanner() {
    // Logic to handle adding a main banner
  }

  addSecondaryBanner() {
    // Logic to handle adding a secondary banner
  }
}
