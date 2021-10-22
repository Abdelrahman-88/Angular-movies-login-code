import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string = "";

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)])
  })
  constructor(public _AuthService: AuthService, public _Router: Router) { }

  submitLoginForm(loginForm: FormGroup) {
    if (loginForm.valid) {
      this._AuthService.login(loginForm.value).subscribe(
        (response) => {
          if (response.message == "success") {
            localStorage.setItem("userToken" , response.token);
            this._AuthService.saveUserData();
            this._Router.navigate(["home"]);
          }
          else {
            this.error = response.message;
          }
        }
      )
    }
  }

  ngOnInit(): void {
  }

}
