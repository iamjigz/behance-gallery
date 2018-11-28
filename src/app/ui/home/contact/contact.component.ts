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
      .append('name', this.contactForm.value.name)
      .append('email', this.contactForm.value.email)
      .append('subject', this.contactForm.value.subject)
      .append('message', this.contactForm.value.message);

    console.log(body.toString());
    this.http
      .post('/', body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .subscribe(res => console.log(res));

    $('#submitForm').on('click', function() {
      $('#contactForm').submit();
    });
  }
}
