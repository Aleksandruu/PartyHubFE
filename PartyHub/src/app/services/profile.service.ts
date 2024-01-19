import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../types/profile.type';
import { Observable } from 'rxjs';
import { enviroment } from '../environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(enviroment.apiURL + '/user/profile');
  }
}
