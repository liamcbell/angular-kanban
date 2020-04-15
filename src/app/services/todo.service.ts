import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/Item';
import { Observable } from 'rxjs';
import { User } from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

let user: User = new User;

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  itemsUrl: string = 'http://localhost:8080/item';
  itemsLimit: string = '?_limit=5';
  constructor(private http: HttpClient) { }

  createTodo(item: Item) {
    console.log("Create Todo Service Called");
    item.completed = false;
    return this.http.post<boolean>(`${this.itemsUrl}/create`, item, httpOptions);

  }


  getTodos(username: string, cardType: string): Observable<Item[]> {
    return this.http.post<Item[]>(`${this.itemsUrl}/itemRead`, [username, cardType], httpOptions);
  }

  toggleCompleted(item: Item): Observable<any> {
    const url: string = `${this.itemsUrl}/${item.id}`;
    return this.http.put(url, item, httpOptions);
  }

  deleteTodo(item: Item): Observable<Item> {
    const url: string = `${this.itemsUrl}/itemDeletion`;
    return this.http.post<Item>(url, item);
  }
}
