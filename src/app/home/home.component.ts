import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  terms: string="";
  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingPeople: any[] = [];
  imgPrefx: string = "https://image.tmdb.org/t/p/w500";
  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTrending("movie").subscribe((response) => {
      this.trendingMovies = response.results.splice(0, 10);
    })
    this._MoviesService.getTrending("tv").subscribe((response) => {
      this.trendingTv = response.results.splice(0, 10);
    })
    this._MoviesService.getTrending("people").subscribe((response) => {
      this.trendingPeople = response.results.splice(0, 10);
    })
  }
}
