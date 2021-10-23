import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  terms:string="";
  trendingPeople:any[]=[];
  imgPrefx:string = "https://image.tmdb.org/t/p/w500";

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTrending("people").subscribe((response)=>{
      this.trendingPeople = response.results;
    });
  }

}
