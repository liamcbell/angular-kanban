import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/Item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Allow-Credentials': 'true'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  loginUrl: string = "http://localhost:8080/user/login";
  constructor(private http: HttpClient) { }



  login(user: User): Observable<User> {
    const req = this.http.post<User>(this.loginUrl, user, httpOptions);
    req.subscribe();
    return req;
  }

}
