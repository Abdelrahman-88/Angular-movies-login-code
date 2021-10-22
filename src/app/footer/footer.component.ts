import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let secOffcet = $(".footer").offset().top;
    $(window).scroll(function () {
      let currentOffcet = $(window).scrollTop();

      if (currentOffcet < secOffcet + 50) {
        $(".footer").slideUp(500);
      }
      else if (currentOffcet >= secOffcet + 50) {
        $(".footer").slideDown(500);
      }
    });
  }

}
