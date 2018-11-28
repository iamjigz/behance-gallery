import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { BehanceService, User } from '../../core/behance.service';
import { AppGlobals } from '../../core/app.globals';
import { Core } from '../../core/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: User;
  public newUser: User;

  constructor(
    private behance: BehanceService,
    public globals: AppGlobals,
    public core: Core,
    public meta: Meta,
    public title: Title
  ) {
    this.user = {
      first_name: 'Jigno Alfred',
      last_name: 'Venezuela',
      image: 'https://avatars1.githubusercontent.com/u/15794810?s=460&v=4',
      fields: ['Angular', 'JavaScript Cultist', 'Front-End Development'],
      occupation: 'Web Developer'
    };
  }

  getUser() {
    this.behance.getUser().subscribe(res => {
      this.user = res.user as User;
      this.setMeta(this.user);
    });
  }

  updateUser(user: string) {
    this.behance.setUser(user);
    this.behance.getUser().subscribe(res => {
      this.user = res.user as User;
      this.setMeta(this.user);
    });
  }

  setMeta(user: User) {
    this.meta.addTags(
      [
        { name: 'title', content: 'Behance Gallery' },
        {
          name: 'description',
          content: `Sample portfolio page that fetches data from the user's Behance API.`
        },
        { name: 'image', content: 'https://source.unsplash.com/n6jNHTg2C2w' },
        { name: 'author', content: 'Jigno Alfred V. Venezuela' },
        {
          name: 'keywords',
          content: 'angular seo, angular universal, photography, portfolio'
        }
      ],
      false
    );
  }

  ngOnInit() {
    this.getUser();
  }
}
