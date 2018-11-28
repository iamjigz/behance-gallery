import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { AppGlobals } from '../../../core/app.globals';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public name = '';
  public email = '';
  public subject = '';
  public message = '';

  constructor(
    public globals: AppGlobals,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    const body = new HttpParams()
      .set('form-name', 'contactForm')
      .append('name', this.name)
      .append('email', this.email)
      .append('subject', this.subject)
      .append('message', this.message);

    console.log(body.toString());
    this.http
      .post('/', body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .subscribe(res => console.log(res));
  }
}
