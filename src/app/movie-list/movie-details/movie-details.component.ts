import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find, map } from 'rxjs';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  moviesList$: any | null = this.apiService.getMoviesList();

  selectedMovie: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const movieId = this.activatedRoute.snapshot.params['movie-id'];
    // if (movieId) {
    //   this.moviesList$
    //     .pipe(
    //       map((movies: any) => Object.values(movies)),
    //       map((moviesArray: any[]) =>
    //         moviesArray.find((a: any) => a.id == movieId)
    //       )
    //     )
    //     .subscribe((selectedMovie: any) => {
    //       this.selectedMovie = selectedMovie;
    //       console.log(this.selectedMovie);
    //     });
    // }
    if (movieId) {
      this.selectedMovie = this.moviesList$
        .pipe(find((movie: any) => movie.id === movieId))
        .subscribe((x: any) => console.log(x));
    }
    console.log(this.selectedMovie);
  }
}
