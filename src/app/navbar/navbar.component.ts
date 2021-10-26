import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token: object = {};
  isLogin: boolean = false;
  terms: any;
  constructor(private _AuthService: AuthService, private _Router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    let secOffcet = $(".navbar").offset().top;
    $(window).scroll(function () {
      let currentOffcet = $(window).scrollTop();

      if (currentOffcet > secOffcet + 50 && window.innerWidth > 976) {
        $(".navbar").css({ "background-color": "#131722d3" }).removeClass("py-3").addClass("py-2");
      }
      else if (currentOffcet <= secOffcet + 50 && window.innerWidth > 976) {
        $(".navbar").css({ "background-color": "transparent" }).removeClass("py-2").addClass("py-3");
      }
    });

    $(window).resize(function () {
      if (window.innerWidth <= 976) {
        $(".navbar").css({ "background-color": "#131722d3" });
      }
    })

    $(window).ready(function () {
      if (window.innerWidth <= 976) {
        $(".navbar").css({ "background-color": "#131722d3" });
      }
    })

    this._AuthService.userData.subscribe(() => {
      if (this._AuthService.userData.getValue() != null) {
        this.isLogin = true;
      }
      else {
        this.isLogin = false;
      }
    })
  }

  logOut() {
    this.token = {
      "token": localStorage.getItem("usertoken")
    }
    this._AuthService.logOut(this.token).subscribe((response) => {
      localStorage.removeItem("userToken");
      this._Router.navigate(["/login"]);
    })
  }

  searchForm: FormGroup = new FormGroup({
    "term": new FormControl(null, [Validators.pattern(/^((?!(<|>)).)+$/)])
  })

  search(searchForm:FormGroup){
    if(searchForm.valid){
      this.terms = searchForm.controls.term.value;
      this._Router.navigate([`/${this.terms.toLowerCase()}`]);
    }
    else{
      this.toastr.error(`Error invalid input(<>)!`, "", { positionClass: 'toast-bottom-right', timeOut: 5000 });
    }
    
  }
}
