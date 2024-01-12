import { Injectable } from '@angular/core';
import { Register } from '../types/register.type';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../environments/environment.dev';
import { Observable } from 'rxjs';
import { Login } from '../types/login.type';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  register(user: Register): Observable<any> {
    return this.http.post(enviroment.apiURL + '/auth/register', user);
  }

  login(user: Login): Observable<any> {
    return this.http.post(enviroment.apiURL + '/auth/login', user);
  }
}
