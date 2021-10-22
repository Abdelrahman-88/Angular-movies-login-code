import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
valid:boolean = false;
  contactForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(80)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    comment: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(100)])
  });

  submitContactForm(contactForm: FormGroup) {
    if (contactForm.valid) {
     this.valid = true;
     contactForm.reset()
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
