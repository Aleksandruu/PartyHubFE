import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../environments/environment.dev';
import { EventDetails } from '../types/event.type';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getEvent(): Observable<EventDetails> {
    return this.http.get<EventDetails>(enviroment.apiURL + '/public/event');
  }
}
