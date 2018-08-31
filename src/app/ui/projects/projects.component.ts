import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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

  constructor(
    private behance: BehanceService,
    public core: Core,
    public meta: Meta,
    public title: Title
  ) {
    this.user_id = this.behance.setUser();
  }

  getProjects() {
    this.behance.getProjects().subscribe(res => {
      this.projects = res.projects as Project[];
      this.setMeta();
    });
  }

  setMeta() {
    this.meta.addTags([
      { name: 'author', content: 'Jigno Alfred V. Venezuel' },
      {
        name: 'keywords',
        content:
          'angular seo, angular universal, photography, portfolio, projects'
      },
      { name: 'image', content: 'https://source.unsplash.com/CewT9iFBcgE' },
      {
        name: 'description',
        content: `The profile and projects on this page are fetched from the user's Behance profile using the Behance API.`
      }
    ]);
  }

  ngOnInit() {
    this.getProjects();
  }
}
