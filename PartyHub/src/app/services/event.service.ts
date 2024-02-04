import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventDetails } from '../types/event.type';
import { enviroment } from '../environments/environment.dev';
import { Observable } from 'rxjs';
import { EventPhoto } from '../types/eventPhoto.type';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  postEvent(formData: FormData): Observable<string> {
    return this.http.post<string>(enviroment.apiURL + '/admin/event', formData);
  }

  getEvent(id: string): Observable<EventDetails> {
    return this.http.get<EventDetails>(
      enviroment.apiURL + '/public/event/' + id
    );
  }

  getEventPhoto(): Observable<EventPhoto> {
    return this.http.get<EventPhoto>(enviroment.apiURL + '/public/event');
  }
}
