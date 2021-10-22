import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  term: any;
  constructor(private _AuthService: AuthService, private _Router: Router) { }

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
    this._AuthService.logOut();
  }

  search() {
    this._Router.navigate([`/${this.term.toLowerCase()}`]);
    this.term = "";
  }

  searchEnter(e: any){
    if (e.key == "Enter") {
      this._Router.navigate([`/${this.term.toLowerCase()}`]);
      this.term = "";
    }
  }
}
