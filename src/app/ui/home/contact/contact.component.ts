import { Component, OnInit } from '@angular/core';
import { AppGlobals } from '../../../core/app.globals';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(public globals: AppGlobals) {}

  ngOnInit() {}
}
