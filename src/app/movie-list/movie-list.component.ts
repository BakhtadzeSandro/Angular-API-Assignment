import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  moviesList$: any | null = this.apiService.getMoviesList()

  ngOnInit() {
  }

}
