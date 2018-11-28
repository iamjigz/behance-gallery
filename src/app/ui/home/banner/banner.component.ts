import { Component, OnInit, Input } from '@angular/core';
import { Core } from '../../../core/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input('user')
  user: any;
  constructor(public core: Core) {}

  ngOnInit() {}
}
