import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppGlobals } from '../../../core/app.globals';
import { BehanceService, User } from '../../../core/behance.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input('user')
  user: any;
  @Output() userChange = new EventEmitter();

  public username: string;
  public newUser = '';
  public alertMessage = '';

  constructor(private behance: BehanceService, private global: AppGlobals) {}

  ngOnInit() {
    this.username = this.global.user_id;
  }

  getUser(user: string) {
    this.alertMessage = '';
    this.behance.setUser(user);
    this.userChange.emit(user);
    this.user = this.behance.getUser(user).subscribe(
      res => {
        this.user = res.user as User;
        this.alertMessage = `Now showing ${user}'s profile and projects.`;
      },
      err => {
        this.alertMessage = `${user} was not found. Please try again.`;
        console.log(err);
      }
    );
  }
}
