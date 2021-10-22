import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $(".sk-cube-grid").fadeOut(500, function () {
        $("#loading").fadeOut(500, function () {
          $("body").css({ "overflow-y": "auto" })
        })
      })
    })
  }

}
