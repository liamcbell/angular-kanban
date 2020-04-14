import { Component, OnInit } from '@angular/core';
import { TodosComponent } from '../todos/todos.component';
import { ProjectMenuComponent } from '../project-menu/project-menu.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  backlog: string = "Backlog";
  inProgress: string = "In Progress";
  inReview: string = "In Review";
  completed: string = "Complete";
  username: string;
  constructor(private route: Router, private dataRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.dataRoute.snapshot.params['tempUser'];
    console.log(this.username);
  }



}
