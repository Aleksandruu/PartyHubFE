import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventDetails } from '../types/event.type';
import { enviroment } from '../environments/environment.dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  postEvent(event: EventDetails) {
    return this.http.post(enviroment.apiURL + '/admin/event', event);
  }

  getEvent(): Observable<EventDetails> {
    return this.http.get<EventDetails>(enviroment.apiURL + '/public/event');
  }

  getEventsList() {
    return null;
  }
}
