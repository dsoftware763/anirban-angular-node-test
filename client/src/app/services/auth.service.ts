import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { environment } from '../../environments/environment'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
  isLogged = new BehaviorSubject(this.isLoggedIn())
  apiUrl: string = environment.API;

  constructor(private http: HttpClient) { }

  register(user): Observable<any> {
    return this.http.post(`${this.apiUrl}users`, user).map((response) => response);
  }

  login(user): Observable<any> {
    return this.http.post(`${this.apiUrl}authentication`, user).map((response) => response);
  }

  isLoggedIn() {
    return !!localStorage.getItem('auth-token');
  }

}
