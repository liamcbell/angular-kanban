import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProjectServiceService } from '../../services/project-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Output() projectEvent: EventEmitter<any> = new EventEmitter;

  private currentProject: string;
  public allProjects: string[];
  constructor(private projectService: ProjectServiceService) { }

  ngOnInit(): void {
    this.getProjects('bell19026');
  }

  setProjectEvent() {
    return this.projectEvent.emit(this.currentProject);
  }

  getProjects(username: string) {
    this.projectService.getProjects(username).subscribe(success => {
      console.log(success);
      this.allProjects = success;
    });
  }

  createProjects(username: string, projectName: string) {
    this.projectService.createProject(username, projectName).subscribe(success => {
      console.log(success);
      this.getProjects(username);
    });
  }

}
