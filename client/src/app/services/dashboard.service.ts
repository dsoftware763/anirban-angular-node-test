import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { environment } from '../../environments/environment'
import { Headers, Http, RequestOptions } from '@angular/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class DashboardService {
  apiUrl: string = environment.API;
  token = localStorage.getItem('auth-token')
  headers = new Headers({ 'Content-Type': 'application/json', 'authorization': `Bearer ${this.token}` });
  options = new RequestOptions({ headers: this.headers });
  dataValues$ = new Subject<any[]>();

  constructor(private http: Http) { }

  getTasks(): Observable<any> {
    return this.http.get(`${this.apiUrl}tasks`, this.options).map((response) => response);
  }

  fetchToDoList(taskId) {
    this.getToDoList(taskId).subscribe(res => {
      let data = JSON.parse(res._body).data
      this.dataValues$.next(data);
    })
  }

  updateToDoStatus(data, id): Observable<any> {
    return this.http.patch(`${this.apiUrl}todos/${id}`,
      JSON.stringify(data), this.options).map((response) => response);
  }


  
  getToDoList(taskId): Observable<any> {
    return this.http.get(`${this.apiUrl}todos?taskId=${taskId}`, this.options).map((response) => response);
  }

  getTodoListResults(): Observable<any[]> {
    return this.dataValues$.asObservable();
  }

  

}
