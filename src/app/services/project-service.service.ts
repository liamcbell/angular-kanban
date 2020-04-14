import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  private projectUrl: string = 'http://localhost:8080/projects';
  constructor(private http: HttpClient) { }

  public getProjects(username: string) {
    return this.http.post<string[]>(`${this.projectUrl}/getProjects`, username, httpOptions);
  }

  public createProject(username: string, projectName: string) {
    return this.http.post<string>(`${this.projectUrl}/createProject`, [username, projectName], httpOptions);
  }
}
