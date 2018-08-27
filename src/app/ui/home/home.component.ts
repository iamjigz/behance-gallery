import { Component, OnInit } from '@angular/core';
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

  constructor(private behance: BehanceService, public globals: AppGlobals, public core: Core) { }

  getUser() {
    this.behance.getUser().subscribe(res => {
      this.user = res.user as User;
    });
  }

  ngOnInit() {
    this.getUser();
  }

}
