import { Component, OnInit } from '@angular/core';
import { BehanceService, Project } from '../../core/behance.service';
import { Core } from '../../core/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public user_id: string;
  public project: any;
  public projects: any;
  public images: any;

  constructor(private behance: BehanceService, public core: Core) {
    this.user_id = this.behance.setUser();
  }

  getProjects() {
    this.behance.getProjects().subscribe(res => {
      this.projects = res.projects as Project[];
    });
  }

  ngOnInit() {
    this.getProjects();
  }
}
