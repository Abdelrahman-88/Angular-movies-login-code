import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string = "";

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(80)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)])
  })
  constructor(public _AuthService: AuthService, public _Router: Router) { }
  submitRegisterForm(registerForm: FormGroup) {
    if (registerForm.valid) {
      this._AuthService.register(registerForm.value).subscribe(
        (response) => {
          if (response.message == "success") {
            this._Router.navigate(["login"]);
          }
          else {
            this.error = response.errors.email.message;


          }
        }
      )
    }
  }



  ngOnInit(): void {

  }

}
