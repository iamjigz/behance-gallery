import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    const body = `form-name=contactForm&name=${
      this.contactForm.value.name
    }&email=${this.contactForm.value.email}&subject=${
      this.contactForm.value.subject
    }&message=${this.contactForm.value.message}`;

    this.http
      .post('/', body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .subscribe(res => console.log(res));
  }
}
