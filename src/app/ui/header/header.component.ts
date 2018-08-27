import { Component, OnInit } from '@angular/core';
import { AppGlobals } from '../../core/app.globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public globals: AppGlobals) {}

  ngOnInit() {}
}
