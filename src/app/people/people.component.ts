import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  terms:string="";
  trendingPeople:any[]=[];
  imgPrefx:string = "https://image.tmdb.org/t/p/w500";

  constructor(private _MoviesService:MoviesService, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  
  searchForm: FormGroup = new FormGroup({
    "term": new FormControl(null, [Validators.pattern(/^((?!(<|>)).)+$/)])
  })

  search(searchForm:FormGroup){
    if(searchForm.valid){
      this.terms = searchForm.controls.term.value;
    }
    else{
      this.toastr.error(`Error invalid input(<>)!`, "", { positionClass: 'toast-bottom-right', timeOut: 5000 });
    }
    
  }


  ngOnInit(): void {
    this.spinner.show();
    this._MoviesService.getTrending("people").subscribe((response)=>{
      this.trendingPeople = response.results;
      this.spinner.hide();
    },
    (error:any)=>{
      this.spinner.hide();
    }
    );
  }

}
