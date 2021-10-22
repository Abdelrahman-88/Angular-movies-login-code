import { MoviesService } from './../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
id:string="";
term:string="";
movieDetailes:any={};
imgPrefx:string = "https://image.tmdb.org/t/p/w500";
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this.term = this._ActivatedRoute.snapshot.params.term;
    this._MoviesService.getMovieDetails(this.id,this.term).subscribe((response)=>{
this.movieDetailes=response;
    })
  }

}
