import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-project-menu',
  templateUrl: './project-menu.component.html',
  styleUrls: ['./project-menu.component.css']
})
export class ProjectMenuComponent implements OnInit {

  constructor() { }

  @ViewChild(ProjectsComponent) projectComponent: ProjectsComponent;

  ngOnInit(): void {
  }

  public createProject() {
    this.projectComponent.createProjects('bell19026', 'first project');
  }

}
