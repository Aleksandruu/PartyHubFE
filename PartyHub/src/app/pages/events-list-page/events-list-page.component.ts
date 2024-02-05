import { Component } from '@angular/core';
import { EventItem } from 'src/app/types/eventItem.type';

@Component({
  selector: 'app-events-list-page',
  templateUrl: './events-list-page.component.html',
  styleUrl: './events-list-page.component.css',
})
export class EventsListPageComponent {
  events: EventItem[] = [
    {
      name: 'Concert RockFest',
      city: 'București',
      date: '23-10-2023',
    },
    {
      name: 'Expoziție de Artă Modernă',
      city: 'Cluj-Napoca',
      date: '05-03-2024',
    },
    {
      name: 'Conferință Tech Summit',
      city: 'Timișoara',
      date: '20-04-2024',
    },
    {
      name: 'Festival de Film',
      city: 'Iași',
      date: '12-05-2024',
    },
    {
      name: 'Eveniment Gastronomic',
      city: 'Constanța',
      date: '08-06-2024',
    },
  ];
}
