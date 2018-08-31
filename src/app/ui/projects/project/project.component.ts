import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { BehanceService } from '../../../core/behance.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public project: any;
  images: any[];

  constructor(
    private route: ActivatedRoute,
    private behance: BehanceService,
    public meta: Meta,
    public title: Title
  ) {}

  getProject(id: number | string) {
    const animations = [
      'bounceIn',
      'fadeIn',
      'rollIn',
      'zoomInLeft',
      'rotateInDownRight',
      'slideInDown',
      'fadeInLeftBig',
      'bounceOutDown',
      'flipOutX',
      'jackInTheBox',
      'rubberBand'
    ];
    this.images = [];
    this.behance.getProject(id).subscribe(res => {
      this.project = res.project;
      this.project.modules.map(img => {
        if (img.type === 'image') {
          this.images.push({
            src: img.sizes.disp,
            animate: animations[Math.floor(Math.random() * animations.length)]
          });
        }
      });
      this.setMeta();
    });
  }

  setMeta() {
    this.meta.addTags([
      { name: 'title', content: this.project.name },
      {
        name: 'description',
        content: this.project.description
      },
      { name: 'image', content: this.project.covers.original },
      { name: 'author', content: 'Jigno Alfred V. Venezuela' },
      {
        name: 'keywords',
        content: this.project.fields.join(', ')
      }
    ]);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this.getProject(id);
  }
}
