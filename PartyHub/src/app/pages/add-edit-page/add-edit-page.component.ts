import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-edit-page.component.html',
  styleUrls: ['./add-edit-page.component.css'],
})
export class AddEditPageComponent {
  addEventForm = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    date: new FormControl(''),
    details: new FormControl(''),
    price: new FormControl(''),
    discount: new FormControl(''),
  });

  onSubmit() {
    // Logic to handle form submission
  }

  addMainBanner() {
    // Logic to handle adding a main banner
  }

  addSecondaryBanner() {
    // Logic to handle adding a secondary banner
  }
}
